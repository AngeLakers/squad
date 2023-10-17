"use client";
import * as React from "react";
import styled from "styled-components";
import ApplicationIntro from "@/ui/application-intro";
import AuthenticationForm from "@/ui/application-auth";

const SignUp = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <SignUp>
      <ApplicationIntro />
      <AuthenticationForm Login={false} />
    </SignUp>
  );
}
