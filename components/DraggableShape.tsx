import React, { useState, useRef } from 'react';

interface DraggableShapeProps {
  initialX: number;
  initialY: number;
  width: number;
  height: number;
  fillColor: string;
  gridSize: number; // Add gridSize prop
}

const DraggableShape: React.FC<DraggableShapeProps> = ({ initialX, initialY, width, height, fillColor, gridSize }) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [cursorOffset, setCursorOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const svgRef = useRef<SVGSVGElement>(null);

  const snapToGrid = (value: number, gridSize: number) => {
    return Math.round(value / gridSize) * gridSize;
  };

  const handleMouseDown = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    const svg = svgRef.current;
    if (svg && svg.contains(e.target as Node)) {
      setIsDragging(true);
      const { clientX, clientY } = e;
      setCursorOffset({ x: clientX - position.x, y: clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    if (isDragging) {
      const { clientX, clientY } = e;
      setPosition({
        x: snapToGrid(clientX - cursorOffset.x, gridSize),
        y: snapToGrid(clientY - cursorOffset.y, gridSize),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fillColor}
      className="bg-black bg-opacity-5 backdrop-blur-md rounded-lg"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        zIndex: 50,
        cursor: isDragging ? 'grabbing' : 'grab', // Hide cursor when dragging
        transform: isDragging ? 'scale(1.025)' : 'scale(1)',
        opacity: isDragging ? 0.8 : 1,
        transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <rect x="0.947078" y="1.0578" width="223.984" height="73.9843" rx="7.61804" stroke="#28292B" strokeWidth="1.01574" />
      <rect x="18.7224" y="15.6619" width="5.59703" height="44.7762" rx="2.79851" fill="#2C80FF" />
      <rect x="31.7822" y="21.7252" width="5.59703" height="32.6493" rx="2.79851" fill="#2C80FF" />
      <rect x="44.8418" y="18.4603" width="5.59703" height="39.1791" rx="2.79851" fill="#2C80FF" />
      <rect x="57.9016" y="15.6619" width="5.59703" height="44.7762" rx="2.79851" fill="#2C80FF" />
      <rect x="70.9614" y="24.5238" width="5.59703" height="27.0523" rx="2.79851" fill="#2C80FF" />
      <rect x="84.021" y="15.6619" width="5.59703" height="44.7762" rx="2.79851" fill="#2C80FF" />
      <rect x="97.0806" y="21.7252" width="5.59703" height="32.6493" rx="2.79851" fill="#2C80FF" />
      <rect x="110.14" y="18.4603" width="5.59703" height="39.1791" rx="2.79851" fill="#2C80FF" />
      <rect x="123.2" y="15.6619" width="5.59703" height="44.7762" rx="2.79851" fill="#2C80FF" />
      <rect x="136.26" y="24.5238" width="5.59703" height="27.0523" rx="2.79851" fill="#2C80FF" />
      <rect x="149.32" y="15.6619" width="5.59703" height="44.7762" rx="2.79851" fill="#2C80FF" />
      <rect x="162.38" y="21.7252" width="5.59703" height="32.6493" rx="2.79851" fill="#2C80FF" />
      <rect x="175.439" y="18.4603" width="5.59703" height="39.1791" rx="2.79851" fill="#2C80FF" />
      <rect x="188.499" y="15.6619" width="5.59703" height="44.7762" rx="2.79851" fill="#2C80FF" />
      <rect x="201.559" y="24.5238" width="5.59703" height="27.0523" rx="2.79851" fill="#2C80FF" />
    </svg>
  );
};

export default DraggableShape;
