import React from "react";
import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";

export default function BlackOriginXSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink-400">
              <Building2 className="w-4 h-4" />
              <span>Built by BlackOriginX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              BlackOriginX Private Limited
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Torkk is an urban mobility brand developed and operated by <strong>BlackOriginX Private Limited</strong>, a technology innovation company building purposeful digital products designed around real-world problems.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-950 hover:bg-slate-100 font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-sm active:scale-95"
            >
              <span>Learn About BlackOriginX</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
