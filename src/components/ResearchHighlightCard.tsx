
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Microscope, User } from 'lucide-react'; // User for PI
import type { ResearchHighlight } from '@/app/page'; // Import type from page.tsx

interface ResearchHighlightCardProps {
  research: ResearchHighlight;
}

const ResearchHighlightCard = ({ research }: ResearchHighlightCardProps) => {
  return (
    <Card className="group flex flex-col md:flex-row h-full overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5 bg-gradient-to-br from-card via-card to-secondary/10">
      {/* Image Section */}
      <div className="w-full md:w-auto md:flex-shrink-0 md:p-4 flex justify-center items-center">
        <div className="relative w-full md:w-36 lg:w-44 aspect-[4/3] md:aspect-square overflow-hidden rounded-md md:rounded-lg shadow-sm">
          <Image
            src={research.imageUrl}
            alt={research.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={research.imageHint}
          />
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="flex-grow p-5 flex flex-col">
        <CardTitle className="text-lg mb-1 font-headline text-primary">{research.title}</CardTitle>
        {research.principalInvestigator && (
          <div className="flex items-center text-xs text-muted-foreground mb-2">
            <User className="mr-1.5 h-3.5 w-3.5 flex-shrink-0" />
            <span>Principal Investigator: {research.principalInvestigator}</span>
          </div>
        )}
        <CardDescription className="text-sm text-foreground/80 flex-grow mb-3">{research.summary}</CardDescription>
        {research.link && (
          <a
            href={research.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:text-accent/80 hover:underline mt-auto"
          >
            Learn More
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default ResearchHighlightCard;
