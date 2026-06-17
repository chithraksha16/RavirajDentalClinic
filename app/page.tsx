"use client"
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import Image from "next/image";
import HomeGallery from "@/components/HomeGallery"
import Link from "next/link";
import StatSection from "@/components/ui/StatSection";
import { useState } from "react";
import { motion } from "framer-motion"
function StatItem({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-3 min-w-27.5 sm:min-w-32.5">
      <div className="text-[#4a8ed4] shrink-0">{icon}</div>
      <div>
        <p className="text-white font-bold text-sm sm:text-base leading-none">{value}</p>
        <p className="text-white/50 text-[9px] sm:text-[10px] tracking-wide mt-0.5">{label}</p>
      </div>
    </div>
  );
}

const tags = ["Chief Dental Surgeon", "Implantology", "21 Years Experience"];

const treatment = [
  {
    id: "01",
    image: "/treatments/treatment1.webp",
    title: "Preventice Dentistry",
    description: "Regular checkups, professional cleanings, and early diagnosis help maintain oral health, prevent cavities, gum disease, and ensure long-term healthy teeth.",
    tag: "Checkups & Cleaning"

  },
  {
    id: "02",
    image: "/treatments/treatment2.webp",
    title: "Restorative Dentistry",
    description: "Repairs damaged or missing teeth using fillings, crowns, bridges, and dentures to restore function, strength, and natural appearance of your smile.",
    tag: "Crowns  & Bridges"

  },
  {
    id: "03",
    image: "/treatments/treatment3.webp",
    title: "Cosmetic Dentistry",
    description: "Enhances the appearance of your smile through whitening, veneers, bonding, and other treatments for brighter, more attractive, and confident-looking teeth.",
    tag: "Whitening & Veneers"

  },
  {
    id: "04",
    image: "/treatments/treatment4.webp",
    title: "Orthodontics",
    description: "Straightens teeth and corrects bite issues using braces, aligners, and retainers to improve alignment, function, and overall smile appearance.",
    tag: "Braces & Aligners"

  },
  {
    id: "05",
    image: "/treatments/treatment5.webp",
    title: "Endodontics",
    description: "Treats infections inside the tooth using root canal procedures to relieve pain, remove infection, and preserve the natural tooth structure.",
    tag: "Root Canal Therapy"

  },
  {
    id: "06",
    image: "/treatments/treatment6.webp",
    title: "Oral Surgery / Implantology",
    description: "Performs surgical treatments including tooth extractions and dental implants to restore function, replace missing teeth, and improve oral health.",
    tag: "Implants & Extractions"

  },
  {
    id: "07",
    image: "/treatments/treatment7.webp",
    title: " Periodontics",
    description: "Focuses on treating gum disease and supporting structures through deep cleaning and surgical procedures to maintain healthy gums and prevent tooth loss.",
    tag: "Gum Diseases Treatment"

  },
  {
    id: "08",
    image: "/treatments/treatment8.webp",
    title: " Pediatric Dentistry",
    description: "Provides specialized dental care for children, focusing on prevention, early treatment, and healthy habits to ensure strong teeth and proper oral development.",
    tag: "Children’s Dental Care"

  },



]


const faqs = [
  {
    q: "How often should I visit the dentist?",
    a: "It is recommended to visit the dentist every 6 months for regular checkups and cleaning.",
  },
  {
    q: "Is dental treatment painful?",
    a: "Most modern dental treatments are virtually painless. We use advanced anaesthesia and gentle techniques to ensure your comfort throughout the procedure.",
  },
  {
    q: "What should I do in case of a dental emergency?",
    a: "Contact our clinic immediately. We offer emergency dental care and will guide you through the steps to manage pain or discomfort until you can be seen.",
  },
  {
    q: "How can I maintain good oral hygiene at home?",
    a: "Brush twice daily with fluoride toothpaste, floss every day, use mouthwash, and avoid excessive sugar. Regular dental visits are also essential.",
  },
  {
    q: "Are dental X-rays safe?",
    a: "Yes, dental X-rays are very safe. They use extremely low levels of radiation and are an important diagnostic tool for detecting problems not visible to the naked eye.",
  },
  {
    q: "Do you offer cosmetic dental treatments?",
    a: "Yes, we offer a full range of cosmetic treatments including teeth whitening, veneers, bonding, and smile makeovers tailored to your goals.",
  },
];


export default function Home() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section>
      <div className="relative w-full h-auto  bg-[#0d1b2e] flex items-center">

        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <Image
            src="/about1.webp"
            alt="Raviraj dental clinic hero image"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center"
            priority
            fetchPriority="high"
            quality={75}
            draggable={false}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0a1628]/70 via-[#0a1628]/75 to-[#0a1628]/50" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a1628]/80 via-transparent to-transparent" />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16 sm:py-20 lg:py-0 ">

          {/*
         * LAYOUT:
         *   Mobile  → stacked: text block → slider below
         *   Desktop → side-by-side: text left, slider right
         */}
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16 xl:gap-20 min-h-auto lg:min-h-0 lg:py-20 mt-20">

            {/* ── LEFT: Text content ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-full lg:w-1/2 xl:w-[52%] flex flex-col items-center lg:items-start text-center lg:text-left order-1">

              {/* Tag line */}
              <p className="text-[#4a8ed4] text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold mb-4 sm:mb-5">
                --Wellness
              </p>

              {/* Heading */}
              <h1
                className=" font-heading text-3xl sm:text-4xl md:text-5xl xl:text-[3.4rem] font-bold text-white leading-[1.12] mb-4 sm:mb-5">
                Advanced Dental Care
                <br />
                for Healthy, Bright,
                <br />
                <span className="text-[#082D62]">Confident Smiles.</span>
              </h1>

              {/* Sub-text */}
              <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-md mb-7 sm:mb-9">
                Modern, gentle dental care—from checkups to advanced treatments—focused on
                comfort and lasting oral health.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
              <Link href="https://www.dentee.com/clinic/udupi/raviraj-dental-clinic/3e115265-aaea-4469-a93a-8f3d0160f242" target="_blank"> <button aria-label="Request Consultation" className="flex items-center gap-2 bg-[#082D62] hover:bg-[#1e6ad4] text-white text-xs sm:text-sm font-semibold tracking-wide px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors duration-200 shadow-lg shadow-blue-900/40">
                  Request Consultation
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10h12M12 5l5 5-5 5" />
                  </svg>
                </button>
                </Link>
                <Link href="/our-services"><button aria-label="Explore Treatment" className="text-white/80 hover:text-white text-xs sm:text-sm font-medium tracking-wide px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-white/25 hover:border-white/50 transition-colors duration-200">
                  Explore Treatment
                </button>
                </Link>
              </div>

              {/* Stats — shown below buttons on mobile, inline on md+ */}
              <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 w-full">
                <StatItem
                  value="21+ yrs"
                  label="Experience"
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  }
                />
                <StatItem
                  value="50,000+"
                  label="Happy Patients"
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  }
                />
              </div>
            </motion.div>

            {/* ── RIGHT: Before/After Slider ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-full sm:w-[80%] md:w-[65%] lg:w-1/2 xl:w-[45%] order-2">

              <BeforeAfterSlider />

            </motion.div>

          </div>
        </div>
      </div>
      <div className="w-full bg-white sm:px-20 px-8 sm:py-10 py-8">
        <div className="py-10 space-y-1">
          <p className="text-center font-heading font-medium sm:text-[15px] text-[13px] text-[#072959]">INSIDE OUR SPACE</p>
          <h2 className="text-center  font-heading font-medium sm:text-[33px] text-[23px]">Modern Space Designed For Comfort </h2>
        </div>
        <div>
          <HomeGallery />
        </div>
        <div className="py-10 space-y-1">
          <p className="text-center font-heading font-medium sm:text-[15px] text-[13px] text-[#072959]">OUR VALUE</p>
          <h2 className="text-center  font-heading font-medium sm:text-[33px] text-[23px]">Precision. Care. Leadership. </h2>
        </div>

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16">

            {/* ── Image ── */}
            <div className="relative w-full md:w-70 lg:w-75 shrink-0">
              <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden">
                <Image
                  src="/teams/blank-profile.webp"
                  alt="Dr. Anil Shetty"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority
                />
              </div>

              {/* Badge overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#1a2f5e]/90 backdrop-blur-sm rounded-b-2xl px-4 py-3 flex items-center gap-2">
                {/* Degree icon */}
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white shrink-0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
                </svg>
                <div>
                  <p className="text-white text-sm font-bold leading-none">BDS</p>
                  <p className="text-white/70 text-[11px] mt-0.5">Implantology</p>
                </div>
              </div>
            </div>

            {/* ── Content ── */}
            <div className="flex-1 flex flex-col gap-4 sm:gap-5">

              {/* Meet + Name */}
              <div>
                <p className="text-[#888] text-sm italic tracking-wide mb-1">
                  MEET{" "}
                  <span className="text-[#0d1b2e] font-heading font-bold not-italic underline underline-offset-2 tracking-wider">
                    DR. ANIL SHETTY
                  </span>
                </p>
              </div>

              {/* Bio paragraphs */}
              <p className="text-[#444] text-sm sm:text-base leading-relaxed">
                A dedicated dental professional with 21+ years of clinical experience,
                holding qualifications from KVG Dental College, Sullia, Karnataka, along
                with a Fellowship in Implantology.
              </p>
              <p className="text-[#444] text-sm sm:text-base leading-relaxed">
                Known for a calm approach and patient-first philosophy, he believes
                dentistry is about restoring not just smiles — but confidence, comfort,
                and quality of life through compassionate and personalized dental care.
              </p>
              <p className="text-[#444] text-sm sm:text-base leading-relaxed">
                As Chief Dental Surgeon, he combines extensive experience, clinical precision,
                and compassionate care to deliver advanced dental treatments, helping patients
                achieve healthier smiles and long-term oral wellness.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] sm:text-xs text-[#444] border border-[#ccc] rounded-full px-3 py-1 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA link */}
              <Link
                href="/about-us"
                className="inline-flex items-center gap-1.5 text-[#0d1b2e] text-sm font-medium mt-1 hover:gap-2.5 transition-all duration-200 w-fit border-b border-[#0d1b2e] pb-0.5"
              >
                Team & Clinic Info
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10h12M12 5l5 5-5 5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#E2E8F0] sm:px-20 px-8 sm:py-10 py-8">
        <div className="py-10 space-y-1">
          <p className="text-center font-heading font-medium sm:text-[15px] text-[13px] text-[#072959]">-WHAT WE OFFER</p>
          <h2 className="text-center  font-heading font-medium sm:text-[33px] text-[23px]">Treatments WeSpecialize In </h2>
          <p className="text-center  font-body font-normal sm:text-[14px] text-[12px] text-[#395781]">Advanced dental treatments designed for comfort, precision, and lasting results.</p>

        </div>

        <div className="bg-white border border-gray-100 rounded-2xl px-2 sm:px-4 py-2 my-6 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: "🛡️", label: "ISO Certified", sub: "Official standards" },
              { icon: "🫀", label: "Pain Free Treatment", sub: "Modern Anaesthesia" },
              { icon: "🖥️", label: "Advanced Equipment", sub: "Digital x-ray & 3D scan" },
              { icon: "👤", label: "8+ Years Experience", sub: "Trusted Specialists" },
            ].map(({ icon, label, sub }, i) => (
              <div
                key={label}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-3 sm:py-4
          ${i % 2 === 0 ? "border-r border-gray-100" : ""}
          ${i < 2 ? "border-b border-gray-100 md:border-b-0" : ""}
          ${i < 3 ? "md:border-r md:border-gray-100" : ""}
        `}
              >
                <span className="text-lg sm:text-xl text-gray-400 shrink-0">{icon}</span>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight wrap-break-word">
                    {label}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 wrap-break-word">
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 justify-items-center ">
          {treatment.map((treatments) => (
            <div
              key={treatments.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-45 sm:h-47.5 lg:h-50 overflow-hidden">
                <Image
                  src={treatments.image}
                  alt={treatments.title}
                  loading="lazy"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col gap-2 flex-1">
                <span className="text-xl font-heading font-bold sm:text-2xl  text-[#a0b4cc] tracking-widest">
                  {treatments.id}
                </span>
                <h3 className="text-sm sm:text-base font-semibold text-[#0d1b2e] leading-snug">
                  {treatments.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#666] leading-relaxed flex-1">
                  {treatments.description}
                </p>
                <div className="mt-2">
                  <span className="inline-block text-[10px] sm:text-[11px] font-medium text-[#1a5ab8] bg-[#e8f0fb] border border-[#c5d8f5] rounded-full px-3 py-1 tracking-wide">
                    {treatments.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>
        <Link href={'/our-services'} className="flex justify-center py-8"> <button className="px-4 py-1.5 text-[12px] text-white bg-[#0d1b2e]" >View All</button></Link>

      </div>
      <div className="w-full bg-white sm:px-20 px-8 sm:py-10 py-8">
        <div className="py-10 space-y-1">
          <p className="text-center font-heading font-medium sm:text-[15px] text-[13px] text-[#072959]">DIAGNOSTICS</p>
          <h2 className="text-center  font-heading font-medium sm:text-[33px] text-[23px]">Dental X-Rays & Imaging </h2>
          <p className="text-center  font-body font-normal sm:text-[14px] text-[12px] text-[#395781]">We use advanced digital imaging technology for accurate diagnosis and treatment planning.</p>
        </div>

        <div className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-10">

          {/* ── Two cards ── */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 max-w-4xl mx-auto">

            {/* Card 1 — dark */}
            <div className="relative flex-1 bg-[#111] rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-50">
              <div>
                <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-2 font-medium">
                  3D Imaging
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                  CBCT Scan
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-65">
                  Full volumetric 3D imaging for implants, root canals & complex treatment planning.
                </p>
              </div>
              <div className="mt-5">
                <span className="inline-block text-[11px] text-white border border-white/30 rounded-full px-4 py-1.5">
                  Sub-mm precision
                </span>
              </div>
              {/* Number */}
              <span className="absolute bottom-5 right-6 text-5xl sm:text-6xl font-light text-gray-600 leading-none select-none">
                01
              </span>
            </div>

            {/* Card 2 — light */}
            <div className="relative flex-1 bg-[#f0f0f4] rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-50">
              <div>
                <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#1a5ab8] mb-2 font-medium">
                  Panoramic X-Ray
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0d1b2e] mb-3">
                  OPG Scan
                </h3>
                <p className="text-sm text-[#1a5ab8] leading-relaxed max-w-65">
                  Complete mouth-to-jaw overview in one fast, low-radiation image. Ideal for routine checks.
                </p>
              </div>
              <div className="mt-5">
                <span className="inline-block text-[11px] text-white bg-[#111] rounded-full px-4 py-1.5">
                  Full-mouth view
                </span>
              </div>
              {/* Number */}
              <span className="absolute bottom-5 right-6 text-5xl sm:text-6xl font-light text-[#b0b8c8] leading-none select-none">
                02
              </span>
            </div>

          </div>

          {/* ── Stats bar ── */}
          <div className="max-w-sm sm:max-w-md mx-auto mt-8 sm:mt-10 border border-gray-200 rounded-2xl">
            <div className="grid grid-cols-3 divide-x divide-gray-200">
              {[
                { value: "3D", label: "Cbct Imaging" },
                { value: ">10′", label: "Scan time" },
                { value: "0%", label: "Pain guaranteed" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center py-5 px-2">
                  <span className="text-xl sm:text-2xl font-semibold text-[#0d1b2e]">{value}</span>
                  <span className="text-[11px] sm:text-xs text-[#1a5ab8] mt-1 text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <StatSection />
      <div className="w-full bg-white sm:px-20 px-8 sm:py-10 py-8">
        <div className="py-10 space-y-1">
          <p className="text-center font-heading font-medium sm:text-[15px] text-[13px] text-[#072959]">WHY CHOOSE US</p>
          <h2 className="text-center  font-heading font-medium sm:text-[33px] text-[23px]">Trusted care for healthy smiles. </h2>
        </div>

        <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start">

            {/* ── Left: two stacked images ── */}
            <div className="w-full lg:w-[42%] xl:w-[38%] flex flex-col gap-3 sm:gap-4 shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                <Image
                  src="/treatments/treating1.webp"
                  alt="Dental team treating patient"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                <Image
                  src="/treatments/treating2.webp"
                  alt="Dentist at work"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>
            </div>

            {/* ── Right: feature list ── */}
            <div className="flex-1 flex flex-col justify-center items-start gap-6 sm:gap-7">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21C12 21 4 13.5 4 8a8 8 0 0 1 16 0c0 5.5-8 13-8 13z" />
                      <circle cx="12" cy="8" r="2" />
                    </svg>
                  ),
                  title: "Expert Dentists",
                  desc: "Our experienced and qualified dental professionals provide precise, reliable treatments using proven techniques for long-lasting oral health.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  ),
                  title: "Advanced Technology",
                  desc: "We use modern dental equipment and digital tools to ensure accurate diagnosis, faster procedures, and more comfortable treatment experiences.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 13s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  ),
                  title: "Comfortable Experience",
                  desc: "We prioritize your comfort with gentle, pain-free procedures and a calm environment designed to reduce anxiety during every visit.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                      <rect x="9" y="3" width="6" height="4" rx="1" />
                      <path d="M9 12h6M9 16h4" />
                    </svg>
                  ),
                  title: "Personalized Care",
                  desc: "Every patient receives a tailored treatment plan based on their unique dental condition, goals, and long-term oral health needs.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  ),
                  title: "Safe & Hygienic",
                  desc: "We follow strict sterilization and hygiene protocols to maintain a clean, safe, and infection-free environment for all patients.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  {/* Icon circle */}
                  <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#1a5ab8] flex items-center justify-center text-[#1a5ab8]">
                    {icon}
                  </div>
                  {/* Text */}
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#1a5ab8] mb-1">
                      {title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#555] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="w-full bg-[#E2E8F0] sm:px-20 px-8 sm:py-10 py-8">
        <div className="py-10 space-y-1">
          <p className="text-center font-heading font-medium sm:text-[15px] text-[13px] text-[#072959]">-PATIENT REVIEWS</p>
          <h2 className="text-center  font-heading font-medium sm:text-[33px] text-[23px]">What Our Patients Say </h2>
        </div>

        <div className="w-full bg-[#dce8f5] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {[
              {
                review: "I had a great experience at Raviraj Dental Clinic. The doctor was very professional and made me feel comfortable throughout the treatment.",
                name: "Raju Verma",
              },
              {
                review: "Excellent service and very hygienic clinic. The staff is friendly, and my treatment was completely painless. Highly recommended!",
                name: "Priya Patel",
              },
              {
                review: "Very satisfied with the results. The dentist explained everything clearly and provided the best care. Truly a trustworthy clinic.",
                name: "Amith Sharma",
              },
            ].map(({ review, name }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm min-h-70 sm:min-h-75"
              >
                {/* Quote icon — big */}
                <span className="text-7xl sm:text-8xl font-serif leading-none text-[#1a2f5e] -mb-4">
                  &ldquo;
                </span>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="#f5c842" className="w-5 h-5">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review text */}
                <p className="text-xs sm:text-[13px] text-[#444] leading-relaxed flex-1">
                  {review}
                </p>

                {/* Name */}
                <p className="text-xs sm:text-sm text-[#1a2f5e] font-medium text-right mt-auto">
                  ~{name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 space-y-1">
          <h2 className="text-center  font-heading font-medium sm:text-[33px] text-[23px]">Frequently Asked Question </h2>
          <p className="text-center  font-body font-normal sm:text-[14px] text-[12px] text-[#395781]">Answers to your common dental questions.</p>
        </div>



        <div className="w-full bg-[#dce8f5] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {faqs.map(({ q, a }, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? "bg-[#b8c8de]" : "bg-white"
                    }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                  >
                    <span className="text-sm sm:text-base font-medium text-[#0d1b2e]">
                      {q}
                    </span>
                    {/* Chevron — rotates when open */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-[#0d1b2e] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Animated answer panel */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 sm:px-6 pb-5 text-xs sm:text-[13px] text-[#444] leading-relaxed">
                        {a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
