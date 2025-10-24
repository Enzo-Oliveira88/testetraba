import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, TrendingUp, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import educacaoImg from "@/assets/educacao.jpg";
import saudeImg from "@/assets/saude.jpg";
import infraestruturaImg from "@/assets/infraestrutura.jpg";
import ProjectCard from "@/components/ProjectCard";

const Home = () => {
  const valores = [
    {
      icon: Heart,
      title: "Cuidado com as pessoas",
      description: "Cada cidadão é parte essencial do nosso futuro.",
    },
    {
      icon: Users,
      title: "Proximidade e diálogo",
      description: "Governar é ouvir, servir e construir juntos.",
    },
    {
      icon: TrendingUp,
      title: "Transparência total",
      description: "Trabalhando com dedicação e prestando contas.",
    },
    {
      icon: Award,
      title: "Resultados concretos",
      description: "Povo feliz — esse será nosso legado.",
    },
  ];

  const projetosDestaque = [
    {
      image: educacaoImg,
      title: "Educação de Qualidade",
      description: "Investimento em estrutura escolar e valorização dos professores para garantir o futuro das nossas crianças.",
      category: "Educação",
      impact: "Beneficia mais de 2.000 estudantes",
    },
    {
      image: saudeImg,
      title: "Saúde Mais Perto de Você",
      description: "Ampliação do atendimento médico e modernização das unidades de saúde do município.",
      category: "Saúde",
      impact: "Atendimento humanizado e eficiente",
    },
    {
      image: infraestruturaImg,
      title: "Infraestrutura que Transforma",
      description: "Pavimentação de estradas, iluminação pública e melhorias que facilitam a vida da população.",
      category: "Infraestrutura",
      impact: "Conectando toda a cidade",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Prefeito Toni de Dalmir com o povo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Trabalhando com transparência<br />e dedicação por São Félix do Coribe
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Pronto, preparado e querendo fazer cada vez mais pela nossa cidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projetos">
              <Button size="lg" variant="secondary" className="font-semibold">
                Conheça os Projetos
              </Button>
            </Link>
            <Link to="/biografia">
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold">
                Sobre o Prefeito
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mensagem de Boas-vindas */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Seja bem-vindo ao site oficial do Prefeito Toni de Dalmir
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Aqui, você acompanha de perto o trabalho que está transformando São Félix do Coribe — 
              com planejamento, cuidado e compromisso com cada cidadão.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Este espaço foi criado para prestar contas, divulgar conquistas e fortalecer o diálogo 
              com o povo, porque governar é ouvir, servir e construir juntos o futuro da nossa cidade.
            </p>
          </div>
        </div>
      </section>

      {/* Valores e Princípios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Nossa Gestão em Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam cada decisão e ação da nossa administração.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <valor.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{valor.title}</h3>
                <p className="text-muted-foreground">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* São Félix em Movimento */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              São Félix em Movimento
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos principais projetos e ações que estão transformando nossa cidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {projetosDestaque.map((projeto, index) => (
              <ProjectCard key={index} {...projeto} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/projetos">
              <Button size="lg" className="font-semibold">
                Ver Todos os Projetos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cada cidadão é parte essencial do nosso futuro
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Fale conosco. Sua opinião e participação são fundamentais para construirmos 
            juntos uma São Félix do Coribe cada vez melhor.
          </p>
          <Link to="/contato">
            <Button size="lg" variant="secondary" className="font-semibold">
              Entre em Contato
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
