
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/916263863343?text=Hi%20Nakshatra%20Technologies!%20I%27m%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 hover:scale-110 transition-all group"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.742 3.052 9.38L1.054 31.29l6.116-1.963A15.905 15.905 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.32 22.612c-.388 1.094-1.938 2.002-3.17 2.266-.844.18-1.946.322-5.658-1.216-4.752-1.966-7.806-6.788-8.04-7.104-.226-.316-1.898-2.53-1.898-4.826s1.2-3.424 1.626-3.892c.388-.426 1.034-.624 1.652-.624.2 0 .38.01.54.018.426.018.64.042.92.714.348.838 1.2 2.922 1.302 3.136.104.214.174.464.034.74-.132.284-.198.46-.392.708-.194.248-.408.554-.582.744-.194.212-.396.442-.17.868.226.418 1.004 1.658 2.156 2.686 1.484 1.324 2.734 1.734 3.124 1.926.388.192.618.16.846-.098.234-.264.998-1.164 1.264-1.564.26-.4.524-.334.886-.2.366.134 2.316 1.092 2.714 1.292.396.198.662.3.76.462.094.164.094.944-.294 2.038z" />
      </svg>
      
      {/* Ping animation */}
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
    </a>
  );
};

export default WhatsAppButton;
