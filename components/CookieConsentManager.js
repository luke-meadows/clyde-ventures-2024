'use client';
import { useState, useEffect } from 'react';
import Gtags from './Gtags';
import CookiePopup from './CookiePopup';

export default function CookieConsentManager() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookiesAccepted');
    setCookiesAccepted(cookieConsent === 'true');
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
  };

  const handleReject = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setCookiesAccepted(false);
  };

  return (
    <>
      <Gtags cookiesAccepted={cookiesAccepted} />
      <CookiePopup onAccept={handleAccept} onReject={handleReject} />
    </>
  );
}
