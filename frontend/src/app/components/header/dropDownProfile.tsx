import React from "react";
import { Button } from "../ui/button";

type LogOutType = {
  logOut: () => void;
};

export default function DropDownProfile({ logOut }: LogOutType) {
  return (
    <div className="flex flex-col w-[10rem] h-[7rem] border border-gray-600 rounded-xl bg-white absolute z-50 top-12 right-0">
      <div className="flex flex-col gap-3 p-2">
        <Button>Profile</Button>
        <Button onClick={logOut}>Log Out</Button>
      </div>
    </div>
  );
}
