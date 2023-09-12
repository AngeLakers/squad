"use client";
import * as React from "react";
import styled from "styled-components";
import { ApplicationIntro } from "@/ui/application-intro";
import { ApplicationSignUp } from "@/ui/application-signup";

const SignUp = styled.div`
  align-items: center;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

export default function Home() {
  return (
    <SignUp>
      <ApplicationIntro />
      <ApplicationSignUp />
    </SignUp>
  );
}
