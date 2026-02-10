import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://radifylighting.com" },
    { url: "https://radifylighting.com/about" },
    { url: "https://radifylighting.com/products" },
    { url: "https://radifylighting.com/projects" },
    { url: "https://radifylighting.com/contact" },
  ];
}
