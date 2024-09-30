import { HiOutlineMailOpen } from "react-icons/hi";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Button } from "@/app/components/ui/button";

type IVerifyOtpType = {
  otpValue: string;
  handleConfirmOtp: (value: string) => void;
  handleResendOtp: () => void;
  countDown: number;
};

const VerifyOtp = ({
  otpValue,
  handleConfirmOtp,
  handleResendOtp,
  countDown,
}: IVerifyOtpType) => {
  return (
    <div className="text-black flex flex-col gap-12">
      <div className="flex flex-col gap-6 items-center">
        <div className="text-6xl">
          <HiOutlineMailOpen />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-semibold text-3xl">Баталгаажуулах</h1>
          <p>
            “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
          </p>
        </div>
        <InputOTP maxLength={4} value={otpValue} onChange={handleConfirmOtp}>
          <InputOTPGroup className="bg-white ">
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
export default VerifyOtp;
