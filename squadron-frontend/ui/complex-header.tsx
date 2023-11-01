import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import CustomButton from "./custom-button";
import { useAuth } from "@/app/authContext";
import SquadCustom from "@/ui/option-popup";
import TalentClientImage from "@/public/talent-client.png";

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
  const [isModalOpen, setModalOpen] = useState(false);
  const icons2 = [
    <Image
      key="talentclientImage"
      src={TalentClientImage}
      alt="Talent Client Icon"
      width="64"
      height="64"
    />,
    <Image
      key="talentclientImage"
      src={TalentClientImage}
      alt="Talent Client Icon"
      width="64"
      height="64"
    />,
  ];
  const determineLink = (selectedOption: string) => {
    if (selectedOption === "I'm a Talent") {
      return "/questionnaire/1c";
    } else if (selectedOption === "I'm a Client") {
      return "/questionnaire/1t";
    }
    return "#";
  };
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
            <Link href="/signup">
              <CustomButton
                label="Sign up"
                preset="black"
                // onClick={() => setModalOpen(true)}
              />
            </Link>
          </>
        )}
      </ButtonContainer>
      {isModalOpen && (
        <SquadCustom
          closeModal={() => {
            setModalOpen(false);
          }}
          title={"Lorem ipsum dolor sit?"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          }
          options={["I'm a Talent", "I'm a Client"]}
          icons={icons2}
          fontSize="24px"
          fontWeight="600"
          width="auto"
          useBlueTheme={true}
          showLoginPrompt={true}
          link={determineLink}
        />
      )}
    </Nav>
  );
}
