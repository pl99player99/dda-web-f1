import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "WhatsApp",
      value: "+244 930 723 070",
      sub: "Resposta em minutos",
      href: "https://wa.me/244930723070?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20DDA-Web.",
      color: "text-green-400 bg-green-400/10 border-green-400/20",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "dinheirodigitalangola@gmail.com",
      sub: "Resposta em até 24h",
      href: "mailto:dinheirodigitalangola@gmail.com",
      color: "text-accent bg-accent/10 border-accent/20",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Localização",
      value: "Luanda, Angola",
      sub: "Presencial mediante agendamento",
      href: null,
      color: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Horário",
      value: "Seg – Sex, 8h – 18h",
      sub: "Sábados para urgências",
      href: null,
      color: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-grid">
        <div className="container max-w-2xl">
          <Reveal>
          <div className="pill-blue mb-6">Fale Connosco</div>
          <h1 className="font-display text-4xl sm:text-5xl mb-4">
            Vamos conversar<br />
            <span className="text-gradient-warm">sobre o seu projeto.</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Sem compromisso. Respondemos a todas as mensagens.
          </p>
                  </Reveal>
</div>
      </section>

      {/* Contact info cards */}
      <section className="py-16">
        <div className="container">
          <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
            {contactInfo.map((item, idx) => (
              <div key={idx} className="card-modern flex flex-col gap-3">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm mb-0.5">{item.title}</p>
                  {item.href ? (
                    <a href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-accent text-xs hover:underline block mb-0.5 break-all">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-xs font-medium mb-0.5">{item.value}</p>
                  )}
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form + Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl">
            <div>
              <h2 className="font-display text-2xl mb-2">Envie uma mensagem</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Preencha o formulário e entraremos em contacto em breve.
              </p>
              <div className="card-modern">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6 lg:pt-14">
              <div>
                <h2 className="font-display text-2xl mb-2">Prefere falar directamente?</h2>
                <p className="text-muted-foreground text-sm mb-5">
                  O WhatsApp é mais rápido. Descreva o projeto e respondemos em minutos.
                </p>
                <a href="https://wa.me/244930723070?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20DDA-Web."
                  target="_blank" rel="noopener noreferrer">
                  <Button className="btn-primary gap-2 w-full sm:w-auto">
                    <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
                  </Button>
                </a>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-1 text-sm">Quer calcular um orçamento?</h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Use a calculadora interativa para ter uma estimativa em 2 minutos.
                </p>
                <Link href="/quote">
                  <Button variant="outline" className="gap-2 border-border hover:border-accent w-full sm:w-auto text-sm">
                    Calcular Orçamento <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-1 text-sm">Primeira vez aqui?</h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Veja os projetos que já entregámos antes de entrar em contacto.
                </p>
                <Link href="/portfolio">
                  <Button variant="outline" className="gap-2 border-border hover:border-accent w-full sm:w-auto text-sm">
                    Ver Portfólio <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
                  </Reveal>
</div>
      </section>

      <Footer />
    </div>
  );
}
