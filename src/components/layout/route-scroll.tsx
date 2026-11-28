"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "@/i18n/navigation";

/**
 * Guarantees a client-side route change starts at the top of the page.
 *
 * Next.js already scrolls to the top on navigation, but some browsers (notably
 * WebKit/Safari) keep the previous scroll offset when the scroll is animated or
 * when the new page is shorter — which makes the page appear to open at its
 * footer. This is the deterministic fallback.
 *
 * Skipped for:
 * - back/forward navigation (the browser restores the previous position),
 * - hash navigation (Next scrolls to the anchored section).
 */
export function RouteScroll() {
  const pathname = usePathname();
  const isPopNavigation = useRef(false);

  useEffect(() => {
    const handlePopState = () => {
      isPopNavigation.current = true;
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (isPopNavigation.current) {
      isPopNavigation.current = false;
      return;
    }

    if (window.location.hash) return;

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
