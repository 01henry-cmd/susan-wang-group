import { motion } from "framer-motion";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { Link } from "wouter";

interface ListingCardProps {
  image: string;
  price: string;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: string;
  status?: string;
}

export function ListingCard({ image, price, address, city, beds, baths, sqft, status = "Active" }: ListingCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer group"
    >
      <div className="relative aspect-[4/3] overflow-hidden mb-4">
        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium tracking-wider uppercase">
          {status}
        </div>
        <img 
          src={image} 
          alt={address} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="space-y-2">
        <p className="text-xl font-serif text-foreground">{price}</p>
        <div className="flex flex-col">
          <span className="text-foreground/90 font-medium">{address}</span>
          <span className="text-foreground/60 text-sm flex items-center mt-1">
            <MapPin size={14} className="mr-1 opacity-70" />
            {city}
          </span>
        </div>
        
        <div className="flex items-center space-x-4 pt-3 mt-3 border-t border-border text-sm text-foreground/70">
          <div className="flex items-center">
            <Bed size={16} className="mr-1.5 opacity-60" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1.5 opacity-60" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <Square size={16} className="mr-1.5 opacity-60" />
            <span>{sqft} Sq.Ft.</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
