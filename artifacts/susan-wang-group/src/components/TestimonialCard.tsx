import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  type: string;
}

export function TestimonialCard({ quote, name, location, type }: TestimonialCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 md:p-10 border border-border relative group hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-md"
    >
      <Quote className="text-primary/20 w-12 h-12 absolute top-6 left-6" />
      <div className="relative z-10 pt-4">
        <p className="text-foreground/80 font-serif text-lg leading-relaxed italic mb-8">
          "{quote}"
        </p>
        <div className="flex flex-col border-t border-border pt-4">
          <span className="font-medium text-foreground tracking-wide">{name}</span>
          <span className="text-sm text-foreground/60">{location} &middot; {type}</span>
        </div>
      </div>
    </motion.div>
  );
}
