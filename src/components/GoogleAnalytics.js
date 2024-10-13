// components/GoogleAnalytics.js
"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-BNZY66YLX0', {
        page_path: url,
      });
    };

    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-BNZY66YLX0');
    }

    handleRouteChange(pathname);
  }, [pathname]);

  return null;
}
