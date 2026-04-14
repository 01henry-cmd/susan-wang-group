import { Link } from "wouter";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-24">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <Link href="/">
              <div className="flex flex-col mb-8 cursor-pointer max-w-fit">
                <span className="font-serif text-3xl tracking-wide text-white font-light">Susan Wang</span>
                <div className="h-[1px] w-full bg-white/20 my-1"></div>
                <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/50">Group</span>
              </div>
            </Link>
            <p className="text-white/60 text-base font-light leading-relaxed mb-10 max-w-sm">
              Helping clients buy, sell & invest with strategy and clarity in Orange County and Los Angeles.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <Instagram strokeWidth={1.5} className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <Youtube strokeWidth={1.5} className="w-6 h-6" />
              </a>
              {/* WeChat Icon Placeholder */}
              <a href="#" className="text-white/50 hover:text-white transition-colors flex items-center justify-center">
                <span className="text-sm font-medium tracking-widest border border-white/50 px-2 py-0.5 hover:border-white transition-colors">WC</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-white/40 mb-8">Explore</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About Susan</Link></li>
              <li><Link href="/buyers" className="hover:text-white transition-colors">Buyers</Link></li>
              <li><Link href="/sellers" className="hover:text-white transition-colors">Sellers</Link></li>
              <li><Link href="/investors" className="hover:text-white transition-colors">Investors</Link></li>
              <li><Link href="/communities" className="hover:text-white transition-colors">Communities</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-white/40 mb-8">Properties</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li><Link href="/listings" className="hover:text-white transition-colors">Featured Listings</Link></li>
              <li><Link href="/videos" className="hover:text-white transition-colors">Property Tours</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Client Stories</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-white/40 mb-8">Contact</h4>
            <ul className="space-y-6 text-sm font-light text-white/70">
              <li className="flex items-start">
                <a href="tel:+19495550182" className="hover:text-white transition-colors text-lg">(949) 555-0182</a>
              </li>
              <li className="flex items-start">
                <a href="mailto:susan@susanwanggroup.com" className="hover:text-white transition-colors text-lg">susan@susanwanggroup.com</a>
              </li>
              <li className="flex items-start pt-4 border-t border-white/10">
                <span className="leading-relaxed">Coldwell Banker Realty<br/>Newport Beach, CA</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center text-xs tracking-wider uppercase text-white/40 gap-6">
          <div className="space-y-2 font-medium">
            <p>&copy; {new Date().getFullYear()} Susan Wang Group. All rights reserved.</p>
            <p>Susan Wang is a licensed real estate broker affiliated with Coldwell Banker. DRE# 02132358.</p>
          </div>
          <div className="flex flex-wrap gap-8 font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
