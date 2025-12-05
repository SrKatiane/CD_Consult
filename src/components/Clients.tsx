import bayerLogo from "@/assets/client-bayer.png";
import havanianasLogo from "@/assets/client-havaianas.png";
import nubankLogo from "@/assets/client-nubank.png";
import rocheLogo from "@/assets/client-roche.png";
import insperLogo from "@/assets/client-insper.png";
import fdsbcLogo from "@/assets/client-fdsbc.png";
import iseLogo from "@/assets/client-ise.png";
import bpLogo from "@/assets/client-bp.png";
import imeLogo from "@/assets/client-ime.png";
import mackenzieLogo from "@/assets/client-mackenzie.png";
import inteliLogo from "@/assets/client-inteli.png";
import belavistaLogo from "@/assets/client-belavista.png";
import pucLogo from "@/assets/client-puc.png";
import boehringerLogo from "@/assets/client-boehringer.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Clients = () => {
  const clients = [
    { name: "Bayer", logo: bayerLogo },
    { name: "Havaianas", logo: havanianasLogo },
    { name: "Nubank", logo: nubankLogo },
    { name: "Roche", logo: rocheLogo },
    { name: "Insper", logo: insperLogo },
    { name: "FDSBC", logo: fdsbcLogo },
    { name: "ISE Business School", logo: iseLogo },
    { name: "BP Educação e Pesquisa", logo: bpLogo },
    { name: "IME-USP", logo: imeLogo },
    { name: "Mackenzie", logo: mackenzieLogo },
    { name: "Inteli", logo: inteliLogo },
    { name: "Faculdade Belavista", logo: belavistaLogo },
    { name: "PUC Campinas", logo: pucLogo },
    { name: "Boehringer Ingelheim", logo: boehringerLogo },
  ];

  return (
    <section id="clientes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Clientes que Confiam em Nós
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabalhamos com as principais empresas do Brasil e América Latina
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="flex items-center justify-center p-4 md:p-6 grayscale hover:grayscale-0 transition-all duration-300">
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="h-24 md:h-32 lg:h-40 w-auto max-w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;