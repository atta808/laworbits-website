import type { Metadata } from "next";
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Smartphone,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact LawOrbits | Advocate Atta Ur Rehman Dhothar",
  description:
    "Contact the law chambers of Atta Ur Rehman Dhothar in Mandi Bahauddin. WhatsApp Consultation available for Overseas Pakistanis.",
};

export default function ContactPage() {
  return (
    <div className="bg-neutral-50 min-h-screen pt-20">
      {/* 1. HERO HEADER */}
      <section className="bg-richBlack text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold-500 font-bold tracking-widest text-sm uppercase">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-3">
            Contact Our Chambers
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Whether you are visiting our office in Mandi Bahauddin or seeking
            legal counsel from abroad, we are here to assist you.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-12 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CARD 1: Quick Contact (Primary) */}
          <div className="bg-white p-8 shadow-xl border-t-4 border-gold-500">
            <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
              <Phone className="text-gold-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-richBlack mb-2">
              Phone & WhatsApp
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Direct access to the legal team.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/923226616029"
                className="flex items-center gap-4 p-4 bg-green-50 hover:bg-green-100 border border-green-100 transition-colors rounded-sm group"
              >
                <Smartphone className="text-green-600 w-5 h-5" />
                <div>
                  <span className="block text-xs text-green-600 font-bold uppercase">
                    WhatsApp (Primary)
                  </span>
                  <span className="font-bold text-richBlack text-lg group-hover:text-green-700">
                    +92 322 6616029
                  </span>
                </div>
              </a>

              <a
                href="tel:+923451264821"
                className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors rounded-sm group"
              >
                <Phone className="text-gray-600 w-5 h-5" />
                <div>
                  <span className="block text-xs text-gray-500 font-bold uppercase">
                    Mobile Office
                  </span>
                  <span className="font-bold text-richBlack text-lg group-hover:text-black">
                    +92 345 1264821
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* CARD 2: Office Location */}
          <div className="bg-white p-8 shadow-xl border-t-4 border-richBlack">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-richBlack w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-richBlack mb-2">
              Chamber Address
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Visit us in person (Appointment Recommended).
            </p>

            <address className="not-italic text-gray-600 space-y-2 mb-6">
              <p className="font-bold text-richBlack">Chamber No. 49-50</p>
              <p>District Courts / Katchery</p>
              <p>Mandi Bahauddin, Punjab</p>
              <p>Pakistan, 50400</p>
            </address>

            <div className="flex items-start gap-3 text-sm text-gray-500 bg-gray-50 p-3 rounded-sm">
              <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
              <div>
                <span className="block font-bold text-richBlack">
                  Office Hours:
                </span>
                Mon - Sat: 09:00 AM - 04:00 PM <br />
                Sunday: Closed
              </div>
            </div>
          </div>

          {/* CARD 3: Digital & Social */}
          <div className="bg-white p-8 shadow-xl border-t-4 border-gray-400">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Mail className="text-richBlack w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-richBlack mb-2">
              Connect Digitally
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Follow our legal insights and updates.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.facebook.com/share/1AEvKkoSQW/"
                target="_blank"
                className="flex items-center gap-2 p-3 border hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <Facebook size={18} />{" "}
                <span className="text-sm font-bold">Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/in/atta-ur-rehman-dhothar"
                target="_blank"
                className="flex items-center gap-2 p-3 border hover:border-blue-700 hover:text-blue-700 transition-colors"
              >
                <Linkedin size={18} />{" "}
                <span className="text-sm font-bold">LinkedIn</span>
              </a>
              <a
                href="https://x.com/atta_rehman4"
                target="_blank"
                className="flex items-center gap-2 p-3 border hover:border-black hover:text-black transition-colors"
              >
                <Twitter size={18} />{" "}
                <span className="text-sm font-bold">X (Twitter)</span>
              </a>
              <a
                href="https://www.instagram.com/draftdeskhub"
                target="_blank"
                className="flex items-center gap-2 p-3 border hover:border-pink-600 hover:text-pink-600 transition-colors"
              >
                <Instagram size={18} />{" "}
                <span className="text-sm font-bold">Instagram</span>
              </a>
              {/* TikTok Link (Using generic icon as specific one varies in libraries, styled for TikTok) */}
              <a
                href="https://tiktok.com/@technaam"
                target="_blank"
                className="col-span-2 flex items-center justify-center gap-2 p-3 border hover:border-black hover:text-black transition-colors"
              >
                <span className="font-bold text-sm">TikTok (@technaam)</span>{" "}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAP EMBED */}
      <section className="w-full h-[500px] bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          src="https://maps.google.com/maps?q=Atta+Ur+Rehman+Dhothar+Advocate+High+Court+Mandi+Bahauddin&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="LawOrbits Office Map"
        ></iframe>

        {/* Map Overlay Label */}
        <div className="absolute top-10 left-10 bg-white p-4 shadow-lg border-l-4 border-gold-500 max-w-xs hidden md:block">
          <p className="font-bold text-richBlack text-lg">District Courts</p>
          <p className="text-sm text-gray-500">Mandi Bahauddin</p>
        </div>
      </section>

      {/* 4. FINAL ECOSYSTEM REMINDER */}
      <section className="py-12 bg-white text-center">
        <p className="text-gray-400 text-sm">
          LawOrbits is part of the{" "}
          <span className="text-richBlack font-bold">
            DraftDesk & TechNaam Ecosystem
          </span>
          .
        </p>
      </section>
    </div>
  );
}
