import { Link } from "wouter";
import { Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-white py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-24">

          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-6 mb-8">
              <Link href="/" className="cursor-pointer shrink-0">
                <img
                  src="/logo.png"
                  alt="Susan Wang Group"
                  className="h-28 w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </Link>
              <div className="w-px self-stretch bg-white/15" />
              <div className="h-28 w-28 overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  src="/cb-logo2.png"
                  alt="Coldwell Banker Realty"
                  className="w-full h-full object-contain"
                  style={{ mixBlendMode: "screen", transform: "scale(1.75)", transformOrigin: "center" }}
                />
              </div>
            </div>
            <p className="text-white/60 text-base font-light leading-relaxed mb-10 max-w-sm">
              {t("footer_tagline")}
            </p>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <Instagram strokeWidth={1.5} className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <Youtube strokeWidth={1.5} className="w-6 h-6" />
              </a>
              {/* WeChat QR */}
              <div className="relative group">
                <button className="text-white/50 hover:text-white transition-colors flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-label="WeChat">
                    <path d="M8.7 11.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm4.6 0c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zM9 5C4 5 0 8.4 0 12.6c0 2.3 1.2 4.4 3.1 5.8l-.7 2.2 2.5-1.4C6 19.7 7.5 20 9 20c.3 0 .6 0 .9-.1C9.6 19.4 9.5 19 9.5 18.5c0-3.6 3.4-6.5 7.5-6.5.3 0 .7 0 1 .1C17.4 8.4 13.6 5 9 5z"/>
                    <path d="M21.6 22l-1.9-1.1c-1 .4-2.1.6-3.2.6-3.5 0-6.3-2.3-6.3-5.2S13 11 16.5 11s6.3 2.3 6.3 5.2c0 1.5-.7 2.8-1.9 3.8L21.6 22zm-5.2-7.8c-.4 0-.8.3-.8.8s.4.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm3.2 0c-.4 0-.8.3-.8.8s.4.8.8.8.8-.3.8-.8-.3-.8-.8-.8z"/>
                  </svg>
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:flex flex-col items-center z-50">
                  <div className="bg-white shadow-2xl p-3 border border-border">
                    <img src="/wechat-qr.jpg" alt="Scan to add on WeChat" className="w-36 h-36 object-contain" />
                    <p className="text-[9px] tracking-[0.18em] uppercase text-foreground/50 text-center mt-2">Scan on WeChat</p>
                  </div>
                  <div className="w-2 h-2 bg-white border-r border-b border-border rotate-45 -mt-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-white/40 mb-8">{t("footer_explore")}</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">{t("footer_about")}</Link></li>
              <li><Link href="/buyers" className="hover:text-white transition-colors">{t("footer_buyers")}</Link></li>
              <li><Link href="/sellers" className="hover:text-white transition-colors">{t("footer_sellers")}</Link></li>
              <li><Link href="/investors" className="hover:text-white transition-colors">{t("footer_investors")}</Link></li>
              <li><Link href="/communities" className="hover:text-white transition-colors">{t("footer_communities")}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-white/40 mb-8">{t("footer_properties")}</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li><Link href="/listings" className="hover:text-white transition-colors">{t("footer_listings")}</Link></li>
              <li><Link href="/videos" className="hover:text-white transition-colors">{t("footer_tours")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("footer_book")}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-white/40 mb-8">{t("footer_contact")}</h4>
            <ul className="space-y-6 text-sm font-light text-white/70">
              <li>
                <a href="tel:+17148182511" className="hover:text-white transition-colors text-lg">(714) 818-2511</a>
              </li>
              <li>
                <a href="mailto:Susan.wang@cbrealty.com" className="hover:text-white transition-colors text-lg">Susan.wang@cbrealty.com</a>
              </li>
              <li className="flex items-start pt-4 border-t border-white/10">
                <span className="leading-relaxed">840 Newport Center Dr, Ste 100<br/>Newport Beach, CA 92660</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center text-xs tracking-wider uppercase text-white/40 gap-6">
          <div className="space-y-2 font-medium">
            <p>&copy; {new Date().getFullYear()} Susan Wang Group. All rights reserved.</p>
            <p>Susan Wang | CA DRE# 02132358</p>
            <p>Coldwell Banker Realty | CA DRE# 00616212</p>
          </div>
          <div className="flex flex-wrap gap-8 font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

        <div className="border-t border-white/8 mt-8 pt-8">
          <p className="text-[10px] leading-relaxed text-white/28 font-light tracking-wide">
            The property information herein is derived from various sources that may include, but not be limited to, county records and the Multiple Listing Service, and it may include approximations. Although the information is believed to be accurate, it is not warranted and you should not rely upon it without personal verification. Affiliated real estate agents are independent contractor sales associates, not employees. ©2026 Coldwell Banker. All Rights Reserved. Coldwell Banker and the Coldwell Banker logo are trademarks of Coldwell Banker Real Estate LLC. The Coldwell Banker® System is comprised of company owned offices which are owned by a subsidiary of Anywhere Advisors LLC and franchised offices which are independently owned and operated. The Coldwell Banker System fully supports the principles of the Fair Housing Act and the Equal Opportunity Act.
          </p>
        </div>
      </div>
    </footer>
  );
}
