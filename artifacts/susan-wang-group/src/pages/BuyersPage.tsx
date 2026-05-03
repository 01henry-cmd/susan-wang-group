import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    num: "1.",
    en_title: "Define Your Goals",
    zh_title: "明确您的目标",
    en_body: "First let's define your needs, wants & wishes. By clarifying your lifestyle needs, financial budget, move-in timeline, and long-term objectives, this ensures every recommendation aligns with what truly matters to you both now and in the future. Then together we will deep dive into the current market, understand what is available and officially begin our search.",
    zh_body: "首先，我们将明确您的需求、偏好与期望。通过梳理您的生活方式需求、财务预算、入住时间规划以及长期目标，确保每一项建议都真正契合您当下与未来的人生方向。随后，我们将一起深入了解当前市场，全面掌握可选房源，并正式开启您的购房之旅。",
  },
  {
    num: "2.",
    en_title: "Get Financially Prepared",
    zh_title: "做好财务准备",
    en_body: "Buying a home is a large financial commitment. Before touring homes, securing a pre-approval and establishing a clear financial framework is key. With your trusted lender, you will review your overall financials including your income, debt and monthly household budget. This process will determine the mortgage you are comfortable with & disclose possible hidden homeowner expenses such as garbage, HOA, taxes, mello roos etc.",
    zh_body: "购房是一项重大的财务承诺。在开始看房之前，完成贷款预批准并建立清晰的财务框架至关重要。您将与值得信赖的贷款机构共同审视整体财务状况，包括收入、负债以及每月家庭支出预算。通过这一流程，您可以明确自己舒适的贷款范围，同时提前了解可能被忽略的房屋持有成本，如垃圾费、HOA管理费、房产税、Mello-Roos 特别税等。",
  },
  {
    num: "3.",
    en_title: "A Real Estate Agent",
    zh_title: "选择合适的房地产经纪人",
    en_body: "Buying a home is one of the most significant financial and emotional decisions you will make. With all of the online resources, you could purchase a house alone, but why would you? As a buyer, working with an agent costs nothing. The right real estate agent does more than just open doors — they provide strategy, market insight, and guidance that protect your interests at every step. Wouldn't you want a team of experts helping you tackle the daunting task of finding your next home?",
    zh_body: "购房是您将做出的最重要、同时也最具情感意义的决定之一。虽然借助网络资源，您也可以自行完成购房流程，但为什么要独自承担这一切呢？作为买方，与房地产经纪人合作并不会产生额外费用。合适的经纪人不仅仅是为您开门带看，更会在每一步提供策略、市场洞察与专业引导，全方位保护您的利益。难道您不希望有一支专业团队协助您完成这项重要而复杂的任务吗？",
  },
  {
    num: "4.",
    en_title: "Explore the Market",
    zh_title: "深入了解市场",
    en_body: "Time to shop! This is the most personal & most exciting step. As your local expert, I will use real-time data to curate property showings that meet your lifestyle needs. I will guide you through showings explaining the market conditions and neighborhood evaluations to help you understand each home's value beyond listing price. The right home is not only about the property alone — it's also about the life you will live as a whole. Finding a home is about the weather, the local shops and amenities, the school district, and the community around you.",
    zh_body: "现在，正式进入看房阶段——这也是整个购房过程中最个性化、最令人期待的一步。作为您的本地专家，我将利用实时市场数据，为您精心筛选符合生活方式需求的房源，并在带看过程中讲解市场情况与社区评估，帮助您理解房屋价值，而不仅仅是挂牌价格。理想的家，不只是房屋本身，更关乎您未来的整体生活方式——气候环境、周边商圈与配套、学区质量以及社区氛围。",
  },
  {
    num: "5.",
    en_title: "Structuring a Strong Offer",
    zh_title: "制定有竞争力的报价",
    en_body: "You've found the next house you'd like to call home! Before crafting a competitive offer, understanding the seller's needs & wants is just as important as understanding the market. A well-structured offer protects your interests while positioning you strongly in the eyes of the seller. Winning offers may not always come with the highest price tag — sometimes it is the one best curated to the seller's wants and wishes.",
    zh_body: "当您找到心仪、想称之为「家」的房产时，下一步便是制定报价。在撰写有竞争力的报价之前，理解卖方的需求与期望，与了解市场同样重要。一份结构清晰、策略得当的报价，既能保护您的利益，也能在卖方面前建立强有力的竞争优势。成功的报价并不一定来自最高价格，而往往是最贴合卖方需求、整体条件最优的那一份。",
  },
  {
    num: "6.",
    en_title: "Due Diligence & Escrow",
    zh_title: "尽职调查与托管流程",
    en_body: "You're in Escrow — it all starts becoming real. I will guide you through every detail to ensure transparency, minimize risk, and keep the process on track. Starting with reading all of the disclosures, getting an inspection, selecting the best loan, and getting a home appraisal. Home inspections create peace of mind, where we can renegotiate based on any new discoveries. You've been preapproved — now in escrow is where you'd select the right mortgage & lock in your rate.",
    zh_body: "进入托管阶段（Escrow），一切开始变得真实起来。我将全程引导您完成每一个细节，确保流程透明、风险可控、进度顺畅。这一阶段包括审阅所有披露文件、安排房屋检查、选择合适的贷款方案以及完成房屋估值。房屋检查为您带来安心保障，若发现新的问题，我们也可据此重新协商。此前的贷款预批准只是开始，在托管期间，您将正式选择最适合的贷款产品并锁定利率。",
  },
  {
    num: "7.",
    en_title: "Close & Move In",
    zh_title: "完成过户，安心入住",
    en_body: "End of escrow is not glamorous — it is full of paperwork & documents. During this final leg, your lender, title company and real estate agent will assist with final steps until you are the legal owner of your new home. The purchase is settled and your new life awaits.",
    zh_body: "托管尾声并不华丽，而是充满文件与流程。在这一最后阶段，您的贷款机构、产权公司以及房地产经纪人将共同协助完成所有最终步骤，直至您正式成为新家的合法业主。交易圆满完成，属于您的全新生活也即将开启。",
  },
];

export default function BuyersPage() {
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
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
              alt="Luxury property interior"
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
                {t("buyers_guide_eyebrow")}
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-[1.05] mb-10">
                {t("buyers_guide_h1")}
              </h1>

              <div className="border-l-2 border-white/20 pl-6 max-w-2xl">
                <p className="text-white/90 font-light text-lg leading-relaxed">
                  {t("buyers_guide_intro")}
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

                  {/* Right: body */}
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
                {t("buyers_guide_conclusion_eyebrow")}
              </p>

              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight leading-tight mb-12 max-w-3xl">
                {t("buyers_guide_conclusion_h2")}
              </h2>

              <p className="text-white/75 font-light text-lg leading-relaxed mb-16 max-w-3xl">
                {t("buyers_guide_conclusion")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-primary text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-primary/90 transition-colors"
                  >
                    {t("buyers_guide_cta")}
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

      </main>

      <Footer />
    </div>
  );
}
