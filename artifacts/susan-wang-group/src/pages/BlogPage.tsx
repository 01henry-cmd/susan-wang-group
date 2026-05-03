import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

interface BlogPost {
  title: string;
  titleZh?: string;
  excerpt: string;
  excerptZh?: string;
  image: string;
  category: string;
  categoryZh?: string;
  date: string;
  href: string;
  featured: boolean;
}

export default function BlogPage() {
  const { lang, t } = useLanguage();
  const zh = lang === "zh";
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/blog-posts.json")
      .then((r) => r.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => !p.featured);

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
              <p className="text-foreground/70 text-sm font-light max-w-xs leading-relaxed text-right hidden md:block">
                {t("blog_source_note")}
              </p>
            </motion.div>
          </div>
        </section>

        {loading ? (
          <section className="py-40 flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary/40" />
          </section>
        ) : posts.length === 0 ? (
          <section className="py-40 text-center text-foreground/40 font-light">
            No posts yet.
          </section>
        ) : (
          <>
            {/* Featured Article */}
            {featured && (
              <section className="bg-[#fcfbf9]">
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
                      <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-4" style={{ color: "#1b9dbf" }}>
                        {zh && featured.categoryZh ? featured.categoryZh : featured.category}
                        <span className="text-foreground/50 mx-3">·</span>
                        <span className="text-foreground/60">{featured.date}</span>
                      </p>
                      <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-tight leading-snug mb-6">
                        {zh && featured.titleZh ? featured.titleZh : featured.title}
                      </h2>
                      <p className="text-foreground/80 font-light leading-relaxed text-lg mb-10">
                        {zh && featured.excerptZh ? featured.excerptZh : featured.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase font-medium text-foreground group-hover:text-primary transition-colors">
                        <span>{t("blog_read")}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                      </div>
                      <p className="text-[9px] tracking-widest uppercase text-foreground/25 mt-8 font-medium border-t border-border pt-6">
                        Coldwell Banker Luxury Editorial
                      </p>
                    </div>
                  </motion.a>
                </div>
              </section>
            )}

            {/* Article Grid */}
            {rest.length > 0 && (
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
                        <p className="text-[9px] tracking-[0.22em] uppercase font-medium mb-3" style={{ color: "#1b9dbf" }}>
                          {zh && post.categoryZh ? post.categoryZh : post.category}
                          <span className="text-foreground/45 mx-2">·</span>
                          <span className="text-foreground/60">{post.date}</span>
                        </p>
                        <h3 className="font-serif text-xl lg:text-2xl font-light tracking-tight leading-snug mb-4 group-hover:text-primary/80 transition-colors duration-300">
                          {zh && post.titleZh ? post.titleZh : post.title}
                        </h3>
                        <p className="text-foreground/75 font-light leading-relaxed text-sm flex-grow mb-6">
                          {zh && post.excerptZh ? post.excerptZh : post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase font-medium text-foreground/65 group-hover:text-primary transition-colors duration-300 mt-auto pt-4 border-t border-border">
                          <span>{t("blog_read")}</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Attribution */}
                  <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <p className="text-xs text-foreground/65 font-light leading-relaxed max-w-lg">
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
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
