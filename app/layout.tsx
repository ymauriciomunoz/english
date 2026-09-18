import type { Metadata } from "next";
import { CookieConsent } from "./features/preferences/CookieConsent";
import { ThemeToggle } from "./features/preferences/ThemeToggle";
import "./globals.css";

const siteUrl = "https://learnolanguages.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aprende inglés online de A1 a C1 | Learno Languages",
    template: "%s | Learno Languages",
  },
  description: "Aprende inglés online con 217 lecciones progresivas de A1 a C1, ejercicios interactivos, vocabulario, gramática, comprensión, pronunciación y progreso guardado.",
  applicationName: "Learno Languages",
  authors: [{ name: "Learno Languages", url: siteUrl }],
  creator: "Learno Languages",
  publisher: "Learno Languages",
  category: "education",
  keywords: ["aprender inglés", "inglés online", "curso de inglés", "inglés A1", "inglés A2", "inglés B1", "inglés B2", "inglés C1", "ejercicios de inglés"],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Learno Languages",
    title: "Aprende inglés online de A1 a C1",
    description: "Una ruta completa de 217 lecciones con práctica interactiva y progreso guardado.",
    images: [{ url: "/brand/learno-lockup.png", width: 760, height: 303, alt: "Learno Languages, academia de inglés online" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprende inglés online de A1 a C1 | Learno Languages",
    description: "Lecciones progresivas, ejercicios interactivos y práctica de inglés en una sola plataforma.",
    images: ["/brand/learno-lockup.png"],
  },
  icons: {
    icon: "/brand/learno-symbol.png",
    shortcut: "/brand/learno-symbol.png",
    apple: "/brand/learno-symbol.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "EducationalOrganization", "@id": `${siteUrl}/#organization`, name: "Learno Languages", url: siteUrl, logo: `${siteUrl}/brand/learno-symbol.png`, description: "Academia online para aprender inglés mediante una ruta progresiva de A1 a C1." },
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Learno Languages", inLanguage: "es", publisher: { "@id": `${siteUrl}/#organization` } },
    ],
  };

  const themeScript = `(function(){try{var saved=localStorage.getItem('learno-theme');var theme=saved==='dark'||saved==='light'?saved:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch(e){}})()`;

  return <html lang="es" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body>{children}<ThemeToggle /><CookieConsent /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /></body></html>;
}
