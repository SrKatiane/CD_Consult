import teamImage from "@/assets/team-collaboration.jpg";

const Mission = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-in-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Nossa Missão
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Orientamos organizações na tomada de decisão sobre tecnologia audiovisual em seus ambientes com estratégia, 
              planejamento e visão de futuro, garantindo qualidade, produtividade, otimização de recursos, 
              e o melhor retorno sobre o investimento.
            </p>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">
              AV & UC Technologies
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Somos uma equipe de profissionais com experiência internacional na indústria AV e UC, 
              incluindo especialistas em acústica, iluminação, BMS, infraestrutura e redes.
            </p>
          </div>
          
          <div className="order-1 md:order-2 animate-slide-in-right">
            <img
              src={teamImage}
              alt="Equipe CD Consult"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;