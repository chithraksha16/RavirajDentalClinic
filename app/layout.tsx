import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import {Montserrat,Inter} from "next/font/google"
import Footer from "@/components/Footer";

const montserrat=Montserrat({
  subsets: ["latin"],
  weight: ["100","200","300","400", "500", "600", "700","800","900"],
  variable: "--font-montserrat",
})

const inter=Inter({
  subsets: ["latin"],
  weight: ["100","200","300","400", "500", "600", "700","800","900"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
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
    type: "website",
    locale: "en_IN",
    siteName: "Raviraj Dental Clinic",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Dental Clinic in Byndoor, Udupi | Raviraj Dental Clinic",
    description:
      "Comprehensive dental care with experienced dentists and modern treatment facilities.",
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
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${montserrat.className} ${inter.variable} ${inter.className}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
