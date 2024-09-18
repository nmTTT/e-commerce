import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

function LogIn() {
  return (
    <div className="bg-gray-200 py-20">
      <div className="container m-auto text-black flex flex-col gap-6 w-[21rem]">
        <div className="flex justify-center">
          <p className="text-4xl font-semibold">Нэвтрэх</p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Input className="bg-white rounded-2xl" placeholder="Имэйл хаяг" />
            <Input className="bg-white rounded-2xl" placeholder="Нууц үг" />
            <Button className="bg-blue-600 hover:bg-blue-800 text-white">
              Нэвтрэх
            </Button>
            <Button variant="link" className="text-gray-500">
              <Link href="/signUp">Нууц үг мартсан</Link>
            </Button>
          </div>
          <div>
            <Button className="bg-white border border-blue-600 hover:bg-blue-600 w-full text-black hover:text-white">
              <Link href="/signUp">Бүртгүүлэх</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
