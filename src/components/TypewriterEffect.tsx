import React, { useState, useEffect } from 'react';

const TypewriterEffect = () => {
  const roles = ["PYTHON DEVELOPER", "WEB DEVELOPER"];
  const [currentRole, setCurrentRole] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentWord = roles[currentIndex % roles.length];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentRole(currentWord.substring(0, currentRole.length + 1));
        if (currentRole === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentRole(currentWord.substring(0, currentRole.length - 1));
        if (currentRole === '') {
          setIsDeleting(false);
          setCurrentIndex(prev => prev + 1);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentRole, isDeleting, currentIndex]);

  return (
    <div className="flex justify-center lg:justify-start items-center h-[40px]">
      <span
        className="text-2xl text-red-600 font-bold dark:text-cyan-300 transition-colors duration-200"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        {currentRole}
        <span className="animate-blink">|</span>
      </span>
    </div>
  );
};

export default TypewriterEffect;
