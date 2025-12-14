import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldAlert, Phone } from "lucide-react";

export default function CriminalLawPage() {
  return (
    <div className="bg-white pt-24 pb-20">
      {/* Header */}
      <section className="bg-neutral-50 border-b border-gray-200 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="text-gold-500 w-6 h-6" />
            <span className="text-gold-600 font-bold tracking-widest text-sm uppercase">
              Practice Area
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-richBlack">
            Criminal Defense & Bail Matters
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Content */}
        <div className="lg:col-span-2 prose prose-lg text-gray-600">
          <p className="lead text-xl text-richBlack font-serif italic">
            "Your liberty is our priority. We provide aggressive defense
            strategies from the FIR stage up to the High Court Appeals."
          </p>

          <h3>Strategic Defense Litigation</h3>
          <p>
            Criminal litigation in Pakistan requires immediate and calculated
            action. A delay of even a few hours in seeking Pre-Arrest Bail can
            change the outcome of a case. We specialize in handling complex
            criminal trials involving offenses against the person and
            white-collar crimes.
          </p>

          <h3>Areas of Expertise:</h3>
          <ul className="not-prose space-y-3 mt-6 mb-8">
            {[
              "Murder & Attempt to Murder (302/324 PPC)",
              "Pre-Arrest & Post-Arrest Bail",
              "Cancellation of False FIRs (Quashment)",
              "Narcotics & CNSA Cases",
              "Cheque Dishonor (Section 489-F)",
              "Cyber Crime & FIA Inquiries",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <h3>Bail Matters in High Court</h3>
          <p>
            Securing bail is often the most critical phase. We have an extensive
            track record of securing relief from the Sessions Court and Lahore
            High Court by identifying crucial evidentiary gaps in the
            prosecution's story.
          </p>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-richBlack text-white p-8 border-t-4 border-gold-500">
            <h4 className="text-xl font-serif font-bold mb-4">
              Facing Arrest?
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Do not speak to the police without counsel. Contact us immediately
              for interim relief.
            </p>
            <a
              href="https://wa.me/923226616029"
              className="flex items-center justify-center gap-2 w-full py-4 bg-gold-500 text-richBlack font-bold hover:bg-gold-400 transition-colors"
            >
              <Phone size={18} /> Emergency Contact
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
