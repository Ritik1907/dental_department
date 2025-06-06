"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming Button exists
import { Menu } from 'lucide-react'; // For potential mobile menu toggle
import React from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const scrollToFaculty = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu if open
    const facultySection = document.getElementById('faculty-section');
    if (facultySection) {
      facultySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback if on a different page, navigate to home then scroll
      window.location.href = '/#faculty-section';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors font-headline" onClick={() => setIsMobileMenuOpen(false)}>
          Dental Faculty
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="default" onClick={scrollToFaculty} className="bg-accent text-accent-foreground hover:bg-accent/90">
            Faculty
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background shadow-lg p-4 z-40">
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
