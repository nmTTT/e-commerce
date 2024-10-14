"use client";

import { useContext, useState } from "react";
import { ProductContext } from "../context/product";
import { ProductSmallCard } from "../components/productCard/productSmallCard";
import { MyCategoryContext } from "../context/category";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import axios from "axios";
import { apiUrl } from "@/lib/utils";

const CategoryPage = () => {
  const { products } = useContext(ProductContext);
  const { myCategory, size } = useContext(MyCategoryContext);
  const [catList, setCatList] = useState<string | null>(null);

  const getAllProducts = async () => {
    try {
      const res = await axios.post(`${apiUrl}/get/products/search`, {
        name: search,
        category,
        size,
      });
      if (res.status === 200) {
        const { products, lastProduct } = res.data;
        setProducts(products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("d", myCategory);

  return (
    <div className="pt-[60px] pb-[100px] bg-gray-100 text-black">
      <div className="container m-auto flex justify-center gap-5">
        <div className="flex flex-col gap-12 w-[15rem]">
          <div className="flex flex-col gap-4 ">
            <p className="font-semibold text-2xl">Ангилал</p>
            <div className="flex flex-col gap-2">
              <RadioGroup
                defaultValue="All"
                onValueChange={(value) => {
                  setCatList(value);
                }}
              >
                <div className="flex items-center gap-6 w-[180px]">
                  <RadioGroupItem value="All" id="All" />
                  <Label htmlFor="All">All Category</Label>
                </div>
                {myCategory?.map((cat, idx) => {
                  return (
                    <div
                      className="flex items-center gap-6 w-[180px]"
                      key={idx}
                    >
                      <RadioGroupItem value={cat._id} id={cat._id} />
                      <Label htmlFor={cat._id}>{cat.name}</Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <label className="font-semibold text-2xl">Хэмжээ</label>
            <div className="flex flex-col">
              <RadioGroup defaultValue="">
                {size?.map((s, idx) => {
                  return (
                    <div
                      className="flex items-center gap-6 w-[180px]"
                      key={idx}
                    >
                      <RadioGroupItem value={s._id} id={s._id} />
                      <Label htmlFor={s._id} className="">
                        {s.name}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
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
