import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import Navigation from "@/components/Navigation";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api";

/**
 * DDA-Web Quote Page
 * Design Philosophy: Modern & Technological
 * - Interactive quote calculator
 * - Personalized package builder
 * - Real-time price calculation
 */

export default function Quote() {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    pages: "1",
    features: [] as string[],
    hosting: "gratuita",
    timeline: "normal",
    email: "",
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
    packageNameMap[packageFromQuery] || "Não especificado";

  const basePrice = {
    "1": 20000,
    "3": 35000,
    "5": 50000,
    custom: 40000,
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
    { id: "seo", label: "SEO Otimizado", price: 10000 },
    { id: "ecommerce", label: "E-commerce", price: 25000 },
    { id: "blog", label: "Blog/Notícias", price: 5000 },
    { id: "analytics", label: "Analytics Avançado", price: 5000 },
    { id: "customIntegration", label: "Integração Customizada", price: 15000 },
    { id: "emailMarketing", label: "Email Marketing", price: 8000 },
  ];

  const calculatePrice = () => {
    let price = basePrice[formData.pages as keyof typeof basePrice] || 35000;

    formData.features.forEach(feature => {
      price += featurePrice[feature] || 0;
    });

    if (formData.hosting === "paga") {
      price += 10000;
    }

    if (formData.timeline === "express") {
      price += 20000;
    }

    setCalculatedPrice(price);
  };

  const handlePageChange = (pages: string) => {
    setFormData({ ...formData, pages });
  };

  const handleFeatureToggle = (featureId: string) => {
    const newFeatures = formData.features.includes(featureId)
      ? formData.features.filter(f => f !== featureId)
      : [...formData.features, featureId];
    setFormData({ ...formData, features: newFeatures });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.businessName || !formData.businessType || !formData.email) {
      toast.error("Preencha os campos obrigatórios para enviar o orçamento.");
      return;
    }

    setIsLoading(true);

    try {
      const selectedFeatureLabels = formData.features.map(featureId => {
        const selectedFeature = features.find(
          feature => feature.id === featureId
        );
        return selectedFeature ? selectedFeature.label : featureId;
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.businessName,
          email: formData.email,
          company: formData.businessName,
          message: [
            `Pacote de interesse: ${selectedPackageName}`,
            `Tipo de negócio: ${formData.businessType}`,
            `Páginas: ${formData.pages}`,
            `Funcionalidades: ${selectedFeatureLabels.length ? selectedFeatureLabels.join(", ") : "Nenhuma"}`,
            `Hospedagem: ${formData.hosting}`,
            `Prazo: ${formData.timeline}`,
            `Preço estimado: ${calculatedPrice.toLocaleString()} Kz`,
          ].join("\n"),
        }),
      });

      if (!response.ok) {
        throw new Error(
          await getApiErrorMessage(response, "Erro ao enviar orçamento")
        );
      }

      toast.success(
        "Orçamento enviado com sucesso! Entraremos em contacto em breve."
      );
      setSubmitted(true);

      setFormData({
        businessName: "",
        businessType: "",
        pages: "1",
        features: [],
        hosting: "gratuita",
        timeline: "normal",
        email: "",
      });
    } catch (error) {
      console.error("Error sending quote:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Erro ao enviar orçamento. Tente novamente mais tarde."
      );
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  // Recalculate price whenever form changes
  useEffect(() => {
    calculatePrice();
  }, [formData]);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container text-center">
          <h1 className="font-display text-5xl mb-4">
            Calculadora de Orçamento
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Customize seu projeto e veja o preço em tempo real
          </p>
          {packageFromQuery && (
            <p className="mt-4 text-sm text-accent font-semibold">
              Pacote selecionado: {selectedPackageName}
            </p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Business Info */}
                <Card className="card-modern">
                  <h3 className="font-display text-xl mb-6">
                    1. Informações do Negócio
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Nome do Negócio
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Restaurante Sabor"
                        value={formData.businessName}
                        onChange={e =>
                          setFormData({
                            ...formData,
                            businessName: e.target.value,
                          })
                        }
                        required
                        className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-accent focus:outline-none transition text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Tipo de Negócio
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={e =>
                          setFormData({
                            ...formData,
                            businessType: e.target.value,
                          })
                        }
                        required
                        className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-accent focus:outline-none transition text-foreground"
                      >
                        <option value="">Selecione...</option>
                        <option value="restaurante">Restaurante</option>
                        <option value="loja">Loja</option>
                        <option value="servicos">Prestação de Serviços</option>
                        <option value="consultoria">Consultoria</option>
                        <option value="clinica">Clínica/Saúde</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>
                </Card>

                {/* Pages Selection */}
                <Card className="card-modern">
                  <h3 className="font-display text-xl mb-6">
                    2. Número de Páginas
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["1", "3", "5", "custom"].map(option => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handlePageChange(option)}
                        className={`p-3 rounded-lg border-2 transition ${
                          formData.pages === option
                            ? "border-accent bg-accent/10"
                            : "border-border hover:border-accent/50"
                        }`}
                      >
                        <div className="font-semibold">
                          {option === "custom" ? "Customizado" : option}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {option === "custom" ? "Mais de 5" : "páginas"}
                        </div>
                      </button>
                    ))}
                  </div>
                </Card>

                {/* Features */}
                <Card className="card-modern">
                  <h3 className="font-display text-xl mb-6">
                    3. Funcionalidades Adicionais
                  </h3>
                  <div className="space-y-3">
                    {features.map(feature => (
                      <label
                        key={feature.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.features.includes(feature.id)}
                          onChange={() => handleFeatureToggle(feature.id)}
                          className="w-4 h-4 rounded accent-accent"
                        />
                        <span className="flex-grow">{feature.label}</span>
                        <span className="text-accent font-semibold">
                          +{feature.price.toLocaleString()}Kz
                        </span>
                      </label>
                    ))}
                  </div>
                </Card>

                {/* Hosting */}
                <Card className="card-modern">
                  <h3 className="font-display text-xl mb-6">4. Hospedagem</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="hosting"
                        value="gratuita"
                        checked={formData.hosting === "gratuita"}
                        onChange={e =>
                          setFormData({ ...formData, hosting: e.target.value })
                        }
                        className="w-4 h-4"
                      />
                      <span className="flex-grow">
                        Hospedagem Gratuita (Netlify)
                      </span>
                      <span className="text-muted-foreground text-sm">
                        Incluído
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="hosting"
                        value="paga"
                        checked={formData.hosting === "paga"}
                        onChange={e =>
                          setFormData({ ...formData, hosting: e.target.value })
                        }
                        className="w-4 h-4"
                      />
                      <span className="flex-grow">
                        Hospedagem Profissional (Domínio + Suporte)
                      </span>
                      <span className="text-accent font-semibold">
                        +10.000Kz/mês
                      </span>
                    </label>
                  </div>
                </Card>

                {/* Timeline */}
                <Card className="card-modern">
                  <h3 className="font-display text-xl mb-6">
                    5. Prazo de Entrega
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="timeline"
                        value="normal"
                        checked={formData.timeline === "normal"}
                        onChange={e =>
                          setFormData({ ...formData, timeline: e.target.value })
                        }
                        className="w-4 h-4"
                      />
                      <span className="flex-grow">
                        Normal (5-10 dias úteis)
                      </span>
                      <span className="text-muted-foreground text-sm">
                        Padrão
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="timeline"
                        value="express"
                        checked={formData.timeline === "express"}
                        onChange={e =>
                          setFormData({ ...formData, timeline: e.target.value })
                        }
                        className="w-4 h-4"
                      />
                      <span className="flex-grow">
                        Express (3-5 dias úteis)
                      </span>
                      <span className="text-accent font-semibold">
                        +20.000Kz
                      </span>
                    </label>
                  </div>
                </Card>

                {/* Contact */}
                <Card className="card-modern">
                  <h3 className="font-display text-xl mb-6">6. Seu Email</h3>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={e =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-accent focus:outline-none transition text-foreground"
                  />
                </Card>

                <Button
                  type="submit"
                  className="btn-primary w-full gap-2 text-lg py-6"
                  disabled={submitted || isLoading}
                >
                  {isLoading
                    ? "Enviando..."
                    : submitted
                      ? "Orçamento Enviado! ✓"
                      : "Enviar Orçamento"}{" "}
                  {!submitted && !isLoading && (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </Button>
              </form>
            </div>

            {/* Price Summary */}
            <div className="lg:col-span-1">
              <Card className="card-modern sticky top-24">
                <h3 className="font-display text-2xl mb-6">
                  Resumo do Orçamento
                </h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Base ({formData.pages} páginas)
                    </span>
                    <span>
                      {(
                        basePrice[formData.pages as keyof typeof basePrice] ||
                        35000
                      ).toLocaleString()}
                      Kz
                    </span>
                  </div>

                  {formData.features.map(feature => (
                    <div key={feature} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {features.find(f => f.id === feature)?.label}
                      </span>
                      <span>
                        +{(featurePrice[feature] || 0).toLocaleString()}Kz
                      </span>
                    </div>
                  ))}

                  {formData.hosting === "paga" && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Hospedagem Profissional
                      </span>
                      <span>+10.000Kz/mês</span>
                    </div>
                  )}

                  {formData.timeline === "express" && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Entrega Express
                      </span>
                      <span>+20.000Kz</span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-muted-foreground">Total</span>
                    <div>
                      <span className="font-display text-3xl text-accent">
                        {calculatedPrice.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground ml-2">Kz</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Pagamento: 50% agora, 50% na entrega
                  </p>
                </div>

                <div className="space-y-2 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm font-semibold text-accent">
                    O que está incluído:
                  </p>
                  <ul className="space-y-1">
                    <li className="text-xs flex gap-2">
                      <Check className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                      Design responsivo
                    </li>
                    <li className="text-xs flex gap-2">
                      <Check className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                      Até 2 rodadas de alterações
                    </li>
                    <li className="text-xs flex gap-2">
                      <Check className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                      WhatsApp integrado
                    </li>
                    <li className="text-xs flex gap-2">
                      <Check className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                      Suporte pós-entrega
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
