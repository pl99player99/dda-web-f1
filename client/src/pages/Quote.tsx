import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  Globe,
  Zap,
  ShoppingCart,
  BookOpen,
  BarChart2,
  Plug,
  Mail,
  Clock,
  Server,
  ChevronRight,
  Send,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Link } from "wouter";
import Reveal from "@/components/Reveal";

const STEPS = [
  "Negócio",
  "Páginas",
  "Funcionalidades",
  "Hospedagem",
  "Prazo",
  "Contacto",
];

export default function Quote() {
  const [step, setStep] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    phone: "",
    email: "",
    pages: "3",
    features: [] as string[],
    hosting: "gratuita",
    timeline: "normal",
  });

  const [calculatedPrice, setCalculatedPrice] = useState(35000);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const packageFromQuery = useMemo(() => {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get("package") || "";
  }, []);

  const packageNameMap: Record<string, string> = {
    presenca: "Presença Online",
    profissional: "Negócio Profissional",
    vendas: "Vendas & Captação",
    personalizado: "Personalizado",
  };

  const selectedPackageName =
    packageNameMap[packageFromQuery] || "";

  const basePrice: Record<string, number> = {
    "1": 20000,
    "3": 35000,
    "5": 50000,
    custom: 65000,
  };

  const featurePrice: Record<string, number> = {
    seo: 10000,
    ecommerce: 25000,
    blog: 5000,
    analytics: 5000,
    customIntegration: 15000,
    emailMarketing: 8000,
  };

  const features = [
    { id: "seo", label: "SEO Otimizado", price: 10000, icon: <Zap className="w-4 h-4" />, desc: "Apareça no Google" },
    { id: "ecommerce", label: "E-commerce", price: 25000, icon: <ShoppingCart className="w-4 h-4" />, desc: "Loja online completa" },
    { id: "blog", label: "Blog / Notícias", price: 5000, icon: <BookOpen className="w-4 h-4" />, desc: "Conteúdo e artigos" },
    { id: "analytics", label: "Analytics Avançado", price: 5000, icon: <BarChart2 className="w-4 h-4" />, desc: "Métricas detalhadas" },
    { id: "customIntegration", label: "Integração Customizada", price: 15000, icon: <Plug className="w-4 h-4" />, desc: "APIs e sistemas externos" },
    { id: "emailMarketing", label: "Email Marketing", price: 8000, icon: <Mail className="w-4 h-4" />, desc: "Captação e automação" },
  ];

  const pageOptions = [
    { value: "1", label: "1 página", sub: "One Page", price: 20000 },
    { value: "3", label: "3 páginas", sub: "Básico", price: 35000 },
    { value: "5", label: "5 páginas", sub: "Completo", price: 50000 },
    { value: "custom", label: "5+ páginas", sub: "Customizado", price: 65000 },
  ];

  const businessTypes = [
    "Restaurante / Café",
    "Loja / Comércio",
    "Prestação de Serviços",
    "Consultoria / Escritório",
    "Clínica / Saúde",
    "Educação / Formação",
    "Tecnologia",
    "Outro",
  ];

  const calculatePrice = () => {
    let price = basePrice[formData.pages] || 35000;
    formData.features.forEach(f => { price += featurePrice[f] || 0; });
    if (formData.hosting === "paga") price += 10000;
    if (formData.timeline === "express") price += 20000;
    setCalculatedPrice(price);
  };

  useEffect(() => { calculatePrice(); }, [formData]);

  const goToStep = (next: number) => {
    setAnimating(true);
    setTimeout(() => {
      setStep(next);
      setAnimating(false);
    }, 200);
  };

  const handleNext = () => { if (step < STEPS.length - 1) goToStep(step + 1); };
  const handleBack = () => { if (step > 0) goToStep(step - 1); };

  const canProceed = () => {
    if (step === 0) return formData.businessName.trim() && formData.businessType;
    if (step === 5) return formData.email.trim();
    return true;
  };

  const handleSubmit = async () => {
    if (!formData.email) {
      toast.error("Preencha o email para enviar o orçamento.");
      return;
    }
    setIsLoading(true);
    try {
      const selectedFeatureLabels = formData.features.map(id =>
        features.find(f => f.id === id)?.label || id
      );

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          company: formData.businessName,
          message: [
            selectedPackageName ? `Pacote de interesse: ${selectedPackageName}` : null,
            `Tipo de negócio: ${formData.businessType}`,
            `Páginas: ${formData.pages}`,
            `Funcionalidades: ${selectedFeatureLabels.length ? selectedFeatureLabels.join(", ") : "Nenhuma"}`,
            `Hospedagem: ${formData.hosting === "paga" ? "Profissional" : "Gratuita"}`,
            `Prazo: ${formData.timeline === "express" ? "Express (3-5 dias)" : "Normal (5-10 dias)"}`,
            `Preço estimado: ${calculatedPrice.toLocaleString()} Kz`,
          ].filter(Boolean).join("\n"),
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.error || "Erro ao enviar orçamento.");

      toast.success("Orçamento enviado! Entraremos em contacto em breve.");
      setSubmitted(true);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro ao enviar. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground font-body">
        <Navigation />
        <section className="pt-28 pb-20 flex items-center justify-center min-h-screen bg-grid">
          <div className="container max-w-lg text-center">
          <Reveal>
            <div className="w-20 h-20 rounded-full bg-accent/15 border-2 border-accent flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-accent" />
            </div>
            <h1 className="font-display text-4xl mb-4">Orçamento <span className="text-gradient-warm">Enviado!</span></h1>
            <p className="text-muted-foreground text-lg mb-4">
              Recebemos o seu pedido. A nossa equipa vai entrar em contacto em
              breve com uma proposta personalizada.
            </p>
            <div className="bg-card/50 border border-border rounded-xl p-6 mb-8 text-left space-y-2">
              <p className="text-sm text-muted-foreground">Estimativa recebida:</p>
              <p className="font-display text-3xl text-accent">
                {calculatedPrice.toLocaleString()} Kz
              </p>
              <p className="text-xs text-muted-foreground">
                Valor final confirmado após análise do escopo
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/">
                <Button variant="outline" className="gap-2">
                  Voltar ao Início
                </Button>
              </Link>
              <a
                href="https://wa.me/244930723070?text=Olá!%20Acabei%20de%20enviar%20um%20pedido%20de%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-primary gap-2">
                  Falar no WhatsApp <ArrowRight className="w-4 h-4" />
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

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-12 bg-grid">
        <div className="container text-center max-w-2xl">
          <Reveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">
            Orçamento Gratuito
          </p>
          <h1 className="font-display text-5xl mb-4">
            Calculadora de{" "}
            <span className="text-gradient-accent">Orçamento</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Personalize o seu projeto e veja o preço atualizado em tempo real.
            Leva menos de 2 minutos.
          </p>
          {selectedPackageName && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              <Check className="w-4 h-4" />
              Pacote: {selectedPackageName}
            </div>
          )}
                  </Reveal>
</div>
      </section>

      {/* Mobile price bar — always visible on mobile, hidden on desktop */}
      <div className="lg:hidden sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Estimativa actual</p>
          <p className="font-display text-2xl text-accent">{calculatedPrice.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">Kz</span></p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Passo {step + 1} de {STEPS.length}</p>
          <div className="h-1.5 w-24 bg-border rounded-full overflow-hidden mt-1">
            <div className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container">
          <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Left: Stepper + Form */}
            <div className="lg:col-span-2 space-y-6">

              {/* Progress Steps */}
              <div className="flex items-center gap-1 overflow-x-auto pb-2">
                {STEPS.map((label, idx) => (
                  <div key={idx} className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => idx < step && goToStep(idx)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        idx === step
                          ? "bg-accent text-white"
                          : idx < step
                          ? "bg-accent/20 text-accent cursor-pointer hover:bg-accent/30"
                          : "bg-card text-muted-foreground cursor-default"
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        idx < step ? "bg-accent text-white" : idx === step ? "bg-white/20" : "bg-border"
                      }`}>
                        {idx < step ? <Check className="w-3 h-3" /> : idx + 1}
                      </span>
                      {label}
                    </button>
                    {idx < STEPS.length - 1 && (
                      <ChevronRight className="w-3 h-3 text-border flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Step Content */}
              <Card className={`card-modern transition-opacity duration-200 ${animating ? "opacity-0" : "opacity-100"}`}>

                {/* STEP 0 — Negócio */}
                {step === 0 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-display text-2xl mb-1">Informações do Negócio</h2>
                      <p className="text-sm text-muted-foreground">Conte-nos um pouco sobre a sua empresa.</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Nome do Negócio <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Restaurante Sabor da Terra"
                        value={formData.businessName}
                        onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-accent focus:outline-none transition text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Tipo de Negócio <span className="text-accent">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {businessTypes.map(type => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, businessType: type })}
                            className={`px-3 py-2 rounded-lg border-2 text-xs font-medium transition-all text-left ${
                              formData.businessType === type
                                ? "border-accent bg-accent/10 text-accent"
                                : "border-border hover:border-accent/50"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 1 — Páginas */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-display text-2xl mb-1">Número de Páginas</h2>
                      <p className="text-sm text-muted-foreground">Quantas páginas o seu site vai ter?</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {pageOptions.map(opt => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, pages: opt.value })}
                          className={`p-5 rounded-xl border-2 transition-all text-left ${
                            formData.pages === opt.value
                              ? "border-accent bg-accent/10"
                              : "border-border hover:border-accent/40"
                          }`}
                        >
                          <div className="font-display text-xl mb-0.5">{opt.label}</div>
                          <div className="text-xs text-muted-foreground mb-3">{opt.sub}</div>
                          <div className="text-accent font-semibold">{opt.price.toLocaleString()} Kz</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2 — Funcionalidades */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-display text-2xl mb-1">Funcionalidades Adicionais</h2>
                      <p className="text-sm text-muted-foreground">Selecione tudo o que precisa. Pode ser alterado depois.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {features.map(feature => {
                        const selected = formData.features.includes(feature.id);
                        return (
                          <button
                            key={feature.id}
                            type="button"
                            onClick={() => {
                              const next = selected
                                ? formData.features.filter(f => f !== feature.id)
                                : [...formData.features, feature.id];
                              setFormData({ ...formData, features: next });
                            }}
                            className={`flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                              selected
                                ? "border-accent bg-accent/10"
                                : "border-border hover:border-accent/40"
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              selected ? "bg-accent text-white" : "bg-card text-muted-foreground"
                            }`}>
                              {selected ? <Check className="w-4 h-4" /> : feature.icon}
                            </div>
                            <div className="flex-grow min-w-0">
                              <div className="font-medium text-sm">{feature.label}</div>
                              <div className="text-xs text-muted-foreground">{feature.desc}</div>
                            </div>
                            <div className="text-accent font-semibold text-sm flex-shrink-0">
                              +{(feature.price / 1000).toFixed(0)}k Kz
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {formData.features.length === 0 && (
                      <p className="text-sm text-muted-foreground text-center py-2">
                        Nenhuma selecionada — pode avançar sem problema.
                      </p>
                    )}
                  </div>
                )}

                {/* STEP 3 — Hospedagem */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-display text-2xl mb-1">Hospedagem</h2>
                      <p className="text-sm text-muted-foreground">Onde o seu site vai ficar alojado.</p>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          value: "gratuita",
                          icon: <Globe className="w-5 h-5" />,
                          title: "Hospedagem Gratuita",
                          sub: "Netlify — rápida, segura e sem custo mensal",
                          price: "Incluído",
                          accent: false,
                        },
                        {
                          value: "paga",
                          icon: <Server className="w-5 h-5" />,
                          title: "Hospedagem Profissional",
                          sub: "Domínio próprio + suporte técnico + SSL",
                          price: "+10.000 Kz/mês",
                          accent: true,
                        },
                      ].map(opt => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, hosting: opt.value })}
                          className={`w-full flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all ${
                            formData.hosting === opt.value
                              ? "border-accent bg-accent/10"
                              : "border-border hover:border-accent/40"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            formData.hosting === opt.value ? "bg-accent text-white" : "bg-card text-muted-foreground"
                          }`}>
                            {opt.icon}
                          </div>
                          <div className="flex-grow">
                            <div className="font-semibold">{opt.title}</div>
                            <div className="text-xs text-muted-foreground">{opt.sub}</div>
                          </div>
                          <div className={`font-semibold text-sm flex-shrink-0 ${opt.accent ? "text-accent" : "text-muted-foreground"}`}>
                            {opt.price}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 4 — Prazo */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-display text-2xl mb-1">Prazo de Entrega</h2>
                      <p className="text-sm text-muted-foreground">Com que urgência precisa do projeto?</p>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          value: "normal",
                          icon: <Clock className="w-5 h-5" />,
                          title: "Entrega Normal",
                          sub: "5 a 10 dias úteis — sem pressa, máxima qualidade",
                          price: "Padrão",
                          accent: false,
                        },
                        {
                          value: "express",
                          icon: <Zap className="w-5 h-5" />,
                          title: "Entrega Express",
                          sub: "3 a 5 dias úteis — prioridade máxima na fila",
                          price: "+20.000 Kz",
                          accent: true,
                        },
                      ].map(opt => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: opt.value })}
                          className={`w-full flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all ${
                            formData.timeline === opt.value
                              ? "border-accent bg-accent/10"
                              : "border-border hover:border-accent/40"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            formData.timeline === opt.value ? "bg-accent text-white" : "bg-card text-muted-foreground"
                          }`}>
                            {opt.icon}
                          </div>
                          <div className="flex-grow">
                            <div className="font-semibold">{opt.title}</div>
                            <div className="text-xs text-muted-foreground">{opt.sub}</div>
                          </div>
                          <div className={`font-semibold text-sm flex-shrink-0 ${opt.accent ? "text-accent" : "text-muted-foreground"}`}>
                            {opt.price}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 5 — Contacto */}
                {step === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-display text-2xl mb-1">Os Seus Contactos</h2>
                      <p className="text-sm text-muted-foreground">
                        Para enviarmos a proposta final e entrarmos em contacto consigo.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Email <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-accent focus:outline-none transition text-foreground"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Telefone / WhatsApp{" "}
                          <span className="text-muted-foreground font-normal">(opcional)</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+244 9XX XXX XXX"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-accent focus:outline-none transition text-foreground"
                        />
                      </div>
                    </div>

                    {/* Mini resumo antes de enviar */}
                    <div className="bg-card/50 border border-border rounded-xl p-4 space-y-2">
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Resumo do pedido</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Negócio</span>
                          <span className="font-medium">{formData.businessName || "—"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Páginas</span>
                          <span className="font-medium">{formData.pages === "custom" ? "5+" : formData.pages} páginas</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Funcionalidades</span>
                          <span className="font-medium">{formData.features.length > 0 ? formData.features.length + " selecionada(s)" : "Nenhuma"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Prazo</span>
                          <span className="font-medium">{formData.timeline === "express" ? "Express" : "Normal"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    disabled={step === 0}
                    className="gap-2"
                  >
                    Anterior
                  </Button>

                  {step < STEPS.length - 1 ? (
                    <Button
                      type="button"
                      className="btn-primary gap-2"
                      onClick={handleNext}
                      disabled={!canProceed()}
                    >
                      Próximo <ChevronRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      className="btn-primary gap-2"
                      onClick={handleSubmit}
                      disabled={isLoading || !canProceed()}
                    >
                      {isLoading ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar Orçamento <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </Card>
            </div>

            {/* Right: Price Summary — sticky, desktop only */}
            <div className="hidden lg:block lg:col-span-1">
              <Card className="card-modern sticky top-24">
                <h3 className="font-display text-xl mb-6">Resumo</h3>

                {/* Price display */}
                <div className="text-center py-6 mb-6 bg-accent/5 rounded-xl border border-accent/20">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Estimativa total</p>
                  <div className="font-display text-4xl text-accent">
                    {calculatedPrice.toLocaleString()}
                  </div>
                  <p className="text-muted-foreground text-sm">Kz</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    50% entrada · 50% na entrega
                  </p>
                </div>

                {/* Breakdown */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Base ({formData.pages === "custom" ? "5+" : formData.pages} páginas)
                    </span>
                    <span>{(basePrice[formData.pages] || 35000).toLocaleString()} Kz</span>
                  </div>
                  {formData.features.map(id => (
                    <div key={id} className="flex justify-between text-xs">
                      <span className="text-muted-foreground">+ {features.find(f => f.id === id)?.label}</span>
                      <span>+{(featurePrice[id] || 0).toLocaleString()} Kz</span>
                    </div>
                  ))}
                  {formData.hosting === "paga" && (
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">+ Hospedagem Profissional</span>
                      <span>+10.000 Kz/mês</span>
                    </div>
                  )}
                  {formData.timeline === "express" && (
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">+ Entrega Express</span>
                      <span>+20.000 Kz</span>
                    </div>
                  )}
                </div>

                {/* Included */}
                <div className="p-4 bg-accent/8 rounded-xl border border-accent/20 space-y-2">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide">Sempre incluído</p>
                  {[
                    "Design responsivo (mobile + desktop)",
                    "Até 2 rondas de alterações",
                    "Botão WhatsApp integrado",
                    "Suporte pós-entrega",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <Check className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Progress indicator */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>Progresso</span>
                    <span>{step + 1} / {STEPS.length}</span>
                  </div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                    />
                  </div>
                </div>
              </Card>
            </div>

          </div>
                  </Reveal>
</div>
      </section>

      <Footer />
    </div>
  );
}
