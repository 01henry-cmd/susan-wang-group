import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Search, FileText, Key, Home as HomeIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function BuyersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <SectionHeading 
              title="Acquiring with Confidence" 
              subtitle="Buyer Representation" 
            />
            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              We transform the buying process from an emotional endeavor into a strategic acquisition, ensuring you secure the right property at the right price.
            </p>
          </div>
        </section>

        {/* Approach */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl mb-6">A Strategic Edge in a Competitive Market</h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  In highly sought-after markets like Newport Beach and Irvine, simply viewing active listings is insufficient. Success requires access to off-market networks, precise valuation analysis, and a reputation that listing agents trust.
                </p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  When you work with the Susan Wang Group, you gain an advisor who conducts rigorous due diligence on every property. We look beyond the staging to analyze underlying value, structural integrity, and neighborhood appreciation metrics.
                </p>
                <ul className="space-y-4 mt-8">
                  {[
                    "Access to private and off-market inventory",
                    "Comprehensive market comparative analysis",
                    "Strategic offer structuring to win bidding wars",
                    "Rigorous inspection and contingency management"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Interior living room" className="h-64 w-full object-cover rounded-sm shadow-sm" />
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80" alt="Modern kitchen" className="h-64 w-full object-cover rounded-sm shadow-sm mt-8" />
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-accent/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <SectionHeading title="The Acquisition Process" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-16">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border z-0" />
              
              {[
                { icon: Search, title: "Consultation & Strategy", desc: "Defining parameters, timeline, and financing strategy." },
                { icon: HomeIcon, title: "Curation & Tours", desc: "Viewing targeted on-market and off-market properties." },
                { icon: FileText, title: "Analysis & Offer", desc: "Valuation modeling and strategic negotiation." },
                { icon: Key, title: "Due Diligence & Close", desc: "Managing inspections, appraisals, and smooth closing." }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white border border-border flex items-center justify-center mb-6 shadow-sm">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-serif text-xl mb-3">0{i+1}. {step.title}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <SectionHeading title="Common Inquiries" align="left" />
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-serif text-lg">Do I need to be pre-approved before viewing homes?</AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">
                  Yes. In competitive luxury markets, sellers and their agents require proof of funds or a strong pre-approval letter before allowing private showings. More importantly, having your financing secured positions you to submit a strong, fast offer when we find the right property.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-serif text-lg">How do you find off-market properties?</AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">
                  Through our extensive network within Coldwell Banker Global Luxury, relationships with top-producing agents across Southern California, and direct outreach to homeowners in targeted neighborhoods who fit your specific criteria.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-serif text-lg">How do we win a multiple-offer situation without overpaying?</AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">
                  Winning is rarely just about the highest price. We structure offers strategically by understanding the seller's true motivations—which could involve leasebacks, specific closing timelines, or shortened contingency periods. We provide you with rigorous valuation data so you know exactly where the ceiling of value lies.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center bg-foreground text-white">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Begin Your Search</h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto font-light">
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
