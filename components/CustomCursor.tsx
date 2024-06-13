import React, { useState, useEffect } from 'react';

interface CustomCursorProps {
  x: number;
  y: number;
  fill: string;
  userId: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ x, y, fill, userId }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

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
      if (isDragging) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
        // Update cursor position
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

  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    setIsDragging(true);
    setOffsetX(e.nativeEvent.offsetX);
    setOffsetY(e.nativeEvent.offsetY);
  };

  const moveCursor = (newX: number, newY: number) => {
    // Update cursor position
    // You might want to limit newX and newY to stay within the viewport or specific boundaries
    // For simplicity, we update position directly, but you may need additional logic for boundary checking
    // Example:
    // const clampedX = Math.max(0, Math.min(window.innerWidth - 24, newX));
    // const clampedY = Math.max(0, Math.min(window.innerHeight - 24, newY));
    // setCursorPosition(clampedX, clampedY);
    // Adjust coordinates to stay within bounds as needed

    // For now, directly updating the position
    // Ensure to update state only when dragging
    if (isDragging) {
      // Implement logic to update cursor position here
    }
  };

  return (
    <div style={{
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      transform: 'translate(-50%, -50%)', // Center the cursor
      width: '24px',
      height: '24px',
      overflow: 'visible'
    }}>
      <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseDown={handleMouseDown}
      >
      <path
        d="M6.10494 7.13869L7.95153 18.2509C8.22089 19.8718 10.3849 20.2418 11.1775 18.8025L13.4697 14.6399L18.1372 13.746C19.751 13.437 20.0678 11.2646 18.6095 10.5075L8.61167 5.31745C7.34486 4.65982 5.87096 5.73067 6.10494 7.13869Z"
        fill={fill}
        stroke={strokeColor}
        strokeWidth="1.7321"
      />
      </svg>
      <title>{userId}</title>
      <text className="p-4" x="12" y="16" fill="#FFFFFF" textAnchor="middle" fontSize="10px" fontWeight="bold">
        {userId}
      </text>
    </div>
  );
};

export default CustomCursor;