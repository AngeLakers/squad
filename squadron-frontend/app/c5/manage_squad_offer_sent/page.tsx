"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import CustomButton from "@/ui/custom-button";
import SquadCard, { ButtonContainerPresets } from '@/ui/squad-card';
import { SimpleHeader } from "@/ui/simple-header";
import styled from "styled-components";
import {StarSVG } from "@/ui/svgs";
import { BadgeData } from "@/ui/talent-skills";
import SendOffer from "@/ui/send-offer-popup";

const Container = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  margin-bottom: 88px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const OutsideContainer = styled.div`
  margin-bottom: 100px;
`;

const Header = styled.div`
  margin-left: 8vw;
  margin-right: 8vw;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #E5E7EB;
`;


const mockSkillsData: Array<BadgeData[]> = [
    [
      { label: "Roadmapping", icon: <StarSVG />, preset: "outlined_green" },
      { label: "Vendor Management & Selection", preset: "outlined_grey" },
      {
        label: "Vendor Management & Selection",
        icon: <StarSVG preset="grey" />,
        preset: "outlined_grey",
      },
      {
        label: "Vendor Management & Selection",
        icon: <StarSVG preset="grey" />,
        preset: "outlined_grey",
      },
      {
        label: "Vendor Management & Selection",
        icon: <StarSVG preset="grey" />,
        preset: "outlined_grey",
      },
      {
        label: "Vendor Management & Selection",
        icon: <StarSVG preset="grey" />,
        preset: "outlined_grey",
      },
      {
        label: "Vendor Management & Selection",
        icon: <StarSVG preset="grey" />,
        preset: "outlined_grey",
      },
    ],
    [
      {
        label: "Photoshop",
        icon: <img alt="photoshop logo" src="/photoshop.png" />,
        preset: "outlined_grey",
      },
      {
        label: "Figma",
        icon: <img alt="figma logo" src="/figma.png" />,
        preset: "outlined_grey",
      },
    ],
  ];

export default function ManageSquadOfferSent() {
  const [isOfferSend, setOfferSendOpen] = useState(false);

  return (
    <>
      <OutsideContainer>
        <Header>
          <SimpleHeader />
        </Header>

        <Container>
        <TitleContainer>
            <Title>Manage Squad</Title>
            <CustomButton label="+ Add role" preset="default" borderColor="#4B48EC" padding="10px 16px" backgroundColor="#4B48EC" textColor="white" hoverColor="none" />
        </TitleContainer>
        <Divider />
        <SquadCard
          badgeTitles={["Offer sent"]}
          badgeColor="red"
          squadTitle="Patricia Montero"
          squadSubTitle="UX Designer"
          rate="$30 /h"
          rateColor="#027A48"
          hoursPerWeek="20-25h /week"
          hoursPerWeekColor="#027A48"
          location="Amsterdam (8 hours overlap)"
          locationColor="#B42318"
          availability="Inmediate"
          availabilityColor="#027A48"
          experience="5 years experience"
          onClick ={() => setOfferSendOpen(true)}
          icon={
            <img src="https://avatars.githubusercontent.com/u/12592949?v=1" />
          }
          buttonsPreset={ButtonContainerPresets.MESSAGE}
          type="book"
          data={mockSkillsData}
        />
        <SquadCard
          badgeTitles={["Offer sent"]}
          badgeColor="red"
          squadTitle="Patricia Montero"
          squadSubTitle="UX Designer"
          rate="$30 /h"
          rateColor="#027A48"
          hoursPerWeek="20-25h /week"
          hoursPerWeekColor="#027A48"
          location="Amsterdam (8 hours overlap)"
          locationColor="#B42318"
          availability="Inmediate"
          availabilityColor="#027A48"
          experience="5 years experience"
          onClick ={() => setOfferSendOpen(true)}
          icon={
            <img src="https://avatars.githubusercontent.com/u/12592949?v=1" />
          }
          buttonsPreset={ButtonContainerPresets.MESSAGE}
          type="book"
          data={mockSkillsData}
        />

      </Container>
      {isOfferSend && <SendOffer onClose={() => setOfferSendOpen(false)} sendOfferLink='/c5/proj_hub_offer_sent_a'/>}
      </OutsideContainer>
    </>
  );
}
