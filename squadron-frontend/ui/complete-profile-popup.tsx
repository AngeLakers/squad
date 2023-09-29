"use client"
import React from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import { ReactNode } from 'react';
import RightArrowIconButton from "./right-arrow-button";
import { 
    basewhite, 
    borderColor, 
    boxShadow, 
    gray600, 
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
    titleFontWeight
  } from "@/styles/reuseParams";

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
    padding: 24px 24px 16px 24px;
    gap: 4px;
    // border: 2px solid red;
`
const PopupBody = styled.div`
    padding: 0px 24px 24px 24px;
    overflow-y: auto;
    width: 100%;
    max-height: 456px;     
    // border: 3px solid orange;
`
const CompleletPercent = styled.div`
    font-weight: ${mediumFontWeight};
    font-size: ${mediumFontSize};
    line-height: ${mediumLineHeight};
    color: ${warning600};
    display: flex;
    flex-direction: row;
    width: 100%;
    // border: 2px solid orange;
`

const Title = styled.div`
    font-weight: ${titleFontWeight};
    font-size: ${titleFontSize};
    line-height: ${largeLineHeight};
    margin-top: 2%;
    // border: 2px solid red;
`;
const TitleDiscrption = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
    margin-top: 2%;
    // border: 2px solid green;
`
const ProfileItem = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 72px;
    width: 100%;
    // border: 2px solid pink;
`
const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const ItemName = styled.div`
    font-weight: ${mediumFontWeight};
    font-size: ${mediumFontSize};
    line-height: ${mediumLineHeight};
    // border: 2px solid blue;
`
const ItemShortDescrip = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
    // border: 2px solid green;
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
    // border: 2px solid red;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
`;

const openNewPopup = () => {
    alert("open new popup");
}


interface CompleteProfilePopupProps {
    onClose: () => void;
    showDivider?: boolean;
    icon?: ReactNode;
}

const CompleteProfilePopup: React.FC<CompleteProfilePopupProps> = ({ 
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
                    <CompleletPercent>50% Completed</CompleletPercent>
                    <Title>Complete your profile</Title>
                    <TitleDiscrption>Fill up the sections below to complete your profile</TitleDiscrption>
                </PopupHeader>
                <PopupBody>
                    {/* TODO: Need to confirm with the customer:
                            1. Whether the item in this place is consistent with the project filled in T2.
                            2. What's the exact content in "Intro about this
                            3. How to calculate the percentage of completion
                            4. Fill till 100% or all the items in the list" 
                    */}
                    <ProfileItem>
                        <ItemContainer>
                            <ItemName>About me</ItemName>
                            <ItemShortDescrip>Intro about this (+10%)</ItemShortDescrip>
                        </ItemContainer>
                        <ArrowIconButtonContainer>
                            <RightArrowIconButton onClick={openNewPopup}/>
                        </ArrowIconButtonContainer>
                    </ProfileItem>
                    {showDivider &&<Divider />} 
                    <ProfileItem>
                        <ItemContainer>
                            <ItemName>Skills</ItemName>
                            <ItemShortDescrip>Intro about this (+10%)</ItemShortDescrip>
                        </ItemContainer>
                        <ArrowIconButtonContainer>
                            <RightArrowIconButton onClick={openNewPopup}/>
                        </ArrowIconButtonContainer>
                    </ProfileItem>
                    {showDivider &&<Divider />}
                    <ProfileItem>
                        <ItemContainer>
                            <ItemName>Experience</ItemName>
                            <ItemShortDescrip>Intro about this (+10%)</ItemShortDescrip>
                        </ItemContainer>
                        <ArrowIconButtonContainer>
                            <RightArrowIconButton onClick={openNewPopup} />
                        </ArrowIconButtonContainer>
                    </ProfileItem>
                    {showDivider &&<Divider />}
                    <ProfileItem>
                        <ItemContainer>
                            <ItemName>Projects</ItemName>
                            <ItemShortDescrip>Intro about this (+10%)</ItemShortDescrip>
                        </ItemContainer>
                        <ArrowIconButtonContainer>
                            <RightArrowIconButton onClick={openNewPopup}/>
                        </ArrowIconButtonContainer>
                    </ProfileItem>
                    {showDivider &&<Divider />}
                    <ProfileItem>
                        <ItemContainer>
                            <ItemName>Finer Details</ItemName>
                            <ItemShortDescrip>Intro about this (+10%)</ItemShortDescrip>
                        </ItemContainer>
                        <ArrowIconButtonContainer>
                            <RightArrowIconButton onClick={openNewPopup}/>
                        </ArrowIconButtonContainer>
                    </ProfileItem>
                               
                </PopupBody>
            </ContentContainer>
        </PopupComponent>
    );
};

export default CompleteProfilePopup;
