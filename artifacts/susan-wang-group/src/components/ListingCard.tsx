import { motion } from "framer-motion";

interface ListingCardProps {
  image: string;
  price: string;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: string;
  status?: string;
  featured?: boolean;
}

export function ListingCard({ image, price, address, city, beds, baths, sqft, status = "Active", featured = false }: ListingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
    >
      <div className={`relative overflow-hidden mb-5 ${featured ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
        <span
          className="absolute top-4 left-4 z-10 text-[9px] tracking-[0.25em] uppercase text-white font-medium px-3 py-1"
          style={{
            background:
              status.toLowerCase().includes("sold") || status.toLowerCase().includes("just listed")
                ? "#b6259f"
                : "#1b9dbf",
          }}
        >
          {status}
        </span>
        <img
          src={image}
          alt={address}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      <div className="space-y-2">
        <p className="font-serif text-2xl font-light tracking-tight text-foreground">{price}</p>
        <div>
          <p className="text-foreground/80 font-light">{address}</p>
          <p className="text-[11px] tracking-[0.18em] uppercase text-foreground/60 mt-1">{city}</p>
        </div>
        <div className="flex items-center gap-0 pt-4 border-t border-border text-[11px] tracking-[0.15em] uppercase text-foreground/65">
          <span>{beds} Bed</span>
          <span className="mx-3 text-border">|</span>
          <span>{baths} Bath</span>
          <span className="mx-3 text-border">|</span>
          <span>{sqft} sf</span>
        </div>
      </div>
    </motion.div>
  );
}
