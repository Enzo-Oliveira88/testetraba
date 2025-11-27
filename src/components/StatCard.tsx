import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

const StatCard = ({ icon: Icon, value, suffix = "", prefix = "", label, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="relative overflow-hidden"
    >
      <div className="bg-gradient-glass backdrop-blur-md border border-border/30 rounded-2xl p-8 text-center shadow-glass hover:shadow-glow transition-all duration-500 group">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-lg"
        >
          <Icon className="h-8 w-8 text-primary-foreground" />
        </motion.div>
        
        <div className="text-4xl font-bold mb-2 text-foreground">
          <AnimatedCounter end={value} suffix={suffix} prefix={prefix} duration={2.5} />
        </div>
        
        <p className="text-muted-foreground font-body font-medium">{label}</p>
        
        <motion.div
          className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"
          initial={false}
        />
      </div>
    </motion.div>
  );
};

export default StatCard;
