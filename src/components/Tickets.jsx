import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Flame, Users, Sparkles, ArrowRight, Lock, Clock, CalendarDays } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// REGISTRATION TIMING CONFIGURATION
// Early Bird closes: TODAY at 22:30 (10:30 PM) local timezone
// Standard Registration opens: July 1, local timezone
// ─────────────────────────────────────────────────────────────────────────────

function getEarlyBirdDeadline() {
  const now = new Date();
  const deadline = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 22, 30, 0, 0);
  return deadline;
}

function getStandardOpenDate() {
  const now = new Date();
  return new Date(now.getFullYear(), 6, 1, 0, 0, 0, 0); // July 1 (month 6 = July)
}

function computeTimeLeft(deadline) {
  const now = new Date();
  const diff = deadline.getTime() - now.getTime();
  if (diff <= 0) return null;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { hours, minutes, seconds, total: diff };
}

// ─────────────────────────────────────────────────────────────────────────────
// COUNTDOWN DIGIT COMPONENT — Premium flip-style digit with label
// ─────────────────────────────────────────────────────────────────────────────

function CountdownUnit({ value, label }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-[#0e0204]/80 border border-red-900/30 backdrop-blur-md flex items-center justify-center shadow-lg shadow-athena-crimson/10 overflow-hidden">
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-athena-crimson/5 to-transparent pointer-events-none" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 12, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -12, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="font-display font-black text-3xl sm:text-4xl text-slate-100 relative z-10"
          >
            {display}
          </motion.span>
        </AnimatePresence>
        {/* Center divider line */}
        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-red-950/20 pointer-events-none" />
      </div>
      <span className="font-sans font-bold text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest mt-2">
        {label}
      </span>
    </div>
  );
}

function CountdownSeparator() {
  return (
    <div className="flex flex-col items-center justify-center h-16 sm:h-20 px-1">
      <motion.div
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col space-y-2"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-athena-crimson/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-athena-crimson/60" />
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN TICKETS COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function Tickets({ addToast }) {
  const [earlyBirdDeadline] = useState(() => getEarlyBirdDeadline());
  const [standardOpenDate] = useState(() => getStandardOpenDate());
  const [timeLeft, setTimeLeft] = useState(() => computeTimeLeft(getEarlyBirdDeadline()));
  const [earlyBirdActive, setEarlyBirdActive] = useState(() => {
    const now = new Date();
    return now < getEarlyBirdDeadline();
  });
  const [standardActive, setStandardActive] = useState(() => {
    const now = new Date();
    return now >= getStandardOpenDate();
  });

  // Tick every second
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const ebActive = now < earlyBirdDeadline;
      const stdActive = now >= standardOpenDate;

      setEarlyBirdActive(ebActive);
      setStandardActive(stdActive);

      if (ebActive) {
        setTimeLeft(computeTimeLeft(earlyBirdDeadline));
      } else {
        setTimeLeft(null);
      }
    };

    tick(); // run immediately
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [earlyBirdDeadline, standardOpenDate]);

  // Features list shared across passes
  const sharedFeatures = [
    "Full access to 4 Workshops",
    "Entry to all Talk & Panel sessions",
    "Interactive Self Defence training",
    "Camp kit & Certifications",
    "Refreshments & Saree Party access",
  ];

  // Early Bird Passes
  const earlyBirdPasses = [
    {
      name: "IEEE Early Bird Pass",
      tag: "IEEE Member Special",
      price: "₹849",
      period: "per attendee",
      discount: "₹100 saved",
      icon: <Flame className="w-5 h-5 text-athena-gold animate-pulse" />,
      features: sharedFeatures,
      borderStyle: "bg-gradient-to-br from-athena-crimson via-athena-maroon to-athena-gold hover:shadow-athena-crimson/25 shadow-lg",
      iconBg: "bg-red-950/40 border-red-900/30",
      link: "https://snaptiqz.com/event/athena"
    },
    {
      name: "Non-IEEE Early Bird Pass",
      tag: "Regular Early Entry",
      price: "₹999",
      period: "per attendee",
      discount: "₹100 saved",
      icon: <Sparkles className="w-5 h-5 text-athena-pink" />,
      features: sharedFeatures,
      borderStyle: "bg-gradient-to-br from-athena-crimson via-athena-maroon to-athena-pink hover:shadow-athena-pink/25 shadow-lg",
      iconBg: "bg-red-950/40 border-red-900/30",
      link: "https://snaptiqz.com/event/athena"
    }
  ];

  // Standard Passes
  const standardPasses = [
    {
      name: "IEEE Pass",
      tag: "IEEE Member Rate",
      price: "₹₹₹",
      period: "per attendee",
      icon: <Users className="w-5 h-5 text-athena-pink" />,
      features: sharedFeatures,
      borderStyle: "bg-gradient-to-br from-athena-crimson via-athena-maroon to-athena-pink hover:shadow-athena-pink/25 shadow-lg",
      iconBg: "bg-red-950/40 border-red-900/30",
      link: "https://snaptiqz.com/event/athena"
    },
    {
      name: "Non-IEEE Pass",
      tag: "Standard Entry",
      price: "₹₹₹",
      period: "per attendee",
      icon: <Sparkles className="w-5 h-5 text-athena-gold" />,
      features: sharedFeatures,
      borderStyle: "bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold hover:shadow-athena-gold/25 shadow-lg",
      iconBg: "bg-red-950/40 border-red-900/30",
      link: "https://snaptiqz.com/event/athena",
      isPopular: true
    }
  ];

  // Format standard open date for display
  const standardOpenLabel = standardOpenDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <section id="tickets" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background radial glow */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-athena-crimson/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display font-bold text-xs sm:text-sm text-athena-pink tracking-widest uppercase mb-3 block">
            Secure Your Seat
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-100 tracking-wide mb-4">
            Choose Your Camp Pass
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold mx-auto rounded-full mb-6" />
          <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
            Register now to embark on an incredible journey of technology, empowerment, and fun. Choose the pass that fits you best.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* EARLY BIRD REGISTRATION SECTION */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-100 mb-2">
              Early Bird Registration
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-400 font-semibold">
              {earlyBirdActive
                ? "Get special discounted pricing. Limited seats available."
                : "Early bird discount passes are now closed."}
            </p>
          </div>

          {/* ─── Countdown Timer (only while Early Bird is active) ─── */}
          <AnimatePresence mode="wait">
            {earlyBirdActive && timeLeft && (
              <motion.div
                key="countdown"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center mb-12"
              >
                {/* Timer label */}
                <div className="flex items-center space-x-2 mb-5">
                  <Clock className="w-4 h-4 text-athena-gold/70" />
                  <span className="font-sans font-bold text-xs text-slate-400 uppercase tracking-widest">
                    Early Bird Ends In
                  </span>
                </div>

                {/* Timer digits */}
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CountdownUnit value={timeLeft.hours} label="Hours" />
                  <CountdownSeparator />
                  <CountdownUnit value={timeLeft.minutes} label="Minutes" />
                  <CountdownSeparator />
                  <CountdownUnit value={timeLeft.seconds} label="Seconds" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ─── "Registration Closed" banner (after Early Bird ends) ─── */}
          <AnimatePresence>
            {!earlyBirdActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
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
            )}
          </AnimatePresence>

          {/* Early Bird Live Badge (shown while active) */}
          {earlyBirdActive && (
            <div className="flex justify-center mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-athena-crimson/15 to-athena-gold/10 border border-athena-crimson/30 shadow-lg shadow-athena-crimson/10"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="font-display font-bold text-xs uppercase tracking-widest text-slate-200">
                  Now Live — Limited Seats
                </span>
              </motion.div>
            </div>
          )}

          {/* Early Bird Cards */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
            {earlyBirdPasses.map((pass, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={earlyBirdActive ? { y: -8 } : {}}
                className={`relative rounded-3xl overflow-hidden p-[2.5px] flex flex-col h-full group transition-all duration-500 ${!earlyBirdActive ? "opacity-40 grayscale-[40%] border border-red-950/40" : pass.borderStyle
                  }`}
              >
                {/* Custom border glow for hover */}
                {earlyBirdActive && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, #991b1b, #d4af37)"
                    }}
                  />
                )}

                {/* Main Card Body */}
                <div className="relative flex flex-col justify-between h-full bg-[#0e0204]/90 backdrop-blur-md p-8 rounded-[21px] shadow-lg border border-red-950/30">

                  {/* Early Bird Open Badge */}
                  {earlyBirdActive && (
                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold text-[10px] font-sans font-extrabold uppercase tracking-widest text-white shadow-md animate-pulse">
                      Early Bird Open
                    </div>
                  )}

                  {!earlyBirdActive && (
                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-red-950/30 text-[10px] font-sans font-extrabold uppercase tracking-widest text-slate-450 border border-red-950/50">
                      Closed
                    </div>
                  )}

                  {/* Header Info */}
                  <div>
                    <div className="flex items-center space-x-2.5 mb-4">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${pass.iconBg}`}>
                        {pass.icon}
                      </div>
                      <span className="font-sans font-bold text-xs tracking-wider text-slate-450 uppercase">
                        {pass.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl text-slate-100 mb-6">
                      {pass.name}
                    </h3>

                    {/* Pricing Display */}
                    <div className="flex items-baseline space-x-1 mb-6">
                      <span className="font-display font-black text-4xl sm:text-5xl text-slate-100">
                        {pass.price}
                      </span>
                      <span className="font-sans text-xs text-slate-400 uppercase tracking-wide">
                        / {pass.period}
                      </span>
                      <span className="ml-2 text-xs font-sans font-bold text-green-400 bg-green-950/20 border border-green-900/35 px-2 py-0.5 rounded-md">
                        {pass.discount}
                      </span>
                    </div>

                    <div className="w-full h-[1px] bg-red-950/30 mb-6" />

                    {/* Features List */}
                    <ul className="flex flex-col space-y-3.5 mb-8">
                      {pass.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-3 text-left">
                          <Check className="w-4 h-4 text-athena-pink mt-0.5 flex-shrink-0" />
                          <span className="font-sans text-sm text-slate-200 leading-relaxed font-semibold">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button Container */}
                  <div className="mt-auto">
                    <a
                      href={earlyBirdActive ? "https://snaptiqz.com/event/athena" : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 px-6 rounded-xl font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 ${!earlyBirdActive
                        ? "bg-red-950/15 text-slate-500 border border-red-950/40 cursor-not-allowed pointer-events-none"
                        : "bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold text-white hover:opacity-95 shadow-md shadow-athena-crimson/25 hover:scale-[1.02] cursor-pointer"
                        }`}
                    >
                      <span>{earlyBirdActive ? "Register Now" : "Registration Closed"}</span>
                      {earlyBirdActive && <ArrowRight className="w-4 h-4" />}
                    </a>
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
        {/* STANDARD REGISTRATION SECTION */}
        {/* ========================================================================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-100 mb-2">
              Standard Registration
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-400 font-semibold">
              {standardActive
                ? "Standard registration tickets are now available."
                : `Standard registrations open ${standardOpenLabel}.`}
            </p>
          </div>

          {/* Standard Registration status banner */}
          <AnimatePresence>
            {!standardActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex justify-center mb-10"
              >
                <div className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-red-950/15 border border-red-900/25 shadow-lg">
                  <CalendarDays className="w-4 h-4 text-athena-gold/60" />
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">
                    Standard Registration Opens {standardOpenLabel}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto relative">
            {standardPasses.map((pass, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={standardActive ? { y: -8 } : {}}
                className={`relative rounded-3xl overflow-hidden p-[2.5px] flex flex-col h-full group transition-all duration-550 ${standardActive
                  ? pass.borderStyle
                  : "bg-red-950/15 border border-red-950/40 shadow-none pointer-events-none"
                  }`}
              >
                {/* Custom border glow for hover */}
                {standardActive && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${pass.isPopular
                        ? "#fda4af, #991b1b, #d4af37"
                        : "#991b1b, #d4af37"
                        })`
                    }}
                  />
                )}

                {/* Main Card Body */}
                <div className={`relative flex flex-col justify-between h-full bg-[#0e0204]/90 backdrop-blur-md p-8 rounded-[21px] shadow-lg border border-red-950/30 transition-all duration-550 ${!standardActive ? "blur-[1px] opacity-70" : ""
                  }`}>

                  {/* Popular Badge */}
                  {pass.isPopular && standardActive && (
                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-gradient-to-r from-athena-pink via-athena-crimson to-athena-gold text-[10px] font-sans font-extrabold uppercase tracking-widest text-white shadow-md">
                      Most Popular
                    </div>
                  )}

                  {/* Header Info */}
                  <div>
                    <div className="flex items-center space-x-2.5 mb-4">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${pass.iconBg}`}>
                        {pass.icon}
                      </div>
                      <span className="font-sans font-bold text-xs tracking-wider text-slate-450 uppercase">
                        {pass.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl text-slate-100 mb-6">
                      {pass.name}
                    </h3>

                    {/* Pricing Display */}
                    <div className="flex items-baseline space-x-1 mb-8">
                      <span className="font-display font-black text-4xl sm:text-5xl text-slate-100">
                        {pass.price}
                      </span>
                      <span className="font-sans text-xs text-slate-400 uppercase tracking-wide">
                        / {pass.period}
                      </span>
                    </div>

                    <div className="w-full h-[1px] bg-red-950/30 mb-8" />

                    {/* Features List */}
                    <ul className="flex flex-col space-y-4 mb-8">
                      {pass.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-3 text-left">
                          <Check className="w-4 h-4 text-athena-pink mt-0.5 flex-shrink-0" />
                          <span className="font-sans text-sm text-slate-200 leading-relaxed font-semibold">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button Container */}
                  <div className="mt-auto">
                    <a
                      href={standardActive ? "https://snaptiqz.com/event/athena" : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 px-6 rounded-xl font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 ${!standardActive
                        ? "bg-red-950/15 text-slate-500 border border-red-950/40 cursor-not-allowed pointer-events-none"
                        : pass.isPopular
                          ? "bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold text-white shadow-md shadow-athena-crimson/15 hover:scale-[1.02] cursor-pointer"
                          : "bg-red-950/40 border border-red-900/30 text-slate-100 hover:bg-red-950/50 hover:scale-[1.02] cursor-pointer"
                        }`}
                    >
                      <span>{standardActive ? "Register Now" : "Coming Soon"}</span>
                      {standardActive && <ArrowRight className="w-4 h-4" />}
                    </a>
                  </div>

                </div>

                {/* Lock Overlay Layer */}
                <AnimatePresence>
                  {!standardActive && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-[#050000]/65 backdrop-blur-[3px] flex flex-col items-center justify-center z-20 rounded-3xl p-6 text-center select-none"
                    >
                      <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: [0.9, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="w-12 h-12 rounded-full bg-red-950 border border-red-900/40 flex items-center justify-center mb-3 text-athena-pink shadow-md"
                      >
                        <Lock className="w-5 h-5" />
                      </motion.div>
                      <span className="font-display font-black text-sm text-slate-100 block mb-1">Standard Pass Locked</span>
                      <span className="font-sans text-[11px] text-slate-350 font-bold max-w-[200px] leading-relaxed">
                        Standard Registration Opens {standardOpenLabel}
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
