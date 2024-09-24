"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/context/user-context";

function Header() {
  const router = useRouter();
  const { token } = useContext(UserContext);

  return (
    <div className="bg-black py-4">
      <div className="m-auto container flex justify-between">
        <div className="text-white flex gap-8">
          <div className="flex gap-2 items-center">
            <Image
              src="/images/Vector.png"
              width={30}
              height={15}
              alt="vector"
            />
            <p className="text-lg">ECOMMERCE</p>
          </div>
          <button className="text-lg">Ангилал</button>
        </div>
        <div className="flex rounded-full bg-primary py-2 px-4 items-center">
          <CiSearch className="text-white text-2xl" />
          <Input
            type="text"
            placeholder="Бүтээгдэхүүн хайх"
            className="bg-primary border-none pr-20"
          />
        </div>
        <div className="text-white flex items-center">
          <div>
            <Button className="text-3xl bg-black">
              <CiHeart />
            </Button>
          </div>
          <div>
            <Button className="text-3xl bg-black">
              <CiShoppingCart />
            </Button>
          </div>
          {/* { token ? (

          ):( <div className="flex gap-2 pl-4">
            <Button
              className="rounded-3xl border border-blue-600"
              onClick={() => {
                router.push("/signUp");
              }}
            >
              Бүртгүүлэх
            </Button>
            <Button
              className="bg-blue-600"
              onClick={() => {
                router.push("/logIn");
              }}
            >
              Нэвтрэх
            </Button>
          </div>) } */}
          <div className="flex gap-2 pl-4">
            <Button
              className="rounded-3xl border border-blue-600"
              onClick={() => {
                router.push("/signUp");
              }}
            >
              Бүртгүүлэх
            </Button>
            <Button
              className="bg-blue-600"
              onClick={() => {
                router.push("/logIn");
              }}
            >
              Нэвтрэх
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
