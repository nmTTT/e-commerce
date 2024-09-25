import { Request, Response } from "express";
import User from "../models/user.model";

interface UserAuthInfo extends Request {
  user: any;
}

export const getLoggedUser = async (req: UserAuthInfo, res: Response) => {
  try {
    const { id } = req.user;
    const data = await User.findById(id);
    res.status(201).json({ message: "success", user: data });
    console.log("ID", data);
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};
