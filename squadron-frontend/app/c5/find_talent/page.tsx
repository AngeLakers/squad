"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import SquadCard, { ButtonContainerPresets } from '@/ui/squad-card';
import { SimpleHeader } from "@/ui/simple-header";
import styled from "styled-components";
import { TopNav } from '@/ui/top-nav';
import {PeopleSVG, ToolsSVG} from '@/ui/svgs';
import RoleSkillDropdownFilter from '@/ui/filter-dropdown-role-and-skills';
import { AlertSVG, SquadSVG, StarSVG } from "@/ui/svgs";
import TitleAndFilter from '@/ui/title-and-filter';
import { BadgeData } from "@/ui/talent-skills";
import { gray900, xlargeFontSize, mediumFontWeight, xxlargeLineHeight, gray300, mediumFontSize, xxlargeFontSize, xxxlargeLineHeight } from '@/styles/reuseParams';

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
const categories = ['Tech', 'Design', 'Marketing'];
    const items = {
        'Tech': ['JavaScript', 'Python', 'React', 'Node.js'],
        'Design': ['Photoshop', 'Illustrator', 'Sketch', 'Figma'],
        'Marketing': ['SEO', 'SEM', 'PPC', 'Content Marketing']
    };

    const SkillsCategories = ['JavaScript', 'Python', 'React', 'Node.js', 'Photoshop', 'Illustrator', 'Sketch', 'Figma', 'SEO', 'SEM', 'PPC', 'Content Marketing'];
    const SkillsIems = {
        'JavaScript': ['JavaScript'],
        'Python': ['Python'],
        'React': ['React'],
        'Node.js': ['Node.js'],
        'Photoshop': ['Photoshop'],
        'Illustrator': ['Illustrator'],
        'Sketch': ['Sketch'],
        'Figma': ['Figma'],
        'SEO': ['SEO'],
        'SEM': ['SEM'],
        'PPC': ['PPC'],
        'Content Marketing': ['Content Marketing']
    }
    const handleItemSelect = (item: string) => {
        console.log(`Selected item: ${item}`);
    };

const filters = [
    {
        filterName: 'Role',
        slot: <PeopleSVG />,
        containerWidth: '496px',
        containerHeight: 'fit-content',
        children: (
            <RoleSkillDropdownFilter
                categories={categories}
                items={items}
                onItemSelect={handleItemSelect}
                inputHeight='44px'
                inputWidth='100%'
                inputTextSize={mediumFontSize}
                inputTextWeight={mediumFontWeight}
            />
        )
    },
    // 
    {
        filterName: 'Skills',
        slot: <ToolsSVG />,
        containerWidth: '496px',
        containerHeight: 'fit-content',
        children: (
            <RoleSkillDropdownFilter
                categories={SkillsCategories}
                items={SkillsIems}
                onItemSelect={handleItemSelect}
                inputHeight='44px'
                inputWidth='100%'
                inputTextSize={mediumFontSize}
                inputTextWeight={mediumFontWeight}
            />
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
        icon={
          <img src="https://avatars.githubusercontent.com/u/12592949?v=1" />
        }
        buttonsPreset={ButtonContainerPresets.TALENT}
        type="book"
        data={mockSkillsData}
      />

      </Container>
      </OutsideContainer>
    </>
  );
}