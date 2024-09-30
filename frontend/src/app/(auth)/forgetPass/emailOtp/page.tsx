"use client";

import SendEmail from "@/app/components/forgetPass/email";
import VerifyOtp from "@/app/components/forgetPass/otp";
import { apiUrl } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const EmailOtp = () => {
  const router = useRouter();
  const [step, setStep] = useState(2);
  const [email, setEmail] = useState("");
  const [otpValue, setOtpValue] = useState<string>("");
  const [countDown, setCountDown] = useState(30);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSendOtp = async () => {
    try {
      const res = await axios.post(`${apiUrl}/forget-password`, { email });
      if (res.status === 200) {
        setStep(step + 1);
      }
    } catch (error) {
      toast.error("Имэйл илгээхэд алдаа гарлаа");
    }
  };
  const handleConfirmOtp = async (value: string) => {
    setOtpValue(value);
    console.log(value, otpValue);
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

  const handleResendOtp = async () => {
    setCountDown(30);
    try {
      const res = await axios.post(`${apiUrl}/forget-password`, { email });
      console.log(email);
      if (res.status === 200) {
        setStep(step + 1);
      }
    } catch (error) {
      toast.error("Имэйл илгээхэд алдаа гарлаа");
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

  return (
    <div className="flex flex-col items-center">
      <div className="w-full py-40 flex justify-center bg-gray-200">
        {step === 1 && (
          <>
            <SendEmail
              handleEmail={handleEmail}
              handleSendOtp={handleSendOtp}
            />
          </>
        )}
        {step === 2 && (
          <>
            <VerifyOtp
              email={email}
              otpValue={otpValue}
              handleConfirmOtp={handleConfirmOtp}
              handleResendOtp={handleResendOtp}
              countDown={countDown}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default EmailOtp;
