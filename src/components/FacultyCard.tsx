
import Link from 'next/link';
import Image from 'next/image';
import type { FacultyMember } from '@/data/faculty';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FacultyCardProps {
  member: FacultyMember;
}

const FacultyCard = ({ member }: FacultyCardProps) => {
  return (
    <Card className="flex flex-col overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5 bg-card">
      <CardHeader className="p-0">
        <div className="relative w-full h-56 sm:h-64"> {/* Adjusted height for better visuals */}
          <Image
            src={member.photoUrl}
            alt={`${member.name}'s photo`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="professional portrait"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-5">
        <CardTitle className="text-xl mb-1 font-headline text-primary">{member.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{member.designation}</CardDescription>
      </CardContent>
      <CardFooter className="p-5 border-t border-border/50">
        <Button asChild variant="outline" className="w-full group text-accent-foreground bg-accent hover:bg-accent/90 hover:text-accent-foreground border-accent hover:border-accent/90">
          <Link href={`/faculty/${member.id}`} className="flex items-center justify-center">
            View Profile 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FacultyCard;
