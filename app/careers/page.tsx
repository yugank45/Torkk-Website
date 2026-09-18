import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Users, Shield, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at Torkk | Build Everyday Mobility in India",
  description:
    "Join Torkk and BlackOriginX to transform urban mobility. Explore engineering, product, operations, and safety roles in Delhi NCR and across India.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  const values = [
    {
      title: "Real-world Impact",
      desc: "Work on physical mobility software and telemetry used by daily commuters and independent captains across cities.",
      icon: Cpu,
    },
    {
      title: "Fairness & Integrity",
      desc: "We stand for zero hidden commissions and authentic technological respect for our partners.",
      icon: Shield,
    },
    {
      title: "Autonomy & Ownership",
      desc: "Fast-paced, high-ownership engineering culture with direct responsibility for critical systems.",
      icon: Code2,
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
            Careers at Torkk
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Build the Next Frontier of Indian Urban Transit
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            At Torkk and BlackOriginX, we are solving deeply ingrained mobility challenges with algorithmic rigor and genuine community empathy.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50 border-y border-slate-100 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10 text-center">
            Why Build With Torkk?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 text-[#E11D48] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#0A0E27] text-white rounded-3xl p-10 sm:p-14 border border-slate-800 max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-2 block">
            Open Hiring
          </span>
          <h2 className="text-3xl font-extrabold mb-4">We Are Always Hiring Exceptional Talent</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Whether you are a distributed systems engineer, mobile developer, product designer, or operations leader, send us your portfolio and resume.
          </p>
          <Link
            href="/contact?category=careers"
            className="inline-flex items-center gap-2.5 bg-[#E11D48] hover:bg-rose-600 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-md active:scale-95"
          >
            <span>Submit Your Profile</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
