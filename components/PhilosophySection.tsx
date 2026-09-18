import React from "react";
import { Check, Shield, Globe2, Cpu, TrendingUp } from "lucide-react";

export default function PhilosophySection() {
  const philosophies = [
    {
      title: "Simple",
      tagline: "Easy experience",
      desc: "Transportation should be easy to understand and use, free from convoluted pricing structures and deceptive fees.",
      icon: Check,
      color: "text-blue-500 bg-blue-50",
    },
    {
      title: "Safe",
      tagline: "Safety focused",
      desc: "Safety is not an optional add-on; it is fundamentally baked into the core hardware, software, and vetting lifecycle.",
      icon: Shield,
      color: "text-pink-500 bg-pink-50",
    },
    {
      title: "Accessible",
      tagline: "For everyone",
      desc: "Mobility should be available to commuters across diverse income brackets and regional transit requirements.",
      icon: Globe2,
      color: "text-emerald-500 bg-emerald-50",
    },
    {
      title: "Technology Driven",
      tagline: "Real-world solutions",
      desc: "We write software that solves physical, on-the-ground transit pain points rather than purely speculative financial engineering.",
      icon: Cpu,
      color: "text-purple-500 bg-purple-50",
    },
    {
      title: "Scalable",
      tagline: "Sustainable growth",
      desc: "Building a durable, multi-city infrastructure designed to empower drivers and communities for decades to come.",
      icon: TrendingUp,
      color: "text-amber-500 bg-amber-50",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            How We Think About Mobility
          </h2>
          <p className="text-lg text-slate-600">
            Our engineering, operations, and community guidelines follow five foundational principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophies.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/70 hover:bg-white hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                <div className="text-xs font-semibold text-[#E11D48] uppercase tracking-wider mb-3">
                  {item.tagline}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
