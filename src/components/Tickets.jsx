import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Flame, Users, Sparkles, ArrowRight, Lock, Clock } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// REGISTRATION CONTROL
//
// manualOverride: set to true to force-open standard registration regardless
//                 of time. Set to false to let time-based logic control it.
//
// Once standard registration opens at 7:30 PM, it stays open permanently.
// There is NO auto-close / expiry logic. To close later, set manualOverride
// to false and change OPEN_HOUR/OPEN_MINUTE to a future time, or simply
// set standardRegistrationForceClose = true.
// ─────────────────────────────────────────────────────────────────────────────
const manualOverride = false;          // true = force open now, bypasses time check
const standardRegistrationForceClose = false;  // true = force close, overrides everything

const OPEN_HOUR = 19;    // 7 PM (24h format)
const OPEN_MINUTE = 30;  // :30

function isStandardOpen() {
  if (standardRegistrationForceClose) return false;
  if (manualOverride) return true;
  const now = new Date();
  const todayOpen = new Date(now.getFullYear(), now.getMonth(), now.getDate(), OPEN_HOUR, OPEN_MINUTE, 0, 0);
  return now >= todayOpen;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN TICKETS COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function Tickets({ addToast }) {
  const [standardActive, setStandardActive] = useState(() => isStandardOpen());

  // Silent background check — polls every second until registration opens,
  // then stops polling permanently (no auto-close).
  useEffect(() => {
    if (standardActive) return; // already open, no need to poll

    const id = setInterval(() => {
      if (isStandardOpen()) {
        setStandardActive(true);
        clearInterval(id);
      }
    }, 1000);

    return () => clearInterval(id);
  }, [standardActive]);

  // Features list shared across passes
  const sharedFeatures = [
    "Full access to 4 Workshops",
    "Entry to all Talk & Panel sessions",
    "Interactive Self Defence training",
    "Camp kit & Certifications",
    "Refreshments & Saree Party access",
  ];

  // Early Bird Passes (permanently closed)
  const earlyBirdPasses = [
    {
      name: "IEEE Early Bird Pass",
      tag: "IEEE Member Special",
      price: "₹849",
      period: "per attendee",
      discount: "₹100 saved",
      icon: <Flame className="w-5 h-5 text-athena-gold/40" />,
      features: sharedFeatures,
    },
    {
      name: "Non-IEEE Early Bird Pass",
      tag: "Regular Early Entry",
      price: "₹999",
      period: "per attendee",
      discount: "₹100 saved",
      icon: <Sparkles className="w-5 h-5 text-athena-pink/40" />,
      features: sharedFeatures,
    }
  ];

  // Standard Passes
  const standardPasses = [
    {
      name: "IEEE Pass",
      tag: "IEEE Member Rate",
      price: "₹999",
      period: "per attendee",
      icon: <Users className="w-5 h-5 text-athena-pink" />,
      features: sharedFeatures,
      borderGradient: "from-athena-crimson via-athena-maroon to-athena-pink",
      hoverGlow: "#991b1b, #fda4af",
      link: "https://snaptiqz.com/event/athena"
    },
    {
      name: "Non-IEEE Pass",
      tag: "Standard Entry",
      price: "₹1149",
      period: "per attendee",
      icon: <Sparkles className="w-5 h-5 text-athena-gold" />,
      features: sharedFeatures,
      borderGradient: "from-athena-crimson via-athena-maroon to-athena-gold",
      hoverGlow: "#991b1b, #d4af37",
      link: "https://snaptiqz.com/event/athena",
      isPopular: true
    }
  ];

  return (
    <section id="tickets" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background radial glow */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-athena-crimson/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-xs sm:text-sm text-athena-pink tracking-widest uppercase mb-3 block"
          >
            Secure Your Seat
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-bold text-3xl sm:text-5xl text-slate-100 tracking-wide mb-4"
          >
            Choose Your Camp Pass
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold mx-auto rounded-full mb-6 origin-center"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Register now to embark on an incredible journey of technology, empowerment, and fun. Choose the pass that fits you best.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* EARLY BIRD REGISTRATION SECTION — Permanently Closed                      */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-400/70 mb-2">
              Early Bird Registration
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-500 font-semibold">
              Early bird discount passes are now closed.
            </p>
          </div>

          {/* "Registration Closed" badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-red-950/20 border border-red-900/30 shadow-lg">
              <Lock className="w-4 h-4 text-slate-500" />
              <span className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">
                Early Bird Registration Closed
              </span>
            </div>
          </motion.div>

          {/* Early Bird Cards — Locked / Inactive */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
            {earlyBirdPasses.map((pass, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative rounded-3xl overflow-hidden p-[2.5px] flex flex-col h-full opacity-40 grayscale-[40%] border border-red-950/40 transition-all duration-500"
              >
                {/* Main Card Body */}
                <div className="relative flex flex-col justify-between h-full bg-[#0e0204]/90 backdrop-blur-md p-8 rounded-[21px] shadow-lg border border-red-950/30">

                  {/* Closed Badge */}
                  <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-red-950/30 text-[10px] font-sans font-extrabold uppercase tracking-widest text-slate-500 border border-red-950/50">
                    Closed
                  </div>

                  {/* Header Info */}
                  <div>
                    <div className="flex items-center space-x-2.5 mb-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center border bg-red-950/40 border-red-900/30">
                        {pass.icon}
                      </div>
                      <span className="font-sans font-bold text-xs tracking-wider text-slate-500 uppercase">
                        {pass.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl text-slate-300 mb-6">
                      {pass.name}
                    </h3>

                    {/* Pricing Display — struck through */}
                    <div className="flex items-baseline space-x-1 mb-6">
                      <span className="font-display font-black text-4xl sm:text-5xl text-slate-400 line-through decoration-red-900/40">
                        {pass.price}
                      </span>
                      <span className="font-sans text-xs text-slate-500 uppercase tracking-wide">
                        / {pass.period}
                      </span>
                    </div>

                    <div className="w-full h-[1px] bg-red-950/30 mb-6" />

                    {/* Features List */}
                    <ul className="flex flex-col space-y-3.5 mb-8">
                      {pass.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-3 text-left">
                          <Check className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
                          <span className="font-sans text-sm text-slate-400 leading-relaxed font-semibold">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button — Disabled */}
                  <div className="mt-auto">
                    <div className="w-full py-4 px-6 rounded-xl font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 bg-red-950/15 text-slate-500 border border-red-950/40 cursor-not-allowed select-none">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Registration Closed</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-2xl mx-auto my-16 flex items-center justify-center space-x-4">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-red-950/40" />
          <div className="w-2 h-2 rounded-full bg-red-900/50" />
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-red-950/40" />
        </div>

        {/* ========================================================================= */}
        {/* STANDARD REGISTRATION SECTION                                             */}
        {/* ========================================================================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-black text-2xl sm:text-3xl text-slate-100 mb-2"
            >
              Standard Registration
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-xs sm:text-sm text-slate-400 font-semibold"
            >
              {standardActive
                ? "Standard registration tickets are now available."
                : "Standard Registration Opens Today at 7:30 PM"}
            </motion.p>
          </div>

          {/* Status Badge */}
          <div className="flex justify-center mb-10">
            <AnimatePresence mode="wait">
              {standardActive ? (
                <motion.div
                  key="open-badge"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-athena-crimson/15 to-athena-gold/10 border border-athena-crimson/30 shadow-lg shadow-athena-crimson/10"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                  </span>
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-slate-200">
                    Registration Open
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="pending-badge"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full bg-red-950/20 border border-red-900/25 shadow-lg"
                >
                  <Clock className="w-4 h-4 text-athena-gold/60" />
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">
                    Opens Today at 7:30 PM
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Standard Registration Cards */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto relative">
            {standardPasses.map((pass, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={standardActive ? { y: -8 } : {}}
                className={`relative rounded-3xl overflow-hidden p-[2.5px] flex flex-col h-full group transition-all duration-700 ${
                  standardActive
                    ? `bg-gradient-to-br ${pass.borderGradient} hover:shadow-xl shadow-lg`
                    : "bg-red-950/15 border border-red-950/40 shadow-none"
                }`}
              >
                {/* Hover glow effect (active only) */}
                {standardActive && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${pass.hoverGlow})`
                    }}
                  />
                )}

                {/* Ambient glow behind active cards */}
                {standardActive && (
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-athena-crimson/8 to-athena-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                )}

                {/* Main Card Body */}
                <div className={`relative flex flex-col justify-between h-full bg-[#0e0204]/90 backdrop-blur-md p-8 rounded-[21px] shadow-lg border border-red-950/30 transition-all duration-700 ${
                  !standardActive ? "opacity-80" : ""
                }`}>

                  {/* Popular Badge (active only) */}
                  <AnimatePresence>
                    {pass.isPopular && standardActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="absolute top-5 right-5 px-3 py-1 rounded-full bg-gradient-to-r from-athena-pink via-athena-crimson to-athena-gold text-[10px] font-sans font-extrabold uppercase tracking-widest text-white shadow-md"
                      >
                        Most Popular
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Header Info */}
                  <div>
                    <div className="flex items-center space-x-2.5 mb-4">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center border bg-red-950/40 border-red-900/30 transition-all duration-500 ${
                        !standardActive ? "opacity-50" : ""
                      }`}>
                        {pass.icon}
                      </div>
                      <span className={`font-sans font-bold text-xs tracking-wider uppercase transition-colors duration-500 ${
                        standardActive ? "text-slate-450" : "text-slate-500"
                      }`}>
                        {pass.tag}
                      </span>
                    </div>

                    <h3 className={`font-display font-black text-2xl mb-6 transition-colors duration-500 ${
                      standardActive ? "text-slate-100" : "text-slate-300"
                    }`}>
                      {pass.name}
                    </h3>

                    {/* Pricing Display — Hidden until active */}
                    <div className="flex items-baseline space-x-1 mb-8 min-h-[3.5rem]">
                      <AnimatePresence mode="wait">
                        {standardActive ? (
                          <motion.div
                            key="price-visible"
                            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                            className="flex items-baseline space-x-1"
                          >
                            <span className="font-display font-black text-4xl sm:text-5xl text-slate-100">
                              {pass.price}
                            </span>
                            <span className="font-sans text-xs text-slate-400 uppercase tracking-wide">
                              / {pass.period}
                            </span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="price-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.4 }}
                            className="flex items-center space-x-2"
                          >
                            <div className="flex items-baseline space-x-1.5">
                              <span className="font-display font-black text-4xl sm:text-5xl text-slate-600/50">₹ —</span>
                            </div>
                            <span className="font-sans text-[11px] text-slate-500/70 uppercase tracking-wider mt-2">
                              Revealed at 7:30 PM
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="w-full h-[1px] bg-red-950/30 mb-8" />

                    {/* Features List */}
                    <ul className="flex flex-col space-y-4 mb-8">
                      {pass.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-3 text-left">
                          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-500 ${
                            standardActive ? "text-athena-pink" : "text-slate-600"
                          }`} />
                          <span className={`font-sans text-sm leading-relaxed font-semibold transition-colors duration-500 ${
                            standardActive ? "text-slate-200" : "text-slate-400"
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button Container */}
                  <div className="mt-auto">
                    <AnimatePresence mode="wait">
                      {standardActive ? (
                        <motion.a
                          key="btn-active"
                          href={pass.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.15 }}
                          className={`w-full py-4 px-6 rounded-xl font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 ${
                            pass.isPopular
                              ? "bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold text-white shadow-md shadow-athena-crimson/15 hover:shadow-lg hover:shadow-athena-crimson/25 hover:scale-[1.02] cursor-pointer"
                              : "bg-red-950/40 border border-red-900/30 text-slate-100 hover:bg-red-950/50 hover:scale-[1.02] cursor-pointer"
                          }`}
                        >
                          <span>Register Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.a>
                      ) : (
                        <motion.div
                          key="btn-locked"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full py-4 px-6 rounded-xl font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 bg-red-950/15 text-slate-500 border border-red-950/40 cursor-not-allowed select-none"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Opens at 7:30 PM</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

                {/* Lock Overlay (before 7:30 PM) */}
                <AnimatePresence>
                  {!standardActive && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 bg-[#050000]/50 backdrop-blur-[2px] flex flex-col items-center justify-center z-20 rounded-3xl p-6 text-center select-none"
                    >
                      <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: [0.9, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="w-12 h-12 rounded-full bg-red-950 border border-red-900/40 flex items-center justify-center mb-3 text-athena-pink shadow-md"
                      >
                        <Lock className="w-5 h-5" />
                      </motion.div>
                      <span className="font-display font-black text-sm text-slate-100 block mb-1">
                        Standard Pass
                      </span>
                      <span className="font-sans text-[11px] text-slate-400 font-bold max-w-[200px] leading-relaxed">
                        Opens Today at 7:30 PM
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
