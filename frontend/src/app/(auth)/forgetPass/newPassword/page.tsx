"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { apiUrl } from "@/lib/utils";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

interface IUserData {
  password: string;
  repassword: string;
}

const ResetPass = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [userData, setUserData] = useState<IUserData>({
    password: "",
    repassword: "",
  });

  const handleResetPass = async () => {
    try {
      const { password, repassword } = userData;
      if (password === repassword) {
        const res = await axios.post(`${apiUrl}/reset-password`, {
          password,
          resetToken: params.get("resettoken"),
          email: params.get("email"),
        });
        if (res.status === 200) {
          router.push("/logIn");
        }
      }
    } catch (error) {
      console.error("Couldn't update password", error);
    }
  };

  const handleUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log("userdata", userData);
  };
  return (
    <div className="bg-gray-200 p-56">
      <div className="container m-auto text-black flex flex-col gap-6 w-[21rem]">
        <div className="flex justify-center">
          <p className="text-4xl font-semibold">Нууц үг сэргээх</p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Input
              className="bg-white rounded-2xl"
              placeholder="Шинэ нууц үг"
              name="password"
              type="password"
              onChange={handleUserData}
            />
            <Input
              className="bg-white rounded-2xl"
              placeholder="Шинэ нууц үг давтах"
              type="password"
              name="repassword"
              onChange={handleUserData}
            />
            <Button
              className="bg-blue-600 hover:bg-blue-800 text-white"
              onClick={handleResetPass}
            >
              Үүсгэх
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
