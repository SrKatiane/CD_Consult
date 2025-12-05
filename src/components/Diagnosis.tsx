import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Diagnosis = () => {
  const premises = [
    "User friendly — fácil de usar para todos os perfis",
    "Future proof — preparado para evoluções tecnológicas",
    "Escalável — permite crescimento sem retrabalho",
    "Sustentável — menor impacto ambiental e maior eficiência",
    "Pronto para ambientes híbridos",
    "Integração com sistemas prediais",
    "AVoIP (Áudio e Vídeo sobre IP)",
    "Compatível com gerenciamento remoto",
    "Aderente à cultura e processos da empresa",
    "Harmônico com o conceito arquitetônico",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Diagnóstico Section */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
              Diagnóstico de Necessidades e Desejos
            </h2>
            <Card className="">
              <CardContent className="p-6 md:p-8 lg:p-10">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Antes de decidir investimentos, equipamentos ou padrões tecnológicos, existe um passo 
                  fundamental: entender o que realmente importa para o seu espaço, para sua operação e 
                  para as pessoas que vão utilizar a solução. É exatamente aqui que começamos.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Projetos de tecnologia AV-UC costumam representar uma parcela relevante do orçamento, 
                  mas, na prática, tudo deveria ser simples, fluido e transparente para os usuários. 
                  Quando isso não acontece, surgem frustrações, retrabalhos e decisões caras que 
                  poderiam ter sido evitadas.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Nosso Diagnóstico de Necessidades e Desejos existe para evitar esse cenário. Ele é o 
                  ponto de partida para quem quer clareza antes de investir, além de ser uma conversa estruturada 
                  que revela oportunidades, riscos e prioridades, ajudando você a visualizar o que pode 
                  ser construído a partir daqui. Muitas vezes, é nesse primeiro diálogo que a solução 
                  certa começa a aparecer.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Premissas Section */}
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
              Nossas Premissas de Projeto
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
              Cada projeto nasce a partir desse diagnóstico inicial e segue princípios que garantem 
              eficiência, durabilidade e alinhamento ao futuro:
            </p>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {premises.map((premise, index) => (
                <Card 
                  key={index} 
                  className="transition-smooth hover:shadow-lg hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base font-medium">{premise}</p>
                  </CardContent>
                </Card>
                
              ))}
            </div>
            <div>
              <p className="text-base md:text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
              Se você quer entender por onde começar ou explorar o que é possível construir no seu projeto, 
              uma conversa inicial já traz muita clareza, e pode definir todo o caminho daqui pra frente.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnosis;
