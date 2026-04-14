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
        transition={{ duration: 0.5 }}
        className="group relative h-[400px] overflow-hidden cursor-pointer block"
      >
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end">
          <h3 className="text-white font-serif text-3xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{name}</h3>
          <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center text-primary text-sm font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
            <span>Explore Area</span>
            <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
