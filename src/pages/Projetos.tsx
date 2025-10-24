import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import educacaoImg from "@/assets/educacao.jpg";
import saudeImg from "@/assets/saude.jpg";
import infraestruturaImg from "@/assets/infraestrutura.jpg";

const Projetos = () => {
  const projetos = [
    {
      image: educacaoImg,
      title: "Modernização das Escolas Municipais",
      description: "Reforma e ampliação das unidades escolares com novas salas de aula, laboratórios de informática e áreas de lazer.",
      category: "Educação",
      impact: "Mais de 2.000 alunos beneficiados",
    },
    {
      image: educacaoImg,
      title: "Valorização dos Professores",
      description: "Programa de formação continuada e melhorias nas condições de trabalho dos educadores do município.",
      category: "Educação",
      impact: "150 professores capacitados",
    },
    {
      image: saudeImg,
      title: "Ampliação da Unidade de Saúde Central",
      description: "Expansão do posto de saúde com novos consultórios, sala de vacina e atendimento odontológico.",
      category: "Saúde",
      impact: "Capacidade de 500 atendimentos/mês",
    },
    {
      image: saudeImg,
      title: "Programa Saúde em Casa",
      description: "Equipes de saúde visitam as comunidades rurais garantindo atendimento médico e distribuição de medicamentos.",
      category: "Saúde",
      impact: "Atende 15 comunidades rurais",
    },
    {
      image: infraestruturaImg,
      title: "Pavimentação de Vias Urbanas",
      description: "Asfaltamento de ruas e avenidas melhorando a mobilidade e qualidade de vida da população.",
      category: "Infraestrutura",
      impact: "15 km de vias pavimentadas",
    },
    {
      image: infraestruturaImg,
      title: "Iluminação LED em Toda a Cidade",
      description: "Substituição de lâmpadas por LED trazendo economia de energia e mais segurança para os cidadãos.",
      category: "Infraestrutura",
      impact: "2.000 pontos de iluminação",
    },
    {
      image: infraestruturaImg,
      title: "Recuperação de Estradas Rurais",
      description: "Manutenção e melhorias nas estradas vicinais facilitando o escoamento da produção agrícola.",
      category: "Desenvolvimento Rural",
      impact: "80 km de estradas recuperadas",
    },
    {
      image: educacaoImg,
      title: "Centro de Convivência do Idoso",
      description: "Espaço dedicado aos nossos idosos com atividades culturais, recreativas e atendimento especializado.",
      category: "Social",
      impact: "200 idosos atendidos mensalmente",
    },
    {
      image: educacaoImg,
      title: "Praça da Juventude",
      description: "Novo espaço de lazer com quadra poliesportiva, pista de skate e área para eventos culturais.",
      category: "Lazer e Cultura",
      impact: "Espaço para toda a comunidade",
    },
  ];

  const categorias = ["Todas", "Educação", "Saúde", "Infraestrutura", "Social", "Desenvolvimento Rural", "Lazer e Cultura"];
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");

  const projetosFiltrados = categoriaSelecionada === "Todas" 
    ? projetos 
    : projetos.filter(p => p.category === categoriaSelecionada);

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Trabalhos e Projetos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça as ações concretas que estão transformando São Félix do Coribe 
            e melhorando a vida de cada cidadão.
          </p>
        </div>

        <div className="mb-12">
          <Tabs defaultValue="Todas" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 h-auto p-2 bg-muted/50">
              {categorias.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  onClick={() => setCategoriaSelecionada(cat)}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {projetosFiltrados.map((projeto, index) => (
            <ProjectCard key={index} {...projeto} />
          ))}
        </div>

        {projetosFiltrados.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </div>
        )}

        <div className="mt-16 bg-gradient-soft rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Comprometidos com o Futuro
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Cada projeto é pensado para atender às reais necessidades da população. 
            Trabalhamos com planejamento, transparência e dedicação para construir 
            uma São Félix do Coribe cada vez melhor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
