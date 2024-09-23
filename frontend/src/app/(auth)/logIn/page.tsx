"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useState } from "react";
import { apiUrl } from "@/lib/utils";
import { toast } from "react-toastify";

interface IUser {
  email: string;
  password: string;
}

function LogIn() {
  const router = useRouter();
  const [userData, setUserData] = useState<IUser>({
    email: "",
    password: "",
  });

  const handleUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const logIn = async () => {
    try {
      const { email, password } = userData;
      const user = { email, password };
      console.log("user", user);
      const res = await axios.post(`${apiUrl}/logIn`, { user });

      if (res.status === 201) {
        toast.success("User successfully signed in", { autoClose: 1500 });
        const { token } = res.data;
        localStorage.setItem("token", token);
        router.push("/");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  };

  return (
    <div className="bg-gray-200 p-56">
      <div className="container m-auto text-black flex flex-col gap-6 w-[21rem]">
        <div className="flex justify-center">
          <p className="text-4xl font-semibold">Нэвтрэх</p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Input
              className="bg-white rounded-2xl"
              placeholder="Имэйл хаяг"
              name="email"
              onChange={handleUserData}
            />
            <Input
              className="bg-white rounded-2xl"
              placeholder="Нууц үг"
              type="password"
              name="password"
              onChange={handleUserData}
            />
            <Button
              className="bg-blue-600 hover:bg-blue-800 text-white"
              onClick={logIn}
            >
              Нэвтрэх
            </Button>
            <Button variant="link" className="text-gray-500">
              Нууц үг мартсан
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                router.push("/signUp");
              }}
              className="bg-white border border-blue-600 hover:bg-blue-600 w-full text-black hover:text-white"
            >
              Бүртгүүлэх
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
