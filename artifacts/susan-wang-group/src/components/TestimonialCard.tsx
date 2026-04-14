import { motion } from "framer-motion";

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
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative pt-12 pb-8 px-6 md:px-10 border-t border-border hover:bg-foreground/5 transition-colors duration-500 group h-full flex flex-col"
    >
      <div className="absolute top-0 left-6 md:left-10 -translate-y-1/2 text-[8rem] font-serif leading-none text-primary/10 group-hover:text-primary/20 transition-colors duration-500 select-none">
        "
      </div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <p className="text-foreground/90 font-serif text-2xl md:text-3xl leading-snug italic font-light tracking-tight mb-10 flex-grow">
          {quote}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-border/50">
          <div>
            <span className="font-serif text-xl tracking-wide block">{name}</span>
            <span className="text-xs uppercase tracking-widest text-foreground/50 mt-1 block">{location}</span>
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-border inline-block self-start sm:self-auto bg-white/50">
            {type}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
