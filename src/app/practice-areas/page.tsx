import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  Gavel,
  Users,
  Building2,
  Briefcase,
  Globe2,
  FileText,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Practice Areas | LawOrbits - Advocate Atta Ur Rehman Dhothar",
  description:
    "Comprehensive legal services in Mandi Bahauddin and Punjab. Specializing in Civil Litigation, Criminal Defense, Property Law, and Overseas Pakistani legal matters.",
};

const practiceAreas = [
  {
    category: "Property & Land",
    items: [
      {
        title: "Property Dispute Litigation",
        desc: "Resolution of ownership disputes, boundary issues, and adverse possession claims.",
        icon: <Building2 className="w-10 h-10 text-gold-500" />,
        href: "/practice-areas/property-law",
      },
      {
        title: "Overseas Pakistani Assets",
        desc: "Protection against land grabbing (Qabza) and management of assets for expats.",
        icon: <Globe2 className="w-10 h-10 text-gold-500" />,
        href: "/overseas-pakistanis",
      },
      {
        title: "Inheritance & Succession",
        desc: "Obtaining succession certificates and letters of administration from courts.",
        icon: <FileText className="w-10 h-10 text-gold-500" />,
        href: "/practice-areas/property-law",
      },
    ],
  },
  {
    category: "Criminal & Civil",
    items: [
      {
        title: "Criminal Defense",
        desc: "Representation in bail matters (pre-arrest & post-arrest), trials, and appeals.",
        icon: <ShieldAlert className="w-10 h-10 text-gold-500" />,
        href: "/practice-areas/criminal-law",
      },
      {
        title: "Civil Litigation",
        desc: "Suits for damages, specific performance of contracts, and recovery of money.",
        icon: <Scale className="w-10 h-10 text-gold-500" />,
        href: "/practice-areas/civil-law",
      },
      {
        title: "Constitutional Writs",
        desc: "Filing Writ Petitions in the High Court for enforcement of fundamental rights.",
        icon: <Gavel className="w-10 h-10 text-gold-500" />,
        href: "/practice-areas/civil-law",
      },
    ],
  },
  {
    category: "Family & Corporate",
    items: [
      {
        title: "Family Law",
        desc: "Handling divorce, Khula, maintenance, and guardian/ward child custody cases.",
        icon: <Users className="w-10 h-10 text-gold-500" />,
        href: "/practice-areas/family-law",
      },
      {
        title: "Corporate Services",
        desc: "Company registration, contract drafting, and legal vetting for businesses.",
        icon: <Briefcase className="w-10 h-10 text-gold-500" />,
        href: "/practice-areas/corporate-law",
      },
      {
        title: "Legal Documentation",
        desc: "Professional drafting of deeds, agreements, affidavits, and power of attorneys.",
        icon: <FileText className="w-10 h-10 text-gold-500" />,
        href: "/contact",
      },
    ],
  },
];

export default function PracticeAreasPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* 1. HERO HEADER */}
      <section className="bg-richBlack text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-gold-500 font-bold tracking-widest text-sm uppercase">
            Our Expertise
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-4 mb-6">
            Legal Practice Areas
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            We provide specialized legal counsel across a broad spectrum of
            Pakistani Law. Our approach is strategic, thorough, and
            results-oriented.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        {practiceAreas.map((section, idx) => (
          <div key={idx} className="mb-20 last:mb-0">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-serif font-bold text-richBlack">
                {section.category}
              </h2>
              <div className="h-px flex-grow bg-gray-200"></div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.items.map((item, itemIdx) => (
                <Link
                  key={itemIdx}
                  href={item.href}
                  className="group block bg-neutral-50 p-8 border border-gray-100 hover:bg-white hover:border-gold-500 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/5 rounded-bl-full group-hover:bg-gold-500/10 transition-colors"></div>

                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-richBlack mb-3 font-serif group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-gold-600">
                    View Details{" "}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="py-20 bg-neutral-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Unsure Which Legal Service You Need?
          </h2>
          <p className="text-gray-400 mb-8">
            Legal matters often overlap across different areas of law. Schedule
            a consultation to get a clear roadmap for your specific situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-richBlack font-bold transition-colors"
          >
            Request a Case Evaluation
          </Link>
        </div>
      </section>
    </div>
  );
}
