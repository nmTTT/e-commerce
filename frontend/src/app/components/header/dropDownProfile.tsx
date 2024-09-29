import React from "react";
import { Button } from "../ui/button";

type LogOutType = {
  logOut: () => void;
};

export default function DropDownProfile({ logOut }: LogOutType) {
  return (
    <div className="flex flex-col w-[10rem] h-[7rem] border border-gray-600 rounded-xl bg-white absolute top-20 right-[5rem]">
      <div className="flex flex-col gap-3 p-2">
        <Button>Profile</Button>
        <Button onClick={logOut}>Log Out</Button>
      </div>
    </div>
  );
}
