import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { PieChart, Map, TrendingUp, Building } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InvestorsPage() {
  const { t } = useLanguage();

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
                {t("investors_eyebrow")}
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6 font-light tracking-tight leading-[1.1]">
                {t("investors_h1")}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed font-light max-w-2xl border-l border-white/20 pl-6 ml-2">
                {t("investors_hero_sub")}
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
                <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4">{t("investors_method_eyebrow")}</p>
                <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight leading-tight mb-8">{t("investors_method_h2")}</h2>
                <div className="w-12 h-[1px] bg-foreground/20"></div>
              </div>
              
              <div className="md:w-7/12 relative z-10">
                <div className="space-y-8 text-foreground/80 font-light text-lg leading-relaxed">
                  <p>{t("investors_method_p1")}</p>
                  <p>{t("investors_method_p2")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-20">
              <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4">{t("investors_focus_eyebrow")}</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight">{t("investors_focus_h2")}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group border border-border p-12 hover:border-primary/50 transition-colors duration-500 hover:shadow-xl hover:shadow-black/5">
                <Building className="w-8 h-8 text-primary mb-8" strokeWidth={1} />
                <h3 className="font-serif text-3xl mb-4 font-light tracking-tight">{t("investors_card1_title")}</h3>
                <p className="text-foreground/70 leading-relaxed font-light text-lg">{t("investors_card1_body")}</p>
              </div>
              
              <div className="group border border-border p-12 hover:border-primary/50 transition-colors duration-500 hover:shadow-xl hover:shadow-black/5">
                <PieChart className="w-8 h-8 text-primary mb-8" strokeWidth={1} />
                <h3 className="font-serif text-3xl mb-4 font-light tracking-tight">{t("investors_card2_title")}</h3>
                <p className="text-foreground/70 leading-relaxed font-light text-lg">{t("investors_card2_body")}</p>
              </div>
              
              <div className="group border border-border p-12 hover:border-primary/50 transition-colors duration-500 hover:shadow-xl hover:shadow-black/5">
                <Map className="w-8 h-8 text-primary mb-8" strokeWidth={1} />
                <h3 className="font-serif text-3xl mb-4 font-light tracking-tight">{t("investors_card3_title")}</h3>
                <p className="text-foreground/70 leading-relaxed font-light text-lg">{t("investors_card3_body")}</p>
              </div>
              
              <div className="group border border-border p-12 hover:border-primary/50 transition-colors duration-500 hover:shadow-xl hover:shadow-black/5">
                <TrendingUp className="w-8 h-8 text-primary mb-8" strokeWidth={1} />
                <h3 className="font-serif text-3xl mb-4 font-light tracking-tight">{t("investors_card4_title")}</h3>
                <p className="text-foreground/70 leading-relaxed font-light text-lg">{t("investors_card4_body")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center bg-foreground text-white">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 font-light tracking-tight">{t("investors_cta_h2")}</h2>
            <p className="text-white/70 mb-12 max-w-xl mx-auto font-light text-lg">
              {t("investors_cta_sub")}
            </p>
            <CTAButton href="/contact" className="bg-white text-foreground hover:bg-white/90">{t("investors_cta_btn")}</CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
