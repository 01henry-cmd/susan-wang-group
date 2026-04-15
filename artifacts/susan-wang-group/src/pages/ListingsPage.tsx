import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ListingCard } from "@/components/ListingCard";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function ListingsPage() {
  const listings = [
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1000&q=80",
      price: "$4,250,000",
      address: "142 Oceanfront Ave",
      city: "Newport Beach, CA",
      beds: 4,
      baths: 4.5,
      sqft: "3,850",
      status: "Active"
    },
    {
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1000&q=80",
      price: "$2,895,000",
      address: "88 Orchard Hills Dr",
      city: "Irvine, CA",
      beds: 5,
      baths: 5,
      sqft: "4,200",
      status: "Just Listed"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1000&q=80",
      price: "$5,100,000",
      address: "412 Beverly Estate",
      city: "Los Angeles, CA",
      beds: 6,
      baths: 7,
      sqft: "6,500",
      status: "Active"
    },
    {
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1000&q=80",
      price: "$1,850,000",
      address: "24 Seaview Ln",
      city: "Huntington Beach, CA",
      beds: 3,
      baths: 2.5,
      sqft: "2,400",
      status: "Under Contract"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80",
      price: "$8,950,000",
      address: "7 Pelican Crest",
      city: "Newport Coast, CA",
      beds: 6,
      baths: 8,
      sqft: "9,200",
      status: "Active"
    },
    {
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1000&q=80",
      price: "$3,150,000",
      address: "15 Shady Canyon",
      city: "Irvine, CA",
      beds: 4,
      baths: 4.5,
      sqft: "4,800",
      status: "Sold"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32">
        <section className="py-12 bg-[#f0eaf8]">
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
                    Portfolio
                  </p>
                  <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight">Exclusive Properties</h1>
                </div>
              </div>
              
              {/* Refined Filter Bar */}
              <div className="flex flex-col lg:flex-row gap-4 pb-8 border-b border-border">
                <div className="relative flex-grow group">
                  <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5 transition-colors group-focus-within:text-primary" strokeWidth={1.5} />
                  <input 
                    type="text" 
                    placeholder="Search by city, neighborhood, or zip..." 
                    className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-border focus:outline-none focus:border-foreground transition-colors text-lg font-light placeholder:text-foreground/40"
                  />
                </div>
                <div className="flex gap-4 lg:w-[400px]">
                  <select className="flex-1 pb-3 pt-3 bg-transparent border-b border-border focus:outline-none focus:border-foreground transition-colors text-sm uppercase tracking-wider font-medium appearance-none cursor-pointer">
                    <option>Price (Any)</option>
                    <option>$1M - $2M</option>
                    <option>$2M - $5M</option>
                    <option>$5M+</option>
                  </select>
                  <select className="w-24 pb-3 pt-3 bg-transparent border-b border-border focus:outline-none focus:border-foreground transition-colors text-sm uppercase tracking-wider font-medium appearance-none cursor-pointer">
                    <option>Beds</option>
                    <option>3+</option>
                    <option>4+</option>
                    <option>5+</option>
                  </select>
                  <button className="flex items-center justify-center text-xs uppercase tracking-widest font-medium border-b border-transparent hover:border-foreground transition-colors px-2 pb-3 pt-3">
                    <SlidersHorizontal className="w-4 h-4 mr-2" strokeWidth={1.5} />
                    Filters
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Note about IDX */}
            <div className="mb-16 text-xs tracking-widest uppercase text-foreground/50 flex items-center">
              <div className="w-1.5 h-1.5 bg-primary mr-3" />
              Viewing featured portfolio. Full MLS/IDX integration coming soon.
            </div>

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
                Load More Properties
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
