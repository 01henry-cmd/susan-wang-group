import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { ListingCard } from "@/components/ListingCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CommunityCard } from "@/components/CommunityCard";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80" 
              alt="Luxury home exterior" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          <div className="container relative z-10 px-6 text-center text-white mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                Elevated Real Estate in Southern California
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light tracking-wide">
                Helping clients buy, sell & invest with strategy and clarity in Orange County and Los Angeles.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href="/contact" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 border-none">
                  Book a Consultation
                </CTAButton>
                <CTAButton href="/listings" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-foreground">
                  View Featured Properties
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-white py-12 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 opacity-60">
              <div className="text-center font-serif text-2xl tracking-widest text-foreground uppercase">Coldwell Banker Realty</div>
              <div className="text-center font-serif text-2xl tracking-widest text-foreground uppercase">Global Luxury</div>
              <div className="text-center font-serif text-2xl tracking-widest text-foreground uppercase">Top 1% Agent</div>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/20 flex items-center justify-center">
                  <span className="font-serif text-6xl text-white tracking-widest">SW</span>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 border border-primary/30 -z-10" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-primary text-sm tracking-widest uppercase font-medium mb-4">Meet Susan Wang</p>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                  Strategy meets clarity in luxury real estate.
                </h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Navigating the Southern California real estate market requires more than just local knowledge—it demands strategic foresight, meticulous preparation, and unwavering advocacy. As an advisor affiliated with Coldwell Banker, I bring an analytical approach to every transaction, ensuring my clients make decisions with complete confidence.
                </p>
                <p className="text-foreground/70 mb-10 leading-relaxed">
                  Whether you are acquiring a legacy estate in Newport Beach, strategically pricing a home in Irvine, or expanding an investment portfolio across Los Angeles, my commitment is singular: protecting your interests and maximizing your outcome.
                </p>
                <CTAButton href="/about">Read My Story</CTAButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Listings Preview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <SectionHeading 
                title="Exclusive Properties" 
                subtitle="Featured Collection" 
                align="left"
                className="mb-0"
              />
              <CTAButton href="/listings" variant="outline">View All Properties</CTAButton>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ListingCard 
                image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
                price="$4,250,000"
                address="142 Oceanfront Ave"
                city="Newport Beach, CA"
                beds={4}
                baths={4.5}
                sqft="3,850"
              />
              <ListingCard 
                image="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"
                price="$2,895,000"
                address="88 Orchard Hills Dr"
                city="Irvine, CA"
                beds={5}
                baths={5}
                sqft="4,200"
              />
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
        </section>

        {/* Services / Approach */}
        <section className="py-24 md:py-32 bg-accent/30">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="A Tailored Approach" 
              subtitle="How We Work" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-2xl text-primary">01</span>
                </div>
                <h3 className="font-serif text-2xl mb-4">For Buyers</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Strategic acquisition. From off-market opportunities to precise valuation modeling, we ensure you secure the right property at the right price.
                </p>
                <Link href="/buyers" className="text-sm uppercase tracking-wider font-medium text-primary hover:text-foreground transition-colors">
                  Buyer Services
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-2xl text-primary">02</span>
                </div>
                <h3 className="font-serif text-2xl mb-4">For Sellers</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Maximized returns. Through editorial-grade marketing, meticulous preparation, and aggressive negotiation, we elevate your property's perception.
                </p>
                <Link href="/sellers" className="text-sm uppercase tracking-wider font-medium text-primary hover:text-foreground transition-colors">
                  Seller Services
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-2xl text-primary">03</span>
                </div>
                <h3 className="font-serif text-2xl mb-4">For Investors</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Analytical underwriting. We identify high-yield opportunities, analyze cap rates, and project appreciation in emerging neighborhoods.
                </p>
                <Link href="/investors" className="text-sm uppercase tracking-wider font-medium text-primary hover:text-foreground transition-colors">
                  Investor Services
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Markets */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Curated Communities" 
              subtitle="Southern California" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <CommunityCard 
                name="Newport Beach"
                image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
                description="Coastal luxury, private docks, and world-class yachting."
                href="/communities#newport-beach"
              />
              <CommunityCard 
                name="Irvine"
                image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"
                description="Master-planned perfection, top-tier schools, and modern estates."
                href="/communities#irvine"
              />
              <CommunityCard 
                name="Los Angeles"
                image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                description="Iconic architecture, cultural hubs, and unparalleled views."
                href="/communities#los-angeles"
              />
              <CommunityCard 
                name="Huntington Beach"
                image="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80"
                description="Surf culture meets relaxed luxury living by the ocean."
                href="/communities#huntington-beach"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <SectionHeading 
                  title="Client Success Stories" 
                  subtitle="Testimonials" 
                  align="left"
                />
                <p className="text-foreground/70 mb-8">
                  The true measure of our success is the trust we build and the results we deliver for our clients. Hear from those who have experienced the Susan Wang Group difference.
                </p>
                <CTAButton href="/testimonials" variant="outline">Read All Stories</CTAButton>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <TestimonialCard 
                  quote="Susan's strategic approach to pricing and marketing resulted in multiple offers above asking within days. Her professionalism is unmatched."
                  name="The Reynolds Family"
                  location="Irvine"
                  type="Sellers"
                />
                <TestimonialCard 
                  quote="As first-time luxury buyers, we were intimidated by the market. Susan provided clarity, data, and immense patience throughout the entire process."
                  name="Dr. James & Emily T."
                  location="Newport Beach"
                  type="Buyers"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-foreground text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 max-w-2xl mx-auto">Ready to elevate your real estate experience?</h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg font-light">
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
