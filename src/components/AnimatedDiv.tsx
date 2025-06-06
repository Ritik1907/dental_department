
"use client";
import { useEffect, useState, useRef } from 'react';

type AnimatedDivProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number; 
  triggerOnce?: boolean; 
};

export const AnimatedDiv = ({ 
  children, 
  className, 
  threshold = 0.1, 
  triggerOnce = true,
}: AnimatedDivProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && currentRef) {
            observer.unobserve(currentRef);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: threshold,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect(); // Ensure observer is always disconnected on cleanup
    };
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className || ''}`}
    >
      {children}
    </div>
  );
};
