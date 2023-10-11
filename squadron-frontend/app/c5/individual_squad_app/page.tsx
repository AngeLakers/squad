'use client';
import * as React from 'react';
import { SimpleHeader } from "@/ui/simple-header";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import CustomProjectHeader from '@/ui/custom-project-header';
import SquadCard, { ButtonContainerPresets } from '@/ui/squad-card';
import { SquadSVG} from "@/ui/svgs";
import { PersonData } from "@/ui/squad-table";
import BookInterviewA from "@/ui/book-interview-a";
import BookInterviewB from "@/ui/book-interview-b";
import callImage from "@/public/call.png";

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
    color: #1B18E4;
    font-size: 16px;
    font-weight: 600;
`;


const C5IndividualSquadApp: React.FC = () => {
  const [bookInterviewAPopupOpen, setbookInterviewAPopupOpen] = useState(false);
  const [bookInterviewBPopupOpen, setbookInterviewBPopupOpen] = useState(false);
  const bookData: Array<PersonData> = [
    {
        avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
        name: "Patricia Montero",
        profileLink: "/profile/1",
        title: "Front-End Engineer",
        state: "viewing",
        onClick: () => setbookInterviewAPopupOpen(true),
      },
      {
        avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
        name: "Jane Doe",
        profileLink: "/profile/2",
        title: "Designer",
        state: "interviewing",
        onClick: () => setbookInterviewBPopupOpen(true),
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
      }
    ];

    return (
        <OutsideContainer>
            <Header><SimpleHeader /></Header>
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
    <BackButton onClick={() => {}}>
        &lt;  &nbsp;Back to squads
    </BackButton>
    <SquadCard
          badgeTitle="Good Match 80%"
          badgeColor="green"
          squadTitle="Suggested Squad #1"
          squadDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morLorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morLorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. mor"
          icon={<SquadSVG backgroundColor="#E5E7EB" />}
          type="book"
          buttonPreset={ButtonContainerPresets.EMPTY}
          data={bookData}
        />
        {bookInterviewAPopupOpen && (
        <BookInterviewA onClose={() => setbookInterviewAPopupOpen(false)} />
        )}
        {bookInterviewBPopupOpen && (
        <BookInterviewB
          icon={
            <Image
              key="callImage"
              src={callImage}
              alt="call image"
              width="44"
              height="44"
            />
          }
          name="Patricia"
          cancelButtonText="Cancel"
          confirmButtonText="Send interview request"
          onClose={() => setbookInterviewBPopupOpen(false)}
        />
      )}
    </Container>
    </OutsideContainer>
    );
};

export default C5IndividualSquadApp;
