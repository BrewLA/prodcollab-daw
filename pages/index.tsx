// pages/index.tsx

'use client'

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import CustomCursor from '../components/CustomCursor';

const socket = io('http://localhost:8080');

const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = '100%';
  const lightness = '50%';
  return `hsl(${hue}, ${saturation}, ${lightness})`;
};

const Home: React.FC = () => {
  const [cursors, setCursors] = useState<{ [key: string]: { x: number; y: number; fill: string } }>({});
  const [myColor, setMyColor] = useState<string>(generateRandomColor());

  useEffect(() => {
    socket.on('cursorMove', (data: { clientId: string; x: number; y: number; fill: string }) => {
      setCursors(prevCursors => ({
        ...prevCursors,
        [data.clientId]: { x: data.x, y: data.y, fill: data.fill },
      }));
    });

    socket.on('cursorDisconnect', (clientId: string) => {
      setCursors(prevCursors => {
        const newCursors = { ...prevCursors };
        delete newCursors[clientId];
        return newCursors;
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX: x, clientY: y } = e;
    socket.emit('move', { x, y, fill: myColor });
  };

  return (
    <div className="relative h-screen flex justify-center items-center cursor-none" onMouseMove={handleMouseMove}>
      <h1 className="text-3xl">Hello World!</h1>
      {Object.keys(cursors).map(clientId => (
        <CustomCursor key={clientId} x={cursors[clientId].x} y={cursors[clientId].y} fill={cursors[clientId].fill} />
      ))}
    </div>
  );
};

export default Home;