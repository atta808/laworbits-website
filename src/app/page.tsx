import Hero from "@/components/sections/Hero";
import CredentialsGrid from "@/components/sections/CredentialsGrid";
import PracticeAreasPreview from "@/components/sections/PracticeAreasPreview";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section (First Impression) */}
      <Hero />

      {/* 2. Credentials (Authority & Trust) */}
      <CredentialsGrid />

      {/* 3. About / Introduction Snippet */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold-600 font-bold tracking-widest text-sm uppercase">
              About The Advocate
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-richBlack mt-4 mb-8 leading-tight">
              Two Decades of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">
                Unwavering Legal Service
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Atta Ur Rehman Dhothar is a senior Advocate of the High Court with
              over 20 years of experience. Based in Mandi Bahauddin and serving
              clients globally, he has established a reputation for strategic
              litigation, ethical counsel, and relentless advocacy.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether navigating complex property disputes for Overseas
              Pakistanis or defending critical criminal cases in the High Court,
              his approach combines deep legal wisdom with modern efficiency.
            </p>

            <div className="space-y-4">
              {[
                "High Court & District Court Representation",
                "Specialized in Overseas Pakistani Legal Affairs",
                "Proven Track Record in Complex Litigation",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gold-600" />
                  </div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Abstract Visual Element since we don't have a photo yet */}
            <div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden border-l-4 border-gold-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-richBlack/5 rounded-tr-full"></div>
              <div className="flex items-center justify-center h-full">
                <blockquote className="max-w-sm text-center px-6">
                  <p className="font-serif text-2xl text-richBlack italic mb-4">
                    "Justice is not just a profession; it is a commitment to
                    truth and the rule of law."
                  </p>
                  <footer className="text-sm font-bold text-gold-600 uppercase tracking-widest">
                    — Atta Ur Rehman Dhothar
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Practice Areas (Services) */}
      <PracticeAreasPreview />

      {/* 5. CTA / Map Section */}
      <section className="py-20 bg-neutral-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-richBlack mb-6">
            Secure Your Legal Interests Today
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Do not leave your legal matters to chance. Consult with a senior
            expert.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/923226616029"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-richBlack font-bold text-lg transition-all shadow-lg hover:shadow-gold-500/20"
            >
              Consult via WhatsApp
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white border border-gray-300 hover:border-gold-500 text-gray-800 font-bold text-lg transition-all"
            >
              View Office Location
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
