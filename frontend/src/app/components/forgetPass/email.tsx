import { Button } from "react-day-picker";
import { Input } from "../ui/input";

type ISendEmailType = {
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendOtp: () => void;
};

function SendEmail({ handleEmail, handleSendOtp }: ISendEmailType) {
  return (
    <div className="bg-gray-200 p-56">
      <div className="container m-auto text-black flex flex-col gap-6 w-[21rem]">
        <div className="flex justify-center">
          <p className="text-4xl font-semibold">Нууц үг сэргээх</p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Input
              className="bg-white rounded-2xl"
              placeholder="Имэйл хаяг оруулах"
              name="email"
              onChange={handleEmail}
            />
            <Button
              className="bg-blue-600 hover:bg-blue-800 text-white"
              onClick={handleSendOtp}
            >
              Илгээх
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendEmail;
