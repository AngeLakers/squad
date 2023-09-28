import React from "react";
import styled from "styled-components";
import CustomBadge from "./custom-badge";

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkillTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const Skillbadges = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`;

export interface BadgeData {
  label: string;
  icon?: React.ReactNode;
  preset:
    | "green"
    | "red"
    | "outlined_grey"
    | "outlined_green"
    | "outlined_light_green";
}

interface TalentSkillsProps {
  skillsData: BadgeData[];
  toolsData: BadgeData[];
}

const TalentSkills: React.FC<TalentSkillsProps> = ({
  skillsData,
  toolsData,
}) => {
  return (
    <Skills>
      <SkillContainer>
        <SkillTitle>Skills</SkillTitle>
        <Skillbadges>
          {skillsData.map((badge, index) => (
            <CustomBadge
              key={index}
              label={badge.label}
              icon={badge.icon}
              preset={badge.preset}
            ></CustomBadge>
          ))}
        </Skillbadges>
      </SkillContainer>
      <SkillContainer>
        <SkillTitle>Tools</SkillTitle>
        <Skillbadges>
          {toolsData.map((badge, index) => (
            <CustomBadge
              key={index}
              label={badge.label}
              icon={badge.icon}
              preset={badge.preset}
            ></CustomBadge>
          ))}
        </Skillbadges>
      </SkillContainer>
    </Skills>
  );
};

export default TalentSkills;
