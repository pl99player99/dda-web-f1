import { useLocation, Link } from "wouter";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const dropdownItems = [
  { label: "Sobre Nós", path: "/about", desc: "Quem somos e o que nos move" },
  { label: "Casos de Estudo", path: "/casos", desc: "Projectos com resultados reais" },
  { label: "Garantias", path: "/garantias", desc: "Os nossos compromissos contigo" },
  { label: "FAQ", path: "/faq", desc: "Perguntas frequentes" },
  { label: "Termos", path: "/termos", desc: "Termos e condições" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close dropdown on route change
  useEffect(() => { setDropdownOpen(false); }, [location]);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const isDropdownActive = dropdownItems.some(i => isActive(i.path));

  const navItems = [
    { label: "Serviços", path: "/services" },
    { label: "Portfólio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-background/95 backdrop-blur-md shadow-sm"
        : "bg-transparent"
    }`}>
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center hover:opacity-90 transition">
          <img src="/logo.png" alt="DDA-Web" className="h-10 w-auto max-w-[200px] site-logo" />
        </Link>

        <div className="hidden md:flex gap-7 items-center">
          {navItems.map(item => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative text-sm font-medium transition-colors py-1 ${
                isActive(item.path)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {isActive(item.path) && (
                <div className="absolute left-0 right-0 -bottom-1 h-0.5 bg-accent rounded-full" />
              )}
            </Link>
          ))}

          {/* Empresa dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`relative flex items-center gap-1 text-sm font-medium transition-colors py-1 ${
                isDropdownActive || dropdownOpen
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Empresa
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              {isDropdownActive && (
                <div className="absolute left-0 right-0 -bottom-1 h-0.5 bg-accent rounded-full" />
              )}
            </button>

            {/* Dropdown panel */}
            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-3 w-60 rounded-2xl border border-border bg-background/98 backdrop-blur-md shadow-xl overflow-hidden">
                <div className="p-1.5">
                  {dropdownItems.map(item => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`flex flex-col px-4 py-3 rounded-xl transition-colors ${
                        isActive(item.path)
                          ? "bg-accent/10 text-accent"
                          : "hover:bg-card text-foreground"
                      }`}
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-xs text-muted-foreground mt-0.5">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <ThemeToggle />
          <Link href="/contact">
            <button className="btn-primary text-sm px-5 py-2.5">
              Contacto
            </button>
          </Link>
        </div>

        <MobileNav />
      </div>
    </nav>
  );
}
