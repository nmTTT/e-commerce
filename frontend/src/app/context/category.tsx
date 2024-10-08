"use client";

import { apiUrl } from "@/lib/utils";
import axios from "axios";
import { useEffect, useState, createContext } from "react";

export interface ICategory {
  name: string;
  description: string;
}

interface ICategoryContext {
  myCategory: ICategory[];
  getCategoryData: () => void;
}

export const MyCategoryContext = createContext<ICategoryContext>({
  myCategory: [],
  getCategoryData: () => {},
});

export const MyCategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [myCategory, setMyCategory] = useState<ICategory[]>([]);

  const getCategoryData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/category`);
      setMyCategory(res.data.categories);
      console.log("categories", myCategory);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);
  return (
    <MyCategoryContext.Provider value={{ getCategoryData, myCategory }}>
      {children}
    </MyCategoryContext.Provider>
  );
};
