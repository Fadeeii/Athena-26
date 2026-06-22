import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, Trophy, Award } from "lucide-react";

export default function AboutIEEE() {
  const cards = [
    {
      icon: <Users className="w-6 h-6 text-athena-pink group-hover:text-white transition-colors duration-300" />,
      title: "Vibrant Community",
      desc: "Empowering 1000+ members across engineering colleges in Northern Kerala.",
      colorClass: "bg-red-950/15 border-red-950/50 hover:from-athena-crimson/50 hover:to-athena-maroon/60 hover:shadow-athena-crimson/20",
    },
    {
      icon: <Globe className="w-6 h-6 text-athena-gold group-hover:text-white transition-colors duration-300" />,
      title: "Global Network",
      desc: "Connecting local students and professionals directly to IEEE global networks.",
      colorClass: "bg-red-950/15 border-red-950/50 hover:from-athena-maroon/50 hover:to-athena-wine/60 hover:shadow-athena-maroon/20",
    },
    {
      icon: <Trophy className="w-6 h-6 text-athena-pink group-hover:text-white transition-colors duration-300" />,
      title: "Innovation Hub",
      desc: "Hosting cutting-edge workshops, hackathons, and technical symposiums.",
      colorClass: "bg-red-950/15 border-red-950/50 hover:from-athena-crimson/50 hover:to-athena-wine/60 hover:shadow-athena-crimson/20",
    },
    {
      icon: <Award className="w-6 h-6 text-athena-gold group-hover:text-white transition-colors duration-300" />,
      title: "Excellence Driven",
      desc: "Recognized as one of the best performing subsections in the region.",
      colorClass: "bg-red-950/15 border-red-950/50 hover:from-athena-wine/50 hover:to-athena-maroon/60 hover:shadow-athena-maroon/20",
    },
  ];

  return (
    <section id="ieee-malabar" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-athena-crimson/8 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Left */}
          <motion.div
            className="lg:col-span-5 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-luxury font-extrabold text-3xl sm:text-5xl text-slate-100 tracking-wide leading-tight mb-6">
              About IEEE Malabar Subsection
            </h2>
            <p className="font-sans text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-semibold">
              IEEE Malabar Subsection, a prominent subunit of the IEEE Kerala Section, serves the northern districts of Kerala (Malabar region). It acts as a catalyst for professional growth and academic development in engineering and technology.
            </p>
            <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
              By bringing together industry professionals, academicians, and student branches, the subsection hosts a series of initiatives that promote learning, mentoring, and community outreach.
            </p>
          </motion.div>

          {/* Cards Right */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                className={`p-8 rounded-2xl text-left border hover:bg-gradient-to-br hover:text-white transition-all duration-500 hover:shadow-2xl group ${card.colorClass}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="w-12 h-12 rounded-xl bg-red-950/40 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 border border-red-900/30 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-100 mb-2 group-hover:text-white transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="font-sans text-slate-400 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
