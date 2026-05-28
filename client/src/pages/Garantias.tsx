import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, RefreshCw, Clock, Star, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Garantias() {
  const garantias = [
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "2 Rondas de Revisão Incluídas",
      desc: "Após a entrega do projeto, tens direito a 2 rondas completas de alterações sem custo adicional. Queremos que fiques 100% satisfeito com o resultado.",
      color: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Prazo Cumprido ou Desconto",
      desc: "Comprometemo-nos com o prazo acordado antes de começar. Se não cumprirmos por nossa responsabilidade, aplicamos um desconto de 10% por cada dia de atraso.",
      color: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "30 Dias de Suporte Pós-Entrega",
      desc: "Após a entrega final, estamos disponíveis durante 30 dias para corrigir qualquer problema técnico que surja sem custo adicional.",
      color: "text-green-400 bg-green-400/10 border-green-400/20",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Satisfação Garantida",
      desc: "Se no final do projeto não estiveres satisfeito com o trabalho e não conseguirmos resolver as tuas preocupações, devolvemos 50% do valor pago.",
      color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    },
  ];

  const compromissos = [
    "Comunicação clara e regular durante o desenvolvimento",
    "Preço definido antes de começar — sem surpresas no final",
    "Código limpo e organizado, fácil de manter",
    "Site optimizado para mobile desde o primeiro dia",
    "Entrega de todos os ficheiros e credenciais do projeto",
    "Formação básica para gerir o teu próprio site",
    "Resposta a dúvidas em menos de 24 horas",
    "Transparência total em cada etapa do processo",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-grid">
        <div className="container max-w-2xl">
          <div className="pill-warm mb-6">Comprometemos-nos</div>
          <h1 className="font-display text-4xl sm:text-5xl mb-4">
            Trabalhamos com<br />
            <span className="text-gradient-warm">garantias reais.</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Não são promessas vagas. São compromissos concretos que assumimos
            antes de começar qualquer projeto.
          </p>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {garantias.map((g, i) => (
              <div key={i} className="card-modern flex gap-4">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${g.color}`}>
                  {g.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">{g.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="max-w-lg mb-10">
              <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">Sempre incluído</p>
              <h2 className="font-display text-4xl">
                O que podes<br />
                <span className="text-gradient-accent">sempre esperar</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {compromissos.map((c, i) => (
                <div key={i} className="flex gap-3 items-start p-4 rounded-xl border border-border hover:border-accent/30 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-green-400/15 border border-green-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <p className="text-sm">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment policy */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="card-modern border-l-4 border-l-accent">
            <h2 className="font-display text-2xl mb-4">Política de Pagamento</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">50% de entrada</span> para iniciar o projeto — cobre os custos de desenvolvimento iniciais e garante a prioridade na nossa fila de trabalho.
              </p>
              <p>
                <span className="text-foreground font-semibold">50% na entrega final</span> — após aprovação do cliente e antes da publicação/entrega dos ficheiros.
              </p>
              <p>
                O pagamento é feito por <span className="text-foreground font-semibold">transferência bancária</span> ou outro método acordado entre as partes.
              </p>
              <p>
                Em caso de cancelamento após início do desenvolvimento, a entrada <span className="text-foreground font-semibold">não é reembolsável</span>, mas o trabalho desenvolvido até ao momento é entregue ao cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stripe relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/5 blur-[80px] rounded-full" />
        <div className="container relative text-center max-w-xl">
          <h2 className="font-display text-4xl mb-4">
            Tens dúvidas?<br />
            <span className="text-gradient-warm">Fala connosco.</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Explicamos tudo antes de assinar qualquer acordo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <Button className="btn-warm gap-2 w-full sm:w-auto">
                <MessageCircle className="w-4 h-4" /> Falar Connosco
              </Button>
            </Link>
            <Link href="/quote">
              <Button variant="outline" className="border-border hover:border-accent gap-2 w-full sm:w-auto">
                Calcular Orçamento <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
