import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Target, Zap, Shield, Users } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Target,
      challenge: "Falta de Planejamento",
      solution: "Diagnóstico completo e planejamento personalizado,  alinhado com as necessidades e objetivos do negócio",
      color: "text-primary",
    },
    {
      icon: AlertCircle,
      challenge: "Especificação inadequada",
      solution: "Projeto e especificação baseada em um diagnóstico detalhado de desejos e necessidades",
      color: "text-primary",
    },
    {
      icon: Zap,
      challenge: "Investimento sem Gestão",
      solution: "Utilizamos o conceito TCO (Total Cost of Ownership), considerando custos a longo prazo, obsolescência e planejamento para reuso ou descarte futuro da tecnologia. Sistemas que permitem suporte e manutenção remota têm menor custo operacional.",
      color: "text-primary",
    },
    {
      icon: Shield,
      challenge: "Suporte Contínuo e Eficiente",
      solution: "Soluções que permitem gerenciamento e suporte remoto: preditivo, on-line, rápido, eficaz, menores custos e sustentável",
      color: "text-primary",
    },
    {
      icon: Target,
      challenge: "Sem Sustentabilidade, o custo é maior para o Negócio e para o Planeta",
      solution: "Soluções alinhadas com boas práticas e diretrizes da SAVe – Sustainability in AV",
      color: "text-primary",
    },
    {
      icon: Users,
      challenge: "Suporte Contínuo e Eficiente",
      solution: "Soluções que permitem gerenciamento e suporte remoto: preditivo, on-line, rápido, eficaz, menores custos e sustentável",
      color: "text-primary",
    },
  ];

  return (
    <section id="solucoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Desafios
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Que você provavelmente já enfrentou ou pode encarar na sua empresa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((item, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 md:p-8">
                <item.icon className={`w-10 h-10 md:w-12 md:h-12 mb-4 ${item.color}`} />
                
                <div className="mb-4 md:mb-6">
                  <div className="flex items-start gap-2 mb-3">
                    <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-base md:text-lg mb-1">Desafio:</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{item.challenge}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 md:pt-6 border-t">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-base md:text-lg mb-1">Nossa Solução:</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;