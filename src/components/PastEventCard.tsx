
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

// Define PastEvent interface locally or ensure it's imported if defined centrally
interface PastEvent {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  date: string;
}

interface PastEventCardProps {
  event: PastEvent;
}

const PastEventCard = ({ event }: PastEventCardProps) => {
  return (
    <Card className="group flex flex-col md:flex-row overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5 bg-gradient-to-br from-card via-card to-secondary/10">
      {/* Image Section */}
      <div className="w-full md:w-auto md:flex-shrink-0 md:p-4 flex justify-center items-center">
        <div className="relative w-full md:w-36 lg:w-44 aspect-[4/3] md:aspect-square overflow-hidden rounded-md md:rounded-lg shadow-sm">
          <Image
            src={event.imageUrl}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={event.imageHint}
          />
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="flex-grow p-5 flex flex-col">
        <CardTitle className="text-lg mb-1 font-headline text-primary">{event.title}</CardTitle>
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <CalendarDays className="mr-1.5 h-3.5 w-3.5 flex-shrink-0" />
          <span>{event.date}</span>
        </div>
        <CardDescription className="text-sm text-foreground/80 flex-grow">{event.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default PastEventCard;
