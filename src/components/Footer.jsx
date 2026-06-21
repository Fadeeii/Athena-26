import React from "react";
import { Mail, Phone, MapPin, Globe, ArrowUp } from "lucide-react";

// Custom SVG Brand Icons since Lucide v1.x deprecated them
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative pt-20 pb-10 bg-slate-50 border-t border-slate-200/60 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-athena-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand/About */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center space-x-2.5 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-athena-blue to-athena-purple flex items-center justify-center font-display font-bold text-lg text-white shadow-lg">
                A
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-gradient-athena">
                ATHENA 2026
              </span>
            </div>
            <p className="font-sans text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
              The premier SHE Camp organized by IEEE WIE AG Malabar Subsection. Promoting technical excellence, professional mentorship, leadership growth, and creative confidence in women.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white hover:bg-slate-50 flex items-center justify-center border border-slate-200 hover:border-athena-pink/40 text-slate-700 shadow-sm transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-athena-pink" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white hover:bg-slate-50 flex items-center justify-center border border-slate-200 hover:border-athena-blue/40 text-slate-700 shadow-sm transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-athena-blue" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white hover:bg-slate-50 flex items-center justify-center border border-slate-200 hover:border-athena-purple/40 text-slate-700 shadow-sm transition-all duration-300"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4 text-athena-purple" />
              </a>
              <a
                href="https://kerala.ieee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white hover:bg-slate-50 flex items-center justify-center border border-slate-200 hover:border-yellow-500/40 text-slate-700 shadow-sm transition-all duration-300"
                aria-label="IEEE Website"
              >
                <Globe className="w-4 h-4 text-yellow-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-display font-bold text-sm text-slate-800 tracking-widest uppercase mb-6">
              Quick Navigation
            </h4>
            <ul className="flex flex-col space-y-3 font-sans text-sm text-slate-500">
              <li>
                <a href="#home" className="hover:text-slate-900 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#ieee-malabar" className="hover:text-slate-900 transition-colors duration-200">
                  About IEEE Malabar
                </a>
              </li>
              <li>
                <a href="#wie" className="hover:text-slate-900 transition-colors duration-200">
                  About WIE AG
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors duration-200">
                  About Program
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-slate-900 transition-colors duration-200">
                  Events & Activities
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 text-left">
            <h4 className="font-display font-bold text-sm text-slate-800 tracking-widest uppercase mb-6">
              Get in Touch
            </h4>
            <ul className="flex flex-col space-y-4 font-sans text-sm text-slate-500">
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-athena-blue mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 uppercase">Email</span>
                  <a href="mailto:wie.malabar@ieee.org" className="hover:text-slate-900 transition-colors duration-200 font-medium">
                    wie.malabar@ieee.org
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-athena-purple mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 uppercase">Phone</span>
                  <a href="tel:+910000000000" className="hover:text-slate-900 transition-colors duration-200 font-medium">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-athena-pink mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 uppercase">Venue</span>
                  <span className="leading-relaxed font-medium">
                    Govt. Engineering College Kozhikode
                    <br />
                    Westhill, Kozhikode, Kerala - 673005
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-slate-200/60 mb-8" />

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left font-sans text-xs text-slate-400">
            &copy; {new Date().getFullYear()} ATHENA 2026. All rights reserved. Organized by WIE AG IEEE Malabar Subsection.
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 flex items-center justify-center border border-slate-200 hover:border-athena-blue/40 text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-athena-blue" />
          </button>
        </div>

      </div>
    </footer>
  );
}
