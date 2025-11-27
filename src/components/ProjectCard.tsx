import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  impact?: string;
}

const ProjectCard = ({ image, title, description, category, impact }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 group h-full backdrop-blur-sm bg-card/80 border-border/50">
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
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="font-semibold shadow-lg backdrop-blur-sm">
              {category}
            </Badge>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground font-body mb-3">{description}</p>
          {impact && (
            <p className="text-sm text-primary font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {impact}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
