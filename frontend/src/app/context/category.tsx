"use client";

import { apiUrl } from "@/lib/utils";
import axios from "axios";
import { useEffect, useState, createContext } from "react";

export interface ICategory {
  name: string;
  description: string;
}

interface ICategoryContext {
  size: ICategory[];
  myCategory: ICategory[];
  getCategoryData: () => void;
}

export const MyCategoryContext = createContext<ICategoryContext>({
  size: [],
  myCategory: [],
  getCategoryData: () => {},
});

export const MyCategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [myCategory, setMyCategory] = useState<ICategory[]>([]);
  const [size, setSize] = useState<ICategory[]>([]);

  const getCategoryData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/category`);
      setMyCategory(res.data.categories);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };
  const getSize = async () => {
    try {
      const res = await axios.get(`${apiUrl}/category/size`);
      setSize(res.data.size);
      console.log("size", size);
    } catch (error) {}
  };

  useEffect(() => {
    getCategoryData();
    getSize();
  }, []);
  return (
    <MyCategoryContext.Provider value={{ getCategoryData, myCategory, size }}>
      {children}
    </MyCategoryContext.Provider>
  );
};
