import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    // UPDATED: Reduced min-height to 75vh for better laptop fit
    <section className="relative w-full min-h-[75vh] flex items-center justify-center bg-richBlack overflow-hidden pt-24 pb-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] to-richBlack opacity-90 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
        {/* Tagline */}
        <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-gold-500/30 rounded-full bg-gold-500/5 backdrop-blur-sm">
            <div className="h-[1px] w-6 bg-gold-500"></div>
            <p className="text-gold-400 font-semibold tracking-[0.15em] uppercase text-[10px] md:text-xs">
              Advocate High Court
            </p>
            <div className="h-[1px] w-6 bg-gold-500"></div>
          </div>
        </div>

        {/* Name: Reduced size for laptop screens */}
        <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 leading-tight tracking-tight">
          Atta Ur Rehman <br className="hidden md:block" />
          <span className="text-gradient-gold font-semibold">Dhothar</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 text-gray-400 text-base md:text-lg max-w-2xl mb-10 font-light leading-relaxed">
          20+ Years of Professional Legal Experience.{" "}
          <br className="hidden md:block" />A definitive authority in Civil,
          Criminal, and Corporate Law.
        </p>

        {/* Buttons */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/923226616029"
            className="group px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-richBlack font-bold text-base transition-all duration-300 text-center flex items-center justify-center gap-2 min-w-[180px]"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href="/practice-areas"
            className="px-8 py-3.5 border border-gray-700 text-gray-300 hover:border-white hover:text-white font-medium text-base transition-colors duration-200 text-center min-w-[180px]"
          >
            Our Practice Areas
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400 mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-gold-600 w-4 h-4" />
            <span>High Court Representation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-gold-600 w-4 h-4" />
            <span>Former Bar Executive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
