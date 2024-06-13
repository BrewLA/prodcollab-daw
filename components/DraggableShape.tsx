// components/DraggableShape.tsx

import React, { useState } from 'react';

interface DraggableShapeProps {
  initialX: number;
  initialY: number;
  size: number;
  fillColor: string;
}

const DraggableShape: React.FC<DraggableShapeProps> = ({ initialX, initialY, size, fillColor }) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [cursorOffset, setCursorOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setIsDragging(true);
    const { clientX, clientY } = e;
    setCursorOffset({ x: clientX - position.x, y: clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    if (isDragging) {
      const { clientX, clientY } = e;
      setPosition({ x: clientX - cursorOffset.x, y: clientY - cursorOffset.y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        zIndex: 50, // Set z-index to 50
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <rect width={size} height={size} />
    </svg>
  );
};

export default DraggableShape;
