'use client';
import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

type BadgeProps = {
  text: string;
  iconUrl?: string;
  borderColor?: string;
  borderThickness?: string;
  backgroundColor?: string;
  textColor?: string;
};

type SkillSectionProps = {
  title: string;
  badges?: BadgeProps[];
};

type SkillProps = {
  requiredSkills?: SkillSectionProps;
  recommendedSkills?: SkillSectionProps;
  tools?: SkillSectionProps;
};


const Badge = styled.div<BadgeProps>`
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  margin: 0 8px;
  border: ${(props) => props.borderThickness || '1px'} solid ${(props) => props.borderColor || '#4d5761'};
  background-color: ${(props) => props.backgroundColor || 'white'};
  color: ${(props) => props.textColor || '#4d5761'};
`;

const SkillAvatar = styled.img`
  border-radius: 8px;
  height: 16px;
  width: 16px;
  margin-right: 8px;
`;

const SkillTitle = styled(Typography)`
  color: #111927;
  font-family: "Inter", Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 16px;
`;

const SkillSection = styled.div`
  margin-bottom: 16px;
`;

const Skill: React.FC<SkillProps> = ({ requiredSkills, recommendedSkills, tools }) => (
  <div>
    {requiredSkills && (
      <SkillSection>
        <SkillTitle variant="h6">{requiredSkills.title}</SkillTitle>
        <div>
          {requiredSkills.badges?.map((badge, index) => (
            <Badge key={index} {...badge}>
              {badge.iconUrl && <SkillAvatar src={badge.iconUrl} />}
              <Typography variant="body2">{badge.text}</Typography>
            </Badge>
          ))}
        </div>
      </SkillSection>
    )}

    {recommendedSkills && (
      <div>
        {recommendedSkills && (
            <SkillSection>
                <SkillTitle variant="h6">{recommendedSkills.title}</SkillTitle>
                <div>
                    {recommendedSkills.badges?.map((badge, index) => (
                        <Badge key={index} {...badge}>
                            {badge.iconUrl && <SkillAvatar src={badge.iconUrl} />}
                            <Typography variant="body2">{badge.text}</Typography>
                        </Badge>
                    ))}
                </div>
            </SkillSection>
        )}
      </div>
    )}

    {tools && (
        <div>
            {tools && (
                <SkillSection>
                    <SkillTitle variant="h6">{tools.title}</SkillTitle>
                    <div>
                        {tools.badges?.map((badge, index) => (
                            <Badge key={index} {...badge}>
                                {badge.iconUrl && <SkillAvatar src={badge.iconUrl} />}
                                <Typography variant="body2">{badge.text}</Typography>
                            </Badge>
                        ))}
                    </div>
                </SkillSection>    
            )}
        </div>
    )}
  </div>
);

Skill.defaultProps = {
  requiredSkills: { title: "", badges: [] },
  recommendedSkills: { title: "", badges: [] },
  tools: { title: "", badges: [] }
};

export default Skill;