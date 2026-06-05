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
    default: "Raviraj Dental Clinic",
    template: "%s | Raviraj Dental Clinic",
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
