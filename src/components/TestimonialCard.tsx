import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "./ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  delay?: number;
}

const TestimonialCard = ({ name, role, content, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <Card className="p-6 h-full backdrop-blur-sm bg-card/80 border-border/50 shadow-glass hover:shadow-elegant transition-all duration-300">
        <Quote className="h-8 w-8 text-primary/30 mb-4" />
        <p className="text-foreground/90 font-body mb-4 italic leading-relaxed">
          "{content}"
        </p>
        <div className="border-t border-border/50 pt-4 mt-4">
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
