import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";
import { sendEmail } from "../utils/sendEmail";
import crypto from "crypto";

const TOKEN_PASS = process.env.TOKEN_PASS || "";
export const signUp = async (req: Request, res: Response) => {
  try {
    const { lastname, firstname, email, password } = req.body;
    if (!lastname || !firstname || !email || !password) {
      res.status(400).json({ message: "Hooson utga baij bolohgui" });
    }
    const createdUSer = await User.create({
      lastname,
      firstname,
      email,
      password,
      phoneNumber: "99112233",
    });
    res.status(201).json({ message: "success", user: createdUSer });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Server Error", error: error });
  }
};

export const logIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      res.status(400).json({ message: "Burtgelgui hereglegch baina" });
    } else {
      const isCheck = bcrypt.compareSync(password, user?.password);
      if (!isCheck) {
        res
          .status(400)
          .json({ message: "hereglegchiin email esvel nuuts ug buruu baina" });
      } else {
        console.log("userid", user._id);
        const token = generateToken({ id: user._id });
        res.status(200).json({ message: "success", token: token });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "error", user: error });
  }
};

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    const findUser = await User.findById(id);
    res.status(201).json({ message: "success", user: findUser });
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otpValue } = req.body;

  const findUser = await User.findOne({ email: email, otp: otpValue });
  if (!findUser) {
    return res
      .status(400)
      .json({ message: "Бүртгэлтэй хэрэглэгч эсвэл OTP код олдсонгүй" });
  }

  //sendEmail
  const resetToken = crypto.randomBytes(25).toString("hex");
  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  findUser.passwordResetToken = hashedResetToken;
  findUser.passwordResetTokenExpire = new Date(Date.now() + 10 * 60 * 1000);
  await findUser.save();

  await sendEmail(
    email,
    `<a href="http://localhost:3000/forgetPass/newPassword?resettoken=${resetToken}"&email=${email}>Нууц үг сэргээх холбоос</a>`
  );
  res.status(200).json({ message: "Нууц үг сэргээх имэйл илгээлээ" });
};

export const forgetPass = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      return res
        .status(400)
        .json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    }

    const rndOtp = Math.floor(Math.random() * 10_000)
      .toString()
      .padStart(4, "0");
    findUser.otp = rndOtp;
    await findUser.save();
    await sendEmail(email, rndOtp);
    res.status(200).json({ message: "OTP code is sent email successfully" });
  } catch (error) {}
};

export const verifyPass = async (req: Request, res: Response) => {
  const { password, resetToken } = req.body;

  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const findUser = await User.findOne({
    passwordResetToken: hashedResetToken,
    passwordResetTokenExpire: { $gt: Date.now },
  });

  if (!findUser) {
    return res
      .status(400)
      .json({ message: "Таны нууц үг сэргээх хугацаа дууссан байна:" });
  }

  findUser.password = password;
  await findUser.save();
  res.status(200).json({ message: "Нууц үг  амжилттэй сэргээлээ" });
};

export const resetPass = async (req: Request, res: Response) => {
  const { password } = req.body;
  if (!password) {
    res.status(400).json({ message: "Please, enter the password" });
  }
  const updatePass = await User.updateOne;
};
