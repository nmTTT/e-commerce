import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Resend } from "resend";

dotenv.config();

import authRoute from "./routes/auth";
import { connectDB } from "./config/db";
import { generateHtmlTemplate } from "./utils/generateHtmlTemplate";

const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT || "";

// create express application object

const app = express();

const resend = new Resend(process.env.RESEND_API_KEY);

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);

app.get("/", async (req: Request, res: Response) => {
  const rndOtp = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(4, "0");
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["nomttumurkhuu@yahoo.com"],
    subject: "sainu nomtoo",
    html: generateHtmlTemplate(rndOtp),
  });
  if (error) {
    console.error("EMAIL_ERR", { error });
  }
  res.send("Welcome E-Commerce API Server");
});

// server

connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
});
