"use client";

import { CategorySmallCard } from "../components/categoryCard/categorySmallCard";
import { Checkbox } from "../components/ui/checkbox";

const CategoryPage = () => {
  return (
    <div className="pt-[60px] pb-[100px] bg-gray-100 text-black">
      <div className="container m-auto flex justify-center gap-5">
        <div className="flex flex-col gap-12 w-[15rem]">
          <div className="flex flex-col gap-4 ">
            <p className="font-semibold text-2xl">Ангилал</p>
            <div className="flex items-center gap-2">
              <Checkbox id="terms1" />
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Малгай
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms2" />
              <label
                htmlFor="terms2"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Усны сав
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms3" />
              <label
                htmlFor="terms3"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                T-shirt
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms4" />
              <label
                htmlFor="terms4"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Hoodie
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms5" />
              <label
                htmlFor="terms5"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Tee
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms5" />
              <label
                htmlFor="terms5"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Цүнх
              </label>
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
          <CategorySmallCard />
          <CategorySmallCard />
          <CategorySmallCard />
          <CategorySmallCard />
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
  );
};

export default CategoryPage;
