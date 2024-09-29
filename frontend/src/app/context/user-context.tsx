"use client";

import { apiUrl } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, createContext } from "react";
import { toast } from "react-toastify";

interface IUser {
  email: string;
  password: string;
}

type UserContextType = {
  handleLogIn: () => void;
  handleUserData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userToken: string;
  setUserToken: (userToken: string) => void;
};

export const UserContext = createContext<UserContextType>({
  handleLogIn: () => {},
  handleUserData: () => {},
  userToken: "",
  setUserToken: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [userToken, setUserToken] = useState("");
  const [userData, setUserData] = useState<IUser>({
    email: "",
    password: "",
  });

  const handleUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("first");
    const { name, value } = e.target;
    console.log("first", name, value);
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log("userdata", userData);
  };
  const handleLogIn = async () => {
    try {
      console.log("user", apiUrl);
      const res = await axios.post(`${apiUrl}/logIn`, userData);
      console.log("first", res);
      if (res.status === 200) {
        toast.success("User successfully signed in", { autoClose: 1500 });
        const { token } = res.data;
        localStorage.setItem("token", token);
        setUserToken(token);
        router.push("/");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  };
  return (
    <UserContext.Provider
      value={{ handleUserData, handleLogIn, userToken, setUserToken }}
    >
      {children}
    </UserContext.Provider>
  );
};
