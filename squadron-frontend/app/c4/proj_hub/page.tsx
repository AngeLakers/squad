'use client';
import * as React from 'react';
import { useState } from 'react';
import { SimpleHeader } from "@/ui/simple-header";
import ProjectProfile from "@/ui/project-profile";
import RoleCard from "@/ui/role-detail";
import styled from "styled-components";
import CustomButton from "@/ui/custom-button";
import CollectingBar from '@/ui/collecting-bar';
import SquadSurveySwap from '@/ui/squad-surveyswap';
import EditProjPopup from '@/ui/editproj-popup';
import editProjImage from '@/public/edit-proj.png';
import Image from 'next/image';
import CustomProjectHeader from '@/ui/custom-project-header';

const Container = styled.div`
    margin-left: 8vw;
    margin-right: 8vw;
    margin-bottom: 100px;
`;

const OutsideContainer = styled.div`
    margin-bottom: 100px;
`;

const Header = styled.div`
    margin-left: 8vw;
    margin-right: 8vw;
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
    padding-top: 32px;
    display: flex;
    margin-bottom: 40px;
`;

const NewButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 24px;
    & > button:not(:last-child) {
        margin-right: 24px;
    }
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

const ProjectHub: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Project Details");
    const showProjectDetails = activeTab === "Project Details";
    const showSquad = activeTab === "Squad";
    const [editprojPopupOpen, setEditprojPopupOpen] = useState(false);
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
          title3="Posted: 3 September, 2022"
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
        <TabButton
            active={activeTab === "Settings"}
            onClick={() => setActiveTab("Settings")}
        >
            Settings
        </TabButton>
        </ButtonContainer>
        {showProjectDetails && (
            <>
            <NewButtonContainer>
            <CustomButton label="Share" preset="default" backgroundColor='white' textColor='black' borderColor="#D2D6DB"/>
            <CustomButton label="Edit Project" preset="default" onClick={() => setEditprojPopupOpen(true)}/>
            {editprojPopupOpen && (
                <EditProjPopup
                    onClose={() => setEditprojPopupOpen(false)}
                    title="Edit Project"
                    description="We have already started collecting applicants…"
                    cancelButtonText="Cancel"
                    confirmButtonText="Confirm"
                    icon={<Image key="editProjImage" src={editProjImage} alt="Edit Project Icon" width="57" height="57" />}
                    button2Link={"/c4/proj_detail_custom"}
                />
            )}
        </NewButtonContainer>
        
        <ProjectProfile
            showHeader={false}
            projectLogoLink='/icon/projectLogo.svg'
            projectName='THIS IS PROJECT NAME'
            projectPostDate='1 Jan, 2023'
            companyLogo='/icon/projectLogo.svg'
            companyName='This is Company Name'
            companyWebLink='www.testcompanylink.com'
            companyDescription='This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description '
            companyIndustry='This is company industry: IT'
            companyLocation='New York'
            companyProfileLink='www.testcompanylink.com'
            timelineEstimate='January 1 2023'
            projectStartDate='1 Feb, 2023'
            projectLeaderAvatarLink='/icon/projectLogo.svg'
            projectLeaderName='Leader Name'
            projectLeaderRole='Manager'
            projectOutline='This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline '
            keyDeliverables={['deliverable 1', 'deliverable 2', 'deliverable 3', 'deliverable 4', 'deliverable 5']}
        />
        <Text>Roles</Text>
        <RoleCard
            status={["lead role", "Open Role", "Accepting applications"]}
            roleLogoUrl='/icon/projectLogo.svg'
            positionName='Product Manager'
            description='bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala balav'
            startDate='20230913'
            location='New York'
            hourlyRateMax={50}
            hourlyRateMin={30}
            expectedHoursPerWeek={20}
            skills={["skill 1", "skill 2"]}
            tools={["tool 1", "tool 2", "tool 3"]} />
    <RoleCard
            status={["lead role", "Open Role", "Accepting applications"]}
            roleLogoUrl='/icon/projectLogo.svg'
            positionName='Front-End Developer'
            description='bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala balav'
            startDate='20230913'
            location='New York'
            hourlyRateMax={50}
            hourlyRateMin={30}
            expectedHoursPerWeek={20}
            skills={["skill 1", "skill 2"]}
            tools={["tool 1", "tool 2", "tool 3"]} />
            </>
        )}
        {showSquad && (
        <>
            <CollectingBar/>
            <SquadContainer>
                <SquadSurveySwap roles={rolesData}/>
            </SquadContainer>
        </>
        )}

    </Container>
    </OutsideContainer>
    );
};

export default ProjectHub;