//index.tsx

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CustomCursor from '../components/CustomCursor';
import DraggableShape from '../components/DraggableShape';


const Home: React.FC = () => {
  const [cursors, setCursors] = useState<{ [key: string]: { x: number; y: number; fill: string } }>({});
  const [myColor, setMyColor] = useState<string>('hsl(210, 100%, 50%)'); // Example color
  const [socket, setSocket] = useState<WebSocket | null>(null); // State to hold the WebSocket instance

  useEffect(() => {
    const newSocket = new WebSocket('wss://prodcollab-daw.glitch.me'); // Create a new WebSocket instance

    newSocket.onopen = () => {
      console.log('WebSocket connected');
      setSocket(newSocket); // Set the WebSocket instance in state when connected
    };

    newSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'cursorMove') {
        setCursors(prevCursors => ({
          ...prevCursors,
          [data.clientId]: { x: data.x, y: data.y, fill: data.fill },
        }));
      } else if (data.type === 'cursorDisconnect') {
        setCursors(prevCursors => {
          const newCursors = { ...prevCursors };
          delete newCursors[data.clientId];
          return newCursors;
        });
      }
    };

    return () => {
      newSocket.close(); // Close the WebSocket connection when component unmounts
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (socket && socket.readyState === WebSocket.OPEN) { // Check if WebSocket is open
      const { clientX: x, clientY: y } = e;
      const data = { type: 'move', x, y, fill: myColor };
      socket.send(JSON.stringify(data)); // Send data through WebSocket
    }
  };

  const tracks = [0, 1, 2, 3, 4]; // Example track positions
  const trackHeight = 80; // Adjust this based on your track height

  return (
    <div className="relative h-screen flex flex-col justify-start items-center cursor-none" onMouseMove={handleMouseMove}>
      <div className="flex flex-row w-full justify-between items-center p-12">
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
      <div className="relative w-full h-full overflow-hidden">
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
        {Object.keys(cursors).map(clientId => (
          <CustomCursor key={clientId} x={cursors[clientId].x} y={cursors[clientId].y} fill={cursors[clientId].fill} />
        ))}
      </div>
    </div>
  );
};

export default Home;
