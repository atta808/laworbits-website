import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-richBlack overflow-hidden pt-20">
      {/* Background Effects (Subtle & Premium) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] to-richBlack opacity-90 z-0"></div>
      {/* A subtle gold glow in the center behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
        {/* Top Tagline */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold-500/30 rounded-full bg-gold-500/5 backdrop-blur-sm">
            <div className="h-[2px] w-8 bg-gold-500"></div>
            <p className="text-gold-400 font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">
              Advocate High Court
            </p>
            <div className="h-[2px] w-8 bg-gold-500"></div>
          </div>
        </div>

        {/* Name: Elegant, Centered, Not "Too Big/Bold" */}
        <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white mb-8 leading-tight tracking-tight">
          Atta Ur Rehman <br className="hidden md:block" />
          <span className="text-gradient-gold font-semibold">Dhothar</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 text-gray-300 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed">
          20+ Years of Professional Legal Experience.{" "}
          <br className="hidden md:block" />A definitive authority in Civil,
          Criminal, and Corporate Law for Pakistan & Overseas Clients.
        </p>

        {/* Buttons */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400 flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <a
            href="https://wa.me/923226616029"
            className="group px-10 py-4 bg-gold-500 hover:bg-gold-400 text-richBlack font-bold text-lg transition-all duration-300 text-center flex items-center justify-center gap-2 min-w-[200px]"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href="/practice-areas"
            className="px-10 py-4 border border-gray-600 text-gray-200 hover:border-white hover:text-white font-medium text-lg transition-colors duration-200 text-center min-w-[200px]"
          >
            Our Practice Areas
          </Link>
        </div>

        {/* Trust Indicators (Centered at bottom) */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-gold-500 w-5 h-5" />
            <span>High Court Representation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-gold-500 w-5 h-5" />
            <span>Former Bar Executive</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-gold-500 w-5 h-5" />
            <span>Overseas Specialist</span>
          </div>
        </div>
      </div>
    </section>
  );
}
