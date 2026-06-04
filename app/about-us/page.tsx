import Button from "@/components/ui/Button"
import Marquee from "@/components/ui/Marquee"
import { FaArrowRight } from "react-icons/fa6"
import { FaRegHeart } from "react-icons/fa";
import { RiUserHeartLine } from "react-icons/ri";
import { RiPulseAiFill } from "react-icons/ri";
import { Metadata } from "next";
import StatsSection from "@/components/ui/StatSection";
import AboutGlimpse from "@/components/ui/AboutGlimpse"
import Image from "next/image";
export const metadata: Metadata = {
    title: "About-Us | Raviraj Dental Clinic",
    description:
        "Comprehensive dental treatments including cosmetic dentistry, orthodontics, implants, root canal therapy, and preventive dental care.",
    keywords: [
        "Dentist",
        "Dental Clinic",
        "Dental Services",
        "Root Canal",
        "Dental Implants",
        "Teeth Whitening",
        "Braces",
    ],
    openGraph: {
        title: "Raviraj Dental Clinic",
        description:
            "Professional dental care for healthy and confident smiles.",
        type: "website",
    },
};

const team = [
    {
        id: 1,
        photo: "/teams/Dr Anil Shetty.webp",
        caption: "THE DENTAL CHIEF",
        name: "Dr. Anil Shetty",
        speciality: "BDS,Chief Dental Surgeon & Implantology",
        description: "Dr. Anil Shetty brings 21+ years of dental expertise and a patient-centered approach to every treatment. His commitment to compassionate care and clinical excellence helps patients achieve healthier smiles with confidence."
    },
    {
        id: 2,
        photo: "/teams/Dr Sowjanya.webp",
        name: "Dr. Sowjanya Devadiga",
        speciality: "MDS,Dental Surgeon ",
        description: "Dr. Sowjanya Devadiga, MDS, Dental Surgeon, combines advanced clinical expertise with a compassionate, patient-focused approach. Dedicated to delivering high-quality dental care, she helps patients achieve healthy, confident smiles through personalized treatment and attention to detail."
    },
    {
        id: 3,
        photo: "/teams/Dr Shwetha.webp",
        name: "Dr. Shwetha Shanbhag",
        speciality: "MDS,Dental Surgeon ",
        description: "Dr. Shwetha Shanbhag, MDS, Dental Surgeon, is committed to providing exceptional dental care through a blend of clinical excellence, precision, and compassion. Her patient-centered philosophy and attention to detail help create positive dental experiences and lasting oral health outcomes."
    },
    {
        id: 4,
        photo: "/teams/Dr Sahana.webp",
        name: "Dr. Sahana Sheikh",
        speciality: "BDS,Dental Surgeon ",
        description: "Dr. Sahana Sheikh, BDS, Dental Surgeon, combines clinical expertise with a gentle and caring approach to patient care. Committed to excellence and attention to detail, she strives to deliver effective dental treatments that promote long-term oral health and confident smiles."
    },
    {
        id: 5,
        photo: "/teams/Dr. Pannaga.webp",
        name: "Dr. Pannaga B Shetty",
        speciality: "BDS,Dental Surgeon ",
        description: "Dr. Sahana Sheikh, BDS, Dental Surgeon, combines clinical expertise with a gentle and caring approach to patient care. Committed to excellence and attention to detail, she strives to deliver effective dental treatments that promote long-term oral health and confident smiles."
    },
    {
        id: 6,
        photo: "/teams/Dr.Donna.webp",
        name: "Dr. Donna Bennny Joseph",
        speciality: "BDS,Dental Surgeon ",
        description: "Dr. Donna Benny Joseph, BDS, Dental Surgeon, combines clinical knowledge with a caring and attentive approach to dentistry. Dedicated to patient comfort and quality care, she strives to create positive dental experiences while helping patients maintain healthy, beautiful smiles."
    },
    {
        id: 7,
        photo: "/teams/Dr tejkiran.webp",
        name: "Dr. Tejkiran Shetty",
        speciality: "MDS,Oral and Maxillofacial Surgeon",
        description: "Dr. Tejkiran Shetty, MDS, Oral and Maxillofacial Surgeon, specializes in providing expert surgical care with a focus on clinical excellence and patient comfort. His commitment to advanced treatment techniques and individualized care ensures optimal outcomes for a wide range of oral and maxillofacial procedures."
    },
    {
        id: 8,
        photo: "/teams/Dr Ulka (2).webp",
        name: "Dr. Ulka Vasudev",
        speciality: "MDS, Pediatric Dentist",
        description: "Dr. Ulka Vasudev, MDS, Pediatric Dentist, combines advanced clinical expertise with a compassionate and child-friendly approach to dental care. Committed to making every visit a positive experience, she works closely with children and parents to promote excellent oral health and lifelong healthy smiles."
    },
    {
        id: 9,
        photo: "/teams/Dr sumanth.webp",
        name: "Dr. Sumanth",
        speciality: "BDS,Dental Surgeon ",
        description: "Dr. Ulka Vasudev, MDS, Pediatric Dentist, combines advanced clinical expertise with a compassionate and child-friendly approach to dental care. Committed to making every visit a positive experience, she works closely with children and parents to promote excellent oral health and lifelong healthy smiles."
    },

]


const page = () => {


    return (
        <section >
            <div className="w-full h-130 bg-black pt-10">
                <h1 className="text-center font-heading font-medium sm:text-[40px] text-[30px] text-white pt-15 flex flex-col"><span className="text-[#072959]">About</span>  Our Dental Care</h1>
                <p className="font-heading sm:text-[14px] text-[12px]   text-center text-[#8D9EB7]">Dedicated to providing trusted dental care for a healthy, confident smile.</p>
                <div className="flex items-center flex-col gap-5 justify-center mt-18">
                    <p className="font-heading sm:text-[14px] text-[12px] sm:w-175 w-auto px-2 sm:px-0 text-center text-[#8D9EB7]">At our clinic, we deliver high-quality dental care with an emphasis on comfort, hygiene, and long-term results. Our experienced team is committed to helping you achieve a healthy, confident smile.</p>
                    <Button className="bg-[#072959] text text-white flex gap-1" size="sm">Request Consultation <FaArrowRight />  </Button>
                </div>
            </div>
            <Marquee />
            <div className="w-full bg-white sm:px-20 px-8 sm:py-10 py-8">
                <div className="py-10 space-y-1">
                    <p className="text-center font-heading font-medium sm:text-[15px] text-[13px] text-[#072959]">OUR STORY</p>
                    <h2 className="text-center  font-heading font-medium sm:text-[33px] text-[23px]">Care That Starts With Understanding</h2>
                </div>
                <div className="flex flex-col gap-8 max-w-5xl mx-auto">

                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-5">
                        <p className="font-body font-medium text-[16px] text-[#4C4B48] flex-1">
                            Our clinic was built with one clear purpose — to deliver dental care that feels personal, transparent, and genuinely comfortable for every patient who walks through our doors.
                        </p>
                        <div className="flex items-start gap-4 bg-[#E6EAEF] rounded-xl p-5 w-full md:w-75 shrink-0">
                            <span className="bg-[#B2BECE] p-2 rounded-lg flex items-center justify-center">
                                <FaRegHeart className="text-[#082D62]" size={20} />
                            </span>
                            <div>
                                <h5 className="font-semibold text-[14px] text-[#082D62] mb-1">Founded with purpose</h5>
                                <p className="text-[13px] text-[#6b6a67] leading-relaxed">Created to give patients a space where they feel genuinely heard, respected, and cared for at every visit.</p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-[#e0ddd8]" />

                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-5">
                        <p className="font-body font-medium text-[16px] text-[#4C4B48] flex-1">
                            We understand that many people feel nervous about visiting the dentist. That is why our entire environment — from our team to our treatment rooms — is designed to put you at ease from the very first moment.
                        </p>
                        <div className="flex items-start gap-4 bg-[#E6EAEF] rounded-xl p-5 w-full md:w-75 shrink-0">
                            <span className="bg-[#B2BECE] p-2 rounded-lg flex items-center justify-center">
                                <RiUserHeartLine className="text-[#082D62]" size={20} />
                            </span>
                            <div>
                                <h5 className="font-semibold text-[14px] text-[#082D62] mb-1">Patient-centered always</h5>
                                <p className="text-[13px] text-[#6b6a67] leading-relaxed">Every decision — from equipment to scheduling — is guided by what is best for the patient, not the clinic.</p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-[#e0ddd8]" />

                    {/* Row 3 */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-5">
                        <p className="font-body font-medium text-[16px] text-[#4C4B48] flex-1">
                            Our goal is not just to treat dental problems, but to build long-term trust through ethical recommendations, modern treatment methods, and a warm, welcoming clinic experience.
                        </p>
                        <div className="flex items-start gap-4 bg-[#E6EAEF] rounded-xl p-5 w-full md:w-75 shrink-0">
                            <span className="bg-[#B2BECE] p-2 rounded-lg flex items-center justify-center">
                                <RiPulseAiFill className="text-[#082D62]" size={20} />
                            </span>
                            <div>
                                <h5 className="font-semibold text-[14px] text-[#082D62] mb-1">Built for long-term health</h5>
                                <p className="text-[13px] text-[#6b6a67] leading-relaxed">We focus on preventive care and education so your smile stays healthy and confident for years to come.</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="py-10 space-y-1">
                    <p className="text-center font-heading font-medium sm:text-[15px] text-[13px] text-[#072959]">MISSION & PHILOSOPHY</p>
                    <h2 className="text-center  font-heading font-medium sm:text-[33px] text-[23px]">How We Treat Every Patient </h2>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
                    <Image
                        src="/about1.webp"
                        alt="Dr.Anil shetty treating patient"
                        width={600}
                        height={500}
                        loading="lazy"
                        className="w-full lg:w-auto object-fit rounded-md"
                    />
                    <div className="flex flex-col gap-5">
                        <div className="p-3 bg-[#E6EAEF] rounded-md">
                            <h5 className="font-heading font-medium text-[14px] text-[#72959]">Clear communication</h5>
                            <p className="font-body font-medium text-[13px] text-[#4C4B48]">We explain every treatment step before we begin — no surprises, no confusion, full clarity always.</p>
                        </div>

                        <div className="p-3 bg-[#E6EAEF] rounded-md">
                            <h5 className="font-heading font-medium text-[14px] text-[#72959]">Ethical recommendations</h5>
                            <p className="font-body font-medium text-[13px] text-[#4C4B48]">We recommend only what is clinically right for you — never what is unnecessary or profit-driven.</p>
                        </div>

                        <div className="p-3 bg-[#E6EAEF] rounded-md">
                            <h5 className="font-heading font-medium text-[14px] text-[#72959]">Comfort-first approach</h5>
                            <p className="font-body font-medium text-[13px] text-[#4C4B48]">Gentle techniques and a calm environment help even the most anxious patients feel completely at ease.</p>
                        </div>

                        <div className="p-3 bg-[#E6EAEF] rounded-md">
                            <h5 className="font-heading font-medium text-[14px] text-[#72959]">Long-term oral health</h5>
                            <p className="font-body font-medium text-[13px] text-[#4C4B48]">We focus beyond the immediate treatment — building lasting oral health through preventive guidance.</p>
                        </div>
                    </div>
                </div>
            </div>
            <StatsSection />
            <div className="w-full bg-[#E2E8F0] sm:px-20 px-8 sm:py-10 py-8">
                <div className="py-10 space-y-1">
                    <p className="text-center font-heading font-medium sm:text-[15px] text-[13px] text-[#072959]">MEET THE TEAM</p>
                    <h2 className="text-center  font-heading font-medium sm:text-[33px] text-[23px]">The Team Behind Your Smile</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-0 mx-auto justify-items-center
[grid-template-columns:280px] 
md:[grid-template-columns:repeat(2,280px)] 
xl:[grid-template-columns:repeat(3,336px)]">
                    {team.map((teams) => (
                        <div key={teams.id} className="w-[280px] xl:w-[336px] flex flex-col bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">

                            <Image
                                src={teams.photo || ""}
                                alt={teams.name}
                                width={336}
                                height={375}
                                className="w-full h-[330px] xl:h-[375px] object-cover object-top"
                            />

                            <div className="h-[1px] bg-gray-100" />

                            <div className="flex flex-col items-center text-center gap-1 px-4 py-5">
                                {teams?.caption && (
                                    <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2563eb] mb-1">
                                        {teams.caption}
                                    </span>
                                )}
                                <h3 className="font-heading font-semibold text-[22px] text-[#1a1a1a] leading-snug">
                                    {teams.name}
                                </h3>
                                <h4 className="font-body text-[14px] font-medium text-[#2563eb] mb-2">
                                    {teams.speciality}
                                </h4>
                                <p className="font-body text-[13px] text-[#4C4B48] leading-relaxed">
                                    {teams.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
                <div className="pt-20 pb-10 space-y-4">
                    <h2 className="text-center font-heading font-medium sm:text-[33px] text-[23px]">
                        Meet Our Dedicated Team
                    </h2>
                    <p className="text-center font-body font-normal sm:text-[14px] text-[12px] text-black max-w-xl mx-auto">
                        Our dentists and support staff work together to create a comfortable, welcoming environment where every patient receives attentive and compassionate care.
                    </p>

                    {/* Image with padding like screenshot */}
                    <div className="px-4 sm:px-8 md:px-12 lg:px-16 pt-4">
                        <Image
                            src="/teams/fullteam-rrdc.webp"
                            alt="Raviraj dental clinic full team photo"
                            width={1140}
                            height={520}
                            unoptimized
                            className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] object-cover rounded-xl"
                        />
                    </div>
                </div>

            </div>
            <div className="w-full bg-white sm:px-20 px-8 sm:py-10 py-8">
            <div className="py-10 space-y-1">
                    <p className="text-center font-heading font-medium sm:text-[15px] text-[13px] text-[#072959]">OUR SPACE</p>
                    <h2 className="text-center  font-heading font-medium sm:text-[33px] text-[23px]">A Glimpse Inside Our Clinic</h2>
                </div>
                <AboutGlimpse/>
            </div>
            
        </section>
    )
}

export default page
