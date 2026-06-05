import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Raviraj Dental Clinic",
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}