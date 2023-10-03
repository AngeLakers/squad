'use client'
import '@/styles/globals.css';
import { useState } from 'react';
import styled from 'styled-components';
import type { Metadata } from 'next';
import { SideNav } from '@/ui/side-nav';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ProjectProfile from '@/ui/project-profile'
import RoleCard from '@/ui/role-detail'
import CompleteProfilePopup from '@/ui/complete-profile-popup';



export const metadata: Metadata = {
  title: 'Squadron',
  description: 'Squadron frontend',
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  padding: 0 32px 0 32px;
  height: fit-content;
`;

export default function Home() {

  // for scenario 2, incomplete profile
  const [isCompleteProfilePopupOpen, setCompleteProfilePopupOpen] = useState(false);
  const openCompleteProfilePopup = () => {
    setCompleteProfilePopupOpen(true);
  }

  // for scenario 3,missing requirements
  const [isCompleteRequirementsPopupOpen, setCompleteRequirementsPopupOpen] = useState(false);
  const openCompleteRequirementsPopup = () => {
    setCompleteRequirementsPopupOpen(true);
  }

  return (
    <>
      <Container>
        {/* <Sidebar> */}
          <SideNav />
        {/* </Sidebar> */}
        <MainContent>
          <Button href="/application" className="justify-start">
            <ArrowBackIosIcon />Back to projects
          </Button>
          <ProjectProfile
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
            projectOutline='This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline '
            keyDeliverables={['deliverable 1', 'deliverable 2', 'deliverable 3', 'deliverable 4', 'deliverable 5', 'deliverable 6']}
          />

          <RoleCard
            status={["lead role", "Open Role", "Accepting applications"]}
            roleLogoUrl='/icon/roleLogo.svg'
            positionName='Scenario 1 - test role - no issues'
            description='This role is a prototype to show the apply as individual scenario 1: no issues'
            hourlyRateMin={30}
            expectedHoursPerWeek={20}
            skills={["skill 1", "skill 2"]}
            recommendedSkills={["skill 3", "skill 4"]}
            tools={["tool 1", "tool 2", "tool 3"]}
            onClick={() => { console.log('') }}
          />

          <RoleCard
            status={["lead role", "Open Role", "Accepting applications"]}
            roleLogoUrl='/icon/roleLogo.svg'
            positionName='Scenario 2 - test role - incomplete profile'
            description='This role is a prototype to show the apply as individual scenario 2: incomplete profile'
            startDate='20230913'
            location='New York'
            hourlyRateMax={50}
            hourlyRateMin={30}
            expectedHoursPerWeek={20}
            skills={["skill 1", "skill 2"]}
            recommendedSkills={["skill 3", "skill 4"]}
            tools={["tool 1", "tool 2", "tool 3"]}
            onClick={openCompleteProfilePopup}
          />

          <RoleCard
            status={["lead role", "Open Role", "Accepting applications"]}
            roleLogoUrl='/icon/roleLogo.svg'
            positionName='Scenario 3 - test role - mismatch'
            description='This role is a prototype to show the apply as individual scenario 3: mismatch'
            startDate='20230913'
            location='New York'
            hourlyRateMax={50}
            hourlyRateMin={30}
            expectedHoursPerWeek={20}
            skills={["skill 1", "skill 2"]}
            recommendedSkills={["skill 3", "skill 4"]}
            tools={["tool 1", "tool 2", "tool 3"]} 
            onClick={openCompleteRequirementsPopup}
            />
        </MainContent>
      </Container>

      {isCompleteProfilePopupOpen && (<CompleteProfilePopup onClose={() => setCompleteProfilePopupOpen(false)}/> )}
      {/* added requirements popup */}
    </>
  )
}
