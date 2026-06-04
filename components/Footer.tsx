import Image from "next/image"
import Button from "./ui/Button"
import Link from "next/link"
import { FaFacebookF,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube ,FiLink,FiPhone,FiMail} from "react-icons/fi";
import { RiDossierFill,RiMapPinLine } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { HiMiniArrowTurnRightDown } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="w-full bg-[#141414]  text-white sm:p-10 p-8 z-40 ">
            <div className="w-full flex flex-col sm:space-y-20 space-y-16">
                <div className="flex sm:flex-row flex-col justify-between gap-4">
                    <h2 className="font-heading font-medium sm:text-[24px] text-[19px] text-center sm:text-left">Smile Better, Live Better Today</h2>
                    <Button size="sm" className="bg-[#072959] text-white flex items-center gap-1">Request Appointment <FaArrowRight /></Button>
                </div>
                <div className="flex justify-center "><hr className="sm:w-[85%] w-[95%] text-[#072959] opacity-50  " /></div>
                <div className="flex py-4 justify-between  flex-wrap flex-1 sm:px-0 px-2 sm:space-y-0 space-y-16">
                    <div className="flex flex-col space-y-3 ">
                        <div className="flex">
                            <Image
                                src="/rrdc-logo.webp"
                                alt="Raviraj dental clinic logo"
                                width={65}
                                height={65}
                                loading="eager"
                            />
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-heading font-medium text-[27px] leading-none ">RAVIRAJ</p>
                                <p className="font-heading font-medium text-[12px] leading-none text-[#072959]">DENTAL CLINIC</p>
                            </div>
                        </div>
                        <p className="sm:w-87.5 w-62.5 font-body sm:text-[14px] text-[12px] font-normal text-[#B2BECE]">At Raviraj Dental Clinic, we deliver trusted dental care with comfort, precision, and a patient-first approach.</p>
                        <div className="flex gap-3">
                            <Link className="w-[38.5px] h-7 border rounded-md flex items-center justify-center border-white/40" href={"/"}><FaFacebookF /></Link>
                            <Link className="w-[38.5px] h-7 border rounded-md flex items-center justify-center border-white/40" href={"/"}><FaInstagram /></Link>
                            <Link className="w-[38.5px] h-7 border rounded-md flex items-center justify-center border-white/40" href={"/"}><FaXTwitter /></Link>
                            <Link className="w-[38.5px] h-7 border rounded-md flex items-center justify-center border-white/40" href={"/"}><FiYoutube /></Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <h3 className="font-heading text-[24px] font-medium flex items-center gap-2 text-[#5A7296]">Quick Links <FiLink /></h3>
                        <nav>
                            <ul className="flex flex-col space-y-5 font-body text-[16px] font-normal px-1.5 text-[#B2BECE] ">
                                <li className="hover:text-white"><Link href={""}>Home</Link></li>
                                <li className="hover:text-white"><Link href={""}>Our Services</Link></li>
                                <li className="hover:text-white"><Link href={""}>About Us</Link></li>
                                <li className="hover:text-white"><Link href={""}>Contact Us</Link></li>
                                <li className="hover:text-white"><Link href={""}>FAQ</Link></li>
                                <li className="hover:text-white"><Link href={""}>Testimonials</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <h3 className="font-heading text-[24px] font-medium flex items-center gap-2 text-[#5A7296]">Treatments <RiDossierFill /></h3>
                        <ul className="flex flex-col space-y-5 font-body text-[16px] font-normal px-1.5 text-[#B2BECE]">
                            <li className="hover:text-white"><Link href={""}>Teeth Cleaning</Link></li>
                            <li className="hover:text-white"> <Link href={""}>Root Canal Treatment</Link></li>
                            <li className="hover:text-white"> <Link href={""}>Dental Implants</Link></li>
                            <li className="hover:text-white"><Link href={""}>Teeth Whitening</Link></li>
                            <li className="hover:text-white"><Link href={""}>Braces & Aligners</Link></li>
                            <li className="hover:text-white"><Link href={""}>Tooth Extraction</Link></li>
                        </ul>
                    </div>
                    <div className="flex  flex-col space-y-5">
                        <h3 className="font-heading text-[24px] font-medium flex items-center gap-2 text-[#5A7296]">Reach Us <HiMiniArrowTurnRightDown /></h3>
                        <div className="flex gap-3 px-1.5">
                            <span className="w-[38.5px] h-7 px-2 border rounded-md flex items-center justify-center border-white/40"><RiMapPinLine /></span>
                            <div className="flex flex-col gap-1">
                                <h4 className="font-heading font-medium text-[14px] text-[#072959]">ADDRESS</h4>
                                <p className="sm:w-75 w-auto font-body font-normal text-[12px] pl-3">1st Floor, Manish Plaza, near Market, Baindur, Yedthare, Karnataka 576214</p>
                            </div>
                        </div>
                        <div className="flex gap-3 px-1.5">
                            <span className="w-[38.5px] h-7 px-2 border rounded-md flex items-center justify-center border-white/40"><FiPhone /></span>
                            <div className="flex flex-col gap-1">
                                <h4 className="font-heading font-medium text-[14px] text-[#072959]">PHONE</h4>
                                <p className="sm:w-75 w-auto font-body font-normal text-[12px]">+91 8105280460</p>
                            </div>
                        </div>
                        <div className="flex gap-3 px-1.5">
                            <span className="w-[38.5px] h-7 px-2 border rounded-md flex items-center justify-center border-white/40"><FiMail /></span>
                            <div className="flex flex-col gap-1">
                                <h4 className="font-heading font-medium text-[14px] text-[#072959]">EMAIL</h4>
                                <p className="sm:w-75 w-auto font-body font-normal text-[12px]">hello@ravirajclinic.com</p>
                            </div>
                        </div>
                        <div className="flex gap-3 px-1.5">
                            <span className="w-[38.5px] h-7 px-2 border rounded-md flex items-center justify-center border-white/40"><IoTimeOutline /></span>
                            <div className="flex flex-col gap-1">
                                <h4 className="font-heading font-medium text-[14px] text-[#072959]">CLINIC HOURS</h4>
                                <p className="sm:w-75 w-auto font-body font-normal text-[12px]">Mon-Sat : 9:00AM-7:00PM (Sun: till 2:00PM)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center"><hr className="sm:w-[85%] w-[95%] text-blue-800 opacity-50 " /></div>
                <p className="text-center font-body sm:text-[12px] text-[10px]">© {new Date().getFullYear()} Raviraj Dental Clinic. Crafted with ♥ for confident smiles.</p>
            </div>
        </footer>
    )
}

export default Footer
