
"use client";

import type { CSSProperties } from 'react';
import { useEffect, useMemo, useState } from 'react';

interface Notice {
  id: number;
  text: string;
}

interface ScrollingNoticeBoardProps {
  notices: Notice[];
}

const VISIBLE_ITEMS = 3;
const ITEM_HEIGHT_REM = 3.75; // Each item approx 60px (3.75rem * 16px/rem)
const ANIMATION_SECONDS_PER_ITEM = 3; // Speed of scroll

const ScrollingNoticeBoard: React.FC<ScrollingNoticeBoardProps> = ({ notices }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollableNotices = useMemo(() => {
    if (notices.length <= VISIBLE_ITEMS) {
      return notices; // Not enough items to scroll
    }
    // Duplicate the first `VISIBLE_ITEMS` items to the end for a seamless loop
    return [...notices, ...notices.slice(0, VISIBLE_ITEMS)];
  }, [notices]);

  if (!isClient || notices.length === 0) {
    return <p className="text-sm text-foreground/70">No notices available.</p>;
  }
  
  if (notices.length <= VISIBLE_ITEMS) {
    return (
      <ul className="space-y-3 text-sm text-foreground/90 h-full">
        {notices.map(notice => (
          <li key={notice.id} className="pb-2 border-b border-border/50 last:border-b-0 last:pb-0" style={{ minHeight: `${ITEM_HEIGHT_REM}rem` }}>
            {notice.text}
          </li>
        ))}
      </ul>
    );
  }

  const animationDuration = notices.length * ANIMATION_SECONDS_PER_ITEM;
  const scrollDistance = notices.length * ITEM_HEIGHT_REM;

  const animationStyle: CSSProperties = {
    animationName: 'scroll-notices-kf',
    animationDuration: `${animationDuration}s`,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  };

  // Using a unique key for the style tag to ensure it updates if props change, though not strictly necessary here.
  const styleTagKey = `scroll-animation-style-${notices.length}`;

  return (
    <>
      <style key={styleTagKey}>
        {`
          @keyframes scroll-notices-kf {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(calc(-1 * ${scrollDistance}rem));
            }
          }
        `}
      </style>
      <div
        className="scroll-container"
        style={{
          height: `calc(${VISIBLE_ITEMS * ITEM_HEIGHT_REM}rem)`,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <ul
          className="scrolling-list"
          style={animationStyle}
        >
          {scrollableNotices.map((notice, index) => (
            <li
              key={`${notice.id}-${index}`} // Ensure unique keys for duplicated items
              className="text-sm text-foreground/90 border-b border-border/50 flex items-center" // Removed pb-2, using fixed height
              style={{ height: `${ITEM_HEIGHT_REM}rem`, paddingBottom: '0.5rem', paddingTop: '0.5rem' }}
            >
              {notice.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ScrollingNoticeBoard;
