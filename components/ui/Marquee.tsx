const items = [
    
    "Teeth Cleaning",
    "Dental Implants",
    "Root Canal Treatment",
    "Teeth Whitening",
    "Smile Design",
    "Tooth Extraction",
    " Veneers ",
    "Braces & Aligners",
    "Cosmetic Dentistry",
    "Pediatric Dentistry",
]

const Marquee = () => {
    return (
        <div className="overflow-hidden  bg-[#072959] text-white py-4">

            <div className="flex w-max animate-marquee" style={{willChange:"transform"}}>

                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="px-3 text-md font-heading font-medium shrink-0 flex gap-4 items-center"
                    >
                    <span className="w-2 h-2 rounded-full bg-white shrink-0"></span>   {item} 
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Marquee