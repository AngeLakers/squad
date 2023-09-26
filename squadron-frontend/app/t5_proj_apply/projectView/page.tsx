'use client'
import '@/styles/globals.css';
import styled from 'styled-components';
import type { Metadata } from 'next';
import { SideNav } from '@/ui/side-nav';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ProjectProfile from '@/ui/project-profile'

import RoleCard  from '@/ui/role-detail'


export const metadata: Metadata = {
  title: 'Squadron',
  description: 'Squadron frontend',
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Sidebar = styled.div`
  width: 20%;
  height: 100vh;
  padding: 40px 20px;
  overflow-y: auto;
  background-color: white;
  border-right: 1px solid #ccc;
`;

const MainContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-left: 10%;
  padding-right: 10%;
  height: fit-content;
`;

export default function Home() {
  return (
    <Container>
      <Sidebar>
        <SideNav />
      </Sidebar>
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
        keyDeliverables={['deliverable 1','deliverable 2','deliverable 3','deliverable 4','deliverable 5','deliverable 6','deliverable 7','deliverable 8','deliverable 9','deliverable 10','deliverable 11','deliverable 12','deliverable 13','deliverable 14','deliverable 15','deliverable 16','deliverable 17','deliverable 18',]}
        />
        <RoleCard 
        status={["lead role","Open Role","Accepting applications"]}
        roleLogoUrl='/icon/roleLogo.svg'
        positionName='Role position 1'
        description='bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala balav'
        startDate='20230913'
        location='New York'
        hourlyRateMax={50}
        hourlyRateMin={30}
        expectedHoursPerWeek={20}
        skills={["skill 1","skill 2"]}
        recommendedSkills={["skill 3","skill 4"]}
        tools={["tool 1","tool 2","tool 3"]}/>
      </MainContent>
    </Container>
  )

}
