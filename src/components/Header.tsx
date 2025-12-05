import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/logo-cd-consult-new.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="CD Consult" className="h-12 md:h-14 lg:h-16 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className={`text-sm font-medium transition-smooth ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-primary"}`}
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className={`text-sm font-medium transition-smooth ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-primary"}`}
          >
            Sobre Nós
          </button>
          <button
            onClick={() => scrollToSection("solucoes")}
            className={`text-sm font-medium transition-smooth ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-primary"}`}
          >
            Soluções
          </button>
          <button
            onClick={() => scrollToSection("clientes")}
            className={`text-sm font-medium transition-smooth ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-primary"}`}
          >
            Clientes
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className={`text-sm font-medium transition-smooth ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-primary"}`}
          >
            Contato
          </button>
        </nav>

        <Button
          onClick={() => scrollToSection("contato")}
          className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Agendar diagnóstico
        </Button>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col gap-6 mt-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-lg font-medium text-black hover:text-primary transition-smooth"
              >
                Início
              </button>

              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-lg font-medium text-black hover:text-primary transition-smooth"
              >
                Sobre Nós
              </button>

              <button
                onClick={() => scrollToSection("solucoes")}
                className="text-left text-lg font-medium text-black hover:text-primary transition-smooth"
              >
                Soluções
              </button>

              <button
                onClick={() => scrollToSection("clientes")}
                className="text-left text-lg font-medium text-black hover:text-primary transition-smooth"
              >
                Clientes
              </button>

              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-lg font-medium text-black hover:text-primary transition-smooth"
              >
                Contato
              </button>

              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4"
              >
                Agendar diagnóstico
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
