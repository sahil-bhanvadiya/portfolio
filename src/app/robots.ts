import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://sahilbhanvadiya.vercel.app/";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/private/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
