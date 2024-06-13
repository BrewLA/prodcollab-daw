import React, { useEffect, useState } from 'react';
import CustomCursor from '../components/CustomCursor'; // Adjust path as necessary

const WebSocketUrl = 'wss://prodcollab-daw.glitch.me'; // Replace with your Glitch WebSocket URL

const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = '100%';
  const lightness = '50%';
  return `hsl(${hue}, ${saturation}, ${lightness})`;
};

const Home: React.FC = () => {
  const [cursors, setCursors] = useState<{ [key: string]: { x: number; y: number; fill: string } }>({});
  const [myColor, setMyColor] = useState<string>(generateRandomColor());
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const websocket = new WebSocket(WebSocketUrl);

    websocket.onopen = () => {
      console.log('WebSocket connected');
      setWs(websocket);
    };

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      handleSocketMessage(data);
    };

    websocket.onclose = () => {
      console.log('WebSocket disconnected');
      setWs(null);
    };

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const handleSocketMessage = (data: any) => {
    const { clientId, x, y, fill } = data;
    if (clientId) {
      setCursors(prevCursors => ({
        ...prevCursors,
        [clientId]: { x, y, fill },
      }));
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX: x, clientY: y } = e;
    if (ws) {
      ws.send(JSON.stringify({ x, y, fill: myColor }));
    }
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
