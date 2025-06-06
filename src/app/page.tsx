
import Navbar from '@/components/Navbar';
import ImageCarousel from '@/components/ImageCarousel';
import FacultyCard from '@/components/FacultyCard';
import { facultyData, type FacultyMember } from '@/data/faculty';
import { AnimatedDiv } from '@/components/AnimatedDiv';
import FooterYear from '@/components/FooterYear';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BellRing } from 'lucide-react';
import ScrollingNoticeBoard from '@/components/ScrollingNoticeBoard';
import PastEventCard from '@/components/PastEventCard';

// Define PastEvent interface and data
interface PastEvent {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  date: string;
}

const pastEventsData: PastEvent[] = [
  {
    id: 'event1',
    title: 'Annual Dental Health Camp',
    description: 'Our annual camp provided free check-ups and treatments to over 300 local residents, promoting community dental hygiene in the area.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'community health',
    date: 'October 20, 2023',
  },
  {
    id: 'event2',
    title: 'Workshop on Advanced Endodontics',
    description: 'A hands-on workshop for dental professionals focusing on the latest techniques and technologies in endodontic treatments and patient care.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dental workshop',
    date: 'July 5, 2023',
  },
  {
    id: 'event3',
    title: 'Pediatric Dental Care Awareness Drive',
    description: 'An initiative to educate parents and children on the importance of early dental care and establishing good oral hygiene habits from a young age.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'children dental',
    date: 'April 12, 2023',
  },
  {
    id: 'event4',
    title: 'Oral Cancer Screening Day',
    description: 'A community outreach program providing free oral cancer screenings and raising awareness about early detection and prevention methods.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'health screening',
    date: 'January 15, 2023',
  },
  {
    id: 'event5',
    title: 'Continuing Dental Education Symposium',
    description: 'A symposium featuring renowned speakers on various topics in modern dentistry, aimed at enhancing professional knowledge and skills.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dental symposium',
    date: 'November 10, 2022',
  }
];


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
    { id: 5, text: "Guest lecture on 'Future of AI in Dentistry' next Monday at 10 AM." },
    { id: 6, text: "Departmental meeting rescheduled to Friday, 3 PM in Conference Hall B."}
  ];

  const facultyGridBaseDelay = 500; // Base delay for the first card in the faculty grid
  const facultyCardStagger = 100; // Stagger delay for each subsequent faculty card
  
  // Calculate the delay for the end of the faculty section animations
  // This depends on the number of rows and columns in the grid
  const numFaculty = sortedFaculty.length;
  const numCols = 3; // Assuming up to 3 columns
  const numRows = Math.ceil(numFaculty / numCols);
  let facultySectionEndDelay = facultyGridBaseDelay;
  if (numRows > 0) {
    // Delay of the last card in the first row
    const lastCardInFirstRowDelay = facultyGridBaseDelay + (Math.min(numFaculty, numCols) - 1) * facultyCardStagger;
    // Add delay for subsequent rows
    facultySectionEndDelay = lastCardInFirstRowDelay + (numRows - 1) * facultyCardStagger;
  } else {
     facultySectionEndDelay = facultyGridBaseDelay; // if no faculty
  }
  
  const pastEventsHeadingDelay = facultySectionEndDelay + 200; // Start past events heading after faculty cards
  const pastEventsFirstCardDelay = pastEventsHeadingDelay + 100; // First past event card after heading
  const pastEventCardStagger = 100; // Stagger for past event cards


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
          <section className="mb-12 md:mb-16 py-10 md:py-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              {/* Department Welcome Text (Left Column) */}
              <div className="md:w-2/3">
                <AnimatedDiv delay={200} className="h-full">
                  <Card className="h-full flex flex-col p-6 md:p-8 shadow-xl bg-card">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 font-headline">
                        Department of Dental Sciences
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <p className="text-lg md:text-xl text-foreground/80 max-w-3xl">
                        Welcome to the Department of Dental Sciences. We are committed to excellence in education, research, and patient care. Explore our faculty and their contributions to the field.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedDiv>
              </div>

              {/* Notice Board (Right Column) */}
              <div className="md:w-1/3">
                <AnimatedDiv delay={350} className="h-full">
                  <Card className="h-full flex flex-col bg-secondary/30 border-primary/20 shadow-xl">
                    <CardHeader className="pb-3 px-6 pt-6">
                      <CardTitle className="text-2xl text-primary font-headline flex items-center">
                        <BellRing className="mr-2 h-6 w-6" />
                        Notice Board
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pt-0 pb-6 flex-grow">
                      <ScrollingNoticeBoard notices={notices} />
                    </CardContent>
                  </Card>
                </AnimatedDiv>
              </div>
            </div>
          </section>

          {/* Faculty Listing Section */}
          <section id="faculty-section" className="scroll-mt-24 md:scroll-mt-28 mb-12 md:mb-16">
            <AnimatedDiv delay={400}>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 text-primary font-headline">
                Our Esteemed Faculty
              </h2>
            </AnimatedDiv>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedFaculty.map((member, index) => (
                  <AnimatedDiv key={member.id} delay={facultyGridBaseDelay + index * facultyCardStagger}>
                    <FacultyCard member={member} />
                  </AnimatedDiv>
                ))}
              </div>
            </div>
          </section>

          {/* Past Events Section - Vertical List */}
          <section id="past-events-section" className="py-10 md:py-12 scroll-mt-24 md:scroll-mt-28 mb-12 md:mb-16">
            <AnimatedDiv delay={pastEventsHeadingDelay}>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 text-primary font-headline">
                Highlights from Past Events
              </h2>
            </AnimatedDiv>
            <div className="max-w-2xl mx-auto space-y-8">
              {pastEventsData.map((event, index) => (
                <AnimatedDiv key={event.id} delay={pastEventsFirstCardDelay + index * pastEventCardStagger}>
                  <PastEventCard event={event} />
                </AnimatedDiv>
              ))}
              {pastEventsData.length === 0 && (
                 <AnimatedDiv delay={pastEventsFirstCardDelay}>
                    <p className="text-center text-muted-foreground">No past events to display at the moment.</p>
                 </AnimatedDiv>
              )}
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
