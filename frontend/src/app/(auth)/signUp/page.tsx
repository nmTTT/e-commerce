"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiUrl } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface IUser {
  email: string;
  password: string;
  repassword: string;
  firstname: string;
  lastname: string;
}

function SignUp() {
  const router = useRouter();
  const [userData, setUserData] = useState<IUser>({
    email: "",
    password: "",
    repassword: "",
    firstname: "",
    lastname: "",
  });

  const handleUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSignUp = async () => {
    try {
      const { firstname, lastname, repassword, email, password } = userData;
      if (password === repassword) {
        const newUser = { firstname, lastname, email, password };
        const res = await axios.post(`${apiUrl}/signUp`, { newUser });
        if (res.status === 201) {
          toast.success("succesfully created user");
          router.push("/logIn");
        }
      } else {
        console.log("couldn't create user");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Couldn't create user");
    }
  };
  return (
    <div className="bg-gray-200 py-32">
      <div className="container m-auto text-black flex flex-col gap-6 w-[21rem]">
        <div className="flex justify-center">
          <p className="text-4xl font-semibold">Нэвтрэх</p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Input
              className="bg-white rounded-2xl"
              name="firstname"
              placeholder="Нэр"
              onChange={handleUserData}
            />
            <Input
              className="bg-white rounded-2xl"
              name="lastname"
              placeholder="Овог"
              onChange={handleUserData}
            />
            <Input
              className="bg-white rounded-2xl"
              name="email"
              placeholder="Имэйл хаяг"
              onChange={handleUserData}
            />
            <Input
              className="bg-white rounded-2xl"
              name="password"
              type="password"
              placeholder="Нууц үг"
              onChange={handleUserData}
            />
            <Input
              className="bg-white rounded-2xl"
              name="repassword"
              type="password"
              placeholder="Нууц үг давтах "
              onChange={handleUserData}
            />
            <Button
              onClick={handleSignUp}
              className="bg-blue-600 hover:bg-blue-800 text-white"
            >
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
                router.push("/logIn");
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
