import logo from "@/assets/logo-cd-consult-new.png";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
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
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-primary transition-smooth">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-smooth">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-muted-foreground hover:text-primary transition-smooth">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#clientes" className="text-muted-foreground hover:text-primary transition-smooth">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm md:text-base">Conecte-se</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth p-2 -m-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="mailto:contato@cdconsult.com.br"
                className="text-muted-foreground hover:text-primary transition-smooth p-2 -m-2"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CD Consult - AV & UC Technologies. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;