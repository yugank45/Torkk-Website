"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRModal({ isOpen, onClose }: QRModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div className="relative flex flex-col items-center">
        {/* Close button above card */}
        <button
          onClick={onClose}
          aria-label="Close QR Modal"
          className="mb-4 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
        >
          <X className="w-8 h-8 stroke-[2.5]" />
        </button>

        {/* Modal Card */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl max-w-sm w-full text-center flex flex-col items-center"
        >
          <h2 id="modal-title" className="text-2xl md:text-[26px] font-bold text-slate-900 tracking-tight mb-6">
            Scan to Download<br />the TORKK app
          </h2>

          {/* QR Code Container */}
          <div className="p-3 bg-white border border-slate-100 rounded-2xl shadow-inner mb-7">
            {/* SVG QR Code */}
            <svg
              viewBox="0 0 200 200"
              className="w-48 h-48 md:w-52 md:h-52"
              fill="currentColor"
            >
              {/* Corner 1 */}
              <rect x="10" y="10" width="50" height="50" rx="6" fill="#0F172A" />
              <rect x="20" y="20" width="30" height="30" rx="3" fill="#FFFFFF" />
              <rect x="27" y="27" width="16" height="16" rx="2" fill="#0F172A" />

              {/* Corner 2 */}
              <rect x="140" y="10" width="50" height="50" rx="6" fill="#0F172A" />
              <rect x="150" y="20" width="30" height="30" rx="3" fill="#FFFFFF" />
              <rect x="157" y="27" width="16" height="16" rx="2" fill="#0F172A" />

              {/* Corner 3 */}
              <rect x="10" y="140" width="50" height="50" rx="6" fill="#0F172A" />
              <rect x="20" y="150" width="30" height="30" rx="3" fill="#FFFFFF" />
              <rect x="27" y="157" width="16" height="16" rx="2" fill="#0F172A" />

              {/* Data Blocks */}
              <rect x="70" y="15" width="10" height="10" fill="#0F172A" />
              <rect x="90" y="15" width="20" height="10" fill="#0F172A" />
              <rect x="120" y="15" width="10" height="10" fill="#0F172A" />
              
              <rect x="70" y="35" width="20" height="10" fill="#0F172A" />
              <rect x="100" y="35" width="10" height="10" fill="#0F172A" />
              <rect x="120" y="35" width="10" height="20" fill="#0F172A" />

              <rect x="15" y="70" width="10" height="20" fill="#0F172A" />
              <rect x="35" y="70" width="20" height="10" fill="#0F172A" />
              <rect x="70" y="65" width="20" height="20" rx="2" fill="#E11D48" />
              <rect x="100" y="65" width="30" height="10" fill="#0F172A" />
              <rect x="140" y="70" width="20" height="10" fill="#0F172A" />
              <rect x="170" y="70" width="15" height="20" fill="#0F172A" />

              <rect x="15" y="100" width="20" height="10" fill="#0F172A" />
              <rect x="45" y="95" width="10" height="25" fill="#0F172A" />
              <rect x="70" y="95" width="10" height="30" fill="#0F172A" />
              <rect x="90" y="85" width="20" height="20" fill="#0F172A" />
              <rect x="120" y="95" width="20" height="10" fill="#0F172A" />
              <rect x="150" y="100" width="35" height="10" fill="#0F172A" />

              <rect x="70" y="135" width="30" height="10" fill="#0F172A" />
              <rect x="110" y="125" width="20" height="20" fill="#0F172A" />
              <rect x="140" y="130" width="10" height="30" fill="#0F172A" />
              <rect x="160" y="130" width="25" height="10" fill="#0F172A" />

              <rect x="70" y="155" width="10" height="25" fill="#0F172A" />
              <rect x="90" y="165" width="30" height="15" fill="#0F172A" />
              <rect x="130" y="170" width="20" height="10" fill="#0F172A" />
              <rect x="160" y="160" width="25" height="20" fill="#0F172A" />
            </svg>
          </div>

          {/* Store Buttons */}
          <div className="flex items-center justify-center gap-3 w-full">
            <a
              href="#app-store"
              className="flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-xl text-left hover:bg-neutral-800 transition-colors shadow-sm"
              title="Download on Apple App Store"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.06-.51 2.68-1.26z" />
              </svg>
              <div>
                <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium">Download on the</div>
                <div className="text-xs font-semibold -mt-0.5">App Store</div>
              </div>
            </a>

            <a
              href="#google-play"
              className="flex items-center gap-2 bg-neutral-100 text-neutral-900 border border-neutral-200 px-3.5 py-2 rounded-xl text-left hover:bg-neutral-200 transition-colors shadow-sm"
              title="Get it on Google Play"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M3.6 2.4L13.8 12 3.6 21.6c-.4-.4-.6-1-.6-1.7V4.1c0-.7.2-1.3.6-1.7z" />
                <path fill="#FBBC04" d="M17.3 8.6L13.8 12l3.5 3.4 3.9-2.2c1.1-.6 1.1-1.7 0-2.3l-3.9-2.3z" />
                <path fill="#EA4335" d="M13.8 12L3.6 21.6c.7.7 1.8.8 2.7.3l11-6.5L13.8 12z" />
                <path fill="#34A853" d="M17.3 8.6L6.3 2.1c-.9-.5-2-.4-2.7.3L13.8 12l3.5-3.4z" />
              </svg>
              <div>
                <div className="text-[9px] uppercase tracking-wider text-neutral-500 font-medium">GET IT ON</div>
                <div className="text-xs font-semibold -mt-0.5">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
