import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const casos = [
  {
    id: 1,
    client: "Restaurante Sabor da Terra",
    category: "Site Profissional",
    location: "Luanda · Miramar",
    challenge: "O restaurante dependia exclusivamente do Facebook para receber reservas. Muitos clientes não conseguiam contactar fora do horário de expediente e a credibilidade online era baixa.",
    solution: "Criámos um site profissional com menu digital, sistema de reservas por WhatsApp integrado, galeria de fotos e secção de horários e localização.",
    results: [
      { metric: "Reservas/semana", before: "2–3", after: "11–14", label: "Aumento de 400%" },
      { metric: "Tempo de entrega", before: "—", after: "5 dias", label: "Dentro do prazo" },
      { metric: "Investimento", before: "—", after: "35.000 Kz", label: "Pacote Presença" },
    ],
    image: "/images/project-1.png",
    testimonial: "Em menos de uma semana o site estava online. As reservas aumentaram logo no primeiro mês e os clientes comentam sempre como ficaram impressionados com a qualidade.",
    testimonialAuthor: "Maria João, Proprietária",
    comingSoon: false,
  },
  {
    id: 2,
    client: "Consultoria JM",
    category: "Landing Page",
    location: "Luanda · Talatona",
    challenge: "A consultoria tinha dificuldade em captar novos clientes online. O custo por lead vindo das redes sociais era alto e as conversões eram baixas.",
    solution: "Desenvolvemos uma landing page optimizada para conversão com proposta de valor clara, depoimentos de clientes, FAQ e formulário de contacto directo.",
    results: [
      { metric: "Custo por lead", before: "Alto", after: "-50%", label: "Redução significativa" },
      { metric: "Taxa de conversão", before: "1%", after: "3.2%", label: "Triplicou" },
      { metric: "ROI", before: "—", after: "Positivo em 2 semanas", label: "Retorno rápido" },
    ],
    image: "/images/project-2.png",
    testimonial: "O custo por lead caiu a metade e o ROI foi positivo em duas semanas. Valeu muito o investimento.",
    testimonialAuthor: "Carlos Mendes, Sócio",
    comingSoon: false,
  },
  {
    id: 3,
    client: "Salão Estilo",
    category: "Site com Agendamentos",
    location: "Luanda · Ingombota",
    challenge: "O salão recebia marcações apenas por mensagem directa no Instagram, o que gerava desorganização e muitos no-shows.",
    solution: "Criámos um site com galeria de serviços, tabela de preços e integração com WhatsApp para agendamentos com confirmação automática.",
    results: [
      { metric: "No-shows", before: "Frequentes", after: "Reduzidos em 70%", label: "Menos faltas" },
      { metric: "Tempo de resposta", before: "Horas", after: "Imediato", label: "WhatsApp integrado" },
      { metric: "Satisfação", before: "—", after: "5 estrelas", label: "Avaliação média" },
    ],
    image: "/images/project-3.png",
    testimonial: "Profissionais, rápidos e com óptimo gosto. O site ficou exactamente como eu queria e os clientes adoram.",
    testimonialAuthor: "Ana Luísa, Gestora",
    comingSoon: false,
  },
  {
    id: 4,
    client: "O Teu Negócio",
    category: "Caso de Estudo",
    location: "Angola",
    challenge: "O próximo caso de estudo pode ser o teu. Cada projeto que entregamos é uma história de crescimento.",
    solution: "",
    results: [],
    image: "/images/home-hero.png",
    testimonial: "",
    testimonialAuthor: "",
    comingSoon: true,
  },
];

export default function Casos() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-grid">
        <div className="container max-w-2xl">
          <div className="pill-warm mb-6">Resultados Reais</div>
          <h1 className="font-display text-4xl sm:text-5xl mb-4">
            Projetos que<br />
            <span className="text-gradient-warm">geraram resultados.</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Não mostramos apenas o que ficou bonito — mostramos o que funcionou.
            Cada caso tem números reais e clientes reais.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 pb-24">
        <div className="container space-y-16">
          {casos.map((caso, i) => (
            <div key={caso.id}>
              {caso.comingSoon ? (
                /* Placeholder card */
                <div className="card-modern border-dashed border-2 border-border text-center py-16">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl mb-2">O teu negócio aqui</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    O próximo caso de estudo pode ser o teu. Cada projeto que entregamos é documentado com resultados reais.
                  </p>
                  <Link href="/quote">
                    <Button className="btn-warm gap-2">
                      Começar o Meu Projeto <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              ) : (
                /* Real case */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  {/* Left */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative rounded-2xl overflow-hidden mb-6">
                      <img src={caso.image} alt={caso.client} className="w-full h-64 object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                          {caso.category}
                        </span>
                      </div>
                    </div>

                    {/* Results */}
                    {caso.results.length > 0 && (
                      <div className="grid grid-cols-3 gap-3">
                        {caso.results.map((r, idx) => (
                          <div key={idx} className="card-modern text-center py-4 px-3">
                            <p className="text-xs text-muted-foreground mb-1">{r.metric}</p>
                            <p className="font-display text-xl text-accent mb-0.5">{r.after}</p>
                            <p className="text-xs text-muted-foreground">{r.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-xs text-muted-foreground mb-1">{caso.location}</p>
                    <h2 className="font-display text-3xl mb-6">{caso.client}</h2>

                    <div className="space-y-5">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Desafio</p>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{caso.challenge}</p>
                      </div>

                      {caso.solution && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Solução</p>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{caso.solution}</p>
                        </div>
                      )}
                    </div>

                    {caso.testimonial && (
                      <div className="mt-8 p-5 rounded-xl border border-border bg-card/50">
                        <p className="text-sm italic text-muted-foreground mb-3">
                          "{caso.testimonial}"
                        </p>
                        <p className="text-xs font-semibold">{caso.testimonialAuthor}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {i < casos.length - 1 && (
                <div className="h-px bg-border/40 mt-16" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stripe relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/5 blur-[80px] rounded-full" />
        <div className="container relative text-center max-w-xl">
          <h2 className="font-display text-4xl mb-4">
            O próximo caso<br />
            <span className="text-gradient-warm">pode ser o teu.</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Orçamento gratuito. Sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quote">
              <Button className="btn-warm gap-2 w-full sm:w-auto">
                Calcular Orçamento <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-border hover:border-accent gap-2 w-full sm:w-auto">
                Falar Connosco
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
