import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-dom-garcia-official.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descricao */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Dom Garcia Logo"
              className="h-16 w-16 rounded-full object-cover logo-wave"
            />
            <p className="text-muted-foreground text-sm">
              Pizzaria gourmet em Foz do Iguacu, oferecendo sabores exclusivos
              e ingredientes de qualidade desde 2016.
            </p>
          </div>

          {/* Links Rapidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold text-foreground">
              Links Rapidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Sobre Nos
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato e Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold text-foreground">
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dom+Garcia+Pizzaria+Gourmet+Foz+do+Iguacu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                <MapPin size={16} />
                <span>Foz do Iguacu, PR</span>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5545999529010&text&type=phone_number&app_absent=0&utm_source=ig"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                <Phone size={16} />
                <span>(45) 9 9952-9010</span>
              </a>
              <a
                href="mailto:contato@domgarciapizzaria.com.br"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                <Mail size={16} />
                <span>contato@domgarciapizzaria.com.br</span>
              </a>
            </div>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.instagram.com/pizzariadomgarciafoz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/domgarciapizzaria/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            {currentYear} Dom Garcia Pizzaria Gourmet. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
