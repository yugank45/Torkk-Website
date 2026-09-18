import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Target, Eye, ShieldCheck, HeartHandshake, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About Torkk | Transforming Everyday Urban Mobility",
  description:
    "Learn about Torkk and parent company BlackOriginX. Discover why we exist, our safety philosophy, mission, and commitment to fair urban mobility.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
            About Our Company
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Building Smarter, Safer, and Fairer Transit for India
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Torkk is a modern urban mobility brand developed by <strong>BlackOriginX Private Limited</strong>. We engineer digital infrastructure to solve the genuine real-world friction experienced by everyday commuters and driver-partners.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-16 bg-slate-50 border-y border-slate-100 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
                The Inception
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Why We Exist
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                India’s metropolitan transportation ecosystem has long suffered from misaligned incentives. High commission deductions (often reaching 25% to 35% on competing platforms) leave drivers struggling to maintain reasonable earnings, resulting in frequent cancellations, device juggling, and rider anxiety.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Concurrently, riders are confronted with sudden surge penalties, inconsistent safety standards, and limited driver accountability. Torkk was conceived to realign this relationship through transparent, zero-commission economics and uncompromising rider security.
              </p>
              <div className="flex items-center gap-4 text-sm font-semibold text-slate-900">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-pink-500" />
                  <span>Driver Dignity</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-sky-500" />
                  <span>Commuter Peace of Mind</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-card-hover space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Our Core Philosophy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We believe transportation is a public necessity, not a luxury arbitrage opportunity. Technology should reduce costs, not inflate them through artificial surge multipliers.
              </p>
              <div className="border-l-4 border-[#E11D48] pl-4 py-1 text-slate-800 font-medium italic text-sm">
                “When driver-partners are treated fairly, riders naturally receive the safest, most reliable journey imaginable.”
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
              <p className="text-slate-300 text-base leading-relaxed">
                To build an equitable, technology-driven mobility ecosystem that makes daily transportation safer, simpler, and accessible for millions of people across urban India.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-400">
              Long-term Urban Transformation
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 border border-blue-800/60 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-400/20 text-sky-300 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
              <p className="text-slate-200 text-base leading-relaxed">
                Our mission is to harness state-of-the-art telematics, algorithmic dispatch, and transparent zero-commission pricing to elevate the mobility experience for riders, drivers, and city communities.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-blue-800/80 text-xs text-blue-200">
              Committed Execution Strategy
            </div>
          </div>
        </div>
      </section>

      {/* About BlackOriginX Corporate Section */}
      <section id="blackoriginx" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-3">
              <Building2 className="w-4 h-4" />
              <span>Parent Entity</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              BlackOriginX Private Limited
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              BlackOriginX Private Limited is an Indian technology enterprise committed to engineering transformative consumer and enterprise digital platforms. Through research into urban transit logistics, artificial intelligence, and community-first monetization models, BlackOriginX brings modern digital infrastructure to vital economic sectors.
            </p>
            <p className="text-sm text-slate-500">
              Corporate Headquarters: Delhi NCR, India. Domain: <a href="https://www.torkk.in" className="text-slate-900 font-medium underline">www.torkk.in</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#0A0E27] text-white rounded-3xl p-10 sm:p-14 border border-slate-800">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Let’s Build the Future of Mobility.
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Have a question, idea, fleet inquiry, or strategic partnership opportunity? We’d love to connect.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-white text-slate-950 hover:bg-slate-100 font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-md active:scale-95"
          >
            <span>Get in Touch with Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
