import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import gecKoz from "../assets/gec_koz.jpg";

export default function Venue() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0a0102]">
      {/* Background Grayscale Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale opacity-12 scale-105"
        style={{ backgroundImage: `url(${gecKoz})` }}
      />

      {/* Modern gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0102] via-[#0a0102]/65 to-[#0a0102]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0102] via-transparent to-[#0a0102]" />

      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-athena-crimson/5 blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-athena-wine/5 blur-[100px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Tag */}
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass border border-red-950/40 mb-6 bg-red-950/20">
            <MapPin className="w-4 h-4 text-athena-pink" />
            <span className="font-sans text-xs font-bold tracking-wider text-slate-350 uppercase">
              Our Host Venue
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-slate-100 tracking-wide mb-4">
            Government Engineering College
            <br />
            <span className="text-gradient-gold">Kozhikode</span>
          </h2>

          {/* Subtitle Quote */}
          <p className="font-editorial font-medium text-lg sm:text-2xl text-athena-pink tracking-wider italic mb-8">
            "A place where ambition meets opportunity."
          </p>

          {/* Details Box */}
          <div className="max-w-2xl font-sans text-slate-200 text-sm sm:text-base leading-relaxed mb-10 font-medium">
            Government Engineering College Kozhikode is a prestigious institution under the Department of Technical Education, Government of Kerala. Nestled in Westhill, Calicut, it serves as the home base for technological excellence, innovative ideas, and visionary students. ATHENA 2026 will transform this campus into a major hub of empowerment and creativity.
          </div>

          {/* Location Action */}
          <a
            href="https://maps.app.goo.gl/wJkNzPGL7tX8y2uCA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full glass hover:bg-red-950/20 border border-red-900/30 hover:border-athena-pink/45 text-slate-200 hover:text-white font-sans font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Navigation className="w-4 h-4 text-athena-pink" />
            <span>Open in Google Maps</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
