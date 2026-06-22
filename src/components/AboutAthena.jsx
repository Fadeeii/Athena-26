import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Mic, Network, Music, Calendar, MapPin } from "lucide-react";

export default function AboutAthena() {
  const stats = [
    {
      icon: <BookOpen className="w-5 h-5 text-athena-pink group-hover:text-white transition-colors duration-300" />,
      number: "04+",
      label: "Workshops",
      desc: "Hands-on tech & creative skill development.",
      colorClass: "bg-red-950/15 border-red-950/40 hover:from-athena-crimson/50 hover:to-athena-maroon/60 hover:shadow-athena-crimson/20",
    },
    {
      icon: <Mic className="w-5 h-5 text-athena-gold group-hover:text-white transition-colors duration-300" />,
      number: "08+",
      label: "Inspiring Sessions",
      desc: "Keynotes and panels by industry pioneers.",
      colorClass: "bg-red-950/15 border-red-950/40 hover:from-athena-maroon/50 hover:to-athena-wine/60 hover:shadow-athena-maroon/20",
    },
    {
      icon: <Network className="w-5 h-5 text-athena-pink group-hover:text-white transition-colors duration-300" />,
      number: "150+",
      label: "Attendees",
      desc: "Connect with fellow innovators and leaders.",
      colorClass: "bg-red-950/15 border-red-950/40 hover:from-athena-crimson/50 hover:to-athena-wine/60 hover:shadow-athena-crimson/20",
    },
    {
      icon: <Music className="w-5 h-5 text-athena-gold group-hover:text-white transition-colors duration-300" />,
      number: "02+",
      label: "Cultural Events",
      desc: "Saree party, cultural nights & movie screening.",
      colorClass: "bg-red-950/15 border-red-950/40 hover:from-athena-wine/50 hover:to-athena-maroon/60 hover:shadow-athena-maroon/20",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background soft glow blobs */}
      <div className="absolute top-[20%] left-[-10%] w-80 h-80 rounded-full bg-athena-crimson/8 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-80 h-80 rounded-full bg-athena-wine/10 blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="font-display font-bold text-xs sm:text-sm text-athena-pink tracking-widest uppercase mb-3 block"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The First-Ever SHE Camp
          </motion.span>
          <motion.h2
            className="font-luxury font-bold text-3xl sm:text-5xl text-slate-100 tracking-wide mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About ATHENA 2026
          </motion.h2>
          <motion.p
            className="font-sans text-slate-200 text-base sm:text-lg leading-relaxed font-semibold"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            ATHENA 2026 is the first-ever SHE Camp organized by WIE AG IEEE Malabar Subsection, bringing together aspiring women innovators, leaders, creators, and changemakers for two unforgettable days of learning, networking, creativity, empowerment, and inspiration.
          </motion.p>
        </div>

        {/* Venue & Date Highlight Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {/* Date Card */}
          <motion.div
            className="glass p-6 rounded-2xl flex items-center space-x-5 text-left border border-red-950/45 bg-red-950/15 hover:bg-red-950/20 transition-all duration-300 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-xl bg-red-950/40 flex items-center justify-center flex-shrink-0 border border-red-900/30 shadow-md">
              <Calendar className="w-6 h-6 text-athena-pink" />
            </div>
            <div>
              <span className="font-sans text-xs text-slate-400 uppercase tracking-widest block mb-0.5">When</span>
              <h4 className="font-display font-black text-lg text-slate-100">July 25 & 26, 2026</h4>
              <span className="font-sans text-xs text-slate-450 font-semibold">Two action-packed days</span>
            </div>
          </motion.div>

          {/* Venue Card */}
          <motion.div
            className="glass p-6 rounded-2xl flex items-center space-x-5 text-left border border-red-950/45 bg-red-950/15 hover:bg-red-950/20 transition-all duration-300 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-xl bg-red-950/40 flex items-center justify-center flex-shrink-0 border border-red-900/30 shadow-md">
              <MapPin className="w-6 h-6 text-athena-gold" />
            </div>
            <div>
              <span className="font-sans text-xs text-slate-400 uppercase tracking-widest block mb-0.5">Where</span>
              <h4 className="font-display font-black text-lg text-slate-100">Government Engineering College Kozhikode</h4>
              <span className="font-sans text-xs text-slate-455 font-semibold">GEC Kozhikode Campus</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center border hover:bg-gradient-to-br hover:text-white transition-all duration-500 hover:shadow-2xl group cursor-pointer ${item.colorClass}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="w-10 h-10 rounded-lg bg-red-950/40 flex items-center justify-center mb-4 text-center border border-red-900/30 group-hover:bg-white/10 transition-colors duration-300">
                {item.icon}
              </div>
              <span className="font-display font-black text-3xl sm:text-4xl text-slate-100 group-hover:text-white transition-colors duration-300 tracking-tight mb-1">
                {item.number}
              </span>
              <span className="font-display font-bold text-sm text-gradient-blue group-hover:text-white transition-colors duration-300 tracking-wider uppercase mb-2">
                {item.label}
              </span>
              <p className="font-sans text-slate-400 group-hover:text-white/95 transition-colors duration-300 text-xs leading-relaxed max-w-[160px] font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
