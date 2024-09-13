'use client';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

export default function Gtags({ cookiesAccepted }) {
  if (!cookiesAccepted) return null;

  return (
    <>
      <GoogleAnalytics gaId="G-9LMM3RJ14F" />
      <GoogleTagManager gtmId="GTM-5BM8HV9L" />
    </>
  );
}
