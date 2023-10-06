"use client";
import * as React from "react";
import SquadCard from "@/ui/squad-card";
import { SimpleHeader } from "@/ui/simple-header";
import styled from "styled-components";
import BuildApplySquad from "@/ui/build-apply-squad";
import CustomProjectHeader from "@/ui/custom-project-header";
import { PersonData } from "@/ui/squad-table";

const viewData: Array<PersonData> = [
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
  },
];

const Container = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  margin-bottom: 100px;
`;

const OutsideContainer = styled.div`
    margin-bottom: 100px;
`;

const Header = styled.div`
    margin-left: 8vw;
    margin-right: 8vw;
`;


const Text = styled.p`
  margin: 32px 0;
  font-size: 24px;
`;

const SuggestedSquads = styled.div`
  margin-bottom: 48px;
`;

const SquadCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: #111927;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #4d5761;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 48px;
`;

export default function AllComponents() {
  return (
    <>
    <OutsideContainer>
            <Header><SimpleHeader /></Header>
            <CustomProjectHeader
          backgroundColor="black"
          avatarImagePath="/icon/projectLogo.svg"
          avatarHeight={"89px"}
          avatarWidth={"89px"}
          title1="Stir"
          title2="MVP for Serverless E-commerce Return Portal"
          button={{
            isVisible: false,
          }}
          shareIcon={{
            isVisible: false,
          }}
          starIcon={{
            isVisible: false,
          }}
        />
      <Container>
        <SuggestedSquads>
          <Title>Suggested Squads</Title>
          <Description>
            Squads that Squadron has tailored for you based on your preferences.
          </Description>
          <SquadCardDiv>
            <SquadCard
              badgeTitle="Good Match 80%"
              badgeColor="green"
              squadTitle="Suggested Squad #1"
              type="view"
              data={viewData}
            />
            <SquadCard
              badgeTitle="Good Match 80%"
              badgeColor="green"
              squadTitle="Suggested Squad #1"
              type="view"
              data={viewData}
            />
          </SquadCardDiv>
        </SuggestedSquads>

        <SuggestedSquads>
          <Title>Pre-Formed Squads</Title>
          <Description>
            Squads that have worked together previously.
          </Description>
          <SquadCardDiv>
            <SquadCard
              badgeTitle="Good Match 80%"
              badgeColor="green"
              squadTitle="Suggested Squad #1"
              type="view"
              data={viewData}
            />{" "}
            <SquadCard
              badgeTitle="Good Match 80%"
              badgeColor="green"
              squadTitle="Suggested Squad #1"
              type="view"
              data={viewData}
            />
          </SquadCardDiv>
        </SuggestedSquads>
        <BuildApplySquad />
      </Container>
      </OutsideContainer>
    </>
    
  );
}
