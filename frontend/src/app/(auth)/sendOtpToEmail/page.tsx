"use client";

import SendEmail from "@/app/components/forgetPass/email";
import { VerifyOtp } from "@/app/components/forgetPass/otp";
import { apiUrl } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const SendOtpToEmail = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [countDown, setCountDown] = useState(30);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSendOtp = async () => {
    console.log(email);
    try {
      const res = await axios.post(`${apiUrl}/forget-password`, { email });
      if (res.status === 200) {
        setStep(step + 1);
      }
    } catch (error) {
      toast.error("Имэйл илгээхэд алдаа гарлаа");
    }
    // router.push("/forgetpass/otp");
  };
  const handleConfirmOtp = async (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      // router.push("/forgetpass/newpass");
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
    <div className="h-[calc(100vh-350px)] flex flex-col items-center">
      <div className="w-[320px] mt-24">
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

export default SendOtpToEmail;
