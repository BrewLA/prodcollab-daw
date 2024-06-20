// components/CustomCursor.tsx

import React, { useState, useEffect, useRef } from 'react';

interface CustomCursorProps {
  userId: string;
  x: number;
  y: number;
  fill: string;
  isLocalUser: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ userId, x, y, fill, isLocalUser }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLocalUser) {
      setCursorPosition({ x, y });
    }
  }, [x, y, isLocalUser]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isLocalUser && cursorRef.current) {
        const newX = e.clientX;
        const newY = e.clientY;
        setCursorPosition({ x: newX, y: newY });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isLocalUser]);

  useEffect(() => {
    if (isLocalUser) {
      document.body.style.cursor = `url(data:image/svg+xml;base64,${btoa(`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.10494 7.13869L7.95153 18.2509C8.22089 19.8718 10.3849 20.2418 11.1775 18.8025L13.4697 14.6399L18.1372 13.746C19.751 13.437 20.0678 11.2646 18.6095 10.5075L8.61167 5.31745C7.34486 4.65982 5.87096 5.73067 6.10494 7.13869Z"
            fill="${fill}"
            stroke="white"
            strokeWidth="1.7321"
          />
        </svg>
      `)}) 0 0, auto`;
      
      return () => {
        document.body.style.cursor = 'default'; // Reset cursor when component unmounts
      };
    }
  }, [fill, isLocalUser]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        width: '24px',
        height: '24px',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      {/* SVG cursor for remote users */}
      {!isLocalUser && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.10494 7.13869L7.95153 18.2509C8.22089 19.8718 10.3849 20.2418 11.1775 18.8025L13.4697 14.6399L18.1372 13.746C19.751 13.437 20.0678 11.2646 18.6095 10.5075L8.61167 5.31745C7.34486 4.65982 5.87096 5.73067 6.10494 7.13869Z"
            fill={fill}
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth="1.7321"
          />
        </svg>
      )}
    </div>
  );
};

export default CustomCursor;
