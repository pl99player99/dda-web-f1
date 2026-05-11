import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedStats from "@/components/AnimatedStats";

/**
 * DDA-Web Portfolio Page
 * Design Philosophy: Modern & Technological
 * - Showcase of fictional projects
 * - Case studies with results
 * - Interactive portfolio gallery
 */

export default function Portfolio() {
  const initialProject = useMemo(() => {
    const value = new URLSearchParams(window.location.search).get("project");
    const parsed = value ? Number(value) : null;
    return Number.isInteger(parsed) ? parsed : null;
  }, []);

  const [selectedProject, setSelectedProject] = useState<number | null>(
    initialProject
  );

  const projects = [
    {
      id: 1,
      title: "Restaurante Sabor da Terra",
      category: "Negócio Profissional",
      image: "/images/project-1.png",
      description:
        "Site profissional para restaurante com cardápio digital e integração WhatsApp",
      challenge:
        "O restaurante tinha presença fraca nas redes sociais e perdia clientes por não ter um site profissional.",
      solution:
        "Criámos um site moderno com cardápio digital, galeria de pratos, reservas online e botão WhatsApp direto.",
      results: [
        "Aumento de 40% em consultas de clientes",
        "Redução de 50% em chamadas telefônicas (via WhatsApp)",
        "Melhor apresentação profissional",
        "Integração com redes sociais",
      ],
      technologies: ["React", "Tailwind CSS", "WhatsApp API"],
      package: "Negócio Profissional",
      price: "70.000 Kz",
    },
    {
      id: 2,
      title: "Consultoria JM - Landing Page",
      category: "Vendas & Captação",
      image: "/images/project-2.png",
      description:
        "Landing page otimizada para captação de leads de consultoria empresarial",
      challenge:
        "Consultora precisava de uma página focada em conversão para seus anúncios no Facebook.",
      solution:
        "Desenvolvemos uma landing page com copywriting estratégico, CTA otimizado e integração com WhatsApp para captar leads.",
      results: [
        "Taxa de conversão de 12%",
        "Custo por lead reduzido em 35%",
        "Mais de 50 consultas no primeiro mês",
        "ROI positivo em 2 semanas",
      ],
      technologies: ["React", "Tailwind CSS", "Email Marketing", "WhatsApp"],
      package: "Vendas & Captação",
      price: "120.000 Kz",
    },
    {
      id: 3,
      title: "Salão de Beleza Estilo",
      category: "Presença Online",
      image: "/images/project-3.png",
      description:
        "One Page simples e elegante para salão de beleza com agendamento via WhatsApp",
      challenge:
        "Salão pequeno precisava de presença online rápida e acessível.",
      solution:
        "Criámos uma página one-page limpa com galeria de serviços, preços e botão WhatsApp para agendamentos.",
      results: [
        "Presença online estabelecida em 3 dias",
        "Aumento de 25% em agendamentos",
        "Melhor profissionalismo",
        "Pagamento único, sem mensalidades",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WhatsApp API"],
      package: "Presença Online",
      price: "35.000 Kz",
    },
    {
      id: 4,
      title: "Sistema de Gestão de Stock Kwanza",
      category: "Sistemas Web",
      image: "/images/blog-4.png",
      description:
        "Sistema web para gestão de stock, vendas e relatórios em tempo real.",
      challenge:
        "A empresa controlava stock em planilhas e perdia vendas por falta de visibilidade.",
      solution:
        "Construímos um painel web com entradas e saídas, alertas de reposição e relatórios automatizados.",
      results: [
        "Redução de 60% em rupturas de stock",
        "Fecho de caixa 3x mais rápido",
        "Relatórios semanais automáticos",
        "Equipa alinhada com dados em tempo real",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Dashboards"],
      package: "Personalizado",
      price: "Sob consulta",
    },
    {
      id: 5,
      title: "App de Agendamentos VitaCare",
      category: "Aplicativo Mobile",
      image: "/images/blog-5.png",
      description:
        "Aplicativo mobile para marcações, lembretes e gestão de pacientes.",
      challenge: "A clínica dependia de chamadas e tinha faltas frequentes.",
      solution:
        "Criámos um app com marcação online, lembretes por WhatsApp e painel administrativo.",
      results: [
        "Redução de 35% em faltas",
        "Agenda centralizada",
        "Atendimento mais rápido",
        "Mais fidelização",
      ],
      technologies: ["React Native", "Firebase", "WhatsApp API"],
      package: "Personalizado",
      price: "Sob consulta",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-grid border-b border-border">
        <div className="container text-center">
          <p className="text-accent font-semibold tracking-wide mb-3 text-sm uppercase">
            Trabalhos Realizados
          </p>
          <h1 className="font-display text-5xl mb-4">
            Nosso{" "}
            <span className="text-gradient-accent">Portfólio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja exemplos de sites, sistemas e apps que representam nosso padrão
            e os resultados que buscamos para cada cliente
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div
                key={project.id}
                className="cursor-pointer transition-all duration-300 group"
                onClick={() =>
                  setSelectedProject(
                    selectedProject === project.id ? null : project.id
                  )
                }
              >
                <Card className="card-modern overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-accent/20 to-secondary/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                      <span className="text-accent text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow p-6">
                    <h3 className="font-display text-xl mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Expandable Details */}
                    {selectedProject === project.id && (
                      <div className="space-y-4 pt-4 border-t border-border animate-in fade-in">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">
                            Desafio:
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {project.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2">
                            Solução:
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {project.solution}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2">
                            Resultados:
                          </h4>
                          <ul className="space-y-1">
                            {project.results.map((result, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-muted-foreground flex gap-2"
                              >
                                <span className="text-accent">✓</span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="p-6 pt-0 border-t border-border/50">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {project.package}
                        </p>
                        <p className="font-semibold text-accent">
                          {project.price}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={e => {
                          e.stopPropagation();
                          setSelectedProject(
                            selectedProject === project.id ? null : project.id
                          );
                        }}
                      >
                        {selectedProject === project.id
                          ? "Fechar"
                          : "Ver Detalhes"}
                        <ArrowRight
                          className={`w-3 h-3 transition-transform ${selectedProject === project.id ? "rotate-90" : ""}`}
                        />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="container">
          <AnimatedStats />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="font-display text-4xl mb-6">
            Quer um Projeto Como Estes?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cada projeto é único e customizado para as necessidades específicas
            do seu negócio. Vamos criar algo incrível juntos!
          </p>
          <Button asChild className="btn-primary gap-2 text-lg px-8 py-6">
            <Link href="/quote">
              Solicitar Orçamento <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
