"use client";

import { Button } from "@/app/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/app/components/ui/input-otp";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";

const router = useRouter();
const [countDown, setCountDown] = useState(30);
const [otpValue, setOtpValue] = useState("12");

const handleResendOtp = () => {
  setCountDown(30);
};

const handleConfirmOtp = (value: string) => {
  setOtpValue(value);
  if (value.length === 4) {
    router.push("/forgetpass/newpass");
  }
};

useEffect(() => {
  if (countDown > 0) {
    const countdown = setInterval(() => {
      setCountDown((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(countdown);
  }
}, [countDown]);
export const VerifyOtp = () => {
  return (
    <div className="container m-auto flex flex-col gap-12 pt-[6.5rem]">
      <div className="flex flex-col gap-6">
        <div>
          <HiOutlineMailOpen />
        </div>
        <div className="flex flex-col gap-2">
          <h2>Баталгаажуулах</h2>
          <p>
            “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
          </p>
        </div>
        <InputOTP maxLength={4} value={otpValue} onChange={handleConfirmOtp}>
          <InputOTPGroup className="bg-white">
            <InputOTPSlot className="w-14 h-14" index={0} />
            <InputOTPSlot className="w-14 h-14" index={1} />
            <InputOTPSlot className="w-14 h-14" index={2} />
            <InputOTPSlot className="w-14 h-14" index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Button
        variant="link"
        className="text-gray-500"
        onClick={handleResendOtp}
      >
        Дахин илгээх ({countDown})
      </Button>
    </div>
  );
};
