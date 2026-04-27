import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = location === "/";
  const transparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Buyers", path: "/buyers" },
    { name: "Sellers", path: "/sellers" },
    { name: "Investors", path: "/investors" },
    { name: "Areas", path: "/communities" },
    { name: "Listings", path: "/listings" },
    { name: "Videos", path: "/videos" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          transparent
            ? "bg-transparent border-b border-transparent py-6"
            : isScrolled
            ? "bg-[#f7f5fb]/96 backdrop-blur-md border-b border-foreground/10 py-4"
            : "bg-[#f7f5fb]/88 backdrop-blur-sm border-b border-foreground/10 py-5"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Logo — inverted white when over hero, dark otherwise */}
          <Link href="/" className="z-50 cursor-pointer shrink-0">
            <img
              src="/logo.png"
              alt="Susan Wang Group"
              className="w-auto object-contain transition-all duration-700"
              style={{
                height: "clamp(3.5rem, 5vw, 5rem)",
                maxWidth: "280px",
                filter: transparent ? "brightness(0) invert(1)" : "none",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            <ul className="flex items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.04, ease: "easeOut" }}
                >
                  <Link href={link.path}>
                    <span className={`text-[11px] tracking-[0.16em] uppercase transition-colors duration-300 relative group ${
                      transparent
                        ? location === link.path
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                        : location === link.path
                        ? "text-foreground"
                        : "text-foreground/50 hover:text-foreground"
                    }`}>
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                        transparent ? "bg-white/80" : "bg-primary"
                      } ${
                        location === link.path ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/contact">
                <span className={`text-[10px] tracking-[0.18em] uppercase px-5 py-3 transition-all duration-500 inline-block ${
                  transparent
                    ? "border border-white/50 text-white/80 hover:bg-white hover:text-foreground hover:border-white"
                    : "border border-foreground/60 text-foreground/75 hover:bg-foreground hover:text-white hover:border-foreground"
                }`}>
                  Book Consultation
                </span>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden z-50 p-2 -mr-2 transition-colors duration-500 ${
              transparent ? "text-white" : "text-foreground"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen
              ? <X size={22} strokeWidth={1.2} />
              : <Menu size={22} strokeWidth={1.2} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#f0edf8] pt-28 px-8 pb-12 flex flex-col overflow-y-auto lg:hidden"
          >
            <nav className="flex flex-col space-y-1 mt-4 border-t border-foreground/10">
              {[{ name: "Home", path: "/" }, ...navLinks, { name: "Contact", path: "/contact" }].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.045 }}
                  className="border-b border-foreground/8 py-5"
                >
                  <Link href={link.path} onClick={() => setMobileMenuOpen(false)}>
                    <span className={`text-3xl font-serif font-light tracking-tight block ${
                      location === link.path ? "text-foreground" : "text-foreground/60"
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
