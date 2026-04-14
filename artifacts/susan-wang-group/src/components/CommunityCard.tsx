import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface CommunityCardProps {
  name: string;
  image: string;
  description: string;
  href: string;
}

export function CommunityCard({ name, image, description, href }: CommunityCardProps) {
  return (
    <Link href={href}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="group relative aspect-[3/4] overflow-hidden cursor-pointer block shadow-sm hover:shadow-xl transition-shadow duration-700"
      >
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
        
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <h3 className="text-white font-serif text-4xl mb-3 font-light tracking-tight translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]">{name}</h3>
          
          <div className="overflow-hidden">
            <p className="text-white/80 text-sm leading-relaxed mb-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-[0.22,1,0.36,1] line-clamp-3">
              {description}
            </p>
          </div>
          
          <div className="flex items-center text-white/90 text-xs font-medium uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            <span className="border-b border-white/30 pb-1">Explore</span>
            <ArrowRight size={14} className="ml-3 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
