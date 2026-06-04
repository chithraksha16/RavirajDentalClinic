"use client"
import Link from "next/link"
import Image from "next/image"
import Button from "./ui/Button"
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
const Header = () => {
    const [isMenu, setIsMenu] = useState(false);

    const handleMenu = () => {
        setIsMenu(!isMenu)
    }

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-white text-black h-17.5 shadow-md">
            <nav className="flex items-center justify-between px-4 md:px-6 lg:px-10 py-3">

                {/* Logo */}
                <div className="flex items-center">

                    <Image
                        className="w-12 md:w-14 h-auto"
                        src="/rrdc-logo.webp"
                        alt="Raviraj dental clinic logo"
                        width={65}
                        height={65}
                    />

                    <div className="flex flex-col leading-none">

                        <p className="font-heading font-medium text-[20px] md:text-[22px] lg:text-[27px]">
                            RAVIRAJ
                        </p>

                        <p className="font-heading font-medium text-[10px] md:text-[11px] lg:text-[12px] text-[#072959] flex justify-center">
                            DENTAL CLINIC
                        </p>

                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6 font-heading font-medium text-[15px]">

                    <Link href="/">Home</Link>

                    <Link href="/our-services">
                        Our Services
                    </Link>

                    <Link href="/about-us">
                        About Us
                    </Link>

                    <Link href="/contact-us">
                        Contact Us
                    </Link>

                </div>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-4">

                    <Button size="sm">
                        <Link href="">
                            +91 8105280460
                        </Link>
                    </Button>

                    <Link href="">
                        <Button
                            size="sm"
                            className="bg-[#072959] text-white"
                        >
                            Request Appointment
                        </Button>
                    </Link>

                </div>

                {/* Mobile + Tablet Menu */}
                <div className="flex lg:hidden">

                    <button onClick={handleMenu}>
                        <FiMenu size={28} />
                    </button>

                </div>

            </nav>
            {isMenu && (
                <div className="fixed top-0 right-0 w-70 h-screen bg-white shadow-2xl z-9999  p-6 flex flex-col justify-between transition-all duration-300">

                    {/* Top Section */}
                    <div>
                        <div className="flex justify-end mb-8">
                            <button onClick={() => setIsMenu(false)}>
                                <IoClose size={30} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 font-heading font-medium text-[18px]">
                            <Link href="/" className="flex justify-between items-center   transition-colors duration-200" onClick={() => setIsMenu(false)}>
                                <span>Home</span> <MdKeyboardArrowRight size={20} />
                            </Link>
                            <hr className="w-full text-black/10" />

                            <Link href="/our-services" className="flex justify-between items-center  transition-colors duration-200" onClick={() => setIsMenu(false)}>
                                <span>Our Services</span> <MdKeyboardArrowRight size={20} />
                            </Link>
                            <hr className="w-full text-black/10" />

                            <Link href="/about-us" className="flex justify-between items-center   transition-colors duration-200" onClick={() => setIsMenu(false)}>
                                <span>About Us</span> <MdKeyboardArrowRight size={20} />
                            </Link>
                            <hr className="w-full text-black/10" />

                            <Link href="/contact-us" className="flex justify-between items-center   transition-colors duration-200" onClick={() => setIsMenu(false)}>
                                <span>Contact Us</span> <MdKeyboardArrowRight size={20} />
                            </Link>
                            <hr className="w-full text-black/10" />
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className=" flex flex-col items-center gap-4">
                        <Link
                            href="tel:+918105280460"
                            className="font-heading font-medium text-[16px] px-8 py-1.5  border border-[#072959]"
                        >
                            +91 8105280460

                        </Link>

                        <Link href="">
                            <Button className="w-full bg-[#072959] text-white">
                                Request Appointment
                            </Button>
                        </Link>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Header
