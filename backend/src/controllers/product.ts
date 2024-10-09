import { Request, Response } from "express";
import Product from "../models/product.model";
import Size from "../models/size.model";

export const createNewProduct = async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      price,
      size,
      images,
      isNew,
      quantity,
      discount,
      category,
    } = req.body;
    const createdProduct = await Product.create({
      name,
      description,
      price,
      size,
      images,
      isNew,
      quantity,
      discount,
      category,
    });
    res.status(201).json({ message: "success", user: createdProduct });
  } catch (error: any) {
    console.log("error", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await Product.find({}).populate("category");
    console.log("products", allProducts);
    res.status(200).json({ message: "success", user: allProducts });
  } catch (error: any) {
    console.log(error.message);
    res.status(404).json({ message: "aldaa garlaa", error: error.message });
  }
};

export const getAllProductsWithSearch = async (req: Request, res: Response) => {
  const { category, size, name } = req.body;

  try {
    const query: any = {};
    if (category) query.category = category;
    if (size) query.size = size;
    if (name) {
      query.name = { $regex: new RegExp(name, "i") };
    }

    const products = await Product.find(query);
    const lastProduct = await Product.find().sort({ createdAt: -1 }).limit(1);
    res.status(200).json({ message: "success", products, lastProduct });
  } catch (error) {
    res.status(401).json({ error: "Failed to retrieve products" });
    console.error(error);
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId).populate("category");
    res.status(200).json({ message: "success to get one product", product });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get one product" });
  }
};

export const getSize = async (req: Request, res: Response) => {
  try {
    const getAllSize = await Size.find({});
    res.status(201).json({ message: "success", size: getAllSize });
  } catch (error) {
    console.log("error", error);
    res.status(401).json({ message: "Server Error", error: error });
  }
};
