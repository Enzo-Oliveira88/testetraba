import prefeitoPortrait from "@/assets/prefeito-portrait.jpg";
import { Heart, Users, Award } from "lucide-react";

const Biografia = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Toni de Dalmir
          </h1>
          <p className="text-xl text-muted-foreground">
            Prefeito de São Félix do Coribe - Partido Progressistas (PP)
          </p>
        </div>

        {/* Imagem e Introdução */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <img
              src={prefeitoPortrait}
              alt="Prefeito Toni de Dalmir"
              className="w-full max-w-md mx-auto rounded-2xl shadow-elegant"
            />
          </div>

          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-primary">
              Um filho de São Félix do Coribe
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Toni Marcos, mais conhecido como <strong>Toni de Dalmir</strong>, é um filho de 
              São Félix do Coribe – Bahia que construiu sua trajetória com base no trabalho, 
              na fé e no compromisso com as pessoas.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Desde cedo, aprendeu com a família o valor da honestidade, da palavra e da 
              responsabilidade com o próximo — princípios que carrega em cada passo de sua vida pública.
            </p>
          </div>
        </div>

        {/* História e Trajetória */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-primary">Trajetória de Liderança</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Com uma história marcada pela proximidade com o povo, Toni sempre acreditou que o 
              verdadeiro progresso nasce da união e do diálogo. Antes de ser prefeito, foi um 
              cidadão ativo, presente nas comunidades, ouvindo de perto as necessidades e os 
              sonhos de cada morador.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Essa escuta constante o tornou um líder acessível, simples e comprometido com o 
              desenvolvimento da cidade.
            </p>
          </div>

          <div className="bg-gradient-soft rounded-2xl p-8 animate-fade-in-up">
            <blockquote className="text-2xl font-medium text-center text-primary italic">
              "Cada cidadão é parte essencial do nosso futuro."
            </blockquote>
            <p className="text-center text-muted-foreground mt-4">
              — Prefeito Toni de Dalmir
            </p>
          </div>

          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-primary">Gestão e Compromisso</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Como gestor, Toni de Dalmir conduz São Félix do Coribe com planejamento, 
              transparência e amor pela terra que o viu crescer. Seu mandato é pautado por 
              ações concretas nas áreas de educação, saúde, infraestrutura e desenvolvimento 
              social, sempre com o olhar voltado para o bem-estar das famílias e o futuro das 
              novas gerações.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Toni acredita que governar é cuidar das pessoas, valorizar o trabalho e gerar 
              oportunidades para que todos possam viver com dignidade. Com humildade e determinação, 
              segue firme no propósito de construir uma cidade mais forte, humana e feliz — 
              porque para ele, <strong>povo feliz é o maior legado que um gestor pode deixar</strong>.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-card rounded-2xl shadow-elegant p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">
            Princípios que Guiam Nossa Gestão
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Honestidade</h3>
              <p className="text-muted-foreground">
                Transparência e ética em cada ação do governo municipal.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proximidade</h3>
              <p className="text-muted-foreground">
                Um prefeito presente, que ouve e dialoga com o povo.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Compromisso</h3>
              <p className="text-muted-foreground">
                Dedicação total ao desenvolvimento e bem-estar de todos.
              </p>
            </div>
          </div>
        </div>

        {/* Frase de Encerramento */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-2xl font-bold text-primary mb-4">
            "Pronto, preparado e querendo."
          </p>
          <p className="text-lg text-muted-foreground">
            Esse é o compromisso de Toni de Dalmir com São Félix do Coribe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biografia;
