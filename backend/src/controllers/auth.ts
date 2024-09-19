import { Request, Response } from "express";

export const logIn = (req: Request, res: Response) => {
  res.status(200).json({ message: "SUCCESS" });
};
