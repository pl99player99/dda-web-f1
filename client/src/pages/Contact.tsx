import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      <section className="pt-32 pb-20 bg-card/30 border-b border-border">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl mb-4">Entre em Contacto</h1>
            <p className="text-muted-foreground">
              Preencha o formulário abaixo e entraremos em contacto em breve.
            </p>
          </div>

          <div className="bg-background/50 border border-border rounded-lg p-8 mb-8">
            <ContactForm />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button className="btn-primary gap-2">
                Calcular Orçamento <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline">Saber Mais Sobre Nós</Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border text-center text-muted-foreground text-sm">
        <div className="container">
          <p>&copy; 2025 DDA-Web. Todos os direitos reservados.</p>
          <p className="mt-2">
            Transformando negócios com tecnologia e inovação.
          </p>
        </div>
      </footer>
    </div>
  );
}
