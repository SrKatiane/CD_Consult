import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle  } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", company: "",email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Agendar diagnóstico
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme a comunicação da sua empresa em vantagem competitiva
          </p>
        </div>
 
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <Card className="animate-slide-in-left">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    required
                    className="h-11 md:h-12"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Nome da Empresa
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nome da empresa"
                    required
                    className="h-11 md:h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail Corporativo
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    required
                    className="h-11 md:h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(00) 00000-0000"
                    required
                    className="h-11 md:h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-nos sobre seu projeto"
                    rows={5}
                    required
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 md:h-12" size="lg">
                  Solicitar Contato
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4 md:space-y-6 animate-slide-in-right">
            <Card>
              <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1 text-sm md:text-base">E-mail</h3>
                  <p className="text-sm md:text-base text-muted-foreground break-all">contato@cdconsult.com.br</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1 text-sm md:text-base">Telefone</h3>
                  <p className="text-sm md:text-base text-muted-foreground">+55 (11) 99999-9999</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1 text-sm md:text-base">Whatsapp</h3>
                  <p className="text-sm md:text-base text-muted-foreground">+55 (11) 99999-9999</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;