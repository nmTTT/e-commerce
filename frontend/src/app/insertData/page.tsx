import { apiUrl } from "@/lib/utils";
import axios from "axios";
import { toast } from "react-toastify";

export const InsertData = () => {
  return async () => {
    const res = await axios.post(`${apiUrl}/category`);
    if (res.status === 200) {
      toast.success("Insert data successful");
    }
  };
};
