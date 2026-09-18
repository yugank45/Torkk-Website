import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center pt-24">
      <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2">
        404 Error
      </span>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-slate-600 max-w-md mx-auto mb-8 text-sm sm:text-base">
        The mobility page or resource you are looking for does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#0B132B] hover:bg-slate-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Torkk Home</span>
      </Link>
    </div>
  );
}
