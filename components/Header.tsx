"use client"
import Link from "next/link"
import Image from "next/image"
import Button from "./ui/Button"
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isMenu, setIsMenu] = useState(false);
    const pathname = usePathname();

    const handleMenu = () => {
        setIsMenu(!isMenu)
    }

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/our-services", label: "Our Services" },
        { href: "/about-us", label: "About Us" },
        { href: "/contact-us", label: "Contact Us" },
    ];

    const linkClass = (href:string) =>
        `transition-colors duration-200 ${
            pathname === href
                ? "underline underline-offset-4 decoration-[#072959] decoration-2"
                : "" 
        }`;

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-white text-black h-20 shadow-md">
            <nav className="flex items-center justify-between px-4 md:px-6 lg:px-10 py-3">

                {/* Logo */}
                <Link href="/">
                <div className="flex items-center">
                    <Image
                        className="w-15 md:w-17 h-auto"
                        src="/rrdc-logo.webp"
                        alt="Raviraj dental clinic logo"
                        loading="eager"
                        width={65}
                        height={65}
                    />
                    <Link href="/"><div className="flex flex-col leading-none">
                        <p className="font-heading font-medium text-[25px] md:text-[25px] lg:text-[30px]">
                            RAVIRAJ
                        </p>
                        <p className="font-heading font-medium text-[13px] md:text-[14px] lg:text-[15px] text-[#072959] flex justify-center">
                            DENTAL CLINIC
                        </p>
                    </div>
                    </Link>
                </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6 font-heading font-medium text-[15px]">
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className={linkClass(href)}>
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button size="sm">
                        <Link href="tel:+918971841403">+91 8971841403</Link>
                    </Button>
                    <Link href="https://www.dentee.com/clinic/udupi/raviraj-dental-clinic/3e115265-aaea-4469-a93a-8f3d0160f242" target="_blank">
                        <Button size="sm" className="bg-[#072959] text-white">
                            Request Appointment
                        </Button>
                    </Link>
                </div>

                {/* Mobile + Tablet Menu */}
                <div className="flex lg:hidden">
                    <button onClick={handleMenu}>
                        <FiMenu size={30} />
                    </button>
                </div>
            </nav>

            {isMenu && (
                <div className="fixed top-0 right-0 w-70 h-screen bg-white shadow-2xl z-9999 p-6 flex flex-col justify-between transition-all duration-300">

                    {/* Top Section */}
                    <div>
                        <div className="flex justify-end mb-8">
                            <button onClick={() => setIsMenu(false)}>
                                <IoClose size={30} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 font-heading font-medium text-[18px]">
                            {navLinks.map(({ href, label }) => (
                                <div key={href}>
                                    <Link
                                        href={href}
                                        className={`flex justify-between items-center transition-colors duration-200 ${
                                            pathname === href
                                                ? "underline underline-offset-4 decoration-[#072959] decoration-2"
                                                : ""
                                        }`}
                                        onClick={() => setIsMenu(false)}
                                    >
                                        <span>{label}</span>
                                        <MdKeyboardArrowRight size={20} />
                                    </Link>
                                    <hr className="w-full text-black/10 mt-6" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="tel:+918971841403"
                            className="font-heading font-medium text-[16px] px-8 py-1.5 border border-[#072959]"
                        >
                            +91 8971841403
                        </Link>
                        <Link href="https://www.dentee.com/clinic/udupi/raviraj-dental-clinic/3e115265-aaea-4469-a93a-8f3d0160f242" target="_blank">
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