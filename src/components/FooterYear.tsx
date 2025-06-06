
"use client";

import { useState, useEffect } from 'react';

const FooterYear = () => {
  // Initialize with server's current year to avoid layout shift or "Loading..." text
  const [year, setYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    // This ensures client-side value is used after hydration.
    // For getFullYear(), it's unlikely to change between server render and client hydration
    // unless the user loads a page cached across a new year's eve.
    setYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures this runs once on mount on the client

  return <>{year}</>;
};

export default FooterYear;
