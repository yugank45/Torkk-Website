"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import TorkkLogo from "./TorkkLogo";
import QRModal from "./QRModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Vision", href: "/vision" },
    { name: "Safety", href: "/safety" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 flex justify-center px-4 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-full px-5 py-2.5 shadow-pill border border-slate-200/80 flex items-center justify-between transition-shadow hover:shadow-lg"
        >
          {/* Logo */}
          <div className="flex items-center pl-1">
            <TorkkLogo className="h-7 md:h-8" />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "text-slate-950 font-semibold bg-slate-100/90"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => setIsQRModalOpen(true)}
              className="bg-[#0B132B] hover:bg-[#1E293B] text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95"
            >
              Get the app
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setIsQRModalOpen(true)}
              className="bg-[#0B132B] text-white text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              Get app
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-slate-950 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed top-20 left-4 right-4 bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 flex flex-col space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-2xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-slate-100 text-slate-950 font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQRModalOpen(true);
                }}
                className="w-full bg-[#0B132B] text-white text-center py-3 rounded-2xl font-semibold shadow-md active:scale-95 transition-transform"
              >
                Scan & Download App
              </button>
              <Link
                href="/contact"
                className="w-full bg-slate-100 text-slate-900 text-center py-3 rounded-2xl font-semibold hover:bg-slate-200 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* QR Modal */}
      <QRModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
    </>
  );
}
