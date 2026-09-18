"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail, MapPin } from "lucide-react";
import TorkkLogo from "./TorkkLogo";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0E27] text-white pt-16 pb-8 overflow-hidden relative selection:bg-[#E11D48]">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Driver Partner CTA Banner matching Desktop.png */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900/80 to-purple-950/50 border border-slate-800/80 p-8 sm:p-12 mb-16 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/30">
                <ShieldCheck className="w-3.5 h-3.5" /> Captain & Driver Partners
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Drive with Torkk.<br className="hidden sm:block" /> Earn on Your Schedule.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                Become a Torkk Captain and experience 0% platform commission with guaranteed transparent earnings. Work when you want and grow your income with every trip.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center lg:justify-end gap-4">
              <Link
                href="/contact?category=driver-partner"
                className="inline-flex items-center justify-center gap-2.5 bg-[#0F172A] hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-full border border-slate-700 transition-all duration-200 shadow-lg hover:shadow-pink-500/10 group active:scale-95"
              >
                <span>Drive with Torkk</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center text-slate-300 hover:text-white px-5 py-3.5 text-sm font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-slate-800/80">
          {/* Brand Info & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <TorkkLogo className="h-8" isWhite={true} />
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Building safer, simpler and smarter mobility for everyday India. Developed by <strong className="text-slate-200 font-semibold">BlackOriginX Private Limited</strong>.
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> Delhi NCR, India
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> contact [at] torkk.in
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Discover */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Discover
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/vision" className="text-slate-300 hover:text-white transition-colors">
                    Vision & Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="/safety" className="text-slate-300 hover:text-white transition-colors">
                    Safety First
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                    Mobility Services
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-slate-300 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-slate-300 hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Legal
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/privacy-policy" className="text-slate-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-slate-300 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/legal/drivers-and-riders-agreement" className="text-slate-300 hover:text-white transition-colors">
                    Drivers & Riders Agreement
                  </Link>
                </li>
                <li>
                  <Link href="/legal/cancellation-and-refund-policy" className="text-slate-300 hover:text-white transition-colors">
                    Cancellation & Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social / Connect */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Connect
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://x.com/torkkofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current text-sky-400" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>X (Twitter)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/torkkride"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/torkkapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current text-pink-400" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large Stylized Background Watermark */}
        <div className="relative py-6 flex justify-center items-center select-none overflow-hidden opacity-10">
          <span className="text-[7rem] sm:text-[11rem] md:text-[15rem] font-black tracking-tighter text-white/40 leading-none">
            TORKK
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 BlackOriginX Private Limited. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/terms-and-conditions" className="hover:text-slate-200 transition-colors">
              Terms and Services
            </Link>
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div>
            <span className="text-slate-500 font-mono text-[11px]">Domain: www.torkk.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
