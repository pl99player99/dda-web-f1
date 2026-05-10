interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

interface JsonResponse {
  json(body: unknown): void;
}

interface VercelRequest {
  method?: string;
  body?: ContactRequestBody | null;
}

interface VercelResponse {
  setHeader(name: string, value: string | string[]): void;
  status(code: number): JsonResponse;
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

async function handleContactRequest(body: ContactRequestBody = {}) {
  if (!body.name || !body.email || !body.message) {
    return {
      status: 400,
      body: {
        success: false,
        error: "Campos obrigatórios ausentes: nome, email e mensagem.",
      },
    };
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

    return {
      status: 200,
      body: { success: true, confirmationSent },
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Erro ao enviar mensagem.";
    console.error("Failed to send contact emails:", error);

    return {
      status: 500,
      body: {
        success: false,
        error: errorMessage,
      },
    };
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({
      success: false,
      error: "Método não permitido. Use POST.",
    });
    return;
  }

  const result = await handleContactRequest(req.body ?? {});
  res.status(result.status).json(result.body);
}
