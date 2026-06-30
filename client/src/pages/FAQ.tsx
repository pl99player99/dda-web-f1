import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Minus } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    category: "Geral",
    items: [
      {
        q: "O que é exactamente a DDA-Web?",
        a: "A DDA-Web é uma empresa angolana de soluções digitais. Criamos sites profissionais, sistemas web, aplicações mobile e automações para empresas em Angola. Somos focados em resultado — não apenas em entregar algo bonito, mas algo que funciona e gera negócio."
      },
      {
        q: "Atendem clientes fora de Luanda?",
        a: "Sim. Trabalhamos remotamente com clientes em todo o território angolano. Todo o processo — briefing, aprovações, pagamento e entrega — pode ser feito online. Para clientes em Luanda, também fazemos reuniões presenciais mediante agendamento."
      },
      {
        q: "Como funciona o processo do início ao fim?",
        a: "1. Contacto inicial (WhatsApp ou formulário). 2. Briefing — percebemos o projecto, definimos âmbito e preço. 3. Pagamento de 50% para iniciar. 4. Desenvolvimento com actualizações regulares. 5. Entrega e revisões. 6. Pagamento dos restantes 50% e publicação."
      },
    ]
  },
  {
    category: "Sites e Preços",
    items: [
      {
        q: "Quanto custa um site profissional?",
        a: "Depende do âmbito. Os nossos pacotes começam em 35.000 Kz para uma página simples, 65.000 Kz para um site completo até 5 páginas, e 95.000 Kz para uma landing page de alta conversão. Projectos mais complexos (sistemas, apps, e-commerce) são orçamentados individualmente."
      },
      {
        q: "Em quanto tempo fica o meu site pronto?",
        a: "Sites simples ficam prontos em 3 a 5 dias úteis. Sites completos em 5 a 7 dias. Landing pages em 5 a 10 dias. Projectos mais complexos têm prazo definido na proposta. O prazo começa a contar após o pagamento da entrada e aprovação do briefing."
      },
      {
        q: "O site fica hospedado onde?",
        a: "Nos pacotes base usamos hospedagem gratuita de qualidade (Vercel/Netlify) — rápida, segura e sem custo mensal. Para projectos que precisam de maior controlo, domínio próprio ou funcionalidades específicas, oferecemos hospedagem profissional por um valor adicional."
      },
      {
        q: "O site vai aparecer no Google?",
        a: "Todos os nossos sites são construídos com boas práticas de SEO — código limpo, velocidade optimizada, meta tags correctas, etc. Isso facilita a indexação pelo Google. No entanto, aparecer nas primeiras posições para palavras-chave competitivas requer uma estratégia de SEO contínua, que podemos tratar separadamente."
      },
      {
        q: "Posso atualizar o meu site sozinho depois?",
        a: "Depende da tecnologia usada. Desenvolvemos alguns sites com painéis de gestão de conteúdo que permitem actualizar textos, imagens e produtos sem precisar de conhecimentos técnicos. Após a entrega, fazemos uma sessão de formação básica para te ajudar a gerir o site."
      },
    ]
  },
  {
    category: "Sistemas e Apps",
    items: [
      {
        q: "Criam sistemas de gestão para empresas?",
        a: "Sim. Desenvolvemos sistemas à medida — CRM, gestão de stock, facturação, agendamentos, dashboards e muito mais. O orçamento é feito após análise detalhada dos requisitos, e o prazo depende da complexidade do sistema."
      },
      {
        q: "Fazem aplicações para Android e iOS?",
        a: "Sim. Desenvolvemos apps móveis híbridas que funcionam tanto no Android como no iOS. A abordagem híbrida é mais económica e com resultados equivalentes para a maioria dos casos de uso comercial."
      },
      {
        q: "Fazem integrações com outros sistemas?",
        a: "Sim. Integramos com sistemas de pagamento, APIs de terceiros, bases de dados existentes, ERPs, sistemas de contabilidade e muito mais. Cada integração é analisada individualmente."
      },
    ]
  },
  {
    category: "Pagamento e Garantias",
    items: [
      {
        q: "Quais são as formas de pagamento?",
        a: "Aceitamos transferência bancária e outros métodos acordados entre as partes. O pagamento é feito em duas partes: 50% de entrada para iniciar e 50% na entrega final aprovada."
      },
      {
        q: "E se não ficar satisfeito com o resultado?",
        a: "Incluímos 2 rondas de revisão gratuitas após a entrega. Se após as revisões ainda não estiveres satisfeito e não conseguirmos resolver as preocupações, devolvemos 50% do valor pago. A nossa prioridade é que fiques feliz com o resultado."
      },
      {
        q: "Existe suporte após a entrega?",
        a: "Sim. Oferecemos 30 dias de suporte técnico gratuito após a entrega para corrigir qualquer problema que surja. Após esse período, o suporte contínuo é cobrado separadamente com planos mensais acessíveis."
      },
      {
        q: "Se o prazo não for cumprido, o que acontece?",
        a: "Se o atraso for por nossa responsabilidade, aplicamos um desconto de 10% por cada dia de atraso. Este compromisso está nas nossas garantias porque levamos os prazos muito a sério."
      },
    ]
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-5 text-left gap-4"
      >
        <span className="font-medium text-sm leading-snug">{q}</span>
        <span className="flex-shrink-0 mt-0.5">
          {open ? <Minus className="w-4 h-4 text-accent" /> : <Plus className="w-4 h-4 text-muted-foreground" />}
        </span>
      </button>
      {open && (
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed -mt-2">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-grid">
        <div className="container max-w-2xl">
          <Reveal>
          <div className="pill-blue mb-6">Dúvidas Frequentes</div>
          <h1 className="font-display text-4xl sm:text-5xl mb-4">
            Tens perguntas?<br />
            <span className="text-gradient-accent">Temos respostas.</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Reunimos as dúvidas mais comuns dos nossos clientes. Se não encontrares
            o que procuras, fala directamente connosco.
          </p>
                  </Reveal>
</div>
      </section>

      {/* FAQ sections */}
      <section className="py-16 pb-24">
        <div className="container">
          <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl">
            {/* Category nav — desktop */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-1">
                {faqs.map(cat => (
                  <a key={cat.category} href={`#${cat.category}`}
                    className="block px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-colors">
                    {cat.category}
                  </a>
                ))}
                <div className="pt-6">
                  <Link href="/contact">
                    <Button className="btn-warm gap-2 w-full text-sm">
                      Falar Connosco <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ content */}
            <div className="lg:col-span-2 space-y-12">
              {faqs.map(cat => (
                <div key={cat.category} id={cat.category}>
                  <h2 className="font-display text-2xl mb-4">{cat.category}</h2>
                  <div className="card-modern p-0 divide-y divide-border">
                    {cat.items.map((item, i) => (
                      <div key={i} className="px-6">
                        <FAQItem q={item.q} a={item.a} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
                  </Reveal>
</div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stripe relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/5 blur-[80px] rounded-full" />
        <div className="container relative text-center max-w-xl">
          <Reveal>
          <h2 className="font-display text-3xl mb-4">
            Não encontraste o que procuravas?
          </h2>
          <p className="text-muted-foreground mb-8 text-sm">
            Fala directamente connosco — respondemos em menos de 2 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <Button className="btn-warm gap-2 w-full sm:w-auto">
                Enviar Mensagem <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="https://wa.me/244930723070?text=Olá!%20Tenho%20uma%20dúvida." target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-border hover:border-green-500 hover:text-green-400 gap-2 w-full sm:w-auto">
                WhatsApp
              </Button>
            </a>
          </div>
                  </Reveal>
</div>
      </section>

      <Footer />
    </div>
  );
}
