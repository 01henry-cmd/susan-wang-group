import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  category: string;
  duration?: string;
}

export function VideoCard({ title, thumbnail, category, duration }: VideoCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer block"
    >
      <div className="relative aspect-video overflow-hidden mb-6 bg-muted shadow-sm hover:shadow-xl transition-shadow duration-700">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-md scale-90 opacity-80 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
            <Play className="w-6 h-6 text-white ml-1 fill-white/20" strokeWidth={1.5} />
          </div>
        </div>
        
        {duration && (
          <div className="absolute bottom-4 right-4 bg-black/80 text-white text-[10px] tracking-widest font-medium uppercase px-3 py-1.5">
            {duration}
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-medium">{category}</p>
        <h3 className="font-serif text-2xl text-foreground font-light tracking-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">{title}</h3>
      </div>
    </motion.div>
  );
}
