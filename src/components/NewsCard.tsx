import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  excerpt: string;
}

const NewsCard = ({ image, title, date, excerpt }: NewsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 group h-full backdrop-blur-sm bg-card/80 border-border/50 cursor-pointer">
        <div className="aspect-video overflow-hidden relative">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"
          />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 font-body">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3 font-body mb-3">{excerpt}</p>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-primary font-semibold hover:underline flex items-center gap-1 text-sm"
          >
            Ler mais →
          </motion.button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NewsCard;
