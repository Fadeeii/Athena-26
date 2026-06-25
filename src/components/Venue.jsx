import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Calendar, Building2 } from "lucide-react";
import gecKoz from "../assets/gec_koz.jpg";

export default function Venue() {
  return (
    <section id="venue" className="relative py-28 overflow-hidden bg-[#0a0102]">
      {/* Background Grayscale Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale opacity-12 scale-105"
        style={{ backgroundImage: `url(${gecKoz})` }}
      />

      {/* Modern gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0102] via-[#0a0102]/65 to-[#0a0102]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0102] via-transparent to-[#0a0102]" />

      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-athena-crimson/5 blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-athena-wine/5 blur-[100px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass border border-red-950/40 mb-6 bg-red-950/20">
            <MapPin className="w-4 h-4 text-athena-pink" />
            <span className="font-sans text-xs font-bold tracking-wider text-slate-350 uppercase">
              Our Host Venue
            </span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-slate-100 tracking-wide mb-4">
            Government Engineering College
            <br />
            <span className="text-gradient-gold">Kozhikode</span>
          </h2>

          <p className="font-editorial font-medium text-lg sm:text-xl text-athena-pink tracking-wider italic">
            "A place where ambition meets opportunity."
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold mx-auto rounded-full mt-6" />
        </div>

        {/* 2-Column Details & Interactive Map Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Left Details Card */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between glass p-8 sm:p-10 rounded-3xl border border-red-950/45 bg-[#0e0204]/80 backdrop-blur-md relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Soft decorative corner glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-athena-pink/10 to-transparent blur-xl pointer-events-none" />
            
            <div className="space-y-6 text-left">
              {/* Venue Info Item */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-red-950/45 flex items-center justify-center flex-shrink-0 border border-red-900/30 text-athena-pink">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-400 uppercase tracking-wider mb-1">Institution</h4>
                  <p className="font-sans font-bold text-base text-slate-100 leading-snug">Government Engineering College Kozhikode (GECK)</p>
                </div>
              </div>

              {/* Location Info Item */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-red-950/45 flex items-center justify-center flex-shrink-0 border border-red-900/30 text-athena-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-400 uppercase tracking-wider mb-1">Address</h4>
                  <p className="font-sans text-sm text-slate-200 font-semibold leading-relaxed">
                    Westhill Hills, Calicut, Kerala, India - 673005
                  </p>
                </div>
              </div>

              {/* Dates Info Item */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-red-950/45 flex items-center justify-center flex-shrink-0 border border-red-900/30 text-athena-pink">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-400 uppercase tracking-wider mb-1">Event Dates</h4>
                  <p className="font-sans font-bold text-base text-slate-150">July 25 & 26, 2026</p>
                </div>
              </div>

              {/* Description */}
              <div className="h-[1px] bg-red-950/45 my-4" />
              <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold">
                Government Engineering College Kozhikode is a prestigious institution under the Department of Technical Education, Government of Kerala. Nestled in Westhill, Calicut, it serves as the home base for technological excellence and engineering research.
              </p>
            </div>

            {/* External Maps Action */}
            <div className="mt-8 pt-4 flex flex-col items-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=11.2831512,75.7597116"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold hover:opacity-95 text-white font-display font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-athena-crimson/20 hover:shadow-[0_0_25px_rgba(244,63,94,0.35)] cursor-pointer"
              >
                <Navigation className="w-4.5 h-4.5 text-white animate-pulse" />
                <span>Navigate to Venue</span>
              </a>
              <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-2.5 text-center">
                Opens Google Maps directions navigation
              </span>
            </div>
          </motion.div>

          {/* Right Interactive Google Map */}
          <motion.div
            className="lg:col-span-7 relative group rounded-3xl overflow-hidden p-[2.5px] bg-gradient-to-r from-red-950/20 via-red-950/40 to-red-950/20 border border-red-950/50 shadow-2xl flex items-center justify-center h-full min-h-[350px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated border glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold opacity-10 group-hover:opacity-30 blur-lg transition-opacity duration-500 pointer-events-none" />
            
            {/* Maps iframe */}
            <iframe
              title="GEC Kozhikode Venue Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8530355883204!2d75.75971167570267!3d11.283151249791485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65eb2eef13db7%3A0x19aa91f1a5b81a4b!2sGovernment%20Engineering%20College%20Kozhikode!5e0!3m2!1sen!2sin!4v1719329000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[380px] rounded-[22px] border-0 map-dark-theme relative z-10"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
