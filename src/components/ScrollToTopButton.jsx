'use client'
import React, { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight -100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
    onClick={scrollToTop}
    className="fixed bottom-14 right-14 bg-[#009ded] text-white w-12 h-12 rounded-full shadow-lg hover:bg-[#3591c0] flex items-center justify-center"
    aria-label="Back to top"
  >
    ↑
  </button>
  );
}
