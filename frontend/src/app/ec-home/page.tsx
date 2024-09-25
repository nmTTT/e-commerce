// import { CategoryBigCard } from "@/components/categoryCard/categoryBigCard";
// import { CategoryMediumCard } from "@/components/categoryCard/categoryMediumCard";
// import { CategorySmallCard } from "@/components/categoryCard/categorysmallCard";
import React from "react";

function MainHome() {
  return (
    <div className="w-screen bg-white flex flex-col items-center gap-4 pb-28">
      <div className="w-full h-[28rem] text-3xl flex flex-col-reverse items-center bg-contain bg-[url(https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
        <div className="text-black w-1/2">
          <p>Wildflower Hoodie</p>
          <p className="font-semibold">120’000₮</p>
        </div>
      </div>
      <div className="flex flex-col gap-12 w-3/4">
        <div className="grid grid-cols-4 gap-5">
          {/* {[].map((pr, idx) => {
            if (idx === 3) {
              return <CategoryBigCard />;
            } else if (idx === 4) {
              return <CategoryMediumCard />;
            } else return <CategorySmallCard />;
          })} */}
        </div>
      </div>
    </div>
  );
}

export default MainHome;
