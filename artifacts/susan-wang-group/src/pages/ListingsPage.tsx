import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { ListingCard } from "@/components/ListingCard";
import { Search, SlidersHorizontal } from "lucide-react";

export default function ListingsPage() {
  const listings = [
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      price: "$4,250,000",
      address: "142 Oceanfront Ave",
      city: "Newport Beach, CA",
      beds: 4,
      baths: 4.5,
      sqft: "3,850",
      status: "Active"
    },
    {
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      price: "$2,895,000",
      address: "88 Orchard Hills Dr",
      city: "Irvine, CA",
      beds: 5,
      baths: 5,
      sqft: "4,200",
      status: "Just Listed"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      price: "$5,100,000",
      address: "412 Beverly Estate",
      city: "Los Angeles, CA",
      beds: 6,
      baths: 7,
      sqft: "6,500",
      status: "Active"
    },
    {
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
      price: "$1,850,000",
      address: "24 Seaview Ln",
      city: "Huntington Beach, CA",
      beds: 3,
      baths: 2.5,
      sqft: "2,400",
      status: "Under Contract"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      price: "$8,950,000",
      address: "7 Pelican Crest",
      city: "Newport Coast, CA",
      beds: 6,
      baths: 8,
      sqft: "9,200",
      status: "Active"
    },
    {
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
      price: "$3,150,000",
      address: "15 Shady Canyon",
      city: "Irvine, CA",
      beds: 4,
      baths: 4.5,
      sqft: "4,800",
      status: "Sold"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Exclusive Properties" 
              subtitle="Portfolio" 
              align="left"
            />
            
            {/* Filter Bar Placeholder */}
            <div className="flex flex-col md:flex-row gap-4 mb-12 p-4 border border-border bg-accent/10">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search by city, neighborhood, or zip..." 
                  className="w-full pl-10 pr-4 py-3 bg-white border border-border focus:outline-none focus:border-primary text-sm"
                />
              </div>
              <div className="flex gap-4">
                <select className="px-4 py-3 bg-white border border-border focus:outline-none text-sm min-w-[150px] appearance-none">
                  <option>Price (Any)</option>
                  <option>$1M - $2M</option>
                  <option>$2M - $5M</option>
                  <option>$5M+</option>
                </select>
                <select className="px-4 py-3 bg-white border border-border focus:outline-none text-sm min-w-[120px] appearance-none">
                  <option>Beds</option>
                  <option>3+</option>
                  <option>4+</option>
                  <option>5+</option>
                </select>
                <button className="px-4 py-3 bg-white border border-border hover:bg-accent/50 transition-colors flex items-center justify-center text-sm font-medium">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </button>
              </div>
            </div>

            {/* Note about IDX */}
            <div className="mb-8 text-sm text-foreground/60 flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2" />
              Viewing featured portfolio. Full MLS/IDX integration coming soon.
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
              {listings.map((listing, i) => (
                <ListingCard key={i} {...listing} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
