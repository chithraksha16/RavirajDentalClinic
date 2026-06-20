import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ravirajdentalclinic.com"),

  title: {
    default: "Best Dental Clinic in Byndoor, Udupi | Raviraj Dental Clinic",
    template: "%s | Raviraj Dental Clinic",
  },

  description:
    "Raviraj Dental Clinic in Byndoor, Udupi provides comprehensive dental care including dental implants, root canal treatment, teeth whitening, smile design, braces, aligners, pediatric dentistry, and cosmetic dentistry with a patient-first approach.",

  keywords: [
    "Raviraj Dental Clinic",
    "Best Dental Clinic in Byndoor",
    "Dentist in Byndoor",
    "Dental Clinic in Udupi",
    "Root Canal Treatment",
    "Dental Implants",
    "Teeth Whitening",
    "Smile Design",
    "Braces and Aligners",
    "Cosmetic Dentistry",
    "Pediatric Dentistry",
    "Family Dentist in Byndoor",
    "Dentist Near Me",
    "Dental Care Udupi",
  ],

  openGraph: {
    title: "Best Dental Clinic in Byndoor, Udupi | Raviraj Dental Clinic",
    description:
      "Advanced dental care in Byndoor, Udupi with personalized treatment and modern technology.",
    url: "https://ravirajdentalclinic.com",
    siteName: "Raviraj Dental Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raviraj Dental Clinic",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Dental Clinic in Byndoor, Udupi | Raviraj Dental Clinic",
    description:
      "Comprehensive dental care with experienced dentists and modern treatment facilities.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://ravirajdentalclinic.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Raviraj Dental Clinic",
    url: "https://ravirajdentalclinic.com",
    image: "https://ravirajdentalclinic.com/og-image.jpg",
    priceRange: "₹₹",
    medicalSpecialty: "Dentistry",
    areaServed: "Byndoor, Udupi",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Byndoor",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.className} ${inter.variable} ${inter.className}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dentistSchema),
          }}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}