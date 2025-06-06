
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button'; 
import { Menu } from 'lucide-react'; 
import React from 'react';

const DentalLogo = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="mr-2 h-7 w-7 text-primary" // Matched size and color
    aria-hidden="true" // Decorative icon
  >
    <path d="M6 20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V10C18 8.89543 17.1046 8 16 8H8C6.89543 8 6 8.89543 6 10V20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 8V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 15H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 13.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const scrollToFaculty = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMobileMenuOpen(false); 
    const facultySection = document.getElementById('faculty-section');
    if (facultySection) {
      facultySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '/#faculty-section';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-background/95 via-background/90 to-secondary/20 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center text-2xl font-bold text-primary hover:text-primary/80 transition-colors font-headline" onClick={() => setIsMobileMenuOpen(false)}>
          <DentalLogo />
          <span>Dental Faculty</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="default" onClick={scrollToFaculty} className="bg-accent text-accent-foreground hover:bg-accent/90">
            Faculty
          </Button>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 shadow-lg p-4 z-40 border-t border-border/50">
          <nav className="flex flex-col space-y-3">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            </Button>
            <Button variant="default" className="w-full justify-start bg-accent text-accent-foreground hover:bg-accent/90" onClick={scrollToFaculty}>
              Faculty
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
