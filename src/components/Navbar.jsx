import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import wieLogo from "../assets/wie_logo.svg";
import ieeeMalabarLogo from "../assets/ieee_malabar_logo.svg";
import ieeeLogo from "../assets/ieee_logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About IEEE Malabar Subsection", href: "#ieee-malabar" },
    { name: "About WIE", href: "#wie" },
    { name: "About Program", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Tickets", href: "#tickets" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? "bg-[#0a0102]/95 backdrop-blur-md border-b border-red-950/40 shadow-lg shadow-black/30"
          : "bg-transparent"
        }`}
    >
      {/* Top Branding Strip */}
      <div className="w-full bg-[#050001]/75 border-b border-red-950/20 py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Side: IEEE Branding */}
          <div className="flex items-center space-x-2.5">
            <img src={ieeeLogo} alt="IEEE Logo" className="h-5 w-auto object-contain brightness-0 invert opacity-95" />
            <span className="w-[1px] h-3.5 bg-red-950/50" />
            <a
              href="#ieee-malabar"
              className="text-[10px] sm:text-xs font-sans tracking-widest text-slate-300 hover:text-white font-bold uppercase transition-colors"
            >
              IEEE Malabar Subsection
            </a>
          </div>
          {/* Right Side: WIE Branding */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden p-0.5 shadow-sm">
              <img src={wieLogo} alt="WIE Logo" className="w-full h-full object-contain" />
            </div>
            <a
              href="#wie"
              className="text-[10px] sm:text-xs font-sans tracking-widest text-slate-300 hover:text-white font-bold uppercase transition-colors"
            >
              WIE AG
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
        {/* Brand/Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-athena-crimson via-athena-maroon to-athena-gold flex items-center justify-center font-luxury font-bold text-lg text-white shadow-lg shadow-athena-crimson/20 group-hover:scale-105 transition-transform duration-300">
            A
          </div>
          <span className="font-luxury font-bold text-xl tracking-widest text-gradient-athena">
            ATHENA
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans font-semibold text-sm text-slate-300 hover:text-white transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-athena-crimson via-athena-pink to-athena-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://snaptiqz.com/event/athena"
            target="_blank"
            rel="noopener noreferrer"
            className="glass hover:bg-red-950/20 text-slate-200 hover:text-white font-display font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full flex items-center space-x-1.5 transition-all duration-300 hover:scale-105 border border-red-900/40 hover:border-athena-pink/55 hover:shadow-lg hover:shadow-athena-pink/10"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-athena-pink" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-200 hover:text-athena-pink p-2 focus:outline-none transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden w-full bg-[#0a0102]/95 backdrop-blur-lg border-b border-red-950/40 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="font-sans font-semibold text-base text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4 border-t border-red-950/30 flex flex-col space-y-4"
              >
                <a
                  href="https://snaptiqz.com/event/athena"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full justify-center bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold text-white font-display font-bold text-sm tracking-wider uppercase py-3 rounded-xl flex items-center space-x-1.5 transition-all duration-300 shadow-lg shadow-athena-crimson/15"
                >
                  <span>Register Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {/* Mobile IEEE / WIE brand elements */}
                <div className="flex items-center justify-center pt-2">
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 shadow-sm">
                    <a
                      href="#ieee-malabar"
                      onClick={() => setIsOpen(false)}
                      aria-label="IEEE Malabar Subsection"
                      className="flex items-center hover:scale-105 transition-transform"
                    >
                      <img src={ieeeLogo} alt="IEEE Logo" className="h-4.5 w-auto object-contain" />
                    </a>
                    <span className="w-[1px] h-4 bg-white/20" />
                    <a
                      href="#wie"
                      onClick={() => setIsOpen(false)}
                      aria-label="WIE Affinity Group"
                      className="flex items-center"
                    >
                      <div className="w-5.5 h-5.5 rounded-full bg-white flex items-center justify-center overflow-hidden p-0.5 shadow-sm hover:scale-105 transition-transform">
                        <img src={wieLogo} alt="WIE Logo" className="w-full h-full object-contain" />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
