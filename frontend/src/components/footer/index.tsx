import React from "react";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black py-16 px-48">
      <div className="text-white m-auto container flex flex-col gap-[43px]">
        <div className="flex justify-between items-center">
          <Image
            src="/images/Vector.png"
            className="h-[35px] w-[42px]"
            width={100}
            height={100}
            alt="vector"
          />
          <div>
            <div className="flex gap-9">
              <div className="flex gap-5 items-center">
                <div className="border border-primary rounded-full text-center p-5">
                  <IoCallOutline />
                </div>
                <p className="text-lg">(976) 7007-1234</p>
              </div>
              <div className="flex gap-5 items-center">
                <div className="border border-primary rounded-full p-5">
                  <MdEmail />
                </div>
                <p className="text-lg">contact@ecommerce.mn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-700"></div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 ">
            <FaRegCopyright className="text-sm" />
            <p className="text-lg">2024 Ecommerce MN</p>
          </div>
          <div className="flex gap-4 text-xl">
            <CiFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
