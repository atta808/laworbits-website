import Link from "next/link";
import { Scale, Gavel, Users, Building2, Briefcase, Globe2, ArrowRight } from "lucide-react";

const practices = [
  {
    title: "Property & Land Matters",
    desc: "Expert resolution for land disputes, possession, stay orders, and inheritance transfers.",
    icon: <Building2 size={32} />,
    href: "/practice-areas/property-law",
  },
  {
    title: "Overseas Pakistanis",
    desc: "Dedicated legal representation for expats. Remote management of cases and assets.",
    icon: <Globe2 size={32} />,
    href: "/overseas-pakistanis",
    highlight: true, // Special styling for this card
  },
  {
    title: "Civil Litigation",
    desc: "Comprehensive handling of civil suits, damages, and contractual breaches.",
    icon: <Scale size={32} />,
    href: "/practice-areas/civil-law",
  },
  {
    title: "Criminal Defense",
    desc: "Strong defense strategy for bail matters, trials, and appeals in High Court.",
    icon: <Gavel size={32} />,
    href: "/practice-areas/criminal-law",
  },
  {
    title: "Family Law",
    desc: "Sensitive handling of divorce, khula, maintenance, and child custody matters.",
    icon: <Users size={32} />,
    href: "/practice-areas/family-law",
  },
  {
    title: "Corporate & Contract",
    desc: "Drafting, vetting, and litigation support for business entities and contracts.",
    icon: <Briefcase size={32} />,
    href: "/practice-areas/corporate-law",
  },
];

export default function PracticeAreasPreview() {
  return (
    <section className="py-24 bg-richBlack text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-gold-500 font-bold tracking-widest text-sm uppercase">
              Legal Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3">
              Practice Areas
            </h2>
          </div>
          <Link 
            href="/practice-areas"
            className="flex items-center gap-2 text-gold-500 hover:text-white transition-colors pb-1 border-b border-gold-500 hover:border-white"
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((area, index) => (
            <Link 
              key={index} 
              href={area.href}
              className={`group p-8 border transition-all duration-300 relative overflow-hidden ${
                area.highlight 
                  ? "bg-gold-500 border-gold-500 text-richBlack" 
                  : "bg-transparent border-gray-800 hover:border-gold-500 hover:bg-gray-900"
              }`}
            >
              <div className={`mb-6 ${area.highlight ? "text-richBlack" : "text-gold-500"}`}>
                {area.icon}
              </div>
              <h3 className={`text-xl font-serif font-bold mb-3 ${area.highlight ? "text-richBlack" : "text-white"}`}>
                {area.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${area.highlight ? "text-gray-800 font-medium" : "text-gray-400"}`}>
                {area.desc}
              </p>
              <span className={`flex items-center text-sm font-bold uppercase tracking-wider ${area.highlight ? "text-richBlack" : "text-gold-500 group-hover:text-white"}`}>
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}