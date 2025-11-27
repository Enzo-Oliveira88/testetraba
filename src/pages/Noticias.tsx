import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import NewsCard from "@/components/NewsCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { newsData } from "@/data/newsData";
import { NEWS_CATEGORIES, NewsCategory } from "@/types/news";

const Noticias = () => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>("Todas");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = newsData.filter((news) => {
    const matchesCategory = selectedCategory === "Todas" || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Notícias
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
            Acompanhe os últimos acontecimentos, inaugurações e realizações da nossa gestão.
          </p>

          {/* Barra de Pesquisa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar notícias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 font-body"
              />
            </div>
          </motion.div>

          {/* Filtros de Categoria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {NEWS_CATEGORIES.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
              >
                <Badge
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "shadow-glow"
                      : "hover:bg-primary/10"
                  }`}
                >
                  {category}
                </Badge>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Contador de Resultados */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center text-muted-foreground font-body"
        >
          {filteredNews.length} {filteredNews.length === 1 ? "notícia encontrada" : "notícias encontradas"}
        </motion.div>

        {/* Grid de Notícias */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredNews.map((noticia) => (
              <Link key={noticia.id} to={`/noticias/${noticia.slug}`}>
                <NewsCard
                  image={noticia.image}
                  title={noticia.title}
                  date={noticia.date}
                  excerpt={noticia.excerpt}
                />
              </Link>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <p className="text-xl text-muted-foreground font-body">
              Nenhuma notícia encontrada com os filtros selecionados.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center shadow-glow"
        >
          <h2 className="text-3xl font-bold mb-4">
            Fique por Dentro
          </h2>
          <p className="text-lg max-w-3xl mx-auto opacity-95 font-body">
            Acompanhe nossas redes sociais e este portal para ficar sempre informado 
            sobre as ações e conquistas da nossa gestão. Transparência é um compromisso!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Noticias;
