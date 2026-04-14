import { motion } from "framer-motion";
import { Link } from "wouter";

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
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="group relative aspect-[3/4] overflow-hidden cursor-pointer block"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <div className="absolute inset-0 p-7 flex flex-col justify-end">
          <h3 className="text-white font-serif text-3xl font-light tracking-tight mb-0 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
            {name}
          </h3>
          <div className="overflow-hidden">
            <p className="text-white/70 text-sm leading-relaxed mt-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
              {description}
            </p>
            <span className="inline-block text-[10px] tracking-[0.22em] uppercase text-white/60 border-b border-white/30 mt-4 pb-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
              Explore
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
