import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

const TimelineItem = ({ year, title, description, index }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-6 items-start"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow z-10"
        >
          <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
        </motion.div>
        {index !== 0 && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="w-0.5 bg-gradient-primary -mt-12 absolute top-12"
            style={{ height: "calc(100% + 3rem)" }}
          />
        )}
      </div>

      <motion.div
        whileHover={{ x: 10 }}
        className="flex-1 pb-12"
      >
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
            {year}
          </span>
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground font-body leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;
