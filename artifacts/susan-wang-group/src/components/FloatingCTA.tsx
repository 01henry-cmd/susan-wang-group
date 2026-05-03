import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export function FloatingCTA() {
  const { lang } = useLanguage();
  const [location] = useLocation();
  const isContact = location === "/contact";

  const label = lang === "zh" ? "联系我们" : "Let's Connect";
  const sub   = lang === "zh" ? "预约咨询" : "Book a Consultation";

  return (
    <AnimatePresence>
      {!isContact && (
        <motion.div
          key="floating-cta"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-4 text-white shadow-xl shadow-black/20 px-6 py-3.5 cursor-pointer border border-white/15 transition-opacity duration-300 hover:opacity-90 rounded-full"
              style={{ background: "linear-gradient(120deg, #b6259f 0%, #8a30af 45%, #1b9dbf 100%)" }}
            >
              {/* Pulse dot */}
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white/90" />
              </span>

              <div className="flex flex-col leading-tight">
                <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-white">
                  {label}
                </span>
                <span className="text-[9px] tracking-[0.18em] uppercase text-white/55 mt-0.5">
                  {sub}
                </span>
              </div>

              {/* Arrow */}
              <svg
                className="w-3.5 h-3.5 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
