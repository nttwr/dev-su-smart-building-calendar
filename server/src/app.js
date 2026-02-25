import express from "express";
import cors from "cors";
import meetingRouter from "./routes/meetingRoute.js";

const app = express();

app.use(
  cors({
    origin: "*", // อนุญาตทุกที่ก่อนเพื่อเช็คว่า Error หายไหม
  }),
);
app.use(express.json());

app.use("/api", meetingRouter);

export default app;
