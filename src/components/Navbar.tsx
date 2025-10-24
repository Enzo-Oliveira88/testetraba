import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navLinks = [{
    path: "/",
    label: "Início"
  }, {
    path: "/biografia",
    label: "Biografia"
  }, {
    path: "/projetos",
    label: "Projetos"
  }, {
    path: "/noticias",
    label: "Notícias"
  }, {
    path: "/prestacao-contas",
    label: "Prestação de Contas"
  }, {
    path: "/contato",
    label: "Contato"
  }];
  return <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm shadow-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              
            </div>
            <div className="hidden md:block">
              <p className="font-bold text-lg text-primary">Toni de Dalmir</p>
              <p className="text-xs text-muted-foreground">Prefeito de São Félix do Coribe</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => <Link key={link.path} to={link.path}>
                <Button variant={isActive(link.path) ? "default" : "ghost"} className="font-medium">
                  {link.label}
                </Button>
              </Link>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                <Button variant={isActive(link.path) ? "default" : "ghost"} className="w-full justify-start font-medium">
                  {link.label}
                </Button>
              </Link>)}
          </div>}
      </div>
    </nav>;
};
export default Navbar;