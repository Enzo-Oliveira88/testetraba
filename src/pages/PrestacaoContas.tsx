import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Building, Heart } from "lucide-react";
import educacaoImg from "@/assets/educacao.jpg";
import saudeImg from "@/assets/saude.jpg";
import infraestruturaImg from "@/assets/infraestrutura.jpg";

const PrestacaoContas = () => {
  const indicadores = [
    {
      icon: Building,
      titulo: "Obras Concluídas",
      valor: "23",
      descricao: "Projetos entregues à população",
      cor: "bg-primary",
    },
    {
      icon: Users,
      titulo: "Famílias Beneficiadas",
      valor: "5.200+",
      descricao: "Através dos programas sociais",
      cor: "bg-secondary",
    },
    {
      icon: Heart,
      titulo: "Atendimentos de Saúde",
      valor: "12.500",
      descricao: "Consultas realizadas este ano",
      cor: "bg-primary",
    },
    {
      icon: TrendingUp,
      titulo: "Investimentos",
      valor: "R$ 8,5M",
      descricao: "Aplicados em melhorias na cidade",
      cor: "bg-secondary",
    },
  ];

  const entregas = [
    {
      area: "Educação",
      imagem: educacaoImg,
      antes: "4 escolas sem reforma há 10 anos",
      depois: "6 escolas modernizadas e 2 novas unidades",
      impacto: "+40% na capacidade de atendimento",
    },
    {
      area: "Saúde",
      imagem: saudeImg,
      antes: "1 posto de saúde com atendimento limitado",
      depois: "3 unidades ampliadas com novos equipamentos",
      impacto: "Tempo de espera reduzido em 60%",
    },
    {
      area: "Infraestrutura",
      imagem: infraestruturaImg,
      antes: "85% das ruas sem pavimentação",
      depois: "15 km de vias asfaltadas e iluminadas",
      impacto: "Mobilidade urbana transformada",
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Prestação de Contas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparência e resultados: veja os números e conquistas da nossa gestão.
          </p>
        </div>

        {/* Indicadores Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in-up">
          {indicadores.map((item, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all">
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-16 h-16 ${item.cor} rounded-full mb-4 mx-auto`}>
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-4xl font-bold text-primary">{item.valor}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-1">{item.titulo}</p>
                <p className="text-sm text-muted-foreground">{item.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Antes e Depois */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">
            Transformação em Resultados
          </h2>
          <div className="space-y-8">
            {entregas.map((entrega, index) => (
              <Card key={index} className="overflow-hidden shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto">
                    <img
                      src={entrega.imagem}
                      alt={entrega.area}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-6 text-primary">{entrega.area}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">ANTES</p>
                        <p className="text-lg">{entrega.antes}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">AGORA</p>
                        <p className="text-lg font-semibold text-primary">{entrega.depois}</p>
                      </div>
                      <div className="pt-4 border-t">
                        <p className="text-sm font-semibold text-muted-foreground mb-1">IMPACTO</p>
                        <p className="text-lg font-bold text-secondary">{entrega.impacto}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Compromisso com a Transparência */}
        <div className="bg-gradient-soft rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Compromisso com a Transparência
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-6">
            Todos os recursos públicos são aplicados com responsabilidade e fiscalização constante. 
            Nossa gestão presta contas de cada real investido, porque acreditamos que o dinheiro 
            público deve servir ao povo com total transparência.
          </p>
          <p className="text-xl font-semibold text-primary">
            Governar é cuidar das pessoas e prestar contas com honestidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrestacaoContas;
