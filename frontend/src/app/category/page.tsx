"use client";

import { useContext } from "react";
import { Checkbox } from "../components/ui/checkbox";
import { ProductContext } from "../context/product";
import { ProductSmallCard } from "../components/productCard/productSmallCard";
import { MyCategoryContext } from "../context/category";

const CategoryPage = () => {
  const { products } = useContext(ProductContext);
  const { myCategory } = useContext(MyCategoryContext);

  return (
    <div className="pt-[60px] pb-[100px] bg-gray-100 text-black">
      <div className="container m-auto flex justify-center gap-5">
        <div className="flex flex-col gap-12 w-[15rem]">
          <div className="flex flex-col gap-4 ">
            <p className="font-semibold text-2xl">Ангилал</p>
            <div className="flex flex-col gap-2">
              {myCategory?.map((cat) => {
                return (
                  <>
                    <div className="flex items-center gap-2">
                      <Checkbox id={cat.description} />
                      <label
                        htmlFor={cat.description}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {cat.name}
                      </label>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="font-semibold text-2xl">Хэмжээ</p>
            <div className="flex items-center gap-2">
              <Checkbox id="terms5" />
              <label
                htmlFor="terms5"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Free
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms5" />
              <label
                htmlFor="terms5"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                S
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms5" />
              <label
                htmlFor="terms5"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                M
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms5" />
              <label
                htmlFor="terms5"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                L
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms5" />
              <label
                htmlFor="terms5"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                XL
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms5" />
              <label
                htmlFor="terms5"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                2XL
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms5" />
              <label
                htmlFor="terms5"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                3XL
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-y-12 gap-x-5">
          {products?.map((product) => {
            return (
              <>
                <ProductSmallCard product={product} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
