import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { PieChart, Map, TrendingUp, Building } from "lucide-react";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <SectionHeading 
              title="Analytical Underwriting" 
              subtitle="Investor Advisory" 
            />
            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              Real estate investment requires discarding emotion in favor of empirical data. We identify, analyze, and acquire high-yield assets across Southern California.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="bg-foreground text-white p-12 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
              
              <h2 className="font-serif text-3xl mb-8 relative z-10">The Investor Mindset</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <p className="text-white/80 leading-relaxed font-light">
                  Whether you are seeking cash flow through multi-family properties, executing a 1031 exchange, or targeting appreciation in emerging sub-markets, our approach is rigorously mathematical. We evaluate cap rates, gross rent multipliers, and projected IRR before presenting any opportunity.
                </p>
                <p className="text-white/80 leading-relaxed font-light">
                  We don't just send listings; we send financial models. We understand zoning laws, ADU potential, tenant regulations in varying municipalities, and value-add opportunities that the general market overlooks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <SectionHeading title="Advisory Services" align="center" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-8 border border-border bg-white hover:border-primary/50 transition-colors">
                <Building className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-serif text-2xl mb-4">Portfolio Diversification</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Strategic acquisition of single-family rentals, multi-unit properties, and luxury vacation rentals to balance cash flow and long-term appreciation within your broader financial portfolio.
                </p>
              </div>
              
              <div className="p-8 border border-border bg-white hover:border-primary/50 transition-colors">
                <PieChart className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-serif text-2xl mb-4">1031 Exchanges</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Expert navigation of strict IRS timelines. We identify replacement properties before your current asset closes, ensuring your capital remains deployed and tax-deferred.
                </p>
              </div>
              
              <div className="p-8 border border-border bg-white hover:border-primary/50 transition-colors">
                <Map className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-serif text-2xl mb-4">Location Arbitrage</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Identifying neighborhoods on the precipice of gentrification or those benefiting from new infrastructure, commercial development, or shifting demographic trends.
                </p>
              </div>
              
              <div className="p-8 border border-border bg-white hover:border-primary/50 transition-colors">
                <TrendingUp className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-serif text-2xl mb-4">Value-Add Strategies</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Locating properties with specific physical or operational inefficiencies—such as under-market rents or ADU capabilities—where forced appreciation can be reliably executed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center bg-accent/30">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Discuss Your Investment Thesis</h2>
            <p className="text-foreground/70 mb-10 max-w-xl mx-auto font-light">
              Schedule an advisory meeting to review cap rates, discuss market trajectories, and align on your acquisition parameters.
            </p>
            <CTAButton href="/contact">Book Investment Consultation</CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
