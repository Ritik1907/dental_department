
import Navbar from '@/components/Navbar';
import ImageCarousel from '@/components/ImageCarousel';
import FacultyCard from '@/components/FacultyCard';
import { facultyData, type FacultyMember } from '@/data/faculty';
import { AnimatedDiv } from '@/components/AnimatedDiv';
import FooterYear from '@/components/FooterYear';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BellRing } from 'lucide-react';

export default function HomePage() {
  const sortedFaculty = [...facultyData].sort((a, b) => {
    const isAHOD = a.designation.includes('Head of Department');
    const isBHOD = b.designation.includes('Head of Department');
    if (isAHOD && !isBHOD) return -1;
    if (!isAHOD && isBHOD) return 1;
    return a.name.localeCompare(b.name);
  });

  const notices = [
    { id: 1, text: "New dental research seminar on Advanced Implantology: August 15th, 2:00 PM." },
    { id: 2, text: "Admissions for the 2025 academic year are now open. Apply by October 31st." },
    { id: 3, text: "Dr. Emily White receives 'Excellence in Pediatric Care' award." },
    { id: 4, text: "Community Dental Health camp scheduled for September 5th. Volunteers needed." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatedDiv className="flex-grow">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Image Carousel */}
          <AnimatedDiv delay={100} className="mb-12 md:mb-20">
            <ImageCarousel />
          </AnimatedDiv>

          {/* Department Landing & Notice Section */}
          <section className="mb-12 md:mb-16 py-10 md:py-12 bg-card p-6 rounded-xl shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              {/* Department Welcome Text (Left Column) */}
              <div className="md:w-2/3">
                <AnimatedDiv delay={200}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 font-headline">
                    Department of Dental Sciences
                  </h1>
                </AnimatedDiv>
                <AnimatedDiv delay={300}>
                  <p className="text-lg md:text-xl text-foreground/80 max-w-3xl">
                    Welcome to the Department of Dental Sciences. We are committed to excellence in education, research, and patient care. Explore our faculty and their contributions to the field.
                  </p>
                </AnimatedDiv>
              </div>

              {/* Notice Board (Right Column) */}
              <div className="md:w-1/3">
                <AnimatedDiv delay={350}>
                  <Card className="h-full bg-secondary/30 border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-2xl text-primary font-headline flex items-center">
                        <BellRing className="mr-2 h-6 w-6" />
                        Notice Board
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm text-foreground/90">
                        {notices.slice(0,3).map((notice) => (
                          <li key={notice.id} className="pb-2 border-b border-border/50 last:border-b-0 last:pb-0">
                            {notice.text}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedDiv>
              </div>
            </div>
          </section>

          {/* Faculty Listing Section */}
          <section id="faculty-section" className="scroll-mt-24 md:scroll-mt-28">
            <AnimatedDiv delay={400}>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 text-primary font-headline">
                Our Esteemed Faculty
              </h2>
            </AnimatedDiv>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedFaculty.map((member, index) => (
                  <AnimatedDiv key={member.id} delay={500 + index * 100}>
                    <FacultyCard member={member} />
                  </AnimatedDiv>
                ))}
              </div>
            </div>
          </section>
        </main>
      </AnimatedDiv>
      <footer className="bg-card text-center py-8 mt-12 border-t border-border/50">
        <p className="text-muted-foreground">&copy; <FooterYear /> Dental Faculty Showcase. All rights reserved.</p>
      </footer>
    </div>
  );
}
