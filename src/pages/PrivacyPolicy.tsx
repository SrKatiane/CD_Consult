import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | CD Consult</title>
        <meta name="description" content="Política de Privacidade da CD Consult - Saiba como coletamos, usamos e protegemos seus dados pessoais." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">POLÍTICA DE PRIVACIDADE</h1>
          <p className="text-muted-foreground mb-8">Última atualização: 10/12/2025</p>
          
          <div className="prose prose-invert max-w-none space-y-8 text-foreground/90">
            <p>
              A <strong>CD CONSULT</strong>, localizada em Osasco – SP, com sede na Alameda Sombreiro, Osasco, São Paulo, CEP 06030-013, respeita a sua privacidade e está comprometida com a proteção dos seus dados pessoais.
            </p>
            <p>
              Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos as informações dos usuários do site <a href="https://www.cdconsult.net" className="text-primary hover:underline">www.cdconsult.net</a>, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018).
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. QUAIS DADOS COLETAMOS</h2>
              <p>Ao utilizar nosso site, podemos coletar os seguintes dados pessoais:</p>
              
              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">1.1. Dados fornecidos voluntariamente (via formulário de contato):</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nome completo</li>
                <li>Nome da empresa</li>
                <li>E-mail corporativo</li>
                <li>Telefone</li>
                <li>Conteúdo da mensagem enviada</li>
              </ul>
              <p className="mt-3">Esses dados são enviados diretamente para a caixa de e-mail corporativa da CD Consult para fins de atendimento comercial.</p>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">1.2. Dados coletados automaticamente (cookies e navegação):</h3>
              <p>Atualmente, não utilizamos ferramentas de tracking, como Google Analytics, Pixel ou outras tecnologias de monitoramento.</p>
              <p className="mt-3">Mesmo assim, o próprio navegador pode enviar informações básicas, como:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Endereço IP</li>
                <li>Tipo de dispositivo e navegador</li>
                <li>Páginas acessadas</li>
                <li>Horários de acesso</li>
              </ul>
              <p className="mt-3">Esses dados podem ser coletados por padrões técnicos do servidor/hospedagem, mesmo sem ferramentas de análise instaladas.</p>
              <p className="mt-3"><em>Quando o site passar a utilizar cookies ou soluções de análise, esta Política será atualizada.</em></p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. PARA QUE UTILIZAMOS OS SEUS DADOS</h2>
              <p>Os dados coletados poderão ser utilizados para:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Responder solicitações enviadas pelo formulário de contato</li>
                <li>Realizar atendimentos comerciais e enviar respostas sobre nossos serviços</li>
                <li>Cumprir obrigações legais ou regulatórias</li>
              </ul>
              <p className="mt-3">Não enviamos comunicações promocionais automáticas. Qualquer contato será feito apenas por demanda do próprio usuário.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. COMPARTILHAMENTO DE DADOS</h2>
              <p>A CD Consult não vende, aluga ou compartilha seus dados pessoais com terceiros, exceto quando:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>For necessário para viabilizar serviços essenciais ao funcionamento do site (por exemplo, serviços de hospedagem ou e-mail)</li>
                <li>Houver ordem judicial ou determinação de autoridades públicas</li>
                <li>O próprio usuário solicitar atendimento que dependa de parceiros ou fornecedores (mediante aviso prévio)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. COOKIES E TECNOLOGIAS DE RASTREAMENTO</h2>
              <p>Atualmente, nosso site não utiliza cookies de análise, marketing ou ferramentas de rastreamento.</p>
              <p className="mt-3">Poderemos utilizar cookies no futuro para:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Personalizar a experiência do usuário</li>
                <li>Analisar navegação e tráfego</li>
                <li>Aperfeiçoar o desempenho do site</li>
              </ul>
              <p className="mt-3">Nesse caso, o usuário será informado e poderá gerenciar suas preferências.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. SEUS DIREITOS COMO TITULAR DE DADOS</h2>
              <p>Você possui os seguintes direitos garantidos pela LGPD:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Confirmar se tratamos seus dados pessoais</li>
                <li>Solicitar acesso aos dados</li>
                <li>Solicitar correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar exclusão dos dados, quando aplicável</li>
                <li>Revogar consentimento</li>
                <li>Solicitar portabilidade dos dados</li>
                <li>Obter informações sobre usos e compartilhamentos dos dados</li>
              </ul>
              <p className="mt-3">Para exercer seus direitos, entre em contato pelo e-mail: <a href="mailto:contato@cdconsult.net" className="text-primary hover:underline">contato@cdconsult.net</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. SEGURANÇA DOS DADOS</h2>
              <p>
                Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, perda ou destruição, alterações não autorizadas e uso indevido.
                Somente colaboradores autorizados têm acesso às informações enviadas pelo site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. TEMPO DE RETENÇÃO DOS DADOS</h2>
              <p>
                Os dados pessoais são mantidos apenas pelo tempo necessário para cumprir as finalidades mencionadas nesta política
                ou exigências legais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. ALTERAÇÕES NESTA POLÍTICA</h2>
              <p>
                Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir mudanças na legislação
                ou nas práticas da empresa. Recomendamos revisitar este documento periodicamente.
              </p>
            </section>


            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. CONTATO</h2>
              <p>Para dúvidas sobre esta Política ou solicitações relacionadas aos seus dados pessoais, contate:</p>
              <div className="mt-4 p-6 bg-white/5 border border-primary/20 rounded-lg">
                <p className="font-semibold text-foreground">CD Consult – Integração e Tecnologia</p>
                <p className="mt-2">E-mail: <a href="mailto:contato@cdconsult.net" className="text-primary hover:underline">contato@cdconsult.net</a></p>
                <p>Site: <a href="https://www.cdconsult.net" className="text-primary hover:underline">www.cdconsult.net</a></p>
                <p>Endereço: Alameda Sombreiro, Osasco – São Paulo, CEP 06030-013</p>
                <p className="mt-2 text-muted-foreground">Fundada em 2015</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
