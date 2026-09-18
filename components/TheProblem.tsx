import React from "react";
import { AlertCircle, ShieldAlert, Split } from "lucide-react";

export default function TheProblem() {
  const problems = [
    {
      number: "01",
      title: "Mobility Challenges",
      icon: AlertCircle,
      description:
        "Daily commuters battle unpredictable surge multipliers, frequent ride cancellations, and extended waiting times during peak urban hours.",
      impact: "High frustration & lost commuter time"
    },
    {
      number: "02",
      title: "Safety Concerns",
      icon: ShieldAlert,
      description:
        "Commuters frequently experience unverified drivers, offline payment extortion, lack of ride telemetry, and minimal emergency support when navigating unfamiliar routes.",
      impact: "Compromised peace of mind"
    },
    {
      number: "03",
      title: "Fragmented Experience",
      icon: Split,
      description:
        "Connecting cabs, auto-rickshaws, bikes, and package logistics across city zones currently requires juggling disparate apps with opaque pricing.",
      impact: "Disjointed everyday transit"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Mobility Should Be Simpler.
          </h2>
          <p className="text-lg text-slate-600">
            Urban transit in India is critical yet burdened with systemic friction. Torkk addresses these persistent pain points with thoughtful product design.
          </p>
        </div>

        {/* 3 Visual Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.number}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-200 tracking-tight">
                      {prob.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{prob.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{prob.description}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-[#E11D48] uppercase tracking-wide">
                    Core Friction:
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5">{prob.impact}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
