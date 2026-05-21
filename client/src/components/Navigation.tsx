import { useLocation, Link } from "wouter";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { label: "Serviços", path: "/services" },
    { label: "Portfólio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "Sobre", path: "/about" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-background/95 backdrop-blur-md shadow-sm"
        : "bg-transparent"
    }`}>
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center hover:opacity-90 transition">
          <img src="/logo.svg" alt="DDA-Web" className="h-10 w-auto max-w-[200px]" />
        </Link>

        <div className="hidden md:flex gap-7 items-center">
          {navItems.map(item => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {isActive(item.path) && (
                <div className="h-0.5 bg-accent mt-0.5 rounded-full" />
              )}
            </Link>
          ))}
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
