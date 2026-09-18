"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, QrCode } from "lucide-react";
import QRModal from "./QRModal";

export default function Hero() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-[#0B1021] to-[#0A0E27] text-white">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Urban backdrop subtle overlay */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-luminosity pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "radial-gradient(circle at center, rgba(56,189,248,0.2) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-slate-200 mb-8 animate-fade-in shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>Move Better. Move Safer. Move with Torkk.</span>
        </div>

        {/* Semantic H1 (Strictly 1 per page, matching SEO recommendations) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6 text-balance">
          The Future of Mobility is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-pink-400 to-rose-400">
            Fair & Safe
          </span>
        </h1>

        {/* Sub-headline Pill Badges matching Desktop.png */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-medium text-slate-300 mb-8">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-pink-500" /> 0% Commission
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-400" /> Verified Drivers
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Safety First
          </span>
        </div>

        {/* Narrative Description (Topical content for high SEO score) */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Torkk is building a technology-driven mobility platform designed to make everyday transportation simpler, safer, and more accessible across urban India.
        </p>

        {/* CTA Buttons matching Desktop.png & Desktop - 3.png */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14">
          <button
            onClick={() => setIsQRModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-950 hover:bg-slate-100 font-bold px-7 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 text-base"
          >
            <QrCode className="w-5 h-5 text-pink-600" />
            <span>Get the App</span>
          </button>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white font-medium px-7 py-3.5 rounded-full border border-slate-700 backdrop-blur-md transition-all active:scale-95 text-base"
          >
            <span>Explore Mobility</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>

        {/* Store Badges Row */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={() => setIsQRModalOpen(true)}
            className="flex items-center gap-2.5 bg-black/60 hover:bg-black/90 text-white px-4 py-2 rounded-xl border border-white/10 text-left transition-all hover:border-white/20"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.06-.51 2.68-1.26z" />
            </svg>
            <div>
              <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">Download on</div>
              <div className="text-xs font-semibold">App Store</div>
            </div>
          </button>

          <button
            onClick={() => setIsQRModalOpen(true)}
            className="flex items-center gap-2.5 bg-black/60 hover:bg-black/90 text-white px-4 py-2 rounded-xl border border-white/10 text-left transition-all hover:border-white/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M3.6 2.4L13.8 12 3.6 21.6c-.4-.4-.6-1-.6-1.7V4.1c0-.7.2-1.3.6-1.7z" />
              <path fill="#FBBC04" d="M17.3 8.6L13.8 12l3.5 3.4 3.9-2.2c1.1-.6 1.1-1.7 0-2.3l-3.9-2.3z" />
              <path fill="#EA4335" d="M13.8 12L3.6 21.6c.7.7 1.8.8 2.7.3l11-6.5L13.8 12z" />
              <path fill="#34A853" d="M17.3 8.6L6.3 2.1c-.9-.5-2-.4-2.7.3L13.8 12l3.5-3.4z" />
            </svg>
            <div>
              <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">GET IT ON</div>
              <div className="text-xs font-semibold">Google Play</div>
            </div>
          </button>
        </div>
      </div>

      <QRModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
    </section>
  );
}
