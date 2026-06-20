import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://ravirajdentalclinic.com" },
    { url: "https://ravirajdentalclinic.com/about-us" },
    { url: "https://ravirajdentalclinic.com/our-services" },
    { url: "https://ravirajdentalclinic.com/contact-us" },
  ];
}