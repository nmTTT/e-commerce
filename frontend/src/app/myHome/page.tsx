"use client";

import { ProductContext } from "@/app/context/product";
import Link from "next/link";
import { useContext } from "react";
import { ProductBigCard } from "../components/productCard/productBigCard";
import { ProductSmallCard } from "../components/productCard/productSmallCard";

const MainHome = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div className="bg-white text-black">
      <div className="h-[446px] relative bg-[url('/images/hoodie.png')] bg-cover bg-[center] bg-no-repeat px-52 py-7 flex flex-col justify-end gap-4">
        <p className="text-xl">Wild Flower Hoodie</p>
        <p className="text-4xl font-bold">120000₮</p>
      </div>
      <div className="m-auto container grid grid-cols-4 gap-5 my-10 grid-row-6">
        {products?.map((product, i) => {
          return (
            <>
              <Link href={"/" + product._id}>
                {i === 6 || i === 7 ? (
                  <ProductBigCard product={product} />
                ) : (
                  <ProductSmallCard product={product} />
                )}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default MainHome;
