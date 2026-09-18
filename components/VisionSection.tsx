import React from "react";
import { Sparkles } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-[#0A0E27] via-[#0F172A] to-[#0A0E27] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-pink-400 mb-8 border border-white/10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Vision</span>
        </div>

        {/* Minimal Large Typography Quote */}
        <blockquote className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2] mb-10 text-balance">
          “To build a technology-driven mobility ecosystem that makes everyday transportation{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-pink-400 to-rose-400">
            safer, simpler, and more accessible
          </span>{" "}
          for millions of people.”
        </blockquote>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-normal">
          Designed with the realities of urban Indian commuters in mind, starting with Delhi NCR and expanding toward sustainable nationwide transit.
        </p>
      </div>
    </section>
  );
}
