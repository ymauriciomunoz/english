import type { MetadataRoute } from "next";

const siteUrl = "https://learnolanguages.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const levels = ["a1", "a2", "b1", "b2", "c1"];
  return [
    { url: siteUrl, lastModified: new Date("2026-09-17"), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/cursos`, lastModified: new Date("2026-09-17"), changeFrequency: "weekly", priority: 0.9 },
    ...levels.map((level) => ({ url: `${siteUrl}/cursos/${level}`, lastModified: new Date("2026-09-17"), changeFrequency: "weekly" as const, priority: 0.8 })),
    { url: `${siteUrl}/practica`, lastModified: new Date("2026-09-17"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/nosotros`, lastModified: new Date("2026-09-17"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/privacidad`, lastModified: new Date("2026-09-17"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
