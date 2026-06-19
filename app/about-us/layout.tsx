import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn about Raviraj Dental Clinic in Byndoor, Udupi and our experienced team dedicated to providing high-quality, compassionate, and modern dental care for healthy and confident smiles.",

  keywords: [
    "About Raviraj Dental Clinic",
    "Best Dental Clinic in Byndoor",
    "Dentist in Byndoor",
    "Dental Clinic in Udupi",
    "Experienced Dentists",
    "Family Dentist in Byndoor",
    "Dental Specialists in Udupi",
    "Patient-Centered Dental Care",
    "Oral Health Care",
    "Dental Surgeon in Byndoor",
    "Raviraj Dental Clinic",
  ],

  openGraph: {
    title: "About Us | Raviraj Dental Clinic",
    description:
      "Meet the experienced team at Raviraj Dental Clinic, committed to delivering quality dental care in Byndoor, Udupi.",
    type: "website",
    locale: "en_IN",
    siteName: "Raviraj Dental Clinic",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | Raviraj Dental Clinic",
    description:
      "Learn more about our experienced dentists and patient-first approach to dental care.",
  },

  alternates: {
    canonical: "https://ravirajdentalclinic.com/about-us",
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