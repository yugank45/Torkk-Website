import React from "react";
import { Milestone, ArrowRight, ShieldCheck, Zap, Network } from "lucide-react";

export default function FutureVision() {
  const phases = [
    {
      phase: "NOW",
      subtitle: "Foundation & Safety",
      status: "In Active Development",
      icon: ShieldCheck,
      color: "bg-pink-50 text-[#E11D48] border-pink-200",
      badgeColor: "bg-pink-100 text-[#E11D48]",
      points: [
        "Core zero-commission mobility dispatch platform",
        "Rigorous captain verification & KYC infrastructure",
        "Live ride tracking telemetry & rapid SOS response in Delhi NCR",
      ],
    },
    {
      phase: "NEXT",
      subtitle: "EV & Multimodal Scale",
      status: "Building Toward",
      icon: Zap,
      color: "bg-sky-50 text-sky-600 border-sky-200",
      badgeColor: "bg-sky-100 text-sky-700",
      points: [
        "Transition toward high-density EV mobility solutions",
        "Integrated hyper-local logistics and smart parcel delivery",
        "Metro and urban mass-transit last-mile synchronization",
      ],
    },
    {
      phase: "FUTURE",
      subtitle: "Intelligent Urban Transit",
      status: "Long-term Horizon",
      icon: Network,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      badgeColor: "bg-purple-100 text-purple-700",
      points: [
        "AI-driven predictive demand mapping to minimize dead-kilometers",
        "Expansion across major tier-1 & tier-2 metropolitan hubs",
        "Autonomous-ready fleet dispatch and clean energy integration",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
            Where We’re Going
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Future Vision & Roadmap
          </h2>
          <p className="text-lg text-slate-600">
            We are building toward an equitable future of mobility. Here is our deliberate progression from initial city deployment to holistic transit transformation.
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {phases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.phase}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-slate-900 tracking-wider">
                      {item.phase}
                    </span>
                    <span className={`text-[11px] font-bold uppercase px-3 py-1 rounded-full ${item.badgeColor}`}>
                      {item.status}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-6 border`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.subtitle}</h3>

                  <ul className="space-y-3">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium">
                  Phase 0{idx + 1} Architecture
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
