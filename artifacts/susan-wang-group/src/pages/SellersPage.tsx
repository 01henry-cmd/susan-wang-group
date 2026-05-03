import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    num: "1.",
    en_title: "Define Your Goal",
    zh_title: "明确您的出售目标",
    en_body: "We will begin with a detailed conversation discussing what you are looking to achieve. Understanding your timing, pricing expectations, and next steps will help us strategy how this sale can support your broader life plans. Whether you are buying your first home, growing your family, downsizing as empty nesters, or simply looking to relocate, I will be here each step of the way. Each move signifies a chapter closing, understanding your goals & vision allows me to help you begin a new one.",
    zh_body: "我们将从一次深入、细致的沟通开始，讨论您的出售时间规划、价格预期以及下一步安排，确保此次出售能够支持您更广阔的人生计划。无论您是首次置业、为家庭成长而换房，还是在孩子离家后选择精简生活方式，我们都会在每一步陪伴您前行。每一次搬迁，都是一个篇章的结束；真正理解您的目标与愿景，才能帮助您顺利开启人生的新篇章。",
  },
  {
    num: "2.",
    en_title: "Strategic Pricing",
    zh_title: "制定精准定价策略",
    en_body: "The right listing price is the key. Overpricing may lead to future price drops, underpricing may lead to a bidding war, but may also potentially lead to leaving money on the table. An experienced agent will use local market data and buyer behavior insights to determine a pricing strategy designed to align with your selling goals. The right price in any market will attract strong buyer interest. Strategizing this initial interest will maximize your home's overall value.",
    zh_body: "基于本地市场数据与买家行为分析，我将为您制定与您目标高度契合的定价策略。在任何市场环境下，合适的价格才能吸引强劲的买家关注。通过对初期市场热度的精准策略规划，能够有效放大需求，从而实现房产整体价值的最大化。",
  },
  {
    num: "3.",
    en_title: "Prepare & Position",
    zh_title: "房屋准备与市场定位",
    en_body: "Preparing a home for the market begins with simple tasks including minor upgrades such as deep cleaning, decluttering, depersonalizing and fresh paint. This will allow all potential buyers to envision themselves living within your home. Lastly, professional photography will fully showcase your home. Throughout this process I will ensure your home is presented at its highest potential.",
    zh_body: "房屋上市前的准备往往从一些简单却关键的细节开始，包括适度的整理与收纳、去个性化布置、局部翻新（如重新刷漆）、以及合理减少家具摆放。根据房屋情况，优雅而专业的软装布置建议也常常是准备流程的重要一环。最后，通过专业摄影与精准营销，将房屋以最佳状态呈现给市场。在整个过程中，我会确保您的房产始终以最高水准亮相。",
  },
  {
    num: "4.",
    en_title: "Launch & Market",
    zh_title: "正式上市与推广",
    en_body: "This step is the climax of the entire process. We will market your home strategically through social media campaigns, in-office/cross agent networks, and traditional SEO advertising. Initial days on market will also include exclusive broker previews, neighborhood showings, open houses, private showings etc. Our market strategy will reach local & international buyers that are qualified & motivated through online, offline & local advertisement channels.",
    zh_body: "这一阶段是整个流程的高潮时刻。我们将通过社交媒体推广、办公室及经纪人内部网络，以及传统SEO广告，对您的房产进行系统化、策略性的市场营销。在上市初期，还将安排经纪人专属预览、社区看房活动、开放日以及私人带看等多种形式。我们的整体营销策略将通过线上、线下及本地广告渠道，精准触达具备购买力且高度意向明确的本地及国际买家。",
  },
  {
    num: "5.",
    en_title: "Negotiate Offers",
    zh_title: "谈判与筛选报价",
    en_body: "As offers are received, I will carefully evaluate each offer and negotiate each term to not only protect your interests but also keep all your original selling goals in mind. The best offer may not always come with the highest price. It is about understanding the offer as a whole; which includes the potential buyers, all contingency timelines, miscellaneous criterias and most importantly the buyer's certainty.",
    zh_body: "当报价陆续提交后，我将对每一份报价进行全面评估，并就各项条款进行专业谈判，不仅保护您的核心利益，也始终围绕您最初的出售目标。最理想的报价并不一定来自最高的价格，而在于对整份报价的综合理解，包括买家的背景、所有条件与时间节点，以及最重要的：成交的确定性。",
  },
  {
    num: "6.",
    en_title: "Escrow to Close",
    zh_title: "托管到完成交易",
    en_body: "From contract to closing and everything in between, I will be there each step of the way. I will manage all timelines, and every detail to ensure a smooth, stress-free transaction. Most importantly, I will be there at closing to mark the end of a significant chapter & the beginning of a new one.",
    zh_body: "从签约到交房，以及中间的每一个环节，我都会全程陪伴并负责协调所有时间安排与细节，确保交易顺畅、安心无忧。最重要的是，在交房那一天，我将与您共同见证一个重要篇章的圆满落幕，也迎接全新人生阶段的开始。",
  },
];

export default function SellersPage() {
  const { t, lang } = useLanguage();
  const isZh = lang === "zh";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative min-h-[80vh] flex items-end pb-24 pt-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
              alt="Luxury property at dusk"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-white max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease }}
              className="max-w-3xl"
            >
              <p className="text-white/80 text-xs tracking-[0.3em] uppercase font-medium mb-6 flex items-center">
                <span className="w-6 h-[1px] bg-white/60 mr-3" />
                {t("sellers_guide_eyebrow")}
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-[1.05] mb-10">
                {t("sellers_guide_h1")}
              </h1>

              <div className="border-l-2 border-white/20 pl-6 max-w-2xl">
                <p className="text-white/90 font-light text-lg leading-relaxed">
                  {t("sellers_guide_intro")}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Progress strip ── */}
        <div className="bg-primary/10 border-y border-primary/15 py-5">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {steps.map((s) => (
                <div key={s.num} className="flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-foreground/75">
                  <span className="text-primary font-medium">{s.num}</span>
                  <span>{isZh ? s.zh_title : s.en_title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Steps ── */}
        <section className="bg-white py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="divide-y divide-border">
              {steps.map((step) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.75, delay: 0.05, ease }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 lg:py-20"
                >
                  {/* Left: number + title */}
                  <div className="lg:col-span-4">
                    <div className="font-serif text-[5rem] lg:text-[7rem] leading-none font-light text-primary/55 select-none mb-4 -ml-1">
                      Step {step.num}
                    </div>
                    <h3 className="font-serif text-2xl lg:text-3xl font-light tracking-tight text-foreground">
                      {isZh ? step.zh_title : step.en_title}
                    </h3>
                  </div>

                  {/* Right: body text */}
                  <div className="lg:col-span-8 lg:pt-6">
                    <p className="text-foreground/80 font-light text-lg leading-relaxed">
                      {isZh ? step.zh_body : step.en_body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Conclusion ── */}
        <section className="bg-[#111] text-white py-28 lg:py-40">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease }}
            >
              <p className="text-primary text-xs tracking-[0.3em] uppercase font-medium mb-8 flex items-center">
                <span className="w-5 h-[1px] bg-primary mr-3" />
                {t("sellers_guide_conclusion_eyebrow")}
              </p>

              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight leading-tight mb-12 max-w-3xl">
                {t("sellers_guide_conclusion_h2")}
              </h2>

              <p className="text-white/75 font-light text-lg leading-relaxed mb-16 max-w-3xl">
                {t("sellers_guide_conclusion")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-primary text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-primary/90 transition-colors"
                  >
                    {t("sellers_guide_cta")}
                  </motion.button>
                </Link>
                <a
                  href="tel:+17148182511"
                  className="border border-white/20 text-white/75 hover:text-white hover:border-white/50 px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium transition-colors text-center"
                >
                  (714) 818-2511
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Valuation CTA ── */}
        <section className="py-20 bg-[#f8f6f2] border-t border-border">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <p className="text-primary text-xs tracking-[0.25em] uppercase font-medium mb-4">
                {t("sellers_val_eyebrow")}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-4">
                {t("sellers_val_h3")}
              </h2>
              <p className="text-foreground/60 font-light mb-10 max-w-xl mx-auto">
                {t("sellers_val_body")}
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder={t("sellers_val_placeholder")}
                  className="flex-grow px-5 py-4 bg-white border border-border focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-foreground/30 font-light"
                />
                <button
                  type="submit"
                  className="bg-foreground text-white px-8 py-4 uppercase tracking-[0.15em] text-xs font-medium hover:bg-primary transition-colors whitespace-nowrap"
                >
                  {t("sellers_val_btn")}
                </button>
              </form>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
