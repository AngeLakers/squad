"use client";
import * as React from "react";
import SignUp from "@/ui/signup";
import { AuthProvider } from "@/app/authContext";

export default function Home() {
  return (
    <AuthProvider>
      <SignUp login={true} />
    </AuthProvider>
  );
}
