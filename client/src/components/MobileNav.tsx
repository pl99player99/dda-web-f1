import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Serviços", path: "/services", emoji: "🛠️" },
  { label: "Portfólio", path: "/portfolio", emoji: "💼" },
  { label: "Blog", path: "/blog", emoji: "📝" },
  { label: "Sobre", path: "/about", emoji: "👋" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  // Close on route change
  useEffect(() => { setIsOpen(false); }, [location]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div className="md:hidden flex items-center gap-2">
      <ThemeToggle />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-xl bg-card/60 hover:bg-card transition"
        aria-label="Menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Full screen overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-background z-40 flex flex-col" style={{ top: 0 }}>
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <img src="/logo.svg" alt="DDA-Web" className="h-9 w-auto" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-xl bg-card hover:bg-card/80 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-5 py-6 space-y-2 overflow-y-auto">
            {navItems.map(item => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${
                  location.startsWith(item.path)
                    ? "bg-accent/10 text-accent"
                    : "hover:bg-card text-foreground"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="font-medium text-lg">{item.label}</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="px-5 pb-10 pt-4 space-y-3">
            <Link href="/quote" onClick={() => setIsOpen(false)}>
              <button className="btn-primary w-full text-base py-4 flex items-center justify-center gap-2">
                Calcular Orçamento <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <a
              href="https://wa.me/244930723070?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20DDA-Web."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-border text-sm font-medium hover:border-green-500 hover:text-green-400 transition"
            >
              💬 Falar no WhatsApp
            </a>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full py-3 text-sm text-muted-foreground hover:text-foreground transition text-center">
                Enviar mensagem →
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
