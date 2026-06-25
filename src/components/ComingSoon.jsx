import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Sparkles, CheckCircle2, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ComingSoon({ addToast }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateUserId = import.meta.env.VITE_EMAILJS_TEMPLATE_USER_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      user_name: "Interested Attendee",
      user_email: email,
      chosen_pass: "Updates & Reveals Subscription",
      pass_price: "Free Subscription",
      event_name: "ATHENA 2026",
      event_dates: "July 25 & 26, 2026",
      event_venue: "Government Engineering College Kozhikode",
    };

    if (!serviceId || !templateUserId || !publicKey) {
      console.warn("EmailJS credentials missing. Simulating notification subscription.");
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        addToast("Subscribed successfully! You're on the updates notification list.", "success");
        setEmail("");
      }, 1500);
      return;
    }

    try {
      await emailjs.send(serviceId, templateUserId, templateParams, publicKey);
      setSubmitted(true);
      addToast("Subscribed successfully! You're on the updates notification list.", "success");
      setEmail("");
    } catch (err) {
      console.error("Subscription dispatch failed:", err);
      addToast("Failed to subscribe email. Please check network connection.", "error");
    } finally {
      setLoading(false);
    }
  };

  const upcomingUpdates = [
    { title: "Detailed Speaker Reveal", date: "Coming Early July" },
    { title: "Detailed Agenda & Timeline", date: "Coming Mid July" },
    { title: "Technical Tools & Prerequisites", date: "Coming Mid July" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-athena-crimson/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass p-8 sm:p-16 rounded-3xl border border-red-950/40 bg-red-950/15 relative overflow-hidden shadow-lg"
        >
          {/* Top subtle visual accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold" />

          {/* Heading */}
          <div className="flex items-center justify-center space-x-2.5 mb-6">
            <Sparkles className="w-5 h-5 text-athena-pink animate-pulse" />
            <span className="font-sans text-xs sm:text-sm font-bold tracking-widest text-athena-pink uppercase">
              Updates & Reveals
            </span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-100 tracking-wide mb-4">
            More Announcements Coming Soon!
          </h2>

          <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10 font-medium">
            We are working hard to curate the finest experience. Stay tuned for speaker bios, detailed timelines, and special announcements.
          </p>

          {/* Upcoming Items List */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left">
            {upcomingUpdates.map((item, idx) => (
              <div
                key={idx}
                className="bg-red-950/20 border border-red-950/50 rounded-2xl p-6 hover:border-athena-pink/30 hover:shadow-md transition-all duration-300 shadow-md"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-athena-pink mb-4 animate-pulse" />
                <h4 className="font-display font-bold text-sm text-slate-250 mb-1.5">
                  {item.title}
                </h4>
                <span className="font-sans text-xs text-slate-400 font-semibold tracking-wider">
                  {item.date}
                </span>
              </div>
            ))}
          </div>

          {/* Subscription Box */}
          <div className="max-w-md mx-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center space-x-2.5 px-6 py-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm font-sans"
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>You're on the list! We will notify you of updates.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-5 py-4 rounded-xl bg-red-950/30 border border-red-950/60 text-slate-100 focus:border-athena-pink/50 focus:outline-none font-sans text-sm placeholder:text-slate-500 transition-colors duration-200"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="sm:w-auto px-6 py-4 rounded-xl bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold hover:opacity-95 text-white font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-athena-crimson/15 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Bell className="w-4 h-4" />
                      <span>Notify Me</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
