import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const TOKEN_PASS = process.env.TOKEN_PASS;

interface IMyRequest extends Request {
  user: any;
}

export const auth = (req: IMyRequest, res: Response, next: NextFunction) => {
  //   console.log("Нэвтэрсэн хэрэглэгч шалгах", req.headers.authorization);

  try {
    const token = req.headers.authorization?.split(" ")[1];
    const user = jwt.verify(token, TOKEN_PASS);
    console.log("token", token);
    console.log("user", user);
    req.user = user;
    next();
  } catch (error) {
    console.error("error", error);
    res.status(400).json({ message: "Sign in first, please", error });
  }
};
