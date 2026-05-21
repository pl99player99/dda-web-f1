import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Serviços", path: "/services" },
  { label: "Portfólio", path: "/portfolio" },
  { label: "Blog", path: "/blog" },
  { label: "Sobre", path: "/about" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => { setIsOpen(false); }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
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

      {isOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 bg-background z-[999] flex flex-col"
          style={{ top: 0 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
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
          <nav className="flex-1 px-5 py-4 space-y-1 overflow-y-auto">
            {navItems.map(item => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${
                  location.startsWith(item.path)
                    ? "bg-accent/10 text-accent font-semibold"
                    : "hover:bg-card text-foreground font-medium"
                }`}
              >
                <span className="text-lg">{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-30" />
              </Link>
            ))}
          </nav>

          {/* Bottom CTAs */}
          <div className="px-5 pb-10 pt-4 space-y-3 flex-shrink-0">
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
              WhatsApp
            </a>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full py-3 text-sm text-muted-foreground hover:text-foreground transition text-center">
                Contacto →
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
