import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading 
                title="Susan Wang" 
                subtitle="Principal Advisor" 
              />
              <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
                A strategic advisor dedicated to bringing clarity, precision, and extraordinary results to the Southern California luxury real estate market.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-gradient-to-tr from-primary/40 to-accent/20 flex items-center justify-center relative z-10">
                  {/* Placeholder for real headshot */}
                  <span className="font-serif text-8xl text-white tracking-widest opacity-80">SW</span>
                </div>
                <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 bg-white border border-border -z-10" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="font-serif text-3xl">The Philosophy</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Real estate is rarely just a transaction; it is a significant life transition and often a cornerstone of wealth generation. Recognizing this, I built the Susan Wang Group on a foundation of rigorous data analysis, uncompromising ethics, and bespoke client service.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  My affiliation with Coldwell Banker Global Luxury provides my clients with unparalleled global reach and marketing prowess. Yet, my approach remains deeply personal. I do not just sell homes; I advise clients, protecting their capital and peace of mind at every turn.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Whether you are navigating multiple offers in Irvine, seeking an off-market estate in Newport Beach, or diversifying your portfolio in Los Angeles, you deserve an advisor who anticipates challenges before they arise and negotiates with strategic intent.
                </p>
                
                <div className="pt-8 mt-8 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="font-serif text-lg">Susan Wang</p>
                    <p className="text-sm text-foreground/60 uppercase tracking-wider mt-1">DRE# 02132358</p>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Coldwell_Banker_logo.svg" alt="Coldwell Banker" className="h-6 opacity-60 grayscale" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats / Pillars */}
        <section className="py-24 bg-accent/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: TrendingUp, title: "Data-Driven", desc: "Decisions backed by market analytics and valuation modeling." },
                { icon: Briefcase, title: "Strategic", desc: "Expert negotiation focused on protecting your capital." },
                { icon: Award, title: "Excellence", desc: "Editorial-grade marketing and presentation standards." },
                { icon: GraduationCap, title: "Advisory", desc: "Consultative approach prioritizing long-term relationships." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 text-center shadow-sm border border-border"
                >
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-6" />
                  <h4 className="font-serif text-xl mb-3">{item.title}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Discuss Your Real Estate Goals</h2>
            <CTAButton href="/contact">Schedule a Consultation</CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
