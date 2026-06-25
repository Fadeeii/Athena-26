import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Calendar, MapPin } from "lucide-react";
import gecKoz from "../assets/gec_koz.jpg";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const particleArray = Array.from({ length: 30 });
  const particleColors = ["bg-athena-crimson/40", "bg-athena-pink/45", "bg-athena-gold/35"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0102]"
    >
      {/* Background Grayscale Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale opacity-[0.14] scale-105"
        style={{ backgroundImage: `url(${gecKoz})` }}
      />
      
      {/* Cinematic Maroon and Crimson overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0102] via-[#0a0102]/65 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0102]/95 via-athena-crimson/12 to-[#0a0102]/95" />

      {/* Floating Glowing Multicolored Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particleArray.map((_, i) => {
          const size = Math.random() * 8 + 3;
          return (
            <motion.div
              key={i}
              className={`absolute rounded-full ${particleColors[i % particleColors.length]} blur-[0.5px]`}
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: `0 0 8px ${
                  i % 3 === 0 ? "#991b1b" : i % 3 === 1 ? "#fda4af" : "#d4af37"
                }`,
              }}
              animate={{
                y: [0, -120 - Math.random() * 120],
                x: [0, (Math.random() - 0.5) * 60],
                opacity: [0, 0.85, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 7,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Subsection Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-5 py-2 rounded-full glass border border-red-900/30 mb-6 hover:border-athena-pink/40 hover:shadow-lg hover:shadow-athena-pink/5 transition-all duration-300 bg-red-950/20"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-athena-crimson animate-pulse shadow-sm shadow-athena-crimson" />
            <span className="font-sans text-xs sm:text-sm font-bold tracking-wider text-slate-300 uppercase">
              WIE AG IEEE Malabar Subsection
            </span>
          </motion.div>

          {/* Large Title */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl sm:text-8xl md:text-9xl tracking-tight leading-none mb-6 select-none"
          >
            <span className="font-luxury font-bold text-slate-100 drop-shadow-[0_2px_15px_rgba(220,38,38,0.2)]">ATHENA</span>{" "}
            <span className="text-gradient-athena drop-shadow-[0_2px_20px_rgba(253,164,175,0.25)] font-luxury font-bold">2026</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-editorial italic font-medium text-3xl sm:text-4xl md:text-5xl text-gradient-gold tracking-[0.1em] mb-10 max-w-3xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
          >
            "Rise. Lead. Inspire."
          </motion.p>

          {/* Event Quick Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-12"
          >
            <div className="flex items-center space-x-3 glass border border-red-950/40 px-5 py-2.5 rounded-2xl shadow-md bg-red-950/15">
              <Calendar className="w-5 h-5 text-athena-pink" />
              <span className="font-sans font-bold text-sm sm:text-base text-slate-200">July 25 & 26, 2026</span>
            </div>
            <div className="flex items-center space-x-3 glass border border-red-950/40 px-5 py-2.5 rounded-2xl shadow-md bg-red-950/15">
              <MapPin className="w-5 h-5 text-athena-gold" />
              <span className="font-sans font-bold text-sm sm:text-base text-slate-200">Govt. Engineering College Kozhikode</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#tickets"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold hover:opacity-95 text-white font-display font-bold text-base tracking-wider uppercase shadow-lg shadow-athena-crimson/25 hover:shadow-athena-gold/30 hover:scale-105 active:scale-95 transition-all duration-300 text-center border-b-2 border-white/20"
            >
              Register Now
            </a>
            <a
              href="#events"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass hover:bg-red-950/20 text-slate-255 font-display font-bold text-base tracking-wider uppercase border border-red-900/30 hover:border-athena-pink/45 hover:scale-105 active:scale-95 transition-all duration-300 text-center shadow-md shadow-black/20"
            >
              Explore Events
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <span className="font-sans text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Scroll Down</span>
        <ChevronDown className="w-5 h-5 text-athena-pink animate-bounce" />
      </motion.div>
    </section>
  );
}
