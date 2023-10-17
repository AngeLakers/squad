'use client';
import * as React from 'react';
import { useState } from 'react';
import { SimpleHeader } from "@/ui/simple-header";
import Image from "next/image";
import styled from "styled-components";
import CustomButton, { PresetTypes }  from "@/ui/custom-button";
import InfoBar from '@/ui/info-bar';
import { AlertSVG, CheckSVG} from "@/ui/svgs";
import CustomProjectHeader from '@/ui/custom-project-header';
import SendOffer from "@/ui/send-offer-popup";
import LaunchMissionPopup from "@/ui/launch-mission";
import launchMissionImage from "@/public/launch-mission.png";
import ProjectProfile from "@/ui/project-profile";
import EditProjPopup from '@/ui/editproj-popup';
import editProjImage from '@/public/edit-proj.png';

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
    padding-top:18px;
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

const NewButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 24px;
    margin-top: 40px;
    & > button:not(:last-child) {
        margin-right: 24px;
    }
`;

const C6ProjDetails: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Squad");
    const showProjectDetails = activeTab === "Project Details";
    const showSquad = activeTab === "Squad";
    const [isOfferSend, setOfferSendOpen] = useState(false);
    const [launchMissionPopupOpen, setlaunchMissionPopupOpen] = useState(false);
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
                title="Your Squad is Ready"
                description="Kick off your mission."
                buttonLabel="Start Project"
                backgroundColor="#EDFBB8"
                borderColor="#9DA4AE"
                icon={<CheckSVG />}
                onClick={() => setlaunchMissionPopupOpen(true)}
            />
            <NewButtonContainer>
            {/* <CustomButton label="Share" preset="default" backgroundColor='white' textColor='black' borderColor="#D2D6DB"/> */}
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
            <SquadContainer>
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
            </SquadContainer>
        </>
        )}
        {isOfferSend && <SendOffer onClose={() => setOfferSendOpen(false)} />}
        {launchMissionPopupOpen && (
        <LaunchMissionPopup
          onClose={() => setlaunchMissionPopupOpen(false)}
          title="Project started"
          description="We recommend to start booking a call with each one of your team to blablablablaal"
          confirmButtonText="Let's go!"
          onClick={() => window.location.href='/c4/proj_hub'}
          icon={
            <Image
              key="launchMissionImage"
              src={launchMissionImage}
              alt="Launch Mission Icon"
              width="80"
              height="80"
            />
          }
        />
      )}

        </Container>
    </OutsideContainer>
    );
};

export default C6ProjDetails;