import type { MetadataRoute } from "next";
import { getAllPostsData } from "@/lib/postStore";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.SITE_URL || "http://localhost:3000";
  const posts = await getAllPostsData();

  return [
    { url: `${siteUrl}/`, lastModified: new Date() },
    { url: `${siteUrl}/blogs`, lastModified: new Date() },
    ...posts.map((p) => ({
      url: `${siteUrl}/blogs/${p.slug}`,
      lastModified: new Date(p.publishedAt),
    })),
  ];
}

