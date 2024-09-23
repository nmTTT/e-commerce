import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import authRoute from "./routes/auth";
import { connectDB } from "./config/db";

const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT || "";

// create express application object

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome E-Commerce API Server");
});

// server

connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
});
