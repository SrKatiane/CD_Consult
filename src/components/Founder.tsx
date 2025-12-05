import { Badge } from "@/components/ui/badge";
import founderImage from "@/assets/founder-carlos.jpg";

const Founder = () => {
  const certifications = [
    "CTS (Certified Technology Specialist)",
    "AVIXA",
    "SAVe (Sustainability in AV)",
  ];

  const education = [
    "MIT (Massachusetts Institute of Technology)",
    "Columbia University",
    "Tuck School of Business",
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-slide-in-left">
            <img
              src={founderImage}
              alt="Carlos Dalmarco - Fundador CD Consult"
              className="rounded-lg shadow-xl w-full max-w-sm md:max-w-md mx-auto"
            />
          </div>

          <div className="animate-slide-in-right">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Liderança e Expertise
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6">
              Carlos Dalmarco
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Fundador da CD Consult, com mais de uma década de experiência em consultoria de Audiovisual 
              e Comunicação Unificada. Atua com clientes corporativos e educacionais em todo o Brasil e 
              América Latina, oferecendo projetos, diagnósticos e estratégias em AV e UC. Possui formação 
              internacional pelas instituições mais prestigiadas do setor e certificações reconhecidas
              globalmente na indústria audiovisual. Além disso, atua como palestrante, articulista, 
              membro da AVIXA e embaixador da SAVe.
            </p>

            <div className="mb-6 md:mb-8">
              <h4 className="font-bold text-base md:text-lg mb-3">Certificações</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="text-xs md:text-sm py-1 px-2 md:px-3">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-base md:text-lg mb-3">Formação Acadêmica</h4>
              <div className="flex flex-wrap gap-2">
                {education.map((edu, index) => (
                  <Badge key={index} variant="outline" className="text-xs md:text-sm py-1 px-2 md:px-3">
                    {edu}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;