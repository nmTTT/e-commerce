"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/context/user";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import DropDownProfile from "./dropDownProfile";
import Link from "next/link";

function Header() {
  const router = useRouter();
  const { userToken, setUserToken } = useContext(UserContext);
  const [openProfile, setOpenProfile] = useState(false);
  const logOut = () => {
    console.log("first");
    localStorage.removeItem("token");
    setUserToken("");
    setOpenProfile(false);
    router.push("/logIn");
  };

  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    setUserToken(token);
  }, []);
  return (
    <div className="bg-black py-4">
      <div className="m-auto container flex justify-between">
        <div className="text-white flex items-center gap-8">
          <Link href="/">
            <div className="flex gap-2 items-center">
              <Image
                src="/images/Vector.png"
                width={30}
                height={15}
                alt="vector"
              />
              <p className="text-lg">ECOMMERCE</p>
            </div>
          </Link>
          <Link href="/category" className="text-lg">
            Ангилал
          </Link>
        </div>
        <div className="flex rounded-full bg-primary py-2 px-4 items-center">
          <CiSearch className="text-white text-2xl" />
          <Input
            type="text"
            placeholder="Бүтээгдэхүүн хайх"
            className="bg-primary border-none pr-20 text-white"
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
          {userToken ? (
            <div className="text-3xl bg-black relative">
              <Button onClick={() => setOpenProfile((prev) => !prev)}>
                <CiUser />
              </Button>
              {openProfile === true && <DropDownProfile logOut={logOut} />}
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
