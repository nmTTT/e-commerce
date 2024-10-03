import { Request, Response } from "express";
import Product from "../models/product.model";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({});
    res
      .status(200)
      .json({ message: "successfully got product data", products });
  } catch (error) {
    res.status(400).json({ message: " failed to get product data", error });
  }
};
