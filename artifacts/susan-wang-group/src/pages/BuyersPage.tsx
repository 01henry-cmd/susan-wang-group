import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Search, FileText, Key, Home as HomeIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BuyersPage() {
  const { t } = useLanguage();

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
                {t("buyers_eyebrow")}
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6 font-light tracking-tight leading-[1.1]">
                {t("buyers_h1")}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed font-light max-w-2xl border-l border-white/20 pl-6 ml-2">
                {t("buyers_hero_sub")}
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
                <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4">{t("buyers_adv_eyebrow")}</p>
                <h2 className="font-serif text-4xl md:text-5xl mb-10 font-light tracking-tight">{t("buyers_adv_h2")}</h2>
                
                <div className="space-y-6 text-foreground/82 font-light text-lg leading-relaxed mb-12">
                  <p>{t("buyers_adv_p1")}</p>
                  <p>{t("buyers_adv_p2")}</p>
                </div>

                <div className="border-t border-border pt-8">
                  <ul className="space-y-6">
                    {[
                      t("buyers_bullet1"),
                      t("buyers_bullet2"),
                      t("buyers_bullet3"),
                      t("buyers_bullet4"),
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="font-serif text-primary italic mr-4 text-xl mt-[-2px]">0{i+1}.</span>
                        <span className="text-foreground/85 font-light text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-32 bg-[#ebe8e2]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-20">
              <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4">{t("buyers_method_eyebrow")}</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight">{t("buyers_method_h2")}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                { icon: Search, title: t("buyers_step1_title"), desc: t("buyers_step1_desc") },
                { icon: HomeIcon, title: t("buyers_step2_title"), desc: t("buyers_step2_desc") },
                { icon: FileText, title: t("buyers_step3_title"), desc: t("buyers_step3_desc") },
                { icon: Key, title: t("buyers_step4_title"), desc: t("buyers_step4_desc") },
              ].map((step, i) => (
                <div key={i} className="flex flex-col border-t border-border/50 pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-serif text-2xl lg:text-3xl font-light">{step.title}</h4>
                    <span className="font-serif text-4xl text-foreground/10">0{i+1}</span>
                  </div>
                  <p className="text-lg text-foreground/82 font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="font-serif text-4xl font-light tracking-tight mb-4">{t("buyers_faq_h2")}</h2>
              <div className="w-12 h-[1px] bg-primary mx-auto"></div>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-border">
                <AccordionTrigger className="font-serif text-xl font-light hover:no-underline py-6">{t("buyers_faq1_q")}</AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed font-light text-lg pb-6">
                  {t("buyers_faq1_a")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-border">
                <AccordionTrigger className="font-serif text-xl font-light hover:no-underline py-6">{t("buyers_faq2_q")}</AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed font-light text-lg pb-6">
                  {t("buyers_faq2_a")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-border">
                <AccordionTrigger className="font-serif text-xl font-light hover:no-underline py-6">{t("buyers_faq3_q")}</AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed font-light text-lg pb-6">
                  {t("buyers_faq3_a")}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center bg-foreground text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 font-light tracking-tight">{t("buyers_cta_h2")}</h2>
            <p className="text-white/85 mb-12 max-w-xl mx-auto font-light text-lg">
              {t("buyers_cta_sub")}
            </p>
            <CTAButton href="/contact" className="bg-white text-foreground hover:bg-white/90">{t("buyers_cta_btn")}</CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
