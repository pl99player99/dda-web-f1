import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search, MessageCircle } from "lucide-react";
import { Link, useLocation } from "wouter";
import Navigation from "@/components/Navigation";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const suggestions = [
    { label: "Página Inicial", href: "/", icon: <Home className="w-4 h-4" /> },
    { label: "Serviços", href: "/services", icon: <Search className="w-4 h-4" /> },
    { label: "Portfólio", href: "/portfolio", icon: <Search className="w-4 h-4" /> },
    { label: "Contacto", href: "/contact", icon: <MessageCircle className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />
      <section className="pt-32 pb-20 flex items-center justify-center min-h-screen bg-grid">
        <div className="container max-w-2xl text-center">
          <div className="font-display text-[10rem] leading-none text-accent/10 select-none mb-0">
            404
          </div>
          <div className="-mt-8 mb-8">
            <h1 className="font-display text-4xl mb-3">Página não encontrada</h1>
            <p className="text-muted-foreground text-lg">
              O link que tentaste aceder não existe ou foi movido.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button className="btn-primary gap-2" onClick={() => setLocation("/")}>
              <Home className="w-4 h-4" />
              Ir para Início
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">Talvez estejas à procura de:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {suggestions.map(s => (
                <Link key={s.href} href={s.href}>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-accent text-sm transition-colors">
                    {s.icon}
                    {s.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
