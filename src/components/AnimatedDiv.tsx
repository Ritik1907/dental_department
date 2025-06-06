"use client";
import { useEffect, useState } from 'react';

type AnimatedDivProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Optional delay in ms
};

export const AnimatedDiv = ({ children, className, delay = 0 }: AnimatedDivProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity duration-700 ease-in-out ${
        isMounted ? 'opacity-100' : 'opacity-0'
      } ${className || ''}`}
    >
      {children}
    </div>
  );
};
