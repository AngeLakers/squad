'use client';
import * as React from 'react';
import { useState } from 'react';
import { SimpleHeader } from "@/ui/simple-header";
import Image from "next/image";
import styled from "styled-components";
import CustomButton, { PresetTypes }  from "@/ui/custom-button";
import CollectingBar from '@/ui/collecting-bar';
import SquadSurveySwap from '@/ui/squad-surveyswap';
import InfoBar from '@/ui/info-bar';
import { AlertSVG} from "@/ui/svgs";
import CustomProjectHeader from '@/ui/custom-project-header';
import portraitAImage from "@/public/portraitA.png";
import SendOffer from "@/ui/send-offer-popup";
import SquadCard from "@/ui/squad-card";
import { PersonData } from "@/ui/squad-table";

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

const NavBarButton = styled.button<{ selected?: boolean }>`
    background-color: ${({ selected }) => selected ? '#FAFAFE' : 'transparent'};
    color: ${({ selected }) => selected ? '#1B18E4' : '#6C737F'};
    padding: 8px 12px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    margin-right: 8px;
    font-size: 14px;
    font-weight: 600;
`;

const NavigationBarContainer = styled.div`
    margin-top: 30px;
`;


const C5ProjHubFindTalent: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Squad");
    const showProjectDetails = activeTab === "Project Details";
    const showSquad = activeTab === "Squad";
    const [selectedTab, setSelectedTab] = useState('My squad'); 
    const [isOfferSend, setOfferSendOpen] = useState(false);

    const rolesData = [
        {
        title: "Front-End Engineer",
        bottomButton: {
            label: "Find Talent",
            onClick:() => (window.location.href = "/c5/find_talent"),
        },  
        },
        {
            title: "Front-End Engineer",
            bottomButton: {
                label: "Find Talent",
                onClick:() => (window.location.href = "/c5/find_talent"),
            },  
        },
        {
            title: "Front-End Engineer",
            bottomButton: {
                label: "Find Talent",
                onClick:() => (window.location.href = "/c5/find_talent"),
            },  
        },
        {
            title: "Front-End Engineer",
            bottomButton: {
                label: "Find Talent",
                onClick:() => (window.location.href = "/c5/find_talent"),
            },  
        }
    ];

    const stateData: Array<PersonData> = [
        {
          avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
          name: "Patricia Montero",
          profileLink: "/profile/1",
          title: "Front-End Engineer",
          state: "Rejected",
        },
        {
          avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
          name: "Jane Doe",
          profileLink: "/profile/2",
          title: "Designer",
          state: "Rejected",
        },
      ];

    return (
        <OutsideContainer>
            <Header><SimpleHeader /></Header>
    
            <CustomProjectHeader
                backgroundColor="black"
                avatarImagePath="/icon/projectLogo.svg"
                avatarHeight={"89px"}
                avatarWidth={"89px"}
                title1="Stir"
                title2="MVP for Serverless E-commerce Return Portal"
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
            <NavigationBarContainer>
                <NavBarButton 
                    selected={selectedTab === 'My squad'}
                    onClick={() => setSelectedTab('My squad')}
                > My squad </NavBarButton>
                <NavBarButton 
                    selected={selectedTab === 'Offers rejected'}
                    onClick={() => setSelectedTab('Offers rejected')}
                > Offers rejected </NavBarButton>
            </NavigationBarContainer>
            <SquadContainer>
                {selectedTab === 'My squad' && (
                    <SquadSurveySwap roles={rolesData} manageButtonLabel='Admin Squad' manageButtonPreset='outlined' manageButtonTextColor='#384250' showButtonContainer={false}/>
                )}
                {selectedTab === 'Offers rejected' && (
                     <SquadCard type="state" data={stateData} />
                )}
            </SquadContainer>
        </>
        )}
        {isOfferSend && <SendOffer onClose={() => setOfferSendOpen(false)} />}

        </Container>
    </OutsideContainer>
    );
};

export default C5ProjHubFindTalent;