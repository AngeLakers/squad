"use client";
import * as React from "react";
import { ReactNode } from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import SquadCustom from "@/ui/option-popup";
import VideoUpload from "@/ui/video-upload";
import InviteAdmin from "@/ui/invite-admin";
import AddRole from "@/ui/add-role";
import EditProjPopup from "@/ui/editproj-popup";
import ExitUncompletedPopup from "@/ui/exit-uncompleted-popup";
import CostEstimator from "@/ui/cost-estimator";
import CollectingBar from "@/ui/collecting-bar";
import SquadSurveySwap from "@/ui/squad-surveyswap";
import BookInterviewA from "@/ui/book-interview-a";
import customizeImage from "../../public/customize.png";
import worldWideWebImage from "../../public/world-wide-web.png";
import mobilePhoneImage from "../../public/mobile-phone.png";
import marketingImage from "../../public/marketing.png";
import growthImage from "../../public/growth.png";
import dataImage from "../../public/data.png";
import editProjImage from "../../public/edit-proj.png";
import ProjectProfile from "@/ui/project-profile";
import RoleCard from "@/ui/role-detail";
import { SimpleHeader } from "@/ui/simple-header";
import CustomTextarea from "@/ui/customtextarea";
import { Badge } from "@/ui/badge";
import Skill from "@/ui/titled-badge";
import AboutMe from "@/ui/about-me-popup";
import CustomButton from "@/ui/custom-button";
import CustomBadge from "@/ui/custom-badge";
import { AlertSVG, StarSVG, TickSVG } from "@/ui/svgs";
import InfoBar from "@/ui/info-bar";
import SquadCard from "@/ui/squad-card";
import TalentSkills, { BadgeData } from "@/ui/talent-skills";
import TalentInfo from "@/ui/talent-info-card";
import TalentAnswers from "@/ui/talent-answers";
import TalentNotes from "@/ui/talent-notes";
import TalentDocuments from "@/ui/talent-documents";
import TalentProfile, { ProfileDataType } from "@/ui/talent-profile-card";
import SquadNav from "@/ui/squad-navigation";

const mockProfileData: ProfileDataType = {
  rate: "$90/h",
  availability: "Immediately",
  hoursToCommit: "40h / week",
  location: "Sydney AU, GMT+11",
  workingHours: "8:30 AM - 4:30 PM",
  overlap: "7 hours",
  experience: "5 years",
  languages: {
    English: "Native",
    French: "Intermediate",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/your-profile/",
    email: "mailto:your.email@example.com",
    twitter: "https://twitter.com/your-profile",
  },
};
import CompleteProfilePopup from "@/ui/complete-profile-popup";
import CompleteSkillsPopup from "@/ui/complete-profile-skills-popup";

const mockSkillsData: BadgeData[] = [
  { label: "Roadmapping", icon: <StarSVG />, preset: "outlined_green" },
  { label: "Vendor Management & Selection", preset: "outlined_grey" },
  {
    label: "Vendor Management & Selection",
    icon: <StarSVG preset="grey" />,
    preset: "outlined_grey",
  },
  {
    label: "Vendor Management & Selection",
    icon: <StarSVG preset="grey" />,
    preset: "outlined_grey",
  },
  {
    label: "Vendor Management & Selection",
    icon: <StarSVG preset="grey" />,
    preset: "outlined_grey",
  },
  {
    label: "Vendor Management & Selection",
    icon: <StarSVG preset="grey" />,
    preset: "outlined_grey",
  },
  {
    label: "Vendor Management & Selection",
    icon: <StarSVG preset="grey" />,
    preset: "outlined_grey",
  },
];

const mockToolsData: BadgeData[] = [
  {
    label: "Photoshop",
    icon: <img alt="photoshop logo" src="/photoshop.png" />,
    preset: "outlined_grey",
  },
  {
    label: "Figma",
    icon: <img alt="figma logo" src="/figma.png" />,
    preset: "outlined_grey",
  },
];

const mockQAData = [
  {
    question: "Why are you a great fit for this role?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. Sit lobortis vel ut pharetra integer odio. Venenatis eu sit sit turpis feugiat. Egestas adipiscing morbi tortor hendrerit.Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. Sit lobortis vel ut pharetra integer odio. Venenatis eu sit sit turpis feugiat. Egestas adipiscing morbi tortor hendrerit.Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus.",
  },
  {
    question: "Why are you a great fit for this role?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. Sit lobortis vel ut pharetra integer odio. Venenatis eu sit sit turpis feugiat. Egestas adipiscing morbi tortor hendrerit.Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. Sit lobortis vel ut pharetra integer odio. Venenatis eu sit sit turpis feugiat. Egestas adipiscing morbi tortor hendrerit.Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus.",
  },
  {
    question: "Why are you a great fit for this role?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. Sit lobortis vel ut pharetra integer odio. Venenatis eu sit sit turpis feugiat. Egestas adipiscing morbi tortor hendrerit.Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. Sit lobortis vel ut pharetra integer odio. Venenatis eu sit sit turpis feugiat. Egestas adipiscing morbi tortor hendrerit.Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus.",
  },
  {
    question: "Why are you a great fit for this role?",
    answer: "Lorem ipsum dolor sit ",
  },
];

const mockDocumentData = [
  { title: "name_of_the_archive1.pdf", size: "243k" },
  { title: "name_of_the_archive2.pdf", size: "123k" },
  { title: "name_of_the_archive3.pdf", size: "123k" },
  { title: "name_of_the_archive4.pdf", size: "1223k" },
  { title: "name_of_the_archive5.pdf", size: "123333k" },
  { title: "name_of_the_archive6.pdf", size: "123k" },
];

const StyledH1 = styled.h1`
  font-size: 2em;
  font-weight: bold;
  margin: 10px 0;
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

interface ComponentWrapperProps {
  filename: string;
  createdBy: string;
  description: string;
  children: ReactNode;
  usage?: string;
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({
  filename,
  createdBy,
  description,
  children,
  usage,
}) => {
  return (
    <div style={{ border: "1px solid black", padding: "1%" }}>
      <ComponentContainer>{children}</ComponentContainer>
      <div style={{ marginTop: "1%" }}>
        <div>File: {filename}</div>
        <div>Created by: {createdBy}</div>
        <div>Description: {description}</div>
        {usage && <div>Usage: {usage}</div>}
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
  const [exitUncompletedPopupOpen, setexitUncompletedPopupOpen] =
    useState(false);
  const [bookInterviewAPopupOpen, setbookInterviewAPopupOpen] = useState(false);
  const [aboutMePopupOpen, setAboutMePopupOpen] = useState(false);
  const [isCompleteProfilePopupOpen, setCompleteProfilePopupOpen] = useState(false);
  const [isCompleteSkillsPopupOpen, setCompleteSkillsPopupOpen] = useState(false);

  const icons = [
    <Image key="customizeImage" src={customizeImage} alt="Custom Icon" width="32" height="32" />,
    <Image
      key="worldWideWebImage"
      src={worldWideWebImage}
      alt="Web Platform Icon"
      width="32"
      height="32"
    />,
    <Image
      key="mobilePhoneImage"
      src={mobilePhoneImage}
      alt="Mobile Phone Icon"
      width="32"
      height="32"
    />,
    <Image
      key="marketingImage"
      src={marketingImage}
      alt="Marketing Website Icon"
      width="32"
      height="32"
    />,
    <Image key="growthImage" src={growthImage} alt="Growth Icon" width="32" height="32" />,
    <Image key="dataImage" src={dataImage} alt="Data Icon" width="32" height="32" />,
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 10%",
        gap: "10px",
      }}
    >
      <StyledH1>Common components</StyledH1>
      <ComponentWrapper
        filename="custom-badge.tsx"
        createdBy="Mark Sun"
        description="Badge with different styles. You can use preset style or add your own style to the preset. Badge in T5 should use large size. And the green badge in T5 should use light green preset."
        usage='        <CustomBadge
          label={"outlined_light_green badge with image icon"}
          preset={"outlined_light_green"}
          icon={<img src="/figma.png" />}
          size="large"
        />'
      >
        <CustomBadge label={"red badge"} preset={"red"} />
        <CustomBadge label={"green badge"} preset={"green"} />
        <CustomBadge
          label={"green badge with icon"}
          preset={"green"}
          icon={<TickSVG />}
        />
        <CustomBadge label={"outlined_grey badge"} preset={"outlined_grey"} />
        <CustomBadge label={"outlined_green badge"} preset={"outlined_green"} />
        <CustomBadge
          label={"outlined_light_green badge"}
          preset={"outlined_light_green"}
        />
        <CustomBadge
          label={"outlined_light_green badge with image icon"}
          preset={"outlined_light_green"}
          icon={<img alt="figma logo" src="/figma.png" />}
          size="large"
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="custom-button.tsx"
        createdBy="Mark Sun"
        description="Button with different styles. You can use preset style or add your own style to the preset."
        usage="<CustomButton label='custom padding' preset='outlined' padding='10px 30px'/>"
      >
        <CustomButton label="default" />
        <CustomButton label={"outlined"} preset="outlined" />
        <CustomButton label={"balck"} preset="black" />
        <CustomButton label={"text"} preset="text" />
        <CustomButton
          label="custom padding"
          preset="outlined"
          padding="10px 30px"
        />
      </ComponentWrapper>
      <StyledH1>C4</StyledH1>
      <ComponentWrapper
        filename="option-popup.tsx"
        createdBy="Becky Xu"
        description="C4 - Squad Presets"
      >
        <Button variant="outlined" onClick={() => setModalOpen(true)}>
          Create project
        </Button>
      </ComponentWrapper>
      <ComponentWrapper
        filename="video-upload.tsx"
        createdBy="Becky Xu"
        description="C4 - Upload Video"
      >
        <Button variant="outlined" onClick={() => setVideoUploadOpen(true)}>
          Upload video
        </Button>
      </ComponentWrapper>
      <ComponentWrapper
        filename="invite-admin.tsx"
        createdBy="Becky Xu"
        description="C4 - Adding Admin"
      >
        <Button variant="outlined" onClick={() => setAdminInviteOpen(true)}>
          Add admins
        </Button>
      </ComponentWrapper>
      <ComponentWrapper
        filename="add-role.tsx"
        createdBy="Becky Xu"
        description="C4 - Adding a Role"
      >
        <Button variant="outlined" onClick={() => setAddRoleOpen(true)}>
          Add role
        </Button>
      </ComponentWrapper>
      <ComponentWrapper
        filename="editproj-popup.tsx"
        createdBy="Becky Xu"
        description="C4 - Edit Project Popup"
      >
        <Button variant="outlined" onClick={() => setEditprojPopupOpen(true)}>
          Edit project
        </Button>
      </ComponentWrapper>
      <ComponentWrapper
        filename="exit-uncompleted-popup.tsx"
        createdBy="Becky Xu"
        description="C4 - Exit Uncompleted Project Popup"
      >
        <Button
          variant="outlined"
          onClick={() => setexitUncompletedPopupOpen(true)}
        >
          Exit Uncompleted Role
        </Button>
      </ComponentWrapper>
      <ComponentWrapper
        filename="cost-estimator.tsx"
        createdBy="Becky Xu"
        description="C4 - Cost Estimator"
      >
        <CostEstimator></CostEstimator>
      </ComponentWrapper>
      <ComponentWrapper
        filename="collecting-bar.tsx"
        createdBy="Becky Xu"
        description="C4 - Collecting Bar"
      >
        <CollectingBar></CollectingBar>
      </ComponentWrapper>

      <StyledH1>C5</StyledH1>
      <ComponentWrapper
        filename="book-interview-a.tsx"
        createdBy="Becky Xu"
        description="C5 - Book a Call"
      >
        <Button
          variant="outlined"
          onClick={() => setbookInterviewAPopupOpen(true)}
        >
          Book call
        </Button>
      </ComponentWrapper>
      <ComponentWrapper
        filename="squad-surveyswap.tsx"
        createdBy="Becky Xu"
        description="C5 - My Squad - not assigned yet"
      >
        <SquadSurveySwap></SquadSurveySwap>
      </ComponentWrapper>
      <ComponentWrapper
        filename="talent-profile-card.tsx"
        createdBy="Mark Sun"
        description="C5 - TalentProfile card"
      >
        <TalentProfile data={mockProfileData} />
      </ComponentWrapper>
      <ComponentWrapper
        filename="info-bar.tsx"
        createdBy="Mark Sun"
        description="C5 - My Squad - not assigned yet"
      >
        <InfoBar
          title="We’ve colleted the best applicants for you"
          description="Review all squads and applicants and start hiring. "
          buttonLabel="Review applicants"
          backgroundColor="#ECFDF3"
          borderColor="#6CE9A6"
          icon={<AlertSVG />}
          link={""}
        ></InfoBar>
      </ComponentWrapper>
      <ComponentWrapper
        filename="squad-navigation.tsx"
        createdBy="Mark Sun"
        description="C5 squad navigation bar"
      >
        <SquadNav
          Top={true}
          squadName="Suggested Squad #1"
          talentInfo="Talent 1 of 5"
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="squad-card.tsx"
        createdBy="Mark Sun"
        description="C5 - My Squad - not assigned yet"
      >
        <SquadCard />
      </ComponentWrapper>
      <ComponentWrapper
        filename="talent-info-card.tsx"
        createdBy="Mark Sun"
        description="layout of talent info card"
      >
        <TalentInfo
          title={"Talent Info layout"}
          content={<div>{"add component here"}</div>}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="talent-skills.tsx"
        createdBy="Mark Sun"
        description="talent skills box which load talent skills and tools into badges"
      >
        <TalentInfo
          title={"Skills & Tools"}
          content={
            <TalentSkills
              skillsData={mockSkillsData}
              toolsData={mockToolsData}
            />
          }
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="talent-answers.tsx"
        createdBy="Mark Sun"
        description="talent anserws box which load talent QA data into list of QA sections"
      >
        <TalentInfo
          title={"Talent answers"}
          content={<TalentAnswers qaData={mockQAData} />}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="talent-nots.tsx"
        createdBy="Mark Sun"
        description="talent notes box"
      >
        <TalentInfo
          title={"Additional notes"}
          content={
            <TalentNotes
              content={
                "Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. Sit lobortis vel ut pharetra integer odio. Venenatis eu sit sit turpis feugiat. Egestas adipiscing morbi tortor hendrerit."
              }
            />
          }
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="talent-documents.tsx"
        createdBy="Mark Sun"
        description="talent documents box which load talent Document data into list of Document sections"
      >
        <TalentInfo
          title={"Documents attached"}
          content={<TalentDocuments documents={mockDocumentData} />}
        />
      </ComponentWrapper>
      <StyledH1>T5</StyledH1>
      <ComponentWrapper
        filename="project-profile"
        createdBy="Chelsea Guo"
        description="T5 - In project view page"
      >
        <ProjectProfile
          projectLogoLink="icon/projectLogo.svg"
          projectName="THIS IS PROJECT NAME"
          projectPostDate="1 Jan, 2023"
          companyLogo="icon/projectLogo.svg"
          companyName="This is Company Name"
          companyWebLink="www.testcompanylink.com"
          companyDescription="This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description This is company description "
          companyIndustry="This is company industry: IT"
          companyLocation="New York"
          companyProfileLink="www.testcompanylink.com"
          timelineEstimate="January 1 2023"
          projectStartDate="1 Feb, 2023"
          projectLeaderAvatarLink="icon/projectLogo.svg"
          projectLeaderName="Leader Name"
          projectLeaderRole="Manager"
          projectOutline="This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline This is project outline "
          keyDeliverables={[
            "deliverable 1",
            "deliverable 2",
            "deliverable 3",
            "deliverable 4",
            "deliverable 5",
            "deliverable 6",
            "deliverable 7",
            "deliverable 8",
            "deliverable 9",
            "deliverable 10",
            "deliverable 11",
            "deliverable 12",
            "deliverable 13",
            "deliverable 14",
            "deliverable 15",
            "deliverable 16",
            "deliverable 17",
            "deliverable 18",
          ]}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="role-detail"
        createdBy="Chelsea Guo"
        description="T5 - In project view page"
      >
        <RoleCard
          status={["lead role", "Open Role", "Accepting applications"]}
          roleLogoUrl="icon/roleLogo.svg"
          positionName="Role position 1"
          description="bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala balav"
          startDate="20230913"
          location="New York"
          hourlyRateMax={50}
          hourlyRateMin={30}
          expectedHoursPerWeek={20}
          skills={["skill 1", "skill 2"]}
          tools={["tool 1", "tool 2", "tool 3"]}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="simple-header.tsx"
        createdBy="Wenzhuo Li"
        description="T5 - Header with the squadron icon"
      >
        <SimpleHeader></SimpleHeader>
      </ComponentWrapper>
      <ComponentWrapper
        filename="customtextarea.tsx"
        createdBy="Wenzhuo Li"
        description="T5 - The text area that can count the left characters. The max characters and textarea style can be adjusted; the label and hint-text can choose to shown"
      >
        <CustomTextarea
          label="label"
          borderStyle="1px solid #D2D6DB"
          width="600px"
          height="150px"
          maxCharCount={500}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="badge.tsx"
        createdBy="Wenzhuo Li"
        description="T5 - badge that can change border styles and input-text"
      >
        <Badge
          text="React"
          textColor="#4d5761"
          iconUrl="/icon/send.svg"
          borderColor="black"
          borderThickness="1px"
          backgroundColor="white"
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="titled-badge.tsx"
        createdBy="Wenzhuo Li"
        description="T5 - This is a three-layer titled-badge"
      >
        <Skill
          requiredSkills={{
            title: "Required Skills",
            badges: [
              {
                text: "Product Analytics",
                iconUrl: "/icon/love.svg",
                borderColor: "#6C737F",
                borderThickness: "2px",
                textColor: "#4D5761",
              },
              {
                text: "Roadmapping",
                borderColor: "#6C737F",
                borderThickness: "2px",
                textColor: "#4D5761",
              },
              {
                text: "Product Analyticshuifhsuihfsiuhfui",
                borderColor: "#6C737F",
                borderThickness: "2px",
                textColor: "#4D5761",
              },
            ],
          }}
          recommendedSkills={{
            title: "Recommended Skills",
            badges: [
              {
                text: "Agile",
                borderColor: "#6C737F",
                borderThickness: "2px",
                textColor: "#4D5761",
              },
            ],
          }}
          tools={{
            title: "Tools",
            badges: [
              {
                text: "Agile",
                borderColor: "#6C737F",
                borderThickness: "2px",
                textColor: "#4D5761",
              },
            ],
          }}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="about-me-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T5 - About me"
      >
        <Button variant="outlined" onClick={() => setAboutMePopupOpen(true)}>
          About me
        </Button>
      </ComponentWrapper>



      <ComponentWrapper filename="complete-profile-popup.tsx" createdBy="Chelsea Guo" description="T5 - Complete Profile Popup">
        <Button variant="outlined" onClick={() => setCompleteProfilePopupOpen(true)}>Complete Profile Popup</Button>
      </ComponentWrapper>
      <ComponentWrapper filename="complete-profile-aboutme-popup.tsx" createdBy="Chelsea Guo" description="T5 - Complete Profile Popup">
        <Button variant="outlined" onClick={() => setCompleteSkillsPopupOpen(true)}>Complete Skills Popup</Button>
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
          options={[
            "Custom",
            "Web Platform",
            "Mobile App",
            "Marketing Website",
            "Growth",
            "Data",
          ]}
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
          icon={
            <Image
              key="editProjImage"
              src={editProjImage}
              alt="Edit Project Icon"
              width="57"
              height="57"
            />
          }
          //showDivider={false}
        />
      )}

      {videoUploadOpen && (
        <VideoUpload onClose={() => setVideoUploadOpen(false)} />
      )}
      {isAdminInvite && (
        <InviteAdmin onClose={() => setAdminInviteOpen(false)} />
      )}
      {isRoleAdd && <AddRole onClose={() => setAddRoleOpen(false)} />}
      {exitUncompletedPopupOpen && (
        <ExitUncompletedPopup
          onClose={() => setexitUncompletedPopupOpen(false)}
        />
      )}
      {bookInterviewAPopupOpen && (
        <BookInterviewA onClose={() => setbookInterviewAPopupOpen(false)} />
      )}
      {aboutMePopupOpen && (
        <AboutMe onClose={() => setAboutMePopupOpen(false)} />
      )}
      {isCompleteProfilePopupOpen && <CompleteProfilePopup onClose={() => setCompleteProfilePopupOpen(false)}/>}
      {isCompleteSkillsPopupOpen && <CompleteSkillsPopup onClose={() => setCompleteSkillsPopupOpen(false)}/>}
    </div>
  );
}
