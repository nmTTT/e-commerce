import { IProduct } from "@/app/context/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductBigCardProps = {
  product: IProduct;
};

export const ProductBigCard = ({ product }: ProductBigCardProps) => {
  return (
    <div className="bg-red-200 row-span-2 col-span-2">
      <Link href={"/" + product._id} className="h-full w-full">
        <div className="h-[692px] w-full rounded-2xl overflow-hidden">
          <Image
            src={product.images[0]}
            alt=""
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        <p>{product.name}</p>
        <p className="font-bold">{product.price}</p>
      </Link>
    </div>
  );
};
