'use client';
import { useEffect, useState } from 'react';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

export default function Gtags() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookiesAccepted');
    if (!cookieConsent) {
      setCookiesAccepted(false);
    } else if (cookieConsent === 'true') {
      setCookiesAccepted(true);
    } else if (cookieConsent === 'false') {
      setCookiesAccepted(false);
    }
  }, []);

  if (!cookiesAccepted) return null;

  return (
    <>
      <GoogleAnalytics gaId="G-9LMM3RJ14F" />
      <GoogleTagManager gtmId="GTM-5BM8HV9L" />
    </>
  );
}
