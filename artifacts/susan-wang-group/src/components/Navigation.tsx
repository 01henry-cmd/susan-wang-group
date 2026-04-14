import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Buyers", path: "/buyers" },
    { name: "Sellers", path: "/sellers" },
    { name: "Investors", path: "/investors" },
    { name: "Areas", path: "/communities" },
    { name: "Listings", path: "/listings" },
    { name: "Videos", path: "/videos" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="z-50 cursor-pointer">
            <div className="flex flex-col">
              <span className={`font-serif text-2xl tracking-wide ${isScrolled || mobileMenuOpen ? 'text-foreground' : (location === '/' ? 'text-foreground' : 'text-foreground')} transition-colors`}>Susan Wang</span>
              <div className="h-[1px] w-full bg-foreground/20 my-0.5"></div>
              <span className={`text-[0.65rem] tracking-[0.2em] uppercase ${isScrolled || mobileMenuOpen ? 'text-foreground/70' : 'text-foreground/70'} transition-colors`}>Group</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            <ul className="flex items-center space-x-8">
              {navLinks.slice(1, -1).map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="cursor-pointer">
                    <span className={`text-[13px] tracking-widest uppercase transition-colors hover:text-primary ${
                      location === link.path 
                        ? "text-foreground font-medium" 
                        : (isScrolled ? "text-foreground/70" : (location === '/' ? 'text-foreground/80' : 'text-foreground/80'))
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="cursor-pointer">
              <span className={`text-[11px] tracking-[0.15em] uppercase border px-5 py-3 transition-colors ${
                isScrolled 
                  ? 'border-foreground text-foreground hover:bg-foreground hover:text-background' 
                  : (location === '/' ? 'border-foreground text-foreground hover:bg-foreground hover:text-background' : 'border-foreground text-foreground hover:bg-foreground hover:text-background')
              }`}>
                Book Consultation
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden z-50 p-2 -mr-2 transition-colors ${
              isScrolled || mobileMenuOpen ? 'text-foreground' : (location === '/' ? 'text-foreground' : 'text-foreground')
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#f4f1eb] pt-32 px-8 pb-12 flex flex-col overflow-y-auto lg:hidden"
          >
            <nav className="flex flex-col space-y-6 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link href={link.path} className="cursor-pointer inline-block">
                    <span 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-4xl font-serif block font-light tracking-tight ${
                        location === link.path ? "text-foreground" : "text-foreground/70"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16"
            >
              <Link href="/contact">
                <span 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center text-xs tracking-[0.2em] uppercase border border-foreground text-foreground py-4 hover:bg-foreground hover:text-white transition-colors cursor-pointer"
                >
                  Book Consultation
                </span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
