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
    <div className="text-black flex flex-col items-center gap-12 pt-[6.5rem]">
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
export default VerifyOtp;
