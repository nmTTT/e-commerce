"use client";

import { apiUrl } from "@/lib/utils";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export interface IProduct {
  name: string;
  price: string;
  description: string;
  size: string;
  images: string;
  isNew: boolean;
  _id: string;
  quantity: number;
  discount: number;
  category: string;
}

interface IProductContext {
  products: IProduct[];
  fetchProductData: () => void;
}

export const ProductContext = createContext<IProductContext>({
  products: [],
  fetchProductData: () => {},
});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProductData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/products/get-all`);
      setProducts(res.data.user);
      console.log("products", products);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, fetchProductData }}>
      {children}
    </ProductContext.Provider>
  );
};
