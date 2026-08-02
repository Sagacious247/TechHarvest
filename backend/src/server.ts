import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

server.requestTimeout = 10 * 60 * 1000; // 10 minutes
server.headersTimeout = 10 * 60 * 1000;
server.keepAliveTimeout = 120000;