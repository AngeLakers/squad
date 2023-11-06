"use client"
import * as React from "react";
import { useState } from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import { ReactNode } from 'react';
import RightArrowIconButton from "./right-arrow-button";
import CompleteSkillsPopup from "./complete-profile-skills-popup";
import AddExperiencePopup from "./complete-profile-addexperience-popup";
import AddProjectPopup from "@/ui/add-project-popup";
import SocialMediaPopup from "@/ui/socialmedia-popup";
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
import AboutMe from "./about-me-popup";
import { on } from "events";

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
`
const PopupBody = styled.div`
    padding: 0px 24px 24px 24px;
    overflow-y: auto;
    width: 100%;
    max-height: 456px;
`
const CompleletPercent = styled.div`
    font-weight: ${mediumFontWeight};
    font-size: ${mediumFontSize};
    line-height: ${mediumLineHeight};
    color: ${warning600};
    display: flex;
    flex-direction: row;
    width: 100%;
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
`
const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const ItemName = styled.div`
    font-weight: ${mediumFontWeight};
    font-size: ${mediumFontSize};
    line-height: ${mediumLineHeight};
`
const ItemShortDescrip = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
`
const ArrowIconButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
`
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
    icon,
}) => {
    const [aboutMePopupOpen, setAboutMePopupOpen] = useState(false);
    const openAboutMePopup = () => {
        setAboutMePopupOpen(true);
    };
    const [isCompleteSkillsPopupOpen, setCompleteSkillsPopupOpen] = useState(false);
    const openSkillsPopup = () => {
        setCompleteSkillsPopupOpen(true);
    };

    const [isAddExperiencePopupOpen, setAddExperiencePopupOpen] = useState(false);
    const openExperiencePopup = () => {
        setAddExperiencePopupOpen(true);
    };
    const [isAddProjectPopupOpen, setAddProjectPopupOpen] = useState(false);
    const openProjectPopup = () => {
        setAddProjectPopupOpen(true);
    };
    const [isSocialMediaPopupOpen, setSocialMediaPopupOpen] = useState(false);
    const openSocialMediaPopup = () => {
        setSocialMediaPopupOpen(true);
    };
    return (
        <>
            <PopupComponent onClose={onClose}
                width="27.8%"
                minWidth="400px"
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
                                <RightArrowIconButton onClick={openAboutMePopup} />
                            </ArrowIconButtonContainer>
                        </ProfileItem>
                        {showDivider && <Divider />}
                        <ProfileItem>
                            <ItemContainer>
                                <ItemName>Skills</ItemName>
                                <ItemShortDescrip>Intro about this (+10%)</ItemShortDescrip>
                            </ItemContainer>
                            <ArrowIconButtonContainer>
                                <RightArrowIconButton onClick={openSkillsPopup} />
                            </ArrowIconButtonContainer>
                        </ProfileItem>
                        {showDivider && <Divider />}
                        <ProfileItem>
                            <ItemContainer>
                                <ItemName>Experience</ItemName>
                                <ItemShortDescrip>Intro about this (+10%)</ItemShortDescrip>
                            </ItemContainer>
                            <ArrowIconButtonContainer>
                                <RightArrowIconButton onClick={openExperiencePopup} />
                            </ArrowIconButtonContainer>
                        </ProfileItem>
                        {showDivider && <Divider />}
                        <ProfileItem>
                            <ItemContainer>
                                <ItemName>Projects</ItemName>
                                <ItemShortDescrip>Intro about this (+10%)</ItemShortDescrip>
                            </ItemContainer>
                            <ArrowIconButtonContainer>
                                <RightArrowIconButton onClick={openProjectPopup} />
                            </ArrowIconButtonContainer>
                        </ProfileItem>
                        {showDivider && <Divider />}
                        <ProfileItem>
                            <ItemContainer>
                                <ItemName>Finer Details</ItemName>
                                <ItemShortDescrip>Intro about this (+10%)</ItemShortDescrip>
                            </ItemContainer>
                            <ArrowIconButtonContainer>
                                <RightArrowIconButton onClick={openNewPopup} />
                            </ArrowIconButtonContainer>
                        </ProfileItem>
                        {showDivider && <Divider />}
                        <ProfileItem>
                            <ItemContainer>
                                <ItemName>Social Links</ItemName>
                                <ItemShortDescrip>Intro about this (+10%)</ItemShortDescrip>
                            </ItemContainer>
                            <ArrowIconButtonContainer>
                                <RightArrowIconButton onClick={openSocialMediaPopup} />
                            </ArrowIconButtonContainer>
                        </ProfileItem>
                    </PopupBody>
                </ContentContainer>
            </PopupComponent>
            {aboutMePopupOpen && (<AboutMe onClose={() => setAboutMePopupOpen(false)} />)};
            {isCompleteSkillsPopupOpen && <CompleteSkillsPopup onClose={() => setCompleteSkillsPopupOpen(false)}/>}
            {isAddExperiencePopupOpen && <AddExperiencePopup title="Add experience" onClose={() => setAddExperiencePopupOpen(false)}/>}
            {isAddProjectPopupOpen && <AddProjectPopup title="Add project" onClose={() => setAddProjectPopupOpen(false)}/>}
            {isSocialMediaPopupOpen && <SocialMediaPopup onClose={() => setSocialMediaPopupOpen(false)}/>}
        </>
    );
};

export default CompleteProfilePopup;
