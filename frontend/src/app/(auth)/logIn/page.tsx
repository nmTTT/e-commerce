"use client";

import { UserContext } from "@/app/context/user-context";
import LogInCard from "@/components/login-signup/login";

import React, { useContext } from "react";
type IUser = {
  handleLogIn: () => void;
  handleUserData: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function LogIn() {
  const { handleLogIn, handleUserData } = useContext(UserContext);
  return (
    <LogInCard handleLogIn={handleLogIn} handleUserData={handleUserData} />
  );
}

export default LogIn;
