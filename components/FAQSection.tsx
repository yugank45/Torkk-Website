"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQSchema } from "./StructuredData";

export const FAQ_DATA = [
  {
    question: "How does Torkk work?",
    answer:
      "Torkk connects commuters with verified nearby drivers through a smart, direct-dispatch platform. Riders request a ride or delivery option, the system matches the optimal captain, and the entire journey is protected by live telemetry, transparent pricing, and 24/7 safety monitoring.",
  },
  {
    question: "What makes Torkk different from existing ride services?",
    answer:
      "Torkk operates on an ethical zero-commission model for driver-partners, eliminating unpredictable surge spikes and excessive fees. Drivers keep 100% of their trip earnings, resulting in significantly higher ride acceptance rates, fewer cancellations, and happier partners.",
  },
  {
    question: "What happens in an emergency during a ride?",
    answer:
      "Every Torkk journey features a direct Emergency SOS button connected both to local law enforcement (112) and Torkk's dedicated safety dispatch room. Activating SOS instantly broadcasts precise vehicle telemetry, driver identity, and live GPS coordinates.",
  },
  {
    question: "Can I share and track my ride with family or friends?",
    answer:
      "Yes. Riders can share an end-to-end encrypted tracking link with trusted contacts. Friends and family can view vehicle speed, live map movement, and estimated arrival time without needing to install the app.",
  },
  {
    question: "How can I become a Torkk Captain or driver-partner?",
    answer:
      "Eligible commercial vehicle owners and drivers can apply online through our Captain onboarding program. Applicants undergo comprehensive KYC verification, vehicle fitness inspection, and background authentication before being enabled on the network.",
  },
  {
    question: "Which geographic regions does Torkk currently focus on?",
    answer:
      "Torkk is initiated and tailored around the urban transit realities of the Delhi NCR ecosystem, with phased expansion planned for key metropolitan transit corridors across India.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-slate-100">
      {/* Schema.org structured data for SEO rich snippets */}
      <FAQSchema items={FAQ_DATA} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Title Area */}
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Have queries regarding Torkk’s mobility model, safety standards, or captain partnerships? Here is everything you need to know.
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h3 className="text-sm font-bold text-slate-900 mb-1">Still have questions?</h3>
              <p className="text-xs text-slate-500 mb-3">Our team is here to assist commuters and partners.</p>
              <a
                href="/contact"
                className="inline-flex text-xs font-semibold text-[#E11D48] hover:text-rose-700 transition-colors"
              >
                Contact Support & Partnerships →
              </a>
            </div>
          </div>

          {/* Right Accordion List (matching Section 1.png) */}
          <div className="lg:col-span-8 flex flex-col space-y-3">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? "bg-slate-100/90 border-slate-300/80 shadow-sm"
                      : "bg-white border-slate-200/70 hover:bg-slate-50/80"
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/50">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
