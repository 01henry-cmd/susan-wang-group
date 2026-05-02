import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ListingCard } from "@/components/ListingCard";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface Listing {
  image: string;
  price: string;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: string;
  status: string;
  featured?: boolean;
}

export default function ListingsPage() {
  const { t } = useLanguage();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/listings.json")
      .then((r) => r.json())
      .then((data) => { setListings(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                <div>
                  <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4 flex items-center">
                    <span className="w-4 h-[1px] bg-primary mr-3"></span>
                    {t("listings_page_eyebrow")}
                  </p>
                  <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight">{t("listings_page_h1")}</h1>
                </div>
              </div>
              
              {/* Filter Bar */}
              <div className="flex flex-col lg:flex-row gap-4 pb-8 border-b border-border">
                <div className="relative flex-grow group">
                  <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5 transition-colors group-focus-within:text-primary" strokeWidth={1.5} />
                  <input 
                    type="text" 
                    placeholder={t("listings_search_placeholder")}
                    className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-border focus:outline-none focus:border-foreground transition-colors text-lg font-light placeholder:text-foreground/40"
                  />
                </div>
                <div className="flex gap-4 lg:w-[400px]">
                  <select className="flex-1 pb-3 pt-3 bg-transparent border-b border-border focus:outline-none focus:border-foreground transition-colors text-sm uppercase tracking-wider font-medium appearance-none cursor-pointer">
                    <option>{t("listings_price_any")}</option>
                    <option>$1M - $2M</option>
                    <option>$2M - $5M</option>
                    <option>$5M+</option>
                  </select>
                  <select className="w-24 pb-3 pt-3 bg-transparent border-b border-border focus:outline-none focus:border-foreground transition-colors text-sm uppercase tracking-wider font-medium appearance-none cursor-pointer">
                    <option>{t("listings_beds")}</option>
                    <option>3+</option>
                    <option>4+</option>
                    <option>5+</option>
                  </select>
                  <button className="flex items-center justify-center text-xs uppercase tracking-widest font-medium border-b border-transparent hover:border-foreground transition-colors px-2 pb-3 pt-3">
                    <SlidersHorizontal className="w-4 h-4 mr-2" strokeWidth={1.5} />
                    {t("listings_filters")}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* IDX Note */}
            <div className="mb-16 text-xs tracking-widest uppercase text-foreground/50 flex items-center">
              <div className="w-1.5 h-1.5 bg-primary mr-3" />
              {t("listings_idx_note")}
            </div>

            {loading ? (
              <div className="py-40 flex justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary/40" />
              </div>
            ) : (
              <>
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
                  {listings.map((listing, i) => (
                    <div key={i} className={i % 3 === 1 ? "md:mt-12" : ""}>
                      <ListingCard {...listing} />
                    </div>
                  ))}
                </div>
                
                <div className="mt-32 flex justify-center">
                  <button className="text-xs uppercase tracking-[0.2em] font-medium border border-foreground px-8 py-4 hover:bg-foreground hover:text-white transition-colors">
                    {t("listings_load_more")}
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
