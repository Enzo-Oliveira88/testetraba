import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, User, Tag, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { newsData } from "@/data/newsData";
import NewsCard from "@/components/NewsCard";
import { useToast } from "@/hooks/use-toast";

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const news = newsData.find((item) => item.slug === slug);
  
  if (!news) {
    return (
      <div className="min-h-screen py-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Notícia não encontrada</h1>
          <Link to="/noticias">
            <Button>Voltar para Notícias</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedNews = newsData
    .filter((item) => item.category === news.category && item.id !== news.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: news.title,
        text: news.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copiado!",
        description: "O link da notícia foi copiado para a área de transferência.",
      });
    }
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Breadcrumb e Voltar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/noticias")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Notícias
          </Button>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
            <Link to="/" className="hover:text-primary transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link to="/noticias" className="hover:text-primary transition-colors">
              Notícias
            </Link>
            <span>/</span>
            <span className="text-foreground">{news.title}</span>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">{news.category}</Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {news.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 font-body">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{news.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{news.author}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="ml-auto"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </motion.div>

          {/* Imagem Principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 rounded-2xl overflow-hidden shadow-elegant"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <div
              className="text-foreground/90 font-body leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: news.content }}
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.8",
              }}
            />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 pb-12 mb-12 border-b border-border"
          >
            <Tag className="h-4 w-4 text-muted-foreground" />
            {news.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="font-body">
                {tag}
              </Badge>
            ))}
          </motion.div>

          {/* Notícias Relacionadas */}
          {relatedNews.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Notícias Relacionadas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((item) => (
                  <Link key={item.id} to={`/noticias/${item.slug}`}>
                    <NewsCard
                      image={item.image}
                      title={item.title}
                      date={item.date}
                      excerpt={item.excerpt}
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
