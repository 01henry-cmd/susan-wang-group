import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Camera, LineChart, Shield, Megaphone } from "lucide-react";

export default function SellersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <SectionHeading 
              title="Maximizing Your Returns" 
              subtitle="Seller Representation" 
            />
            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              We treat your property not merely as a listing, but as an asset requiring sophisticated positioning, editorial-grade marketing, and aggressive negotiation.
            </p>
          </div>
        </section>

        {/* Marketing Approach */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative h-[600px]">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" alt="Luxury property showcase" className="w-full h-full object-cover absolute inset-0 z-10" />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 z-0" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <p className="text-primary text-sm tracking-widest uppercase font-medium mb-4">The Standard</p>
                <h2 className="font-serif text-3xl md:text-4xl mb-6">Editorial-Grade Presentation</h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  In the luxury sector, the first showing happens online. A property's digital footprint dictates its perceived value. We invest heavily upfront to ensure your home commands attention and justifies premium pricing.
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="flex">
                    <Camera className="w-6 h-6 text-primary shrink-0 mr-4" />
                    <div>
                      <h4 className="font-serif text-lg mb-1">Visual Asset Creation</h4>
                      <p className="text-sm text-foreground/70">Twilight photography, cinematic video tours, and aerial drone footage capture the lifestyle, not just the structure.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <Megaphone className="w-6 h-6 text-primary shrink-0 mr-4" />
                    <div>
                      <h4 className="font-serif text-lg mb-1">Global Reach</h4>
                      <p className="text-sm text-foreground/70">Syndication across Coldwell Banker Global Luxury networks, Wall Street Journal, Mansion Global, and targeted digital campaigns.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <Shield className="w-6 h-6 text-primary shrink-0 mr-4" />
                    <div>
                      <h4 className="font-serif text-lg mb-1">Curated Staging</h4>
                      <p className="text-sm text-foreground/70">Collaborating with top interior designers to optimize spatial flow and elevate the aesthetic appeal to target demographics.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Strategy */}
        <section className="py-24 bg-accent/30">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <SectionHeading 
              title="The Art of Pricing & Negotiation" 
            />
            <p className="text-lg text-foreground/70 leading-relaxed mb-12">
              Overpricing leads to stagnation; underpricing leaves capital on the table. We utilize advanced predictive analytics and hyper-local market data to establish a pricing strategy that drives urgency and competition. Once offers arrive, our negotiation protocol is designed to maximize your net proceeds while mitigating transaction risk.
            </p>
            
            <div className="bg-white p-8 md:p-12 border border-border text-left">
              <LineChart className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-serif text-2xl mb-4">Request a Valuation Model</h3>
              <p className="text-foreground/70 mb-6">
                Discover the true market value of your property. We provide a comprehensive, data-driven comparative market analysis, not an automated algorithm.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="Enter your property address" 
                  className="flex-grow px-4 py-3 border border-border focus:outline-none focus:border-primary bg-background/50"
                />
                <CTAButton className="sm:w-auto w-full">Request Report</CTAButton>
              </form>
            </div>
          </div>
        </section>

        {/* Sales Process */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <SectionHeading title="Preparation to Close" align="left" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              {[
                { step: "01", title: "Strategic Preparation", desc: "We identify high-ROI improvements, arrange staging, and handle pre-inspections to eliminate buyer objections before they arise." },
                { step: "02", title: "Market Launch", desc: "A coordinated debut leveraging private networks, digital platforms, and exclusive broker previews to generate immediate momentum." },
                { step: "03", title: "Offer Management", desc: "Vetting buyer qualifications, analyzing offer terms, and leveraging multiple bids to improve price and conditions." },
                { step: "04", title: "Escrow & Closing", desc: "Navigating contingencies, appraisals, and the final walk-through with meticulous attention to detail to ensure a seamless close." }
              ].map((item, i) => (
                <div key={i} className="flex">
                  <div className="font-serif text-4xl text-primary/30 mr-6 font-light">{item.step}</div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">{item.title}</h4>
                    <p className="text-foreground/70 leading-relaxed text-sm">{item.desc}</p>
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
