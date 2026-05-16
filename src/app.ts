import express from "express";
import chatRoutes from "./routes/chat.routes";
import ingestRoutes from "./routes/ingest.routes";

const app = express();

app.use(express.json());

app.use("/api/chat", chatRoutes);
app.use("/api/ingest", ingestRoutes);

export default app;
