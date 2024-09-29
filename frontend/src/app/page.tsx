"use client";

import { useEffect, useState } from "react";
import VerifyOtp from "./components/forgetPass/otp";
import { apiUrl } from "@/lib/utils";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
// import MainHome from "./myHome/page";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [countDown, setCountDown] = useState(30);
  const handleConfirmOtp = async (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      try {
        const res = await axios.post(`${apiUrl}/verify-otp`, {
          email,
          otpValue,
        });
        if (res.status === 200) {
          toast.success(
            "Нууц үг сэргээх холбоосыг таны имэйл хаяг руу явууллаа."
          );
          router.push("/login");
        }
      } catch (error) {
        toast.error("Имэйл илгээхэд алдаа гарлаа");
      }
    }
  };
  const handleResendOtp = () => {
    setCountDown(30);
  };

  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [countDown]);
  return (
    <div>
      {/* <MainHome /> */}
      <VerifyOtp
        otpValue={otpValue}
        handleConfirmOtp={handleConfirmOtp}
        handleResendOtp={handleResendOtp}
        countDown={countDown}
      />
    </div>
  );
}
