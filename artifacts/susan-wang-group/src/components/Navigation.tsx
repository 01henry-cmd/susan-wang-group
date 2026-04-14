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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="z-50">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-wide text-foreground">Susan Wang</span>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-primary mt-0.5">Group</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {navLinks.slice(1, -1).map((link) => (
                <li key={link.name}>
                  <Link href={link.path}>
                    <span className={`text-sm tracking-wide transition-colors hover:text-primary ${
                      location === link.path ? "text-primary" : "text-foreground/80"
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <CTAButton href="/contact">Book Consultation</CTAButton>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 p-2 -mr-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 pb-6 flex flex-col overflow-y-auto lg:hidden"
          >
            <nav className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.path}>
                  <span 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-serif block ${
                      location === link.path ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="mt-12">
              <CTAButton href="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Book Consultation
              </CTAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
