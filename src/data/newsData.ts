import { NewsItem } from "@/types/news";
import educacaoImg from "@/assets/educacao.jpg";
import saudeImg from "@/assets/saude.jpg";
import infraestruturaImg from "@/assets/infraestrutura.jpg";

export const newsData: NewsItem[] = [
  {
    id: "1",
    slug: "inauguracao-nova-escola-centro",
    title: "Prefeito Toni de Dalmir inaugura nova escola no bairro Centro",
    excerpt: "A nova unidade escolar conta com 8 salas de aula, laboratório de informática, biblioteca e quadra poliesportiva.",
    content: `
      <p>Em uma cerimônia emocionante que reuniu autoridades, professores, alunos e a comunidade, o prefeito Toni de Dalmir inaugurou nesta quinta-feira (15) a nova Escola Municipal José da Silva, no bairro Centro.</p>
      
      <p>A unidade escolar, que representa um investimento total de R$ 1,5 milhão, foi projetada com infraestrutura moderna e completa para oferecer educação de qualidade aos estudantes de São Félix do Coribe.</p>
      
      <h3>Estrutura Moderna</h3>
      <p>A nova escola conta com 8 salas de aula amplas e climatizadas, laboratório de informática equipado com 30 computadores de última geração, biblioteca com acervo de mais de 2.000 livros, quadra poliesportiva coberta, refeitório, área de convivência e acessibilidade completa.</p>
      
      <h3>Benefícios para a Comunidade</h3>
      <p>Com capacidade para atender mais de 400 alunos do ensino fundamental, a escola vai reduzir significativamente a necessidade de deslocamento das crianças, que antes precisavam ir para unidades mais distantes. "Esta é uma conquista de todos nós. Investir em educação é investir no futuro da nossa cidade", declarou o prefeito durante a inauguração.</p>
      
      <p>A escola também gerará 45 empregos diretos, entre professores, coordenadores, auxiliares e equipe administrativa, todos selecionados em processo público e transparente.</p>
      
      <h3>Compromisso com a Educação</h3>
      <p>Esta é a terceira escola reformada ou construída durante a gestão do prefeito Toni de Dalmir, reafirmando o compromisso com a educação de qualidade como prioridade máxima da administração municipal.</p>
    `,
    image: educacaoImg,
    date: "15 de Outubro de 2025",
    category: "Educação",
    author: "Assessoria de Comunicação",
    tags: ["educação", "infraestrutura", "inauguração", "escola"],
  },
  {
    id: "2",
    slug: "unidade-saude-novos-equipamentos",
    title: "Unidade de Saúde recebe novos equipamentos médicos",
    excerpt: "A gestão municipal investiu em equipamentos de última geração para melhorar o atendimento à população.",
    content: `
      <p>A Unidade Básica de Saúde do bairro Jardim das Flores recebeu esta semana novos equipamentos médicos de última geração, resultado de um investimento de R$ 800 mil da gestão municipal.</p>
      
      <h3>Tecnologia a Serviço da Saúde</h3>
      <p>Entre os equipamentos adquiridos estão dois aparelhos de ultrassom digital, um equipamento de raio-x digital de alta resolução, autoclave para esterilização, equipamentos laboratoriais completos e mobiliário médico moderno.</p>
      
      <p>"Com esses novos equipamentos, podemos oferecer diagnósticos mais precisos e rápidos, reduzindo o tempo de espera e a necessidade de encaminhamentos para outras cidades", explicou a secretária de Saúde, Dra. Maria Helena.</p>
      
      <h3>Atendimento Humanizado</h3>
      <p>Além dos equipamentos, a unidade passou por reforma completa, com nova pintura, climatização de todos os ambientes e melhorias na acessibilidade. A equipe médica também foi ampliada, com a contratação de dois novos médicos e quatro enfermeiros.</p>
      
      <p>O prefeito Toni de Dalmir acompanhou a entrega dos equipamentos e reforçou o compromisso com a saúde pública: "Saúde é prioridade. Cada cidadão merece atendimento digno, rápido e de qualidade. Vamos continuar investindo para que isso seja realidade em todo o município."</p>
      
      <h3>Próximos Passos</h3>
      <p>Segundo a gestão, outras duas unidades de saúde receberão melhorias semelhantes nos próximos meses, fazendo parte do programa "Saúde Mais Perto de Você".</p>
    `,
    image: saudeImg,
    date: "10 de Outubro de 2025",
    category: "Saúde",
    author: "Assessoria de Comunicação",
    tags: ["saúde", "equipamentos", "investimento", "atendimento"],
  },
  {
    id: "3",
    slug: "pavimentacao-avenida-principal-concluida",
    title: "Pavimentação da Avenida Principal é concluída",
    excerpt: "Após três meses de obra, a principal via de acesso à cidade está completamente asfaltada.",
    content: `
      <p>A Avenida Principal de São Félix do Coribe, principal via de acesso à cidade, foi completamente pavimentada após três meses de obras. O investimento de R$ 2,3 milhões transformou a qualidade de vida de todos que transitam pela região.</p>
      
      <h3>Obra Completa</h3>
      <p>O projeto não incluiu apenas o asfaltamento da via. Foi implementado um moderno sistema de drenagem que vai evitar alagamentos em períodos de chuva, calçadas largas e acessíveis foram construídas em toda a extensão da avenida, e um sistema de iluminação LED de alta eficiência foi instalado.</p>
      
      <p>A obra contemplou 3,2 km de pavimentação, beneficiando diretamente mais de 5.000 moradores da região central e facilitando o acesso de toda a população aos serviços públicos, comércio e equipamentos da cidade.</p>
      
      <h3>Segurança e Conforto</h3>
      <p>"Esta obra era um sonho antigo da população. Agora temos uma via moderna, segura e confortável. Além disso, a nova iluminação LED trouxe mais segurança para quem precisa transitar à noite", declarou o prefeito Toni de Dalmir durante a cerimônia de inauguração.</p>
      
      <h3>Desenvolvimento Econômico</h3>
      <p>Comerciantes da região já relatam aumento no movimento. A facilidade de acesso tem atraído mais clientes e novos negócios estão se instalando na avenida. "É uma obra que não beneficia apenas a mobilidade, mas impulsiona a economia local", destacou o presidente da Associação Comercial.</p>
      
      <p>A gestão municipal informou que outras vias importantes do município também receberão pavimentação nos próximos meses, dando continuidade ao programa de infraestrutura urbana.</p>
    `,
    image: infraestruturaImg,
    date: "5 de Outubro de 2025",
    category: "Infraestrutura",
    author: "Assessoria de Comunicação",
    tags: ["infraestrutura", "pavimentação", "obra", "mobilidade"],
  },
  {
    id: "4",
    slug: "programa-bolsas-universitarias-2025",
    title: "Programa de Bolsas Universitárias beneficia 50 estudantes",
    excerpt: "A prefeitura anunciou a concessão de 50 bolsas de estudo para jovens aprovados em universidades.",
    content: `
      <p>Em uma solenidade emocionante realizada no auditório da Prefeitura Municipal, o prefeito Toni de Dalmir entregou certificados a 50 estudantes contemplados pelo Programa Municipal de Bolsas Universitárias 2025.</p>
      
      <h3>Investimento no Futuro</h3>
      <p>O programa, que representa um investimento anual de R$ 600 mil, oferece bolsas integrais e parciais para jovens que foram aprovados em universidades públicas e privadas, mas que não têm condições financeiras de arcar com os custos de moradia, alimentação e material didático.</p>
      
      <p>"Nenhum talento pode ser perdido por falta de recursos. Nossos jovens têm potencial e merecem oportunidades. Este programa é um investimento no futuro de São Félix do Coribe", afirmou o prefeito.</p>
      
      <h3>Critérios e Benefícios</h3>
      <p>Para participar do programa, os estudantes passaram por análise socioeconômica e apresentaram comprovação de aprovação em instituições de ensino superior. As bolsas variam de R$ 500 a R$ 1.200 por mês, dependendo da necessidade de cada estudante e do tipo de curso.</p>
      
      <p>Além do auxílio financeiro, os bolsistas recebem mentoria de profissionais da área de formação escolhida e têm prioridade em processos seletivos de estágios na Prefeitura Municipal.</p>
      
      <h3>Depoimentos</h3>
      <p>"Essa bolsa mudou minha vida. Sou a primeira da minha família a fazer faculdade e não conseguiria sem este apoio", declarou emocionada Ana Paula Silva, 19 anos, aprovada em Pedagogia.</p>
      
      <p>O programa terá nova seleção em 2026, com previsão de aumento no número de bolsas oferecidas.</p>
    `,
    image: educacaoImg,
    date: "28 de Setembro de 2025",
    category: "Educação",
    author: "Assessoria de Comunicação",
    tags: ["educação", "bolsas", "universidade", "jovens"],
  },
  {
    id: "5",
    slug: "campanha-vacinacao-meta-superada",
    title: "Campanha de vacinação atinge meta de 95% da população",
    excerpt: "São Félix do Coribe superou a meta estabelecida pelo Ministério da Saúde na campanha de vacinação.",
    content: `
      <p>São Félix do Coribe comemora o sucesso da campanha de vacinação contra a gripe, que atingiu 95% da população-alvo, superando a meta de 90% estabelecida pelo Ministério da Saúde.</p>
      
      <h3>Mobilização Total</h3>
      <p>O resultado é fruto de uma mobilização intensa das equipes de saúde do município, que realizaram ações em escolas, empresas, postos de saúde e até visitas domiciliares para garantir que todos os grupos prioritários fossem imunizados.</p>
      
      <p>"Nosso time de saúde trabalhou incansavelmente. Fizemos ações nos finais de semana, estendemos horários, fomos até as comunidades rurais. O resultado mostra que, quando há planejamento e dedicação, conseguimos fazer a diferença", declarou a secretária de Saúde.</p>
      
      <h3>Grupos Prioritários</h3>
      <p>Foram vacinadas 12.500 pessoas dos grupos prioritários: idosos, crianças, gestantes, puérperas, professores, profissionais de saúde e pessoas com comorbidades. A campanha teve duração de dois meses e contou com 15 pontos de vacinação espalhados pela cidade.</p>
      
      <h3>Reconhecimento</h3>
      <p>O prefeito Toni de Dalmir parabenizou as equipes e a população: "Este resultado é motivo de orgulho. Mostra que nossa cidade entende a importância da prevenção e que nossa equipe de saúde é dedicada e competente. Parabéns a todos!"</p>
      
      <p>O município recebeu menção honrosa da Secretaria Estadual de Saúde pelo desempenho na campanha e serve de exemplo para outras cidades da região.</p>
    `,
    image: saudeImg,
    date: "20 de Setembro de 2025",
    category: "Saúde",
    author: "Assessoria de Comunicação",
    tags: ["saúde", "vacinação", "prevenção", "sucesso"],
  },
  {
    id: "6",
    slug: "novas-pracas-areas-lazer",
    title: "Novas praças e áreas de lazer são entregues à comunidade",
    excerpt: "Três novos espaços de convivência foram inaugurados em diferentes bairros da cidade.",
    content: `
      <p>Em um sábado de festa, o prefeito Toni de Dalmir inaugurou três novas praças em diferentes bairros de São Félix do Coribe, proporcionando mais qualidade de vida e espaços de convivência para a população.</p>
      
      <h3>Infraestrutura Completa</h3>
      <p>Cada uma das praças foi projetada pensando nas diferentes faixas etárias e necessidades da comunidade. Todas contam com playground infantil com piso emborrachado, academia ao ar livre com equipamentos modernos, pistas de caminhada, bancos, iluminação LED, paisagismo e acessibilidade completa.</p>
      
      <p>O investimento total nas três praças foi de R$ 950 mil, recursos do município e de emenda parlamentar estadual.</p>
      
      <h3>Benefícios para a Comunidade</h3>
      <p>"Estas praças são muito mais que espaços físicos. São lugares de encontro, de convivência, de promoção da saúde e do bem-estar. As famílias agora têm onde levar suas crianças para brincar com segurança, os jovens têm espaço para praticar esportes e os idosos têm onde fazer suas caminhadas", destacou o prefeito.</p>
      
      <h3>Participação Popular</h3>
      <p>Os projetos das praças foram desenvolvidos com participação da comunidade. Foram realizadas audiências públicas em cada bairro para ouvir sugestões e necessidades dos moradores, que puderam opinar sobre equipamentos e layout dos espaços.</p>
      
      <p>"Meu filho estava ansioso por esta praça. Agora ele tem um lugar seguro e bonito para brincar perto de casa", comemorou a moradora Joana Santos, do bairro Novo Horizonte.</p>
      
      <h3>Mais Praças em 2026</h3>
      <p>A gestão municipal já anunciou que outras quatro praças estão em fase de projeto e devem ser iniciadas no primeiro semestre de 2026, dando continuidade ao programa de criação de espaços públicos de lazer.</p>
    `,
    image: infraestruturaImg,
    date: "15 de Setembro de 2025",
    category: "Social",
    author: "Assessoria de Comunicação",
    tags: ["lazer", "praças", "comunidade", "qualidade de vida"],
  },
];
