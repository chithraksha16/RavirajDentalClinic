import Link from "next/link";
import Button from "@/components/ui/Button"
import Marquee from "@/components/ui/Marquee"
import { FaArrowRight } from "react-icons/fa6"
import { FaRegHeart } from "react-icons/fa";
import { RiUserHeartLine } from "react-icons/ri";
import { RiPulseAiFill } from "react-icons/ri";
import StatsSection from "@/components/ui/StatSection";
import AboutGlimpse from "@/components/ui/AboutGlimpse"
import Image from "next/image";

const team = [
    {
        id: 1,
        photo: "/teams/Dr Anil Shetty.webp",
        caption: "THE DENTAL CHIEF",
        name: "Dr. Anil Shetty",
        speciality: "BDS,Chief Dental Surgeon & Implantology",
        description: "Dr. Anil Shetty, BDS, Chief Dental Surgeon, a graduate of KVG Dental College, Sullia, Karnataka, with a Fellowship in Implantology from Annoor Dental College, brings over 21 years of clinical experience. Committed to patient-centered care, he strives to restore oral health, function, and confident smiles through compassionate and personalized treatment."
    },
    {
        id: 2,
        photo: "/teams/dr soujanya.webp",
        name: "Dr. Soujanya Devadiga",
        speciality: "BDS,Dental Surgeon ",
        description: "Dr. Soujanya Devadiga, BDS, Dental Surgeon, a graduate of KVG Dental College (2009–2014), brings 12 years of clinical experience and a Fellowship in Implant Dentistry. Combining advanced expertise with a compassionate, patient-focused approach, she delivers personalized dental care to help patients achieve healthy, confident smiles."
    },
    {
        id: 3,
        photo: "/teams/dr shwetha2.webp",
        name: "Dr. Shwetha Shanbhag",
        speciality: "MDS,Dental Surgeon ",
        description: "Dr. Shwetha Shanbhag, MDS, Orthodontist, a graduate of AECS Maruthi Dental College, Bangalore (2014–2019) and Oxford Dental College (2021–2024), brings 6 years of clinical experience. She combines clinical excellence, precision, and compassion to deliver exceptional patient-centered orthodontic care."
    },
    {
        id: 4,
        photo: "/teams/dr sahana2.webp",
        name: "Dr. Sahana Sheikh",
        speciality: "BDS,Dental Surgeon ",
        description: "Dr. Sahana Sheikh, BDS, Dental Surgeon, a graduate of Yenepoya Dental College (2016–2021) with a Fellowship in Implant Dentistry, brings 4 years of clinical experience. She combines clinical expertise with a gentle, caring approach to deliver effective dental care and confident smiles."
    },
    {
        id: 5,
        photo: "/teams/dr pannaga2.webp",
        name: "Dr. Pannaga B Shetty",
        speciality: "BDS,Dental Surgeon ",
        description: "Dr. Pannaga Shetty, BDS, Dental Surgeon, a graduate of NSVK Sri Venkateshwara Dental College (2019–2024), combines modern dental knowledge with a gentle, patient-centered approach. With 2 years of clinical practice, she is committed to providing quality dental care and helping patients achieve confident smiles."
    },
    {
        id: 6,
        photo: "/teams/dr donna2.webp",
        name: "Dr. Donna Bennny Joseph",
        speciality: "BDS,Dental Surgeon ",
        description: "Dr. Donna Benny Joseph, BDS, Dental Surgeon, a graduate of Subbaiah Dental College (2020–2025), combines clinical knowledge with a caring and attentive approach. With 1 year of clinical experience, she is dedicated to patient comfort, quality care, and healthy smiles."
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
        name: "Dr. Sumanth Kumar G",
        speciality: "MDS,Conservative Denstist & Endodontist",
        description: "Dr. Sumanth Kumar G., BDS, MDS, Conservative Dentist and Endodontist, combines advanced expertise in restorative and endodontic care with a patient-focused approach. Dedicated to preserving natural teeth, he delivers precise, evidence-based treatments that prioritize comfort, function, and long-term oral health outcomes."
    },
    {
        id: 10,
        photo: "/teams/Dr. Naresh.webp",
        name: "Dr. Naresh Shetty",
        speciality: "MDS, Prosthodontist and Implantologist",
        description: "Dr. Naresh Shetty, BDS, MDS, Prosthodontist and Implantologist, a graduate of JSS Dental College, Mysore, with an MDS from A.B. Shetty Memorial Institute of Dental Sciences, Mangalore, brings 18+ years of clinical experience. He is dedicated to advanced implantology, prosthodontic excellence, and restoring healthy, confident smiles."
    },
    {
        id: 11,
        photo: "/teams/dr kiran.webp",
        name: "Dr. Kiran Shetty",
        speciality: "MDS,Orthodontist",
        description: "Dr. Kiran Shetty, BDS, MDS, Orthodontist, brings 25+ years of clinical experience in creating healthy, confident smiles. Combining extensive expertise with a patient-centered approach, he is dedicated to delivering personalized orthodontic care with precision, comfort, and lasting results."
    },
    {
        id: 12,
        photo: "/teams/dr jhonson.webp",
        name: "Dr. Johnson D’lima",
        speciality: "MDS,Periodontist and Implantologist",
        description: "Dr. Johnson D'Lima, BDS, MDS, Periodontist and Implantologist, a graduate of Manipal College of Dental Sciences, Manipal, with advanced training and international fellowships in Oral Implantology, brings over 25 years of clinical and academic experience. Dedicated to evidence-based, patient-centered care, he strives to restore oral health, function, and confident smiles through personalized treatment."
    },
    {
        id: 13,
        photo: "/teams/dr bharath.webp",
        name: "Dr. Bharath Kumar AM",
        speciality: "MDS,Periodontist",
        description: "Dr. Bharath Kumar A.M. is a highly skilled Periodontist and Laser Dental Surgeon with over 10 years of clinical experience in advanced periodontal care and surgical dentistry. he specializes in laser-assisted periodontal procedures, complex periodontal disease management, gum disease treatment, periodontal regeneration, soft tissue grafting, bone grafting, and advanced surgical procedures aimed at preserving and restoring oral health."
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
                    <Link href="https://www.dentee.com/clinic/udupi/raviraj-dental-clinic/3e115265-aaea-4469-a93a-8f3d0160f242" target="_blank" ><Button className="bg-[#072959] text text-white flex gap-1" size="sm">Request Consultation <FaArrowRight />  </Button></Link>
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

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-0 mx-auto justify-items-center">
                    {team.map((teams) => (
                        <div key={teams.id} className="w-70 xl:w-84 flex flex-col bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">

                            <Image
                                src={teams.photo || ""}
                                alt={teams.name}
                                width={336}
                                height={375}
                                className="w-full h-82.5 xl:h-93.75 object-cover object-top"
                            />

                            <div className="h-px bg-gray-100" />

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
                            src="/teams/rrdc-fullteam.webp"
                            alt="Raviraj dental clinic full team photo"
                            width={1140}
                            height={520}
                            unoptimized
                            className="w-full h-55 sm:h-80 md:h-105 lg:h-130 object-cover rounded-xl"
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
