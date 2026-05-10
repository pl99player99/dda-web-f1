import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  Zap,
  Target,
  Users,
  Lightbulb,
  Globe,
  BriefcaseBusiness,
  Rocket,
  SlidersHorizontal,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Link } from "wouter";
import { blogArticles } from "@/data/blogArticles";

/**
 * DDA-Web Home Page
 * Design Philosophy: Modern & Technological
 * - Dark background (#0A0A0A) with electric blue accents (#007BFF)
 * - Asymmetric layout with generous whitespace
 * - Poppins for display, Inter for body
 * - Geometric elements and network patterns
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-grid">
        <div className="absolute inset-0 lg:hidden">
          <img
            src="/images/home-hero.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 bg-background/65 backdrop-blur-sm p-6 rounded-2xl border border-border/50 lg:bg-transparent lg:backdrop-blur-0 lg:p-0 lg:border-0">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Soluções Digitais em Angola
                </div>
                <h1 className="font-display text-5xl lg:text-6xl leading-tight">
                  Transformamos Ideias em{" "}
                  <span className="text-gradient-accent">
                    Resultados Digitais
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Criamos sites profissionais, sistemas web, automações e apps
                  sob medida — soluções modernas para empresas que querem
                  crescer com presença digital forte.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/quote">
                  <Button className="btn-primary gap-2">
                    Calcular Orçamento <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    className="border-border hover:border-accent"
                  >
                    Ver Portfólio
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="w-full max-w-xl relative rounded-2xl overflow-hidden border border-accent/30">
                <img
                  src="/images/home-hero.png"
                  alt="Equipa colaborando no desenvolvimento de um projeto digital"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-accent font-semibold text-lg">
                    Transformação Digital com Pessoas Reais
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Projetos pensados para resultados, não apenas aparência.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projetos Entregues", sub: "e crescendo" },
              { value: "98%", label: "Clientes Satisfeitos", sub: "taxa de aprovação" },
              { value: "7 dias", label: "Entrega Média", sub: "para sites" },
              { value: "3.2x", label: "ROI Médio", sub: "nos nossos projetos" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="font-display text-4xl text-accent mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <p className="font-medium text-sm mb-0.5">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Visual */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: "/images/home-proof-1.png",
                title: "Reuniões Estratégicas",
                text: "Planeamento com foco em metas reais do negócio.",
              },
              {
                image: "/images/home-proof-2.png",
                title: "Design e Conversão",
                text: "Layouts modernos pensados para vender e gerar contactos.",
              },
              {
                image: "/images/home-proof-3.png",
                title: "Resultados Medíveis",
                text: "Projetos com acompanhamento de desempenho e melhoria contínua.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="card-modern overflow-hidden p-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-display text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl mb-4">Nossos Pacotes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escolha o pacote ideal para seu negócio ou solicite uma solução
              personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Package 1 */}
            <Card className="card-modern">
              <div className="mb-4">
                <div className="mb-2 text-accent">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg">Presença Online</h3>
                <p className="text-xs text-muted-foreground">Para começar</p>
              </div>
              <div className="mb-4 pb-4 border-b border-border">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-2xl">35.000</span>
                  <span className="text-muted-foreground text-sm">Kz</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>1 página</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>WhatsApp integrado</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Responsivo</span>
                </li>
              </ul>
              <Link href="/services">
                <Button variant="outline" className="w-full">
                  Ver Detalhes
                </Button>
              </Link>
            </Card>

            {/* Package 2 */}
            <Card className="card-modern border-accent/50 ring-1 ring-accent/30">
              <div className="mb-4">
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                  Mais Popular
                </span>
                <div className="mb-2 mt-2 text-accent">
                  <BriefcaseBusiness className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg">Profissional</h3>
                <p className="text-xs text-muted-foreground">Empresa séria</p>
              </div>
              <div className="mb-4 pb-4 border-b border-border">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-2xl">70.000</span>
                  <span className="text-muted-foreground text-sm">Kz</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Até 5 páginas</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>SEO básico</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Formulário</span>
                </li>
              </ul>
              <Link href="/services">
                <Button className="btn-primary w-full">Ver Detalhes</Button>
              </Link>
            </Card>

            {/* Package 3 */}
            <Card className="card-modern">
              <div className="mb-4">
                <div className="mb-2 text-accent">
                  <Rocket className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg">Vendas & Captação</h3>
                <p className="text-xs text-muted-foreground">Gerar clientes</p>
              </div>
              <div className="mb-4 pb-4 border-b border-border">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-2xl">120.000</span>
                  <span className="text-muted-foreground text-sm">Kz</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Landing page</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Copywriting</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Otimizado</span>
                </li>
              </ul>
              <Link href="/services">
                <Button variant="outline" className="w-full">
                  Ver Detalhes
                </Button>
              </Link>
            </Card>

            {/* Package 4 */}
            <Card className="card-modern">
              <div className="mb-4">
                <div className="mb-2 text-accent">
                  <SlidersHorizontal className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg">Personalizado</h3>
                <p className="text-xs text-muted-foreground">Sua solução</p>
              </div>
              <div className="mb-4 pb-4 border-b border-border">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-2xl">A partir de</span>
                </div>
                <p className="text-sm text-accent">20.000 Kz</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Escopo definido</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Orçamento fechado</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Flexível</span>
                </li>
              </ul>
              <Link href="/quote">
                <Button className="btn-primary w-full">Calcular</Button>
              </Link>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button variant="outline" className="gap-2">
                Ver Todos os Pacotes <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl mb-4">
              Por Que Escolher{" "}
              <span className="text-gradient-accent">DDA-Web?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Não somos apenas uma agência. Somos parceiros no seu crescimento digital.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Entrega em dias, não meses",
                desc: "Sites em 3–7 dias úteis. Sistemas e apps com prazos definidos e cumpridos. Sem surpresas.",
                highlight: "7 dias",
              },
              {
                icon: <Target className="w-5 h-5" />,
                title: "Foco em resultado, não só aparência",
                desc: "Cada projeto é desenhado para gerar clientes, vendas e credibilidade — não apenas para ficar bonito.",
                highlight: "ROI",
              },
              {
                icon: <Lightbulb className="w-5 h-5" />,
                title: "Tecnologia moderna com IA",
                desc: "Usamos as ferramentas mais avançadas do mercado para entregar mais rápido e com mais qualidade.",
                highlight: "IA",
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "Suporte real após entrega",
                desc: "Não desaparecemos. Estamos disponíveis para dúvidas, ajustes e melhorias depois da entrega.",
                highlight: "Suporte",
              },
            ].map((item, idx) => (
              <Card key={idx} className="card-modern flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl mb-4">Projetos Recentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Veja alguns dos projetos que desenvolvemos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                id: 1,
                title: "Restaurante Sabor da Terra",
                category: "Site Profissional",
                image: "/images/project-1.png",
              },
              {
                id: 4,
                title: "Sistema de Gestão de Stock Kwanza",
                category: "Sistema Web",
                image: "/images/blog-4.png",
              },
              {
                id: 5,
                title: "App de Agendamentos VitaCare",
                category: "Aplicativo Mobile",
                image: "/images/blog-5.png",
              },
            ].map((project, idx) => (
              <Link key={idx} href={`/portfolio?project=${project.id}`}>
                <Card className="card-modern overflow-hidden p-0 cursor-pointer hover:border-accent transition-all">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-6">
                    <p className="text-xs text-accent mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-semibold">{project.title}</h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/portfolio">
              <Button variant="outline" className="gap-2">
                Ver Portfólio Completo <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl mb-4">
              Últimos Artigos do Blog
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fique atualizado com as últimas tendências em web design,
              marketing digital e tecnologia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {blogArticles.slice(0, 3).map(article => (
              <Link key={article.id} href={`/blog/${article.id}`}>
                <Card className="hover:border-accent transition-all group overflow-hidden p-0 cursor-pointer">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-6">
                    <p className="text-xs text-accent mb-2">
                      {article.category}
                    </p>
                    <h3 className="font-semibold mb-3 group-hover:text-accent transition">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog">
              <Button variant="outline" className="gap-2">
                Ver Todos os Artigos <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/30 border-t border-border">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl mb-4">
              Entre em Contacto Conosco
            </h2>
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
