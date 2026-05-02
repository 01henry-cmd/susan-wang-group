import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Camera, LineChart, Shield, Megaphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SellersPage() {
  const { t } = useLanguage();

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
                {t("sellers_eyebrow")}
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6 font-light tracking-tight leading-[1.1]">
                {t("sellers_h1")}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed font-light max-w-2xl border-l border-white/20 pl-6 ml-2">
                {t("sellers_hero_sub")}
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
                <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-6">{t("sellers_std_eyebrow")}</p>
                <h2 className="font-serif text-4xl md:text-5xl mb-8 font-light tracking-tight leading-tight">{t("sellers_std_h2")}</h2>
                <p className="text-foreground/82 mb-12 font-light text-lg leading-relaxed">
                  {t("sellers_std_body")}
                </p>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 mr-6">
                      <Camera className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl mb-2 font-light">{t("sellers_visual_title")}</h4>
                      <p className="text-foreground/82 font-light leading-relaxed">{t("sellers_visual_body")}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 mr-6">
                      <Megaphone className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl mb-2 font-light">{t("sellers_reach_title")}</h4>
                      <p className="text-foreground/82 font-light leading-relaxed">{t("sellers_reach_body")}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 mr-6">
                      <Shield className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl mb-2 font-light">{t("sellers_staging_title")}</h4>
                      <p className="text-foreground/82 font-light leading-relaxed">{t("sellers_staging_body")}</p>
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
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-8">{t("sellers_price_h2")}</h2>
            <p className="text-xl text-white/85 font-light leading-relaxed mb-16 max-w-3xl mx-auto">
              {t("sellers_price_body")}
            </p>
            
            <div className="bg-white/5 border border-white/10 p-10 md:p-16 backdrop-blur-sm text-left">
              <LineChart className="w-10 h-10 text-primary mb-8" strokeWidth={1} />
              <h3 className="font-serif text-3xl mb-4 font-light">{t("sellers_val_h3")}</h3>
              <p className="text-white/82 font-light mb-8 text-lg">
                {t("sellers_val_body")}
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder={t("sellers_val_placeholder")}
                  className="flex-grow px-6 py-4 bg-black/50 border border-white/20 focus:outline-none focus:border-primary text-white placeholder:text-white/30"
                />
                <button className="bg-primary text-primary-foreground px-8 py-4 uppercase tracking-[0.15em] text-sm font-medium hover:bg-primary/90 transition-colors">
                  {t("sellers_val_btn")}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Sales Process */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-20">
              <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4">{t("sellers_timeline_eyebrow")}</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight">{t("sellers_timeline_h2")}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
              {[
                { step: "01", title: t("sellers_step1_title"), desc: t("sellers_step1_desc") },
                { step: "02", title: t("sellers_step2_title"), desc: t("sellers_step2_desc") },
                { step: "03", title: t("sellers_step3_title"), desc: t("sellers_step3_desc") },
                { step: "04", title: t("sellers_step4_title"), desc: t("sellers_step4_desc") },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="font-serif text-5xl text-foreground/10 mb-4 font-light">{item.step}</div>
                  <div className="border-t border-border pt-6">
                    <h4 className="font-serif text-2xl mb-4 font-light">{item.title}</h4>
                    <p className="text-foreground/82 font-light leading-relaxed text-lg">{item.desc}</p>
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
