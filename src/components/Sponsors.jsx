import React from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Compass, Activity, Globe, Award } from "lucide-react";

export default function Sponsors() {
  const sponsorCategories = [
    {
      tier: "Diamond Partner",
      sponsors: [
        {
          name: "Apex Tech Labs",
          icon: <Cpu className="w-8 h-8 text-athena-gold" />,
          desc: "Lead Technology Partner",
        },
        {
          name: "Vanguard Trust",
          icon: <Shield className="w-8 h-8 text-athena-pink" />,
          desc: "Security & Infrastructure Partner",
        },
      ],
    },
    {
      tier: "Gold Sponsors",
      sponsors: [
        {
          name: "Nova Ventures",
          icon: <Compass className="w-7 h-7 text-slate-350" />,
          desc: "Innovation Sponsor",
        },
        {
          name: "BioSphere",
          icon: <Activity className="w-7 h-7 text-slate-350" />,
          desc: "Healthcare Tech Partner",
        },
        {
          name: "Global Connect",
          icon: <Globe className="w-7 h-7 text-slate-350" />,
          desc: "Networking Partner",
        },
        {
          name: "Aura Design",
          icon: <Award className="w-7 h-7 text-slate-350" />,
          desc: "Creative Design Sponsor",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="sponsors" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background soft glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-athena-maroon/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-xs sm:text-sm text-athena-gold tracking-widest uppercase mb-4 block"
          >
            Future-Ready Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-slate-100 tracking-wide mb-6"
          >
            Partners & Sponsors
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Supporting the next generation of women leaders in STEM. Collaborating with industry innovators to create a professional and inspiring environment.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-16">
          {sponsorCategories.map((category, catIdx) => (
            <div key={category.tier} className="flex flex-col items-center">
              {/* Category Tier Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="px-4 py-1.5 rounded-full bg-red-950/20 border border-red-900/35 mb-8 shadow-sm"
              >
                <span className="font-sans font-bold text-xs sm:text-sm text-slate-350 tracking-wider uppercase">
                  {category.tier}
                </span>
              </motion.div>

              {/* Grid Layout of Cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`grid gap-6 w-full max-w-5xl justify-center ${
                  category.sponsors.length === 2
                    ? "sm:grid-cols-2 max-w-3xl"
                    : "grid-cols-2 md:grid-cols-4"
                }`}
              >
                {category.sponsors.map((sponsor, idx) => (
                  <motion.div
                    key={sponsor.name}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-red-950/20 via-transparent to-red-900/10 hover:from-athena-crimson/35 hover:via-athena-pink/25 hover:to-athena-gold/30 hover:shadow-xl hover:shadow-athena-pink/5 transition-all duration-500 group"
                  >
                    {/* Glass Container */}
                    <div className="bg-[#0c0204]/90 backdrop-blur-md p-6 h-full flex flex-col items-center justify-center text-center rounded-[15px] border border-red-950/30">
                      
                      {/* Logo Icon Containment with soft glow backgrounds */}
                      <div className="w-14 h-14 rounded-xl bg-red-950/15 flex items-center justify-center mb-4 border border-red-900/20 shadow-inner group-hover:bg-white/5 group-hover:border-athena-pink/35 group-hover:scale-105 transition-all duration-300">
                        {sponsor.icon}
                      </div>

                      {/* Sponsor Name */}
                      <h4 className="font-display font-bold text-base text-slate-200 group-hover:text-white transition-colors duration-250">
                        {sponsor.name}
                      </h4>

                      {/* Sponsor Description */}
                      <p className="font-sans text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-250 mt-1 font-semibold">
                        {sponsor.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
