import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { VideoCard } from "@/components/VideoCard";
import { motion } from "framer-motion";

export default function VideosPage() {
  const videos = [
    {
      title: "Q3 Orange County Market Update",
      thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80",
      category: "Market Updates",
      duration: "04:15"
    },
    {
      title: "Inside Shady Canyon: Neighborhood Tour",
      thumbnail: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1000&q=80",
      category: "Neighborhood Tours",
      duration: "06:30"
    },
    {
      title: "The Art of Pricing Your Home",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80",
      category: "Seller Education",
      duration: "05:45"
    },
    {
      title: "Touring 142 Oceanfront Ave",
      thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1000&q=80",
      category: "Property Tours",
      duration: "03:20"
    },
    {
      title: "Navigating Multiple Offers as a Buyer",
      thumbnail: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1000&q=80",
      category: "Buyer Education",
      duration: "07:10"
    },
    {
      title: "Los Angeles Luxury Market Trends",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80",
      category: "Market Updates",
      duration: "05:05"
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
              className="mb-16"
            >
              <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4 flex items-center">
                <span className="w-4 h-[1px] bg-primary mr-3"></span>
                Video Library
              </p>
              <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight">Insights & Tours</h1>
            </motion.div>
            
            {/* Featured Video - Editorial Treatment */}
            <div className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-8">
                  <div className="aspect-video w-full bg-black relative shadow-2xl overflow-hidden group">
                    <iframe 
                      className="w-full h-full absolute inset-0"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&rel=0" 
                      title="Featured Video" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                    {/* Fake frame/border for editorial feel */}
                    <div className="absolute inset-0 border border-white/10 pointer-events-none mix-blend-overlay"></div>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-medium mb-4">Featured Perspective</p>
                  <h2 className="font-serif text-4xl lg:text-5xl mb-6 font-light tracking-tight leading-tight">The 2024 Luxury Real Estate Forecast</h2>
                  <p className="text-foreground/70 font-light text-lg leading-relaxed mb-8">An in-depth analysis of what buyers and sellers can expect in the Southern California premium markets over the next 12 months.</p>
                  <div className="flex items-center gap-4 text-xs tracking-widest uppercase font-medium">
                    <span className="text-foreground/50">12:45</span>
                    <div className="w-[1px] h-3 bg-border"></div>
                    <button className="border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">Watch Full Video</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Grid */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 border-b border-border pb-6 gap-6">
              <h3 className="font-serif text-3xl font-light tracking-tight">Recent Videos</h3>
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs tracking-widest uppercase font-medium text-foreground/50">
                <button className="text-foreground border-b border-foreground pb-1">All</button>
                <button className="hover:text-foreground transition-colors">Tours</button>
                <button className="hover:text-foreground transition-colors">Education</button>
                <button className="hover:text-foreground transition-colors">Market</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {videos.map((video, i) => (
                <VideoCard key={i} {...video} />
              ))}
            </div>
            
            <div className="mt-24 flex justify-center">
              <button className="text-xs uppercase tracking-[0.2em] font-medium border border-foreground px-8 py-4 hover:bg-foreground hover:text-white transition-colors">
                Load More
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
