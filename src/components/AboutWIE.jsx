import React from "react";
import { motion } from "framer-motion";
import wieLogo from "../assets/wie_logo.svg";

export default function AboutWIE() {
  return (
    <section id="wie" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background soft pink/purple glow */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-athena-crimson/8 blur-[110px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-athena-wine/10 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Centered Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-xs sm:text-sm text-athena-pink tracking-widest uppercase mb-4 block"
          >
            Affinity Group
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-slate-100 tracking-wide mb-6"
          >
            WIE IEEE Malabar Subsection
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-16 h-1 bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold mx-auto rounded-full"
          />
        </div>

        {/* Centered Glassmorphic Content Card */}
        <div className="flex justify-center w-full">
          <motion.div
            className="relative p-[2.5px] rounded-3xl overflow-hidden bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold group shadow-2xl shadow-black/50 max-w-4xl w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Moving background gradient inside border */}
            <div className="absolute inset-0 bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-500" />

            {/* Main content body inside card */}
            <div className="relative bg-gradient-to-br from-red-950/25 via-[#0e0204] to-red-950/15 p-8 sm:p-12 rounded-[22px] text-center flex flex-col items-center">
              <div className="mb-8 bg-white rounded-full border border-white/20 shadow-lg shadow-black/35 w-24 h-24 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
                  src={wieLogo}
                  alt="WIE Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-sans text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-semibold max-w-3xl">
                IEEE Women in Engineering (WIE) is one of the largest global professional networks dedicated to promoting women engineers and scientists, inspiring girls worldwide to follow their academic interests in STEM fields.
              </p>
              <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl">
                The Malabar Subsection Affinity Group carries this torch by organising interactive summits, tech camps, and awareness projects. We are dedicated to creating an inclusive ecosystem where women can innovate, lead, and thrive in tech.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
