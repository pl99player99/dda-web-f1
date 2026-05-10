import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Target, Users, Lightbulb } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "wouter";

/**
 * DDA-Web About Page
 * Design Philosophy: Modern & Technological
 * - Company story and values
 * - Team and mission
 * - Why choose DDA-Web
 */

export default function About() {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Velocidade",
      description:
        "Entrega rápida sem comprometer a qualidade. Seus projetos prontos em dias, não semanas.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Foco no Cliente",
      description:
        "Sua satisfação é nossa prioridade. Trabalhamos para resolver seus problemas, não apenas criar sites.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação",
      description:
        "Usamos as tecnologias mais modernas e IA para criar soluções à frente do mercado.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Parceria",
      description:
        "Não somos apenas prestadores de serviço. Somos parceiros no seu crescimento digital.",
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Nascimento da DDA-Web",
      description:
        "Começamos com uma visão clara: tornar a presença digital acessível e profissional para empresas em Angola.",
    },
    {
      year: "2024",
      title: "Primeiros Clientes",
      description:
        "Entregamos os primeiros 5 projetos com 100% de satisfação. Começamos a construir reputação.",
    },
    {
      year: "2025",
      title: "Expansão e Inovação",
      description:
        "Integramos IA em nosso processo. Agora criamos sites 3x mais rápido mantendo qualidade premium.",
    },
    {
      year: "2025",
      title: "Visão Futura",
      description:
        "Objetivo: ser a agência digital número 1 em Angola. Ajudando 1000+ negócios a crescer online.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <h1 className="font-display text-5xl mb-6">Sobre a DDA-Web</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Somos uma agência de web design focada em transformar a presença
            digital de empresas em Angola. Nascemos com uma missão clara: tornar
            a tecnologia acessível, rápida e eficiente.
          </p>
          <div className="grid grid-cols-3 gap-6 py-8 border-y border-border">
            <div>
              <div className="font-display text-3xl text-accent mb-2">50+</div>
              <p className="text-sm text-muted-foreground">
                Projetos Entregues
              </p>
            </div>
            <div>
              <div className="font-display text-3xl text-accent mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Satisfação</p>
            </div>
            <div>
              <div className="font-display text-3xl text-accent mb-2">
                7 dias
              </div>
              <p className="text-sm text-muted-foreground">Entrega Média</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl mb-4">Nossa Missão</h2>
              <p className="text-muted-foreground mb-4">
                Criar soluções digitais de alta qualidade que capacitem empresas
                angolanas a crescer, vender mais e construir uma presença online
                profissional e confiável.
              </p>
              <p className="text-muted-foreground">
                Acreditamos que toda empresa, independentemente do tamanho,
                merece um site profissional que a represente bem e gere
                resultados reais.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl mb-4">Nossa Visão</h2>
              <p className="text-muted-foreground mb-4">
                Ser a agência digital de referência em Angola, conhecida por
                velocidade, qualidade e satisfação do cliente.
              </p>
              <p className="text-muted-foreground">
                Queremos ajudar 1000+ negócios a transformar sua presença
                digital e alcançar seus objetivos de crescimento através da
                tecnologia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-display text-4xl mb-12 text-center">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card
                key={idx}
                className="card-modern flex flex-col items-center text-center"
              >
                <div className="text-accent mb-4">{value.icon}</div>
                <h3 className="font-display text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="container max-w-3xl">
          <h2 className="font-display text-4xl mb-12 text-center">
            Nossa Jornada
          </h2>
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center font-display font-bold text-accent">
                    {idx + 1}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-accent to-transparent mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-xl mb-1">{item.year}</h3>
                  <h4 className="font-semibold text-accent mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="font-display text-4xl mb-12 text-center">
            Por Que Escolher DDA-Web?
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "IA + Humano",
                description:
                  "Usamos inteligência artificial para acelerar o processo, mas sempre com revisão humana para garantir qualidade.",
              },
              {
                title: "Preços Acessíveis",
                description:
                  "Oferecemos soluções profissionais a preços justos, sem sacrificar qualidade ou funcionalidade.",
              },
              {
                title: "Entrega Rápida",
                description:
                  "Seus projetos prontos em dias. Começamos assim que você aprova o escopo.",
              },
              {
                title: "Suporte Pós-Entrega",
                description:
                  "Não desaparecemos após a entrega. Estamos aqui para ajudar com dúvidas e melhorias.",
              },
              {
                title: "Foco em Resultados",
                description:
                  "Não criamos apenas sites bonitos. Criamos sites que geram clientes e vendas.",
              },
              {
                title: "Transparência Total",
                description:
                  "Você sabe exatamente o que está pagando, o que está incluído e quando será entregue.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card-modern">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30 border-t border-border">
        <div className="container text-center">
          <h2 className="font-display text-4xl mb-6">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Se você acredita em qualidade, velocidade e satisfação do cliente,
            vamos ser um ótimo time.
          </p>
          <Link href="/services">
            <Button className="btn-primary gap-2 text-lg px-8 py-6">
              Ver Nossos Serviços <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
