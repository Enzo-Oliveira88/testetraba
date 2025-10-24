import NewsCard from "@/components/NewsCard";
import educacaoImg from "@/assets/educacao.jpg";
import saudeImg from "@/assets/saude.jpg";
import infraestruturaImg from "@/assets/infraestrutura.jpg";

const Noticias = () => {
  const noticias = [
    {
      image: educacaoImg,
      title: "Prefeito Toni de Dalmir inaugura nova escola no bairro Centro",
      date: "15 de Outubro de 2025",
      excerpt: "A nova unidade escolar conta com 8 salas de aula, laboratório de informática, biblioteca e quadra poliesportiva. O investimento total foi de R$ 1,5 milhão e vai beneficiar mais de 400 alunos da região.",
    },
    {
      image: saudeImg,
      title: "Unidade de Saúde recebe novos equipamentos médicos",
      date: "10 de Outubro de 2025",
      excerpt: "A gestão municipal investiu em equipamentos de última geração para melhorar o atendimento à população. Novos aparelhos de ultrassom, raio-x digital e equipamentos laboratoriais estão em pleno funcionamento.",
    },
    {
      image: infraestruturaImg,
      title: "Pavimentação da Avenida Principal é concluída",
      date: "5 de Outubro de 2025",
      excerpt: "Após três meses de obra, a principal via de acesso à cidade está completamente asfaltada. O projeto incluiu também novo sistema de drenagem e iluminação LED, trazendo mais segurança e conforto para motoristas e pedestres.",
    },
    {
      image: educacaoImg,
      title: "Programa de Bolsas Universitárias beneficia 50 estudantes",
      date: "28 de Setembro de 2025",
      excerpt: "A prefeitura anunciou a concessão de 50 bolsas de estudo para jovens que foram aprovados em universidades públicas e privadas. O programa visa garantir que nenhum talento seja perdido por falta de recursos.",
    },
    {
      image: saudeImg,
      title: "Campanha de vacinação atinge meta de 95% da população",
      date: "20 de Setembro de 2025",
      excerpt: "Graças ao trabalho dedicado das equipes de saúde e à conscientização da população, São Félix do Coribe superou a meta estabelecida pelo Ministério da Saúde na campanha de vacinação contra a gripe.",
    },
    {
      image: infraestruturaImg,
      title: "Novas praças e áreas de lazer são entregues à comunidade",
      date: "15 de Setembro de 2025",
      excerpt: "Três novos espaços de convivência foram inaugurados em diferentes bairros da cidade. As praças contam com playground, academia ao ar livre, iluminação e paisagismo, proporcionando qualidade de vida para todas as idades.",
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Notícias
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe os últimos acontecimentos, inaugurações e realizações da nossa gestão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {noticias.map((noticia, index) => (
            <NewsCard key={index} {...noticia} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Fique por Dentro
          </h2>
          <p className="text-lg max-w-3xl mx-auto opacity-95">
            Acompanhe nossas redes sociais e este portal para ficar sempre informado 
            sobre as ações e conquistas da nossa gestão. Transparência é um compromisso!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
