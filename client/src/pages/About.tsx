import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Users, Lightbulb, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import AnimatedStats from "@/components/AnimatedStats";

const aboutStats = [
  { numericValue: 50, suffix: "+", label: "Projetos", sub: "entregues" },
  { numericValue: 98, suffix: "%", label: "Satisfação", sub: "dos clientes" },
  { numericValue: 7, suffix: " dias", label: "Entrega", sub: "média" },
];

export default function About() {
  const values = [
    { icon: <Zap className="w-5 h-5" />, title: "Velocidade", desc: "Projetos prontos em dias, não semanas. Sem desculpas.", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" },
    { icon: <Target className="w-5 h-5" />, title: "Resultado", desc: "Cada decisão é pensada para gerar clientes e vendas.", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
    { icon: <Lightbulb className="w-5 h-5" />, title: "Inovação", desc: "Tecnologia moderna aplicada ao contexto angolano.", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
    { icon: <Users className="w-5 h-5" />, title: "Parceria", desc: "Não desaparecemos. Estamos cá antes, durante e depois.", color: "text-orange-400 bg-orange-400/10 border-orange-400/20" },
  ];

  const timeline = [
    { year: "2024", title: "Início", desc: "Nascemos com uma missão: tornar a presença digital acessível para empresas em Angola." },
    { year: "2024", title: "Primeiros projetos", desc: "5 projetos entregues com 100% de satisfação. A reputação começa aqui." },
    { year: "2025", title: "Expansão", desc: "Passámos de sites para soluções completas — sistemas, apps e automações." },
    { year: "2026", title: "Visão", desc: "Ser a referência em soluções digitais em Angola. 1000+ negócios transformados." },
  ];

  const whyUs = [
    { title: "Preços reais", desc: "Sem preços de agência internacional. Valores pensados para o mercado angolano." },
    { title: "Entrega garantida", desc: "Prazo definido antes de começar. Se dissemos 7 dias, são 7 dias." },
    { title: "Sem jargão técnico", desc: "Falamos a tua língua. Explicamos tudo de forma clara e simples." },
    { title: "Suporte real", desc: "Não desaparecemos após a entrega. Estamos disponíveis para o que for preciso." },
    { title: "Foco em Angola", desc: "Conhecemos o mercado, o público e o que funciona aqui." },
    { title: "Transparência total", desc: "Sabes exactamente o que pagas, o que inclui e quando é entregue." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-grid">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="pill-blue mb-6">Quem Somos</div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                Uma empresa angolana<br />
                <span className="text-gradient-warm">a sério.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Somos da DDA-Web. Criamos sites, sistemas, apps e automações para
                empresas em Angola. Rápidos, directos e focados em resultado.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/services">
                  <Button className="btn-primary gap-2 w-full sm:w-auto">
                    Ver Serviços <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-border hover:border-accent w-full sm:w-auto">
                    Falar Connosco
                  </Button>
                </Link>
              </div>
            </div>
            <div className="py-8 lg:py-0">
              <AnimatedStats stats={aboutStats} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-modern border-l-4 border-l-accent">
              <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <h2 className="font-display text-2xl mb-3">Missão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ajudar empresas angolanas a crescer com tecnologia — sites
                profissionais, sistemas eficientes e presença digital forte.
                Acreditamos que toda empresa merece isso, independentemente do tamanho.
              </p>
            </div>
            <div className="card-modern border-l-4 border-l-[#ff6b35]">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5 text-orange-400" />
              </div>
              <h2 className="font-display text-2xl mb-3">Visão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser a empresa de soluções digitais de referência em Angola.
                Conhecida por velocidade, qualidade e proximidade com o cliente.
                Queremos ajudar 1000+ negócios a transformar a presença digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-lg mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">Valores</p>
            <h2 className="font-display text-4xl">O que nos move</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={i} className="card-modern flex flex-col gap-3">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${v.color}`}>
                  {v.icon}
                </div>
                <h3 className="font-display text-lg">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container max-w-2xl">
          <div className="max-w-lg mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">Jornada</p>
            <h2 className="font-display text-4xl">Como chegámos aqui</h2>
          </div>
          <div>
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-5">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center font-display font-bold text-accent text-xs">
                    {item.year}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border my-2 min-h-[2rem]" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-lg mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">Diferenciais</p>
            <h2 className="font-display text-4xl">Por que a DDA-Web?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
            {whyUs.map((item, idx) => (
              <div key={idx} className="flex gap-3 p-5 rounded-xl border border-border hover:border-accent/40 transition-colors">
                <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stripe relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-accent/5 blur-[100px] rounded-full" />
        <div className="container relative text-center max-w-xl">
          <h2 className="font-display text-4xl mb-4">
            Vamos trabalhar<br />
            <span className="text-gradient-warm">juntos?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Conta-nos o teu projeto. Respondemos em menos de 2 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quote">
              <Button className="btn-primary gap-2 px-8 py-6 w-full sm:w-auto">
                Calcular Orçamento <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-border hover:border-accent gap-2 px-8 py-6 w-full sm:w-auto">
                Entrar em Contacto
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
