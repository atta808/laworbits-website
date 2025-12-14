// src/components/layout/Footer.tsx
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-richBlack text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Identity */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold-500 mb-6">
              LAWORBITS.COM
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              The official legal platform of Atta Ur Rehman Dhothar, Advocate
              High Court. Delivering justice through experience, integrity, and
              strategic counsel.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/share/1AEvKkoSQW/"
                className="hover:text-gold-500 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com/in/atta-ur-rehman-dhothar"
                className="hover:text-gold-500 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/atta_rehman4"
                className="hover:text-gold-500 transition"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Ecosystem */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-gray-200">
              Our Ecosystem
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <span className="text-gold-500 mr-2">▪</span>
                <strong>LawOrbits</strong> – Legal Consultancy & Representation
              </li>
              <li>
                <a
                  href="https://www.draftdeskhub.com"
                  target="_blank"
                  className="hover:text-gold-500 transition flex items-center"
                >
                  <span className="text-gray-600 mr-2">▪</span> DraftDeskHub –
                  Legal Templates
                </a>
              </li>
              <li>
                <a
                  href="https://www.technaam.com/"
                  target="_blank"
                  className="hover:text-gold-500 transition flex items-center"
                >
                  <span className="text-gray-600 mr-2">▪</span> TechNaam –
                  LegalTech & AI
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-gray-200">
              Contact Office
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="mr-3 text-gold-500 shrink-0" size={18} />
                <span>
                  Chamber No. 49-50, District Courts, Mandi Bahauddin, Pakistan
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-gold-500 shrink-0" size={18} />
                <a href="tel:+923226616029" className="hover:text-white">
                  +92 322 6616029 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-gold-500 shrink-0" size={18} />
                <a href="tel:+923451264821" className="hover:text-white">
                  +92 345 1264821
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} LawOrbits.com. All Rights Reserved.
            Designed by TechNaam.
          </p>
        </div>
      </div>
    </footer>
  );
}
