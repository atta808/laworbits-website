import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Scale,
  BookOpen,
  Landmark,
  Gavel,
  ShieldCheck,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Atta Ur Rehman Dhothar | Advocate High Court",
  description:
    "Profile of Atta Ur Rehman Dhothar, a senior legal expert with 20+ years of experience. Former Executive Member of Lahore High Court Bar Association.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO: The Personal Brand */}
      <section className="relative pt-32 pb-20 bg-neutral-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-[2px] w-12 bg-gold-500"></div>
              <span className="text-gold-600 font-bold tracking-widest text-sm uppercase">
                The Profile
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-richBlack mb-6 leading-tight">
              Atta Ur Rehman <br />
              <span className="text-gold-500">Dhothar</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-serif text-gray-700 mb-8 italic">
              Advocate High Court • Legal Strategist • Tech Visionary
            </h2>

            <div className="prose prose-lg text-gray-600 mb-10 leading-relaxed">
              <p>
                With over two decades of immersion in the Pakistani legal
                system, I have witnessed the law evolve from paper-based
                traditions to the digital age. My practice is built on a simple,
                unshakable foundation:{" "}
                <strong>relentless preparation and ethical advocacy.</strong>
              </p>
              <p>
                As a senior legal practitioner based in Mandi Bahauddin and
                practicing across Punjab, I specialize in untangling complex
                Civil, Criminal, and Property disputes. My mission is not just
                to win cases, but to provide clarity and peace of mind to my
                clients—whether they are sitting in my chamber or contacting me
                from overseas.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 shadow-sm">
                <Scale className="text-gold-500 w-6 h-6" />
                <div>
                  <span className="block font-bold text-richBlack text-lg">
                    20+
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    Years Experience
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 shadow-sm">
                <Gavel className="text-gold-500 w-6 h-6" />
                <div>
                  <span className="block font-bold text-richBlack text-lg">
                    High Court
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    License Holder
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] bg-richBlack rounded-sm overflow-hidden border-4 border-white shadow-2xl">
              {/* PLACEHOLDER: Replace with actual portrait */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                [Insert Professional Portrait]
              </div>

              {/* Signature Overlay */}
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-white font-serif text-3xl italic">
                  Atta Ur Rehman
                </p>
                <p className="text-gold-500 text-xs uppercase tracking-widest mt-1">
                  Advocate High Court
                </p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-100 -z-10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP & CREDENTIALS (The "Badges" Requirement) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-richBlack mb-4">
              Professional Leadership
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Trusted by peers and the judiciary to hold key positions of
              responsibility within the Bar Associations.
            </p>
            <div className="h-1 w-20 bg-gold-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Role 1 */}
            <div className="flex items-start gap-6 p-6 border border-gray-100 hover:border-gold-500 hover:bg-neutral-50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-richBlack text-gold-500 flex-shrink-0 flex items-center justify-center">
                <Landmark size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-richBlack mb-1 group-hover:text-gold-600 transition-colors">
                  Former Member, Executive Committee
                </h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                  District Bar Association, Mandi Bahauddin
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Served as a key decision-maker in the administration of the
                  district bar, ensuring the welfare of legal practitioners.
                </p>
              </div>
            </div>

            {/* Role 2 */}
            <div className="flex items-start gap-6 p-6 border border-gray-100 hover:border-gold-500 hover:bg-neutral-50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-richBlack text-gold-500 flex-shrink-0 flex items-center justify-center">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-richBlack mb-1 group-hover:text-gold-600 transition-colors">
                  Former Joint Secretary
                </h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                  District Bar Association, Mandi Bahauddin
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Elected role responsible for administrative coordination and
                  managing bar association affairs.
                </p>
              </div>
            </div>

            {/* Role 3 */}
            <div className="flex items-start gap-6 p-6 border border-gray-100 hover:border-gold-500 hover:bg-neutral-50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-richBlack text-gold-500 flex-shrink-0 flex items-center justify-center">
                <Scale size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-richBlack mb-1 group-hover:text-gold-600 transition-colors">
                  Former Member, Executive Committee
                </h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Lahore High Court Bar Association, Lahore
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Represented the legal fraternity at the provincial High Court
                  level, advocating for judicial independence.
                </p>
              </div>
            </div>

            {/* Role 4 */}
            <div className="flex items-start gap-6 p-6 border border-gray-100 hover:border-gold-500 hover:bg-neutral-50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-richBlack text-gold-500 flex-shrink-0 flex items-center justify-center">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-richBlack mb-1 group-hover:text-gold-600 transition-colors">
                  Former Member, Anti-Corruption Committee
                </h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                  DBA Mandi Bahauddin (Punjab Bar Council)
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Appointed by the Punjab Bar Council to oversee ethical conduct
                  and maintain transparency within the legal system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY & VALUES */}
      <section className="py-24 bg-richBlack text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Quote className="text-gold-500 w-12 h-12 mb-6" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                "The law is not a weapon of oppression, but a{" "}
                <span className="text-gold-500">shield for the rightful</span>."
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                My legal philosophy is grounded in two principles:
                **Accessibility and Modernization**. Legal battles are
                stressful; my job is to absorb that stress through competence.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Furthermore, as the founder of **TechNaam** and **DraftDesk**, I
                believe in leveraging technology to make legal processes faster
                and more transparent. I don't just practice law; I am working to
                modernize how it is delivered in Pakistan.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Client Confidentiality",
                  desc: "Your secrets are bound by the strictest legal privilege.",
                },
                {
                  title: "Strategic Aggression",
                  desc: "We push for results, not just dates. Every hearing matters.",
                },
                {
                  title: "Digital First",
                  desc: "From WhatsApp updates to digital drafting, we value your time.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white/5 border-l-4 border-gold-500 p-6 backdrop-blur-sm"
                >
                  <h4 className="text-xl font-serif font-bold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <BookOpen className="w-12 h-12 text-gold-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-richBlack mb-6">
            Discuss Your Case with Advocate Dhothar
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Availability is limited to serious inquiries. Book your consultation
            slot today.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-richBlack text-white font-bold text-lg hover:bg-gold-500 hover:text-richBlack transition-all shadow-xl rounded-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
