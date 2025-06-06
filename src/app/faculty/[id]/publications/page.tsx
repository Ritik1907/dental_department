
import { facultyData, type FacultyMember } from '@/data/faculty';
import Navbar from '@/components/Navbar';
import FooterYear from '@/components/FooterYear';
import { AnimatedDiv } from '@/components/AnimatedDiv';
import PublicationItem from '@/components/PublicationItem';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export async function generateStaticParams() {
  return facultyData.map((member) => ({
    id: member.id,
  }));
}

interface FacultyPublicationsPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: FacultyPublicationsPageProps): Promise<Metadata> {
  const facultyMember = facultyData.find((member) => member.id === params.id);
  if (!facultyMember) {
    return {
      title: 'Faculty Publications Not Found',
    };
  }
  return {
    title: `Publications by Dr. ${facultyMember.name} | Dental Faculty Showcase`,
    description: `List of publications by Dr. ${facultyMember.name}.`,
  };
}

const FacultyPublicationsPage = ({ params }: FacultyPublicationsPageProps) => {
  const facultyMember = facultyData.find((member) => member.id === params.id);

  if (!facultyMember) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatedDiv className="flex-grow">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link href={`/faculty/${params.id}`} className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Profile
              </Link>
            </Button>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl text-primary font-headline flex items-center">
                <BookOpen className="mr-3 h-8 w-8" />
                Publications by Dr. {facultyMember.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {facultyMember.publications.length > 0 ? (
                <ul className="space-y-4">
                  {facultyMember.publications.map((pub, index) => (
                    <PublicationItem key={index} pub={pub} />
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground text-lg">
                  Dr. {facultyMember.name} currently has no listed publications.
                </p>
              )}
            </CardContent>
          </Card>
        </main>
      </AnimatedDiv>
      <footer className="bg-card text-center py-8 mt-auto border-t border-border/50">
        <p className="text-muted-foreground">&copy; <FooterYear /> Dental Faculty Showcase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FacultyPublicationsPage;
