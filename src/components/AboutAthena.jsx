import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Mic, Network, Music, Calendar, MapPin } from "lucide-react";

export default function AboutAthena() {
  const stats = [
    {
      icon: <BookOpen className="w-5 h-5 text-sky-600 group-hover:text-white transition-colors duration-300" />,
      number: "04+",
      label: "Workshops",
      desc: "Hands-on tech & creative skill development.",
      colorClass: "bg-sky-100/80 border-sky-200/60 hover:from-sky-500 hover:to-sky-600 hover:shadow-sky-500/20",
    },
    {
      icon: <Mic className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300" />,
      number: "08+",
      label: "Inspiring Sessions",
      desc: "Keynotes and panels by industry pioneers.",
      colorClass: "bg-purple-100/80 border-purple-200/60 hover:from-purple-500 hover:to-purple-600 hover:shadow-purple-500/20",
    },
    {
      icon: <Network className="w-5 h-5 text-pink-600 group-hover:text-white transition-colors duration-300" />,
      number: "150+",
      label: "Attendees",
      desc: "Connect with fellow innovators and leaders.",
      colorClass: "bg-pink-100/80 border-pink-200/60 hover:from-pink-500 hover:to-pink-600 hover:shadow-pink-500/20",
    },
    {
      icon: <Music className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors duration-300" />,
      number: "02+",
      label: "Cultural Events",
      desc: "Saree party, cultural nights & movie screening.",
      colorClass: "bg-amber-100/80 border-amber-200/60 hover:from-amber-500 hover:to-amber-600 hover:shadow-amber-500/20",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background soft glow blobs */}
      <div className="absolute top-[20%] left-[-10%] w-80 h-80 rounded-full bg-athena-blue/10 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-80 h-80 rounded-full bg-athena-purple/10 blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="font-display font-bold text-xs sm:text-sm text-athena-blue tracking-widest uppercase mb-3 block"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The First-Ever SHE Camp
          </motion.span>
          <motion.h2
            className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About ATHENA 2026
          </motion.h2>
          <motion.p
            className="font-sans text-slate-700 text-base sm:text-lg leading-relaxed font-semibold"
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
            className="glass p-6 rounded-2xl flex items-center space-x-5 text-left border border-slate-200/80 hover:border-athena-blue/40 bg-white/70 hover:bg-white transition-all duration-300 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0 border border-sky-200/50 shadow-sm">
              <Calendar className="w-6 h-6 text-athena-blue" />
            </div>
            <div>
              <span className="font-sans text-xs text-slate-400 uppercase tracking-widest block mb-0.5">When</span>
              <h4 className="font-display font-black text-lg text-slate-800">July 25 & 26, 2026</h4>
              <span className="font-sans text-xs text-slate-500 font-medium">Two action-packed days</span>
            </div>
          </motion.div>

          {/* Venue Card */}
          <motion.div
            className="glass p-6 rounded-2xl flex items-center space-x-5 text-left border border-slate-200/80 hover:border-athena-purple/40 bg-white/70 hover:bg-white transition-all duration-300 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0 border border-purple-200/50 shadow-sm">
              <MapPin className="w-6 h-6 text-athena-purple" />
            </div>
            <div>
              <span className="font-sans text-xs text-slate-400 uppercase tracking-widest block mb-0.5">Where</span>
              <h4 className="font-display font-black text-lg text-slate-800">Government Engineering College Kozhikode</h4>
              <span className="font-sans text-xs text-slate-500 font-medium">GEC Kozhikode Campus</span>
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
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-4 text-center border border-slate-100 group-hover:bg-white/10 transition-colors duration-300">
                {item.icon}
              </div>
              <span className="font-display font-black text-3xl sm:text-4xl text-slate-800 group-hover:text-white transition-colors duration-300 tracking-tight mb-1">
                {item.number}
              </span>
              <span className="font-display font-bold text-sm text-gradient-blue group-hover:text-white transition-colors duration-300 tracking-wider uppercase mb-2">
                {item.label}
              </span>
              <p className="font-sans text-slate-500 group-hover:text-white/80 transition-colors duration-300 text-xs leading-relaxed max-w-[160px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
