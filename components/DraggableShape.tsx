// components/DraggableShape.tsx

import React, { useState } from 'react';

interface DraggableShapeProps {
  initialX: number;
  initialY: number;
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
        <rect x="0.682373" y="0.648682" width="220.514" height="75.0824" rx="7.5" fill="#181819"/>
        <rect x="0.682373" y="0.648682" width="220.514" height="75.0824" rx="7.5" stroke="#28292B"/>
        <rect x="18.1824" y="16.1487" width="5.5103" height="44.0824" rx="2.75515" fill="#2C80FF"/>
        <rect x="31.0398" y="22.1182" width="5.5103" height="32.1434" rx="2.75515" fill="#2C80FF"/>
        <rect x="43.897" y="18.9038" width="5.5103" height="38.5721" rx="2.75515" fill="#2C80FF"/>
        <rect x="56.7544" y="16.1487" width="5.5103" height="44.0824" rx="2.75515" fill="#2C80FF"/>
        <rect x="69.6118" y="24.8733" width="5.5103" height="26.6331" rx="2.75515" fill="#2C80FF"/>
        <rect x="82.4692" y="16.1487" width="5.5103" height="44.0824" rx="2.75515" fill="#2C80FF"/>
        <rect x="95.3267" y="22.1182" width="5.5103" height="32.1434" rx="2.75515" fill="#2C80FF"/>
        <rect x="108.184" y="18.9038" width="5.5103" height="38.5721" rx="2.75515" fill="#2C80FF"/>
        <rect x="121.042" y="16.1487" width="5.5103" height="44.0824" rx="2.75515" fill="#2C80FF"/>
        <rect x="133.899" y="24.8733" width="5.5103" height="26.6331" rx="2.75515" fill="#2C80FF"/>
        <rect x="146.756" y="16.1487" width="5.5103" height="44.0824" rx="2.75515" fill="#2C80FF"/>
        <rect x="159.614" y="22.1182" width="5.5103" height="32.1434" rx="2.75515" fill="#2C80FF"/>
        <rect x="172.471" y="18.9038" width="5.5103" height="38.5721" rx="2.75515" fill="#2C80FF"/>
        <rect x="185.328" y="16.1487" width="5.5103" height="44.0824" rx="2.75515" fill="#2C80FF"/>
        <rect x="198.186" y="24.8733" width="5.5103" height="26.6331" rx="2.75515" fill="#2C80FF"/>
    </svg>

  );
};

export default DraggableShape;
