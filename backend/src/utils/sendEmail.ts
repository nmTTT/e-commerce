import { generateHtmlTemplate } from "./generateHtmlTemplate";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "nomttumurkhuu2@gmail.com",
    pass: process.env.GOOGLE_API_KEY,
  },
});

export const sendEmail = async (email: string | string[], rndOtp: string) => {
  return await transporter.sendMail({
    from: "<nomttumurkhuu2@gmail.com>", // sender address
    to: email, // list of receivers
    subject: "Hello Teacher Ugtakhbayr", // Subject line
    text: "Hello world?", // plain text body
    html: generateHtmlTemplate(rndOtp), // html body
  });
};
