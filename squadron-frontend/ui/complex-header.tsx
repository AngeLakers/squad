import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";
import { useAuth } from "@/app/authContext";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #f3f4f6;
  background-color: white;
`;

const NavRow = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  margin-right: 32px;
  font-weight: 600;
  font-size: 16px;
  color: #4d5761;
  &:last-child {
    margin-right: 0;
  }
`;

const LogoDiv = styled.a`
  padding-left: 80px;
  margin-right: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 80px;
  gap: 12px;
`;

export function ComplexHeader() {
  const { user, signOut } = useAuth();
  return (
    <Nav>
      <NavRow>
        <LogoDiv>
          <Link href="/application">
            <img
              className="w-auto h-7"
              src="https://uploads-ssl.webflow.com/64549cd879ac7b0ebb505519/647326278341277e7271ca40_Squadron%20Horizontal%20Lock%20Up%20Black%202.svg"
              alt="Squadron logo"
            />
          </Link>
        </LogoDiv>

        <NavLink href="/homescreen">Home</NavLink>
        <NavLink href="#">Products</NavLink>
        <NavLink href="#">Resources</NavLink>
        <NavLink href="#">Pricing</NavLink>
      </NavRow>
      <ButtonContainer>
        {user ? (
          <CustomButton
            label="Sign out"
            preset="outlined"
            textColor="#4D5761"
            onClick={signOut}
          />
        ) : (
          <>
            <Link href="/login">
              <CustomButton label="Log in" preset="text" textColor="#4D5761" />
            </Link>
            <CustomButton label="Sign up" preset="black" />
          </>
        )}
      </ButtonContainer>
    </Nav>
  );
}
