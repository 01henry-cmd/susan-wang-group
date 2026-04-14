import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Camera, LineChart, Shield, Megaphone } from "lucide-react";

export default function SellersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow">
        {/* Editorial Hero */}
        <section className="relative min-h-[70vh] flex items-end pb-24 pt-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80" 
              alt="Luxury property exterior twilight" 
              className="w-full h-full object-cover object-center"
            />
            {/* Dark warm overlay */}
            <div className="absolute inset-0 bg-[#2a1f18]/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center text-primary text-xs tracking-[0.3em] uppercase font-medium mb-6">
                <div className="w-8 h-[1px] bg-primary mr-4"></div>
                Seller Representation
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6 font-light tracking-tight leading-[1.1]">
                Maximizing Your Returns.
              </h1>
              <p className="text-xl text-white/80 leading-relaxed font-light max-w-2xl border-l border-white/20 pl-6 ml-2">
                We treat your property not merely as a listing, but as an asset requiring sophisticated positioning, editorial-grade marketing, and aggressive negotiation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Marketing Approach */}
        <section className="py-32">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 lg:pr-12"
              >
                <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-6">The Standard</p>
                <h2 className="font-serif text-4xl md:text-5xl mb-8 font-light tracking-tight leading-tight">Editorial-Grade Presentation</h2>
                <p className="text-foreground/70 mb-12 font-light text-lg leading-relaxed">
                  In the luxury sector, the first showing happens online. A property's digital footprint dictates its perceived value. We invest heavily upfront to ensure your home commands attention and justifies premium pricing.
                </p>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 mr-6">
                      <Camera className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl mb-2 font-light">Visual Asset Creation</h4>
                      <p className="text-foreground/70 font-light leading-relaxed">Twilight photography, cinematic video tours, and aerial drone footage capture the lifestyle, not just the structure.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 mr-6">
                      <Megaphone className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl mb-2 font-light">Global Reach</h4>
                      <p className="text-foreground/70 font-light leading-relaxed">Syndication across Coldwell Banker Global Luxury networks, Wall Street Journal, Mansion Global, and targeted digital campaigns.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 mr-6">
                      <Shield className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl mb-2 font-light">Curated Staging</h4>
                      <p className="text-foreground/70 font-light leading-relaxed">Collaborating with top interior designers to optimize spatial flow and elevate the aesthetic appeal to target demographics.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="lg:col-span-6 relative">
                <div className="aspect-[4/5] relative bg-muted p-6">
                  <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1000&q=80" alt="Luxury property showcase" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-border -z-10" />
              </div>
              
            </div>
          </div>
        </section>

        {/* Strategy / Valuation CTA */}
        <section className="py-32 bg-[#1a1a1a] text-white text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-8">The Art of Pricing & Negotiation</h2>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-16 max-w-3xl mx-auto">
              Overpricing leads to stagnation; underpricing leaves capital on the table. We utilize advanced predictive analytics to establish a pricing strategy that drives urgency. Once offers arrive, our protocol maximizes your net proceeds while mitigating risk.
            </p>
            
            <div className="bg-white/5 border border-white/10 p-10 md:p-16 backdrop-blur-sm text-left">
              <LineChart className="w-10 h-10 text-primary mb-8" strokeWidth={1} />
              <h3 className="font-serif text-3xl mb-4 font-light">Request a Valuation Model</h3>
              <p className="text-white/60 font-light mb-8 text-lg">
                Discover the true market value of your property. We provide a comprehensive, data-driven comparative analysis, not an automated algorithm.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="Enter your property address" 
                  className="flex-grow px-6 py-4 bg-black/50 border border-white/20 focus:outline-none focus:border-primary text-white placeholder:text-white/30"
                />
                <button className="bg-primary text-primary-foreground px-8 py-4 uppercase tracking-[0.15em] text-sm font-medium hover:bg-primary/90 transition-colors">
                  Request Report
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Sales Process */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-20">
              <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4">Timeline</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight">Preparation to Close</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
              {[
                { step: "01", title: "Strategic Preparation", desc: "We identify high-ROI improvements, arrange staging, and handle pre-inspections to eliminate buyer objections before they ever arise." },
                { step: "02", title: "Market Launch", desc: "A coordinated debut leveraging private networks, digital platforms, and exclusive broker previews to generate immediate momentum." },
                { step: "03", title: "Offer Management", desc: "Vetting buyer qualifications, analyzing offer terms, and leveraging multiple bids to improve price and conditions." },
                { step: "04", title: "Escrow & Closing", desc: "Navigating contingencies, appraisals, and the final walk-through with meticulous attention to detail to ensure a seamless close." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="font-serif text-5xl text-foreground/10 mb-4 font-light">{item.step}</div>
                  <div className="border-t border-border pt-6">
                    <h4 className="font-serif text-2xl mb-4 font-light">{item.title}</h4>
                    <p className="text-foreground/70 font-light leading-relaxed text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
