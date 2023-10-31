"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import SquadCard, { ButtonContainerPresets } from '@/ui/squad-card';
import { SimpleHeader } from "@/ui/simple-header";
import styled from "styled-components";
import {CalenderSVG, ClockSVG, CoinsSVG, FlashSVG, LocationSVG, PeopleSVG, ToolsSVG} from '@/ui/svgs';
import RoleSkillDropdownFilter from '@/ui/filter-dropdown-role-and-skills';
import {StarSVG } from "@/ui/svgs";
import TitleAndFilter from '@/ui/title-and-filter';
import { BadgeData } from "@/ui/talent-skills";
import { gray900, xlargeFontSize, mediumFontWeight, xxlargeLineHeight, gray300, mediumFontSize, xxlargeFontSize, xxxlargeLineHeight } from '@/styles/reuseParams';
import SendOffer from "@/ui/send-offer-popup";
import RateDropdownFilter from "@/ui/filter-dropdown-rate";
import CommitmentDropdownFilter from "@/ui/filter-dropdown-commitment";
import LocationFilter from "@/ui/filter-dropdown-locaion";

const Container = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  margin-bottom: 88px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const SearchBar = styled.div`
  margin-left: 8vw;
  margin-right: 8vw;
  margin-bottom: 88px;
`;

const OutsideContainer = styled.div`
  margin-bottom: 100px;
`;

const Header = styled.div`
  margin-left: 8vw;
  margin-right: 8vw;
`;
const continentsData = {
  Aisa: ['China', 'India', 'Japan', 'Korea', 'Thailand', 'Vietnam'],
  Europe: ['Germany', 'France', 'Italy', 'Spain', 'UK'],
  Africa: ['Egypt', 'Kenya', 'Nigeria', 'South Africa'],
  Americas: ['Canada', 'Mexico', 'USA'],
  Oceania: ['Australia', 'New Zealand'],
}

    const handleItemSelect = (item: string) => {
        console.log(`Selected item: ${item}`);
    };

const filters = [
    {
      filterName:'Favourite',
      slot: <StarSVG  preset="grey"/>,
      containerWidth: '0px',
      containerHeight: '0px',
      children: (
        <></>
      )
    },{
        filterName: 'Rate',
        slot: <CoinsSVG />,
        containerWidth: '328px',
        containerHeight: 'fit-content',
        children: (
            <RateDropdownFilter />
        )
    },{
        filterName: 'Commitment',
        slot: <ClockSVG />,
        containerWidth: '296px',
        containerHeight: 'fit-content',
        children: (
            <CommitmentDropdownFilter></CommitmentDropdownFilter>
        )
    }, {
        filterName: 'Location',
        slot: <LocationSVG />,
        containerWidth: '389px',
        containerHeight: 'fit-content',
        children: (
            <LocationFilter
                items={Object.entries(continentsData).map(([continent, countries]) => ({ continent, countries }))}
            />
        )
    }, {
        filterName: 'Availability',
        slot: <CalenderSVG />,
        containerWidth: '0px',
        containerHeight: '0px',
        children: (
            <></>
        )    
    }, {
        filterName: 'Experience',
        slot: <FlashSVG />,
        containerWidth: '0px',
        containerHeight: '0px',
        children: (
            <></>
        )
    }
];

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

export default function FindTalent() {
  const [isOfferSend, setOfferSendOpen] = useState(false);

  return (
    <>
      <OutsideContainer>
        <Header>
          <SimpleHeader />
        </Header>
        <SearchBar>
        <TitleAndFilter 
          filterTitle="Talent for UX Designer"
          titleFontSize={xxlargeFontSize}
          titleFontWeight={mediumFontWeight}
          titleLineHeight={xxxlargeLineHeight}
          borderColor={gray300}
          inputHeight='44px'
          inputWidth='100%'
          inputTextColor={gray900}
          inputTextSize={mediumFontSize}
          inputTextWeight={mediumFontWeight}
          placeholder='Search by name'
          filters={filters}
        />

        </SearchBar>
        <Container>
        
        <SquadCard
          badgeTitles={["Good Match 80%", "From Suggested squad #1"]}
          badgeColor="green"
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
          buttonsPreset={ButtonContainerPresets.TALENT}
          type="book"
          data={mockSkillsData}
        />
        <SquadCard
          badgeTitles={["80% Good Match"]}
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
          buttonsPreset={ButtonContainerPresets.TALENT}
          type="book"
          data={mockSkillsData}
        />

      </Container>
      {isOfferSend && <SendOffer onClose={() => setOfferSendOpen(false)} sendOfferLink='/c5/proj_hub_offer_sent_a'/>}
      </OutsideContainer>
    </>
  );
}
