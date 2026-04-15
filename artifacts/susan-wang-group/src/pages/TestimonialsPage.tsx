import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Susan's strategic approach to pricing and marketing resulted in multiple offers above asking within days. Her professionalism is unmatched and she handled every detail flawlessly.",
      name: "The Reynolds Family",
      location: "Irvine",
      type: "Sellers"
    },
    {
      quote: "As first-time luxury buyers, we were intimidated by the market. Susan provided clarity, data, and immense patience throughout the entire process. She found us an off-market gem.",
      name: "Dr. James & Emily T.",
      location: "Newport Beach",
      type: "Buyers"
    },
    {
      quote: "We've worked with several agents over the years for our investment properties, but Susan's analytical underwriting sets her apart. She understands cap rates and ROI better than anyone.",
      name: "Marcus V.",
      location: "Los Angeles",
      type: "Investor"
    },
    {
      quote: "Relocating from the East Coast was stressful, but the Susan Wang Group managed the entire acquisition remotely. Their virtual tours and neighborhood insights were incredibly accurate.",
      name: "Sarah & David L.",
      location: "Huntington Beach",
      type: "Buyers"
    },
    {
      quote: "The marketing materials produced for our estate were truly editorial-grade. We had global interest within 48 hours of launching the listing. A masterclass in luxury real estate marketing.",
      name: "Elizabeth C.",
      location: "Newport Coast",
      type: "Seller"
    },
    {
      quote: "Susan is an exceptional negotiator. She protected our interests fiercely during a difficult inspection period and kept the deal together while saving us tens of thousands of dollars.",
      name: "The Chen Family",
      location: "Irvine",
      type: "Buyers"
    },
    {
      quote: "Trust is the most important factor when choosing an agent, and Susan earned ours immediately. Honest, transparent, and incredibly hard-working.",
      name: "Robert M.",
      location: "Los Angeles",
      type: "Seller"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32">
        {/* Editorial Opener */}
        <section className="py-24 bg-[#f0eaf8] relative overflow-hidden">
          <div className="absolute inset-0 bg-[#d8d0eb] -skew-y-2 origin-top-left -z-10 scale-110"></div>
          
          <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary text-xs tracking-[0.3em] uppercase font-medium mb-8 flex items-center justify-center">
                <span className="w-8 h-[1px] bg-primary mr-4"></span>
                Client Stories
                <span className="w-8 h-[1px] bg-primary ml-4"></span>
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight mb-8">
                A Record of Excellence.
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
                The true measure of an advisor's capability is the results delivered and the trust maintained with their clients.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 pb-40">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Masonry-style Layout */}
            <div className="columns-1 md:columns-2 gap-12 space-y-12">
              {testimonials.map((t, i) => (
                <div key={i} className="break-inside-avoid">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
            
            <div className="mt-32 text-center border-t border-border pt-24">
              <h3 className="font-serif text-4xl mb-8 font-light tracking-tight">Ready to write your success story?</h3>
              <CTAButton href="/contact">Book a Consultation</CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
