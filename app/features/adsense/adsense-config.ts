export type AdSensePlacement = "home" | "route" | "practice";

/**
 * Future AdSense activation point.
 *
 * Keep this disabled until Google approves the site. Then add the public
 * publisher and ad-unit IDs issued by AdSense. These values are identifiers,
 * not secrets, but keeping them together prevents ad code from leaking into
 * lesson components.
 */
export const adsenseSettings = {
  enabled: process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true",
  clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "",
  slots: {
    home: process.env.NEXT_PUBLIC_ADSENSE_HOME_SLOT ?? "",
    route: process.env.NEXT_PUBLIC_ADSENSE_ROUTE_SLOT ?? "",
    practice: process.env.NEXT_PUBLIC_ADSENSE_PRACTICE_SLOT ?? "",
  },
} as const;

export function isAdSenseConfigured(placement: AdSensePlacement) {
  return adsenseSettings.enabled
    && /^ca-pub-\d{16}$/.test(adsenseSettings.clientId)
    && /^\d+$/.test(adsenseSettings.slots[placement]);
}
