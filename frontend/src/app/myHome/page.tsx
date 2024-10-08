"use client";

import { ProductContext } from "@/app/context/product";
import Link from "next/link";
import { useContext } from "react";

import Image from "next/image";

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
              {i === 6 || i === 7 ? (
                <div className="row-span-2 col-span-2">
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
              ) : (
                <div>
                  <Link href={"/" + product._id} className="h-full w-full">
                    <div className="h-[331px] w-full rounded-2xl overflow-hidden">
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
                  </Link>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
export default MainHome;
