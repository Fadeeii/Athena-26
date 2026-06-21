import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Compass, ShieldCheck } from "lucide-react";

export default function AboutWIE() {
  const highlights = [
    {
      icon: <Heart className="w-5 h-5 text-pink-650" />,
      title: "Mentorship & Guidance",
      desc: "Providing professional networking opportunities and mentorship from top women leaders in STEM.",
      accentClass: "hover:border-pink-200/50 hover:bg-pink-50/40",
      iconBg: "bg-pink-100/60 border-pink-200/30",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-650" />,
      title: "Empowering Workshops",
      desc: "Skill building in emerging technologies, leadership coaching, and technical mastery.",
      accentClass: "hover:border-purple-200/50 hover:bg-purple-50/40",
      iconBg: "bg-purple-100/60 border-purple-200/30",
    },
    {
      icon: <Compass className="w-5 h-5 text-sky-655" />,
      title: "Career Advocacy",
      desc: "Advocating for diversity, gender equity, and professional growth in engineering.",
      accentClass: "hover:border-sky-200/50 hover:bg-sky-50/40",
      iconBg: "bg-sky-100/60 border-sky-200/30",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: "Outreach Programs",
      desc: "Inspiring girls at schools and colleges to pursue careers in engineering and science.",
      accentClass: "hover:border-emerald-200/50 hover:bg-emerald-50/40",
      iconBg: "bg-emerald-100/60 border-emerald-200/30",
    },
  ];

  return (
    <section id="wie" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background soft pink/purple glow */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-athena-pink/10 blur-[110px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-athena-purple/10 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Animated Gradient Border Card Left */}
          <motion.div 
            className="lg:col-span-6 relative p-[2px] rounded-3xl overflow-hidden bg-gradient-to-r from-athena-blue via-athena-purple to-athena-pink group shadow-2xl shadow-athena-pink/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Moving background gradient inside border */}
            <div className="absolute inset-0 bg-gradient-to-r from-athena-pink via-athena-purple to-athena-blue opacity-50 blur-xl group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Main content body inside card */}
            <div className="relative bg-gradient-to-br from-white via-pink-50/10 to-sky-50/15 p-8 sm:p-12 rounded-[22px] text-left">
              <span className="font-display font-bold text-xs sm:text-sm text-athena-pink tracking-widest uppercase mb-3 block">
                Affinity Group
              </span>
              <h3 className="font-display font-black text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-6">
                WIE AG IEEE Malabar Subsection
              </h3>
              <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-semibold">
                IEEE Women in Engineering (WIE) is one of the largest global professional networks dedicated to promoting women engineers and scientists, inspiring girls worldwide to follow their academic interests in STEM fields.
              </p>
              <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
                The Malabar Subsection Affinity Group carries this torch by organising interactive summits, tech camps, and awareness projects. We are dedicated to creating an inclusive ecosystem where women can innovate, lead, and thrive in tech.
              </p>
              
              <div className="mt-8 flex items-center space-x-2">
                <span className="text-xs font-black uppercase tracking-widest text-athena-purple bg-purple-100/50 px-3 py-1 rounded-full border border-purple-200/50">
                  Empowered women empower women
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights */}
          <motion.div
            className="lg:col-span-6 text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display font-bold text-xs sm:text-sm text-athena-purple tracking-widest uppercase mb-3 block">
              Our Vision & Mission
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight mb-8">
              Why We Lead
            </h2>
            
            <div className="flex flex-col space-y-6">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`flex space-x-4 p-4 rounded-xl border border-transparent transition-all duration-300 shadow-sm shadow-transparent hover:shadow-slate-100 ${item.accentClass}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-slate-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="font-sans text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
