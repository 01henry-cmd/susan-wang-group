import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { CommunityCard } from "@/components/CommunityCard";
import { motion } from "framer-motion";

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow">
        {/* Editorial Hero */}
        <section className="relative min-h-[60vh] flex items-end pb-24 pt-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80" 
              alt="Southern California Coast" 
              className="w-full h-full object-cover object-center grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-[#2f3531]/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-foreground">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center text-primary text-xs tracking-[0.3em] uppercase font-medium mb-6">
                <div className="w-8 h-[1px] bg-primary mr-4"></div>
                Explore Southern California
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6 font-light tracking-tight leading-[1.1]">
                Curated Markets.
              </h1>
              
              {/* Editorial Index */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 mt-12 pt-8 border-t border-foreground/10 text-sm tracking-[0.1em] uppercase font-medium">
                <a href="#newport-beach" className="hover:text-primary transition-colors">01. Newport Beach</a>
                <a href="#irvine" className="hover:text-primary transition-colors">02. Irvine</a>
                <a href="#los-angeles" className="hover:text-primary transition-colors">03. Los Angeles</a>
                <a href="#huntington-beach" className="hover:text-primary transition-colors">04. Huntington Beach</a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <div id="newport-beach">
                <CommunityCard 
                  name="Newport Beach"
                  image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=80"
                  description="Renowned for its expansive harbor, pristine beaches, and ultra-luxury real estate. Newport Beach offers an unparalleled coastal lifestyle, featuring exclusive enclaves like Crystal Cove, Pelican Hill, and the Balboa Peninsula."
                  href="/contact"
                />
              </div>
              <div id="irvine" className="md:mt-32">
                <CommunityCard 
                  name="Irvine"
                  image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1000&q=80"
                  description="A master-planned marvel known for its safety, world-class educational institutions, and thriving corporate centers. Irvine features meticulously designed villages like Orchard Hills and Shady Canyon."
                  href="/contact"
                />
              </div>
              <div id="los-angeles">
                <CommunityCard 
                  name="Los Angeles"
                  image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80"
                  description="The cultural epicenter of the West Coast. From the historic estates of Beverly Hills and Bel Air to the modern architectural triumphs of the Hollywood Hills and the vibrant pulse of West Hollywood."
                  href="/contact"
                />
              </div>
              <div id="huntington-beach" className="md:mt-32">
                <CommunityCard 
                  name="Huntington Beach"
                  image="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1000&q=80"
                  description="Known globally as 'Surf City USA,' offering a relaxed yet refined coastal atmosphere. Featuring expansive stretches of sand, waterfront dining, and highly sought-after properties."
                  href="/contact"
                />
              </div>
            </div>
            
            <div className="mt-40 text-center bg-[#d8d0eb] p-16 md:p-24">
              <h3 className="font-serif text-3xl md:text-4xl mb-8 font-light tracking-tight">Seeking insights on a specific neighborhood?</h3>
              <CTAButton href="/contact" variant="outline">Request Neighborhood Report</CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
