const GoogleMap = () => {
    return (
        <div className="relative w-full h-100 overflow-hidden rounded-xl">
            <iframe
                className="w-full h-full border-0"
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=raviraj dental clinic byndoor&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}

export default GoogleMap
