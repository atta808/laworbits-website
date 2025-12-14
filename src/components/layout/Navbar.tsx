"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Overseas Pakistanis", href: "/overseas-pakistanis" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Effect to handle scroll background transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // UPDATED: Navbar is now Black (bg-richBlack) to match your Logo's background
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
        scrolled ? "bg-richBlack/95 backdrop-blur-md shadow-lg" : "bg-richBlack"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              {/* IMAGE LOGO */}
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image
                  src="/laworbits.logo.jpeg" // Make sure this file is in your 'public' folder
                  alt="LawOrbits Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Optional: Text next to logo (Hidden on mobile if logo has text) */}
              <div className="hidden md:flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-medium">
                  Atta Ur Rehman Dhothar
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                  Advocate High Court
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation (UPDATED TEXT COLORS FOR DARK MODE) */}
          <div className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-gold-500 font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/923226616029"
              className="flex items-center gap-2 bg-gold-500 text-richBlack px-6 py-2.5 text-sm font-bold hover:bg-gold-400 transition-all duration-300 rounded-sm"
            >
              <Phone size={16} />
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Mobile menu button (UPDATED COLOR) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold-500 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Dark Theme) */}
      {isOpen && (
        <div className="md:hidden bg-richBlack border-t border-gray-800 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-gold-500 hover:bg-white/5 border-l-2 border-transparent hover:border-gold-500 transition-all"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-800">
              <a
                href="https://wa.me/923226616029"
                className="block w-full text-center bg-gold-500 text-richBlack font-bold py-3 px-4 hover:bg-gold-600 transition"
              >
                Book Consultation via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
