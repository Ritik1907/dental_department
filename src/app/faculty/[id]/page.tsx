
import { facultyData } from '@/data/faculty';
import FacultyProfile from '@/components/FacultyProfile';
import { AnimatedDiv } from '@/components/AnimatedDiv';
import Navbar from '@/components/Navbar';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import FooterYear from '@/components/FooterYear';

export async function generateStaticParams() {
  return facultyData.map((member) => ({
    id: member.id,
  }));
}

interface FacultyPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: FacultyPageProps): Promise<Metadata> {
  const facultyMember = facultyData.find((member) => member.id === params.id);
  if (!facultyMember) {
    return {
      title: 'Faculty Not Found',
    };
  }
  return {
    title: `${facultyMember.name} | Dental Faculty Showcase`,
    description: `Profile of Dr. ${facultyMember.name}, ${facultyMember.designation}.`,
  };
}


const FacultyPage = ({ params }: FacultyPageProps) => {
  const facultyMember = facultyData.find((member) => member.id === params.id);

  if (!facultyMember) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatedDiv className="flex-grow">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Button variant="outline" asChild>
              <Link href="/#faculty-section" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Faculty List
              </Link>
            </Button>
          </div>
          <FacultyProfile member={facultyMember} />
        </main>
      </AnimatedDiv>
      <footer className="bg-card text-center py-8 mt-auto border-t border-border/50">
        <p className="text-muted-foreground">&copy; <FooterYear /> Dental Faculty Showcase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FacultyPage;
