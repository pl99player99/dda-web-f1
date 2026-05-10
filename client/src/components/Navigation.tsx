import { useLocation, Link } from "wouter";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";

export default function Navigation() {
  const [location] = useLocation();

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
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex justify-between items-center py-4">
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition"
        >
          <img
            src="/logo.svg"
            alt="DDA-Web"
            className="h-10 w-auto max-w-[240px]"
          />
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map(item => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition ${
                isActive(item.path)
                  ? "text-accent font-semibold border-b-2 border-accent pb-1"
                  : "hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="hover:text-accent transition">
            Contacto
          </Link>
          <ThemeToggle />
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}
