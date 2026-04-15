import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Search, FileText, Key, Home as HomeIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function BuyersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow">
        {/* Editorial Hero */}
        <section className="relative min-h-[70vh] flex items-end pb-24 pt-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80" 
              alt="Luxury property interior" 
              className="w-full h-full object-cover object-center"
            />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-[#3a2818]/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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
                Buyer Representation
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6 font-light tracking-tight leading-[1.1]">
                Acquiring with Confidence.
              </h1>
              <p className="text-xl text-white/80 leading-relaxed font-light max-w-2xl border-l border-white/20 pl-6 ml-2">
                We transform the buying process from an emotional endeavor into a strategic acquisition, ensuring you secure the right property at the right price.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-32">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
              
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mt-12">
                    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" alt="Interior living room" className="h-[400px] w-full object-cover grayscale opacity-90" />
                  </div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80" alt="Modern kitchen" className="h-[400px] w-full object-cover" />
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 order-1 lg:order-2 pt-10"
              >
                <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4">The Advantage</p>
                <h2 className="font-serif text-4xl md:text-5xl mb-10 font-light tracking-tight">A Strategic Edge in a Competitive Market</h2>
                
                <div className="space-y-6 text-foreground/70 font-light text-lg leading-relaxed mb-12">
                  <p>
                    In highly sought-after markets like Newport Beach and Irvine, simply viewing active listings is insufficient. Success requires access to off-market networks, precise valuation analysis, and a reputation that listing agents trust.
                  </p>
                  <p>
                    When you work with the Susan Wang Group, you gain an advisor who conducts rigorous due diligence on every property. We look beyond the staging to analyze underlying value, structural integrity, and neighborhood appreciation metrics.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <ul className="space-y-6">
                    {[
                      "Access to private and off-market inventory",
                      "Comprehensive market comparative analysis",
                      "Strategic offer structuring to win bidding wars",
                      "Rigorous inspection and contingency management"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="font-serif text-primary italic mr-4 text-xl mt-[-2px]">0{i+1}.</span>
                        <span className="text-foreground/80 font-light text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* Process - Editorial Spread */}
        <section className="py-32 bg-[#d8d0eb]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-20">
              <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4">Methodology</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight">The Acquisition Process</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                { icon: Search, title: "Consultation & Strategy", desc: "We begin by defining strict parameters, establishing a realistic timeline, and mapping out a comprehensive financing strategy before looking at a single home." },
                { icon: HomeIcon, title: "Curation & Tours", desc: "We filter out the noise, presenting only properties that meet your criteria—including targeted on-market assets and exclusive off-market opportunities." },
                { icon: FileText, title: "Analysis & Offer", desc: "Before drafting, we run proprietary valuation modeling. We then structure terms strategically, balancing price with conditions to create an undeniable offer." },
                { icon: Key, title: "Due Diligence & Close", desc: "From managing rigorous physical inspections to navigating appraisals and securing final loan approval, we orchestrate a seamless path to handing you the keys." }
              ].map((step, i) => (
                <div key={i} className="flex flex-col border-t border-border/50 pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-serif text-2xl lg:text-3xl font-light">{step.title}</h4>
                    <span className="font-serif text-4xl text-foreground/10">0{i+1}</span>
                  </div>
                  <p className="text-lg text-foreground/70 font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 bg-[#f0eaf8]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="font-serif text-4xl font-light tracking-tight mb-4">Common Inquiries</h2>
              <div className="w-12 h-[1px] bg-primary mx-auto"></div>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-border">
                <AccordionTrigger className="font-serif text-xl font-light hover:no-underline py-6">Do I need to be pre-approved before viewing homes?</AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed font-light text-lg pb-6">
                  Yes. In competitive luxury markets, sellers and their agents require proof of funds or a strong pre-approval letter before allowing private showings. More importantly, having your financing secured positions you to submit a strong, fast offer when we find the right property.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-border">
                <AccordionTrigger className="font-serif text-xl font-light hover:no-underline py-6">How do you find off-market properties?</AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed font-light text-lg pb-6">
                  Through our extensive network within Coldwell Banker Global Luxury, relationships with top-producing agents across Southern California, and direct outreach to homeowners in targeted neighborhoods who fit your specific criteria.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-border">
                <AccordionTrigger className="font-serif text-xl font-light hover:no-underline py-6">How do we win a multiple-offer situation without overpaying?</AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed font-light text-lg pb-6">
                  Winning is rarely just about the highest price. We structure offers strategically by understanding the seller's true motivations—which could involve leasebacks, specific closing timelines, or shortened contingency periods. We provide you with rigorous valuation data so you know exactly where the ceiling of value lies.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center bg-foreground text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 font-light tracking-tight">Begin Your Search</h2>
            <p className="text-white/70 mb-12 max-w-xl mx-auto font-light text-lg">
              Schedule a buyer consultation to discuss your parameters and the current state of the market.
            </p>
            <CTAButton href="/contact" className="bg-white text-foreground hover:bg-white/90">Book Consultation</CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
