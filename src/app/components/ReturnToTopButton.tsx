'use client';

import { useState, useEffect } from "react";

const ReturnToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 border-1 border-gray-500 hover:bg-gray-300 bg-white text-black px-4 py-2 rounded-full shadow-md transition-all"
      >
        ↑
      </button>
    )
  );
};

export default ReturnToTopButton;
