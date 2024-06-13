import { NextApiRequest, NextApiResponse } from 'next';
import io from 'socket.io-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const socket = io('wss://prodcollab-daw.glitch.me', {
    transports: ['websocket'],
    upgrade: false,
    rejectUnauthorized: false, // Optional: Only if you have self-signed certificates
  });

  socket.on('connect', () => {
    console.log('WebSocket connected');
    res.status(200).json({ message: 'WebSocket connected' });
  });

  socket.on('error', (error) => {
    console.error('WebSocket error:', error);
    res.status(500).json({ error: 'WebSocket error' });
  });

  socket.on('disconnect', () => {
    console.log('WebSocket connection closed');
  });

  socket.on('message', (data) => {
    console.log('Received message from WebSocket server:', data);
    res.status(200).json({ message: 'Received message from WebSocket server', data });
  });

  // Example: Sending a message to WebSocket server
  socket.emit('message', 'Hello from client');

  // Handle incoming messages from the client
  socket.on('messageFromClient', (data) => {
    console.log('Received message from client:', data);
    // Process data as needed
  });

  // Disconnect socket when API route is finished
  res.on('finish', () => {
    socket.disconnect();
  });
}
