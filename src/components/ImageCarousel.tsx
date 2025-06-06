"use client";
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const images = [
  { src: '/home/user/studio/.next/server/app/images/image1.jpg', alt: 'Dental Clinic Environment', hint: 'dental clinic' },
  { src: 'https://pixabay.com/photos/preventive-dentistry-dentistry-8858477', alt: 'Advanced Dental Equipment', hint: 'dental equipment' },
  { src: 'https://placehold.co/1200x500.png', alt: 'Faculty and Students Interaction', hint: 'faculty students' },
  { src: 'https://placehold.co/1200x500.png', alt: 'Patient Care Focus', hint: 'patient care' },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl shadow-2xl group">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            data-ai-hint={image.hint}
            priority={index === 0}
            className="transform transition-transform duration-500 group-hover:scale-105"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      ))}
      
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 transition-all z-20 rounded-full h-10 w-10 md:h-12 md:w-12 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 transition-all z-20 rounded-full h-10 w-10 md:h-12 md:w-12 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </Button>
       
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300/70 hover:bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
