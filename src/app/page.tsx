import Navbar from '@/components/Navbar';
import ImageCarousel from '@/components/ImageCarousel';
import FacultyCard from '@/components/FacultyCard';
import { facultyData } from '@/data/faculty';
import { AnimatedDiv } from '@/components/AnimatedDiv';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatedDiv className="flex-grow">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Department Landing Section */}
          <section className="text-center mb-12 md:mb-16 py-10 md:py-16 bg-card p-6 rounded-xl shadow-xl">
            <AnimatedDiv delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 font-headline">
                Department of Dental Sciences
              </h1>
            </AnimatedDiv>
            <AnimatedDiv delay={200}>
              <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                Welcome to the Department of Dental Sciences. We are committed to excellence in education, research, and patient care. Explore our faculty and their contributions to the field.
              </p>
            </AnimatedDiv>
          </section>

          {/* Image Carousel */}
          <AnimatedDiv delay={300} className="mb-12 md:mb-20">
            <ImageCarousel />
          </AnimatedDiv>

          {/* Faculty Listing Section */}
          <section id="faculty-section" className="scroll-mt-24 md:scroll-mt-28"> {/* scroll-mt for navbar offset */}
            <AnimatedDiv delay={400}>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 text-primary font-headline">
                Our Esteemed Faculty
              </h2>
            </AnimatedDiv>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8"> {/* Max 3 columns for better card sizing */}
              {facultyData.map((member, index) => (
                <AnimatedDiv key={member.id} delay={500 + index * 100}>
                  <FacultyCard member={member} />
                </AnimatedDiv>
              ))}
            </div>
          </section>
        </main>
      </AnimatedDiv>
      <footer className="bg-card text-center py-8 mt-12 border-t border-border/50">
        <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Dental Faculty Showcase. All rights reserved.</p>
      </footer>
    </div>
  );
}
