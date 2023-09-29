"use client"
import React from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import { ReactNode } from 'react';
import RightArrowIconButton from "./right-arrow-button";
import CustomButton from "./custom-button";
import {
    basewhite,
    borderColor,
    boxShadow,
    gray200,
    gray300,
    gray600,
    gray700,
    gray900,
    primary600,
    regularFontSize,
    mediumFontSize,
    titleFontSize,
    xxlargeFontSize,
    regularFontWeight,
    mediumFontWeight,
    regularLineHeight,
    mediumLineHeight,
    largeLineHeight,
    xxxlargeLineHeight,
    fontFamily,
    regularLetterSpacing,
    warning600,
    titleFontWeight,
} from "@/styles/reuseParams";

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 12px;
    border: 2px solid blue;
`;
const PopupHeader = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 24px 16px 24px;
    gap: 4px;
    border: 2px solid green;
`
const PopupBody = styled.div`
    padding: 0px 24px 24px 24px;
    overflow-y: auto;
    width: 100%;
    max-height: 456px;     
    border: 3px solid orange;
`
const PopupFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: right;
    justify-content: center;
    width: 100%;
    padding: 32px, 0px, 0px, 0px;
    gap: 12px;
    border: 2px solid green;
`

const Title = styled.div`
    font-weight: ${titleFontWeight};
    font-size: ${titleFontSize};
    line-height: ${largeLineHeight};
    margin-top: 2%;
    border: 2px solid red;
`;
const TitleDiscrption = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
    margin-top: 2%;
    border: 2px solid red;
`
const SecondTitle = styled.div`
    font-weight: ${mediumFontWeight};
    font-size: ${mediumFontSize};
    line-height: ${mediumLineHeight};
    margin-top: 2%;
    border: 2px solid red;
`
const SecondTitleDiscrption = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
    margin-top: 2%;
    border: 2px solid red;
`
const SkillBadgeContainer = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 72px;
    width: 100%;
    border: 2px solid pink;
`
const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid yellow;
`
const ItemShortDescrip = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
    border: 2px solid green;
`
const ArrowIconButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 2px solid violet;
`

const Description = styled.p`
    margin: 2% 3%;
    text-align: center;
    margin-bottom:8%;
    border: 2px solid red;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
`;

const ButtonContainer = styled.div`
    padding: 24px;
    display: flex;
    justify-content: space-around;
    width: 100%;

    border: 2px solid red;
`;

const openNewPopup = () => {
    alert("open new popup");
}


interface CompleteSkillsPopupProps {
    onClose: () => void;
    showDivider?: boolean;
    icon?: ReactNode;
}

const CompleteSkillsPopup: React.FC<CompleteSkillsPopupProps> = ({
    onClose,
    showDivider = true,
    icon
}) => {
    return (
        <PopupComponent onClose={onClose}
            width="27.8%"
            top="calc(50% - {finalHeight}/2)"
            left="calc(50% - {width}/2)"
            maxHeightPercent={0.3}
        >
            <ContentContainer>
                <PopupHeader>
                    <Title>Skills</Title>
                    <TitleDiscrption>this is skills complete popup this is skills complete popup this is skills complete popup</TitleDiscrption>
                </PopupHeader>
                {showDivider && <Divider />}
                <PopupBody>
                    {/* TODO: Need to confirm with the customer:
                            1. Whether the item in this place is consistent with the project filled in T2.
                            2. What's the exact content in "Intro about this
                            3. How to calculate the percentage of completion
                            4. Fill till 100% or all the items in the list" 
                    */}
                    <SecondTitle>My skills</SecondTitle>
                    <SecondTitleDiscrption>balabalabal</SecondTitleDiscrption>
                    <SkillBadgeContainer>
                        <ItemContainer>bala</ItemContainer>
                    </SkillBadgeContainer>
                    {showDivider && <Divider />}
                    <SkillBadgeContainer>
                        <ItemContainer>

                            <ItemShortDescrip>Intro about this (+10%)</ItemShortDescrip>
                        </ItemContainer>
                        <ArrowIconButtonContainer>
                            <RightArrowIconButton onClick={openNewPopup} />
                        </ArrowIconButtonContainer>
                    </SkillBadgeContainer>
                    {showDivider && <Divider />}
                    <SkillBadgeContainer>
                        <ItemContainer>

                            <ItemShortDescrip>Intro about this (+10%)</ItemShortDescrip>
                        </ItemContainer>
                        <ArrowIconButtonContainer>
                            <RightArrowIconButton onClick={openNewPopup} />
                        </ArrowIconButtonContainer>
                    </SkillBadgeContainer>
                    {showDivider && <Divider />}
                    <SkillBadgeContainer>
                        <ItemContainer>

                            <ItemShortDescrip>Intro about this (+10%)</ItemShortDescrip>
                        </ItemContainer>
                        <ArrowIconButtonContainer>
                            <RightArrowIconButton onClick={openNewPopup} />
                        </ArrowIconButtonContainer>
                    </SkillBadgeContainer>
                    {showDivider && <Divider />}
                    <SkillBadgeContainer>
                        <ItemContainer>

                            <ItemShortDescrip>Intro about this (+10%)</ItemShortDescrip>
                        </ItemContainer>
                        <ArrowIconButtonContainer>
                            <RightArrowIconButton onClick={openNewPopup} />
                        </ArrowIconButtonContainer>
                    </SkillBadgeContainer>

                </PopupBody>
                <PopupFooter>
                    {showDivider && <Divider />}
                    <ButtonContainer>
                        <CustomButton
                            label="Cancel"
                            preset="outlined"
                            onClick={onClose}
                            hoverColor={gray200}
                            textColor={gray700}
                            boarderColor={gray300}
                        ></CustomButton>
                        <CustomButton
                            label="Update"
                            preset="outlined"
                            onClick={onClose}
                            backgroundColor={primary600}
                            textColor={basewhite}
                            boarderColor={primary600}
                        ></CustomButton>
                    </ButtonContainer>
                </PopupFooter>
            </ContentContainer>
        </PopupComponent>
    );
};

export default CompleteSkillsPopup;
