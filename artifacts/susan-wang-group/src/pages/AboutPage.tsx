import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow">
        {/* Editorial Header */}
        <section className="pt-40 pb-20 bg-[#ece7f8] overflow-hidden relative">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] z-0"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-primary text-xs tracking-[0.3em] uppercase font-medium mb-6 flex items-center"
              >
                <span className="w-8 h-[1px] bg-primary mr-4"></span>
                The Principal
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="font-serif text-7xl md:text-8xl lg:text-[8rem] leading-[0.9] tracking-tighter text-foreground mb-8"
              >
                Susan Wang
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-full max-w-2xl border-t border-border pt-8 mt-12"
              >
                <p className="text-xl text-foreground/80 leading-relaxed font-light">
                  A strategic advisor dedicated to bringing clarity, precision, and extraordinary results to the Southern California luxury real estate market.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Full-width Panoramic Image */}
        <section className="w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="w-full aspect-[21/9] md:aspect-[3/1] bg-muted relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=80" 
              alt="Luxury interior" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">
              
              {/* Left Column - Large Callout */}
              <div className="lg:col-span-5">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="sticky top-32"
                >
                  <h3 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-8">
                    "Real estate is rarely just a transaction; it is a significant life transition and a cornerstone of wealth."
                  </h3>
                  <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-foreground/50 pt-8 border-t border-border">
                    <span>DRE# 02132358</span>
                    <span className="w-1 h-1 rounded-full bg-foreground/20"></span>
                    <span>Coldwell Banker</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Body Copy */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-6 lg:col-start-7"
              >
                <div className="space-y-8 text-lg text-foreground/80 font-light leading-relaxed">
                  <p className="first-letter:font-serif first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary">
                    Recognizing this reality, I built the Susan Wang Group on a foundation of rigorous data analysis, uncompromising ethics, and bespoke client service. My approach is entirely advisory—I do not just sell homes; I protect capital and peace of mind.
                  </p>
                  <p>
                    My affiliation with Coldwell Banker Global Luxury provides my clients with unparalleled global reach and marketing prowess. Yet, my practice remains deeply personal and high-touch. When you work with me, you get my direct attention, not handed off to junior assistants.
                  </p>
                  <p>
                    Whether you are navigating multiple offers in Irvine, seeking an off-market estate in Newport Beach, or diversifying your portfolio in Los Angeles, you deserve an advisor who anticipates challenges before they arise and negotiates with strategic intent. I analyze cap rates for investors with the same meticulous detail that I apply to staging a seller's legacy property.
                  </p>
                </div>
                
                <div className="mt-16 pt-16 border-t border-border">
                  <h4 className="font-serif text-2xl mb-8 font-light">The Pillars of Practice</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col">
                      <TrendingUp className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                      <h5 className="font-serif text-xl mb-2">Data-Driven</h5>
                      <p className="text-sm text-foreground/70 font-light leading-relaxed">Decisions backed by empirical market analytics and precise valuation modeling, removing emotion from the equation.</p>
                    </div>
                    <div className="flex flex-col">
                      <Briefcase className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                      <h5 className="font-serif text-xl mb-2">Strategic</h5>
                      <p className="text-sm text-foreground/70 font-light leading-relaxed">Expert negotiation focused entirely on protecting your capital and achieving the most favorable terms possible.</p>
                    </div>
                    <div className="flex flex-col">
                      <Award className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                      <h5 className="font-serif text-xl mb-2">Excellence</h5>
                      <p className="text-sm text-foreground/70 font-light leading-relaxed">Editorial-grade marketing and impeccable presentation standards for every property we represent.</p>
                    </div>
                    <div className="flex flex-col">
                      <GraduationCap className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                      <h5 className="font-serif text-xl mb-2">Advisory</h5>
                      <p className="text-sm text-foreground/70 font-light leading-relaxed">A consultative approach prioritizing long-term relationship building over single-transaction volume.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-[#d8d0eb] text-center">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-4xl md:text-5xl mb-8 font-light">Discuss Your Real Estate Goals</h2>
            <p className="text-foreground/70 mb-10 max-w-md mx-auto font-light text-lg">
              Take the first step toward a more strategic real estate acquisition or sale.
            </p>
            <CTAButton href="/contact">Schedule a Consultation</CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
