import * as React from "react";
import styled from "styled-components";
import ApplicationIntro from "@/ui/application-intro";
import AuthenticationForm from "@/ui/application-auth";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

export default function SignUp({ login = false }) {
  return (
    <SignUpContainer>
      <ApplicationIntro />
      <AuthenticationForm Login={login} />
    </SignUpContainer>
  );
}
