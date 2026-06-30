// =============================================================
// Lightweight first-party analytics layer.
// Pushes events to window.dataLayer (GTM / GA4-compatible) and
// also fires a CustomEvent so any analytics SDK you bolt on
// later (Plausible, PostHog, Segment) can subscribe.
//
// Add your provider snippet in src/routes/__root.tsx <head>
// or via a script tag — events are buffered on dataLayer until
// then, so nothing is lost.
// =============================================================

export type AnalyticsEvent =
  | "part_finder_submit"
  | "quote_form_submit"
  | "phone_click"
  | "email_click"
  | "cta_click";

type Props = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(event: AnalyticsEvent, props: Props = {}) {
  if (typeof window === "undefined") return;

  const payload = {
    event,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
    ...props,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  window.dispatchEvent(new CustomEvent("analytics", { detail: payload }));

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, props);
  }
}

/** Convenience wrapper for tel:/mailto: anchor clicks. */
export function trackContactClick(kind: "phone" | "email", value: string) {
  trackEvent(kind === "phone" ? "phone_click" : "email_click", { value });
}
