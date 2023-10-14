"use client";
import * as React from "react";
import TalentProfile, { ProfileDataType } from "@/ui/talent-profile-card";
import TalentInfo from "@/ui/layout-card";
import TalentAnswers from "@/ui/talent-answers";
import TalentNotes from "@/ui/talent-notes";
import TalentDocuments from "@/ui/talent-documents";
import styled from "styled-components";
import TalentSkills, { BadgeData } from "@/ui/talent-skills";
import { StarSVG } from "@/ui/svgs";
import SquadNav from "@/ui/squad-navigation";
import CustomProjectHeader from "@/ui/custom-project-header";

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

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  margin: 50px 10%;

  & > * + * {
    margin-top: 32px;
  }

  & > :nth-child(1) + :nth-child(2) {
    margin-top: 0;
  }
`;

const TalentInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export default function AllComponents() {
  return (
    <>
      <SquadNav
        Top={true}
        squadName="Suggested Squad #1"
        talentInfo="Talent 1 of 5"
      />

      <Profile>
      <CustomProjectHeader
          backgroundImage="/images/testCustomHeaderBackgroud.png"
          avatarImagePath="/portraitA.png"
          avatarHeight={"89px"}
          avatarWidth={"89px"}
          title1="Product Manager"
          title2="Patricia Montero"
          title3="Sydney, AU"
          button={{
            isVisible: true,
            text: "Interview",
            backgroundColor: "#D0FC4A",
            textColor: "#384250",
          }}
          shareIcon={{
            isVisible: true,
            color: "#D0FC4A",
            onClick: () => {
              console.log("Share icon clicked!");
            },
          }}
          starIcon={{
            isVisible: true,
            color: "#D0FC4A",
            onClick: () => {
              console.log("Star icon clicked!");
            },
          }}
        />
        <TalentProfile data={mockProfileData} />
        <TalentInfo
          title={"Skills & Tools"}
          content={
            <TalentSkills
              skillsData={mockSkillsData}
              toolsData={mockToolsData}
            />
          }
        />
        <TalentInfo
          title={"Talent answers"}
          content={<TalentAnswers qaData={mockQAData} />}
        />

        <TalentInfoWrapper>
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
          <TalentInfo
            title={"Documents attached"}
            content={<TalentDocuments documents={mockDocumentData} />}
          />
        </TalentInfoWrapper>
      </Profile>
      <SquadNav
        Top={false}
        squadName="Suggested Squad #1"
        talentInfo="Talent 1 of 5"
      />
    </>
  );
}
