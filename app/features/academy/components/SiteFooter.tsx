import Link from "next/link";
import { CookieSettingsButton } from "../../preferences/CookieConsent";

export function SiteFooter() {
  return <footer className="site-footer">
    <p>© {new Date().getFullYear()} Learno Languages · Aprende inglés a tu ritmo.</p>
    <nav aria-label="Información del sitio">
      <Link href="/nosotros">Sobre Learno</Link>
      <Link href="/contacto">Contacto</Link>
      <Link href="/privacidad">Privacidad</Link>
      <Link href="/terminos">Términos</Link>
      <CookieSettingsButton />
      <Link href="/sitemap.xml">Mapa del sitio</Link>
    </nav>
  </footer>;
}
