'use client';
import * as React from 'react';
import { ReactNode } from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import styled from "styled-components";
import Image from 'next/image';
import SquadCustom from "@/ui/option-popup";
import VideoUpload from '@/ui/video-upload';
import InviteAdmin from '@/ui/invite-admin';
import AddRole from '@/ui/add-role';
import EditProjPopup from '@/ui/editproj-popup';
import ExitUncompletedPopup from '@/ui/exit-uncompleted-popup';
import CostEstimator from '@/ui/cost-estimator';
import CollectingBar from '@/ui/collecting-bar';
import SquadSurveySwap from '@/ui/squad-surveyswap';
import BookInterviewA from '@/ui/book-interview-a';
import customizeImage from '../../public/customize.png';
import worldWideWebImage from '../../public/world-wide-web.png';
import mobilePhoneImage from '../../public/mobile-phone.png';
import marketingImage from '../../public/marketing.png';
import growthImage from '../../public/growth.png';
import dataImage from '../../public/data.png';
import editProjImage from '../../public/edit-proj.png';
import ProjectProfile from '@/ui/project-profile';
import RoleCard from '@/ui/role-detail';

const StyledH1 = styled.h1`
  font-size: 2em; 
  font-weight: bold;
  margin:1%;
`;

interface ComponentWrapperProps {
  filename: string;
  createdBy: string;
  description: string;
  children: ReactNode;
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({
  filename,
  createdBy,
  description,
  children,
}) => {
  return (
    <div style={{ border: '1px solid black', padding: '1%' }}>
      {children}
      <div style={{ marginTop: '1%' }}>
        <div>File: {filename}</div>
        <div>Created by: {createdBy}</div>
        <div>Description: {description}</div>
      </div>
    </div>
  );
};

export default function AllComponents() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [videoUploadOpen, setVideoUploadOpen] = useState<boolean>(false);
  const [isAdminInvite, setAdminInviteOpen] = useState(false);
  const [isRoleAdd, setAddRoleOpen] = useState(false);
  const [editprojPopupOpen, setEditprojPopupOpen] = useState(false);
  const [exitUncompletedPopupOpen, setexitUncompletedPopupOpen] = useState(false);
  const [bookInterviewAPopupOpen, setbookInterviewAPopupOpen] = useState(false);
  const icons = [
    <Image src={customizeImage} alt="Custom Icon" width="32" height="32" />,
    <Image src={worldWideWebImage} alt="Web Platform Icon" width="32" height="32" />,
    <Image src={mobilePhoneImage} alt="Mobile Phone Icon" width="32" height="32" />,
    <Image src={marketingImage} alt="Marketing Website Icon" width="32" height="32" />,
    <Image src={growthImage} alt="Growth Icon" width="32" height="32" />,
    <Image src={dataImage} alt="Data Icon" width="32" height="32" />
  ];

  return (
    <div>
      <StyledH1>C4</StyledH1>
      <ComponentWrapper filename="option-popup.tsx" createdBy="Becky Xu" description="C4 - Squad Presets">
        <Button variant="outlined" onClick={() => setModalOpen(true)}>Create project</Button>
      </ComponentWrapper>
      <ComponentWrapper filename="video-upload.tsx" createdBy="Becky Xu" description="C4 - Upload Video">
        <Button variant="outlined" onClick={() => setVideoUploadOpen(true)}>Upload video</Button>
      </ComponentWrapper>
      <ComponentWrapper filename="invite-admin.tsx" createdBy="Becky Xu" description="C4 - Adding Admin">
        <Button variant="outlined" onClick={() => setAdminInviteOpen(true)}>Add admins</Button>
      </ComponentWrapper>
      <ComponentWrapper filename="add-role.tsx" createdBy="Becky Xu" description="C4 - Adding a Role">
        <Button variant="outlined" onClick={() => setAddRoleOpen(true)}>Add role</Button>
      </ComponentWrapper>
      <ComponentWrapper filename="editproj-popup.tsx" createdBy="Becky Xu" description="C4 - Edit Project Popup">
        <Button variant="outlined" onClick={() => setEditprojPopupOpen(true)}>Edit project</Button>
      </ComponentWrapper>
      <ComponentWrapper filename="exit-uncompleted-popup.tsx" createdBy="Becky Xu" description="C4 - Exit Uncompleted Project Popup">
        <Button variant="outlined" onClick={() => setexitUncompletedPopupOpen(true)}>Exit Uncompleted Role</Button>
      </ComponentWrapper>
      <ComponentWrapper filename="cost-estimator.tsx" createdBy="Becky Xu" description="C4 - Cost Estimator">
        <CostEstimator></CostEstimator>
      </ComponentWrapper>
      <ComponentWrapper filename="collecting-bar.tsx" createdBy="Becky Xu" description="C4 - Collecting Bar">
        <CollectingBar></CollectingBar>
      </ComponentWrapper>

      <StyledH1>C5</StyledH1>
      <ComponentWrapper filename="book-interview-a.tsx" createdBy="Becky Xu" description="C5 - Book a Call">
        <Button variant="outlined" onClick={() => setbookInterviewAPopupOpen(true)}>Book call</Button>
      </ComponentWrapper>
      <ComponentWrapper filename="squad-surveyswap.tsx" createdBy="Becky Xu" description="C5 - My Squad - not assigned yet">
        <SquadSurveySwap></SquadSurveySwap>
      </ComponentWrapper>

      <StyledH1>T5</StyledH1>
      <ComponentWrapper filename="project-profile" createdBy="Chelsea Guo" description="T5 - In project view page">
        <ProjectProfile
          projectLogoLink='icon/projectLogo.svg'
          projectName='THIS IS PROJECT NAME'
          projectPostDate='1 Jan, 2023'
          companyLogo='icon/projectLogo.svg'
          companyName='This is Company Name'
          companyWebLink='www.testcompanylink.com'
          companyDescription='This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description '
          companyIndustry='This is company industry: IT'
          companyLocation='New York'
          companyProfileLink='www.testcompanylink.com'
          timelineEstimate='January 1 2023'
          projectStartDate='1 Feb, 2023'
          projectLeaderAvatarLink='icon/projectLogo.svg'
          projectLeaderName='Leader Name'
          projectLeaderRole='Manager'
          projectOutline='This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline '
          keyDeliverables={['deliverable 1', 'deliverable 2', 'deliverable 3', 'deliverable 4', 'deliverable 5', 'deliverable 6', 'deliverable 7', 'deliverable 8', 'deliverable 9', 'deliverable 10', 'deliverable 11', 'deliverable 12', 'deliverable 13', 'deliverable 14', 'deliverable 15', 'deliverable 16', 'deliverable 17', 'deliverable 18',]}
        />
      </ComponentWrapper>
      <ComponentWrapper filename="role-detail" createdBy="Chelsea Guo" description="T5 - In project view page">
        <RoleCard
          status={["lead role", "Open Role", "Accepting applications"]}
          roleLogoUrl='icon/roleLogo.svg'
          positionName='Role position 1'
          description='bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala balav'
          startDate='20230913'
          location='New York'
          hourlyRateMax={50}
          hourlyRateMin={30}
          expectedHoursPerWeek={20}
          skills={["skill 1", "skill 2"]}
          tools={["tool 1", "tool 2", "tool 3"]} />
      </ComponentWrapper>


      {isModalOpen && (
        <SquadCustom
          closeModal={() => {
            setModalOpen(false);
          }}
          title={"Squad Presets"}
          description={
            "Select a preset to see recommended role appear, or build your custom squad from scratch. Don’t worry, you can always add or remove roles in the next step."
          }
          options={["Custom", "Web Platform", "Mobile App",
            "Marketing Website", "Growth", "Data"]}
          icons={icons}
          link={"/signup"}
        />
      )}

      {editprojPopupOpen && (
        <EditProjPopup
          onClose={() => setEditprojPopupOpen(false)}
          title="Edit Project"
          description="We have already started collecting applicants…"
          cancelButtonText="Cancel"
          confirmButtonText="Confirm"
          icon={<Image src={editProjImage} alt="Edit Project Icon" width="57" height="57" />}
        //showDivider={false}
        />
      )}

      {videoUploadOpen && <VideoUpload onClose={() => setVideoUploadOpen(false)} />}
      {isAdminInvite && <InviteAdmin onClose={() => setAdminInviteOpen(false)} />}
      {isRoleAdd && <AddRole onClose={() => setAddRoleOpen(false)} />}
      {exitUncompletedPopupOpen && <ExitUncompletedPopup onClose={() => setexitUncompletedPopupOpen(false)} />}
      {bookInterviewAPopupOpen && <BookInterviewA onClose={() => setbookInterviewAPopupOpen(false)} />}
    </div>
  );
}
