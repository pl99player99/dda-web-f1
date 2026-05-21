import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Target, Users, Lightbulb, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import AnimatedStats from "@/components/AnimatedStats";

const aboutStats = [
  { numericValue: 50, suffix: "+", label: "Projetos Entregues", sub: "e crescendo" },
  { numericValue: 98, suffix: "%", label: "Satisfação", sub: "dos clientes" },
  { numericValue: 7, suffix: " dias", label: "Entrega Média", sub: "para sites" },
];

export default function About() {
  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Velocidade",
      description: "Entrega rápida sem comprometer qualidade. Projetos prontos em dias, não semanas.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Foco no Cliente",
      description: "Trabalhamos para resolver problemas reais, não apenas criar sites bonitos.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Inovação",
      description: "Usamos tecnologias modernas e IA para criar soluções à frente do mercado.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Parceria",
      description: "Não somos prestadores de serviço. Somos parceiros no seu crescimento digital.",
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Nascimento da DDA-Web",
      description: "Começamos com uma visão clara: tornar a presença digital acessível e profissional para empresas em Angola.",
    },
    {
      year: "2024",
      title: "Primeiros Clientes",
      description: "Entregamos os primeiros 5 projetos com 100% de satisfação. Começamos a construir reputação.",
    },
    {
      year: "2025",
      title: "Expansão e Inovação",
      description: "Integramos IA no nosso processo e expandimos para sistemas web, apps mobile e automações.",
    },
    {
      year: "2026",
      title: "Visão Futura",
      description: "Objetivo: ser a empresa de soluções digitais de referência em Angola, ajudando 1000+ negócios a crescer.",
    },
  ];

  const whyUs = [
    { title: "IA + Humano", desc: "Aceleramos com IA, mas garantimos qualidade com revisão humana em cada entrega." },
    { title: "Preços Justos", desc: "Soluções profissionais a preços acessíveis para o mercado angolano." },
    { title: "Entrega Rápida", desc: "Projetos prontos em dias. Começamos assim que approvas o escopo." },
    { title: "Suporte Real", desc: "Não desaparecemos. Estamos disponíveis para dúvidas e melhorias após entrega." },
    { title: "Foco em Resultados", desc: "Cada decisão de design é pensada para gerar clientes e vendas." },
    { title: "Transparência Total", desc: "Sabes exatamente o que pagas, o que inclui e quando será entregue." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-grid">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold tracking-wide mb-3 text-sm uppercase">
                Quem Somos
              </p>
              <h1 className="font-display text-5xl lg:text-6xl leading-tight mb-6">
                Sobre a{" "}
                <span className="text-gradient-accent">DDA-Web</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Somos uma empresa de soluções digitais focada em transformar a
                presença online de empresas em Angola. Criamos sites, sistemas
                web, apps, automações e bases de dados sob medida — tornando a
                tecnologia acessível, rápida e eficiente.
              </p>
              <div className="flex gap-4">
                <Link href="/services">
                  <Button className="btn-primary gap-2">
                    Ver Serviços <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Falar Connosco</Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <AnimatedStats stats={aboutStats} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-modern border-l-4 border-l-accent">
              <div className="w-10 h-10 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <h2 className="font-display text-2xl mb-3">Nossa Missão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Criar soluções digitais de alta qualidade que capacitem empresas
                angolanas a crescer, vender mais e operar melhor com tecnologia.
                Acreditamos que toda empresa merece presença digital forte e
                sistemas eficientes que gerem resultados reais.
              </p>
            </Card>
            <Card className="card-modern border-l-4 border-l-accent">
              <div className="w-10 h-10 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5 text-accent" />
              </div>
              <h2 className="font-display text-2xl mb-3">Nossa Visão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser a empresa de soluções digitais de referência em Angola,
                conhecida por velocidade, qualidade e satisfação do cliente.
                Queremos ajudar 1000+ negócios a transformar a sua presença
                digital e alcançar os seus objetivos de crescimento.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold tracking-wide mb-3 text-sm uppercase">O Que Nos Move</p>
            <h2 className="font-display text-4xl mb-4">
              Nossos <span className="text-gradient-accent">Valores</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="card-modern text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold tracking-wide mb-3 text-sm uppercase">Evolução</p>
            <h2 className="font-display text-4xl mb-4">
              Nossa <span className="text-gradient-accent">Jornada</span>
            </h2>
          </div>
          <div className="space-y-0">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/15 border-2 border-accent flex items-center justify-center font-display font-bold text-accent text-sm flex-shrink-0">
                    {item.year.slice(2)}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-accent/40 to-transparent my-2 min-h-[3rem]" />
                  )}
                </div>
                <div className="pb-10">
                  <p className="text-xs text-accent font-bold tracking-widest mb-1">{item.year}</p>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold tracking-wide mb-3 text-sm uppercase">Diferenciais</p>
            <h2 className="font-display text-4xl mb-4">
              Por Que Escolher{" "}
              <span className="text-gradient-accent">DDA-Web?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {whyUs.map((item, idx) => (
              <div key={idx} className="flex gap-3 p-5 rounded-xl border border-border hover:border-accent/40 transition-colors">
                <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-4xl mb-4">
            Vamos Trabalhar <span className="text-gradient-accent">Juntos?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Se acreditas em qualidade, velocidade e resultados, vamos ser um ótimo parceiro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button className="btn-primary gap-2 text-lg px-8 py-6">
                Ver Nossos Serviços <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="gap-2 text-lg px-8 py-6">
                Entrar em Contacto <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
