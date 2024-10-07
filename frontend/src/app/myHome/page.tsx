"use client";

import { ProductContext } from "@/app/context/product";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const MainHome = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div className="bg-gray-200 text-black">
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
                ) : (
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
