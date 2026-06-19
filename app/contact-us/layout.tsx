import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Contact Raviraj Dental Clinic in Byndoor, Udupi for appointments, consultations, and expert dental care. Reach our experienced team for personalized treatment and healthy smiles.",

  keywords: [
    "Contact Raviraj Dental Clinic",
    "Dental Clinic in Byndoor",
    "Dentist in Byndoor",
    "Dental Clinic in Udupi",
    "Book Dentist Appointment",
    "Emergency Dentist",
    "Family Dentist in Byndoor",
    "Dental Consultation",
    "Dentist Near Me",
    "Dental Care Udupi",
    "Best Dental Clinic in Byndoor",
    "Raviraj Dental Clinic"
  ],

  openGraph: {
    title: "Contact Us | Raviraj Dental Clinic",
    description:
      "Get in touch with Raviraj Dental Clinic for appointments and expert dental care in Byndoor, Udupi.",
    type: "website",
    locale: "en_IN",
    siteName: "Raviraj Dental Clinic",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Raviraj Dental Clinic",
    description:
      "Schedule an appointment and connect with our experienced dental team in Byndoor, Udupi.",
  },

  alternates: {
    canonical: "https://ravirajdentalclinic.com/contact-us",
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