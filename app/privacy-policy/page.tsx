import type { Metadata } from "next";
import LegalSidebar from "@/components/LegalSidebar";

export const metadata: Metadata = {
  title: "Privacy Policy | Torkk & BlackOriginX",
  description:
    "Review Torkk's Privacy Policy. Understand how BlackOriginX Private Limited collects, safeguards, and processes commuter and captain data in India.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Legal Navigation Sidebar */}
          <LegalSidebar />

          {/* Legal Content Area matching PrivacyPolicy.png */}
          <article className="flex-1 max-w-4xl text-slate-800">
            <header className="mb-10 pb-6 border-b border-slate-200">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                Privacy Policy
              </h1>
              <p className="text-sm font-medium text-slate-500">Last Updated: July 20, 2026</p>
            </header>

            <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed">
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide mb-4">
                  User Acceptance
                </h2>
                <p className="text-slate-600 mb-4">
                  By accessing or using the Torkk Platform or the Services, you agree and consent to this Policy, along with any amendments made by BlackOriginX Private Limited (&ldquo;the Company&rdquo;) at its sole discretion and posted on the Torkk Platform from time to time.
                </p>
                <p className="text-slate-600 mb-4">
                  Any collection, processing, retrieval, transfer, use, storage, disclosure, and protection of your Information will be in accordance with this Policy and applicable laws, including but not limited to the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023, and the rules framed thereunder (&ldquo;Applicable Laws&rdquo;). If you do not agree with the Policy, please do not use or access the Torkk Platform.
                </p>
                <p className="text-slate-600 font-semibold mb-2">You hereby represent to Torkk that:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    The Information you provide to Torkk from time to time is and will be authentic, correct, current, and updated, and you have all rights, permissions, and consents required to provide such Information to Torkk.
                  </li>
                  <li>
                    Your providing of Information, as well as Torkk&apos;s consequent storage, collection, usage, transfer, access, or processing of such Information, will not violate any agreement, Applicable Laws, charter documents, judgments, orders, or decrees.
                  </li>
                  <li>
                    If you disclose to us any Information relating to other people, you represent that you have the lawful authority to do so and to permit us to process such Information in accordance with this Policy.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide mb-4">
                  Definitions
                </h2>
                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong className="text-slate-900">&ldquo;Captains&rdquo;</strong> means independent third-party vehicle operators or riders who offer transit or courier services on the Torkk Platform.
                  </p>
                  <p>
                    <strong className="text-slate-900">&ldquo;Customer&rdquo;</strong> means an individual who requests or receives services of the Captains or Vendor Partners via the Torkk Platform.
                  </p>
                  <p>
                    <strong className="text-slate-900">&ldquo;Personal Information&rdquo;</strong> means categories of information that could reasonably be used to identify you personally, including your legal name, contact phone number, email address, payment verification token, and exact GPS coordinates.
                  </p>
                  <p>
                    <strong className="text-slate-900">&ldquo;TPSP&rdquo;</strong> shall mean an authorized third-party service provider, including verified mapping, cloud hosting, and emergency dispatch platforms.
                  </p>
                  <p>
                    <strong className="text-slate-900">&ldquo;Usage Information&rdquo;</strong> includes device attributes, telemetry speeds, crash analytics, IP addresses, and interaction logs collected during app and web access.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide mb-4">
                  Information Collection and Telemetry
                </h2>
                <p className="text-slate-600 mb-4">
                  To ensure real-time commuter safety and reliable vehicle routing, Torkk collects precise location data from Captain and Customer devices while trips are actively requested or underway. This telemetry is transmitted across secure TLS-encrypted channels to ensure trip tracking and emergency SOS capabilities.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide mb-4">
                  Data Retention & Security
                </h2>
                <p className="text-slate-600 mb-4">
                  We employ industry-standard encryption, strict access controls, and regular vulnerability audits to protect your stored personal data. Data is retained strictly as long as necessary for fulfilling transit operations, legal audits, and safety compliance under Indian statutes.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-base font-bold text-slate-900 mb-2">Grievance Officer</h3>
                <p className="text-xs text-slate-600">
                  In accordance with the Information Technology Act, 2000, grievances regarding data processing may be directed to our designated officer:
                  <br />
                  <strong className="text-slate-800">BlackOriginX Private Limited</strong> | Attention: Grievance Redressal
                  <br />
                  Email: privacy [at] torkk.in | Delhi NCR, India.
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
