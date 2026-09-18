import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Zap, Shield, Network, MapPin } from "lucide-react";
import FutureVision from "@/components/FutureVision";

export const metadata: Metadata = {
  title: "Vision & Roadmap | Torkk Future Mobility Ecosystem",
  description:
    "Explore Torkk's vision and technology roadmap for Indian urban mobility. Learn how we are expanding multimodal EV transit and smart infrastructure.",
  alternates: {
    canonical: "/vision",
  },
};

export default function VisionPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Vision Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
            Future Direction
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Pioneering the Next Generation of Everyday Transit
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            We envision an urban transportation network where every journey is reliable, ethically priced, environmentally sustainable, and safeguarded by intelligent engineering.
          </p>
        </div>
      </section>

      {/* Urban Realities: Delhi NCR Focus */}
      <section className="py-16 bg-slate-50 border-y border-slate-100 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-3">
                <MapPin className="w-4 h-4" />
                <span>Urban Indian Realities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
                Starting with Urban India & Delhi NCR
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                Torkk is engineered around the distinctive realities of metropolitan Indian cities. Beginning with the high-density corridors of the Delhi National Capital Region (NCR), our routing engines account for complex local geography, multi-point pickups, and peak-hour density shifts.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Rather than treating all urban environments identically, Torkk tailors vehicle allocation, battery-swap coordination for EV fleets, and localized safety dispatch around real-world municipal conditions.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Regional Transit Realities</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-500 mt-2 shrink-0" />
                  <span>Integrated multi-modal connectivity with metro rapid transit terminals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" />
                  <span>Sub-kilometer auto-rickshaw and bike dispatch for crowded last-mile streets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>Localized 24/7 security dispatch coordinated with territorial civic safety cells.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable FutureVision Roadmap Component */}
      <FutureVision />

      {/* Sustainable Electric Mobility Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#0A0E27] text-white rounded-3xl p-8 sm:p-14 border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-2 block">
              Sustainability Milestone
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
              Accelerating India’s Clean EV Transition
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              True modernization cannot come at the expense of urban air quality. Torkk is actively building toward full electric vehicle fleet integration across two, three, and four-wheeler tiers.
            </p>
            <Link
              href="/contact?category=business-partnership"
              className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-sm active:scale-95"
            >
              <span>Partner as an EV Fleet Operator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
