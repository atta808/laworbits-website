import Link from "next/link";
import { CheckCircle2, ArrowRight, Users, Phone } from "lucide-react";

export default function FamilyLawPage() {
  return (
    <div className="bg-white pt-24 pb-20">
      <section className="bg-neutral-50 border-b border-gray-200 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-gold-500 w-6 h-6" />
            <span className="text-gold-600 font-bold tracking-widest text-sm uppercase">
              Practice Area
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-richBlack">
            Family Law & Custody
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 prose prose-lg text-gray-600">
          <p className="lead text-xl text-richBlack font-serif italic">
            "Family matters are sensitive. We handle them with the dignity,
            privacy, and legal precision they deserve."
          </p>

          <h3>Compassionate Legal Counsel</h3>
          <p>
            We understand the emotional weight of family disputes. Our objective
            is to secure your legal rights regarding dowry, maintenance, and
            custody while minimizing unnecessary conflict where possible. We are
            particularly experienced in handling cross-border family disputes
            for Overseas Pakistanis.
          </p>

          <h3>Family Law Services:</h3>
          <ul className="not-prose space-y-3 mt-6 mb-8">
            {[
              "Dissolution of Marriage (Khula)",
              "Recovery of Dowry Articles & Dower Amount",
              "Maintenance (Wife & Children)",
              "Guardian & Ward (Child Custody)",
              "Restitution of Conjugal Rights",
              "Overseas Divorce Registration",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="bg-richBlack text-white p-8 border-t-4 border-gold-500">
            <h4 className="text-xl font-serif font-bold mb-4">
              Private Consultation
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Discuss your family matter in strict confidence. We ensure total
              privacy.
            </p>
            <a
              href="https://wa.me/923226616029"
              className="flex items-center justify-center gap-2 w-full py-4 bg-gold-500 text-richBlack font-bold hover:bg-gold-400 transition-colors"
            >
              <Phone size={18} /> Confidential Chat
            </a>
          </div>

          <div className="bg-neutral-50 border border-gray-200 p-6">
            <h4 className="text-lg font-bold text-richBlack mb-4 uppercase tracking-widest text-xs">
              Other Services
            </h4>
            <nav className="space-y-3">
              <Link
                href="/practice-areas/property-law"
                className="flex items-center justify-between text-gray-600 hover:text-gold-600 transition-colors group"
              >
                <span>Property Law</span>{" "}
                <ArrowRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <div className="h-px bg-gray-200"></div>
              <Link
                href="/practice-areas/civil-law"
                className="flex items-center justify-between text-gray-600 hover:text-gold-600 transition-colors group"
              >
                <span>Civil Litigation</span>{" "}
                <ArrowRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
