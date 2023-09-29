"use client";
import * as React from "react";
import TalentProfile from "@/ui/talent-profile-card";
import TalentInfo from "@/ui/talent-info-card";
import TalentAnswers from "@/ui/talent-answers";
import TalentNotes from "@/ui/talent-notes";
import TalentDocuments from "@/ui/talent-documents";
import styled from "styled-components";
import TalentSkills, { BadgeData } from "@/ui/talent-skills";
import { StarSVG } from "@/ui/svgs";

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
    icon: <img src="/photoshop.png" />,
    preset: "outlined_grey",
  },
  { label: "Figma", icon: <img src="/figma.png" />, preset: "outlined_grey" },
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
  gap: 32px;
  min-width: fit-content;
  margin: 0 10%;
`;

const TalentInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export default function AllComponents() {
  return (
    <Profile>
      <TalentProfile></TalentProfile>
      <TalentInfo
        title={"Skills & Tools"}
        content={
          <TalentSkills skillsData={mockSkillsData} toolsData={mockToolsData} />
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
  );
}
