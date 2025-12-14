import Link from "next/link";
import { CheckCircle2, ArrowRight, Building2, Phone } from "lucide-react";

export default function PropertyLawPage() {
  return (
    <div className="bg-white pt-24 pb-20">
      {/* Page Header */}
      <section className="bg-neutral-50 border-b border-gray-200 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="text-gold-500 w-6 h-6" />
            <span className="text-gold-600 font-bold tracking-widest text-sm uppercase">
              Practice Area
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-richBlack">
            Property & Land Laws
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content (Left Column) */}
        <div className="lg:col-span-2 prose prose-lg text-gray-600">
          <p className="lead text-xl text-richBlack font-serif italic">
            "Property disputes in Pakistan require aggressive litigation and
            deep knowledge of Revenue Laws. We protect your rightful ownership
            against illegal possession and fraud."
          </p>

          <h3>Comprehensive Real Estate Solutions</h3>
          <p>
            We represent clients in Civil Courts, High Courts, and Revenue
            Courts regarding immovable property matters. Whether you are dealing
            with a family inheritance dispute or a "Qabza" (illegal possession)
            issue, our approach is swift and decisive.
          </p>

          <h3>Key Services Include:</h3>
          <ul className="not-prose space-y-3 mt-6 mb-8">
            {[
              "Suits for Declaration of Ownership",
              "Illegal Dispossession Act Complaints",
              "Specific Performance of Agreements",
              "Stay Orders (Injunctive Relief)",
              "Inheritance & Partition Suits",
              "Land Revenue Appeals",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <h3>For Overseas Pakistanis</h3>
          <p>
            Property management is the biggest challenge for expats. We offer a{" "}
            <strong>Remote Representation Protocol</strong> where we manage
            litigation, verify land records (Fard/Registry), and handle transfer
            procedures without requiring your physical presence in Pakistan.
          </p>
        </div>

        {/* Sidebar (Right Column) - Conversion Focused */}
        <div className="lg:col-span-1 space-y-8">
          {/* Quick Contact Card */}
          <div className="bg-richBlack text-white p-8 border-t-4 border-gold-500">
            <h4 className="text-xl font-serif font-bold mb-4">
              Need Urgent Legal Relief?
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Property matters are time-sensitive. Delay can lead to loss of
              possession.
            </p>
            <a
              href="https://wa.me/923226616029"
              className="flex items-center justify-center gap-2 w-full py-4 bg-gold-500 text-richBlack font-bold hover:bg-gold-400 transition-colors"
            >
              <Phone size={18} /> Discuss via WhatsApp
            </a>
          </div>

          {/* Other Practice Areas Links */}
          <div className="bg-neutral-50 border border-gray-200 p-6">
            <h4 className="text-lg font-bold text-richBlack mb-4 uppercase tracking-widest text-xs">
              Other Services
            </h4>
            <nav className="space-y-3">
              <Link
                href="/practice-areas/criminal-law"
                className="flex items-center justify-between text-gray-600 hover:text-gold-600 transition-colors group"
              >
                <span>Criminal Defense</span>{" "}
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
              <div className="h-px bg-gray-200"></div>
              <Link
                href="/practice-areas/family-law"
                className="flex items-center justify-between text-gray-600 hover:text-gold-600 transition-colors group"
              >
                <span>Family Law</span>{" "}
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
