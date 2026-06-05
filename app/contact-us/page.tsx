"use client"
import Button from "@/components/ui/Button"
import Marquee from "@/components/ui/Marquee"
import { FaArrowRight } from "react-icons/fa6"
import Link from "next/link"
import { IoCallOutline,IoLogoWhatsapp,IoLogoInstagram,IoLocationOutline,IoCar  } from "react-icons/io5";
import { LuMapPin, LuLandmark } from "react-icons/lu";
import { RiFileList2Line,RiAlarmWarningLine } from "react-icons/ri";
import { TfiDirection } from "react-icons/tfi";
import { MdOutlineAccessTime } from "react-icons/md";
import GoogleMap from "@/components/GoogleMap";
import { motion } from "framer-motion";

const page = () => {
  return (
    <section>
        <div className="w-full h-130 bg-black pt-10">
        <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.6,delay:0.2}}>
        
        <h1 className="text-center font-heading font-medium sm:text-[40px] text-[30px] text-white pt-15 flex flex-col"><span className="text-[#072959]">Our</span> Dental Care Contact</h1>
        <p className="font-heading sm:text-[14px] text-[12px]   text-center text-[#8D9EB7]">Get in touch with us for trusted dental care and support.</p>
        <div className="flex items-center flex-col gap-5 justify-center mt-18">
          <p className="font-heading sm:text-[14px] text-[12px] sm:w-175 w-auto px-2 sm:px-0 text-center text-[#8D9EB7]">Experience dental care that prioritizes your comfort, hygiene, and lasting results. Our skilled team is dedicated to helping you maintain a healthy, confident smile.</p>
          <Button  className="bg-[#072959] text text-white flex gap-1" size="sm">Request Consultation <FaArrowRight />  </Button>
        </div>
        </motion.div>
      </div>
      <Marquee />
      <div className="w-full bg-white sm:px-20 px-8 sm:py-10 py-8">
        <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.6,delay:0.2}}
        className="py-10 space-y-1">
          <p className="text-center font-heading font-medium sm:text-[15px] text-[13px] text-[#072959]">CONTACT US</p>
          <h2 className="text-center  font-heading font-medium sm:text-[33px] text-[23px]">Get in touch with our team </h2>
          <p className="text-center  font-body font-normal sm:text-[14px] text-[12px] text-[#395781]">We're here to help — call, message, or visit us directly. Same-day appointments available.Call now WhatsApp us</p>
        </motion.div>
        <div className="flex justify-center py-5">
        <div
        className="flex flex-wrap justify-center gap-4">
          <Link className="flex items-center gap-1 font-heading font-normal text-[13px] px-2 py-1 border rounded-xl bg-[#072959] text-white" href={''}><IoCallOutline /><span>Call Now</span></Link>
          <Link className="flex items-center gap-1 font-heading font-normal text-[13px] px-2 py-1 border rounded-xl bg-[#0A8721] text-white" href={''}><IoLogoWhatsapp /><span>WhatsApp</span></Link>
          <Link className="flex items-center gap-1 font-heading font-normal text-[13px] px-2 py-1 border rounded-xl bg-black text-white" href={''}><IoLogoInstagram /><span>Instagram</span></Link>
          <Link className="flex items-center gap-1 font-heading font-normal text-[13px] px-2 py-1 border rounded-xl bg-[#87510A] text-white" href={''}><IoLocationOutline /><span>Get Map</span></Link>
        </div>
        </div>

        <div className="flex sm:justify-center sm:gap-20 gap-10 md:gap-5  sm:flex-row flex-col py-10">
          <div 
          className="border border-[#E6EAEF] flex flex-col items-start  w-auto space-y-4">
            <div className=" flex gap-2 bg-[#E6EAEF] p-8 w-full ">
              <span className=""><LuMapPin size={20} /></span>
              <div>
              <h3 className="font-heading font-medium sm:text-[22px] text-[16px]">Clinic Address</h3>
              <p className="font-body font-medium sm:text-[12px] text-[10px] sm:w-68 w-auto">Visit us anytime during hours</p>
              </div>
            </div>
            <div className=" flex gap-2 px-6">
              <span className="w-8 h-8 bg-[#E6EAEF] flex items-center justify-center"><RiFileList2Line size={20} /></span>
              <div>
              <h3 className="font-heading font-medium sm:text-[19px] text-[16px]">Raviraj Dental Clinic</h3>
              <p className="font-body font-medium sm:text-[12px] text-[10px] sm:w-68 w-auto">1st Floor, Manish Plaza, near Market, Baindur, Yedthare, Karnataka 576214</p>
              </div>
            </div>
            <div className="flex gap-2 px-6">
              <span className="w-8 h-8 bg-[#E6EAEF] flex items-center justify-center"><LuLandmark size={20} /></span>
              <div>
              <h3 className="font-heading font-medium sm:text-[19px] text-[16px]">Land Mark</h3>
              <p className="font-body font-medium sm:text-[12px] text-[10px] sm:w-68 w-auto">MAIN ROAD BYNDOOR Byndoor Karnataka India 576214</p>
              </div>
            </div>
            <div className="flex gap-2 px-6">
              <span className="w-8 h-8 bg-[#E6EAEF] flex items-center justify-center"><IoCar size={20} /></span>
              <div>
              <h3 className="font-heading font-medium sm:text-[19px] text-[16px]">Parking</h3>
              <p className="font-body font-medium sm:text-[12px] text-[10px] sm:w-68 w-auto">Free parking available on premises for patients</p>
              </div>
            </div>
            <div className="flex gap-2 px-6">
              <span className="w-8 h-8 bg-[#E6EAEF] flex items-center justify-center shrink-0"><TfiDirection size={20} /></span>
              <div>
              <h3 className="font-heading font-medium sm:text-[19px] text-[16px]">Transit</h3>
              <p className="font-body font-medium sm:text-[12px] text-[10px] sm:w-68 w-auto">Just 3 minutes away from nearby bus stop</p>
              </div>
            </div>
          </div>
          <div
          className="border border-[#E6EAEF] flex flex-col items-center  w-auto space-y-4">
            <div className=" flex gap-2 bg-[#E6EAEF] p-8 w-full ">
              <span className=""><MdOutlineAccessTime  size={20}/></span>
              <div>
              <h3 className="font-heading font-medium sm:text-[22px] text-[16px]">Clinic Hours</h3>
              <p className="font-body font-medium sm:text-[12px] text-[10px] sm:w-68 w-auto">When we're open for you</p>
              </div>
            </div>
            <div className="w-full px-4  flex flex-col gap-3 space-y-2 ">
              <p className="flex justify-between font-body font-normal text-[14px] ">MONDAY<span className="text-[#008A23]">9:00AM-7:30PM</span></p>
              <p className="flex justify-between font-body font-normal text-[14px]">TUESDAY<span className="text-[#008A23]">9:00AM-7:30PM</span></p>
              <p className="flex justify-between font-body font-normal text-[14px]">WEDNESDAY<span className="text-[#008A23]">9:00AM-7:30PM</span></p>
              <p className="flex justify-between font-body font-normal text-[14px]">THURSDAY<span className="text-[#008A23]">9:00AM-7:30PM</span></p>
              <p className="flex justify-between font-body font-normal text-[14px]">FRIDAY<span className="text-[#008A23]">9:00AM-7:30PM</span></p>
              <p className="flex justify-between font-body font-normal text-[14px]">SATURDAY<span className="text-[#008A23]">9:00AM-7:30PM</span></p>
              <p className="flex justify-between font-body font-normal text-[14px]">SUNDAY<span className="text-[#008A23]">9:00AM-2:00PM</span></p>
            </div> 

          </div>
        </div>

          <GoogleMap/>
    

        <div className="flex justify-center items-center px-4">

  <div
    className="mt-10 border border-[#AC3434] rounded flex flex-col lg:flex-row items-start lg:items-center gap-5 p-5 w-full max-w-5xl">

    {/* Icon */}
    <div className="flex items-center justify-center">
      <span className="text-[#AC3434]">
        <RiAlarmWarningLine size={30} />
      </span>
    </div>

    {/* Content */}
    <div className="flex-1 space-y-3">

      <h3 className="font-heading font-medium sm:text-[23px] text-[18px] text-[#AC3434]">
        Need urgent dental care?
      </h3>

      <p className="text-[#BB6A6A] font-body font-medium sm:text-[16px] text-[14px] max-w-3xl">
        Severe tooth pain, swelling, bleeding, or a broken tooth — call us
        directly for priority same-day assistance during clinic hours.
      </p>

      <div className="flex flex-wrap gap-2">

        <span className="sm:px-4 sm:py-1.5 px-3 py-1 border rounded-2xl font-body font-normal sm:text-[12px] text-[10px] bg-[#AC3434] text-white">
          Severe tooth pain
        </span>

        <span className="sm:px-4 sm:py-1.5 px-3 py-1 border rounded-2xl font-body font-normal sm:text-[12px] text-[10px] bg-[#AC3434] text-white">
          Swelling or abscess
        </span>

        <span className="sm:px-4 sm:py-1.5 px-3 py-1 border rounded-2xl font-body font-normal sm:text-[12px] text-[10px] bg-[#AC3434] text-white">
          Broken tooth
        </span>

        <span className="sm:px-4 sm:py-1.5 px-3 py-1 border rounded-2xl font-body font-normal sm:text-[12px] text-[10px] bg-[#AC3434] text-white">
          Bleeding gums
        </span>

        <span className="sm:px-4 sm:py-1.5 px-3 py-1 border rounded-2xl font-body font-normal sm:text-[12px] text-[10px] bg-[#AC3434] text-white">
          Knocked-out tooth
        </span>

      </div>
    </div>

    {/* Button */}
    
      <Button className="bg-[#AC3434] text-white w-full lg:w-auto flex items-center gap-2">
        <Link href="" className="flex items-center gap-2">
      <IoCallOutline size={18} /><span>Call Now</span>
      </Link>
      </Button>
    

  </div>

</div>


      </div>
    </section>
  )
}

export default page
