import { IProduct } from "@/app/context/product";
import Image from "next/image";
import React from "react";

type ProductBigCardProps = {
  product: IProduct;
};

export const ProductBigCard = ({ product }: ProductBigCardProps) => {
  return (
    <div className="col-span-2 row-span-2 bg-red-400">
      <div className="h-[692px] w-full rounded-2xl overflow-hidden">
        <Image
          src={product.images[0]}
          alt=""
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <p>{product.name}</p>
      <p className="font-bold">{product.price}</p>
    </div>
  );
};
