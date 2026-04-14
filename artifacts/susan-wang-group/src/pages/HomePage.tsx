import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { ListingCard } from "@/components/ListingCard";
import { CommunityCard } from "@/components/CommunityCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { motion } from "framer-motion";
import { Link } from "wouter";

const listings = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    price: "$4,250,000",
    address: "142 Oceanfront Ave",
    city: "Newport Beach, CA",
    beds: 4,
    baths: 4.5,
    sqft: "3,850",
    status: "Featured",
    featured: true,
  },
  {
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    price: "$2,895,000",
    address: "88 Orchard Hills Dr",
    city: "Irvine, CA",
    beds: 5,
    baths: 5,
    sqft: "4,200",
    status: "Just Listed",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    price: "$5,100,000",
    address: "412 Beverly Estate Ln",
    city: "Los Angeles, CA",
    beds: 6,
    baths: 7,
    sqft: "6,500",
    status: "Active",
  },
];

const communities = [
  {
    name: "Newport Beach",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    description: "Coastal luxury, private docks, and world-class yachting along the stunning Pacific shoreline.",
    href: "/communities#newport-beach",
  },
  {
    name: "Irvine",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80",
    description: "Master-planned perfection, top-tier schools, and modern estates.",
    href: "/communities#irvine",
  },
  {
    name: "Los Angeles",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    description: "Iconic architecture, cultural hubs, and unparalleled views from the hills to the coast.",
    href: "/communities#los-angeles",
  },
  {
    name: "Huntington Beach",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=900&q=80",
    description: "Relaxed coastal luxury where surf culture meets refined living.",
    href: "/communities#huntington-beach",
  },
];

const testimonials = [
  {
    quote: "Susan's strategic approach to pricing resulted in multiple offers above asking within days. Her professionalism is unmatched.",
    name: "The Reynolds Family",
    location: "Irvine",
    type: "Sellers",
  },
  {
    quote: "As first-time luxury buyers, Susan provided clarity, data, and immense patience throughout the entire process.",
    name: "Dr. James & Emily T.",
    location: "Newport Beach",
    type: "Buyers",
  },
  {
    quote: "She identified an off-market opportunity we never would have found alone. Her market knowledge is truly exceptional.",
    name: "Marcus L.",
    location: "Los Angeles",
    type: "Investor",
  },
];

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
  {
    num: "03",
    title: "For Investors",
    body: "Analytical underwriting. We identify high-yield opportunities, analyze cap rates, and project appreciation in emerging neighborhoods to build robust portfolios.",
    href: "/investors",
    label: "Investment Advisory",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f6]">
      <Navigation />

      <main className="flex-grow">

        {/* ─── HERO ───────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center bg-[#fbf9f6] overflow-hidden">
          {/* Ghost letter watermark */}
          <div className="absolute inset-0 flex items-center justify-start pl-[5vw] pointer-events-none overflow-hidden">
            <span className="font-serif italic text-foreground/[0.025] text-[42vw] leading-none select-none">S</span>
          </div>

          <div className="container relative z-10 mx-auto px-6 lg:px-12 pt-28 pb-16 lg:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left: Typography */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="order-2 lg:order-1"
              >
                <div className="w-8 h-px bg-primary mb-8" />
                <h1 className="font-serif font-light leading-[1.06] tracking-[-0.02em] text-foreground mb-7"
                  style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
                  Elevated<br />
                  <em className="not-italic text-primary">Real Estate</em><br />
                  in Southern<br />California.
                </h1>
                <p className="text-base text-foreground/60 font-light leading-relaxed max-w-sm mb-12">
                  Helping discerning clients buy, sell, and invest with strategy and clarity across Orange County and Los Angeles.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <CTAButton href="/contact">Book a Consultation</CTAButton>
                  <Link href="/listings" className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-300 mt-4 sm:mt-3">
                    <span className="border-b border-foreground/20 pb-0.5 group-hover:border-foreground/60 transition-colors">View Portfolio</span>
                  </Link>
                </div>
              </motion.div>

              {/* Right: Framed Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="order-1 lg:order-2 relative"
              >
                <div className="relative aspect-[4/5] max-w-lg ml-auto">
                  <div className="absolute inset-0 border border-foreground/8 shadow-2xl shadow-black/[0.08]">
                    <img
                      src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
                      alt="Luxury coastal home"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#3a2010]/10 mix-blend-multiply" />
                  </div>
                  {/* Offset decorative frame */}
                  <div className="absolute -bottom-5 -left-5 w-full h-full border border-foreground/[0.07] -z-10" />
                </div>
              </motion.div>

            </div>
          </div>

          {/* Scroll pulse */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden lg:flex"
          >
            <div className="w-px h-12 bg-foreground/15 relative overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                className="absolute top-0 w-full h-1/2 bg-foreground/40"
              />
            </div>
          </motion.div>
        </section>

        {/* ─── TRUST BAR ──────────────────────────────────── */}
        <section className="bg-white border-y border-border py-7">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[10px] tracking-[0.22em] uppercase text-foreground/50">
              <span>Affiliated With</span>
              <span className="font-serif text-sm tracking-wider text-foreground/70 normal-case">Coldwell Banker Global Luxury</span>
              <span className="hidden sm:block w-px h-4 bg-border" />
              <span>DRE# 02132358</span>
              <span className="hidden sm:block w-px h-4 bg-border" />
              <span>Orange County · Los Angeles</span>
            </div>
          </div>
        </section>

        {/* ─── ABOUT PREVIEW ─────────────────────────────── */}
        <section className="py-28 lg:py-36 bg-[#fbf9f6]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">

              {/* Image + floating quote */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5 relative"
              >
                <div className="aspect-[3/4] bg-muted overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                    alt="Susan Wang"
                    className="w-full h-full object-cover grayscale opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                {/* Pull quote */}
                <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white shadow-xl border border-border/40 p-7 max-w-[260px]">
                  <p className="font-serif text-[1.05rem] italic leading-snug text-foreground/85 mb-3">
                    "Every property tells a story. My job is to ensure it reaches the right audience."
                  </p>
                  <p className="text-[9px] tracking-[0.22em] uppercase text-foreground/40">— Susan Wang</p>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-7 lg:pt-10 lg:pl-8 border-l-0 lg:border-l border-border"
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-medium mb-6 flex items-center gap-3">
                  <span className="w-4 h-px bg-primary" />Principal Advisor
                </p>
                <h2 className="font-serif font-light tracking-tight text-foreground leading-[1.1] mb-8"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
                  Strategy meets clarity in luxury real estate.
                </h2>
                <div className="space-y-5 text-foreground/65 font-light leading-relaxed text-[1.05rem] mb-10">
                  <p>
                    Navigating the Southern California real estate market requires more than local knowledge — it demands strategic foresight, meticulous preparation, and unwavering advocacy. As an advisor affiliated with Coldwell Banker, I bring an analytical approach to every transaction, ensuring my clients make decisions with complete confidence.
                  </p>
                  <p>
                    Whether you are acquiring a legacy estate in Newport Beach, strategically pricing a home in Irvine, or expanding an investment portfolio across Los Angeles, my commitment is singular: protecting your interests and maximizing your outcome.
                  </p>
                </div>
                <CTAButton href="/about" variant="outline">Read My Story</CTAButton>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ─── FEATURED LISTINGS ──────────────────────────── */}
        <section className="py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-6 pb-10 border-b border-border">
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-medium mb-4 flex items-center gap-3">
                  <span className="w-4 h-px bg-primary" />Portfolio
                </p>
                <h2 className="font-serif font-light tracking-tight text-foreground"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  Exclusive Properties
                </h2>
              </div>
              <Link href="/listings" className="group text-[10px] tracking-[0.22em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-300 flex items-center gap-2 shrink-0">
                <span className="border-b border-foreground/20 group-hover:border-foreground/50 pb-0.5 transition-colors">View All Properties</span>
              </Link>
            </div>

            {/* Clean 3-column grid — no fixed heights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {listings.map((listing, i) => (
                <ListingCard key={i} {...listing} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICES EDITORIAL ─────────────────────────── */}
        <section className="py-28 lg:py-36 bg-[#edebe6]">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <div className="mb-16 text-center">
              <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-medium mb-5 flex items-center justify-center gap-3">
                <span className="w-4 h-px bg-primary" />How We Work<span className="w-4 h-px bg-primary" />
              </p>
              <h2 className="font-serif font-light tracking-tight text-foreground"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                A Tailored Approach
              </h2>
            </div>

            <div>
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group border-t border-foreground/10 last:border-b last:border-foreground/10"
                >
                  <div className="relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 px-0 md:px-4 gap-6 hover:bg-white/30 transition-colors duration-500">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 font-serif text-[9rem] leading-none text-foreground/[0.04] pointer-events-none select-none">
                      {s.num}
                    </span>
                    <h3 className="font-serif font-light text-3xl md:text-4xl tracking-tight relative z-10 w-full md:w-[35%] shrink-0">
                      {s.title}
                    </h3>
                    <div className="w-full md:w-[55%] relative z-10">
                      <p className="text-foreground/65 font-light leading-relaxed mb-6 text-[1.02rem]">{s.body}</p>
                      <Link href={s.href} className="text-[10px] tracking-[0.22em] uppercase font-medium text-foreground/60 hover:text-foreground transition-colors border-b border-foreground/20 pb-0.5 hover:border-foreground/50">
                        {s.label}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COMMUNITIES ────────────────────────────────── */}
        <section className="py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-14">
              <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-medium mb-5 flex items-center gap-3">
                <span className="w-4 h-px bg-primary" />Southern California
              </p>
              <h2 className="font-serif font-light tracking-tight text-foreground"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Curated Communities
              </h2>
            </div>

            {/* 4-column portrait grid — no fixed heights, uses aspect-ratio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {communities.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CommunityCard {...c} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIAL (DARK EDITORIAL) ───────────────── */}
        <section className="py-28 lg:py-36 bg-[#1c1c1a] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-6 lg:px-12 relative z-10">

            {/* Pull quote hero */}
            <div className="max-w-3xl mx-auto text-center mb-24">
              <span className="block font-serif italic text-primary text-7xl leading-none mb-[-1.5rem] opacity-60">"</span>
              <blockquote className="font-serif font-light italic text-white/90 leading-snug tracking-tight mb-8"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                Susan's strategic approach resulted in multiple offers above asking within days. Her professionalism is unmatched and she handled every detail flawlessly.
              </blockquote>
              <p className="font-serif text-base tracking-widest text-white/60 mb-2">The Reynolds Family</p>
              <p className="text-[9px] tracking-[0.25em] uppercase text-white/30 border border-white/10 inline-block px-3 py-1">
                Sellers · Irvine
              </p>
            </div>

            {/* 3-card testimonial row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="border-b md:border-b-0 md:border-r border-white/10 last:border-0 pt-10 pb-8 md:px-10 first:pl-0 last:pr-0"
                >
                  <p className="font-serif italic text-white/70 text-[1.05rem] leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-sm text-white/50 font-light">{t.name}</p>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-white/25 mt-1">{t.location} · {t.type}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-14">
              <Link href="/testimonials" className="text-[10px] tracking-[0.22em] uppercase text-white/40 hover:text-white/80 transition-colors border-b border-white/15 pb-0.5 hover:border-white/40">
                Read All Client Stories
              </Link>
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ──────────────────────────────────── */}
        <section className="relative py-36 lg:py-48 bg-[#fbf9f6] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="font-serif italic text-foreground/[0.03] whitespace-nowrap select-none -rotate-6"
              style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}>
              Strategy. Clarity. Results.
            </span>
          </div>
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10 max-w-3xl">
            <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-medium mb-8 flex items-center justify-center gap-3">
              <span className="w-4 h-px bg-primary" />Begin The Conversation<span className="w-4 h-px bg-primary" />
            </p>
            <h2 className="font-serif font-light tracking-tight text-foreground mb-6 leading-[1.1]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
              Ready to elevate your real estate experience?
            </h2>
            <p className="text-foreground/55 font-light leading-relaxed mb-12 max-w-xl mx-auto">
              Schedule a private consultation to discuss your goals, market opportunities, and how strategic guidance can transform your next move.
            </p>
            <CTAButton href="/contact">Book Your Consultation</CTAButton>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
