'use client';
import * as React from 'react';
import { SimpleHeader } from "@/ui/simple-header";
import ProjectProfile from "@/ui/project-profile";
import RoleCard from "@/ui/role-detail";
import styled from "styled-components";
import CustomButton from "@/ui/custom-button";
import Footer from '@/ui/footer';

const Container = styled.div`

  margin-bottom: 100px;
`;

const InnerContainer = styled.div`
  margin-left: 8vw;
  margin-right: 8vw;

`;

const Text = styled.p`
  margin: 32px 0; 
  font-size: 24px;
`;

// const LeftButton = styled.button`

//   color: black;
// `;

// const RightButtonGroup = styled.div`
//   display: flex;
//   margin-right: 14vw;
//   gap: 80px;
//   color: black;
// `;

// const EditButton = styled.button`
// border: 1px solid #D2D6DB;
// border-radius: 8px;
// padding: 10px 18px;
// `;

// const SaveButton = styled.button`
// color: #1B18E4
// `;

const Preview: React.FC = () => {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <Container>
      <InnerContainer>
      <SimpleHeader />
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
          projectOutline='This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline '
          keyDeliverables={['deliverable 1', 'deliverable 2', 'deliverable 3', 'deliverable 4', 'deliverable 5']}
        />
      <Text>Apply for a Role</Text>
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
    </InnerContainer>
    <Footer onRMiddleClick={handleBackClick} rightLink='/c4/proj_live'/>
    </Container>
    
  );
};

export default Preview;
