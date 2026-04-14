import { motion } from "framer-motion";
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
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer flex flex-col h-full"
    >
      <div className="relative aspect-[4/5] overflow-hidden mb-6">
        <div className="absolute top-4 left-4 z-10 border border-white/50 text-white bg-black/10 backdrop-blur-md px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase">
          {status}
        </div>
        <img 
          src={image} 
          alt={address} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
      </div>
      
      <div className="space-y-3 flex-grow flex flex-col justify-between">
        <div>
          <p className="text-3xl font-serif text-foreground font-light tracking-tight">{price}</p>
          <div className="flex flex-col mt-2">
            <span className="text-foreground/80 font-light text-lg">{address}</span>
            <span className="text-foreground/50 text-xs tracking-wider uppercase mt-1">
              {city}
            </span>
          </div>
        </div>
        
        <div className="flex items-center pt-4 mt-4 border-t border-border text-xs tracking-wider uppercase text-foreground/60">
          <div className="flex items-center">
            <span>{beds} Bed</span>
          </div>
          <div className="w-[1px] h-3 bg-border mx-3"></div>
          <div className="flex items-center">
            <span>{baths} Bath</span>
          </div>
          <div className="w-[1px] h-3 bg-border mx-3"></div>
          <div className="flex items-center">
            <span>{sqft} Sq.Ft.</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
