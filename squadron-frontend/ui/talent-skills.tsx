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

interface SkillTitleProps {
  fontSize: string;
}

const SkillTitle = styled.div<SkillTitleProps>`
  font-size: ${(props) => props.fontSize};
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
  fontSize?: string;
}

const TalentSkills: React.FC<TalentSkillsProps> = ({
  fontSize = "18px",
  skillsData,
  toolsData,
}) => {
  return (
    <Skills>
      <SkillContainer>
        <SkillTitle fontSize={fontSize}>Skills</SkillTitle>
        <Skillbadges>
          {skillsData.map((badge, index) => (
            <CustomBadge
              key={index}
              label={badge.label}
              icon={badge.icon}
              preset={badge.preset}
            />
          ))}
        </Skillbadges>
      </SkillContainer>
      <SkillContainer>
        <SkillTitle fontSize={fontSize}>Tools</SkillTitle>
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
