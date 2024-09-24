import React from "react";
import { CiHeart } from "react-icons/ci";

export const CategoryBigCard = () => {
  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <div className="flex flex-row-reverse p-2 rounded-xl h-full bg-cover bg-[url(https://images.unsplash.com/photo-1711630175511-cf461c067e63?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D)] ">
        <CiHeart />
      </div>
      <div className="flex flex-col gap-1 text-sm text-black">
        <p>The Prompt Magazine</p>
        <div className="font-semibold">120’000₮</div>
      </div>
    </div>
  );
};
