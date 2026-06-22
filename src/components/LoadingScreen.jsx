import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-mesh"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Background soft glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-athena-crimson/5 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-athena-wine/5 blur-[100px] animate-pulse-glow" />

      <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
        {/* Animated Icon Ring */}
        <div className="relative mb-8">
          <motion.div
            className="w-24 h-24 rounded-full border-2 border-athena-pink/15 border-t-athena-crimson border-r-athena-gold"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-luxury font-bold text-2xl text-athena-pink">A</span>
          </div>
        </div>

        {/* Title reveal */}
        <motion.h1
          className="font-luxury font-bold text-4xl sm:text-5xl tracking-widest text-gradient-athena mb-2 uppercase"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ATHENA 2026
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-sans font-semibold text-xs sm:text-sm tracking-[0.2em] text-slate-400 mb-8 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          WIE AG IEEE Malabar Subsection
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-64 h-1.5 bg-red-950/45 border border-red-900/10 rounded-full overflow-hidden mb-3 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <motion.span
          className="font-display font-bold text-sm tracking-wider text-athena-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {progress}%
        </motion.span>
      </div>
    </motion.div>
  );
}
