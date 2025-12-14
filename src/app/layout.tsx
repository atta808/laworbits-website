import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // Ensure you create this component
import Footer from "@/components/layout/Footer"; // Ensure you create this component

// 1. Font Configuration
// We load these via Next.js to avoid layout shift (CLS) and ensure speed.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// 2. SEO Metadata (Global)
export const metadata: Metadata = {
  title: {
    default: "LawOrbits | Atta Ur Rehman Dhothar - Advocate High Court",
    template: "%s | LawOrbits - Advocate High Court",
  },
  description:
    "Official website of Atta Ur Rehman Dhothar, Advocate High Court. 20+ years of legal experience in Civil, Criminal, and Corporate Law. Serving Pakistan and Overseas Clients.",
  keywords: [
    "Advocate High Court",
    "Lawyer in Mandi Bahauddin",
    "Legal Consultant Pakistan",
    "Atta Ur Rehman Dhothar",
    "Civil Law Pakistan",
    "Criminal Defense Lawyer",
    "Overseas Pakistani Legal Help",
  ],
  authors: [{ name: "Atta Ur Rehman Dhothar" }],
  creator: "TechNaam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://laworbits.com",
    title: "LawOrbits | Expert Legal Counsel & Representation",
    description:
      "Trusted legal authority in Pakistan. Specializing in property disputes, family law, and corporate matters for domestic and international clients.",
    siteName: "LawOrbits",
    images: [
      {
        url: "https://laworbits.com/og-image.jpg", // You will need to add this image later
        width: 1200,
        height: 630,
        alt: "LawOrbits - Atta Ur Rehman Dhothar",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

// 3. JSON-LD Schema Markup (The "Brain" for Google)
// This strictly defines your identity as a Legal Service/Attorney.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService", // Specific type for Law Firms/Lawyers
  name: "LawOrbits - Atta Ur Rehman Dhothar",
  image: "https://laworbits.com/logo.png",
  description:
    "Premier legal consultancy by Atta Ur Rehman Dhothar, Advocate High Court. Over 20 years of experience in Civil, Criminal, and Family Law.",
  "@id": "https://laworbits.com",
  url: "https://laworbits.com",
  telephone: "+923226616029",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chamber No. 49-50, District Courts",
    addressLocality: "Mandi Bahauddin",
    addressRegion: "Punjab",
    postalCode: "50400",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.586, // Coordinates for Mandi Bahauddin
    longitude: 73.4917,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/share/1AEvKkoSQW/",
    "https://www.linkedin.com/in/atta-ur-rehman-dhothar",
    "https://x.com/atta_rehman4",
    "https://www.instagram.com/draftdeskhub",
  ],
  founder: {
    "@type": "Person",
    name: "Atta Ur Rehman Dhothar",
    jobTitle: "Advocate High Court",
    url: "https://laworbits.com/about",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        {/* Inject JSON-LD Schema safely */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-charcoal antialiased selection:bg-gold-500 selection:text-white flex flex-col min-h-screen">
        {/* Navbar is fixed at the top */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow pt-0 md:pt-0">{children}</main>

        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
