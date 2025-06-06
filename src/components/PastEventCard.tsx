
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
    <Card className="flex flex-col h-full overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5 bg-gradient-to-br from-card via-card to-secondary/10">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 sm:h-56"> {/* Adjusted height for event images */}
          <Image
            src={event.imageUrl}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105" // Removed group-hover for simplicity as there's no explicit group here
            data-ai-hint={event.imageHint}
          />
        </div>
      </CardHeader>
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
