import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, PhoneCall, Radio, UserCheck, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Safety First | Torkk Secure Mobility Standards",
  description:
    "Discover Torkk's uncompromising safety philosophy. Learn about verified drivers, live ride tracking, emergency SOS, and proactive traveler protection.",
  alternates: {
    canonical: "/safety",
  },
};

export default function SafetyPage() {
  const safetyPillars = [
    {
      title: "Comprehensive Driver Verification",
      icon: UserCheck,
      description:
        "Every captain entering the Torkk ecosystem undergoes rigorous identity verification, driving license authentication, criminal record checks, and vehicle fitness validation.",
    },
    {
      title: "Real-Time Telemetry & Geofencing",
      icon: Radio,
      description:
        "Automated algorithms actively monitor vehicle speeds, unauthorized route divergences, and anomalous stationary intervals throughout every ride.",
    },
    {
      title: "Direct Integrated Emergency SOS",
      icon: PhoneCall,
      description:
        "A prominent, one-tap SOS feature connects immediately to emergency dispatch services (112) and our 24/7 dedicated crisis mitigation unit, relaying real-time coordinates.",
    },
    {
      title: "Encrypted Ride Sharing Links",
      icon: Lock,
      description:
        "Commuters can share end-to-end encrypted tracking links with loved ones, enabling instant visibility over trip progress without requiring app downloads.",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Safety Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
            Core Brand Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Safety Built into Every Kilometer
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            At Torkk, safety is not an afterthought or an optional premium add-on. We design our technology, community standards, and operational guidelines around the absolute sanctity of passenger and captain well-being.
          </p>
        </div>
      </section>

      {/* Safety Philosophy */}
      <section className="py-16 bg-slate-50 border-y border-slate-100 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Our Proactive Philosophy
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                Most ride-hailing services react to safety incidents only after they occur. Torkk's architectural approach is fundamentally <strong>preventative</strong>.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                By eliminating high platform commissions, we drastically reduce driver economic stress, reckless speeding to chase unachievable volume bonuses, and off-platform cash extortion. When drivers are treated with fairness and respect, ride interactions become inherently safer, calmer, and more professional.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Zero-tolerance policy for harassment or discrimination</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Mandatory periodic facial and document re-verification</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0A0E27] text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl space-y-6">
              <span className="text-xs font-semibold text-pink-400 uppercase tracking-widest block">
                Responsible Mobility
              </span>
              <h3 className="text-2xl font-bold">Safety-First Product Design</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every software interface element—from simplified booking prompts to persistent emergency buttons—is designed for intuitive accessibility, even during high-stress situations.
              </p>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300">
                Live 24/7 Rapid Response Unit standing by for every trip dispatched across Delhi NCR.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Technology & Preventative Safeguards
          </h2>
          <p className="text-base text-slate-600">
            How our engineering team translates the safety philosophy into reliable daily transit protection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {safetyPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#E11D48] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-10 sm:p-14 border border-slate-800">
          <h2 className="text-3xl font-extrabold mb-4">Experience Safer Everyday Travel</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Have questions about our driver verification or safety standards? Connect with our safety officers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#E11D48] hover:bg-rose-600 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-md active:scale-95"
          >
            <span>Inquire About Safety Protocols</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
