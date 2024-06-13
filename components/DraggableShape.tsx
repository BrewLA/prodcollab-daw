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

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;

    const handleDragMove = (moveEvent: MouseEvent) => {
      const x = moveEvent.clientX - offsetX;
      const y = moveEvent.clientY - offsetY;
      setPosition({ x, y });
    };

    const handleDragEnd = () => {
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
    };

    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
  };

  return (
    <div
      className="absolute cursor-move"
      style={{
        left: position.x,
        top: position.y,
        width: size,
        height: size,
        backgroundColor: fillColor,
        zIndex: 100,
      }}
      onMouseDown={handleDragStart}
    />
  );
};

export default DraggableShape;
