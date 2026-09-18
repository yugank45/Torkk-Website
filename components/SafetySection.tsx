import React from "react";
import Link from "next/link";
import { ShieldCheck, PhoneCall, MapPin, Radio, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SafetySection() {
  return (
    <section className="py-20 md:py-28 bg-[#0A0E27] text-white relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-2 block">
            Core Brand Pillar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Safety Comes First.
          </h2>
          <p className="text-lg text-slate-300">
            Torkk is architected around safety from the first kilometer. Our philosophy prioritizes proactive prevention, verified driver identities, and instant crisis response.
          </p>
        </div>

        {/* Feature Split Cards matching Desktop.png */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Live Ride Tracking */}
          <div className="rounded-3xl bg-gradient-to-br from-[#1A1847] via-[#101438] to-[#0A0E27] border border-indigo-900/60 p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between group hover:border-indigo-500/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 border border-indigo-500/30">
                <Radio className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Live Ride Tracking</h3>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Real-time GPS ride monitoring and live location sharing with trusted family members and emergency contacts with a single tap.
              </p>

              <ul className="space-y-2.5 text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real-time route deviation telemetry & geofence alerts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Encrypted end-to-end trip link sharing</span>
                </li>
              </ul>
            </div>

            <div>
              <Link
                href="/safety"
                className="inline-flex items-center gap-2 text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Learn More about Tracking</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Emergency SOS */}
          <div className="rounded-3xl bg-gradient-to-br from-[#2B1536] via-[#161333] to-[#0A0E27] border border-purple-900/60 p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between group hover:border-pink-500/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-6 border border-pink-500/30">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Emergency SOS</h3>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                One-tap direct link to police control rooms and Torkk rapid dispatch response units with instantaneous broadcast of ride details and GPS coordinates.
              </p>

              <ul className="space-y-2.5 text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Direct integration with 112 emergency services</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Dedicated 24x7 safety response team monitoring</span>
                </li>
              </ul>
            </div>

            <div>
              <Link
                href="/safety"
                className="inline-flex items-center gap-2 text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Learn More about Safety Protocols</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Bottom Safety Tenets */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <ShieldCheck className="w-5 h-5 text-sky-400 mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">Verified Captains</h4>
            <p className="text-xs text-slate-400">Strict document & KYC background checks before approval.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <Radio className="w-5 h-5 text-pink-400 mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">Telemetry Monitoring</h4>
            <p className="text-xs text-slate-400">Automated trip speed and stop surveillance.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <MapPin className="w-5 h-5 text-emerald-400 mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">Safe Drop Assurance</h4>
            <p className="text-xs text-slate-400">Confirmation prompts upon destination arrival.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <PhoneCall className="w-5 h-5 text-amber-400 mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">24x7 Dedicated Support</h4>
            <p className="text-xs text-slate-400">Live human assistance around the clock for any incident.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
