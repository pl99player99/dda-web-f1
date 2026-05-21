import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Users, Lightbulb } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { blogArticles } from "@/data/blogArticles";
import AnimatedStats from "@/components/AnimatedStats";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/home-hero.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center hero-img"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        </div>

        {/* Glow blobs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-orange-500/6 blur-[100px] pointer-events-none" />

        <div className="container relative z-10 pt-28 pb-16">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="pill-blue mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
              Angola · Soluções Digitais
            </div>

            {/* Headline — asymmetric sizing for human feel */}
            <h1 className="font-display leading-[1.04] mb-6">
              <span className="text-4xl sm:text-5xl lg:text-6xl block text-foreground/70">
                O seu negócio merece
              </span>
              <span className="text-5xl sm:text-6xl lg:text-8xl block mt-1">
                estar online
              </span>
              <span className="text-4xl sm:text-5xl lg:text-6xl block mt-1">
                do jeito{" "}
                <span className="text-gradient-warm">certo.</span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Criamos sites, sistemas e apps para empresas angolanas que querem
              crescer. Rápido, profissional e sem complicação.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/quote">
                <Button className="btn-primary gap-2 text-base px-8 py-6 w-full sm:w-auto">
                  Quero um Orçamento <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-border hover:border-accent text-base px-8 py-6 w-full sm:w-auto"
                >
                  Ver Projetos
                </Button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8/30">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["🧑🏾‍💼","👩🏽‍💻","👨🏿‍💼","👩🏾‍🔬"].map((e,i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-card border-2 border-background flex items-center justify-center text-base">
                      {e}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">{[1,2,3,4,5].map(i=><span key={i} className="text-yellow-400 text-sm">★</span>)}</div>
                  <p className="text-xs text-muted-foreground"><span className="text-foreground font-semibold">50+ clientes</span> satisfeitos</p>
                </div>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="text-xs text-muted-foreground">
                <span className="text-foreground font-semibold">7 dias</span> de entrega média
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="text-xs text-muted-foreground">
                <span className="text-foreground font-semibold">Luanda,</span> Angola
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 animate-bounce">
          <div className="w-5 h-8 rounded-full border border-foreground/30 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-foreground/60" />
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────── */}
      <section className="py-14">
        <div className="container">
          <AnimatedStats />
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────── */}
      <section className="py-24">
        <div className="container">
          {/* Header — left-aligned, not centred */}
          <div className="max-w-xl mb-14">
            <p className="pill-warm mb-4">O que fazemos</p>
            <h2 className="font-display text-4xl lg:text-5xl mb-4">
              Tudo o que o seu negócio precisa
              <span className="text-gradient-accent"> no digital</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Do site simples ao sistema complexo — entregamos o que faz sentido
              para o seu negócio crescer.
            </p>
          </div>

          {/* Services grid — asymmetric */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large card */}
            <div className="md:col-span-2 card-modern bg-gradient-to-br from-card to-card/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center mb-4 text-accent text-2xl">
                  🌐
                </div>
                <h3 className="font-display text-2xl mb-2">Sites Profissionais</h3>
                <p className="text-muted-foreground mb-6">
                  Desde uma página simples até um site completo com múltiplas secções, formulários, galeria e integração com WhatsApp. Entrega em 3–7 dias.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Presença Online","Negócio Profissional","Vendas & Captação"].map(t => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/15">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-display text-3xl">35.000 <span className="text-muted-foreground text-lg font-normal">Kz</span></span>
                  <Link href="/services">
                    <Button className="btn-primary gap-2">Ver Pacotes <ArrowRight className="w-4 h-4" /></Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Stack of 2 small cards */}
            <div className="flex flex-col gap-5">
              <div className="card-modern relative overflow-hidden group flex-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all duration-500" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center mb-3 text-orange-400 text-xl">⚙️</div>
                  <h3 className="font-display text-lg mb-1">Sistemas Web</h3>
                  <p className="text-sm text-muted-foreground mb-4">CRM, ERP, gestão interna, dashboards. Criados à medida do negócio.</p>
                  <Link href="/services" className="text-sm text-accent hover:underline flex items-center gap-1">
                    Saber mais <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
              <div className="card-modern relative overflow-hidden group flex-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all duration-500" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center mb-3 text-purple-400 text-xl">📱</div>
                  <h3 className="font-display text-lg mb-1">Apps Mobile</h3>
                  <p className="text-sm text-muted-foreground mb-4">Android e iOS. Agendamentos, e-commerce, plataformas sob medida.</p>
                  <Link href="/services" className="text-sm text-accent hover:underline flex items-center gap-1">
                    Saber mais <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section className="py-24 bg-grid">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Processo</p>
            <h2 className="font-display text-4xl lg:text-5xl mb-4">
              Simples como deve ser
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Sem reuniões intermináveis. Sem processos complicados. Do contacto à entrega em dias.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[13%] right-[13%] h-px">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            {[
              { step:"01", emoji:"💬", title:"Fala connosco", desc:"WhatsApp ou formulário. Conta-nos o projeto em 2 frases." },
              { step:"02", emoji:"📋", title:"Definimos o escopo", desc:"Objetivos, estilo, prazo e preço. Tudo claro antes de começar." },
              { step:"03", emoji:"⚡", title:"Desenvolvemos", desc:"A equipa trabalha. Tu vês o progresso. Sem surpresas." },
              { step:"04", emoji:"🚀", title:"Entregamos", desc:"Revisão final, ajustes e publicação. Pronto a gerar clientes." },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-card border border-border flex flex-col items-center justify-center mb-4 relative z-10 shadow-sm">
                  <span className="text-2xl">{s.emoji}</span>
                  <span className="text-xs text-accent font-bold mt-0.5">{s.step}</span>
                </div>
                <h3 className="font-display text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            <Link href="/contact">
              <Button className="btn-warm gap-2 text-base px-8 py-6">
                Começar o Meu Projeto <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────── */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — text */}
            <div>
              <p className="pill-blue mb-4">Por que escolher-nos</p>
              <h2 className="font-display text-4xl lg:text-5xl mb-6">
                Não somos uma agência.<br />
                Somos o teu<br />
                <span className="text-gradient-warm">parceiro digital.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Conhecemos Angola. Sabemos o que funciona aqui. E estamos presentes
                antes, durante e depois da entrega.
              </p>
              <Link href="/about">
                <Button variant="outline" className="gap-2 border-border hover:border-accent">
                  Conhecer a Equipa <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Right — feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon:<Zap className="w-5 h-5" />, title:"7 dias de entrega", desc:"Sites prontos em menos de uma semana. Garantido.", color:"text-yellow-400", bg:"bg-yellow-400/10 border-yellow-400/20" },
                { icon:<Target className="w-5 h-5" />, title:"Focados em resultado", desc:"Cada detalhe pensado para gerar clientes, não só aparecer bonito.", color:"text-blue-400", bg:"bg-blue-400/10 border-blue-400/20" },
                { icon:<Lightbulb className="w-5 h-5" />, title:"Tecnologia moderna", desc:"Ferramentas do mercado global aplicadas ao contexto angolano.", color:"text-purple-400", bg:"bg-purple-400/10 border-purple-400/20" },
                { icon:<Users className="w-5 h-5" />, title:"Suporte após entrega", desc:"Não desaparecemos. Estamos cá para o que for preciso.", color:"text-orange-400", bg:"bg-orange-400/10 border-orange-400/20" },
              ].map((f, i) => (
                <div key={i} className="card-modern flex flex-col gap-3">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${f.bg} ${f.color}`}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">Clientes</p>
            <h2 className="font-display text-4xl lg:text-5xl">
              Quem já deu<br />o próximo passo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name:"Maria João", role:"Restaurante Sabor da Terra",
                text:"Em menos de uma semana o site estava online. As reservas pelo WhatsApp aumentaram logo no primeiro mês.",
                tag:"Site Profissional"
              },
              {
                name:"Carlos Mendes", role:"Consultoria JM",
                text:"O custo por lead caiu a metade e o ROI foi positivo em duas semanas. Valeu muito o investimento.",
                tag:"Landing Page", highlight:true
              },
              {
                name:"Ana Luísa", role:"Salão Estilo",
                text:"Profissionais, rápidos e com ótimo gosto. O site ficou exactamente como eu queria.",
                tag:"Presença Online"
              },
            ].map((t,i) => (
              <div key={i} className={`card-modern flex flex-col gap-4 ${t.highlight ? "border-accent/40 ring-1 ring-accent/20" : ""}`}>
                <div className="flex items-start justify-between">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s=><span key={s} className="text-yellow-400 text-sm">★</span>)}
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/15">{t.tag}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed flex-grow italic">
                  "{t.text}"
                </p>
                <div className="pt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ────────────────────────── */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">Portfólio</p>
              <h2 className="font-display text-4xl">Projetos recentes</h2>
            </div>
            <Link href="/portfolio">
              <Button variant="outline" className="gap-2 border-border hover:border-accent flex-shrink-0">
                Ver Todos <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { id:1, title:"Restaurante Sabor da Terra", cat:"Site Profissional", image:"/images/project-1.png" },
              { id:4, title:"Sistema de Gestão Kwanza", cat:"Sistema Web", image:"/images/blog-4.png" },
              { id:5, title:"App VitaCare", cat:"App Mobile", image:"/images/blog-5.png" },
            ].map((p, i) => (
              <Link key={i} href={`/portfolio?project=${p.id}`}>
                <div className="card-modern overflow-hidden p-0 cursor-pointer group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-accent/90 text-white font-medium">{p.cat}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold group-hover:text-accent transition">{p.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ─────────────────────────────── */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">Blog</p>
              <h2 className="font-display text-4xl">Últimos artigos</h2>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="gap-2 border-border hover:border-accent flex-shrink-0">
                Ver Todos <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {blogArticles.slice(0,3).map(a => (
              <Link key={a.id} href={`/blog/${a.id}`}>
                <div className="card-modern overflow-hidden p-0 cursor-pointer group h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <img src={a.image} alt={a.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-accent border border-accent/20">{a.category}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-semibold mb-2 group-hover:text-accent transition leading-snug">{a.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">{a.excerpt}</p>
                    <p className="text-xs text-muted-foreground mt-3">{a.readTime} min de leitura</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────── */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-stripe" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/6 blur-[120px] rounded-full" />
        <div className="container relative z-10 text-center max-w-2xl">
          <h2 className="font-display text-4xl lg:text-6xl mb-6">
            Pronto para dar o<br />
            <span className="text-gradient-mixed">próximo passo?</span>
          </h2>
          <p className="text-muted-foreground text-xl mb-10">
            Orçamento gratuito. Sem compromisso. Resposta em menos de 2 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button className="btn-primary gap-2 text-base sm:text-lg px-7 sm:px-10 py-5 sm:py-7 w-full sm:w-auto">
                Calcular Orçamento <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="https://wa.me/244930723070?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20DDA-Web." target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 text-base sm:text-lg px-7 sm:px-10 py-5 sm:py-7 border-border hover:border-accent w-full sm:w-auto">
                💬 Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
