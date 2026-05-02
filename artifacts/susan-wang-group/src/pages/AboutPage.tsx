import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow">
        {/* Editorial Header */}
        <section className="pt-40 pb-20 bg-[#fcfbf9] overflow-hidden relative">
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
                {t("about_page_eyebrow")}
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
                  {t("about_page_tagline")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Susan's Personal Portrait */}
        <section className="w-full bg-[#fcfbf9]">
          <div className="container mx-auto px-6 pb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative max-w-3xl mx-auto"
            >
              <img
                src="/susan-wang.jpg"
                alt="Susan Wang"
                className="w-full object-cover object-top"
                style={{ maxHeight: "75vh" }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">
              
              {/* Left Column */}
              <div className="lg:col-span-5">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-8">
                    "{t("about_quote")}"
                  </h3>
                  <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-foreground/65 pt-8 border-t border-border mb-16">
                    <span>DRE# 02132358</span>
                    <span className="w-1 h-1 rounded-full bg-foreground/20"></span>
                    <span>Coldwell Banker</span>
                  </div>

                  <div>
                    <h4 className="font-serif text-2xl mb-8 font-light">{t("about_pillars_title")}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="flex flex-col">
                        <TrendingUp className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                        <h5 className="font-serif text-xl mb-2">{t("about_pillar1_title")}</h5>
                        <p className="text-sm text-foreground/82 font-light leading-relaxed">{t("about_pillar1_body")}</p>
                      </div>
                      <div className="flex flex-col">
                        <Briefcase className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                        <h5 className="font-serif text-xl mb-2">{t("about_pillar2_title")}</h5>
                        <p className="text-sm text-foreground/82 font-light leading-relaxed">{t("about_pillar2_body")}</p>
                      </div>
                      <div className="flex flex-col">
                        <Award className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                        <h5 className="font-serif text-xl mb-2">{t("about_pillar3_title")}</h5>
                        <p className="text-sm text-foreground/82 font-light leading-relaxed">{t("about_pillar3_body")}</p>
                      </div>
                      <div className="flex flex-col">
                        <GraduationCap className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                        <h5 className="font-serif text-xl mb-2">{t("about_pillar4_title")}</h5>
                        <p className="text-sm text-foreground/82 font-light leading-relaxed">{t("about_pillar4_body")}</p>
                      </div>
                    </div>
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
                    {t("about_bio1")}
                  </p>
                  <p>{t("about_bio2")}</p>
                  <p>{t("about_bio3")}</p>
                  <p>{t("about_bio4")}</p>
                  <p>{t("about_bio5")}</p>
                  <p>{t("about_bio6")}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-[#ebe8e2] text-center">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-4xl md:text-5xl mb-8 font-light">{t("about_cta_h2")}</h2>
            <p className="text-foreground/80 mb-10 max-w-md mx-auto font-light text-lg">
              {t("about_cta_sub")}
            </p>
            <CTAButton href="/contact">{t("about_cta_btn")}</CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
