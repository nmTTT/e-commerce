"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: "" });
  const getProduct = async (id: string | string[]) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/products/${id}`
      );
      setProduct(res.data.product);
    } catch (error) {
      console.log("error", error);
      toast.error("aldaa garlaa product detail error");
    }
  };
  useEffect(() => {
    getProduct(id);
  }, []);
  return (
    <div className="bg-gray-200 text-black">
      <p>Product detail is here</p>
      <p>{id}</p>
      <p>{product.name}</p>
    </div>
  );
};
export default ProductDetail;
