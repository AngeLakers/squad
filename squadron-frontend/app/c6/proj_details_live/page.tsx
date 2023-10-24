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
import TalentCard from "@/ui/talent-card";
import portraitAImage from "@/public/portraitA.png";
import SquadCard from "@/ui/squad-card";
import { PersonData } from "@/ui/squad-table";
import Invoices, { InvoiceData } from '@/ui/invoices'; 


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
    font-size: 16px;
    font-weight: 600;
    margin-right: 16px;
    border: none;
    padding-bottom: 12px;
    border-bottom: ${({ active }) => (active ? "2px solid #413999" : "2px solid transparent")};
    color: ${({ active }) => (active ? "#413999" : "#667085")};
    background-color: transparent;
    cursor: pointer;
`;

const invoiceData: InvoiceData[] = [
    {
      dateIssued: '31/11/2022',
      no: '#07',
      amountDue: '$4535',
      amountPaid: '$4535',
      status: 'paid',
      paidOn: '01/12/2022',
    },
    {
      dateIssued: '31/11/2022',
      no: '#06',
      amountDue: '$4535',
      amountPaid: '$4535',
      status: 'pending',
      paidOn: '01/12/2022',
    },
    {
        dateIssued: '31/11/2022',
        no: '#05',
        amountDue: '$4535',
        amountPaid: '$4535',
        status: 'past due',
        paidOn: '01/12/2022',
      },
      {
        dateIssued: '31/11/2022',
        no: '#04',
        amountDue: '$4535',
        amountPaid: '$4535',
        status: 'paid',
        paidOn: '01/12/2022',
      },
      {
        dateIssued: '31/11/2022',
        no: '#03',
        amountDue: '$4535',
        amountPaid: '$4535',
        status: 'paid',
        paidOn: '01/12/2022',
      },
      {
        dateIssued: '31/11/2022',
        no: '#02',
        amountDue: '$4535',
        amountPaid: '$4535',
        status: 'paid',
        paidOn: '01/12/2022',
      },
      {
        dateIssued: '31/11/2022',
        no: '#01',
        amountDue: '$4535',
        amountPaid: '$4535',
        status: 'paid',
        paidOn: '01/12/2022',
      },
  ];

const rolesData = [
    {
        image: (
          <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
        ),
        title: "UX Designer",
        name: "Patricia Montero",
        assignButtonProps: {
            smallButtonText: "Live",
            backgroundColor: "#039855",
            textColor: "#FFFFFF",
        },
        bottomButton: {
            label: "Message",
            backgroundColor: "#FFFFFF",
            textColor: "black",
            borderColor: "#E5E7EB",
        },
    },
    {
      image: (
        <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
      ),
      title: "UI Designer",
      name: "Patricia Montero",
      assignButtonProps: {
        smallButtonText: "Live",
        backgroundColor: "#039855",
        textColor: "#FFFFFF",
    },
    bottomButton: {
        label: "Message",
        backgroundColor: "#FFFFFF",
        textColor: "black",
        borderColor: "#E5E7EB",
    },
    },
    {
      image: (
        <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
      ),
      title: "Product Designer",
      name: "Patricia Montero",
      assignButtonProps: {
        smallButtonText: "Live",
        backgroundColor: "#039855",
        textColor: "#FFFFFF",
    },
      bottomButton: {
        label: "Message",
        backgroundColor: "#FFFFFF",
        textColor: "black",
        borderColor: "#E5E7EB",
    },
    },
    {
      image: (
        <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
      ),
      title: "Product Designer",
      name: "Patricia Montero",
      assignButtonProps: {
        smallButtonText: "Live",
        backgroundColor: "#039855",
        textColor: "#FFFFFF",
    },
      bottomButton: {
        label: "Message",
        backgroundColor: "#FFFFFF",
        textColor: "black",
        borderColor: "#E5E7EB",
    },
    },
    {
        image: (
          <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
        ),
        title: "Product Designer",
        name: "Patricia Montero",
        assignButtonProps: {
          smallButtonText: "Live",
          backgroundColor: "#039855",
          textColor: "#FFFFFF",
      },
        bottomButton: {
          label: "Message",
          backgroundColor: "#FFFFFF",
          textColor: "black",
          borderColor: "#E5E7EB",
      },
      },
      {
        image: (
          <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
        ),
        title: "Product Designer",
        name: "Patricia Montero",
        assignButtonProps: {
          smallButtonText: "Live",
          backgroundColor: "#039855",
          textColor: "#FFFFFF",
      },
        bottomButton: {
          label: "Message",
          backgroundColor: "#FFFFFF",
          textColor: "black",
          borderColor: "#E5E7EB",
      },
      },
      {
        image: (
          <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
        ),
        title: "Product Designer",
        name: "Patricia Montero",
        assignButtonProps: {
          smallButtonText: "Live",
          backgroundColor: "#039855",
          textColor: "#FFFFFF",
      },
        bottomButton: {
          label: "Message",
          backgroundColor: "#FFFFFF",
          textColor: "black",
          borderColor: "#E5E7EB",
      },
      },
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

const C6ProjectDetailsLive: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Project Details");
    const showProjectDetails = activeTab === "Project Details";
    const showSquad = activeTab === "Squad";
    const [selectedTab, setSelectedTab] = useState('My squad'); 
    const [editprojPopupOpen, setEditprojPopupOpen] = useState(false);
    const showTimeTracking = activeTab === "Time tracking"; 
    const showInvoices = activeTab === "Invoices";
    const showContracts = activeTab === "Contracts";
    const showTeamPulse = activeTab === "Team pulse";

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
            disabled={true} 
            active={showTimeTracking}
            onClick={() => {}} 
        >
            Time tracking
        </TabButton>
        <TabButton
            active={showInvoices}
            onClick={() => setActiveTab("Invoices")}
        >
            Invoices
        </TabButton>
        <TabButton
            active={showContracts}
            onClick={() => setActiveTab("Contracts")}
        >
            Contracts
        </TabButton>
        <TabButton
            active={showTeamPulse}
            onClick={() => setActiveTab("Team pulse")}
        >
            Team pulse
        </TabButton>
            
        </ButtonContainer>
        {showProjectDetails && (
            <>
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
        <TalentCard
        title={"UX Designer"}
        icon={
          <img src="https://avatars.githubusercontent.com/u/12592949?v=1" />
        }
        name={"Olivia Rhye"}
      />
      <TalentCard
        title={"UX Designer"}
        icon={
          <img src="https://avatars.githubusercontent.com/u/12592949?v=1" />
        }
        name={"Olivia Rhye"}
      />
      <TalentCard
        title={"UX Designer"}
        icon={
          <img src="https://avatars.githubusercontent.com/u/12592949?v=1" />
        }
        name={"Olivia Rhye"}
      />
      <TalentCard
        title={"UX Designer"}
        icon={
          <img src="https://avatars.githubusercontent.com/u/12592949?v=1" />
        }
        name={"Olivia Rhye"}
      />
      <TalentCard
        title={"UX Designer"}
        icon={
          <img src="https://avatars.githubusercontent.com/u/12592949?v=1" />
        }
        name={"Olivia Rhye"}
      />
      <TalentCard
        title={"UX Designer"}
        icon={
          <img src="https://avatars.githubusercontent.com/u/12592949?v=1" />
        }
        name={"Olivia Rhye"}
      />
    
            </>
        )}
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
                    <SquadSurveySwap roles={rolesData} manageButtonLabel='Admin Squad' manageButtonPreset='outlined' manageButtonTextColor='#384250' onClick2={() => {window.location.href = '/c5/manage_squad_live'}}/>
                )}
                {selectedTab === 'Offers rejected' && (
                     <SquadCard type="state" data={stateData} />
                )}
            </SquadContainer>
        </>
        )}
        {showInvoices && (
        <>
        <Invoices data={invoiceData} />
        </>
        )}

    </Container>
    </OutsideContainer>
    );
};

export default C6ProjectDetailsLive;