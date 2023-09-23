import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';

const Container = styled.div`
    border: 1px solid #ccc;
    padding: 1%;
    width: 80%;
`;

const TitleRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin:1% 1%;
`;

const SquadTitle = styled.span`
    font-size: 0.9em;
`;

const SurveySwapTitle = styled.span`
    font-size: 0.8em;
`;

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2% 3%;

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
    margin-top: 5%;
    font-size: 0.9em;
`;

const NotAssigned = styled.div`
    font-size: 0.7em;
    color: #888;
    margin-top: 3%;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 23%; 
`;

const AddButton = styled.button`
    cursor: pointer;
    padding: 1% 5%;
    border-radius: 5px;
    background-color: white;
    color: grey;
    border: 1px solid grey;
`;

const ManageButton = styled.button`
    cursor: pointer;
    color: grey;
`;

export default function SquadSurveySwap() {
    const roles: string[] = [
        "UI Designer",
        "UI Designer",
        "Product Designer",
        "UX Researcher",
        "Front-End Engineer",
        "Full-Stack Engineer",
        "DevOps Engineer"
      ];

  return (
    <Container>
        <TitleRow>
            <div>
                <SquadTitle>My Squad</SquadTitle>
                <br />
                <SurveySwapTitle>SurveySwap</SurveySwapTitle>
            </div>
            <ButtonContainer>
                <AddButton>+ Add role</AddButton>
                <ManageButton>Manage squad</ManageButton>
            </ButtonContainer>
        </TitleRow>

      
        <AvatarGrid>
        {roles.map((role, i) => (
          <AvatarContainer key={i}>
            <Avatar src="/broken-image.jpg"/>
            <RoleTitle>{role}</RoleTitle>
            <NotAssigned>Not assigned yet</NotAssigned>
          </AvatarContainer>
        ))}
      </AvatarGrid>
    </Container>
  );
}

function chunk(arr: string[], len: number): string[][] {
    const chunks: string[][] = [];
    let i = 0;
    const n = arr.length;
  
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
  
    return chunks;
  }