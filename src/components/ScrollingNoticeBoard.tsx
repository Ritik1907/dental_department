
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

const VISIBLE_ITEMS = 3; // Used for seamless loop logic
const ITEM_HEIGHT_REM = 3.75; // Each item approx 60px (3.75rem * 16px/rem)
const ANIMATION_SECONDS_PER_ITEM = 3; // Speed of scroll

const ScrollingNoticeBoard: React.FC<ScrollingNoticeBoardProps> = ({ notices }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollableNotices = useMemo(() => {
    // This condition determines if we need to duplicate items for a seamless scroll effect.
    // It's not strictly about whether scrolling happens, but whether the list is long enough for the duplication strategy.
    if (notices.length <= VISIBLE_ITEMS) { 
      return notices;
    }
    // Duplicate the first `VISIBLE_ITEMS` items to the end for a seamless loop
    return [...notices, ...notices.slice(0, VISIBLE_ITEMS)];
  }, [notices]);

  if (!isClient || notices.length === 0) {
    // Ensure this message container also respects h-full if inside CardContent with flex-grow
    return <div className="flex items-center justify-center h-full"><p className="text-sm text-foreground/70">No notices available.</p></div>;
  }
  
  // If not enough items for the duplication strategy for seamless scrolling, display statically.
  // The actual decision to scroll or not could be based on whether content overflows available height.
  // For simplicity, we use VISIBLE_ITEMS as the threshold for enabling animation.
  if (notices.length <= VISIBLE_ITEMS) {
    return (
      <div className="h-full"> {/* This div takes full height from parent CardContent */}
        <ul className="h-full flex flex-col text-sm text-foreground/90"> {/* UL also tries to fill height */}
          {notices.map((notice, index) => (
            <li
              key={notice.id}
              className="text-sm text-foreground/90 border-b border-border/50 flex items-center last:border-b-0"
              style={{ 
                height: `${ITEM_HEIGHT_REM}rem`, 
                paddingTop: '0.5rem', 
                paddingBottom: '0.5rem',
                // Horizontal padding is handled by CardContent
              }}
            >
              {notice.text}
            </li>
          ))}
          {/* This empty li will take up remaining space, pushing actual notices to the top if list is short. */}
          <li className="flex-grow"></li> 
        </ul>
      </div>
    );
  }

  // Logic for scrolling animation
  const animationDuration = notices.length * ANIMATION_SECONDS_PER_ITEM;
  const scrollDistance = notices.length * ITEM_HEIGHT_REM;

  const animationStyle: CSSProperties = {
    animationName: 'scroll-notices-kf',
    animationDuration: `${animationDuration}s`,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  };

  const styleTagKey = `scroll-animation-style-${notices.length}`;

  return (
    <div className="h-full"> {/* Ensures this component tries to fill parent's height */}
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
          height: '100%', // Changed from calculated height to 100%
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
              key={`${notice.id}-${index}`} 
              className="text-sm text-foreground/90 border-b border-border/50 flex items-center"
              style={{ 
                height: `${ITEM_HEIGHT_REM}rem`, 
                paddingTop: '0.5rem', 
                paddingBottom: '0.5rem' 
              }}
            >
              {notice.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrollingNoticeBoard;
      
    