"use client";
import * as React from "react";
import { SimpleHeader } from "@/ui/simple-header";
import styled from "styled-components";
import CustomProjectHeader from "@/ui/custom-project-header";
import SquadCard, { ButtonContainerPresets } from "@/ui/squad-card";
import { SquadSVG } from "@/ui/svgs";
import { PersonData } from "@/ui/squad-table";

const bookData: Array<PersonData> = [
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/1",
    title: "Front-End Engineer",
    state: "viewing",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Jane Doe",
    profileLink: "/profile/2",
    title: "Designer",
    state: "interviewing",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Jane Doe",
    profileLink: "/profile/2",
    title: "Designer",
    state: "viewing",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Jane Doe",
    profileLink: "/profile/2",
    title: "Designer",
    state: "viewing",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Jane Doe",
    profileLink: "/profile/2",
    title: "Designer",
    state: "viewing",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Jane Doe",
    profileLink: "/profile/2",
    title: "Designer",
    state: "viewing",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Jane Doe",
    profileLink: "/profile/2",
    title: "Designer",
    state: "viewing",
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

const BackButton = styled.button`
  height: 24px;
  margin-top: 40px;
  margin-bottom: 40px;
  border: none;
  background-color: transparent;
  color: #1b18e4;
  font-size: 16px;
  font-weight: 600;
`;

const C5IndividualSquadApp: React.FC = () => {
  return (
    <OutsideContainer>
      <Header>
        <SimpleHeader />
      </Header>

      <CustomProjectHeader
        backgroundColor="#0B0F00"
        avatarImagePath="/google.png"
        avatarHeight={"89px"}
        avatarWidth={"89px"}
        title1="Google"
        title2="SurveySwap"
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
        <BackButton onClick={() => {}}>&lt; &nbsp;Back to squads</BackButton>
        <SquadCard
          badgeTitles={["Good Match 80%"]}
          badgeColor="green"
          squadTitle="Suggested Squad #1"
          squadDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morLorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morLorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. mor"
          icon={<SquadSVG backgroundColor="#E5E7EB" />}
          type="book"
          buttonPreset={ButtonContainerPresets.EMPTY}
          data={bookData}
        />
      </Container>
    </OutsideContainer>
  );
};

export default C5IndividualSquadApp;
