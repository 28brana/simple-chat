import cors from "cors";
import express from "express";
import { createServer } from 'http';
import { Server } from "socket.io";
const PORT = 8000;

const app = express();
const httpServer = createServer(app);
app.use(cors());
app.use(express.json());

const io = new Server(httpServer,
  {
    pingTimeout: 60000,
    cors: { origin: '*' }
  }
);

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('join', (username) => {
    socket.username = username;
    io.emit('message', {
      username,
      message:`${username} Join the Chat`
    });
  });

  socket.on('message', ({ username, message }) => {
    io.emit('message', { username, message });
  });

  socket.on('disconnect', () => {
    io.emit('message', `${socket.username} has left the chat`);
  });
});


const startServer = () => {
  httpServer
    .listen(PORT, () => {
      console.log("Server Started");

    })
    .on("error", (err) => {
      console.log("Server Crashed");
    });
};

startServer();