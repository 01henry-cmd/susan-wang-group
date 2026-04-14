import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { CommunityCard } from "@/components/CommunityCard";

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <SectionHeading 
              title="Curated Markets" 
              subtitle="Explore Southern California" 
            />
            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              From the pristine coastal enclaves of Orange County to the dynamic cultural hubs of Los Angeles, explore the neighborhoods we serve.
            </p>
          </div>
        </section>

        <section className="py-12 pb-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CommunityCard 
                name="Newport Beach"
                image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
                description="Renowned for its expansive harbor, pristine beaches, and ultra-luxury real estate. Newport Beach offers an unparalleled coastal lifestyle, featuring exclusive enclaves like Crystal Cove, Pelican Hill, and the Balboa Peninsula."
                href="/contact"
              />
              <CommunityCard 
                name="Irvine"
                image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"
                description="A master-planned marvel known for its safety, world-class educational institutions, and thriving corporate centers. Irvine features meticulously designed villages like Orchard Hills and Shady Canyon."
                href="/contact"
              />
              <CommunityCard 
                name="Los Angeles"
                image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                description="The cultural epicenter of the West Coast. From the historic estates of Beverly Hills and Bel Air to the modern architectural triumphs of the Hollywood Hills and the vibrant pulse of West Hollywood."
                href="/contact"
              />
              <CommunityCard 
                name="Huntington Beach"
                image="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80"
                description="Known globally as 'Surf City USA,' offering a relaxed yet refined coastal atmosphere. Featuring expansive stretches of sand, waterfront dining, and highly sought-after properties."
                href="/contact"
              />
            </div>
            
            <div className="mt-24 text-center">
              <h3 className="font-serif text-2xl mb-6">Seeking insights on a specific neighborhood?</h3>
              <CTAButton href="/contact" variant="outline">Request Neighborhood Report</CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
