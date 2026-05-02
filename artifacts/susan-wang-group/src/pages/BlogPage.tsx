import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const posts = [
  {
    category: "Market Insight",
    categoryZh: "市场洞察",
    title: "The Quiet Luxury Movement Reshaping Southern California Real Estate",
    titleZh: "重塑南加州房地产的「低调奢华」新趋势",
    excerpt: "Understated elegance is supplanting ostentatious display. We examine how the quiet luxury aesthetic — refined materials, architectural restraint, and curated interiors — is driving record premiums across Orange County.",
    excerptZh: "低调的优雅正在取代炫耀性的展示。我们深入探讨「低调奢华」美学——精炼材料、建筑克制与精心策划的室内设计——如何在橙县市场推动创纪录的溢价。",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    date: "April 2025",
    readTime: "6 min read",
    featured: true,
    source: "Coldwell Banker Luxury Editorial",
    href: "https://www.coldwellbankerluxury.com/editorial/",
  },
  {
    category: "Architecture",
    categoryZh: "建筑设计",
    title: "Inside Newport Coast: Where Architecture Meets the Pacific",
    titleZh: "走进纽波特海岸：建筑与太平洋的对话",
    excerpt: "Newport Coast's clifftop estates have become laboratories for the world's most ambitious residential architects. A survey of the community's defining homes and their design philosophies.",
    excerptZh: "纽波特海岸悬崖上的豪宅已成为全球最具雄心的住宅建筑师的实验场。本文梳理了该社区标志性住宅及其设计理念。",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    date: "March 2025",
    readTime: "5 min read",
    featured: false,
    source: "Coldwell Banker Luxury Editorial",
    href: "https://www.coldwellbankerluxury.com/editorial/",
  },
  {
    category: "Market Report",
    categoryZh: "市场报告",
    title: "Why Orange County Remains One of America's Most Coveted Markets",
    titleZh: "橙县：为何依然是全美最受追捧的房产市场之一",
    excerpt: "Climate, lifestyle, top-ranked school districts, and proximity to two of the world's largest economies converge to make Orange County uniquely resilient and consistently appreciating.",
    excerptZh: "得天独厚的气候、高品质生活方式、顶级学区，以及毗邻全球两大经济体的地理优势，使橙县具备独特的市场韧性与持续的增值潜力。",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80",
    date: "February 2025",
    readTime: "7 min read",
    featured: false,
    source: "Coldwell Banker Luxury Editorial",
    href: "https://www.coldwellbankerluxury.com/editorial/",
  },
  {
    category: "Buyer Trends",
    categoryZh: "买家动态",
    title: "The New Standard: How Buyers Are Redefining Luxury in 2025",
    titleZh: "2025年新标准：买家如何重新定义奢华",
    excerpt: "Today's ultra-high-net-worth buyers are demanding more than square footage and views. Wellness infrastructure, smart-home integration, and bespoke craftsmanship are now table stakes.",
    excerptZh: "当今的超高净值买家的需求已远超面积与景观本身。健康设施配套、智能家居集成与定制工艺已成为市场的基本门槛。",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80",
    date: "January 2025",
    readTime: "5 min read",
    featured: false,
    source: "Coldwell Banker Luxury Editorial",
    href: "https://www.coldwellbankerluxury.com/editorial/",
  },
  {
    category: "Investment",
    categoryZh: "房产投资",
    title: "International Capital and Southern California Real Estate",
    titleZh: "国际资本与南加州房地产",
    excerpt: "Cross-border investment in Southern California luxury property continues to accelerate. We analyze the capital flows, preferred asset classes, and the neighborhoods attracting the most foreign interest.",
    excerptZh: "国际资本对南加州豪华房产的投资持续升温。我们深度分析资金流向、偏好资产类型，以及最受海外买家青睐的优质社区。",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    date: "December 2024",
    readTime: "8 min read",
    featured: false,
    source: "Coldwell Banker Luxury Editorial",
    href: "https://www.coldwellbankerluxury.com/editorial/",
  },
  {
    category: "Seller Guide",
    categoryZh: "卖家指南",
    title: "Designing the Perfect Listing: The Case for Professional Staging",
    titleZh: "打造完美房源：专业陈设的不可或缺性",
    excerpt: "Data shows professionally staged luxury homes sell 73% faster and for up to 10% more. We break down the staging strategies that consistently outperform in the Southern California market.",
    excerptZh: "数据显示，经过专业陈设的豪华房产成交速度提升73%，成交价格最高溢价10%。我们详解在南加州市场中持续领先的陈设策略。",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
    date: "November 2024",
    readTime: "4 min read",
    featured: false,
    source: "Coldwell Banker Luxury Editorial",
    href: "https://www.coldwellbankerluxury.com/editorial/",
  },
];

export default function BlogPage() {
  const { lang, t } = useLanguage();
  const zh = lang === "zh";
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow">
        {/* Editorial Banner */}
        <section className="pt-36 pb-16 bg-[#fcfbf9]">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-10"
            >
              <div>
                <p className="text-primary text-xs tracking-[0.3em] uppercase font-medium mb-4 flex items-center">
                  <span className="w-6 h-[1px] bg-primary mr-4" />
                  {t("blog_eyebrow")}
                </p>
                <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tight">
                  {t("blog_h1")}
                </h1>
              </div>
              <p className="text-foreground/50 text-sm font-light max-w-xs leading-relaxed text-right hidden md:block">
                {t("blog_source_note")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-0 bg-[#fcfbf9]">
          <div className="container mx-auto px-6 max-w-7xl pb-20">
            <motion.a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-border overflow-hidden hover:shadow-2xl hover:shadow-black/8 transition-shadow duration-700 block"
            >
              <div className="lg:col-span-7 relative overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-72 lg:h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  style={{ minHeight: "420px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 pointer-events-none" />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center p-10 lg:p-14">
                <p className="text-[10px] tracking-[0.25em] uppercase font-medium text-primary mb-4">
                  {zh ? featured.categoryZh : featured.category}
                  <span className="text-foreground/30 mx-3">·</span>
                  <span className="text-foreground/40">{featured.date}</span>
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-tight leading-snug mb-6">
                  {zh ? featured.titleZh : featured.title}
                </h2>
                <p className="text-foreground/65 font-light leading-relaxed text-lg mb-10">
                  {zh ? featured.excerptZh : featured.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase font-medium text-foreground group-hover:text-primary transition-colors">
                  <span>{t("blog_read")}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </div>
                <p className="text-[9px] tracking-widest uppercase text-foreground/25 mt-8 font-medium border-t border-border pt-6">
                  {featured.source}
                </p>
              </div>
            </motion.a>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex items-center justify-between mb-12 pb-6 border-b border-border">
              <h3 className="font-serif text-2xl font-light tracking-tight">{t("blog_latest")}</h3>
              <a
                href="https://www.coldwellbankerluxury.com/editorial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] uppercase font-medium text-foreground/50 hover:text-primary transition-colors flex items-center gap-2"
              >
                {t("blog_view_all")} <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {rest.map((post, i) => (
                <motion.a
                  key={i}
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="group flex flex-col cursor-pointer block"
                >
                  <div className="overflow-hidden mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover transition-transform duration-[1s] group-hover:scale-105"
                    />
                  </div>
                  <p className="text-[9px] tracking-[0.22em] uppercase font-medium text-primary mb-3">
                    {zh ? post.categoryZh : post.category}
                    <span className="text-foreground/25 mx-2">·</span>
                    <span className="text-foreground/35">{post.date}</span>
                  </p>
                  <h3 className="font-serif text-xl lg:text-2xl font-light tracking-tight leading-snug mb-4 group-hover:text-primary/80 transition-colors duration-300">
                    {zh ? post.titleZh : post.title}
                  </h3>
                  <p className="text-foreground/60 font-light leading-relaxed text-sm flex-grow mb-6">
                    {zh ? post.excerptZh : post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase font-medium text-foreground/50 group-hover:text-primary transition-colors duration-300 mt-auto pt-4 border-t border-border">
                    <span>{t("blog_read")}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Attribution */}
            <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="text-xs text-foreground/40 font-light leading-relaxed max-w-lg">
                {t("blog_attribution")}
              </p>
              <a
                href="https://www.coldwellbankerluxury.com/editorial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] uppercase font-medium border-b border-foreground/30 pb-0.5 hover:text-primary hover:border-primary transition-colors whitespace-nowrap"
              >
                coldwellbankerluxury.com/editorial
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
