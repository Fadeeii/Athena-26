import React from "react";
import { motion } from "framer-motion";
import { Check, Flame, Users, Sparkles, ArrowRight } from "lucide-react";

export default function Tickets() {
  const passes = [
    {
      name: "Early Bird Pass",
      tag: "Limited Slots",
      price: "₹349",
      period: "per attendee",
      icon: <Flame className="w-5 h-5 text-amber-500" />,
      features: [
        "Full access to 4 Workshops",
        "Entry to all Talk & Panel sessions",
        "Interactive Self Defence training",
        "Camp kit & Certifications",
        "Refreshments & Saree Party access",
      ],
      isPopular: false,
      borderStyle: "bg-gradient-to-br from-sky-400 to-sky-600 hover:shadow-sky-500/20",
      iconBg: "bg-sky-50 border-sky-100",
    },
    {
      name: "Standard Pass",
      tag: "Regular Entry",
      price: "₹449",
      period: "per attendee",
      icon: <Sparkles className="w-5 h-5 text-pink-500" />,
      features: [
        "Full access to 4 Workshops",
        "Entry to all Talk & Panel sessions",
        "Interactive Self Defence training",
        "Camp kit & Certifications",
        "Refreshments & Saree Party access",
      ],
      isPopular: true,
      borderStyle: "bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 hover:shadow-purple-500/35",
      iconBg: "bg-pink-50 border-pink-100",
    },
    {
      name: "Group Pass",
      tag: "Group Discount (3 pax)",
      price: "₹1,199",
      period: "for 3 attendees",
      icon: <Users className="w-5 h-5 text-purple-500" />,
      features: [
        "Full access for 3 members",
        "4 Workshops per attendee",
        "Entry to all Talk & Panel sessions",
        "Certificates for all members",
        "Refreshments & Saree Party access",
        "Dedicated group sitting area",
      ],
      isPopular: false,
      borderStyle: "bg-gradient-to-br from-purple-400 to-pink-500 hover:shadow-pink-500/20",
      iconBg: "bg-purple-50 border-purple-100",
    },
  ];

  return (
    <section id="tickets" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background radial glow */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-athena-purple/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-display font-bold text-xs sm:text-sm text-athena-blue tracking-widest uppercase mb-3 block">
            Secure Your Seat
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight mb-4">
            Choose Your Camp Pass
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-athena-blue to-athena-purple mx-auto rounded-full mb-6" />
          <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
            Register now to embark on an incredible journey of technology, empowerment, and fun. Choose the pass that fits you best.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {passes.map((pass, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl overflow-hidden p-[2.5px] flex flex-col h-full group transition-all duration-300 hover:shadow-2xl ${pass.borderStyle}`}
            >
              {/* Custom border glow for hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${
                    pass.isPopular
                      ? "#f472b6, #a78bfa, #38bdf8"
                      : "#38bdf8, #a78bfa"
                  })`
                }}
              />

              {/* Main Card Body */}
              <div className="relative flex flex-col justify-between h-full bg-white p-8 rounded-[21px] shadow-sm">
                
                {/* Popular Badge */}
                {pass.isPopular && (
                  <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-gradient-to-r from-athena-pink to-athena-purple text-[10px] font-sans font-extrabold uppercase tracking-widest text-white shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Header Info */}
                <div>
                  <div className="flex items-center space-x-2.5 mb-4">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${pass.iconBg}`}>
                      {pass.icon}
                    </div>
                    <span className="font-sans font-bold text-xs tracking-wider text-slate-500 uppercase">
                      {pass.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl text-slate-900 mb-6">
                    {pass.name}
                  </h3>

                  {/* Pricing Display */}
                  <div className="flex items-baseline space-x-1 mb-8">
                    <span className="font-display font-black text-4xl sm:text-5xl text-slate-900">
                      {pass.price}
                    </span>
                    <span className="font-sans text-xs text-slate-400 uppercase tracking-wide">
                      / {pass.period}
                    </span>
                  </div>

                  <div className="w-full h-[1px] bg-slate-100 mb-8" />

                  {/* Features List */}
                  <ul className="flex flex-col space-y-4 mb-8">
                    {pass.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-3 text-left">
                        <Check className="w-4 h-4 text-athena-blue mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-sm text-slate-600 leading-relaxed font-semibold">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Container */}
                <div className="mt-auto">
                  <a
                    href="https://dummyregistrationlink.wie.ieee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 px-6 rounded-xl font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 ${
                      pass.isPopular
                        ? "bg-gradient-to-r from-athena-blue via-athena-purple to-athena-pink text-white hover:opacity-95 shadow-md shadow-athena-purple/10 hover:scale-[1.02]"
                        : "bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-athena-blue/40 text-slate-800"
                    }`}
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
