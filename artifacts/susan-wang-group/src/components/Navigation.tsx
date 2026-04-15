import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
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
          isScrolled
            ? "bg-[#e8e2f5]/96 backdrop-blur-md border-b border-foreground/14 py-4"
            : isHome
            ? "bg-[#e8e2f5]/75 backdrop-blur-sm border-b border-foreground/14 py-6"
            : "bg-[#e8e2f5]/88 backdrop-blur-sm border-b border-foreground/12 py-5"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="z-50 cursor-pointer shrink-0">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-[1.45rem] tracking-wide text-foreground">Susan Wang</span>
              <div className="h-px w-full bg-foreground/18 my-[3px]" />
              <span className="text-[0.6rem] tracking-[0.24em] uppercase text-foreground/55">Group</span>
            </div>
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
                      location === link.path
                        ? "text-foreground"
                        : "text-foreground/55 hover:text-foreground"
                    }`}>
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
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
                <span className="text-[10px] tracking-[0.18em] uppercase border border-foreground/70 text-foreground/80 hover:bg-foreground hover:text-white hover:border-foreground px-5 py-3 transition-all duration-300 inline-block">
                  Book Consultation
                </span>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden z-50 p-2 -mr-2 text-foreground"
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
            className="fixed inset-0 z-40 bg-[#e2daf4] pt-28 px-8 pb-12 flex flex-col overflow-y-auto lg:hidden"
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
