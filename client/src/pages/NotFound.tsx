import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <section className="pt-32 pb-20">
        <div className="container max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/15 border border-accent/30 mb-8">
            <AlertCircle className="w-10 h-10 text-accent" />
          </div>

          <p className="text-accent font-semibold tracking-wide mb-3">Erro 404</p>
          <h1 className="font-display text-5xl mb-4">Página não encontrada</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            O link que você tentou acessar não existe ou foi movido.
            Volte para a página inicial ou continue navegando pelos nossos serviços.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="btn-primary gap-2" onClick={() => setLocation("/")}> 
              <Home className="w-4 h-4" />
              Ir para Início
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
