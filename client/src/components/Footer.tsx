import { Link } from "wouter";
import { MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card/30">
      {/* Top CTA bar */}
      <div className="border-b border-border">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl mb-1">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground text-sm">
              Orçamento gratuito · Resposta em 2 horas · Entrega em 7 dias
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/quote">
              <button className="btn-primary gap-2 flex items-center text-sm px-6 py-3">
                Calcular Orçamento <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <a
              href="https://wa.me/244930723070?text=Olá!%20Gostaria%20de%20saber%20mais."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-green-500 text-sm font-medium transition-colors hover:text-green-400"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="block mb-4">
              <img src="/logo.svg" alt="DDA-Web" className="h-9 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Soluções digitais profissionais para empresas em Angola.
              Sites, sistemas, apps e automações — entregues com rapidez e qualidade.
            </p>
            <div className="space-y-3 text-sm">
              <a href="https://wa.me/244930723070" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors">
                <MessageCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                +244 930 723 070
              </a>
              <a href="mailto:dinheirodigitalangola@gmail.com"
                className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                dinheirodigitalangola@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                Luanda, Angola
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Serviços</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {["Sites Profissionais","Sistemas Web","Apps Mobile","Automações","Portfólio"].map(s => (
                <li key={s}>
                  <Link href="/services" className="hover:text-foreground transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                { label:"Sobre Nós", href:"/about" },
                { label:"Portfólio", href:"/portfolio" },
                { label:"Blog", href:"/blog" },
                { label:"Contacto", href:"/contact" },
                { label:"Orçamento", href:"/quote" },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pacotes */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Pacotes</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                "Presença Online — 35k Kz",
                "Profissional — 70k Kz",
                "Vendas & Captação — 120k Kz",
                "Personalizado — Consulta",
              ].map(p => (
                <li key={p}>
                  <Link href="/services" className="hover:text-foreground transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>&copy; {year} DDA-Web. Todos os direitos reservados.</p>
          <p>Feito com ❤️ em Luanda, Angola</p>
        </div>
      </div>
    </footer>
  );
}
