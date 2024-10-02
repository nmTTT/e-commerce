import React from "react";
import { CategorySmallCard } from "../components/categoryCard/categorySmallCard";
import ProductCard from "../components/productCard/productDetailCard";

const ProductDetail = () => {
  return (
    <div className="bg-gray-200 pt-20 pb-28">
      <div className="container m-auto flex flex-col items-center gap-20">
        <ProductCard />
        <div className="flex flex-col gap-6">
          <p className="font-semibold text-2xl text-black">Холбоотой бараа</p>
          <div className="grid grid-cols-4 gap-x-5 gap-y-12">
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
