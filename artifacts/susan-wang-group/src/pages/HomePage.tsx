import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { ListingCard } from "@/components/ListingCard";
import { CommunityCard } from "@/components/CommunityCard";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-foreground">
      <Navigation />
      
      <main className="flex-grow">
        {/* Editorial Hero Section */}
        <section className="relative min-h-[100dvh] pt-32 pb-16 lg:py-0 flex items-center bg-[#fcfbf9] overflow-hidden">
          {/* Subtle background texture */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-[0.03]">
            <span className="font-serif text-[40vw] italic text-foreground tracking-tighter select-none">S</span>
          </div>

          <div className="container relative z-10 px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left: Editorial Text */}
              <div className="lg:col-span-6 xl:col-span-5 pt-10 lg:pt-0 order-2 lg:order-1 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="w-12 h-[1px] bg-primary mb-8"></div>
                  
                  <h1 className="font-serif text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-6 text-foreground font-light">
                    Elevated<br />
                    <span className="italic text-primary">Real Estate</span><br />
                    in Southern California.
                  </h1>
                  
                  <p className="text-lg text-foreground/70 mb-12 max-w-md font-light leading-relaxed">
                    Helping discerning clients buy, sell & invest with strategy and clarity in Orange County and Los Angeles.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <CTAButton href="/contact">
                      Book a Consultation
                    </CTAButton>
                    <Link href="/listings" className="group flex items-center text-xs tracking-[0.2em] uppercase mt-4 sm:mt-6 font-medium">
                      <span className="border-b border-foreground/30 pb-1 group-hover:border-foreground transition-colors">View Portfolio</span>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Right: Portrait Image Frame */}
              <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2 relative flex justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full max-w-[600px] ml-auto"
                >
                  <div className="aspect-[3/4] md:aspect-[4/5] relative bg-foreground/5 p-4 md:p-6 shadow-2xl shadow-black/5">
                    <div className="relative w-full h-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" 
                        alt="Luxury home exterior" 
                        className="w-full h-full object-cover object-center scale-105"
                      />
                      <div className="absolute inset-0 bg-[#3a2818]/10 mix-blend-multiply" />
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-foreground/10 -z-10"></div>
                  <div className="absolute top-12 -right-6 w-24 h-24 bg-primary/5 -z-10"></div>
                </motion.div>
              </div>
              
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-6 md:left-12 flex items-center gap-4 hidden md:flex"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/50 rotate-90 origin-left translate-x-2 translate-y-6">Scroll</span>
            <div className="w-[1px] h-16 bg-foreground/20 overflow-hidden relative">
              <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-foreground/60"
              />
            </div>
          </motion.div>
        </section>

        {/* Refined Trust Bar */}
        <section className="bg-white py-16 border-y border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              <div className="flex items-center text-xs tracking-[0.2em] uppercase text-foreground/40">
                <div className="w-8 h-[1px] bg-foreground/20 mr-4"></div>
                Affiliated With
              </div>
              <div className="font-serif text-2xl lg:text-3xl tracking-wide text-foreground font-light">Coldwell Banker Global Luxury</div>
              <div className="hidden lg:block w-[1px] h-8 bg-border"></div>
              <div className="text-xs tracking-[0.2em] uppercase text-foreground/60">DRE# 02132358</div>
              <div className="hidden lg:block w-[1px] h-8 bg-border"></div>
              <div className="text-xs tracking-[0.2em] uppercase text-foreground/60">Orange County &middot; Los Angeles</div>
            </div>
          </div>
        </section>

        {/* Asymmetric About Preview */}
        <section className="py-32 bg-[#fcfbf9]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start max-w-7xl mx-auto">
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-[45%] relative"
              >
                <div className="aspect-[3/4] relative bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/20 flex items-center justify-center z-10 mix-blend-overlay"></div>
                  {/* Real headshot or lifestyle photo goes here */}
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" alt="Luxury Real Estate Agent" className="w-full h-full object-cover grayscale opacity-80" />
                </div>
                
                {/* Pull quote floating over image */}
                <div className="absolute -bottom-8 -right-8 lg:-right-16 bg-white p-8 md:p-10 shadow-xl max-w-[300px] z-20 border border-border">
                  <p className="font-serif text-xl italic leading-snug text-foreground mb-4">
                    "Every property tells a story. My job is to ensure it reaches the right audience."
                  </p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/50">— Susan Wang</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-[55%] lg:pt-16 xl:pl-12 flex"
              >
                <div className="hidden lg:block w-[1px] self-stretch bg-border mr-12"></div>
                <div>
                  <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-6 flex items-center">
                    <span className="w-4 h-[1px] bg-primary mr-3"></span>
                    Principal Advisor
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-foreground mb-10 leading-[1.1] font-light tracking-tight">
                    Strategy meets clarity in luxury real estate.
                  </h2>
                  <div className="text-foreground/70 space-y-6 font-light leading-relaxed text-lg mb-12">
                    <p>
                      Navigating the Southern California real estate market requires more than just local knowledge—it demands strategic foresight, meticulous preparation, and unwavering advocacy. As an advisor affiliated with Coldwell Banker, I bring an analytical approach to every transaction, ensuring my clients make decisions with complete confidence.
                    </p>
                    <p>
                      Whether you are acquiring a legacy estate in Newport Beach, strategically pricing a home in Irvine, or expanding an investment portfolio across Los Angeles, my commitment is singular: protecting your interests and maximizing your outcome.
                    </p>
                  </div>
                  <CTAButton href="/about" variant="outline">Read My Story</CTAButton>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Featured Listings - Asymmetric Layout */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-border pb-8">
              <div>
                <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4 flex items-center">
                  <span className="w-4 h-[1px] bg-primary mr-3"></span>
                  Portfolio
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground tracking-tight">Exclusive Properties</h2>
              </div>
              <Link href="/listings" className="group flex items-center text-xs tracking-[0.2em] uppercase font-medium pb-2">
                <span className="border-b border-foreground pb-1">View All Properties</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 h-auto lg:h-[800px]">
              {/* Featured Large Card */}
              <div className="lg:col-span-7 h-[500px] lg:h-full">
                <ListingCard 
                  image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80"
                  price="$4,250,000"
                  address="142 Oceanfront Ave"
                  city="Newport Beach, CA"
                  beds={4}
                  baths={4.5}
                  sqft="3,850"
                  status="Featured"
                />
              </div>
              
              {/* Stacked Smaller Cards */}
              <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-12 h-[1000px] lg:h-full">
                <div className="flex-1">
                  <ListingCard 
                    image="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"
                    price="$2,895,000"
                    address="88 Orchard Hills Dr"
                    city="Irvine, CA"
                    beds={5}
                    baths={5}
                    sqft="4,200"
                    status="Just Listed"
                  />
                </div>
                <div className="flex-1">
                  <ListingCard 
                    image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                    price="$5,100,000"
                    address="412 Beverly Estate"
                    city="Los Angeles, CA"
                    beds={6}
                    baths={7}
                    sqft="6,500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Services Spread */}
        <section className="py-32 bg-[#ebe8e2]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-20 text-center">
              <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4">How We Work</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground tracking-tight">A Tailored Approach</h2>
            </div>
            
            <div className="space-y-0">
              {/* Service 01 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group border-t border-foreground/10 relative overflow-hidden"
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 font-serif text-[15rem] leading-none text-foreground opacity-5 pointer-events-none transition-transform duration-700 group-hover:translate-x-10">
                  01
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between py-16 px-4 md:px-12 gap-8 transition-colors duration-500 hover:bg-white/40">
                  <h3 className="font-serif text-4xl md:text-5xl w-full md:w-1/3">For Buyers</h3>
                  <div className="w-full md:w-1/2">
                    <p className="text-foreground/70 mb-8 font-light leading-relaxed text-lg">
                      Strategic acquisition. From off-market opportunities to precise valuation modeling, we ensure you secure the right property at the right price, with terms that protect your interests.
                    </p>
                    <Link href="/buyers" className="text-xs tracking-[0.2em] uppercase font-medium border-b border-foreground/30 pb-1 hover:border-foreground transition-colors">
                      Buyer Representation
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Service 02 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group border-t border-foreground/10 relative overflow-hidden"
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 font-serif text-[15rem] leading-none text-foreground opacity-5 pointer-events-none transition-transform duration-700 group-hover:translate-x-10">
                  02
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between py-16 px-4 md:px-12 gap-8 transition-colors duration-500 hover:bg-white/40">
                  <h3 className="font-serif text-4xl md:text-5xl w-full md:w-1/3">For Sellers</h3>
                  <div className="w-full md:w-1/2">
                    <p className="text-foreground/70 mb-8 font-light leading-relaxed text-lg">
                      Maximized returns. Through editorial-grade marketing, meticulous staging preparation, and aggressive negotiation, we elevate your property's perception in the market.
                    </p>
                    <Link href="/sellers" className="text-xs tracking-[0.2em] uppercase font-medium border-b border-foreground/30 pb-1 hover:border-foreground transition-colors">
                      Seller Representation
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Service 03 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group border-y border-foreground/10 relative overflow-hidden"
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 font-serif text-[15rem] leading-none text-foreground opacity-5 pointer-events-none transition-transform duration-700 group-hover:translate-x-10">
                  03
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between py-16 px-4 md:px-12 gap-8 transition-colors duration-500 hover:bg-white/40">
                  <h3 className="font-serif text-4xl md:text-5xl w-full md:w-1/3">For Investors</h3>
                  <div className="w-full md:w-1/2">
                    <p className="text-foreground/70 mb-8 font-light leading-relaxed text-lg">
                      Analytical underwriting. We identify high-yield opportunities, analyze cap rates, and project appreciation in emerging neighborhoods to build robust real estate portfolios.
                    </p>
                    <Link href="/investors" className="text-xs tracking-[0.2em] uppercase font-medium border-b border-foreground/30 pb-1 hover:border-foreground transition-colors">
                      Investment Advisory
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Irregular Markets Grid */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-4 flex items-center">
                <span className="w-4 h-[1px] bg-primary mr-3"></span>
                Southern California
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground tracking-tight">Curated Communities</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
              <div className="md:col-span-5 h-[400px] md:h-full">
                <CommunityCard 
                  name="Newport Beach"
                  image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=80"
                  description="Coastal luxury, private docks, and world-class yachting along the stunning Pacific shoreline."
                  href="/communities#newport-beach"
                />
              </div>
              <div className="md:col-span-7 grid grid-rows-2 gap-6 h-[800px] md:h-full">
                <div className="row-span-1">
                  <CommunityCard 
                    name="Los Angeles"
                    image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80"
                    description="Iconic architecture, cultural hubs, and unparalleled views from the hills to the coast."
                    href="/communities#los-angeles"
                  />
                </div>
                <div className="row-span-1 grid grid-cols-2 gap-6">
                  <CommunityCard 
                    name="Irvine"
                    image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"
                    description="Master-planned perfection."
                    href="/communities#irvine"
                  />
                  <CommunityCard 
                    name="Huntington"
                    image="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80"
                    description="Relaxed luxury living."
                    href="/communities#huntington-beach"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-Contrast Testimonial Section */}
        <section className="py-32 bg-[#1a1a1a] text-white overflow-hidden relative">
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80" alt="Texture" className="w-full h-full object-cover blur-sm" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-serif text-primary text-[8rem] leading-none block mb-[-4rem]">"</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.3] tracking-tight mb-12">
                Susan's strategic approach to pricing and marketing resulted in multiple offers above asking within days. Her professionalism is unmatched and she handled every detail flawlessly.
              </h2>
              <div className="flex flex-col items-center">
                <span className="font-serif text-xl tracking-widest mb-2">The Reynolds Family</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 border border-white/20 px-3 py-1 mt-2">Sellers &middot; Irvine</span>
              </div>
              <div className="mt-16 pt-12 border-t border-white/10">
                <Link href="/testimonials" className="text-xs tracking-[0.2em] uppercase font-medium border-b border-white/30 pb-1 hover:border-white transition-colors">
                  Read All Client Stories
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-40 overflow-hidden bg-foreground flex items-center justify-center min-h-[70vh]">
          {/* Large Watermark Texture */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5 overflow-hidden">
            <span className="font-serif italic text-white text-[15vw] whitespace-nowrap rotate-[-5deg] select-none">Strategy. Clarity. Results.</span>
          </div>
          
          <div className="container relative z-10 px-6 text-center text-white">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 font-light tracking-tight max-w-3xl mx-auto leading-[1.1]">
              Ready to elevate your real estate experience?
            </h2>
            <p className="text-white/70 mb-12 max-w-xl mx-auto text-lg font-light leading-relaxed">
              Schedule a private consultation to discuss your real estate goals, market opportunities, and how we can add value to your next move.
            </p>
            <CTAButton href="/contact" className="bg-white text-foreground hover:bg-white/90">
              Book Your Consultation
            </CTAButton>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
