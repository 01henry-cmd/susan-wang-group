import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { PieChart, Map, TrendingUp, Building } from "lucide-react";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow">
        {/* Editorial Hero */}
        <section className="relative min-h-[70vh] flex items-end pb-24 pt-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80" 
              alt="Los Angeles luxury real estate" 
              className="w-full h-full object-cover object-center grayscale opacity-80"
            />
            {/* Dark cool overlay */}
            <div className="absolute inset-0 bg-[#1a2025]/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
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
                Investor Advisory
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6 font-light tracking-tight leading-[1.1]">
                Analytical Underwriting.
              </h1>
              <p className="text-xl text-white/80 leading-relaxed font-light max-w-2xl border-l border-white/20 pl-6 ml-2">
                Real estate investment requires discarding emotion in favor of empirical data. We identify, analyze, and acquire high-yield assets across Southern California.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-32">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="bg-[#ebe8e2] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row gap-16 items-center">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-white rounded-full blur-3xl opacity-50 pointer-events-none" />
              
              <div className="md:w-5/12 relative z-10">
                <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4">Methodology</p>
                <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight leading-tight mb-8">The Investor Mindset</h2>
                <div className="w-12 h-[1px] bg-foreground/20"></div>
              </div>
              
              <div className="md:w-7/12 relative z-10">
                <div className="space-y-8 text-foreground/80 font-light text-lg leading-relaxed">
                  <p>
                    Whether you are seeking cash flow through multi-family properties, executing a 1031 exchange, or targeting appreciation in emerging sub-markets, our approach is rigorously mathematical. We evaluate cap rates, gross rent multipliers, and projected IRR before presenting any opportunity.
                  </p>
                  <p>
                    We don't just send listings; we send financial models. We understand zoning laws, ADU potential, tenant regulations in varying municipalities, and value-add opportunities that the general market overlooks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-20">
              <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4">Focus Areas</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight">Advisory Services</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group border border-border p-12 hover:border-primary/50 transition-colors duration-500 hover:shadow-xl hover:shadow-black/5">
                <Building className="w-8 h-8 text-primary mb-8" strokeWidth={1} />
                <h3 className="font-serif text-3xl mb-4 font-light tracking-tight">Portfolio Diversification</h3>
                <p className="text-foreground/70 leading-relaxed font-light text-lg">
                  Strategic acquisition of single-family rentals, multi-unit properties, and luxury vacation rentals to balance cash flow and long-term appreciation within your broader financial portfolio.
                </p>
              </div>
              
              <div className="group border border-border p-12 hover:border-primary/50 transition-colors duration-500 hover:shadow-xl hover:shadow-black/5">
                <PieChart className="w-8 h-8 text-primary mb-8" strokeWidth={1} />
                <h3 className="font-serif text-3xl mb-4 font-light tracking-tight">1031 Exchanges</h3>
                <p className="text-foreground/70 leading-relaxed font-light text-lg">
                  Expert navigation of strict IRS timelines. We identify replacement properties before your current asset closes, ensuring your capital remains deployed and tax-deferred.
                </p>
              </div>
              
              <div className="group border border-border p-12 hover:border-primary/50 transition-colors duration-500 hover:shadow-xl hover:shadow-black/5">
                <Map className="w-8 h-8 text-primary mb-8" strokeWidth={1} />
                <h3 className="font-serif text-3xl mb-4 font-light tracking-tight">Location Arbitrage</h3>
                <p className="text-foreground/70 leading-relaxed font-light text-lg">
                  Identifying neighborhoods on the precipice of gentrification or those benefiting from new infrastructure, commercial development, or shifting demographic trends.
                </p>
              </div>
              
              <div className="group border border-border p-12 hover:border-primary/50 transition-colors duration-500 hover:shadow-xl hover:shadow-black/5">
                <TrendingUp className="w-8 h-8 text-primary mb-8" strokeWidth={1} />
                <h3 className="font-serif text-3xl mb-4 font-light tracking-tight">Value-Add Strategies</h3>
                <p className="text-foreground/70 leading-relaxed font-light text-lg">
                  Locating properties with specific physical or operational inefficiencies—such as under-market rents or ADU capabilities—where forced appreciation can be reliably executed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center bg-foreground text-white">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 font-light tracking-tight">Discuss Your Investment Thesis</h2>
            <p className="text-white/70 mb-12 max-w-xl mx-auto font-light text-lg">
              Schedule an advisory meeting to review cap rates, discuss market trajectories, and align on your acquisition parameters.
            </p>
            <CTAButton href="/contact" className="bg-white text-foreground hover:bg-white/90">Book Investment Consultation</CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
