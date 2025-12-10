import logo from "@/assets/logo-cd-consult-new.png";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNav = (sectionId: string) => {
    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const position = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: position, behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-2">
            <img src={logo} alt="CD Consult" className="h-14 md:h-16 lg:h-20 w-auto mb-4" />
            <p className="text-sm text-muted-foreground max-w-md">
              Consultoria especializada em Audiovisual e Comunicação Unificada,
              transformando tecnologia em resultados para empresas no Brasil e América Latina.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm md:text-base">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNav("inicio")} className="hover:text-primary text-muted-foreground transition-smooth">Início</button></li>
              <li><button onClick={() => handleNav("sobre")} className="hover:text-primary text-muted-foreground transition-smooth">Sobre Nós</button></li>
              <li><button onClick={() => handleNav("solucoes")} className="hover:text-primary text-muted-foreground transition-smooth">Soluções</button></li>
              <li><button onClick={() => handleNav("clientes")} className="hover:text-primary text-muted-foreground transition-smooth">Clientes</button></li>
              <li><button onClick={() => handleNav("contato")} className="hover:text-primary text-muted-foreground transition-smooth">Contato</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm md:text-base">Conecte-se</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/cd.consult/?hl=pt-BR" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth p-2 -m-2">
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>

              <a href="https://br.linkedin.com/company/cd-consult-br" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth p-2 -m-2">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>

              <a href="mailto:contato@cdconsult.net" className="text-muted-foreground hover:text-primary transition-smooth p-2 -m-2">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>

      <div className="border-t pt-8 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} CD Consult - AV & UC Technologies. Todos os direitos reservados -
          <a
            href="/politica-de-privacidade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-smooth ml-1"
          >
            Política de Privacidade
          </a>
        </p>
      </div>

      </div>
    </footer>
  );
};

export default Footer;
