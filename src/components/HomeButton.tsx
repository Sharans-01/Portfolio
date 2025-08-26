import React from 'react';
import { Home } from 'lucide-react';

const HomeButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Go to top"
    >
      <Home className="h-5 w-5 text-gray-600 dark:text-gray-400" />
    </button>
  );
};

export default HomeButton;