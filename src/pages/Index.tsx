import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Stats from "@/components/Stats";
import Solutions from "@/components/Solutions";
import Founder from "@/components/Founder";
import Clients from "@/components/Clients";
import Diagnosis from "@/components/Diagnosis";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CD Consult - Consultoria em Audiovisual e Comunicação Unificada | AV & UC Technologies</title>
        <meta 
          name="description" 
          content="Consultoria especializada em AV e UC para empresas. Transforme tecnologia em resultados com planejamento estratégico, expertise internacional e ROI garantido." 
        />
        <meta name="keywords" content="consultoria audiovisual, comunicação unificada, AV UC, tecnologia empresarial, consultoria tecnológica" />
        <link rel="canonical" href="https://cdconsult.com.br" />
        
        <meta property="og:title" content="CD Consult - Consultoria em Audiovisual e Comunicação Unificada" />
        <meta property="og:description" content="Transforme a comunicação da sua empresa em vantagem competitiva com nossa consultoria especializada em AV e UC." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CD Consult - Consultoria AV & UC" />
        <meta name="twitter:description" content="Consultoria especializada em Audiovisual e Comunicação Unificada para empresas." />
      </Helmet>

      <main className="min-h-screen">
        <Header />
        <Hero />
        <Mission />
        <Stats />
        <Solutions />
        <Founder />
        <Clients />
        <Diagnosis />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;