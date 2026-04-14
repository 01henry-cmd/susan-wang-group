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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col border-t border-border pt-10 pb-8 group"
    >
      <p className="font-serif text-[1.35rem] leading-[1.6] font-light italic text-foreground/85 mb-8 flex-grow">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-serif text-base tracking-wide text-foreground">{name}</p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/45 mt-1">{location}</p>
        </div>
        <p className="text-[9px] tracking-[0.2em] uppercase text-foreground/40 border border-border/60 px-2.5 py-1 shrink-0">{type}</p>
      </div>
    </motion.div>
  );
}
