// components/CustomCursor.tsx

import React from 'react';

interface CustomCursorProps {
  x: number;
  y: number;
  fill: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ x, y, fill }) => {
  // Function to calculate a derivative shade for the stroke color
  const calculateStrokeColor = (color: string) => {
    // Convert HSL color to RGB
    const rgbColor = color.match(/\d+/g);
    if (!rgbColor) return '#000000'; // Default to black if color format is incorrect

    let r = parseInt(rgbColor[0], 10);
    let g = parseInt(rgbColor[1], 10);
    let b = parseInt(rgbColor[2], 10);

    // Calculate luminance
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // Determine if the luminance is bright or dark
    const strokeColor = luminance > 128 ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)';

    return strokeColor;
  };

  const strokeColor = calculateStrokeColor(fill);

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)', // Center the cursor
        pointerEvents: 'none', // Ensure the cursor does not interfere with mouse events
      }}
    >
      <path
        d="M6.10494 7.13869L7.95153 18.2509C8.22089 19.8718 10.3849 20.2418 11.1775 18.8025L13.4697 14.6399L18.1372 13.746C19.751 13.437 20.0678 11.2646 18.6095 10.5075L8.61167 5.31745C7.34486 4.65982 5.87096 5.73067 6.10494 7.13869Z"
        fill={fill}
        stroke={strokeColor}
        strokeWidth="1.7321"
      />
    </svg>
  );
};

export default CustomCursor;
