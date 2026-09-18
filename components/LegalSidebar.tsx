"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Shield, UserCheck, RefreshCw } from "lucide-react";

export default function LegalSidebar() {
  const pathname = usePathname();

  const legalLinks = [
    {
      name: "Terms of Service",
      href: "/terms-and-conditions",
      icon: FileText,
    },
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
      icon: Shield,
    },
    {
      name: "Drivers and Riders Agreement",
      href: "/legal/drivers-and-riders-agreement",
      icon: UserCheck,
    },
    {
      name: "Torkk Cancellation and Refund Policy",
      href: "/legal/cancellation-and-refund-policy",
      icon: RefreshCw,
    },
  ];

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="sticky top-28 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4 pb-3 border-b border-slate-100">
          Legal
        </h2>
        <nav className="flex flex-col space-y-1.5" aria-label="Legal documents">
          {legalLinks.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-start gap-3 p-3 rounded-2xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm font-semibold"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                }`}
              >
                <Icon
                  className={`w-4 h-4 mt-0.5 shrink-0 ${
                    isActive ? "text-pink-400" : "text-slate-400 group-hover:text-slate-600"
                  }`}
                />
                <span className="leading-snug">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-400">
          <p className="font-medium text-slate-600">Company</p>
          <p>BlackOriginX Private Limited</p>
          <p className="mt-2">Governed under the laws of the Republic of India.</p>
        </div>
      </div>
    </aside>
  );
}
