'use client';
import * as React from 'react';
import { useState } from 'react';
import { SimpleHeader } from "@/ui/simple-header";
import Image from "next/image";
import styled from "styled-components";
import SquadSurveySwap from '@/ui/squad-surveyswap';
import CustomProjectHeader from '@/ui/custom-project-header';
import portraitAImage from "@/public/portraitA.png";
import SendOffer from "@/ui/send-offer-popup";

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


const C5ProjHubSendOffer: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Squad");
    const showProjectDetails = activeTab === "Project Details";
    const showSquad = activeTab === "Squad";
    const [selectedTab, setSelectedTab] = useState('My squad'); 
    const [isOfferSend, setOfferSendOpen] = useState(false);

    const rolesData = [
        {
            image: (
              <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
            ),
            title: "UX Designer",
            name: "Patricia Montero",
            assignButtonProps: {
              smallButtonText: "Send Offer",
            },
            bottomButton: {
              label: "Send Offer",
              onClick: () => setOfferSendOpen(true),
            },
        },
        {
          image: (
            <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
          ),
          title: "UI Designer",
          name: "Patricia Montero",
          assignButtonProps: {
            smallButtonText: "Send Offer",
          },
          bottomButton: {
            label: "Send Offer",
            onClick: () => setOfferSendOpen(true),
          },
        },
        {
          image: (
            <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
          ),
          title: "Product Designer",
          name: "Patricia Montero",
          assignButtonProps: {
            smallButtonText: "Send Offer",
          },
          bottomButton: {
            label: "Send Offer",
            onClick: () => setOfferSendOpen(true),
          },
        },
        {
          image: (
            <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
          ),
          title: "Product Designer",
          name: "Patricia Montero",
          assignButtonProps: {
            smallButtonText: "Send Offer",
          },
          bottomButton: {
            label: "Send Offer",
            onClick: () => setOfferSendOpen(true),
          },
        },
        {
          image: (
            <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
          ),
          title: "Product Designer",
          name: "Patricia Montero",
          assignButtonProps: {
            smallButtonText: "Send Offer",
          },
          bottomButton: {
            label: "Send Offer",
            onClick: () => setOfferSendOpen(true),
          },
        },
        {
          image: (
            <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
          ),
          title: "Full-Stack Engineer",
          name: "Patricia Montero",
          assignButtonProps: {
            smallButtonText: "Send Offer",
          },
          bottomButton: {
            label: "Send Offer",
            onClick: () => setOfferSendOpen(true),
          },
        },
        {
          image: (
            <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
          ),
          title: "DevOps Engineer",
          name: "Patricia Montero",
          assignButtonProps: {
            smallButtonText: "Send Offer",
          },
          bottomButton: {
            label: "Send Offer",
            onClick: () => setOfferSendOpen(true),
          },
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
                <SquadSurveySwap roles={rolesData} manageButtonLabel='Admin Squad' manageButtonPreset='outlined' manageButtonTextColor='#384250'onClick={() => {window.location.href = '/c5/manage_squad_send_offer'}}/>
            </SquadContainer>
        </>
        )}
        {isOfferSend && <SendOffer onClose={() => setOfferSendOpen(false)} sendOfferLink='/c5/proj_hub_offer_sent_a'/>}

        </Container>
    </OutsideContainer>
    );
};

export default C5ProjHubSendOffer;