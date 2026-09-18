const GOOGLE_CERTIFICATION_AUTHORITY = "f08c47fec0942fa0";

export function GET() {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "";
  const match = /^ca-(pub-\d{16})$/.exec(clientId);
  if (!match) {
    return new Response("ads.txt todavía no está configurado porque falta el identificador real de AdSense.\n", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
    });
  }
  return new Response(`google.com, ${match[1]}, DIRECT, ${GOOGLE_CERTIFICATION_AUTHORITY}\n`, {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
  });
}
