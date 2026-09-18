import type { Metadata } from "next";
import Link from "next/link";
import { Car, Zap, Compass, Bike, Package, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Torkk Multimodal Urban Mobility Platform",
  description:
    "Explore Torkk's multimodal mobility services: Cab, EV Mobility, Auto, Bike, and Parcel delivery, built for clean, efficient urban transportation.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: "cab",
      name: "Cab",
      tagline: "Everyday city transportation",
      description:
        "Premium, climate-controlled sedans and hatchbacks designed for daily corporate commutes, airport transfers, and family city travel with verified professional captains.",
      icon: Car,
      color: "bg-blue-50 text-blue-600 border-blue-100",
      features: [
        "Spacious, sanitized, and inspected vehicles",
        "Transparent upfront fare estimates with zero hidden extras",
        "Experienced, thoroughly background-verified drivers",
      ],
    },
    {
      id: "ev-mobility",
      name: "EV Mobility",
      tagline: "Technology-driven electric mobility solutions",
      description:
        "Modern zero-emission electric four-wheelers and two-wheelers lowering urban carbon footprints while providing quiet, ultra-smooth daily travel across metropolitan centers.",
      icon: Zap,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      features: [
        "100% tailpipe-emission-free eco-friendly rides",
        "Smart battery and range-optimized routing algorithms",
        "Contributing to cleaner city air and sustainable transit",
      ],
    },
    {
      id: "auto",
      name: "Auto",
      tagline: "Convenient everyday transportation",
      description:
        "The quintessential Indian urban transit staple, upgraded with digital dispatch, regulated fares, no bargaining hassle, and verified captain identities.",
      icon: Compass,
      color: "bg-amber-50 text-amber-600 border-amber-100",
      features: [
        "Bypass roadside hailing and meter disputes",
        "Prompt pickup at doorstep or transit hubs",
        "Guaranteed 100% fare retention for auto captains",
      ],
    },
    {
      id: "bike",
      name: "Bike",
      tagline: "Fast and accessible urban mobility",
      description:
        "Agile two-wheeler rides engineered to maneuver through peak-hour metropolitan gridlock quickly and affordably, ideal for solo commuters.",
      icon: Bike,
      color: "bg-purple-50 text-purple-600 border-purple-100",
      features: [
        "Fastest door-to-door transit during peak traffic hours",
        "Mandatory clean helmets provided for rider safety",
        "GPS-monitored routes and verified two-wheeler captains",
      ],
    },
    {
      id: "parcel",
      name: "Parcel",
      tagline: "Technology-enabled local delivery and logistics",
      description:
        "On-demand hyper-local package and document delivery connecting households, local merchants, and small businesses with swift, secure courier tracking.",
      icon: Package,
      color: "bg-rose-50 text-[#E11D48] border-rose-100",
      features: [
        "Same-day, direct point-to-point courier delivery",
        "Digital OTP verification upon secure handover",
        "Live delivery status tracking on the platform",
      ],
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
            Multimodal Platform
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            One Mobility Platform. Multiple Ways to Move.
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Torkk unifies the entire spectrum of urban transit modalities under one seamless technological umbrella, offering commuters choice and driver-partners equal opportunity.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-12">
        {serviceCategories.map((item, idx) => {
          const Icon = item.icon;
          const isReversed = idx % 2 === 1;
          return (
            <div
              key={item.id}
              className={`rounded-3xl p-8 sm:p-12 border border-slate-200/80 bg-slate-50/70 hover:bg-slate-50 transition-colors flex flex-col ${
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10`}
            >
              <div className="w-full lg:w-1/3 flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-4 border ${item.color}`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{item.name}</h3>
                <span className="text-xs font-semibold text-slate-500 text-center mt-1">
                  {item.tagline}
                </span>
              </div>

              <div className="w-full lg:w-2/3 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {item.name} Transportation Solutions
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Service Standards:
                  </h4>
                  <ul className="space-y-2">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#0A0E27] text-white rounded-3xl p-10 sm:p-14 border border-slate-800">
          <h2 className="text-3xl font-extrabold mb-4">Partner With Us on Urban Mobility</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Are you a fleet owner, corporate commuter manager, or municipal transit partner? Connect with our team to discuss integration.
          </p>
          <Link
            href="/contact?category=business-partnership"
            className="inline-flex items-center gap-2.5 bg-white text-slate-950 hover:bg-slate-100 font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm active:scale-95"
          >
            <span>Partner with Torkk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
