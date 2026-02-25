import express from "express";
import cors from "cors";
import meetingRouter from "./routes/meetingRoute.js";

const app = express();

app.use(
  cors({
    origin: [
      "https://dev-su-smart-building-calendar-na3l.vercel.app",
      "https://dev-su-smart-building-calendar.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api", meetingRouter);

export default app;
