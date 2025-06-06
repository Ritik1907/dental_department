
import Image from 'next/image';
import type { FacultyMember } from '@/data/faculty';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, BookOpen, Brain, Award, Users } from 'lucide-react';
import PublicationItem from './PublicationItem'; // Updated import
import Link from 'next/link';

interface FacultyProfileProps {
  member: FacultyMember;
}

const DetailItem: React.FC<{ icon: React.ElementType; label: string; value?: string | React.ReactNode; href?: string }> = ({ icon: Icon, label, value, href }) => {
  if (!value) return null;
  const content = href ? <a href={href} className="hover:text-accent hover:underline" target="_blank" rel="noopener noreferrer">{value}</a> : value;
  return (
    <div className="flex items-start text-sm">
      <Icon className="mr-3 mt-1 h-5 w-5 text-primary shrink-0" />
      <div>
        <span className="font-medium text-foreground/90">{label}: </span>
        <span className="text-muted-foreground">{content}</span>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; icon: React.ElementType; children: React.ReactNode }> = ({ title, icon: Icon, children }) => (
  <section className="mb-8">
    <div className="flex items-center mb-4">
      <Icon className="mr-3 h-6 w-6 text-primary" />
      <h3 className="text-2xl font-semibold text-primary font-headline">{title}</h3>
    </div>
    {children}
  </section>
);

const FacultyProfile = ({ member }: FacultyProfileProps) => {
  return (
    <Card className="overflow-hidden shadow-2xl my-8 bg-card">
      <CardHeader className="bg-primary/10 p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl shrink-0">
            <Image
              src={member.photoUrl}
              alt={`${member.name}'s photo`}
              layout="fill"
              objectFit="cover"
              data-ai-hint="professional headshot"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-headline">{member.name}</CardTitle>
            <p className="text-xl md:text-2xl text-foreground/80 mt-1">{member.designation}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column / Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <Section title="Biography" icon={Users /* Using Users as a generic person icon */}>
              <p className="text-foreground/85 leading-relaxed whitespace-pre-line">{member.bio}</p>
            </Section>

            <Separator />

            <Section title="Academic Qualifications" icon={Award}>
              <ul className="list-disc list-inside text-foreground/85 space-y-1 pl-1">
                {member.academicQualifications.map((qual, index) => (
                  <li key={index}>{qual}</li>
                ))}
              </ul>
            </Section>
            
            <Separator />

            <Section title="Research Interests" icon={Brain}>
              <div className="flex flex-wrap gap-2">
                {member.researchInterests.map((interest, index) => (
                  <span key={index} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full">{interest}</span>
                ))}
              </div>
            </Section>
          </div>

          {/* Right Column / Contact & Publications */}
          <aside className="space-y-8 lg:border-l lg:pl-8 lg:border-border/70">
            <Section title="Contact Information" icon={MapPin}>
              <div className="space-y-3">
                <DetailItem icon={Mail} label="Email" value={member.email} href={`mailto:${member.email}`} />
                {member.phone && <DetailItem icon={Phone} label="Phone" value={member.phone} href={`tel:${member.phone}`} />}
                {member.office && <DetailItem icon={MapPin} label="Office" value={member.office} />}
              </div>
            </Section>
            
            <Separator />
            
            <Section title="Selected Publications" icon={BookOpen}>
               {member.publications.length > 0 ? (
                <ul className="space-y-1">
                  {member.publications.slice(0, 5).map((pub, index) => (
                    <PublicationItem key={index} pub={pub} />
                  ))}
                </ul>
               ) : (
                <p className="text-muted-foreground">No publications listed.</p>
               )}
              {member.publications.length > 5 && (
                <p className="mt-4 text-sm">
                  <Link href={`/faculty/${member.id}/publications`} className="text-accent hover:underline font-medium">
                    View all {member.publications.length} publications
                  </Link>
                </p>
              )}
            </Section>
          </aside>
        </div>
      </CardContent>
    </Card>
  );
};

export default FacultyProfile;
