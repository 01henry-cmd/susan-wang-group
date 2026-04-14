import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTAButton } from "@/components/CTAButton";

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
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <SectionHeading 
              title="A Record of Excellence" 
              subtitle="Client Stories" 
            />
            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              The true measure of an advisor's capability is the results delivered and the trust maintained with their clients.
            </p>
          </div>
        </section>

        <section className="py-12 bg-accent/20 pb-32">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="columns-1 md:columns-2 gap-8 space-y-8">
              {testimonials.map((t, i) => (
                <div key={i} className="break-inside-avoid">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
            
            <div className="mt-24 text-center">
              <h3 className="font-serif text-2xl mb-6">Ready to write your success story?</h3>
              <CTAButton href="/contact">Book a Consultation</CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
