import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoCard } from "@/components/VideoCard";

export default function VideosPage() {
  const videos = [
    {
      title: "Q3 Orange County Market Update",
      thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      category: "Market Updates",
      duration: "04:15"
    },
    {
      title: "Inside Shady Canyon: Neighborhood Tour",
      thumbnail: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      category: "Neighborhood Tours",
      duration: "06:30"
    },
    {
      title: "The Art of Pricing Your Home",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      category: "Seller Education",
      duration: "05:45"
    },
    {
      title: "Touring 142 Oceanfront Ave",
      thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      category: "Property Tours",
      duration: "03:20"
    },
    {
      title: "Navigating Multiple Offers as a Buyer",
      thumbnail: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
      category: "Buyer Education",
      duration: "07:10"
    },
    {
      title: "Los Angeles Luxury Market Trends",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      category: "Market Updates",
      duration: "05:05"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Insights & Tours" 
              subtitle="Video Library" 
              align="left"
            />
            
            {/* Featured Video */}
            <div className="mb-20">
              <div className="aspect-video w-full bg-foreground border border-border overflow-hidden relative shadow-lg">
                <iframe 
                  className="w-full h-full absolute inset-0"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&rel=0" 
                  title="Featured Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-6">
                <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">Featured</p>
                <h2 className="font-serif text-3xl mb-2">The 2024 Luxury Real Estate Forecast</h2>
                <p className="text-foreground/70 max-w-3xl">An in-depth analysis of what buyers and sellers can expect in the Southern California premium markets over the next 12 months.</p>
              </div>
            </div>

            {/* Video Grid */}
            <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
              <h3 className="font-serif text-2xl">Recent Videos</h3>
              <div className="flex space-x-6 text-sm text-foreground/60">
                <button className="text-foreground border-b border-foreground pb-1 font-medium">All</button>
                <button className="hover:text-foreground transition-colors">Tours</button>
                <button className="hover:text-foreground transition-colors">Education</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
              {videos.map((video, i) => (
                <VideoCard key={i} {...video} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
