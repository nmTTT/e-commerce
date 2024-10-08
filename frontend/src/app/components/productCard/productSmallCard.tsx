import { IProduct } from "@/app/context/product";
import Image from "next/image";
import React from "react";

type ProductBigCardProps = {
  product: IProduct;
};

export const ProductSmallCard = ({ product }: ProductBigCardProps) => {
  return (
    <div>
      <div className="h-[331px] w-full rounded-2xl overflow-hidden">
        <Image
          src={product.images[0]}
          alt=""
          width={100}
          height={100}
          className="w-full"
        />
      </div>

      <p>{product.name}</p>
      <p className="font-bold">{product.price}</p>
    </div>
  );
};
