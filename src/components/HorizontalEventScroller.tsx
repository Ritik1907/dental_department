
"use client";

import PastEventCard from '@/components/PastEventCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback } from 'react';

// Define PastEvent interface locally or ensure it's imported if defined centrally
interface PastEvent {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  date: string;
}

interface HorizontalEventScrollerProps {
  events: PastEvent[];
}

const HorizontalEventScroller = ({ events }: HorizontalEventScrollerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextEvent = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  }, [events.length]);

  const prevEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  if (!events || events.length === 0) {
    return <p className="text-center text-muted-foreground">No past events to display.</p>;
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto group py-4"> {/* Added py-4 for space for dots */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event) => (
            <div key={event.id} className="w-full flex-shrink-0 p-1"> {/* p-1 to prevent card shadow clipping */}
              <PastEventCard event={event} />
            </div>
          ))}
        </div>
      </div>

      {events.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            onClick={prevEvent}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-3 md:-translate-x-6 bg-card/80 hover:bg-card text-foreground rounded-full z-10 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
            aria-label="Previous event"
          >
            <ChevronLeft size={24} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextEvent}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-3 md:translate-x-6 bg-card/80 hover:bg-card text-foreground rounded-full z-10 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
            aria-label="Next event"
          >
            <ChevronRight size={24} />
          </Button>
        </>
      )}
      
      {events.length > 1 && (
        <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 flex space-x-2 mt-3">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to event ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary scale-125' : 'bg-muted hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HorizontalEventScroller;
