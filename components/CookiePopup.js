'use client';
import { useEffect, useState } from 'react';

export default function CookiePopup({ onAccept, onReject }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookiesAccepted');
    if (!cookieConsent) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    onAccept();
    setIsVisible(false);
  };

  const handleReject = () => {
    onReject();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-70">
      <div className="bg-off-white p-6 shadow-lg w-full text-center">
        <h2 className="text-black-text text-lg font-semibold mb-4">
          We use cookies
        </h2>
        <p className="text-grey-text mb-6">
          We use cookies to enhance your browsing experience and analyse site
          traffic through Google Analytics and Google Tag Manager. By accepting,
          you consent to the use of cookies for tracking your IP address and
          other browsing data.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleAccept}
            className="bg-primary-orange text-black-text px-4 py-2 rounded hover:bg-opacity-90 transition"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="bg-medium-grey text-white px-4 py-2 rounded hover:bg-dark-grey transition"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
