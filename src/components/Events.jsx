import React from "react";
import { motion } from "framer-motion";
import { Cpu, Palette, Shield, MessageSquare, Volume2, Film, Music, Glasses } from "lucide-react";

export default function Events() {
  const events = [
    {
      icon: <Cpu className="w-6 h-6 text-sky-650 group-hover:text-white transition-colors duration-300" />,
      title: "Technical Workshop",
      desc: "Learn emerging frameworks and code with hands-on labs led by tech experts.",
      tag: "Tech",
      colorClass: "bg-sky-50/95 border-sky-100/60 hover:from-sky-500 hover:to-sky-600 hover:shadow-sky-500/20",
    },
    {
      icon: <Palette className="w-6 h-6 text-pink-650 group-hover:text-white transition-colors duration-300" />,
      title: "Creative Art Workshop",
      desc: "Unleash your aesthetic expressions and craft beautiful tactile and digital designs.",
      tag: "Creative",
      colorClass: "bg-pink-55/95 border-pink-100/60 hover:from-pink-500 hover:to-pink-600 hover:shadow-pink-500/20",
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-650 group-hover:text-white transition-colors duration-300" />,
      title: "Self Defence Session",
      desc: "Equip yourself with practical, empowering self-protection techniques and safety skills.",
      tag: "Empowerment",
      colorClass: "bg-emerald-50/95 border-emerald-100/60 hover:from-emerald-500 hover:to-emerald-600 hover:shadow-emerald-500/20",
    },
    {
      icon: <Volume2 className="w-6 h-6 text-purple-650 group-hover:text-white transition-colors duration-300" />,
      title: "Talk Session",
      desc: "Engage with prominent women leaders who share stories of resilience, rise and impact.",
      tag: "Inspire",
      colorClass: "bg-purple-50/95 border-purple-100/60 hover:from-purple-500 hover:to-purple-600 hover:shadow-purple-500/20",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-amber-650 group-hover:text-white transition-colors duration-300" />,
      title: "Panel Discussion",
      desc: "Interactive forums tackling diversity, careers in STEM, and technology for social good.",
      tag: "Interactive",
      colorClass: "bg-amber-50/95 border-amber-100/60 hover:from-amber-500 hover:to-amber-600 hover:shadow-amber-500/20",
    },
    {
      icon: <Glasses className="w-6 h-6 text-rose-650 group-hover:text-white transition-colors duration-300" />,
      title: "Saree Party",
      desc: "A fun and elegant evening celebrating grace, traditions, culture and togetherness.",
      tag: "Social",
      colorClass: "bg-rose-50/95 border-rose-100/60 hover:from-rose-500 hover:to-rose-600 hover:shadow-rose-500/20",
    },
    {
      icon: <Film className="w-6 h-6 text-cyan-650 group-hover:text-white transition-colors duration-300" />,
      title: "Movie Screening",
      desc: "Sit back and enjoy inspiring stories that celebrate female triumph and determination.",
      tag: "Entertainment",
      colorClass: "bg-cyan-55/95 border-cyan-100/60 hover:from-cyan-500 hover:to-cyan-650 hover:shadow-cyan-500/20",
    },
    {
      icon: <Music className="w-6 h-6 text-indigo-650 group-hover:text-white transition-colors duration-300" />,
      title: "Cultural Night",
      desc: "A stunning showcase of dance, music, drama, and artistic performances by attendees.",
      tag: "Celebration",
      colorClass: "bg-indigo-50/95 border-indigo-100/60 hover:from-indigo-500 hover:to-indigo-600 hover:shadow-indigo-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background glow blobs */}
      <div className="absolute top-[30%] right-[-15%] w-96 h-96 rounded-full bg-athena-pink/10 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[-15%] w-96 h-96 rounded-full bg-athena-blue/10 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display font-bold text-xs sm:text-sm text-athena-purple tracking-widest uppercase mb-3 block">
            Camp Highlights
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight mb-4">
            Explore Events & Activities
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-athena-blue to-athena-pink mx-auto rounded-full mb-6" />
          <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
            ATHENA 2026 has a diverse itinerary crafted to spark innovation, foster life skills, and celebrate culture. Dive into the modules below.
          </p>
        </div>

        {/* Events Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {events.map((ev, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -8,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between text-left group transition-all duration-500 hover:bg-gradient-to-br hover:text-white hover:shadow-2xl cursor-pointer ${ev.colorClass}`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 border border-slate-100/50 shadow-sm shadow-slate-100/50 transition-all duration-300">
                    {ev.icon}
                  </div>
                  <span className="font-sans font-bold text-[10px] tracking-widest text-slate-600 group-hover:text-white/90 uppercase bg-white/80 group-hover:bg-white/10 px-2.5 py-1 rounded-full border border-slate-200/50 group-hover:border-white/10">
                    {ev.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-lg text-slate-800 mb-3 group-hover:text-white transition-colors duration-300">
                  {ev.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-slate-500 group-hover:text-white/80 text-xs sm:text-sm leading-relaxed mt-2 transition-colors duration-300">
                {ev.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
