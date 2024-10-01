import { apiUrl } from "@/lib/utils";
import axios from "axios";
import { createContext } from "vm";

const CategoryContext = createContext();

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const getCategoryData = async () => {
    const res = await axios.get(`${apiUrl}/category/getCategoryData`);
    if (res.status === 201) {
    }
  };
  return (
    <CategoryContext.Provider value={getCategoryData}>
      {children}
    </CategoryContext.Provider>
  );
};
