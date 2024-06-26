// pages/index.tsx

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'; // Import socket.io-client module here
import CustomCursor from '../components/CustomCursor';
import Image from 'next/image';
import Link from 'next/link';
import Layout from './layout';

// Initialize socket.io-client with proper options
const socket = io("https://prodcollab-daw-d90a591b2014.herokuapp.com", {
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

  return (
    <div className="relative w-full h-screen flex flex-col justify-start items-center" onMouseMove={handleMouseMove}>
      <div className="flex flex-row relative w-full justify-between items-center px-4">
        <div className="flex flex-col">
          {/* <h1 className="text-xl text-white">Welcome to ProdCollab!</h1> */}
          <h2 className="text-sm text-gray-500">Made with ❤️ by the © Brew.LA team</h2>
        </div>
        <Link href="#">
          <Image
            src="/images/prodcollab-logo.png"
            className="m-2"
            width={36}
            height={36}
            alt="Company logo"
          />
        </Link>
      </div>
      <Layout />
      {Object.keys(cursors).map(clientId => (
        <CustomCursor
          key={clientId}
          userId={clientId}
          x={cursors[clientId].x}
          y={cursors[clientId].y}
          fill={cursors[clientId].fill}
          isLocalUser={clientId === socket.id}
        />
      ))}
    </div>
  );
};

export default Home;
