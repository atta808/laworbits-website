import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    // UPDATED: Main background is pure richBlack
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-richBlack overflow-hidden pt-28 pb-16">
      {/* NEW ANIMATION: The Expanding White Circle 
        - `bg-white/5`: Subtle white light
        - `blur-[120px]`: Makes it soft and glowing
        - `animate-pulse-slow`: Custom animation for expansion (defined in globals.css)
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow z-0"></div>

      {/* Subtle Texture Overlay (Optional, keeps it rich) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
        {/* 1. QURANIC VERSE */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 mb-8">
          <p className="text-gold-400 font-serif text-2xl md:text-3xl leading-relaxed tracking-wide mb-3">
            ﴾ إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ ﴿
          </p>
          <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-light">
            "Indeed, Allah commands justice and excellence." (Al-Nahl: 90)
          </p>
        </div>

        {/* Separator Line */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-10 opacity-50"></div>

        {/* 2. CHAMBER NAME */}
        <h2 className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 text-gold-500 font-bold tracking-[0.15em] uppercase text-sm md:text-base mb-4">
          Welcome to
        </h2>
        <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-none tracking-tight">
          LEGAL WISDOM <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-200 to-gold-500">
            HUB
          </span>
        </h1>

        {/* 3. PERSONAL IDENTITY */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 mb-8">
          <p className="text-white text-xl md:text-2xl font-serif">
            Chamber of{" "}
            <span className="font-bold text-gold-500">
              Atta Ur Rehman Dhothar
            </span>
          </p>
          <p className="text-gray-400 text-sm uppercase tracking-widest mt-2">
            Advocate High Court • 20+ Years Experience
          </p>
        </div>

        {/* 4. THE ASSURANCE */}
        <p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 text-gray-300 text-lg md:text-xl max-w-2xl mb-10 font-light italic leading-relaxed border-l-2 border-gold-500/50 pl-6 mx-auto md:mx-0 inline-block text-left">
          "If you are seeking justice, integrity, and expert legal counsel,
          <br />
          <span className="text-white font-medium not-italic">
            you have come to the right place.
          </span>
          "
        </p>

        {/* Buttons */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center">
          <a
            href="https://wa.me/923226616029"
            className="group px-8 py-4 bg-gold-500 hover:bg-gold-400 text-richBlack font-bold text-base transition-all duration-300 text-center flex items-center justify-center gap-2 min-w-[200px] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href="/practice-areas"
            className="px-8 py-4 border border-gray-600 text-gray-300 hover:border-gold-500 hover:text-gold-500 font-medium text-base transition-colors duration-200 text-center min-w-[200px]"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
