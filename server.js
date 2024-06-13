// server.js

const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer();
const io = socketIo(server, {
  cors: {
    origin: "https://prodcollab-daw.vercel.app", // Adjust as necessary
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('A user connected: ' + socket.id);

  socket.on('move', (data) => {
    io.emit('cursorMove', { clientId: socket.id, x: data.x, y: data.y, fill: data.fill, stroke: data.stroke });
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected: ' + socket.id);
    io.emit('cursorDisconnect', socket.id);
  });
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});