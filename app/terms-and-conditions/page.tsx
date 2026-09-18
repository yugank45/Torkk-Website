import type { Metadata } from "next";
import LegalSidebar from "@/components/LegalSidebar";

export const metadata: Metadata = {
  title: "Terms of Service | Torkk Legal & Compliance",
  description:
    "Review Torkk's Terms of Service. Governed by BlackOriginX Private Limited, outlining platform access, user accounts, safety standards, and fair transit rules.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Legal Navigation Sidebar */}
          <LegalSidebar />

          {/* Terms Content Area matching TermsOfService.png */}
          <article className="flex-1 max-w-4xl text-slate-800">
            <header className="mb-10 pb-6 border-b border-slate-200">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                Terms of Service
              </h1>
              <p className="text-sm font-medium text-slate-500">Last Updated: July 20, 2026</p>
            </header>

            <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed">
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="text-slate-600 mb-4">
                  These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&ldquo;you&rdquo;) and BlackOriginX Private Limited (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), concerning your access to and use of the Torkk brand website and digital mobility applications.
                </p>
                <p className="text-slate-600">
                  By accessing or using our services, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, you are expressly prohibited from using the application and services and must discontinue use immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  2. User Accounts & Safety
                </h2>
                <p className="text-slate-600 mb-4 italic">
                  In short: You must maintain accurate information and respect community safety guidelines when using Torkk.
                </p>
                <ul className="list-disc pl-5 space-y-3 text-slate-600">
                  <li>
                    <strong className="text-slate-900">Account Responsibility:</strong> You are responsible for safeguarding your credentials and for all activities occurring under your authorized device.
                  </li>
                  <li>
                    <strong className="text-slate-900">Driver Verification:</strong> Drivers on Torkk must provide valid commercial or private licensing, valid vehicle registration, vehicle fitness certificates, and undergo identity verification.
                  </li>
                  <li>
                    <strong className="text-slate-900">Community Standards:</strong> Zero tolerance for harassment, verbal abuse, discrimination, reckless driving, or unsafe conduct during rides.
                  </li>
                </ul>
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-medium">
                  <strong>Important Highlight:</strong> Drivers and riders must ensure all registration details are accurate and up to date. Account sharing, impersonation, or transferring trip requests to third parties is strictly prohibited.
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  3. Services & Zero-Commission Model
                </h2>
                <p className="text-slate-600 mb-4">
                  Torkk provides a digital technology intermediary platform connecting independent passengers with verified third-party vehicle operators and couriers. Torkk operates on a zero-commission policy where drivers retain 100% of their standard earned trip fares.
                </p>
                <p className="text-slate-600">
                  Torkk is not a transportation carrier; services are executed by independent third-party operators in compliance with local regional transport authority permits.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  4. Governing Law & Dispute Resolution
                </h2>
                <p className="text-slate-600">
                  These Terms of Service and your use of the platform are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Delhi NCR, India.
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
