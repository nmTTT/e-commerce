"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import React from "react";

function SignUp() {
  const router = useRouter();
  return (
    <div className="bg-gray-200 py-20">
      <div className="container m-auto text-black flex flex-col gap-6 w-[21rem]">
        <div className="flex justify-center">
          <p className="text-4xl font-semibold">Нэвтрэх</p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Input className="bg-white rounded-2xl" placeholder="Нэр" />
            <Input className="bg-white rounded-2xl" placeholder="Имэйл хаяг" />
            <Input className="bg-white rounded-2xl" placeholder="Нууц үг" />
            <Input
              className="bg-white rounded-2xl"
              placeholder="Нууц үг давтах "
            />
            <Button className="bg-blue-600 hover:bg-blue-800 text-white">
              Үүсгэх
            </Button>
            <div className="px-6">
              <ul className="text-gray-500 list-disc">
                <li>Том үсэг орсон байх</li>
                <li>Жижиг үсэг орсон байх</li>
                <li>Тоо орсон байх</li>
                <li>Тэмдэгт орсон байх</li>
              </ul>
            </div>
          </div>
          <div>
            <Button
              onClick={() => {
                router.push("/");
              }}
              className="bg-white border border-blue-600 hover:bg-blue-600 w-full text-black hover:text-white"
            >
              Нэвтрэх
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
