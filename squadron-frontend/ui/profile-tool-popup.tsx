"use client"
import React from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import { ReactNode } from 'react';
import CustomButton from "./custom-button";
import CustomBadge from "./custom-badge";
import photoshopIcon from '../public/photoshop.png';
import Image, { StaticImageData } from 'next/image';
import { PhotoShopSVG } from "./svgs";

import {
    basewhite,
    gray200,
    gray300,
    gray600,
    gray700,
    primary600,
    regularFontSize,
    titleFontSize,
    regularFontWeight,
    mediumFontWeight,
    regularLineHeight,
    largeLineHeight,
    titleFontWeight,
} from "@/styles/reuseParams";
import { StarBorderSVG, StarSVG } from "./svgs";

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 12px;
`;
const PopupHeader = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 24px 20px 24px;
    gap: 4px;
`
const PopupBody = styled.div`
    padding: 24px 24px 0px 24px;
    gap: 24px;
    overflow-y: auto;
    width: 100%;  
`
const PopupFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    width: 100%;
    padding: 32px 0px 0px 0px;
    gap: 12px;
`
const BodyContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;
    width: 100%;
`
const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;
    width: 100%;
`
const ItemTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-weight: ${titleFontWeight};
    font-size: ${titleFontSize};
    line-height: ${largeLineHeight};
    margin-top: 2%;
`;
const TitleDiscrption = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
    margin-top: 2%;
`
const SecondTitle = styled.div`
    color: ${gray700};
    font-weight: ${mediumFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
`
const SkillBadgeContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    max-height: 80px;
    width: 100%;
    border: 2px solid ${gray300};
    border-radius: 8px;
    padding: 12px 14px 12px 14px;
    gap: 8px;
    overflow-y: auto;

`
const ItemShortDescrip = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
`

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
`;

const ButtonContainer = styled.div`
    padding: 12px 24px 24px 24px;
    gap: 12px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;
interface ProfileToolProps {
    onClose: () => void;
    showDivider?: boolean;
    icon?: ReactNode;
}

const ProfileToolPopup: React.FC<ProfileToolProps> = ({
    onClose,
    showDivider = true,
    icon
}) => {
    return (
        <PopupComponent onClose={onClose}
            width="752px"
            maxHeightPercent={0.3}
        >
            <ContentContainer>
                <PopupHeader>
                    <Title>Tools</Title>
                    <TitleDiscrption>blablablabla</TitleDiscrption>
                </PopupHeader>
                {showDivider && <Divider />}
                <PopupBody>
                    <BodyContentContainer>

                        <ItemContainer>
                            <ItemTitleContainer>
                                <SecondTitle>Tools</SecondTitle>
                            </ItemTitleContainer>
                            <SkillBadgeContainer>
                                <CustomBadge
                                    label="Skill name"
                                    preset="outlined_grey"
                                    icon={<PhotoShopSVG/>}
                                ></CustomBadge>
                                
                                <CustomBadge
                                    label="Skill name"
                                    preset="outlined_grey"
                                    icon={<PhotoShopSVG/>}
                                ></CustomBadge>
                                <CustomBadge
                                    label="Skill name"
                                    preset="outlined_grey"
                                    icon={<PhotoShopSVG/>}
                                ></CustomBadge>
                            </SkillBadgeContainer>
                        </ItemContainer>
                    </BodyContentContainer>
                </PopupBody>
                <PopupFooter>
                    {showDivider && <Divider />}
                    <ButtonContainer>
                        <CustomButton
                            label="Cancel"
                            preset="outlined"
                            hoverColor={gray200}
                            textColor={gray700}
                            borderColor={gray300}
                            onClick={onClose}
                        ></CustomButton>
                        <CustomButton
                            label="Update"
                            preset="outlined"
                            backgroundColor={primary600}
                            textColor={basewhite}
                            borderColor={primary600}
                        ></CustomButton>
                    </ButtonContainer>
                </PopupFooter>
            </ContentContainer>
        </PopupComponent>
    );
};

export default ProfileToolPopup;
