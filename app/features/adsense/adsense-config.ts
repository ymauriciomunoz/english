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
  enabled: false,
  clientId: "",
  slots: {
    home: "",
    route: "",
    practice: "",
  },
} as const;

export function isAdSenseConfigured(placement: AdSensePlacement) {
  return adsenseSettings.enabled
    && /^ca-pub-\d{16}$/.test(adsenseSettings.clientId)
    && /^\d+$/.test(adsenseSettings.slots[placement]);
}
