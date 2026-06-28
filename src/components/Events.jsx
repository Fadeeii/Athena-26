import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu, Palette, Shield, MessageSquare, Volume2, Film, Music,
  Sparkles, X, ArrowRight, Star, Mic2, PaintBucket, Swords,
  PartyPopper, Popcorn, Award, GlassWater,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// EVENT DATA
// ─────────────────────────────────────────────────────────────────────────────

const events = [
  {
    icon: Award,
    title: "Inauguration Ceremony",
    badge: "Opening Event",
    shortDesc: "The official opening of ATHENA 2026 — marking the beginning of two inspiring days of learning, leadership, creativity, and empowerment.",
    fullDesc: "The Inauguration Ceremony sets the stage for everything ATHENA represents. Join us for an inspiring opening that brings together leaders, mentors, and attendees to celebrate the launch of two extraordinary days. Expect keynote addresses, ceremonial moments, and the collective energy of hundreds of women in tech coming together with a shared vision.",
    speakers: null,
    featuring: null,
    accentFrom: "#d4af37",
    accentTo: "#991b1b",
    glowColor: "rgba(212, 175, 55, 0.12)",
    badgeGradient: "from-athena-gold/20 to-athena-crimson/10 border-athena-gold/30",
    badgeText: "text-athena-gold",
  },
  {
    icon: Mic2,
    title: "Tech Talk",
    subtitle: "Artificial Intelligence: Applications, Opportunities & Future Directions",
    badge: "Featured Tech Session",
    shortDesc: "Explore the evolving world of AI — its real-world applications, emerging opportunities, and the future it is shaping.",
    fullDesc: "Dive deep into the landscape of Artificial Intelligence with a comprehensive session covering practical applications across industries, career opportunities in the AI ecosystem, and a forward-looking perspective on where AI is headed. This session bridges theory and practice, giving attendees actionable insights into one of the most transformative technologies of our time.",
    speakers: [{ name: "Seethu P B", role: "Technical Architect, TCS" }],
    featuring: null,
    accentFrom: "#6366f1",
    accentTo: "#991b1b",
    glowColor: "rgba(99, 102, 241, 0.10)",
    badgeGradient: "from-indigo-500/15 to-athena-crimson/10 border-indigo-400/25",
    badgeText: "text-indigo-300",
  },
  {
    icon: Cpu,
    title: "Technical Workshop",
    badge: "Tech",
    shortDesc: "Hands-on labs exploring emerging frameworks, tools, and technologies led by industry experts.",
    fullDesc: "Our Technical Workshops are designed to go beyond lectures. Get your hands dirty with real code, real frameworks, and real projects. Led by experienced practitioners, each workshop delivers practical skills you can apply immediately — from modern web frameworks to emerging paradigms in computing.",
    speakers: null,
    featuring: null,
    accentFrom: "#f43f5e",
    accentTo: "#991b1b",
    glowColor: "rgba(244, 63, 94, 0.10)",
    badgeGradient: "from-athena-pink/15 to-athena-crimson/10 border-athena-pink/25",
    badgeText: "text-athena-pink",
  },
  {
    icon: Volume2,
    title: "Talk Session",
    badge: "Inspire",
    shortDesc: "Engage with prominent women leaders sharing stories of resilience, rise, and lasting impact.",
    fullDesc: "Our Talk Sessions feature accomplished women from diverse fields sharing their personal journeys — the obstacles they overcame, the lessons they learned, and the impact they continue to make. These intimate, powerful sessions are designed to inspire, connect, and ignite a fire of ambition in every attendee.",
    speakers: null,
    featuring: null,
    accentFrom: "#fda4af",
    accentTo: "#800020",
    glowColor: "rgba(253, 164, 175, 0.10)",
    badgeGradient: "from-athena-pink/15 to-athena-maroon/10 border-athena-pink/25",
    badgeText: "text-athena-pink",
  },
  {
    icon: MessageSquare,
    title: "Panel Discussion",
    badge: "Interactive",
    shortDesc: "Interactive forums tackling diversity, careers in STEM, and technology for social good.",
    fullDesc: "Our Panel Discussions bring together thought leaders and practitioners for dynamic, moderated conversations on the topics that matter most — from closing the gender gap in STEM to leveraging technology for social impact. Audience participation is encouraged, making this a truly interactive experience.",
    speakers: null,
    featuring: null,
    accentFrom: "#f43f5e",
    accentTo: "#991b1b",
    glowColor: "rgba(244, 63, 94, 0.08)",
    badgeGradient: "from-athena-crimson/15 to-athena-maroon/10 border-athena-crimson/25",
    badgeText: "text-rose-300",
  },
  {
    icon: Swords,
    title: "Self-Defence Session",
    badge: "Empowerment Session",
    shortDesc: "An empowering interactive session focused on practical self-defence techniques, awareness, and confidence.",
    fullDesc: "This isn't a passive lecture — it's an interactive, physical session that equips you with real-world self-defence skills. Our expert trainers from law enforcement bring years of experience in personal safety training, blending practical technique with mental preparedness and situational awareness.",
    speakers: [
      { name: "Raseena P K", role: "Asst. Sub Inspector & Self-Defence Trainer" },
      { name: "Sheena P P", role: "Asst. Sub Inspector of Police & Self-Defence Trainer" },
    ],
    featuring: null,
    accentFrom: "#ef4444",
    accentTo: "#800020",
    glowColor: "rgba(239, 68, 68, 0.10)",
    badgeGradient: "from-red-500/15 to-athena-maroon/10 border-red-400/25",
    badgeText: "text-red-300",
  },
  {
    icon: PaintBucket,
    title: "Tote Bag Painting",
    badge: "Creative Session",
    shortDesc: "A creative hands-on experience filled with self-expression, colour, creativity, and connection.",
    fullDesc: "Unleash your inner artist in this relaxing yet vibrant creative session. Paint, design, and personalise your own tote bag — a wearable canvas that captures your creativity. This session is about more than art; it's about self-expression, mindfulness, and the joy of creating something uniquely yours.",
    speakers: null,
    featuring: null,
    accentFrom: "#f472b6",
    accentTo: "#d946ef",
    glowColor: "rgba(244, 114, 182, 0.10)",
    badgeGradient: "from-pink-400/15 to-fuchsia-500/10 border-pink-400/25",
    badgeText: "text-pink-300",
  },
  {
    icon: Music,
    title: "Cultural Night",
    badge: "Night Event",
    shortDesc: "An unforgettable evening of music, celebration, energy, and live performances.",
    fullDesc: "The Cultural Night is the heartbeat of ATHENA — a pulsating evening of live music, performances, and raw energy. Featuring PAATHALAM, the official band of Government Engineering College Kozhikode, this event transforms the venue into an electrifying concert experience you won't forget.",
    speakers: null,
    featuring: "PAATHALAM — Official Band of GEC Kozhikode",
    accentFrom: "#a855f7",
    accentTo: "#991b1b",
    glowColor: "rgba(168, 85, 247, 0.10)",
    badgeGradient: "from-purple-500/15 to-athena-crimson/10 border-purple-400/25",
    badgeText: "text-purple-300",
  },
  {
    icon: Popcorn,
    title: "Movie Night",
    badge: "Community Event",
    shortDesc: "A cozy cinematic experience filled with fun, laughter, conversations, and unforgettable memories.",
    fullDesc: "Wind down with fellow campers in a warm, communal movie screening under the stars. Enjoy handpicked films that celebrate powerful stories, with cozy seating, good company, and the perfect atmosphere for building lasting friendships and memories.",
    speakers: null,
    featuring: null,
    accentFrom: "#fb923c",
    accentTo: "#991b1b",
    glowColor: "rgba(251, 146, 60, 0.10)",
    badgeGradient: "from-orange-400/15 to-athena-crimson/10 border-orange-400/25",
    badgeText: "text-orange-300",
  },
  {
    icon: GlassWater,
    title: "Saree Party",
    badge: "Evening Celebration",
    shortDesc: "An evening celebrating elegance, confidence, friendship, laughter, and timeless memories.",
    fullDesc: "Drape yourself in grace for an unforgettable evening of elegance. The Saree Party is a celebration of tradition, beauty, and sisterhood — where every attendee shines. Expect laughter, photos, dance, and an evening bathed in soft luxurious lighting that makes everyone feel like a star.",
    speakers: null,
    featuring: null,
    accentFrom: "#d4af37",
    accentTo: "#fda4af",
    glowColor: "rgba(212, 175, 55, 0.10)",
    badgeGradient: "from-athena-gold/15 to-athena-pink/10 border-athena-gold/25",
    badgeText: "text-athena-gold",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// EVENT CARD
// ─────────────────────────────────────────────────────────────────────────────

function EventCard({ event, index, onSelect }) {
  const Icon = event.icon;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 35 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: "easeOut" },
        },
      }}
      whileHover={{ y: -8 }}
      onClick={() => onSelect(event)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer h-full"
    >
      {/* Outer gradient border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${event.accentFrom}40, ${event.accentTo}30)`,
        }}
      />

      {/* Card body */}
      <div className="relative h-full flex flex-col bg-[#0e0204]/80 backdrop-blur-md border border-red-950/40 group-hover:border-red-900/50 rounded-2xl p-6 sm:p-7 transition-all duration-500">

        {/* Ambient glow on hover */}
        <div
          className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-[80px]"
          style={{ background: event.glowColor.replace(/[\d.]+\)$/, "0.35)") }}
        />

        {/* Top row: icon + badge */}
        <div className="flex items-center justify-between mb-5 relative z-10">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center border border-red-900/30 bg-red-950/40 group-hover:scale-110 group-hover:bg-white/[0.06] transition-all duration-300 shadow-sm"
          >
            <Icon
              className="w-5 h-5 transition-colors duration-300"
              style={{ color: event.accentFrom }}
            />
          </div>
          <span
            className={`font-sans font-bold text-[9px] sm:text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border bg-gradient-to-r ${event.badgeGradient} ${event.badgeText} backdrop-blur-sm`}
          >
            {event.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-black text-base sm:text-lg text-slate-100 group-hover:text-white mb-2 transition-colors duration-300 relative z-10 leading-snug">
          {event.title}
        </h3>

        {/* Subtitle (if present) */}
        {event.subtitle && (
          <p className="font-sans text-[11px] sm:text-xs text-slate-400 font-semibold mb-2 leading-relaxed relative z-10 line-clamp-2">
            {event.subtitle}
          </p>
        )}

        {/* Short Description */}
        <p className="font-sans text-xs sm:text-[13px] text-slate-400 group-hover:text-slate-300 leading-relaxed mt-1 mb-5 transition-colors duration-300 relative z-10 flex-1 font-medium line-clamp-3">
          {event.shortDesc}
        </p>

        {/* Speakers / Featuring preview (compact) */}
        {event.speakers && (
          <div className="flex items-center space-x-2 mb-4 relative z-10">
            <Star className="w-3 h-3 text-athena-gold/70 flex-shrink-0" />
            <span className="font-sans text-[11px] text-slate-400 font-semibold truncate">
              {event.speakers.map((s) => s.name).join(" · ")}
            </span>
          </div>
        )}
        {event.featuring && (
          <div className="flex items-center space-x-2 mb-4 relative z-10">
            <Sparkles className="w-3 h-3 text-purple-400/70 flex-shrink-0" />
            <span className="font-sans text-[11px] text-slate-400 font-semibold truncate">
              {event.featuring}
            </span>
          </div>
        )}

        {/* Learn More prompt */}
        <div className="mt-auto flex items-center space-x-1.5 relative z-10">
          <span className="font-sans font-bold text-[11px] tracking-wide uppercase text-slate-500 group-hover:text-slate-200 transition-colors duration-300">
            Learn More
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-200 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MODAL OVERLAY
// ─────────────────────────────────────────────────────────────────────────────

function EventModal({ event, onClose }) {
  const Icon = event.icon;

  // Close on escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl bg-[#0e0204]/95 backdrop-blur-xl border border-red-900/30 shadow-2xl shadow-black/50"
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
          style={{ background: `linear-gradient(to right, ${event.accentFrom}, ${event.accentTo})` }}
        />

        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full pointer-events-none blur-[100px] opacity-30"
          style={{ background: event.glowColor.replace(/[\d.]+\)$/, "0.5)") }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-red-950/40 border border-red-900/30 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-950/60 transition-all duration-200 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative z-10 p-8 sm:p-10">
          {/* Badge */}
          <span
            className={`inline-flex font-sans font-bold text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full border bg-gradient-to-r ${event.badgeGradient} ${event.badgeText} mb-6`}
          >
            {event.badge}
          </span>

          {/* Icon + Title row */}
          <div className="flex items-start space-x-4 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center border border-red-900/30 bg-red-950/40 flex-shrink-0"
            >
              <Icon className="w-6 h-6" style={{ color: event.accentFrom }} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-100 leading-tight">
                {event.title}
              </h3>
              {event.subtitle && (
                <p className="font-sans text-xs sm:text-sm text-slate-400 font-semibold mt-1 leading-relaxed">
                  {event.subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="w-full h-[1px] bg-red-950/30 my-6" />

          {/* Full description */}
          <p className="font-sans text-sm sm:text-[15px] text-slate-300 leading-relaxed font-medium mb-6">
            {event.fullDesc}
          </p>

          {/* Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <div className="mb-6">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-500 mb-3">
                {event.speakers.length === 1 ? "Speaker" : "Speakers"}
              </h4>
              <div className="space-y-3">
                {event.speakers.map((speaker, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-red-950/40 border border-red-900/30 flex items-center justify-center flex-shrink-0">
                      <Star className="w-3.5 h-3.5 text-athena-gold/70" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-sans font-bold text-sm text-slate-200 block">{speaker.name}</span>
                      <span className="font-sans text-[11px] text-slate-450 font-semibold">{speaker.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Featuring */}
          {event.featuring && (
            <div className="mb-4">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-500 mb-3">
                Featuring
              </h4>
              <div className="flex items-center space-x-3 bg-red-950/15 border border-red-900/20 rounded-xl px-4 py-3">
                <Sparkles className="w-4 h-4 text-purple-400/80 flex-shrink-0" />
                <span className="font-sans font-semibold text-sm text-slate-200">
                  {event.featuring}
                </span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EVENTS SECTION
// ─────────────────────────────────────────────────────────────────────────────

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClose = useCallback(() => setSelectedEvent(null), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background glow blobs */}
      <div className="absolute top-[30%] right-[-15%] w-96 h-96 rounded-full bg-athena-crimson/8 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[-15%] w-96 h-96 rounded-full bg-athena-wine/10 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display font-bold text-xs sm:text-sm text-athena-pink tracking-widest uppercase mb-3 block">
            Camp Highlights
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-100 tracking-wide mb-4">
            Explore Events & Activities
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold mx-auto rounded-full mb-6" />
          <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
            ATHENA 2026 has a diverse itinerary crafted to spark innovation, foster life skills, and celebrate culture. Dive into the modules below.
          </p>
        </div>

        {/* Events Grid — top row 5 columns, bottom row 5 columns */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {events.map((ev, idx) => (
            <EventCard key={idx} event={ev} index={idx} onSelect={setSelectedEvent} />
          ))}
        </motion.div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}
