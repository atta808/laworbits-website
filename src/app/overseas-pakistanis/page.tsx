import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe2,
  Plane,
  FileSignature,
  ShieldCheck,
  Smartphone,
  Home,
  Gavel,
  Users,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Services for Overseas Pakistanis | LawOrbits",
  description:
    "Expert legal representation for Overseas Pakistanis. Handle property disputes, inheritance, and power of attorney matters without traveling to Pakistan.",
};

export default function OverseasPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION: Emotional & Trust Hook */}
      <section className="relative pt-32 pb-20 bg-richBlack overflow-hidden">
        {/* Abstract World Map Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-900/20 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-3/5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6">
                <Globe2 className="w-4 h-4 text-gold-500" />
                <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">
                  Global Legal Support
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Protecting Your Interests <br />
                <span className="text-gradient-gold">While You Are Abroad</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                You do not need to travel to Pakistan to fight for your rights.
                We provide complete legal representation for property
                management, inheritance transfer, and litigation with{" "}
                <strong className="text-white">
                  virtual presence protocols
                </strong>
                .
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/923226616029"
                  className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-richBlack font-bold text-lg transition-all rounded-sm flex items-center gap-3"
                >
                  <Smartphone className="w-5 h-5" />
                  WhatsApp Consultation
                </a>
                <div className="px-6 py-4 border border-gray-700 bg-gray-900/50 text-gray-300 text-sm font-medium flex items-center gap-3">
                  <Plane className="w-5 h-5 text-gold-500" />
                  No Travel Required
                </div>
              </div>
            </div>

            {/* Visual Stat Card */}
            <div className="md:w-2/5 relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700 shadow-2xl relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gold-500"></div>
                <h3 className="text-white font-serif text-2xl mb-6">
                  Why Overseas Clients Trust Us?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Video Conference Consultations",
                    "Digital Document Drafting",
                    "Weekly Case Status Updates",
                    "Transparent Fee Structure",
                    "Strict Confidentiality",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <ShieldCheck className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold tracking-widest text-sm uppercase">
            Specialized Services
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-richBlack mt-3">
            Legal Solutions for Expats
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="group p-8 bg-neutral-50 hover:bg-white border border-gray-100 hover:border-gold-500 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="w-14 h-14 bg-richBlack text-gold-500 flex items-center justify-center mb-6">
              <Home size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-richBlack mb-4">
              Property Disputes & Possession
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Combat illegal possession (Qabza) and land grabbing. We handle
              stay orders, eviction suits, and recovery of possession through
              the High Court and Civil Courts.
            </p>
            <Link
              href="/contact"
              className="text-gold-600 font-bold uppercase text-sm tracking-wider flex items-center group-hover:gap-2 transition-all"
            >
              Discuss Property Matter <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          {/* Service 2 */}
          <div className="group p-8 bg-neutral-50 hover:bg-white border border-gray-100 hover:border-gold-500 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="w-14 h-14 bg-richBlack text-gold-500 flex items-center justify-center mb-6">
              <FileSignature size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-richBlack mb-4">
              Inheritance & Succession Certificates
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Seamless transfer of inherited assets. We obtain Succession
              Certificates and Letters of Administration from the courts so you
              can legally claim movable and immovable assets.
            </p>
            <Link
              href="/contact"
              className="text-gold-600 font-bold uppercase text-sm tracking-wider flex items-center group-hover:gap-2 transition-all"
            >
              Start Succession Process <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          {/* Service 3 */}
          <div className="group p-8 bg-neutral-50 hover:bg-white border border-gray-100 hover:border-gold-500 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="w-14 h-14 bg-richBlack text-gold-500 flex items-center justify-center mb-6">
              <Gavel size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-richBlack mb-4">
              Power of Attorney Management
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We draft and register Special and General Power of Attorneys
              securely. We also verify PoA documents to prevent fraud and ensure
              your representative acts within limits.
            </p>
            <Link
              href="/contact"
              className="text-gold-600 font-bold uppercase text-sm tracking-wider flex items-center group-hover:gap-2 transition-all"
            >
              Draft Power of Attorney <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          {/* Service 4 */}
          <div className="group p-8 bg-neutral-50 hover:bg-white border border-gray-100 hover:border-gold-500 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="w-14 h-14 bg-richBlack text-gold-500 flex items-center justify-center mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-richBlack mb-4">
              Family Law (Divorce & Custody)
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Handling sensitive family matters including overseas divorce
              registration, Khula, child custody, and maintenance execution
              proceedings in Pakistan.
            </p>
            <Link
              href="/contact"
              className="text-gold-600 font-bold uppercase text-sm tracking-wider flex items-center group-hover:gap-2 transition-all"
            >
              Get Family Legal Advice <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. WORKFLOW: How it works remotely */}
      <section className="py-24 bg-richBlack text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              How We Represent You <br />
              <span className="text-gold-500">Without Your Presence</span>
            </h2>
            <p className="text-gray-400">
              Our digital-first legal workflow ensures you stay in control of
              your case from anywhere in the world (USA, UK, UAE, Europe).
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Online Consultation",
                  desc: "Book a WhatsApp or Zoom call to discuss case details.",
                },
                {
                  step: "02",
                  title: "Document Sharing",
                  desc: "Send scanned copies securely via email or WhatsApp.",
                },
                {
                  step: "03",
                  title: "Power of Attorney",
                  desc: "We guide you on attesting PoA from the Pakistani Embassy.",
                },
                {
                  step: "04",
                  title: "Court Action",
                  desc: "We file the suit and represent you. You get daily updates.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-charcoal p-8 border border-gray-700 hover:border-gold-500 transition-colors"
                >
                  <span className="text-5xl font-bold text-gray-800 mb-4 block">
                    {item.step}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-20 bg-gold-500">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-richBlack mb-6">
            Stop Worrying About Your Assets in Pakistan
          </h2>
          <p className="text-richBlack/80 text-xl mb-10 max-w-2xl mx-auto">
            Take legal action today with a trusted Senior Advocate High Court.
            Your property and rights deserve professional protection.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/923226616029"
              className="px-10 py-4 bg-richBlack text-white font-bold text-lg hover:bg-gray-900 transition-colors shadow-xl"
            >
              Start WhatsApp Chat
            </a>
            <Link
              href="/contact"
              className="px-10 py-4 bg-transparent border-2 border-richBlack text-richBlack font-bold text-lg hover:bg-richBlack hover:text-white transition-colors"
            >
              Email Us Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
