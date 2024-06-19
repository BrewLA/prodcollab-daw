import React, { useState, useEffect, useRef } from 'react';

interface CustomCursorProps {
  x: number;
  y: number;
  fill: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ x, y, fill }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);

  const calculateStrokeColor = (color: string) => {
    const rgbColor = color.match(/\d+/g);
    if (!rgbColor) return '#000000'; // Default to black if color format is incorrect

    let r = parseInt(rgbColor[0], 10);
    let g = parseInt(rgbColor[1], 10);
    let b = parseInt(rgbColor[2], 10);

    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const strokeColor = luminance > 128 ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)';

    return strokeColor;
  };

  const strokeColor = calculateStrokeColor(fill);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && cursorRef.current) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
        moveCursor(newX, newY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offsetX, offsetY]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default to avoid unexpected browser behavior
    setIsDragging(true);
    const rect = cursorRef.current?.getBoundingClientRect();
    if (rect) {
      setOffsetX(e.clientX - rect.left);
      setOffsetY(e.clientY - rect.top);
    }
  };

  const moveCursor = (newX: number, newY: number) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${newX}px`;
      cursorRef.current.style.top = `${newY}px`;
    }
  };

  useEffect(() => {
    document.body.style.cursor = `url(data:image/svg+xml;base64,${btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.10494 7.13869L7.95153 18.2509C8.22089 19.8718 10.3849 20.2418 11.1775 18.8025L13.4697 14.6399L18.1372 13.746C19.751 13.437 20.0678 11.2646 18.6095 10.5075L8.61167 5.31745C7.34486 4.65982 5.87096 5.73067 6.10494 7.13869Z"
          fill="${fill}"
          stroke="${strokeColor}"
          strokeWidth="1.7321"
        />
      </svg>
    `)}) 0 0, auto`;
    
    return () => {
      document.body.style.cursor = 'default'; // Reset cursor when component unmounts
    };
  }, [fill, strokeColor]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: '0',
        top: '0',
        width: '24px',
        height: '24px',
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'none' // Hide the div as the cursor is now handled by CSS
      }}
      onMouseDown={handleMouseDown}
    >
    </div>
  );
};

export default CustomCursor;
