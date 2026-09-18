import type { Metadata } from "next";
import LegalSidebar from "@/components/LegalSidebar";

export const metadata: Metadata = {
  title: "Drivers and Riders Agreement | Torkk Captain Terms",
  description:
    "Review the Drivers and Riders Agreement for Torkk Captains and Commuters. Electronic record under Information Technology Act, 2000 for bike, cab, and parcel services.",
  alternates: {
    canonical: "/legal/drivers-and-riders-agreement",
  },
};

export default function DriversAndRidersAgreementPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Legal Navigation Sidebar */}
          <LegalSidebar />

          {/* Agreement Content Area matching DRIVERANDRIDERAGREEMENT.png */}
          <article className="flex-1 max-w-4xl text-slate-800">
            <header className="mb-10 pb-6 border-b border-slate-200">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                Drivers and Riders Agreement
              </h1>
              <p className="text-sm font-medium text-slate-500">Last Updated: July 20, 2026</p>
            </header>

            <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 uppercase font-semibold">
                This document is an electronic record in terms of Information Technology Act, 2000 and rules thereunder as applicable and the provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000.
              </div>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide mb-4">
                  Terms and Conditions for Captains (Bikes & Vehicles)
                </h2>
                <p className="text-slate-600 mb-4">
                  Applicable for two-wheelers, cabs, autos, transportation, and package delivery intermediary services.
                </p>
                <p className="text-slate-600 mb-4">
                  <strong className="text-slate-900">BLACKORIGINX PRIVATE LIMITED</strong> (&ldquo;Torkk&rdquo; / &ldquo;Company&rdquo; / &ldquo;us&rdquo;, &ldquo;we&rdquo; or &ldquo;our&rdquo;) provides technology-based services and acts as an intermediary for facilitating:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-slate-600 mb-4">
                  <li>
                    On-demand transportation services by means of motor vehicles, autos, and two-wheelers (&ldquo;Transportation Services&rdquo;); and
                  </li>
                  <li>
                    Pick up and drop off services of packages from one location to another through authorized Captains (&ldquo;Package Services&rdquo;).
                  </li>
                </ol>

                <p className="text-slate-600 font-semibold mb-2">
                  The Package Services shall be further sub-categorised as follows:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600 mb-4">
                  <li><strong>Food Delivery:</strong> Pickup and deliver food parcels to customers from verified food service entities;</li>
                  <li><strong>Grocery Delivery:</strong> Pickup and deliver groceries to customers from local merchant partners; and</li>
                  <li><strong>Torkk Parcel:</strong> Pick up parcels from customers and deliver them directly to their designated recipients.</li>
                </ul>

                <p className="text-slate-600 mb-4">
                  (Transportation Services and Package Services are collectively referred to as &ldquo;Services&rdquo;) and other support services as offered by Torkk from time to time via the Company&apos;s website and the mobile application &ldquo;Torkk&rdquo; (collectively, &ldquo;Platform&rdquo;).
                </p>
                <p className="text-slate-600">
                  The Services are provided / offered by third-party vehicle operators, service providers, or riders who wish to offer such Services through the Platform (&ldquo;Captain(s)&rdquo; / &ldquo;you&rdquo;).
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide mb-4">
                  Territorial Clarification (NCT of Delhi)
                </h2>
                <p className="text-slate-600 mb-3">It is hereby expressly clarified that:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-4">
                  <li>
                    In the State of National Capital Territory of Delhi (NCT of Delhi), Torkk acts as a demand generation platform for enabling lead generation for Captains, who shall offer ride services directly to customers;
                  </li>
                  <li>
                    Torkk owns a technology-based Software-as-a-Service (&ldquo;SAAS&rdquo;) platform, which acts as a discovery platform, enabling lead generation for Captains. Captains provide or offer to provide Torkk Parcel Services on their own account, in accordance with terms agreed with customers.
                  </li>
                  <li>
                    The Services are provided to customers directly by the Captain, and Torkk acts as an intermediary technology platform. Torkk does not assume carrier liability for third-party driver actions outside explicit platform terms.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide mb-4">
                  Captain Warranties & Conduct
                </h2>
                <p className="text-slate-600 mb-4">
                  Captains represent that they possess valid motor vehicle documentation, appropriate commercial driving licenses, valid insurance, pollution under control certificates, and that they will strictly follow motor vehicular safety codes at all times.
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
