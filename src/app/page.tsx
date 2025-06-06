
import Navbar from '@/components/Navbar';
import ImageCarousel from '@/components/ImageCarousel';
import FacultyCard from '@/components/FacultyCard';
import { facultyData, type FacultyMember } from '@/data/faculty';
import { AnimatedDiv } from '@/components/AnimatedDiv';
import FooterYear from '@/components/FooterYear';

export default function HomePage() {
  const sortedFaculty = [...facultyData].sort((a, b) => {
    const isAHOD = a.designation.includes('Head of Department');
    const isBHOD = b.designation.includes('Head of Department');
    if (isAHOD && !isBHOD) return -1;
    if (!isAHOD && isBHOD) return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatedDiv className="flex-grow">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Image Carousel - Now first */}
          <AnimatedDiv delay={100} className="mb-12 md:mb-20">
            <ImageCarousel />
          </AnimatedDiv>

          {/* Department Landing Section - Now second */}
          <section className="text-center mb-12 md:mb-16 py-10 md:py-16 bg-card p-6 rounded-xl shadow-xl">
            <AnimatedDiv delay={200}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 font-headline">
                Department of Dental Sciences
              </h1>
            </AnimatedDiv>
            <AnimatedDiv delay={300}>
              <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                Welcome to the Department of Dental Sciences. We are committed to excellence in education, research, and patient care. Explore our faculty and their contributions to the field.
              </p>
            </AnimatedDiv>
          </section>

          {/* Faculty Listing Section */}
          <section id="faculty-section" className="scroll-mt-24 md:scroll-mt-28">
            <AnimatedDiv delay={400}>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 text-primary font-headline">
                Our Esteemed Faculty
              </h2>
            </AnimatedDiv>
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col space-y-8">
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
