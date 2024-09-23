// src/components/CookieBanner.js

import React, { useState } from "react";
import useCookies from "../hooks/useCokies"; // Fixed typo "useCokies" to "useCookies"

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useCookies("cookieConsent", false);
  const [isBannerVisible, setBannerVisible] = useState(true); // Local state to control visibility

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {cookieConsent && isBannerVisible ? (
        <p
          className="text-green-600 text-xl font-semibold cursor-pointer"
          onClick={() => setBannerVisible(false)} // Hide banner on click
        >
          Thanks for accepting cookies!
        </p>
      ) : !cookieConsent ? (
        <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-700 mb-4 text-lg">
            We use cookies to enhance your experience. Do you accept?
          </p>
          <button
            onClick={() =>
              setCookieConsent("true", {
                expires: new Date(new Date().getTime() + 60 * 1000),
              })
            }
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Accept Cookies
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CookieBanner;
