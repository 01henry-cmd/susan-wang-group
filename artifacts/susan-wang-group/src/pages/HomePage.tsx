import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { ListingCard } from "@/components/ListingCard";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const heroImages = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=85",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=85",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=85",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1400&q=85",
];

interface Listing {
  image: string;
  price: string;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: string;
  status: string;
  featured?: boolean;
}



const services = [
  {
    num: "01",
    title: "For Buyers",
    body: "Strategic acquisition. From off-market opportunities to precise valuation modeling, we ensure you secure the right property at the right price, with terms that protect your interests.",
    href: "/buyers",
    label: "Buyer Representation",
  },
  {
    num: "02",
    title: "For Sellers",
    body: "Maximized returns. Through editorial-grade marketing, meticulous preparation, and skilled negotiation, we elevate your property's perception in the market.",
    href: "/sellers",
    label: "Seller Representation",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [heroIdx, setHeroIdx] = useState(0);
  const [listings, setListings] = useState<Listing[]>([]);
  const heroLines = [t("hero_line1"), t("hero_line2"), t("hero_line3"), t("hero_line4")];

  useEffect(() => {
    const id = setInterval(() => setHeroIdx(i => (i + 1) % heroImages.length), 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    fetch("/listings.json")
      .then((r) => r.json())
      .then((data: Listing[]) => setListings(data.filter((l) => l.featured).slice(0, 3)))
      .catch(() => {});
  }, []);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const watermarkY = useTransform(heroScroll, [0, 1], ["0%", "18%"]);
  const imageY = useTransform(heroScroll, [0, 1], ["0%", "10%"]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f6]">
      <Navigation />

      <main className="flex-grow">

        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

          {/* ── Full-bleed Ken Burns slideshow ── */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={heroIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className={`absolute inset-0 w-full h-full kenburns-${(heroIdx % 4) + 1}`}
                style={{
                  backgroundImage: `url(${heroImages[heroIdx]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </AnimatePresence>

            {/* Layered overlays for depth + text legibility */}
            <div className="absolute inset-0 bg-black/38" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          </div>

          {/* Parallax ghost S watermark */}
          <motion.div
            style={{ y: watermarkY }}
            className="absolute inset-0 flex items-center justify-start pl-[2vw] pointer-events-none overflow-hidden z-[1]"
          >
            <span
              className="font-serif italic leading-none select-none"
              style={{
                fontSize: "44vw",
                color: "rgba(255,255,255,0.055)",
              }}
            >
              S
            </span>
          </motion.div>

          {/* Text content */}
          <div className="container relative z-10 mx-auto px-6 lg:px-16 pt-24 pb-28">
            <div className="max-w-3xl">

              {/* Animated rule line */}
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease }}
                className="w-8 h-px bg-white/60 mb-8 origin-left"
              />

              <h1 className="font-serif font-light leading-[1.04] tracking-[-0.02em] text-white mb-7 overflow-hidden"
                style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}>
                {heroLines.map((line, i) => (
                  <motion.span
                    key={line}
                    className="block"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 0.85, delay: 0.35 + i * 0.1, ease }}
                  >
                    {i === 1
                      ? <em className="not-italic" style={{ color: "hsl(276 55% 82%)" }}>{line}</em>
                      : line}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85, ease }}
                className="text-base text-white/85 font-light leading-relaxed max-w-md mb-12"
              >
                {t("hero_sub")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0, ease }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <CTAButton href="/contact">{t("hero_cta")}</CTAButton>
                <Link href="/listings" className="group inline-flex items-center text-[11px] tracking-[0.2em] uppercase text-white/75 hover:text-white transition-colors duration-300 mt-4 sm:mt-3">
                  <span className="border-b border-white/20 pb-0.5 group-hover:border-white/55 transition-colors">{t("hero_portfolio")}</span>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Dot indicators — bottom center */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10"
          >
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIdx(i)}
                className={`h-[2px] rounded-full transition-all duration-500 ${
                  i === heroIdx ? "bg-white/90 w-8" : "bg-white/35 w-3"
                }`}
              />
            ))}
          </motion.div>

          {/* Scroll pulse */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute bottom-10 right-10 flex-col items-center gap-2 hidden lg:flex"
          >
            <div className="w-px h-12 bg-white/20 relative overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.9, ease: "linear" }}
                className="absolute top-0 w-full h-1/2 bg-white/55"
              />
            </div>
          </motion.div>
        </section>

        {/* ─── TRUST BAR ────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bg-white border-y border-border py-7"
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[10px] tracking-[0.22em] uppercase text-foreground/45">
              <span>Affiliated With</span>
              <span className="font-serif text-sm tracking-wider text-foreground/65 normal-case">Coldwell Banker Global Luxury</span>
              <span className="hidden sm:block w-px h-4 bg-border" />
              <span>DRE# 02132358</span>
              <span className="hidden sm:block w-px h-4 bg-border" />
              <span>Orange County · Los Angeles</span>
            </div>
          </div>
        </motion.section>

        {/* ─── ABOUT PREVIEW ────────────────────────────────────── */}
        <section className="py-28 lg:py-36 bg-[#f7f5fb]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">

              {/* Image with clip-path reveal + floating quote */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-5 relative"
              >
                <motion.div
                  initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                  whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.0, ease }}
                  className="aspect-[3/4] bg-muted overflow-hidden relative"
                >
                  <img
                    src="/susan-office-2.jpg"
                    alt="Susan Wang"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                {/* Pull quote card */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease }}
                  className="absolute -bottom-6 -right-4 lg:-right-8 bg-white shadow-xl border border-border/40 p-7 max-w-[260px]"
                >
                  <p className="font-serif text-[1.05rem] italic leading-snug text-foreground/85 mb-3">
                    "Every property tells a story. My job is to ensure it reaches the right audience."
                  </p>
                  <p className="text-[9px] tracking-[0.22em] uppercase text-foreground/40">— Susan Wang</p>
                </motion.div>
              </motion.div>

              {/* Text block */}
              <div className="lg:col-span-7 lg:pt-10 lg:pl-8 border-l-0 lg:border-l border-border">
                <motion.p
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease }}
                  className="text-[10px] tracking-[0.25em] uppercase text-primary font-medium mb-6 flex items-center gap-3"
                >
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease }}
                    className="w-4 h-px bg-primary origin-left inline-block"
                  />
                  {t("about_eyebrow")}
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease }}
                  className="font-serif font-light tracking-tight text-foreground leading-[1.1] mb-8"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
                >
                  {t("about_tagline")}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease }}
                  className="space-y-5 text-foreground/78 font-light leading-relaxed text-[1.03rem] mb-10"
                >
                  <p>
                    Navigating the Southern California real estate market requires more than local knowledge — it demands strategic foresight, meticulous preparation, and unwavering advocacy. As an advisor affiliated with Coldwell Banker, I bring an analytical approach to every transaction.
                  </p>
                  <p>
                    Whether you are acquiring a legacy estate in Newport Beach, strategically pricing a home in Irvine, or expanding an investment portfolio across Los Angeles, my commitment is singular: protecting your interests and maximizing your outcome.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease }}
                >
                  <CTAButton href="/about" variant="outline">{t("about_cta")}</CTAButton>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── FEATURED LISTINGS ────────────────────────────────── */}
        <section className="py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-6 pb-10 border-b border-border"
            >
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-medium mb-4 flex items-center gap-3">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease }}
                    className="w-4 h-px bg-primary origin-left inline-block"
                  />
                  {t("listings_eyebrow")}
                </p>
                <h2 className="font-serif font-light tracking-tight text-foreground"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  {t("listings_title")}
                </h2>
              </div>
              <Link href="/listings" className="group text-[10px] tracking-[0.22em] uppercase text-foreground/65 hover:text-foreground transition-colors duration-300 flex items-center gap-2 shrink-0">
                <span className="border-b border-foreground/18 group-hover:border-foreground/50 pb-0.5 transition-colors">{t("listings_cta")}</span>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {listings.map((listing, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.75, delay: i * 0.1, ease }}
                >
                  <ListingCard {...listing} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICES EDITORIAL ───────────────────────────────── */}
        <section className="py-28 lg:py-36 bg-[#edeaf5]">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
              className="mb-16 text-center"
            >
              <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-medium mb-5 flex items-center justify-center gap-3">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease }}
                  className="w-4 h-px bg-primary origin-left inline-block"
                />
                {t("services_eyebrow")}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.1, ease }}
                  className="w-4 h-px bg-primary origin-right inline-block"
                />
              </p>
              <h2 className="font-serif font-light tracking-tight text-foreground"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                {t("services_title")}
              </h2>
            </motion.div>

            <div>
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, delay: i * 0.09, ease }}
                  className="group border-t border-foreground/10 last:border-b last:border-foreground/10"
                >
                  <div className="relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 px-0 md:px-4 gap-6 hover:bg-white/40 transition-colors duration-600">
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.09 + 0.2, ease }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 font-serif text-[9rem] leading-none text-foreground/[0.04] pointer-events-none select-none"
                    >
                      {s.num}
                    </motion.span>
                    <h3 className="font-serif font-light text-3xl md:text-4xl tracking-tight relative z-10 w-full md:w-[35%] shrink-0">
                      {s.title}
                    </h3>
                    <div className="w-full md:w-[55%] relative z-10">
                      <p className="text-foreground/78 font-light leading-relaxed mb-6 text-[1.02rem]">{s.body}</p>
                      <Link href={s.href} className="text-[10px] tracking-[0.22em] uppercase font-medium text-foreground/55 hover:text-foreground transition-colors border-b border-foreground/18 pb-0.5 hover:border-foreground/50">
                        {s.label}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ────────────────────────────────────────── */}
        <section ref={ctaRef} className="relative py-36 lg:py-48 bg-[#f7f5fb] flex items-center justify-center overflow-hidden">

          {/* Slow drifting watermark */}
          <motion.div
            animate={{ x: ["0%", "3%", "0%", "-3%", "0%"], rotate: [-6, -5.5, -6.5, -6, -6] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
          >
            <span
              className="font-serif italic text-foreground/[0.028] whitespace-nowrap select-none"
              style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
            >
              Strategy. Clarity. Results.
            </span>
          </motion.div>

          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-[10px] tracking-[0.25em] uppercase text-primary font-medium mb-8 flex items-center justify-center gap-3"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="w-4 h-px bg-primary origin-left inline-block"
              />
              {t("cta_eyebrow")}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="w-4 h-px bg-primary origin-right inline-block"
              />
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="font-serif font-light tracking-tight text-foreground mb-6 leading-[1.1] whitespace-pre-line"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
            >
              {t("cta_title")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="text-foreground/52 font-light leading-relaxed mb-12 max-w-xl mx-auto"
            >
              {t("cta_sub")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
            >
              <CTAButton href="/contact">{t("cta_button")}</CTAButton>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
