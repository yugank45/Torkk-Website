import type { Metadata } from "next";
import LegalSidebar from "@/components/LegalSidebar";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Torkk Mobility",
  description:
    "Review Torkk's Cancellation and Refund Policy. Operated by BlackOriginX Private Limited under Consumer Protection Act, 2019 and RBI payment regulations.",
  alternates: {
    canonical: "/legal/cancellation-and-refund-policy",
  },
};

export default function CancellationAndRefundPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Legal Navigation Sidebar */}
          <LegalSidebar />

          {/* Policy Content Area matching Torkk Cancellation and Refund Policy.png */}
          <article className="flex-1 max-w-4xl text-slate-800">
            <header className="mb-10 pb-6 border-b border-slate-200">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                Torkk Cancellation and Refund Policy
              </h1>
              <p className="text-sm font-medium text-slate-500">Last Updated: July 20, 2026</p>
            </header>

            <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <strong>Brand Name:</strong> Torkk &nbsp;|&nbsp; <strong>Operated by:</strong> BLACKORIGINX PRIVATE LIMITED
              </div>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide mb-4">
                  Cancellation &amp; Refund Framework
                </h2>
                <p className="text-slate-600 mb-4">
                  This Cancellation and Refund Policy (&ldquo;Policy&rdquo;) establishes the terms, conditions, and operational parameters governing the cancellation of service bookings, allocation of convenience charges, and processing of monetary refunds for rides, deliveries, and associated mobility services provided through the Torkk mobile application or digital ecosystem.
                </p>
                <p className="text-slate-600 mb-4">
                  This Policy constitutes a binding legal addendum to the User Terms of Service between <strong className="text-slate-900">BLACKORIGINX PRIVATE LIMITED</strong> (&ldquo;the Company&rdquo;, &ldquo;Torkk&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo;) and the registered consumer (&ldquo;User&rdquo;, &ldquo;Passenger&rdquo;, &ldquo;You&rdquo;).
                </p>
                <p className="text-slate-600">
                  Torkk functions under strict compliance with the Consumer Protection Act, 2019, the Consumer Protection (E-Commerce) Rules, 2020, and the regulatory frameworks established by the Central Consumer Protection Authority (CCPA) and the Reserve Bank of India (RBI).
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide mb-4">
                  1. Core Definitions &amp; Policy Scope
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    <strong className="text-slate-900">1.1 Platform Services:</strong> Refers to the ride-hailing, bike-taxi matching, auto-rickshaw pooling, hyper-local package delivery, and courier logistics software routed via the Torkk app.
                  </li>
                  <li>
                    <strong className="text-slate-900">1.2 Torkk Captain / Partner:</strong> The independent driver, vehicle operator, or delivery rider contracted to fulfill the transaction requested by the User.
                  </li>
                  <li>
                    <strong className="text-slate-900">1.3 Booking Confirmation:</strong> The precise moment the Torkk algorithmic engine matches a User&apos;s request with a nearby Captain, generating a unique booking ID.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide mb-4">
                  2. Passenger Cancellation Terms
                </h2>
                <p className="text-slate-600 mb-3">
                  Users may cancel an active trip request subject to the following fair-use terms:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    <strong>Grace Period:</strong> Cancellations made within the initial designated grace window (typically 2 minutes from matching) incur no cancellation fee.
                  </li>
                  <li>
                    <strong>Captain En-Route:</strong> If cancelled after a Captain has traveled substantially towards the pickup location, a nominal compensatory charge may be credited directly to the Captain to cover fuel and time expenditure.
                  </li>
                  <li>
                    <strong>Captain Delay Exemption:</strong> If the assigned Captain is delayed by more than 5 minutes past the initial estimated time of arrival (ETA), the User may cancel without any penalty.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide mb-4">
                  3. Refund Mechanism &amp; Timelines
                </h2>
                <p className="text-slate-600 mb-4">
                  Eligible refunds for overcharges, canceled prepaid trips, or service anomalies are processed directly back to the original payment source (UPI, Debit/Credit Card, Net Banking) in strict accordance with RBI turnaround timelines (typically 5 to 7 business banking days).
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
