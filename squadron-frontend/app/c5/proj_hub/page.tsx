'use client';
import * as React from 'react';
import { useState } from 'react';
import { SimpleHeader } from "@/ui/simple-header";
import styled from "styled-components";
import CustomButton from "@/ui/custom-button";
import CollectingBar from '@/ui/collecting-bar';
import SquadSurveySwap from '@/ui/squad-surveyswap';
import InfoBar from '@/ui/info-bar';
import { AlertSVG} from "@/ui/svgs";
import CustomProjectHeader from '@/ui/custom-project-header';

const Container = styled.div`
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 100px;
    min-width: 1200px;
`;

const SquadContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top:48px;
`;

const OutsideContainer = styled.div`
    margin-bottom: 100px;
`;

const Header = styled.div`
    margin-left: 8vw;
    margin-right: 8vw;
`;

const ButtonContainer = styled.div`
    display: flex;
    margin-bottom: 40px;
    padding-top: 32px;
`;

const TabButton = styled.button<{ active?: boolean }>`
    font-size: 16px;
    font-weight: 600;
    margin-right: 16px;
    border: none;
    padding-bottom: 12px;
    border-bottom: ${({ active }) => (active ? "2px solid #6941C6" : "none")};
    color: ${({ active }) => (active ? "#6941C6" : "#667085")};
    background-color: transparent;
    cursor: pointer;
`;

const InactiveTabButton = styled(TabButton)`
    color: #6C737F;
    opacity: 20%;
`;

const rolesData = [
    {
      title: "UI Designer"
    },
    {
      title: "UI Designer"
    },
    {
      title: "Product Designer"
    },
    {
      title: "UX Researcher"
    },
    {
      title: "Front-End Engineer"
    },
    {
      title: "Full-Stack Engineer"
    },
    {
      title: "DevOps Engineer"
    }
];

const C5ProjectHub: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Squad");
    const showProjectDetails = activeTab === "Project Details";
    const showSquad = activeTab === "Squad";

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
        <ButtonContainer>
        <TabButton
            active={showProjectDetails}
            onClick={() => setActiveTab("Project Details")}
        >
            Project Details
        </TabButton>
        <TabButton
            active={showSquad}
            onClick={() => setActiveTab("Squad")}
        >
            Squad
        </TabButton>
        <InactiveTabButton>
        Time tracking
        </InactiveTabButton>
        <InactiveTabButton>
            Invoices
        </InactiveTabButton>
        <InactiveTabButton>
            Contracts
        </InactiveTabButton>
        <InactiveTabButton>
            Team pulse
        </InactiveTabButton>
        </ButtonContainer>

        {showSquad && (
        <>
            <InfoBar
            title="We’ve colleted the best applicants for you"
            description="Review all squads and applicants and start hiring. "
            buttonLabel="Review applicants"
            backgroundColor="#ECFDF3"
            borderColor="#6CE9A6"
            icon={<AlertSVG />}
            link={"/c5/application"}
            />
            <SquadContainer>
                <SquadSurveySwap roles={rolesData}/>
            </SquadContainer>
        </>
        )}

    </Container>
    </OutsideContainer>
    );
};

export default C5ProjectHub;
