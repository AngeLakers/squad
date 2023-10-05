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

const Container = styled.div`
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 100px;
`;

const SquadContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top:48px;
`;

const Text = styled.p`
    margin: 32px 0; 
    font-size: 24px;
`;

const ButtonContainer = styled.div`
    display: flex;
    margin-bottom: 40px;
`;

const TabButton = styled.button<{ active: boolean }>`
    margin-right: 20px;
    border: none;
    border-bottom: ${({ active }) => (active ? "2px solid #1B18E4" : "none")};
    color: ${({ active }) => (active ? "#1B18E4" : "#6C737F")};
    background-color: transparent;
    cursor: pointer;
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
    <Container>
        <SimpleHeader />
        <Text>Waiting for black header</Text>
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
        <TabButton
            active={activeTab === "Settings"}
            onClick={() => setActiveTab("Settings")}
        >
            Settings
        </TabButton>
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
    );
};

export default C5ProjectHub;