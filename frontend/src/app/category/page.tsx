"use client";

import { useContext, useState } from "react";
import { Checkbox } from "../components/ui/checkbox";
import { ProductContext } from "../context/product";
import { ProductSmallCard } from "../components/productCard/productSmallCard";
import { MyCategoryContext } from "../context/category";

const CategoryPage = () => {
  const [catList, setCatList] = useState();
  const { products } = useContext(ProductContext);
  const { myCategory, size } = useContext(MyCategoryContext);
  console.log("d", size);

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
                      <Checkbox
                        id={cat.description}
                        onChange={(e) => {
                          setCatList(e.target.value);
                        }}
                      />
                      <label
                        htmlFor={cat.description}
                        className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
            <div className="flex flex-col gap-2">
              {size?.map((s) => {
                return (
                  <>
                    <div className="flex items-center gap-2">
                      <Checkbox id={s.description} />
                      <label
                        htmlFor={s.description}
                        className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {s.name}
                      </label>
                    </div>
                  </>
                );
              })}
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
