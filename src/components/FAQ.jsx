import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// FAQ DATA
// ─────────────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Who can register for ATHENA 2026?",
    a: "ATHENA 2026 is open to female engineering students from all colleges.",
  },
  {
    q: "Is IEEE membership mandatory to participate?",
    a: "No. Both IEEE and non-IEEE participants can register.",
  },
  {
    q: "Will accommodation be provided?",
    a: "Yes, accommodation facilities will be provided for participants.",
  },
  {
    q: "Will food be provided during the event?",
    a: "Yes, food will be provided for all registered participants.",
  },
  {
    q: "Is refund available after registration?",
    a: "No, registration fees are non-refundable.",
  },

  {
    q: "Will participants receive certificates?",
    a: "Yes, participation certificates will be provided on successful completion of camp.",
  },
  {
    q: "Are there limited seats available?",
    a: "Yes, registrations are limited and will close once seats are filled.",
  },
  {
    q: "Is transportation provided?",
    a: "No, participants are requested to arrange their own transportation.",
  },
  {
    q: "Can participants attend only selected sessions?",
    a: "No, all sessions are included in the registration.",
  },

  {
    q: "How can I contact the organizers for queries?",
    a: "Participants can use the contact section on the website or reach out through official ATHENA social media handles.",
  },
  {
    q: "Can I transfer my ticket to someone else?",
    a: "Ticket transfers may not be permitted. Please contact the organizers for assistance in case of emergencies.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SINGLE FAQ ITEM
// ─────────────────────────────────────────────────────────────────────────────

function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <button
        onClick={onToggle}
        className={`w-full text-left rounded-2xl transition-all duration-400 cursor-pointer group ${
          isOpen
            ? "bg-[#0e0204]/90 border border-red-900/40 shadow-lg shadow-athena-crimson/5"
            : "bg-[#0e0204]/50 border border-red-950/25 hover:border-red-900/35 hover:bg-[#0e0204]/70"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span
            className={`font-sans font-semibold text-sm sm:text-[15px] leading-relaxed pr-6 transition-colors duration-300 ${
              isOpen ? "text-slate-100" : "text-slate-300 group-hover:text-slate-100"
            }`}
          >
            {faq.q}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? "bg-athena-crimson/15 border border-athena-crimson/30"
                : "bg-red-950/30 border border-red-950/40 group-hover:bg-red-950/50"
            }`}
          >
            <ChevronDown
              className={`w-4 h-4 transition-colors duration-300 ${
                isOpen ? "text-athena-pink" : "text-slate-500 group-hover:text-slate-300"
              }`}
            />
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-5">
                <div className="w-full h-[1px] bg-red-950/25 mb-4" />
                <p className="font-sans text-sm text-slate-400 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ SECTION
// ─────────────────────────────────────────────────────────────────────────────

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  // Split into two columns for larger screens
  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midpoint);
  const rightColumn = faqs.slice(midpoint);

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background ambient glows */}
      <div className="absolute top-[20%] left-[-10%] w-80 h-80 rounded-full bg-athena-crimson/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-80 h-80 rounded-full bg-athena-wine/8 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display font-bold text-xs sm:text-sm text-athena-pink tracking-widest uppercase mb-3 block">
            Got Questions?
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-100 tracking-wide mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold mx-auto rounded-full mb-6" />
          <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about ATHENA 2026. Can't find your answer? Reach out to us through our contact section.
          </p>
        </div>

        {/* FAQ Grid — two columns on desktop, single on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
          {/* Left column */}
          <div className="flex flex-col gap-3">
            {leftColumn.map((faq, idx) => (
              <FaqItem
                key={idx}
                faq={faq}
                index={idx}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3">
            {rightColumn.map((faq, idx) => {
              const realIdx = midpoint + idx;
              return (
                <FaqItem
                  key={realIdx}
                  faq={faq}
                  index={idx}
                  isOpen={openIndex === realIdx}
                  onToggle={() => handleToggle(realIdx)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
