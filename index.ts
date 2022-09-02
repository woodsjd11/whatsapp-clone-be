import express from "express";
import helmet from "helmet";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

app.use(helmet());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json("hi");
});

io.on("connection", (_socket) => {});

httpServer.listen(4000, () => {
  console.log("server listening on port 4000");
});
