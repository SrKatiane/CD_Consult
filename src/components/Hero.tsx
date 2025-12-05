import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-conference-room.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="block text-white/90 mb-2">A COMUNICAÇÃO DA SUA EMPRESA</span>
            <span className="block bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(174,30,34,0.5)]">
              ACELERA OU TRAVA
            </span>
            <span className="block text-white/90">RESULTADOS?</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Somos especialistas em AV e Comunicação Integrada. Atuamos como consultoria independente, 
            ajudando empresas e instituições de ensino a transformarem tecnologia em desempenho eficaz.
          </p>
        </div>
      </div>
      <div className="mouse-indicator"></div>
    </section>
  );
};

export default Hero;