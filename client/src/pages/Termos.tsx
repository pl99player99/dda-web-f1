import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Termos() {
  const sections = [
    {
      title: "1. Definições",
      content: `Neste documento, "DDA-Web" refere-se à empresa prestadora de serviços digitais. "Cliente" refere-se à pessoa singular ou colectiva que contrata os serviços. "Projeto" refere-se ao trabalho digital acordado entre ambas as partes.`
    },
    {
      title: "2. Âmbito dos Serviços",
      content: `A DDA-Web presta serviços de desenvolvimento web, sistemas digitais, aplicações mobile e automações. O âmbito específico de cada projeto é definido por acordo escrito (email ou documento) antes do início do trabalho. Qualquer alteração ao âmbito original pode implicar ajuste de prazo e valor.`
    },
    {
      title: "3. Pagamento",
      content: `O pagamento é dividido em duas partes: 50% de entrada no início do projeto e 50% na entrega final aprovada pelo cliente. A entrada é necessária para reservar lugar na fila de desenvolvimento e iniciar o trabalho. Atrasos no pagamento podem atrasar o prazo de entrega.`
    },
    {
      title: "4. Prazos",
      content: `Os prazos são definidos no início de cada projeto e dependem da complexidade do trabalho. O prazo começa a contar após o pagamento da entrada e aprovação do briefing. A DDA-Web não se responsabiliza por atrasos causados por falta de resposta, conteúdo ou aprovação por parte do cliente.`
    },
    {
      title: "5. Revisões",
      content: `Cada projeto inclui 2 rondas de revisão sem custo adicional após a primeira entrega. Alterações estruturais ou de âmbito significativas além dessas revisões são cobradas à parte, com valor acordado previamente.`
    },
    {
      title: "6. Propriedade Intelectual",
      content: `Após o pagamento integral, todos os direitos do projeto desenvolvido passam para o cliente. A DDA-Web mantém o direito de incluir o projeto no seu portfólio, salvo acordo em contrário. O cliente é responsável por garantir que o conteúdo fornecido (textos, imagens, logotipos) não viola direitos de terceiros.`
    },
    {
      title: "7. Confidencialidade",
      content: `A DDA-Web compromete-se a não partilhar informações confidenciais do cliente com terceiros. O cliente compromete-se igualmente a não partilhar processos, metodologias ou código proprietário da DDA-Web sem autorização expressa.`
    },
    {
      title: "8. Cancelamento",
      content: `O cliente pode cancelar o projeto a qualquer momento. Em caso de cancelamento após início do trabalho, a entrada não é reembolsável. O trabalho desenvolvido até à data de cancelamento é entregue ao cliente. Se o cancelamento for por responsabilidade da DDA-Web, o valor pago é devolvido integralmente.`
    },
    {
      title: "9. Limitação de Responsabilidade",
      content: `A DDA-Web não se responsabiliza por perdas indirectas, lucros cessantes ou danos consequentes resultantes do uso ou incapacidade de uso dos serviços prestados. A responsabilidade máxima da DDA-Web está limitada ao valor pago pelo cliente pelo serviço em causa.`
    },
    {
      title: "10. Suporte Pós-Entrega",
      content: `Após a entrega final, a DDA-Web oferece 30 dias de suporte técnico gratuito para correcção de erros decorrentes do desenvolvimento. Após esse período, o suporte contínuo é cobrado separadamente. Actualizações de conteúdo, novas funcionalidades ou alterações de design após entrega são consideradas novos pedidos.`
    },
    {
      title: "11. Lei Aplicável",
      content: `Estes termos são regidos pela legislação angolana. Qualquer litígio será resolvido preferencialmente por acordo amigável. Na impossibilidade de acordo, as partes recorrem aos tribunais competentes de Luanda, Angola.`
    },
    {
      title: "12. Alterações",
      content: `A DDA-Web reserva-se o direito de actualizar estes termos. Alterações significativas serão comunicadas aos clientes com pelo menos 15 dias de antecedência. O uso continuado dos serviços após as alterações implica a aceitação dos novos termos.`
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-12 bg-grid">
        <div className="container max-w-2xl">
          <Reveal>
          <div className="pill-blue mb-6">Legal</div>
          <h1 className="font-display text-4xl sm:text-5xl mb-4">
            Termos e Condições
          </h1>
          <p className="text-muted-foreground">
            Última actualização: Janeiro de 2026. Leia com atenção antes de contratar os nossos serviços.
          </p>
                  </Reveal>
</div>
      </section>

      {/* Content */}
      <section className="py-16 pb-24">
        <div className="container max-w-3xl">
          <Reveal>
          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-display text-xl mb-3 text-foreground">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.content}</p>
                {i < sections.length - 1 && <div className="mt-10 h-px bg-border/50" />}
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 rounded-2xl bg-card border border-border">
            <p className="text-sm text-muted-foreground">
              Dúvidas sobre estes termos?{" "}
              <a href="mailto:dinheirodigitalangola@gmail.com" className="text-accent hover:underline">
                dinheirodigitalangola@gmail.com
              </a>
            </p>
          </div>
                  </Reveal>
</div>
      </section>

      <Footer />
    </div>
  );
}
