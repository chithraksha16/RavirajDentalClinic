import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",

  description:
    "Explore comprehensive dental services at Raviraj Dental Clinic in Byndoor, Udupi. We offer dental implants, root canal treatment, teeth whitening, smile design, braces, aligners, pediatric dentistry, cosmetic dentistry, and preventive dental care.",

  keywords: [
    "Dental Services in Byndoor",
    "Dental Clinic in Udupi",
    "Root Canal Treatment",
    "Dental Implants",
    "Teeth Whitening",
    "Smile Design",
    "Braces and Aligners",
    "Veneers",
    "Cosmetic Dentistry",
    "Pediatric Dentistry",
    "Tooth Extraction",
    "Preventive Dental Care",
    "Family Dentist in Byndoor",
    "Raviraj Dental Clinic",
  ],

  openGraph: {
    title: "Our Services | Raviraj Dental Clinic",
    description:
      "Advanced dental treatments for healthy and confident smiles in Byndoor, Udupi.",
    type: "website",
    locale: "en_IN",
    siteName: "Raviraj Dental Clinic",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Services | Raviraj Dental Clinic",
    description:
      "Comprehensive dental care including implants, root canals, teeth whitening, braces, and cosmetic dentistry.",
  },

  alternates: {
    canonical: "https://ravirajdentalclinic.com/our-services",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}