"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center pt-28 pb-16">
      <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2">
        System Notice
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
        Something Went Wrong
      </h1>
      <p className="text-slate-600 max-w-md mx-auto mb-8 text-sm sm:text-base">
        An unexpected error occurred while loading this page. Please try refreshing or return home.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 bg-[#E11D48] hover:bg-rose-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try Again</span>
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#0B132B] hover:bg-slate-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Go to Home</span>
        </Link>
      </div>
    </div>
  );
}
