import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Our Services Raviraj Dental Clinic",
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}