import { Link } from "wouter";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <img src="/logo.svg" alt="DDA-Web" className="h-9 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Soluções digitais profissionais para empresas que querem crescer.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Serviços
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-accent transition">
                  Sites Profissionais
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition">
                  Sistemas Web
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition">
                  Apps Mobile
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition">
                  Automações
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Empresa
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-accent transition">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-accent transition">
                  Calcular Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="https://wa.me/244930723070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition"
                >
                  +244 930 723 070
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:geral@dda-web.ao"
                  className="hover:text-accent transition"
                >
                  geral@dda-web.ao
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Luanda, Angola</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} DDA-Web. Todos os direitos reservados.</p>
          <Link href="/contact" className="hover:text-accent transition">
            Fala Connosco
          </Link>
        </div>
      </div>
    </footer>
  );
}
