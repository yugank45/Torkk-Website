import React from "react";
import { Cpu, ShieldCheck, Compass, Users } from "lucide-react";

export default function WhatIsTorkk() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
            The Concept
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            What is Torkk?
          </h2>
          <p className="text-xl sm:text-2xl text-slate-700 font-medium leading-relaxed mb-6">
            A technology-driven mobility platform focused on building a smarter, fairer, and safer everyday transportation experience for India.
          </p>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Torkk connects commuters and driver-partners through a unified, zero-commission mobility infrastructure. By eliminating high commission middleman costs and prioritizing rider safety, Torkk creates an equitable ecosystem where drivers earn more and riders travel with peace of mind.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-50/80 rounded-3xl p-8 border border-slate-100 hover:shadow-card-hover transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Technology First</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Algorithmic smart dispatch and transparent matching that connects riders with the closest verified partners.
            </p>
          </div>

          <div className="bg-slate-50/80 rounded-3xl p-8 border border-slate-100 hover:shadow-card-hover transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-[#E11D48] mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Safety Centric</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Real-time telemetry, 24/7 dedicated support, background-verified captains, and instant SOS protocols.
            </p>
          </div>

          <div className="bg-slate-50/80 rounded-3xl p-8 border border-slate-100 hover:shadow-card-hover transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Urban Accessibility</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Multimodal transit solutions designed for India’s dynamic metropolitan flow, beginning with Delhi NCR.
            </p>
          </div>

          <div className="bg-slate-50/80 rounded-3xl p-8 border border-slate-100 hover:shadow-card-hover transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Fair by Design</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Zero commission deductions on standard fares so driver partners keep what they rightfully earn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
