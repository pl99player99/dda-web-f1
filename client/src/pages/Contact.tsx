import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+244 930 723 070",
      sub: "Resposta rápida, geralmente em minutos",
      href: "https://wa.me/244930723070?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20DDA-Web.",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "dinheirodigitalangola@gmail.com",
      sub: "Respondemos em até 24 horas",
      href: "mailto:dinheirodigitalangola@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      value: "Luanda, Angola",
      sub: "Atendimento presencial mediante agendamento",
      href: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      value: "Seg – Sex, 08h – 18h",
      sub: "Sábados disponíveis para urgências",
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container text-center max-w-2xl">
          <p className="text-accent font-semibold tracking-wide mb-3 text-sm uppercase">
            Fale Connosco
          </p>
          <h1 className="font-display text-5xl mb-4">Entre em Contacto</h1>
          <p className="text-muted-foreground text-lg">
            Tem um projeto em mente? Quer saber mais sobre os nossos serviços?
            Estamos prontos para ajudar.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, idx) => (
              <Card key={idx} className="card-modern text-center">
                <div className="text-accent mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-accent font-medium hover:underline block mb-1"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-accent font-medium mb-1">{item.value}</p>
                )}
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </Card>
            ))}
          </div>

          {/* Form + Side CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-3xl mb-2">Envie uma Mensagem</h2>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário e entraremos em contacto em breve.
              </p>
              <div className="bg-card/50 border border-border rounded-xl p-8">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6 lg:pt-16">
              <div>
                <h2 className="font-display text-3xl mb-2">
                  Prefere Falar Diretamente?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Para respostas rápidas, o WhatsApp é sempre a melhor opção.
                  Descreva o seu projeto e respondemos em minutos.
                </p>
                <a
                  href="https://wa.me/244930723070?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20DDA-Web."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-primary gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-2">
                  Quer calcular um orçamento?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Use a nossa calculadora interativa para ter uma estimativa
                  instantânea do seu projeto.
                </p>
                <Link href="/quote">
                  <Button variant="outline" className="gap-2">
                    Calcular Orçamento <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-2">Primeira vez aqui?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Veja os nossos projetos e perceba o tipo de trabalho que
                  entregamos antes de entrar em contacto.
                </p>
                <Link href="/portfolio">
                  <Button variant="outline" className="gap-2">
                    Ver Portfólio <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
