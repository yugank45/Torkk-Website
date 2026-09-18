import React from "react";
import { Cpu, Shield, Bike, UserCheck, ArrowDown } from "lucide-react";

export default function OurIdea() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
            Our Idea
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            A Connected Mobility Ecosystem
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            By leveraging purpose-built technology as the cornerstone, Torkk synchronizes safety, multi-modal access, and driver transparency into one dependable transit ecosystem.
          </p>
        </div>

        {/* Conceptual Visual Flow Architecture */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Top Node: Technology */}
          <div className="bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-800">
            <Cpu className="w-5 h-5 text-sky-400" />
            <span className="font-bold tracking-wide uppercase text-sm sm:text-base">
              Proprietary Technology
            </span>
          </div>

          {/* Connecting Arrow */}
          <div className="my-3 flex flex-col items-center text-slate-400">
            <div className="w-0.5 h-8 bg-slate-300" />
            <ArrowDown className="w-5 h-5 -mt-1 text-slate-400" />
          </div>

          {/* Central Hub: TORKK */}
          <div className="w-full max-w-md bg-gradient-to-r from-blue-900 via-[#0B132B] to-slate-900 text-white py-6 px-10 rounded-3xl shadow-2xl border border-slate-700/80 text-center relative glow-effect">
            <span className="text-xs font-semibold uppercase tracking-widest text-pink-400 block mb-1">
              Core Platform
            </span>
            <span className="text-3xl sm:text-4xl font-black tracking-tight">TORKK</span>
            <p className="text-xs text-slate-300 mt-1 font-normal">
              Unified Urban Mobility Engine
            </p>
          </div>

          {/* Branching Indicators */}
          <div className="w-full max-w-2xl my-4 hidden sm:flex justify-between items-center px-12">
            <div className="w-1/4 h-6 border-b-2 border-l-2 border-slate-300 rounded-bl-xl" />
            <div className="w-1/4 h-6 border-b-2 border-slate-300" />
            <div className="w-1/4 h-6 border-b-2 border-r-2 border-slate-300 rounded-br-xl" />
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-4">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#E11D48] flex items-center justify-center mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Safety</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Emergency SOS, live ride telemetry, and strict driver onboarding.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                <Bike className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Mobility</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Cabs, EV rides, autos, bikes, and hyper-local delivery in one app.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-3">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Accessibility</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Fast pickups, inclusive fares, and seamless connectivity across city zones.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Fairness</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                0% commission deductions so driver-partners keep their true earnings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
