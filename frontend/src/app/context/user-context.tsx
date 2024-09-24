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
};

export const UserContext = createContext<UserContextType>({
  handleLogIn: () => {},
  handleUserData: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  //   const [userToken, setUserToken] = useState(false);
  const [userData, setUserData] = useState<IUser>({
    email: "",
    password: "",
  });

  const handleUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
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
        router.push("/");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  };
  return (
    <UserContext.Provider value={{ handleUserData, handleLogIn }}>
      {children}
    </UserContext.Provider>
  );
};
