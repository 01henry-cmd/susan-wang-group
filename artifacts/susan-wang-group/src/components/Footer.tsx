import { Link } from "wouter";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/">
              <div className="flex flex-col mb-6 cursor-pointer">
                <span className="font-serif text-2xl tracking-wide text-white">Susan Wang</span>
                <span className="text-[0.65rem] tracking-[0.2em] uppercase text-primary mt-0.5">Group</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Helping clients buy, sell & invest with strategy and clarity in Orange County and Los Angeles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors p-2 rounded-full border border-white/20 hover:border-white/50">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors p-2 rounded-full border border-white/20 hover:border-white/50">
                <Youtube size={18} />
              </a>
              {/* WeChat Icon Placeholder */}
              <a href="#" className="text-white/70 hover:text-white transition-colors p-2 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center w-[36px] h-[36px]">
                <span className="text-[10px] font-bold">WC</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About Susan</Link></li>
              <li><Link href="/buyers" className="hover:text-white transition-colors">Buyers</Link></li>
              <li><Link href="/sellers" className="hover:text-white transition-colors">Sellers</Link></li>
              <li><Link href="/investors" className="hover:text-white transition-colors">Investors</Link></li>
              <li><Link href="/communities" className="hover:text-white transition-colors">Communities</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Properties</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/listings" className="hover:text-white transition-colors">Featured Listings</Link></li>
              <li><Link href="/videos" className="hover:text-white transition-colors">Property Tours</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Client Stories</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <a href="tel:+19495550182" className="hover:text-white transition-colors">(949) 555-0182</a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                <a href="mailto:susan@susanwanggroup.com" className="hover:text-white transition-colors">susan@susanwanggroup.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Coldwell Banker Realty<br/>Newport Beach, CA</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
          <div className="mb-4 md:mb-0 text-center md:text-left space-y-1">
            <p>&copy; {new Date().getFullYear()} Susan Wang Group. All rights reserved.</p>
            <p>Susan Wang is a licensed real estate broker affiliated with Coldwell Banker. DRE# 02132358.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
