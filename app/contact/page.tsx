import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Building2, MessageSquare, Handshake, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Torkk Mobility & Partnerships",
  description:
    "Get in touch with Torkk and BlackOriginX Private Limited. Contact our team for general inquiries, fleet partnerships, investor relations, or careers.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Let’s Build the Future of Mobility.
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Have a question, feedback, fleet partnership proposal, or startup inquiry? Reach out to the Torkk and BlackOriginX team.
          </p>
        </div>
      </section>

      {/* Main Grid: Form on Left/Right, Info on the other */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Contact Details & Company Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Channels Card */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#E11D48]" />
                <span>Direct Contact Channels</span>
              </h2>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800 block">General & Support</span>
                    <span className="text-slate-600">contact [at] torkk.in</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Handshake className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Partnerships & Fleets</span>
                    <span className="text-slate-600">partners [at] torkk.in</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Careers & Talent</span>
                    <span className="text-slate-600">careers [at] torkk.in</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Entity Details */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span>Company Information</span>
              </h2>
              <div className="space-y-3 text-sm text-slate-600">
                <p>
                  <strong className="text-slate-900">Legal Entity:</strong> BlackOriginX Private Limited
                </p>
                <p>
                  <strong className="text-slate-900">Brand:</strong> Torkk (Mobility Technology Brand)
                </p>
                <p>
                  <strong className="text-slate-900">Headquarters:</strong> Delhi NCR, India
                </p>
                <p>
                  <strong className="text-slate-900">Website:</strong> www.torkk.in
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
                Operating in compliance with Indian Information Technology Act, 2000 and Motor Vehicles Act guidelines.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
