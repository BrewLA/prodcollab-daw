'use client'

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'; // Import socket.io-client module here
import CustomCursor from '../components/CustomCursor';
import DraggableShape from '@/components/DraggableShape';
import Image from 'next/image';

// Initialize socket.io-client with proper options
const socket = io("https://prodcollab-daw.glitch.me", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

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
    // Set up event listeners for socket.io events
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

    // Clean up socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX: x, clientY: y } = e;
    socket.emit('move', { x, y, fill: myColor });
  };

  const tracks = [0, 1, 2, 3, 4]; // Example track positions
  const trackHeight = 80; // Adjust this based on your track height

  return (
    <div className="relative w-full h-screen flex flex-col justify-start items-center cursor-none" onMouseMove={handleMouseMove}>
      <div className="flex flex-row relative w-full justify-between items-center p-12">
        <div className="flex flex-col">
          <h1 className="text-2xl">Welcome to ProdCollab!</h1>
          <h2 className="text-sm text-gray-500">Made with ❤️ by the © Brew.LA team</h2>
        </div>
        <Image
          src="/images/prodcollab-logo.png"
          width={48}
          height={48}
          alt="Company logo" 
        />
      </div>
      <div className="flex justify-center items-center relative w-full h-full overflow-hidden">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="w-full h-16 border-b border-secondary"
            style={{ position: 'absolute', top: `${track * trackHeight * 1.5}px`, width: '100%' }}
          >
            <DraggableShape
              key={index}
              initialX={100} // Adjust initial X position as needed
              initialY={track + 24} // Adjust initial Y position within the track
              width={226} // Adjust width of the draggable shape
              height={76} // Adjust height of the draggable shape
              fillColor="" // Set fill color as needed
              gridSize={12} // Set grid size for snapping if required
            />
          </div>
        ))}
      </div>
      {/* Render custom cursors based on socket.io data */}
      {Object.keys(cursors).map(clientId => (
        <CustomCursor key={clientId} x={cursors[clientId].x} y={cursors[clientId].y} fill={cursors[clientId].fill} />
      ))}
    </div>
  );
};

export default Home;
