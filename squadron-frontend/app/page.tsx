"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import CustomButton from "@/ui/custom-button";
import HomeImageSrc from "@/public/t1-homescreen.png";
import { ComplexHeader } from "@/ui/complex-header";
import SquadCustom from "@/ui/option-popup";
import TalentClientImage from "@/public/talent-client.png";
import { AuthProvider } from "./authContext";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 80px);
`;

const LeftSection = styled.div`
  padding-left: 80px;
  padding-right: 32px;
  width: calc(50vw - 80px);
  min-width: 592px;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 80px;
  min-width: 592px;
  width: calc(50vw - 80px);
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: #111927;
  margin: 0;
  margin-bottom: 48px;
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #4d5761;
  margin: 0;
  margin-bottom: 48px;
`;

export default function C1() {
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
    <AuthProvider>
      <ComplexHeader />
      <Container>
        <LeftSection>
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
            ultrices facilisis libero.
          </Description>
          <CustomButton
            label="Find your Squad"
            preset="default"
            onClick={() => setModalOpen(true)}
          />
        </LeftSection>
        <RightSection>
          <Image
            key="T1HomeImage"
            src={HomeImageSrc}
            alt="Home"
            width="592"
            height="592"
          />
        </RightSection>
      </Container>
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
    </AuthProvider>
  );
}
