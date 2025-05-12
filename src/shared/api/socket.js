import { io } from "socket.io-client";

function initSocketIO() {
  const socket = io(import.meta.env.VITE_SOCKET_HOST_COMMON, {
    autoConnect: false,
  });

  socket.on("connection", (data) => {
    console.log("Socket.IO подключен", data);
  });

  socket.on("disconnection", (data) => {
    console.log("Socket.IO отключен", data);
  });

  return socket;
}

export const socket = initSocketIO();
