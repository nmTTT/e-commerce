import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { decodeToken } from "../utils/jwt";
dotenv.config();

const TOKEN_PASS = process.env.TOKEN_PASS;

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  //   console.log("Нэвтэрсэн хэрэглэгч шалгах", req.headers.authorization);

  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Please log in first" });
  }
  {
    const token = req.headers.authorization.split(" ")[1];
    const user = decodeToken(token);
    req.user = user;
    next();
  }
};
