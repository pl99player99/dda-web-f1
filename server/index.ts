import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function getOptionalEnv(name: string) {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

async function sendEmail(params: {
  serviceId: string;
  templateId: string;
  publicKey: string;
  privateKey?: string;
  templateParams: Record<string, string>;
}) {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: params.serviceId,
      template_id: params.templateId,
      user_id: params.publicKey,
      accessToken: params.privateKey,
      template_params: params.templateParams,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    if (
      errorText.includes("strict mode") &&
      errorText.includes("no private key was passed")
    ) {
      throw new Error(
        "EmailJS strict mode está ativo. Defina EMAILJS_PRIVATE_KEY no servidor ou desative strict mode no EmailJS."
      );
    }
    throw new Error(`EmailJS request failed: ${response.status} ${errorText}`);
  }
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  app.post("/api/contact", async (req, res) => {
    const body: ContactRequestBody = req.body ?? {};

    if (!body.name || !body.email || !body.message) {
      res.status(400).json({
        success: false,
        error: "Campos obrigatórios ausentes: nome, email e mensagem.",
      });
      return;
    }

    try {
      const serviceId = getRequiredEnv("EMAILJS_SERVICE_ID");
      const templateIdAdmin = getRequiredEnv("EMAILJS_TEMPLATE_ID_ADMIN");
      const publicKey = getRequiredEnv("EMAILJS_PUBLIC_KEY");
      const privateKey = getOptionalEnv("EMAILJS_PRIVATE_KEY");
      const templateIdClient = getOptionalEnv("EMAILJS_TEMPLATE_ID_CLIENT");

      const templateParams = {
        from_name: body.name,
        from_email: body.email,
        phone: body.phone || "Não fornecido",
        company: body.company || "Não fornecido",
        message: body.message,
      };

      await sendEmail({
        serviceId,
        templateId: templateIdAdmin,
        publicKey,
        privateKey,
        templateParams,
      });

      let confirmationSent = false;
      if (templateIdClient) {
        try {
          await sendEmail({
            serviceId,
            templateId: templateIdClient,
            publicKey,
            privateKey,
            templateParams,
          });
          confirmationSent = true;
        } catch (error) {
          console.error("Failed to send confirmation email:", error);
        }
      }

      res.json({ success: true, confirmationSent });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro ao enviar mensagem.";
      console.error("Failed to send contact emails:", error);
      res.status(500).json({
        success: false,
        error: errorMessage,
      });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
