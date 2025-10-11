import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sahilbhanvadiya.com"; // Replace with your actual domain

  return [
    {
      url: baseUrl,
      lastModified: new Date("2024-10-12"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
