import React from "react";
import { Car, Zap, Compass, Bike, Package, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Cab",
      tagline: "Everyday city transportation.",
      description: "Comfortable, on-demand four-wheeler transit designed for seamless metropolitan commutes.",
      icon: Car,
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "EV Mobility",
      tagline: "Technology-driven electric mobility solutions.",
      description: "Clean, sustainable zero-emission electric vehicles reducing carbon footprints across city centers.",
      icon: Zap,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      title: "Auto",
      tagline: "Convenient everyday transportation.",
      description: "Quick, accessible, and dependable three-wheeler transit for short and medium urban journeys.",
      icon: Compass,
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      title: "Bike",
      tagline: "Fast and accessible urban mobility.",
      description: "Swift two-wheeler rides engineered to breeze through congested urban traffic with speed.",
      icon: Bike,
      color: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      title: "Parcel",
      tagline: "Technology-enabled local delivery and logistics.",
      description: "Reliable, on-demand hyper-local courier delivery connecting businesses, documents, and packages.",
      icon: Package,
      color: "bg-rose-50 text-[#E11D48] border-rose-100",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
              Mobility Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              One Mobility Platform.<br />Multiple Ways to Move.
            </h2>
            <p className="text-lg text-slate-600 mt-4">
              Explore the versatile transportation modalities supported by the Torkk unified technology ecosystem.
            </p>
          </div>
          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#E11D48] transition-colors"
            >
              <span>Explore all services in detail</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 5 Services Cards Grid (strictly no pricing, booking, or subscriptions) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${srv.color} transition-transform group-hover:scale-105`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{srv.title}</h3>
                  <p className="text-sm font-semibold text-slate-700 mb-3">{srv.tagline}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{srv.description}</p>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Future Vision summary */}
          <div className="bg-gradient-to-br from-[#0B132B] to-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-pink-400 uppercase tracking-wider block mb-4">
                Future Mobility
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Expanding Transit</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We are actively architecting next-generation electric mobility corridors and autonomous dispatch technology for Indian cities.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/vision"
                className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300"
              >
                <span>Read where we’re going</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
