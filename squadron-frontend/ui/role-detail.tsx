"use client"
import styled from 'styled-components';
import CustomButton from './custom-button';
import { Badge } from '@/ui/badge';
import CustomBadge from './custom-badge';
import {
    basewhite,
    borderColor,
    boxShadow,
    gray200,
    gray500,
    gray600,
    gray700,
    gray900,
    success700,
    regularFontSize,
    mediumFontSize,
    largeFontSize,
    regularFontWeight,
    mediumFontWeight,
    regularLineHeight,
    mediumLineHeight,
    largeLineHeight,
    fontFamily,
} from "@/styles/reuseParams"
const RoleCardTalent = styled.div`
    align-items: flex-start;
    background-color: ${basewhite};
    border: 1.5px solid;
    border-color: ${gray200};
    border-radius: 12px;
    box-shadow: ${boxShadow};
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    align-items: center;
`
const RoleCardTalentStatusBar = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 16px 24px 16px 24px;
    position: relative;
    width: 100%;
    border-bottom: 1.5px solid ${borderColor};
`
const RoleCardTalentBody = styled.div`
    width: 100%;
    padding: 16px 24px 16px 24px;
    gap: 20px;
`
const RoleLogoTitle = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    gap: 8px;
    position: relative;
    justify-content: space-between;
`
const RoleLogo = styled.div`
    background-color: #f5f5f5;
    border-radius: 28px;
    height: 56px;
    position: relative;
    width: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const RoleTitle = styled.div`
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 3px;
    position: relative;
    color: ${gray900};
    font-weight: ${mediumFontWeight};
    line-height: ${largeLineHeight};
    font-size: ${largeFontSize};
`
const RolePositionDiscription = styled.div`
    border-color: ${borderColor};
    align-self: stretch;
    color: ${gray600};
    font-family: ${fontFamily};
    font-size: ${regularFontSize};
    font-weight: ${regularFontWeight};
    letter-spacing: 0;
    line-height: ${regularLineHeight};
    position: relative;

`
const RoleRateHourLocationDate = styled.div`
    border-bottom: 1.5px solid;
    border-color: ${borderColor};
    padding: 2% 0;
    
`
const RequiredRecommendedSkillTool = styled.div`
    padding: 2% 0;
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
`
const IconAndCategory = styled.div`

    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 4px;
    position: relative; 
    margin-right: 2%;
`
const IconInRateHourLocationDate = styled.div`
    height: 20px !important;
    position: relative !important;
    width: 20px !important;

`

const TextInRateHourLocationDate = styled.div`
    color: ${gray700};
    font-family: ${fontFamily};
    font-size: ${mediumFontSize};
    font-weight: ${regularFontWeight};
    letter-spacing: 0;
    line-height: ${mediumLineHeight};
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
`
const SkillTitle = styled.div`
    color: ${gray900};
    font-family: ${fontFamily};
    font-size: ${regularFontSize};
    font-weight: ${mediumFontWeight};
    letter-spacing: 0;
    line-height: ${regularLineHeight};
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;

`
const ButtonContainer = styled.div`
    display: inline-flex;
    flex: 0 0 auto;
    gap: 24px;
    position: relative;

    margin-left:auto;
    margin-right: 2%;
`
const BadgeContainer = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    gap: 16px;
    position: relative;
`
const RoleIntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`
const TitleAndLogoContainer = styled.div`
    align-items: center;
    display: inline-flex;
    flex-direction: row;
    gap: 16px;
    position: relative;
`
const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    margin-top: 20px;
`;
interface RoleDetailProps {
    status?: string[];
    roleLogoUrl?: string;
    positionName?: string;
    description?: string;
    startDate?: string;
    hourlyRateMin?: number;
    hourlyRateMax?: number;
    expectedHoursPerWeek?: number;
    location?: string;
    skills?: string[];
    recommendedSkills?: string[];
    tools?: string[];
    onClick?: () => void;
    showDivider?: boolean;
}
const RoleCard: React.FC<RoleDetailProps> = ({
    status,
    roleLogoUrl,
    positionName,
    description,
    startDate,
    hourlyRateMin,
    hourlyRateMax,
    expectedHoursPerWeek,
    location,
    skills,
    tools,
    recommendedSkills,
    showDivider = true,
    onClick
}) => {

    return (
        <RoleCardTalent>
            <RoleCardTalentStatusBar>
                {status?.map((status, index) => (
                    <CustomBadge label={status} preset={"green"} />
                ))}
            </RoleCardTalentStatusBar>
            <RoleCardTalentBody>
                <RoleIntroContainer>
                    <RoleLogoTitle>
                        <TitleAndLogoContainer>
                            <RoleLogo>
                                <img src={roleLogoUrl} alt="Role Icon" />
                            </RoleLogo>
                            <RoleTitle>
                                {positionName}
                            </RoleTitle>
                        </TitleAndLogoContainer>
                        <ButtonContainer>
                            <CustomButton label={"Refer"} preset='outlined' />
                            <CustomButton label={"Apply"} preset='default' onClick={onClick} />
                        </ButtonContainer>
                    </RoleLogoTitle>
                    <RolePositionDiscription>
                        {description}
                    </RolePositionDiscription>
                </RoleIntroContainer>
                {showDivider && <Divider />}

                <RoleRateHourLocationDate>
                    <IconAndCategory>
                        <IconInRateHourLocationDate >
                            <img src="/icon/coins.svg" alt="Coins Icon" />
                        </IconInRateHourLocationDate>
                        <TextInRateHourLocationDate>
                            {hourlyRateMin}-{hourlyRateMax}/h
                        </TextInRateHourLocationDate>
                    </IconAndCategory>
                    <IconAndCategory>
                        <IconInRateHourLocationDate >
                            <img src="/icon/clock.svg" alt="Coins Icon" />
                        </IconInRateHourLocationDate>
                        <TextInRateHourLocationDate>
                            {expectedHoursPerWeek} h/week
                        </TextInRateHourLocationDate>
                    </IconAndCategory>
                    <IconAndCategory>
                        <IconInRateHourLocationDate >
                            <img src="/icon/locationPin.svg" alt="Coins Icon" />
                        </IconInRateHourLocationDate>
                        <TextInRateHourLocationDate>
                            {location}
                        </TextInRateHourLocationDate>
                    </IconAndCategory>
                    <IconAndCategory>
                        <IconInRateHourLocationDate >
                            <img src="/icon/calendar.svg" alt="Coins Icon" />
                        </IconInRateHourLocationDate>
                        <TextInRateHourLocationDate>
                            {startDate}
                        </TextInRateHourLocationDate>
                    </IconAndCategory>
                </RoleRateHourLocationDate>
                <RequiredRecommendedSkillTool>
                    <SkillTitle>Required skills</SkillTitle>
                    <BadgeContainer>
                        {
                            skills?.map((skill, index) => (
                                <CustomBadge label={skill} preset={"outlined_light_green"} />
                            ))
                        }
                    </BadgeContainer>
                    <SkillTitle>Recommended skills</SkillTitle>
                    <BadgeContainer>
                        {
                            recommendedSkills?.map((skill, index) => (
                                <CustomBadge label={skill} preset={"outlined_grey"} />
                            ))
                        }
                    </BadgeContainer>
                    <SkillTitle>Tools</SkillTitle>
                    <BadgeContainer>
                        {
                            tools?.map((tool, index) => (
                                <CustomBadge
                                    label={tool}
                                    preset={"outlined_grey"}
                                    icon={<img alt="tool logo" src="/icon/toolLogoSample.svg" />} />
                            ))
                        }
                    </BadgeContainer>
                </RequiredRecommendedSkillTool>
            </RoleCardTalentBody>
        </RoleCardTalent>
    )
};

export default RoleCard;