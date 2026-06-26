import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Flame, Users, Sparkles, ArrowRight, Lock, Clock, AlertCircle } from "lucide-react";

// Get initial target date (June 25, 2026 23:59:59). If it's in the past relative to when the
// site is opened, we default to 3 days in the future to keep the countdown active for demo purposes.
const getInitialTargetDate = () => {
  const target = new Date("2026-06-25T23:59:59+05:30").getTime();
  const now = new Date().getTime();
  if (target > now) {
    return target;
  }
  return now + 3 * 24 * 60 * 60 * 1000;
};

export default function Tickets({ addToast }) {
  const [targetTime] = useState(() => getInitialTargetDate());

  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isEarlyBirdClosed, setIsEarlyBirdClosed] = useState(false);
  const [isSimulatedExpired, setIsSimulatedExpired] = useState(false);

  // Computed state for expiration
  const isExpired = isEarlyBirdClosed || isSimulatedExpired;

  // Countdown timer logic
  useEffect(() => {
    if (isSimulatedExpired) {
      setIsEarlyBirdClosed(true);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const calculateTimeLeft = () => {
      const difference = targetTime - new Date().getTime();

      if (difference <= 0) {
        setIsEarlyBirdClosed(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      setIsEarlyBirdClosed(false);
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Set initial
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime, isSimulatedExpired]);

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
      link: "https://dummyregistrationlink.wie.ieee/early-ieee"
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
      link: "https://dummyregistrationlink.wie.ieee/early-non-ieee"
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
      borderStyle: "bg-gradient-to-br from-athena-crimson via-athena-maroon to-athena-pink hover:shadow-athena-pink/25 shadow-lg",
      iconBg: "bg-red-950/40 border-red-900/30",
      link: "https://dummyregistrationlink.wie.ieee/std-ieee"
    },
    {
      name: "Non-IEEE Pass",
      tag: "Standard Entry",
      price: "₹1149",
      period: "per attendee",
      icon: <Sparkles className="w-5 h-5 text-athena-gold" />,
      features: sharedFeatures,
      borderStyle: "bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold hover:shadow-athena-gold/25 shadow-lg",
      iconBg: "bg-red-950/40 border-red-900/30",
      link: "https://dummyregistrationlink.wie.ieee/std-non-ieee",
      isPopular: true
    }
  ];

  return (
    <section id="tickets" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background radial glow */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-athena-crimson/5 blur-[120px] pointer-events-none" />

      {/* Dev Simulator Control */}
      <div className="fixed bottom-6 right-6 z-50 glass p-3.5 rounded-2xl border border-red-950/40 shadow-lg flex items-center space-x-3 bg-[#0e0204]/95 transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col">
          <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-400">Dev Sim Controls</span>
          <span className="text-xs font-semibold text-slate-200">
            {isExpired ? "🔴 Early Bird Closed" : "🟢 Early Bird Open"}
          </span>
        </div>
        <button
          onClick={() => setIsSimulatedExpired(!isSimulatedExpired)}
          className={`px-3 py-1.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 text-white ${isSimulatedExpired
            ? "bg-red-950/50 border border-red-900/35 hover:bg-red-950/80 text-slate-300"
            : "bg-gradient-to-r from-athena-crimson to-athena-maroon hover:scale-[1.03] shadow-md shadow-athena-crimson/15"
            }`}
        >
          {isSimulatedExpired ? "Reset Timer" : "Expire Timer"}
        </button>
      </div>

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

        {/* Global Countdown Timer Bar */}
        <div className="glass max-w-xl mx-auto rounded-3xl p-6 mb-16 border border-red-950/45 shadow-lg relative overflow-hidden bg-red-950/15">
          <div className="absolute inset-0 bg-gradient-to-r from-athena-crimson/5 to-athena-gold/5 pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center space-x-3 text-left">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${isExpired
                ? 'bg-rose-950/30 border-rose-900/40 text-rose-500'
                : 'bg-red-950/40 border-red-900/30 text-athena-pink animate-pulse'
                }`}>
                {isExpired ? <AlertCircle className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
              </div>
              <div>
                <h4 className="font-display font-black text-sm text-slate-100 uppercase tracking-wider">
                  {isExpired ? "Early Bird Ended" : "Early Bird Closing Soon"}
                </h4>
                <p className="font-sans text-xs text-slate-400 font-medium">
                  {isExpired ? "Standard registrations are now open!" : "Grab your discount before time runs out!"}
                </p>
              </div>
            </div>

            {/* Countdown Grid */}
            <div className="flex items-center space-x-2">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-red-950/30 shadow-md border border-red-900/30 flex items-center justify-center font-display font-black text-lg text-slate-100 transition-all duration-300">
                    {String(value).padStart(2, "0")}
                  </div>
                  <span className="text-[9px] font-sans font-bold text-slate-400 uppercase tracking-widest mt-1">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
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
              {!isExpired
                ? "Get special discounted pricing. Offers available for a limited time."
                : "Early bird discount passes are now closed."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
            {earlyBirdPasses.map((pass, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={!isExpired ? { y: -8 } : {}}
                className={`relative rounded-3xl overflow-hidden p-[2.5px] flex flex-col h-full group transition-all duration-500 ${isExpired ? "opacity-40 grayscale-[40%] border border-red-950/40" : pass.borderStyle
                  }`}
              >
                {/* Custom border glow for hover */}
                {!isExpired && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, #991b1b, #d4af37)"
                    }}
                  />
                )}

                {/* Main Card Body */}
                <div className="relative flex flex-col justify-between h-full bg-[#0e0204]/90 backdrop-blur-md p-8 rounded-[21px] shadow-lg border border-red-950/30">

                  {/* Limited Time Badge */}
                  {!isExpired && (
                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold text-[10px] font-sans font-extrabold uppercase tracking-widest text-white shadow-md animate-pulse">
                      Limited Time
                    </div>
                  )}

                  {isExpired && (
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

                    <h3 className="font-display font-black text-2xl text-slate-100 mb-2">
                      {pass.name}
                    </h3>

                    {/* Compact Countdown Display inside card */}
                    <div className="mb-6">
                      {isExpired ? (
                        <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-rose-950/20 border border-rose-900/40 text-[11px] font-sans font-bold text-rose-400">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Offer Expired</span>
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-1">
                          <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-athena-pink block">
                            Closes in:
                          </span>
                          <div className="flex items-center space-x-1.5 font-display font-bold text-xs text-slate-200 bg-red-950/30 border border-red-950/40 px-2.5 py-1 rounded-lg w-fit">
                            <Clock className="w-3.5 h-3.5 text-athena-pink animate-pulse" />
                            <span>
                              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

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
                      href={isExpired ? undefined : "https://snaptiqz.com/event/athena"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 px-6 rounded-xl font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 ${isExpired
                        ? "bg-red-950/15 text-slate-500 border border-red-950/40 cursor-not-allowed pointer-events-none"
                        : "bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold text-white hover:opacity-95 shadow-md shadow-athena-crimson/25 hover:scale-[1.02] cursor-pointer"
                        }`}
                    >
                      <span>{isExpired ? "Registration Closed" : "Register Now"}</span>
                      {!isExpired && <ArrowRight className="w-4 h-4" />}
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
              {isExpired
                ? "Standard registration tickets are now available."
                : "Standard registrations will open after Early Bird closes."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto relative">
            {standardPasses.map((pass, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={isExpired ? { y: -8 } : {}}
                className={`relative rounded-3xl overflow-hidden p-[2.5px] flex flex-col h-full group transition-all duration-550 ${isExpired
                  ? pass.borderStyle
                  : "bg-red-950/15 border border-red-950/40 shadow-none pointer-events-none"
                  }`}
              >
                {/* Custom border glow for hover */}
                {isExpired && (
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
                <div className={`relative flex flex-col justify-between h-full bg-[#0e0204]/90 backdrop-blur-md p-8 rounded-[21px] shadow-lg border border-red-950/30 transition-all duration-550 ${!isExpired ? "blur-[1px] opacity-70" : ""
                  }`}>

                  {/* Popular Badge */}
                  {pass.isPopular && isExpired && (
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
                      href={!isExpired ? undefined : "https://snaptiqz.com/event/athena"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 px-6 rounded-xl font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 ${!isExpired
                        ? "bg-red-950/15 text-slate-500 border border-red-950/40 cursor-not-allowed pointer-events-none"
                        : pass.isPopular
                          ? "bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold text-white shadow-md shadow-athena-crimson/15 hover:scale-[1.02] cursor-pointer"
                          : "bg-red-950/40 border border-red-900/30 text-slate-100 hover:bg-red-950/50 hover:scale-[1.02] cursor-pointer"
                        }`}
                    >
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>

                {/* Lock Overlay Layer */}
                <AnimatePresence>
                  {!isExpired && (
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
                        Standard registrations will open after Early Bird closes.
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
