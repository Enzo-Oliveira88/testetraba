import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Prefeito Toni de Dalmir</h3>
            <p className="text-sm opacity-90 mb-4">
              Trabalhando com transparência e dedicação por uma São Félix do Coribe cada vez melhor.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>São Félix do Coribe - Bahia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>(77) 0000-0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>contato@prefeitura.ba.gov.br</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horário de Atendimento</h3>
            <div className="space-y-2 text-sm">
              <p>Segunda a Sexta</p>
              <p className="opacity-90">8h às 12h | 14h às 18h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p className="font-medium mb-2">Prefeitura de São Félix do Coribe — Cuidando da nossa gente.</p>
          <p className="opacity-80">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
