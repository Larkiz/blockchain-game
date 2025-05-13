import { socket } from "@/shared/api/socket";

export const mine = (publicKey, clicks) => {
  socket.emit("mine", { publicKey: publicKey, clicks: clicks });
};
