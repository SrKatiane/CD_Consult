import { Card, CardContent } from "@/components/ui/card";
import { MessageCircleQuestion, ShieldCheck, TrendingDown } from "lucide-react";

const WhyConsultant = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Por que ter um Consultor no seu Investimento em AV/UC?
          </h2>

          <Card className="border-2 border-primary/20 mb-8">
            <CardContent className="p-6 md:p-8 lg:p-10">
              <div className="flex justify-center mb-4">
                <MessageCircleQuestion className="w-10 h-10 md:w-12 md:h-12 text-primary" />
              </div>
              <p className="text-xl md:text-2xl font-semibold mb-3">
                Comunicação é importante para o seu negócio?
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                Se a resposta for sim, trate esse investimento com a importância que ele merece.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="text-left">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Investir em um sistema AV/UC sem um consultor é como construir uma casa sem arquiteto: 
                      você até pode tentar sozinho, mas o risco de comprar errado, atrasar o projeto ou 
                      precisar refazer etapas é muito maior.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <TrendingDown className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      O custo de uma consultoria especializada é sempre menor que o prejuízo causado por 
                      decisões equivocadas, seja por frustração dos usuários, perda de produtividade, 
                      falhas no sistema ou gastos desnecessários ao longo do processo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyConsultant;
