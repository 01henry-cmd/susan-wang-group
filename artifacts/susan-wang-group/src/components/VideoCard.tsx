import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

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
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden mb-4 bg-muted">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/10">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300">
            <PlayCircle className="w-8 h-8 text-white fill-white/10 ml-1" />
          </div>
        </div>
        {duration && (
          <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 backdrop-blur-md">
            {duration}
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <p className="text-primary text-xs uppercase tracking-widest font-medium">{category}</p>
        <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">{title}</h3>
      </div>
    </motion.div>
  );
}
