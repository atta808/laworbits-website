import { Award, Shield, Scale, Landmark } from "lucide-react";

const credentials = [
  {
    role: "Former Member, Executive Committee",
    org: "District Bar Association, Mandi Bahauddin",
    icon: <Landmark className="w-10 h-10 text-gold-500 mb-4" />,
  },
  {
    role: "Former Joint Secretary",
    org: "District Bar Association, Mandi Bahauddin",
    icon: <Award className="w-10 h-10 text-gold-500 mb-4" />,
  },
  {
    role: "Former Member, Executive Committee",
    org: "Lahore High Court Bar Association, Lahore",
    icon: <Scale className="w-10 h-10 text-gold-500 mb-4" />,
  },
  {
    role: "Former Member, Anti-Corruption Committee",
    org: "Constituted by Punjab Bar Council",
    icon: <Shield className="w-10 h-10 text-gold-500 mb-4" />,
  },
];

export default function CredentialsGrid() {
  return (
    <section className="py-24 bg-neutral-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold tracking-widest text-sm uppercase">
            Professional Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-richBlack mt-3">
            Bar Association Roles & Honors
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold-500/30 transition-all duration-300 group text-center"
            >
              <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                {cred.icon}
              </div>
              <h3 className="text-lg font-serif font-bold text-richBlack mb-3 leading-tight">
                {cred.role}
              </h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                {cred.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
