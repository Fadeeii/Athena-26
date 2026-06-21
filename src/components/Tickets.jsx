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

export default function Tickets() {
  const targetTime = getInitialTargetDate();
  
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
      price: "₹299",
      period: "per attendee",
      discount: "₹100 saved",
      icon: <Flame className="w-5 h-5 text-amber-500" />,
      features: sharedFeatures,
      borderStyle: "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 hover:shadow-sky-500/20 shadow-[0_0_20px_rgba(56,189,248,0.15)]",
      iconBg: "bg-sky-50 border-sky-100",
      link: "https://dummyregistrationlink.wie.ieee/early-ieee"
    },
    {
      name: "Non-IEEE Early Bird Pass",
      tag: "Regular Early Entry",
      price: "₹399",
      period: "per attendee",
      discount: "₹100 saved",
      icon: <Sparkles className="w-5 h-5 text-sky-500" />,
      features: sharedFeatures,
      borderStyle: "bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-500 hover:shadow-purple-500/20 shadow-[0_0_20px_rgba(124,58,237,0.15)]",
      iconBg: "bg-indigo-50 border-indigo-100",
      link: "https://dummyregistrationlink.wie.ieee/early-non-ieee"
    }
  ];

  // Standard Passes
  const standardPasses = [
    {
      name: "IEEE Pass",
      tag: "IEEE Member Rate",
      price: "₹399",
      period: "per attendee",
      icon: <Users className="w-5 h-5 text-purple-600" />,
      features: sharedFeatures,
      borderStyle: "bg-gradient-to-br from-purple-400 to-pink-500 hover:shadow-pink-500/20",
      iconBg: "bg-purple-50 border-purple-100",
      link: "https://dummyregistrationlink.wie.ieee/std-ieee"
    },
    {
      name: "Non-IEEE Pass",
      tag: "Standard Entry",
      price: "₹499",
      period: "per attendee",
      icon: <Sparkles className="w-5 h-5 text-pink-500" />,
      features: sharedFeatures,
      borderStyle: "bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 hover:shadow-purple-500/35",
      iconBg: "bg-pink-50 border-pink-100",
      link: "https://dummyregistrationlink.wie.ieee/std-non-ieee",
      isPopular: true
    }
  ];

  return (
    <section id="tickets" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background radial glow */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-athena-purple/10 blur-[120px] pointer-events-none" />

      {/* Dev Simulator Control */}
      <div className="fixed bottom-6 right-6 z-50 glass p-3.5 rounded-2xl border border-slate-200/80 shadow-lg flex items-center space-x-3 bg-white/95 transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col">
          <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-400">Dev Sim Controls</span>
          <span className="text-xs font-semibold text-slate-700">
            {isExpired ? "🔴 Early Bird Closed" : "🟢 Early Bird Open"}
          </span>
        </div>
        <button
          onClick={() => setIsSimulatedExpired(!isSimulatedExpired)}
          className={`px-3 py-1.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 text-white ${
            isSimulatedExpired
              ? "bg-slate-600 hover:bg-slate-700"
              : "bg-gradient-to-r from-athena-blue to-athena-purple hover:scale-[1.03]"
          }`}
        >
          {isSimulatedExpired ? "Reset Timer" : "Expire Timer"}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display font-bold text-xs sm:text-sm text-athena-blue tracking-widest uppercase mb-3 block">
            Secure Your Seat
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight mb-4">
            Choose Your Camp Pass
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-athena-blue to-athena-purple mx-auto rounded-full mb-6" />
          <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
            Register now to embark on an incredible journey of technology, empowerment, and fun. Choose the pass that fits you best.
          </p>
        </div>

        {/* Global Countdown Timer Bar */}
        <div className="glass max-w-xl mx-auto rounded-3xl p-6 mb-16 border border-sky-200/50 shadow-sm relative overflow-hidden bg-white/70">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400/5 to-purple-500/5 pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center space-x-3 text-left">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isExpired ? 'bg-rose-100 text-rose-500' : 'bg-sky-100 text-sky-600 animate-pulse'}`}>
                {isExpired ? <AlertCircle className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
              </div>
              <div>
                <h4 className="font-display font-black text-sm text-slate-800 uppercase tracking-wider">
                  {isExpired ? "Early Bird Ended" : "Early Bird Closing Soon"}
                </h4>
                <p className="font-sans text-xs text-slate-500">
                  {isExpired ? "Standard registrations are now open!" : "Grab your discount before time runs out!"}
                </p>
              </div>
            </div>
            
            {/* Countdown Grid */}
            <div className="flex items-center space-x-2">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center font-display font-black text-lg text-slate-850 transition-all duration-300">
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
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-850 mb-2">
              Early Bird Registration
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-500 font-semibold">
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
                className={`relative rounded-3xl overflow-hidden p-[2.5px] flex flex-col h-full group transition-all duration-500 ${
                  isExpired ? "opacity-60 grayscale-[20%] border border-slate-200" : pass.borderStyle
                }`}
              >
                {/* Custom border glow for hover */}
                {!isExpired && (
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, #38bdf8, #a78bfa)"
                    }}
                  />
                )}

                {/* Main Card Body */}
                <div className="relative flex flex-col justify-between h-full bg-white/95 backdrop-blur-md p-8 rounded-[21px] shadow-sm">
                  
                  {/* Limited Time Badge */}
                  {!isExpired && (
                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-[10px] font-sans font-extrabold uppercase tracking-widest text-white shadow-md animate-pulse">
                      Limited Time
                    </div>
                  )}

                  {isExpired && (
                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-sans font-extrabold uppercase tracking-widest text-slate-400 border border-slate-250">
                      Closed
                    </div>
                  )}

                  {/* Header Info */}
                  <div>
                    <div className="flex items-center space-x-2.5 mb-4">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${pass.iconBg}`}>
                        {pass.icon}
                      </div>
                      <span className="font-sans font-bold text-xs tracking-wider text-slate-500 uppercase">
                        {pass.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl text-slate-900 mb-2">
                      {pass.name}
                    </h3>

                    {/* Compact Countdown Display inside card */}
                    <div className="mb-6">
                      {isExpired ? (
                        <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-100 text-[11px] font-sans font-bold text-rose-500">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Offer Expired</span>
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-1">
                          <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-athena-blue block">
                            Closes in:
                          </span>
                          <div className="flex items-center space-x-1.5 font-display font-bold text-xs text-slate-700 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg w-fit">
                            <Clock className="w-3.5 h-3.5 text-athena-blue animate-pulse" />
                            <span>
                              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Pricing Display */}
                    <div className="flex items-baseline space-x-1 mb-6">
                      <span className="font-display font-black text-4xl sm:text-5xl text-slate-900">
                        {pass.price}
                      </span>
                      <span className="font-sans text-xs text-slate-400 uppercase tracking-wide">
                        / {pass.period}
                      </span>
                      <span className="ml-2 text-xs font-sans font-bold text-green-500 bg-green-50 border border-green-100 px-2 py-0.5 rounded-md">
                        {pass.discount}
                      </span>
                    </div>

                    <div className="w-full h-[1px] bg-slate-100 mb-6" />

                    {/* Features List */}
                    <ul className="flex flex-col space-y-3.5 mb-8">
                      {pass.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-3 text-left">
                          <Check className="w-4 h-4 text-athena-blue mt-0.5 flex-shrink-0" />
                          <span className="font-sans text-sm text-slate-600 leading-relaxed font-semibold">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button Container */}
                  <div className="mt-auto">
                    <a
                      href={isExpired ? "#" : pass.link}
                      onClick={(e) => {
                        if (isExpired) e.preventDefault();
                      }}
                      className={`w-full py-4 px-6 rounded-xl font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 ${
                        isExpired
                          ? "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"
                          : "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-650 text-white hover:opacity-95 shadow-md shadow-blue-500/15 hover:scale-[1.02]"
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
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-slate-200" />
          <div className="w-2 h-2 rounded-full bg-slate-300" />
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-slate-200" />
        </div>

        {/* ========================================================================= */}
        {/* STANDARD REGISTRATION SECTION */}
        {/* ========================================================================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-850 mb-2">
              Standard Registration
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-500 font-semibold">
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
                className={`relative rounded-3xl overflow-hidden p-[2.5px] flex flex-col h-full group transition-all duration-550 ${
                  isExpired 
                    ? pass.borderStyle 
                    : "bg-slate-200/50 border border-slate-200/60 shadow-none pointer-events-none"
                }`}
              >
                {/* Custom border glow for hover */}
                {isExpired && (
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${
                        pass.isPopular
                          ? "#f472b6, #a78bfa, #38bdf8"
                          : "#38bdf8, #a78bfa"
                      })`
                    }}
                  />
                )}

                {/* Main Card Body */}
                <div className={`relative flex flex-col justify-between h-full bg-white p-8 rounded-[21px] shadow-sm transition-all duration-550 ${
                  !isExpired ? "blur-[1px] opacity-75" : ""
                }`}>
                  
                  {/* Popular Badge */}
                  {pass.isPopular && isExpired && (
                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-gradient-to-r from-athena-pink to-athena-purple text-[10px] font-sans font-extrabold uppercase tracking-widest text-white shadow-md">
                      Most Popular
                    </div>
                  )}

                  {/* Header Info */}
                  <div>
                    <div className="flex items-center space-x-2.5 mb-4">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${pass.iconBg}`}>
                        {pass.icon}
                      </div>
                      <span className="font-sans font-bold text-xs tracking-wider text-slate-500 uppercase">
                        {pass.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl text-slate-900 mb-6">
                      {pass.name}
                    </h3>

                    {/* Pricing Display */}
                    <div className="flex items-baseline space-x-1 mb-8">
                      <span className="font-display font-black text-4xl sm:text-5xl text-slate-900">
                        {pass.price}
                      </span>
                      <span className="font-sans text-xs text-slate-400 uppercase tracking-wide">
                        / {pass.period}
                      </span>
                    </div>

                    <div className="w-full h-[1px] bg-slate-100 mb-8" />

                    {/* Features List */}
                    <ul className="flex flex-col space-y-4 mb-8">
                      {pass.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-3 text-left">
                          <Check className="w-4 h-4 text-athena-blue mt-0.5 flex-shrink-0" />
                          <span className="font-sans text-sm text-slate-600 leading-relaxed font-semibold">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button Container */}
                  <div className="mt-auto">
                    <a
                      href={!isExpired ? "#" : pass.link}
                      onClick={(e) => {
                        if (!isExpired) e.preventDefault();
                      }}
                      className={`w-full py-4 px-6 rounded-xl font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 ${
                        !isExpired
                          ? "bg-slate-50 text-slate-450 border border-slate-200 cursor-not-allowed"
                          : pass.isPopular
                            ? "bg-gradient-to-r from-athena-blue via-athena-purple to-athena-pink text-white hover:opacity-95 shadow-md shadow-athena-purple/10 hover:scale-[1.02]"
                            : "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:scale-[1.02]"
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
                      className="absolute inset-0 bg-slate-900/10 backdrop-blur-[3px] flex flex-col items-center justify-center z-20 rounded-3xl p-6 text-center select-none"
                    >
                      <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: [0.9, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center mb-3 text-athena-blue"
                      >
                        <Lock className="w-5 h-5" />
                      </motion.div>
                      <span className="font-display font-black text-sm text-slate-800 block mb-1">Standard Pass Locked</span>
                      <span className="font-sans text-[11px] text-slate-600 font-bold max-w-[200px] leading-relaxed">
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
