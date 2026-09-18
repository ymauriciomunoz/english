import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Learno Languages — Aprende inglés online",
    short_name: "Learno",
    description: "Cursos y práctica de inglés online desde A1 hasta C1.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f8fc",
    theme_color: "#6c5ce7",
    lang: "es",
    icons: [{ src: "/brand/learno-symbol.png", sizes: "512x512", type: "image/png" }],
  };
}
