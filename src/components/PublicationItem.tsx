
import type { Publication } from '@/data/faculty';
import { Link as LinkIcon } from 'lucide-react';
import Link from 'next/link'; // Added for potential internal links if needed, though current use is external

interface PublicationItemProps {
  pub: Publication;
}

const PublicationItem: React.FC<PublicationItemProps> = ({ pub }) => (
  <li className="mb-3 pb-3 border-b border-border/50 last:border-b-0 last:pb-0 last:mb-0">
    <h4 className="font-semibold text-md text-foreground/90 mb-0.5">
      {pub.link ? (
        <a 
          href={pub.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-accent hover:underline flex items-start"
        >
          {pub.title}
          <LinkIcon className="ml-1.5 mt-1 h-3.5 w-3.5 flex-shrink-0" />
        </a>
      ) : (
        pub.title
      )}
    </h4>
    {pub.journal && <p className="text-sm text-muted-foreground italic">In: {pub.journal}</p>}
    {pub.year && <p className="text-sm text-muted-foreground">Year: {pub.year}</p>}
  </li>
);

export default PublicationItem;
