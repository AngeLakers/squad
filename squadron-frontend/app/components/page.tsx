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
import BookInterviewB from "@/ui/book-interview-b";
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
import CustomButton, { PresetTypes } from "@/ui/custom-button";
import CustomBadge from "@/ui/custom-badge";

import { AlertSVG, SquadSVG, StarSVG, TickSVG } from "@/ui/svgs";

import InfoBar from "@/ui/info-bar";
import SquadCard, { ButtonContainerPresets } from "@/ui/squad-card";
import TalentSkills, { BadgeData } from "@/ui/talent-skills";
import TalentInfo from "@/ui/layout-card";
import CardLayout from "@/ui/layout-card";
import TalentAnswers from "@/ui/talent-answers";
import TalentNotes from "@/ui/talent-notes";
import TalentDocuments from "@/ui/talent-documents";
import TalentProfile, { ProfileDataType } from "@/ui/talent-profile-card";
import SquadNav from "@/ui/squad-navigation";
import AddExperiencePopup from "@/ui/complete-profile-addexperience-popup";
import EmptyRoleCard from "@/ui/empty-role-card";
import callImage from "@/public/call.png";
import portraitAImage from "@/public/portraitA.png";
import SendOfferPopup from "@/ui/send-offer-popup";
import LaunchMissionPopup from "@/ui/launch-mission";
import launchMissionImage from "@/public/launch-mission.png";

import { Community } from "@/ui/Community";
import { Community2 } from "@/ui/Community2";
import { Application } from "@/ui/Application";
import { Topbar1 } from "@/ui/Topbar1";
import { Wallet } from "@/ui/Wallet";
import { Header } from "@/ui/Header";
import { Hometable } from "@/ui/Hometable";
import { Hometable2 } from "@/ui/Hometable2";
import Layout from "@/app/homescreen/layout";
// import { PresetTypes } from "@/ui/custom-button";

import RequiredMissingPopup from "@/ui/required-missing-popup";
import LocationMissingPopup from "@/ui/location-missing-popup";
import Spain from "@/public/Spain.png";
import Footer from "@/ui/footer";
import CustomProjectHeader from "@/ui/custom-project-header";
import RequireDontMatchPopup from "@/ui/require-dont-match";
import ApplyCancelPopup from "@/ui/apply_cancel";
import BuildApplySquad from "@/ui/build-apply-squad";

import AskQuestionPopup from "@/ui/ask-question-popup";
import hideImage from "@/public/hide.png";
import TitleAndFilter from "@/ui/title-and-filter";
import TalentClientImage from "@/public/talent-client.png";
import ReferSquadmatePopup from "@/ui/refer-squadmate";
import InvitationSentPopup from "@/ui/invitation-sent-popup";
import HideProjectPopup from "@/ui/hide-project-popup";
import ShareProjectPopup from "@/ui/share-about-you-popup";
import LanguagePopup from "@/ui/language-popup";
import SocialMediaPopup from "@/ui/socialmedia-popup";
import ProfileToolPopup from "@/ui/profile-tool-popup";
import DeleteExperiencePopup from "@/ui/delete-experience-popup";
import AddProjectPopup from "@/ui/add-project-popup";




const Displayy=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
`;
const bookData: Array<PersonData> = [
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/1",
    title: "Front-End Engineer",
    state: "viewing",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Jane Doe",
    profileLink: "/profile/2",
    title: "Designer",
    state: "interviewing",
  },
];
const viewData: Array<PersonData> = [
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
  },
];

const MockrolesData = [
  {
    label: "Front-End Engineer",
    info: {
      title: "Front-End Engineer",
      rate: "30$-50$ /h",
      hoursPerWeek: "20-25h /week",
      location: "Amsterdam, NL",
      availability: "20/12/23",
    },
  },
  {
    label: "Back-End Engineer1",
    info: {
      title: "Back-End Engineer1",
      rate: "30$-50$ /h",
      hoursPerWeek: "20-25h /week",
      location: "Amsterdam, NL",
      availability: "20/12/23",
    },
  },
  {
    label: "Back-End Engineer2",
    info: {
      title: "Back-End Engineer2",
      rate: "30$-50$ /h",
      hoursPerWeek: "20-25h /week",
      location: "Amsterdam, NL",
      availability: "20/12/23",
    },
  },
  {
    label: "Back-End Engineer3",
    info: {
      title: "Back-End Engineer3",
      rate: "30$-50$ /h",
      hoursPerWeek: "20-25h /week",
      location: "Amsterdam, NL",
      availability: "20/12/23",
    },
  },
  {
    label: "Back-End Engineer4",
    info: {
      title: "Back-End Engineer4",
      rate: "30$-50$ /h",
      hoursPerWeek: "20-25h /week",
      location: "Amsterdam, NL",
      availability: "20/12/23",
    },
  },
];

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
import StepHeading from "@/ui/step-heading";
import Heading from "@/ui/heading";
import RatioButtonsTable from "@/ui/ratio-buttons-table";
import SendOffer from "@/ui/send-offer-popup";

import HorizontalTabs from "@/ui/horizontal-tabs";
import { NotificationProps } from "@/ui/notification-message";
//import BookInterviewB from "@/ui/book-interview-b";

import { PersonData } from "@/ui/squad-table";
import RoleSkillDropdownFilter from "@/ui/filter-dropdown-role-and-skills";

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
const mockMenuItems = [
  [
    { title: "Profile", link: "/profile" },
    { title: "Settings", link: "/settings" },
  ],
  [{ title: "Help", link: "/help" }],
  [{ title: "Logout", link: "/logout" }],
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

const notificationsData: NotificationProps[] = [
  {
    iconPath: "/icon/notification-suitcase-failed.svg",
    linkUrl: "www.google.com",
    messageInfo: {
      message: "Your application has been rejected",
      websiteName: "Google",
      organizationName: "Surveyswap",
    },
  },

  {
    iconPath: "/icon/notification-suitcase-succeed.svg",
    linkUrl: "www.google.com",
    messageInfo: {
      message: "Your application has been successful",
      websiteName: "Google",
      organizationName: "Surveyswap",
    },
  },
  {
    iconPath: "/icon/notification-add-friend.svg",
    linkUrl: "www.google.com",
    messageInfo: {
      message: "Message 1",
      websiteName: "Spotify",
      organizationName: "Tech team",
    },
  },
  {
    iconPath: "/icon/notification-question.svg",
    linkUrl: "www.google.com",
    messageInfo: {
      message: "You have been invited to an interview",
      websiteName: "Google",
      organizationName: "Google",
    },
  },
  {
    iconPath: "/icon/notification-puzzle.svg",
    linkUrl: "www.google.com",
    messageInfo: {
      message: "New match for you!",
      websiteName: "",
      organizationName: "",
    },
  },
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

const Display = styled.div`
  margin-left: 150px;
  display: flex;
  margin-top: 50px;
`;

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({
  filename,
  createdBy,
  description,
  children,
  usage,
}) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <ComponentContainer>{children}</ComponentContainer>
      <div style={{ marginTop: "10px" }}>
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
  const [isModal2Open, setModal2Open] = useState(false);
  const [videoUploadOpen, setVideoUploadOpen] = useState<boolean>(false);
  const [isAdminInvite, setAdminInviteOpen] = useState(false);
  const [isOfferSend, setOfferSendOpen] = useState(false);
  const [isRoleAdd, setAddRoleOpen] = useState(false);
  const [editprojPopupOpen, setEditprojPopupOpen] = useState(false);
  const [launchMissionPopupOpen, setlaunchMissionPopupOpen] = useState(false);
  const [hideSquadPopupOpen, setHideSquadPopupOpen] = useState(false);
  const [exitUncompletedPopupOpen, setexitUncompletedPopupOpen] =
    useState(false);
  const [bookInterviewAPopupOpen, setbookInterviewAPopupOpen] = useState(false);
  const [bookInterviewBPopupOpen, setbookInterviewBPopupOpen] = useState(false);
  const [aboutMePopupOpen, setAboutMePopupOpen] = useState(false);
  const [isCompleteProfilePopupOpen, setCompleteProfilePopupOpen] =
    useState(false);
  const [isCompleteSkillsPopupOpen, setCompleteSkillsPopupOpen] =
    useState(false);
  const [isSkillMissingPopupOpen, setSkillMissingPopupOpen] = useState(false);
  const [isToolMissingPopupOpen, setToolMissingPopupOpen] = useState(false);
  const [isLocationMissingPopupOpen, setLocationMissingPopupOpen] =
    useState(false);
  const [isRequireDontMatchPopupOpen, setRequireDontMatchPopupOpen] =
    useState(false);
  const [isCompleteExperiencePopupOpen, setCompleteExperiencePopupOpen] =
    useState(false);
  const [isApplyCancelPopupOpen, setApplyCancelPopupOpen] = useState(false);
  const [isAskQuestionPopupOpen, setAskQuestionPopupOpen] = useState(false);
  const [isReferSquadmatePopupOpen, setReferSquadmatePopupOpen] = useState(false);
  const [isInvitationSentPopupOpen, setInvitationSentPopupOpen] = useState(false);
  const [isHideProjectPopupOpen, setHideProjectPopupOpen] = useState(false);
  const [isShareProjectPopupOpen, setShareProjectPopupOpen] = useState(false);
  const [isLanguagePopupOpen, setLanguagePopupOpen] = useState(false);
  const [isSocialMediaPopupOpen, setSocialMediaPopupOpen] = useState(false);
  const [isProfileToolPopupOpen, setProfileToolPopupOpen] = useState(false);
  const [isDeleteExperiencePopupOpen, setDeleteExperiencePopupOpen] = useState(false);
  const [isAddProjectPopupOpen, setAddProjectPopupOpen] = useState(false);
  const icons = [
    <Image
      key="customizeImage"
      src={customizeImage}
      alt="Custom Icon"
      width="32"
      height="32"
    />,
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
    <Image
      key="growthImage"
      src={growthImage}
      alt="Growth Icon"
      width="32"
      height="32"
    />,
    <Image
      key="dataImage"
      src={dataImage}
      alt="Data Icon"
      width="32"
      height="32"
    />,
  ];

  const icons2 = [
    <Image
      key="talentclientImage"
      src={TalentClientImage}
      alt="Talent Client Icon"
      width="64"
      height="64"
    />,
    <Image
      key="talentclientImage"
      src={TalentClientImage}
      alt="Talent Client Icon"
      width="64"
      height="64"
    />
  ]

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
        onClick: () => alert("Button Clicked"),
      },
    },
    {
      image: (
        <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
      ),
      title: "UI Designer",
      assignButtonProps: {
        smallButtonText: "offer sent",
        backgroundColor: "#B54708",
        textColor: "#FFFFFF",
      },
      name: "Patricia Montero",
      bottomButton: {
        label: "Message",
        preset: "transparent" as PresetTypes,
      },
      // bottomButton: {
      //   label: "Message",
      //   backgroundColor: "#FFFFFF",
      //   textColor: "#E5E7EB",
      //   borderColor: "#E5E7EB",
      // },
    },
    {
      title: "Product Designer",
      image: (
        <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" />
      ),
      assignButtonProps: {
        smallButtonText: "offer accepted",
        backgroundColor: "#039855",
        textColor: "#FFFFFF",
      },
      name: "Patricia Montero",

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
      title: "UX Researcher",
      assignButtonProps: {
        smallButtonText: "offer sent",
        backgroundColor: "#039855",
        textColor: "#FFFFFF",
      },
      name: "Patricia Montero",
      bottomButton: {
        label: "Message",
        backgroundColor: "#FFFFFF",
        textColor: "black",
        borderColor: "#E5E7EB",
      },
    },
    {
      title: "Front-End Engineer",
      bottomButton: {
        label: "Find Talent",
      },
    },
    {
      title: "Full-Stack Engineer",
    },
    {
      title: "UX Researcher",
    },
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
        <CustomButton label="default" preset="default" />
        <CustomButton label={"outlined"} preset="outlined" />
        <CustomButton label={"balck"} preset="transparent" />
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
        <CustomButton
          preset="default"
          label="Create project"
          onClick={() => setModalOpen(true)}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="video-upload.tsx"
        createdBy="Becky Xu"
        description="C4 - Upload Video"
      >
        <CustomButton
          preset="default"
          label="Upload video"
          onClick={() => setVideoUploadOpen(true)}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="invite-admin.tsx"
        createdBy="Becky Xu"
        description="C4 - Adding Admin"
      >
        <CustomButton
          preset="default"
          label="Add admins"
          onClick={() => setAdminInviteOpen(true)}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="add-role.tsx"
        createdBy="Becky Xu"
        description="C4 - Adding a Role"
      >
        <CustomButton
          preset="default"
          label="Add role"
          onClick={() => setAddRoleOpen(true)}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="editproj-popup.tsx"
        createdBy="Becky Xu"
        description="C4 - Edit Project Popup"
      >
        <CustomButton
          preset="default"
          label="Edit project"
          onClick={() => setEditprojPopupOpen(true)}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="exit-uncompleted-popup.tsx"
        createdBy="Becky Xu"
        description="C4 - Exit Uncompleted Project Popup"
      >
        <CustomButton
          label="Exit Uncompleted Role"
          preset="default"
          onClick={() => setexitUncompletedPopupOpen(true)}
        />
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
      <ComponentWrapper
        filename="empty-role-card.tsx"
        createdBy="Becky Xu"
        description="C4 - empty role card "
      >
        <EmptyRoleCard title="Product Manager"></EmptyRoleCard>
      </ComponentWrapper>
      <ComponentWrapper
        filename="footer.tsx"
        createdBy="Becky Xu"
        description="C4 - See footer for this page "
      >
        <Footer />
        {/* <Footer isRLeftButtonVisible={false}/> */}
      </ComponentWrapper>

      <StyledH1>C5</StyledH1>
      <ComponentWrapper
        filename="book-interview-a.tsx"
        createdBy="Becky Xu"
        description="C5 - Book a Call"
      >
        <CustomButton
          label="Book call A"
          preset="default"
          onClick={() => setbookInterviewAPopupOpen(true)}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="book-interview-b.tsx"
        createdBy="Becky Xu"
        description="C5 - Book a Call"
      >
        <CustomButton
          label="Book call B"
          preset="default"
          onClick={() => setbookInterviewBPopupOpen(true)}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="send-offer-popup.tsx"
        createdBy="Becky Xu"
        description="C5 - Send offer"
      >
        <CustomButton
          label="Send offer"
          preset="default"
          onClick={() => setOfferSendOpen(true)}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="launch-mission.tsx"
        createdBy="Becky Xu"
        description="C5 - Launch Mission Popup"
      >
        <CustomButton
          preset="default"
          label="Launch Mission"
          onClick={() => setlaunchMissionPopupOpen(true)}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="editproj-popup.tsx"
        createdBy="Becky Xu"
        description="C5 - Hide Squad Popup"
      >
        <CustomButton
          preset="default"
          label="Hide Squad"
          onClick={() => setHideSquadPopupOpen(true)}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="squad-surveyswap.tsx"
        createdBy="Becky Xu"
        description="C5 - My Squad - not assigned yet"
      >
        <SquadSurveySwap roles={rolesData} />
      </ComponentWrapper>

      <ComponentWrapper
        filename="build-apply-squad.tsx"
        createdBy="Becky Xu"
        description="C5 - build-apply-squad, also for T5"
      >
        <BuildApplySquad width="80%" />
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
        <SquadCard
          badgeTitles={["Good Match 80%"]}
          badgeColor="green"
          squadTitle="Suggested Squad #1"
          squadDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morLorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morLorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. mor"
          icon={<SquadSVG backgroundColor="#E5E7EB" />}
          type="book"
          buttonsPreset={ButtonContainerPresets.EMPTY}
          data={bookData}
        />
        <SquadCard
          badgeTitles={["Good Match 80%"]}
          badgeColor="green"
          squadTitle="Suggested Squad #1"
          type="view"
          data={viewData}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="layout-card.tsx"
        createdBy="Mark Sun"
        description="layout of card"
      >
        <TalentInfo
          title={"card layout"}
          content={<div>{"add component here"}</div>}
        />
        <TalentInfo
          titleComponent={<div>{"title component"}</div>}
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

      <StyledH1>T1</StyledH1>
      <ComponentWrapper
        filename="option-popup.tsx"
        createdBy="Becky Xu"
        description="T1 - Squad Popup"
      >
        <CustomButton
          preset="default"
          label="Find your Squad"
          onClick={() => setModal2Open(true)}
        />
      </ComponentWrapper>

      <StyledH1>T3</StyledH1>

      <ComponentWrapper
        filename="Application.tsx"
        createdBy="Bojia Zhang"
        description="the components in homescreen"
      >
        <Layout>

    <Displayy>
    <Header></Header>
    </Displayy>

    <Application></Application>

    < Displayy>
    <Wallet></Wallet>
    </Displayy>


    <Display>
     <Community> </Community>
    </Display>

    <Display>
    <Community2>  </Community2>
    </Display>

    </Layout>


      </ComponentWrapper>

      <ComponentWrapper
        filename="Hometable2.tsx"
        createdBy="Bojia Zhang"
        description="the component of t5"
      >
        <Hometable></Hometable>

        <Hometable2></Hometable2>
      </ComponentWrapper>

      <StyledH1>T5</StyledH1>
      <ComponentWrapper
        filename="combanation of card-layout, heading, ratio-buttons-table.tsx"
        createdBy="Mark Sun"
        description="ratio buttons table"
      >
        <CardLayout
          titleComponent={
            <Heading
              title={"Select your role"}
              description={
                "Before you add the rest of the team, select your role and fill up your details"
              }
            />
          }
          content={
            <RatioButtonsTable roles={MockrolesData}></RatioButtonsTable>
          }
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="step-heading.tsx"
        createdBy="Mark Sun"
        description="step heading"
      >
        <StepHeading
          progress={33}
          step={"Step 01/03"}
          heading={"Select your role"}
        />
      </ComponentWrapper>
      <ComponentWrapper
        filename="custom-project-header.tsx"
        createdBy="Chelsea Guo"
        description="custom project header"
      >
        <CustomProjectHeader
          backgroundImage="/images/testCustomHeaderBackgroud.png"
          avatarImagePath="/icon/projectLogo.svg"
          avatarHeight={"89px"}
          avatarWidth={"89px"}
          title1="test title 1"
          title2="test title 2"
          title3="test title3"
          button={{
            isVisible: true,
            text: "Apply as squad",
            backgroundColor: "#A0D909",
            textColor: "#ffffff",
            onClick: () => console.log("Apply as squad"),
            href: "../t5_proj_apply/apply_as_squad",
          }}
          shareIcon={{
            isVisible: true,
            color: "#A0D909",
            onClick: () => {
              console.log("Share icon clicked!");
            },
          }}
          starIcon={{
            isVisible: true,
            color: "#FFFF00",
            onClick: () => {
              console.log("Star icon clicked!");
            },
          }}
        />
        <CustomProjectHeader
          backgroundImage="/images/testCustomHeaderBackgroud.png"
          avatarImagePath="/icon/projectLogo.svg"
          avatarHeight={"54px"}
          avatarWidth={"54px"}
          title1="test title 1"
          title2="test title 2"
          title3="test title3"
          button={{
            isVisible: true,
            text: "Apply as squad",
            backgroundColor: "#ffffff",
            textColor: "#A0D909",
            onClick: () => console.log("Apply as squad"),
            href: "../t5_proj_apply/apply_as_squad",
          }}
          shareIcon={{
            isVisible: false,
            color: "#00FF00",
            onClick: () => {
              console.log("Share icon clicked!");
            },
          }}
          starIcon={{
            isVisible: true,
            color: "#FFFF00",
            onClick: () => {
              console.log("Star icon clicked!");
            },
          }}
        />
      </ComponentWrapper>
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

      <ComponentWrapper
        filename="complete-profile-popup.tsx"
        createdBy="Chelsea Guo"
        description="T5 - Complete Profile Popup"
      >
        <Button
          variant="outlined"
          onClick={() => setCompleteProfilePopupOpen(true)}
        >
          Complete Profile Popup
        </Button>
      </ComponentWrapper>
      <ComponentWrapper
        filename="complete-profile-skills-popup.tsx"
        createdBy="Chelsea Guo"
        description="T5 - Complete skills Popup"
      >
        <Button
          variant="outlined"
          onClick={() => setCompleteSkillsPopupOpen(true)}
        >
          Complete Skills Popup
        </Button>
      </ComponentWrapper>
      <ComponentWrapper
        filename="complete-profile-addexperience.tsx"
        createdBy="Chelsea Guo"
        description="T5 - Complete add experience Popup"
      >
        <Button
          variant="outlined"
          onClick={() => setCompleteExperiencePopupOpen(true)}
        >
          Complete add experience Popup
        </Button>
      </ComponentWrapper>
      <ComponentWrapper
        filename="required-missing-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T5 - Skill Missing Popup"
      >
        <Button
          variant="outlined"
          onClick={() => setSkillMissingPopupOpen(true)}
        >
          Skill Missing Popup
        </Button>
      </ComponentWrapper>
      <ComponentWrapper
        filename="required-missing-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T5 - Tool Missing Popup"
      >
        <Button
          variant="outlined"
          onClick={() => setToolMissingPopupOpen(true)}
        >
          Tool Missing Popup
        </Button>
      </ComponentWrapper>
      <ComponentWrapper
        filename="location-missing-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T5 - Location Missing Popup"
      >
        <Button
          variant="outlined"
          onClick={() => setLocationMissingPopupOpen(true)}
        >
          Location Missing Popup
        </Button>
      </ComponentWrapper>
      <ComponentWrapper
        filename="require-dont-match-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T5 - Require Dont Match Popup"
      >
        <Button
          variant="outlined"
          onClick={() => setRequireDontMatchPopupOpen(true)}
        >
          Require Dont Match Popup
        </Button>
      </ComponentWrapper>
      <ComponentWrapper
        filename="apply-cancel-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T5 - Apply Cancel Popup"
      >
        <Button
          variant="outlined"
          onClick={() => setApplyCancelPopupOpen(true)}
        >
          Apply Cancel Popup
        </Button>
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
        />
      )}

    {isModal2Open && (
        <SquadCustom
          closeModal={() => {
            setModal2Open(false);
          }}
          title={"Lorem ipsum dolor sit?"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          }
          options={[
            "I'm a Talent",
            "I'm a Client",
          ]}
          icons={icons2}
          fontSize="24px"
          fontWeight="600"
          width="auto"
          useBlueTheme={true}
          showLoginPrompt={true}
        />
      )}

      <ComponentWrapper
        filename="liveproject-card.tsx"
        createdBy="Ne Liu"
        description="T5 - Talent receives invitation for a role with a squad- live project card display"
      >
        <HorizontalTabs />
      </ComponentWrapper>

      <StyledH1>T4</StyledH1>
      <ComponentWrapper
        filename="ask-question-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T4 - Ask Question Popup"
      >
        <Button
          variant="outlined"
          onClick={() => setAskQuestionPopupOpen(true)}
        >
          Ask Question Popup
        </Button>
    </ComponentWrapper>
    <ComponentWrapper
        filename="title-and-filter.tsx"
        createdBy="Chelsea Guo"
        description="filter with title and input"
      >
        In 
        http://localhost:3000/t4_project_search
        </ComponentWrapper>
    <ComponentWrapper
        filename="refer-squadmate-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T4 - Refer Squadmate Popup"
      >
        <Button
          variant="outlined"
          onClick={() => setReferSquadmatePopupOpen(true)}
        >
          Refer a Squadmate Popup
        </Button>
    </ComponentWrapper>
    <ComponentWrapper
        filename="invitaion-sent-popup.tsx"
        createdBy="Wenzhuo Li"
        description="Invitation Sent Popup"
      >
        <Button
          variant="outlined"
          onClick={() => setInvitationSentPopupOpen(true)}
        >
          Invitation Sent
        </Button>

    </ComponentWrapper>  
    <ComponentWrapper
        filename="hide-project-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T4 - Hide Project Popup"
      >
        <Button
          variant="outlined"
          onClick={() => setHideProjectPopupOpen(true)}
        >
          Hide Project
        </Button>
    </ComponentWrapper> 
    <ComponentWrapper
        filename="Share-project-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T4 - Share the Project"
      >
        <Button
          variant="outlined"
          onClick={() => setShareProjectPopupOpen(true)}
          
        >
          Share project
        </Button>
    </ComponentWrapper>

    <StyledH1>T2</StyledH1>
      <ComponentWrapper
        filename="lanuage-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T2 - Language imformation"
      >
        <Button
          variant="outlined"
          onClick={() => setLanguagePopupOpen(true)}
        >
          Fill language and level Popup
        </Button>
    </ComponentWrapper>
    <ComponentWrapper
        filename="socialmedia-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T2 - social media imformation"
      >
        <Button
          variant="outlined"
          onClick={() => setSocialMediaPopupOpen(true)}
        >
          Social Media Popup
        </Button>
    </ComponentWrapper>
    <ComponentWrapper
        filename="profile-tool-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T2 - edit profile tool"
      >
        <Button
          variant="outlined"
            onClick={() => setProfileToolPopupOpen(true)}
        >
          Profile Tool Popup
        </Button>
    </ComponentWrapper>
    <ComponentWrapper
        filename="delete-experience-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T2 - delete experience tool"
      >
        <Button
          variant="outlined"
          onClick={() => setDeleteExperiencePopupOpen(true)}
        >
          Delete Experience Popup
        </Button>
    </ComponentWrapper>
    <ComponentWrapper
        filename="add-project-popup.tsx"
        createdBy="Wenzhuo Li"
        description="T2 - add project popup"
      >
        <Button
          variant="outlined"
          onClick={() => setAddProjectPopupOpen(true)}
        >
          Add a project 
        </Button>
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
      {launchMissionPopupOpen && (
        <LaunchMissionPopup
          onClose={() => setlaunchMissionPopupOpen(false)}
          title="Mission Launched"
          description="Your project hub and lifecycle management tools are now available. We recommend booking a kick off call with your Squad."
          confirmButtonText="Confirm"
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
      {hideSquadPopupOpen && (
        <EditProjPopup
          onClose={() => setHideSquadPopupOpen(false)}
          title="Hide this squad"
          description="Please, let as not why you don’t want to see this squad. This will help us to give you better options"
          cancelButtonText="Cancel"
          confirmButtonText="Hide"
          showTextarea={true}
          icon={
            <Image
              key="hideImage"
              src={hideImage}
              alt="Hide Icon"
              width="44"
              height="44"
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
      {isOfferSend && <SendOffer onClose={() => setOfferSendOpen(false)} />}
      {isRoleAdd && <AddRole onClose={() => setAddRoleOpen(false)} />}
      {exitUncompletedPopupOpen && (
        <ExitUncompletedPopup
          onClose={() => setexitUncompletedPopupOpen(false)}
        />
      )}
      {bookInterviewAPopupOpen && (
        <BookInterviewA onClose={() => setbookInterviewAPopupOpen(false)} />
      )}
      {bookInterviewBPopupOpen && (
        <BookInterviewB
          icon={
            <Image
              key="callImage"
              src={callImage}
              alt="call image"
              width="44"
              height="44"
            />
          }
          name="Patricia"
          cancelButtonText="Cancel"
          confirmButtonText="Send interview request"
          onClose={() => setbookInterviewBPopupOpen(false)}
        />
      )}
      {aboutMePopupOpen && (
        <AboutMe onClose={() => setAboutMePopupOpen(false)} />
      )}
      {isCompleteProfilePopupOpen && (
        <CompleteProfilePopup
          onClose={() => setCompleteProfilePopupOpen(false)}
        />
      )}
      {isCompleteSkillsPopupOpen && (
        <CompleteSkillsPopup
          onClose={() => setCompleteSkillsPopupOpen(false)}
        />
      )}
      {isSkillMissingPopupOpen && (
        <RequiredMissingPopup
          onClose={() => setSkillMissingPopupOpen(false)}
          badges={[
            { label: "Label", preset: "outlined_grey" },
            { label: "UX Design", preset: "outlined_grey" },
            { label: "Skill", preset: "outlined_grey" },
          ]}
          title="Required Skills Missing"
          description="Text and supporting text"
          noRequiredButtonLabel="I don't have these skills"
          addRequiredButtonLabel="Add skills"
        />
      )}
      {isToolMissingPopupOpen && (
        <RequiredMissingPopup
          onClose={() => setToolMissingPopupOpen(false)}
          badges={[
            {
              label: "Tool",
              preset: "outlined_grey",
              icon: <img alt="photoshop logo" src="/photoshop.png" />,
            },
            {
              label: "Tool",
              preset: "outlined_grey",
              icon: <img alt="photoshop logo" src="/photoshop.png" />,
            },
          ]}
          title="Required Tools Missing"
          description="Text and supporting text"
          noRequiredButtonLabel="I don't use these tools"
          addRequiredButtonLabel="Add tools"
        />
      )}
      {isLocationMissingPopupOpen && (
        <LocationMissingPopup
          onClose={() => setLocationMissingPopupOpen(false)}
          title="Title about location mismatch"
          description="Text and supporting text"
          noRequiredButtonLabel="I don't live here"
          addRequiredButtonLabel="update my locations"
          imgSrc={Spain}
          imgText="Barcelona"
          imgDescription="Spain"
        />
      )}

      {isCompleteExperiencePopupOpen && (
        <AddExperiencePopup
          title="Add experience"
          onClose={() => setCompleteExperiencePopupOpen(false)}
        />
      )}

      {isRequireDontMatchPopupOpen && (
        <RequireDontMatchPopup
          onClose={() => setRequireDontMatchPopupOpen(false)}
        />
      )}
      {isApplyCancelPopupOpen && (
        <ApplyCancelPopup onClose={() => setApplyCancelPopupOpen(false)} />
      )}
      {isAskQuestionPopupOpen && (
        <AskQuestionPopup onClose={() => setAskQuestionPopupOpen(false)} />
      )}
      {isReferSquadmatePopupOpen && (
        <ReferSquadmatePopup
          onClose={() => setReferSquadmatePopupOpen(false)}
        />
      )}
      {isInvitationSentPopupOpen && (
        <InvitationSentPopup
          onClose={() => setInvitationSentPopupOpen(false)}
        />
      )}
      {isHideProjectPopupOpen && (
        <HideProjectPopup onClose={() => setHideProjectPopupOpen(false)} />
      )}
      {isShareProjectPopupOpen && (
        <ShareProjectPopup onClose={() => setShareProjectPopupOpen(false)} 
        shareLink="join.untitledui.com/my-unique-project"/>
      )}
      {isLanguagePopupOpen && (
        <LanguagePopup onClose={() => setLanguagePopupOpen(false)} />
      )}
      {isSocialMediaPopupOpen && (
        <SocialMediaPopup onClose={() => setSocialMediaPopupOpen(false)} />
      )}
      {isProfileToolPopupOpen && (
        <ProfileToolPopup onClose={() => setProfileToolPopupOpen(false)} />
      )}
      {isDeleteExperiencePopupOpen && (
        <DeleteExperiencePopup
          onClose={() => setDeleteExperiencePopupOpen(false)}
        />
      )}
      {isAddProjectPopupOpen && (
        <AddProjectPopup 
          title="Add a project"
          onClose={() => setAddProjectPopupOpen(false)} 
        />
      )}
    </div>
  );
}
