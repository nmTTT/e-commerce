import { Request, Response } from "express";
import Category from "../models/category.model";
import Size from "../models/size.model";

export const category = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      res.status(400).json({ message: "fill in data" });
    }
    const createdCategory = await Category.create({
      name,
      description,
    });
    res.status(201).json({ message: "success", user: createdCategory });
  } catch (error: any) {
    console.log("error", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
export const getCategoryData = async (req: Request, res: Response) => {
  try {
    const getAllCategoryData = await Category.find({});
    res
      .status(201)
      .json({ message: "success", categories: getAllCategoryData });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Server Error", error: error });
  }
};
export const size = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ message: "fill in data" });
    }
    const createdSize = await Size.create({
      name,
    });
    res.status(201).json({ message: "success", user: createdSize });
  } catch (error: any) {
    console.log("error", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
