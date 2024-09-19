import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

import authRoute from "./routes/auth";

const PORT = process.env.PORT;

// create express application object

const app = express();

// middlewares
app.use("/api/v1/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome E-Commerce API Server");
});

// server

app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
});
