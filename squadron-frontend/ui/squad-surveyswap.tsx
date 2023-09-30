import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import squadImage from '@/public/squad.png';
import Image from 'next/image';
// import { ReactNode } from 'react';

const Container = styled.div`
    border: 1px solid #E5E7EB;
    padding: 1%;
    width: 100%;
    border-radius:12px;
    min-width: 1200px;
`;

const TitleRow = styled.div`
    display: flex;
    justify-content: center;
    padding: 24px;
`;

const SquadTitle = styled.span`
    font-size: 20px;
    font-weight: 600;
`;

const SurveySwapTitle = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: #4D5761;
`;

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 24px;

    &:last-child {
    margin-right: 0;
    }
`;

const AvatarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(120px, auto);
   
`;

const RoleTitle = styled.div`
    margin-top: 20px;
    font-size: 16px;
`;

const NotAssigned = styled.div`
    font-size: 14px;
    color: #888;
    margin-top: 4px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 273px; 
`;

const AddButton = styled.button`
    cursor: pointer;
    padding: 10px 16px;
    border-radius: 8px;
    background-color: white;
    color: black;
    border: 1px solid #D2D6DB;
    font-size:14px;
`;

const ManageButton = styled.button`
    cursor: pointer;
    color: #D2D6DB;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5px;
`;
const TextAndButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`;

const AssignButton = styled.button`
    width: 60px;
    height: 22px;
    border-radius: 16px;
    padding: 2px 8px;
    cursor: pointer;
    background-color: white;
    font-size: 12px;
    margin:20px 0 40px 0;
    background-color: #F2F4F7;
`;

interface Role {
    title: string;
    image?: String;
    name?: string;
    buttonText?: string;
}

interface SquadSurveySwapProps {
    roles: Role[];
}

export default function SquadSurveySwap({ roles }: SquadSurveySwapProps){
    // const roles=[
    //     "UI Designer",
    //     "UI Designer",
    //     "Product Designer",
    //     "UX Researcher",
    //     "Front-End Engineer",
    //     "Full-Stack Engineer",
    //     "DevOps Engineer"
    //   ];

  return (
    <Container>
        <TitleRow>
            <LogoContainer>
            <Image key="squadImage" src={squadImage} alt="logo" width="56" height="56" />
            </LogoContainer>
            <TextAndButtonContainer>
            <div>
                <SquadTitle>My Squad</SquadTitle>
                <br />
                <SurveySwapTitle>SurveySwap</SurveySwapTitle>
            </div>
            <ButtonContainer>
                <AddButton>+ Add role</AddButton>
                <ManageButton>Manage squad</ManageButton>
            </ButtonContainer>
            </TextAndButtonContainer>
        </TitleRow>

      
        <AvatarGrid>
        {roles.map((role, i) => (
          <AvatarContainer key={i}>
            <Avatar src={typeof role.image === 'string' ? role.image : "/broken-image.jpg"} />
            <RoleTitle>{role.title || "No Title"}</RoleTitle>
            <NotAssigned>{role.name || "Not assigned yet"}</NotAssigned>
            <AssignButton>{role.buttonText || "Unfilled"}</AssignButton>
          </AvatarContainer>
        ))}
      </AvatarGrid>
    </Container>
  );
}