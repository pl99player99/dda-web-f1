import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Globe, BriefcaseBusiness, Rocket, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

/**
 * DDA-Web Services Page
 * Design Philosophy: Modern & Technological
 * - Detailed service packages with pricing
 * - Interactive comparison
 * - Call-to-action for each package
 */

export default function Services() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: "presenca",
      name: "Presença Online",
      subtitle: "Para começar na internet",
      price: "35.000",
      currency: "Kz",
      period: "pagamento único",
      icon: <Globe className="w-8 h-8" />,
      description: "Perfeito para pequenos negócios que querem estar online",
      deliveryTime: "3 a 5 dias úteis",
      features: [
        "1 página (One Page)",
        "Seções: Quem somos, Serviços, Contactos",
        "Botão WhatsApp direto",
        "Design responsivo (mobile + desktop)",
        "Integração com redes sociais",
        "Até 2 rodadas de alterações",
        "Hospedagem gratuita (Netlify)",
      ],
      notIncluded: [
        "Múltiplas páginas",
        "E-commerce",
        "SEO avançado",
        "Domínio próprio",
      ],
      bestFor: "Prestadores de serviço, consultores, pequenas lojas",
    },
    {
      id: "profissional",
      name: "Negócio Profissional",
      subtitle: "Para parecer empresa séria",
      price: "70.000",
      currency: "Kz",
      period: "pagamento único",
      icon: <BriefcaseBusiness className="w-8 h-8" />,
      description: "Site completo que passa credibilidade e profissionalismo",
      deliveryTime: "5 a 7 dias úteis",
      featured: true,
      features: [
        "Até 5 páginas (Início, Sobre, Serviços, Portfólio, Contacto)",
        "Formulário de contacto funcional",
        "WhatsApp flutuante",
        "SEO básico otimizado",
        "Design profissional e trabalhado",
        "Estrutura preparada para anúncios",
        "Até 2 rodadas de alterações",
        "Integração com redes sociais",
      ],
      notIncluded: [
        "E-commerce",
        "Blog avançado",
        "Integração com sistemas externos",
        "Suporte mensal",
      ],
      bestFor: "Empresas em crescimento, lojas, clínicas, salões, escritórios",
    },
    {
      id: "vendas",
      name: "Vendas & Captação",
      subtitle: "Para gerar clientes todos os dias",
      price: "120.000",
      currency: "Kz",
      period: "pagamento único",
      icon: <Rocket className="w-8 h-8" />,
      description: "Landing page otimizada para conversão e captação de leads",
      deliveryTime: "7 a 10 dias úteis",
      features: [
        "Tudo do pacote Profissional +",
        "Landing page focada em conversão",
        "Copywriting estratégico (texto que vende)",
        "Call to Action otimizado",
        "Integração com WhatsApp e Email",
        "Página rápida (carregamento otimizado)",
        "Estrutura pensada para anúncios pagos",
        "Análise básica do negócio antes da criação",
      ],
      notIncluded: [
        "Gestão de anúncios",
        "Suporte mensal",
        "Atualizações frequentes",
      ],
      bestFor:
        "Negócios que anunciam, prestadores de serviços, empreendedores digitais",
    },
    {
      id: "personalizado",
      name: "Personalizado",
      subtitle: "Sua necessidade, nossa solução",
      price: "A partir de",
      currency: "20.000 Kz",
      period: "conforme escopo",
      icon: <SlidersHorizontal className="w-8 h-8" />,
      description: "Solução customizada para suas necessidades específicas",
      deliveryTime: "Conforme acordado",
      features: [
        "Apenas uma Landing Page simples",
        "Página de cardápio digital",
        "Página de apresentação de produto",
        "Página de inscrição/formulário",
        "Página de portfólio",
        "Hospedagem gratuita (Netlify, Vercel)",
        "Pagamento único",
        "Escopo bem definido",
      ],
      notIncluded: [
        "Funcionalidades complexas",
        "Integração com sistemas externos",
        "Suporte mensal",
      ],
      bestFor: "Clientes com necessidades específicas, projetos únicos",
    },
  ];

  const whatsappPhone = "+244930723070";

  const getWhatsAppHref = (pkg: (typeof packages)[number]) => {
    const message = `Olá! Tenho interesse no pacote "${pkg.name}" (${pkg.price} ${pkg.currency}). Gostaria de avançar.`;
    return `https://wa.me/${whatsappPhone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
  };

  const getQuoteHref = (pkg: (typeof packages)[number]) => {
    return `/quote?package=${pkg.id}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container text-center">
          <h1 className="font-display text-5xl mb-4">
            Soluções Digitais para Empresas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mantivemos os pacotes de sites e adicionamos novas linhas de soluções
            digitais para projetos sob medida, sistemas e apps.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map(pkg => (
              <div
                key={pkg.id}
                className={`relative transition-all duration-300 ${
                  pkg.featured ? "lg:col-span-1 lg:scale-105" : ""
                }`}
                onMouseEnter={() => setSelectedPackage(pkg.id)}
                onMouseLeave={() => setSelectedPackage(null)}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <Card
                  className={`card-modern h-full flex flex-col ${
                    pkg.featured ? "border-accent ring-1 ring-accent" : ""
                  } ${selectedPackage === pkg.id ? "ring-1 ring-accent" : ""}`}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="mb-3 text-accent">{pkg.icon}</div>
                    <h3 className="font-display text-2xl mb-1">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl">{pkg.price}</span>
                      <span className="text-muted-foreground">
                        {pkg.currency}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {pkg.period}
                    </p>
                  </div>

                  {/* Delivery Time */}
                  <div className="mb-6 p-3 bg-accent/10 rounded-lg">
                    <p className="text-sm">
                      <span className="font-semibold text-accent">
                        Entrega:
                      </span>{" "}
                      {pkg.deliveryTime}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-6">
                    <h4 className="font-semibold text-sm mb-3">Inclui:</h4>
                    <ul className="space-y-2">
                      {pkg.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {pkg.features.length > 5 && (
                        <li className="text-xs text-muted-foreground pt-2">
                          +{pkg.features.length - 5} mais...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="grid grid-cols-1 gap-3 mt-auto">
                    <a
                      href={getWhatsAppHref(pkg)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="btn-primary w-full gap-2">
                        Contactar via WhatsApp <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>

                    <Link href={getQuoteHref(pkg)}>
                      <Button variant="outline" className="w-full gap-2">
                        Contactar por Email <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Digital Solutions */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl mb-4">Outras Soluções Digitais</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Além dos pacotes de sites, também entregamos projetos técnicos para
              digitalizar operações, criar produtos digitais e escalar empresas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Sistemas Web por Encomenda",
                description:
                  "Desenvolvimento de sistemas internos, portais de clientes, áreas administrativas e fluxos sob medida.",
                examples: ["Gestão de pedidos", "Dashboard interno", "Portal de clientes"],
              },
              {
                title: "Aplicativos Mobile",
                description:
                  "Apps para Android e iOS focados em operação, vendas, atendimento e experiência do cliente.",
                examples: ["App de agendamento", "App de equipa", "App para clientes"],
              },
              {
                title: "Bases de Dados e Backoffice",
                description:
                  "Estruturação de base de dados, organização de informação, painéis e processos para tomada de decisão.",
                examples: ["Modelagem de dados", "Relatórios", "Painéis de gestão"],
              },
              {
                title: "Automação e Integrações",
                description:
                  "Integração entre ferramentas e automação de tarefas repetitivas para ganhar tempo e reduzir erros.",
                examples: ["WhatsApp + CRM", "Email + Formulários", "Fluxos automáticos"],
              },
            ].map((solution, idx) => (
              <Card key={idx} className="card-modern h-full">
                <h3 className="font-display text-xl mb-3">{solution.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.examples.map((example, exIdx) => (
                    <li key={exIdx} className="flex gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid grid-cols-1 gap-3">
                  <a
                    href={`https://wa.me/${whatsappPhone.replace(/\D/g, "")}?text=${encodeURIComponent(
                      `Olá! Tenho interesse em ${solution.title}. Quero receber mais detalhes.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn-primary w-full gap-2">
                      Falar no WhatsApp <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                  <Link href="/quote?package=personalizado">
                    <Button variant="outline" className="w-full gap-2">
                      Pedir proposta por Email <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Detailed Comparison */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="container">
          <h2 className="font-display text-4xl mb-12 text-center">
            Comparação Detalhada
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">
                    Funcionalidade
                  </th>
                  {packages.map(pkg => (
                    <th
                      key={pkg.id}
                      className="text-center py-4 px-4 font-semibold"
                    >
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Número de Páginas",
                    values: ["1", "Até 5", "Até 5", "Variável"],
                  },
                  {
                    feature: "WhatsApp Integrado",
                    values: ["✓", "✓", "✓", "✓"],
                  },
                  {
                    feature: "Formulário de Contacto",
                    values: ["Básico", "✓", "✓", "Variável"],
                  },
                  {
                    feature: "SEO Otimizado",
                    values: ["Básico", "✓", "✓", "Variável"],
                  },
                  {
                    feature: "Design Responsivo",
                    values: ["✓", "✓", "✓", "✓"],
                  },
                  {
                    feature: "Copywriting Estratégico",
                    values: ["—", "—", "✓", "Variável"],
                  },
                  {
                    feature: "Estrutura para Anúncios",
                    values: ["—", "Básica", "✓", "Variável"],
                  },
                  {
                    feature: "Hospedagem Gratuita",
                    values: ["✓", "—", "—", "✓"],
                  },
                  {
                    feature: "Suporte Pós-Entrega",
                    values: ["Básico", "Básico", "Básico", "Conforme"],
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-border hover:bg-card/50 transition"
                  >
                    <td className="py-4 px-4 font-semibold text-sm">
                      {row.feature}
                    </td>
                    {row.values.map((value, vidx) => (
                      <td key={vidx} className="text-center py-4 px-4 text-sm">
                        {value === "✓" ? (
                          <span className="text-accent font-semibold">✓</span>
                        ) : value === "—" ? (
                          <span className="text-muted-foreground">—</span>
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="font-display text-4xl mb-12 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Qual é o melhor pacote para meu negócio?",
                a: "Depende de seus objetivos. Se quer apenas estar online, escolha Presença Online. Se quer parecer profissional, escolha Negócio Profissional. Se quer gerar vendas, escolha Vendas & Captação. Para sistemas, apps e automações, fale connosco para proposta personalizada!",
              },
              {
                q: "Posso fazer alterações após a entrega?",
                a: "Sim! Cada pacote inclui até 2 rodadas de alterações simples (textos, cores, imagens). Alterações adicionais podem ser cobradas à parte.",
              },
              {
                q: "E se precisar de algo diferente?",
                a: "Temos o pacote Personalizado! Você descreve o que precisa, nós analisamos e criamos uma solução customizada — seja site, sistema web, app mobile ou automação.",
              },
              {
                q: "Como funciona o pagamento?",
                a: "50% no início do projeto, 50% na entrega. Isso garante confiança para ambos os lados.",
              },
              {
                q: "Quanto tempo leva para ficar pronto?",
                a: "Presença Online: 3-5 dias. Profissional: 5-7 dias. Vendas & Captação: 7-10 dias. Personalizado: conforme acordado.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card-modern">
                <h3 className="font-semibold text-lg mb-3">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30 border-t border-border">
        <div className="container text-center">
          <h2 className="font-display text-4xl mb-6">Pronto para Começar?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Escolha um pacote de site ou solicite uma solução personalizada para
            sistemas, apps, automações e projetos digitais sob medida!
          </p>
          <Link href="/contact">
            <Button className="btn-primary gap-2 text-lg px-8 py-6">
              Falar com a Equipa <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
