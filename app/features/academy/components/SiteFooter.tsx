import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer">
    <p>© {new Date().getFullYear()} Learno Languages · Aprende inglés a tu ritmo.</p>
    <nav aria-label="Información del sitio">
      <Link href="/nosotros">Sobre Learno</Link>
      <Link href="/privacidad">Privacidad</Link>
      <Link href="/sitemap.xml">Mapa del sitio</Link>
    </nav>
  </footer>;
}
