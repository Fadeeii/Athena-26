import React from "react";
import { motion } from "framer-motion";
import { Cpu, Palette, Shield, MessageSquare, Volume2, Film, Music, Glasses } from "lucide-react";

export default function Events() {
  const events = [
    {
      icon: <Cpu className="w-6 h-6 text-athena-pink group-hover:text-white transition-colors duration-300" />,
      title: "Technical Workshop",
      desc: "Learn emerging frameworks and code with hands-on labs led by tech experts.",
      tag: "Tech",
      colorClass: "bg-red-950/15 border-red-950/50 hover:from-athena-crimson/50 hover:to-athena-maroon/65 hover:shadow-athena-crimson/20 hover:border-athena-pink/30",
    },
    {
      icon: <Palette className="w-6 h-6 text-athena-gold group-hover:text-white transition-colors duration-300" />,
      title: "Creative Art Workshop",
      desc: "Unleash your aesthetic expressions and craft beautiful tactile and digital designs.",
      tag: "Creative",
      colorClass: "bg-red-950/15 border-red-950/50 hover:from-athena-maroon/50 hover:to-athena-wine/65 hover:shadow-athena-maroon/20 hover:border-athena-pink/30",
    },
    {
      icon: <Shield className="w-6 h-6 text-athena-pink group-hover:text-white transition-colors duration-300" />,
      title: "Self Defence Session",
      desc: "Equip yourself with practical, empowering self-protection techniques and safety skills.",
      tag: "Empowerment",
      colorClass: "bg-red-950/15 border-red-950/50 hover:from-athena-crimson/50 hover:to-athena-wine/65 hover:shadow-athena-crimson/20 hover:border-athena-pink/30",
    },
    {
      icon: <Volume2 className="w-6 h-6 text-athena-gold group-hover:text-white transition-colors duration-300" />,
      title: "Talk Session",
      desc: "Engage with prominent women leaders who share stories of resilience, rise and impact.",
      tag: "Inspire",
      colorClass: "bg-red-950/15 border-red-950/50 hover:from-athena-wine/50 hover:to-athena-maroon/65 hover:shadow-athena-maroon/20 hover:border-athena-pink/30",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-athena-pink group-hover:text-white transition-colors duration-300" />,
      title: "Panel Discussion",
      desc: "Interactive forums tackling diversity, careers in STEM, and technology for social good.",
      tag: "Interactive",
      colorClass: "bg-red-950/15 border-red-950/50 hover:from-athena-crimson/50 hover:to-athena-maroon/65 hover:shadow-athena-crimson/20 hover:border-athena-pink/30",
    },
    {
      icon: <Glasses className="w-6 h-6 text-athena-gold group-hover:text-white transition-colors duration-300" />,
      title: "Saree Party",
      desc: "A fun and elegant evening celebrating grace, traditions, culture and togetherness.",
      tag: "Social",
      colorClass: "bg-red-950/15 border-red-950/50 hover:from-athena-maroon/50 hover:to-athena-wine/65 hover:shadow-athena-maroon/20 hover:border-athena-pink/30",
    },
    {
      icon: <Film className="w-6 h-6 text-athena-pink group-hover:text-white transition-colors duration-300" />,
      title: "Movie Screening",
      desc: "Sit back and enjoy inspiring stories that celebrate female triumph and determination.",
      tag: "Entertainment",
      colorClass: "bg-red-950/15 border-red-950/50 hover:from-athena-crimson/50 hover:to-athena-wine/65 hover:shadow-athena-crimson/20 hover:border-athena-pink/30",
    },
    {
      icon: <Music className="w-6 h-6 text-athena-gold group-hover:text-white transition-colors duration-300" />,
      title: "Cultural Night",
      desc: "A stunning showcase of dance, music, drama, and artistic performances by attendees.",
      tag: "Celebration",
      colorClass: "bg-red-950/15 border-red-950/50 hover:from-athena-wine/50 hover:to-athena-maroon/65 hover:shadow-athena-maroon/20 hover:border-athena-pink/30",
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
                backgroundColor: "rgba(76, 5, 25, 0.2)",
              }}
              className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between text-left group transition-all duration-550 hover:bg-gradient-to-br hover:text-white hover:shadow-2xl cursor-pointer ${ev.colorClass}`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-950/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 border border-red-900/30 shadow-sm shadow-black/10 transition-all duration-300">
                    {ev.icon}
                  </div>
                  <span className="font-sans font-bold text-[10px] tracking-widest text-slate-350 group-hover:text-white/90 uppercase bg-red-950/30 group-hover:bg-white/10 px-2.5 py-1 rounded-full border border-red-950/40 group-hover:border-white/10">
                    {ev.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-lg text-slate-100 mb-3 group-hover:text-white transition-colors duration-300">
                  {ev.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-slate-400 group-hover:text-white/95 text-xs sm:text-sm leading-relaxed mt-2 transition-colors duration-300 font-medium">
                {ev.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
