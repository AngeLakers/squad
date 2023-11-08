"use client";
import * as React from "react";
import styled, { css } from "styled-components";
import { SimpleHeader } from "@/ui/simple-header";
import Footer from "@/ui/footer";
import { AvatarSVG } from "@/ui/svgs";
import CustomButton from "@/ui/custom-button";
import ProgressBar from "@/ui/progress-bar";
import { Divider } from "@mui/material";
import Experience from "@/ui/experience";
import Skill from "@/ui/skill";
import AboutYou from "@/ui/profile-setup/about-you";
import Skills from "@/ui/profile-setup/skill";
import Projects from "@/ui/projects";
import FinerDetails from "@/ui/profile-setup/finer-details";
import FinnerDetail from "@/ui/finner-detail";

const ABOUT_YOU_LABEL = "About You";
const SKILL_LABEL = "Skill";
const EXPERIENCE_LABEL = "Experience";
const PROJECTS_LABEL = "Projects";
const FINER_DETAILS_LABEL = "Finer Details";

const Mainbody = styled.div`
    min-height: calc(100vh - 131px);
    background-color: #F9FAFB;
    width: 100%;
    padding: 34px 112px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const ProfileNavContainer = styled.div`
    min-width: 384px;
    width: 31%;
    height: 497px;
    padding: 24px;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    box-sizing: border-box;
    box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.06);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 30px;
    background-color: white;
`
const ProfileNavAvatarContainer = styled.div`
    width: 100%;
    height: 56px;
`
const ProfileNavDescContainer = styled.div`
    width: 100%;
    height: 28px;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
`
const ProfileNavButtonsContainer = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
`
interface ProfileNavButtonProps {
    isActive: boolean;
}
const ProfileNavButton = styled.div<ProfileNavButtonProps>`
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 12px 16px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    ${props => props.isActive && css`
        background-color: #F3F4F6;
    `}
`
const ProfileSetupContainer = styled.div`
    min-width: 800px;
    width: 65%;
    box-sizing: border-box;
`

export default function T2() {
    const [shownLabel, setShownLabel] = React.useState(ABOUT_YOU_LABEL);
    const [completeProgress, setCompleteProgress] = React.useState(10);
    const [sectionProgressMap, setSectionProgressMap] = React.useState(new Map<string, number>(
        [
            [ABOUT_YOU_LABEL, 0],
            [SKILL_LABEL, 0],
            [EXPERIENCE_LABEL, 0],
            [PROJECTS_LABEL, 0],
            [FINER_DETAILS_LABEL, 0]
        ]
    ));
    const updateSectionProgress = (section: string, progress: number) => {
        const updatedMap = new Map(sectionProgressMap);
        updatedMap.set(section, progress);
        setSectionProgressMap(updatedMap);
    };
    const handleNavClick = (label: string) => {
        switch (label) {
            case ABOUT_YOU_LABEL:
            case SKILL_LABEL:
            case EXPERIENCE_LABEL:
            case PROJECTS_LABEL:
            case FINER_DETAILS_LABEL:
                updateSectionProgress(label, 10)
                setShownLabel(label);
                break;
            default:
                console.log("default");
                // unexpected value
                console.error("Unexpected value: " + label);
                break;
        }
    }

    const profileSetupContent = (section: string) => {
        switch (section) {
            case ABOUT_YOU_LABEL:
                return (<AboutYou />)
            case SKILL_LABEL:
                return (<Skill />)
            case EXPERIENCE_LABEL:
                return (<Experience />)
            case PROJECTS_LABEL:
                return (<Projects />)
            case FINER_DETAILS_LABEL:
                return (<FinnerDetail 
                //rewrite the container style in finner-detail.tsx
                />)
            default:
                console.error("Unexpected value: " + section);
                break;
        }
    }
    
    return (
        <>
            <SimpleHeader />
            <Mainbody>
                <ProfileNavContainer>
                    <ProfileNavAvatarContainer>
                        <AvatarSVG />
                    </ProfileNavAvatarContainer>
                    <ProfileNavDescContainer>
                        Your profile is {completeProgress}% complete
                    </ProfileNavDescContainer>
                    <ProgressBar progress={completeProgress}/>
                    <Divider />
                    <ProfileNavButtonsContainer>
                        <ProfileNavButton isActive={ABOUT_YOU_LABEL === shownLabel}>
                            <CustomButton preset="text" textColor="#101828" fontSize="14px" fontWeight="500" label={ABOUT_YOU_LABEL} 
                            onClick={() => handleNavClick(ABOUT_YOU_LABEL)}/>
                            <div>{sectionProgressMap.get(ABOUT_YOU_LABEL)}%</div>
                        </ProfileNavButton>
                        <ProfileNavButton isActive={SKILL_LABEL === shownLabel}>
                            <CustomButton preset="text" textColor="#101828" fontSize="14px" fontWeight="500"
                            label={SKILL_LABEL} 
                            onClick={() => handleNavClick(SKILL_LABEL)}/>
                            <div>{sectionProgressMap.get(SKILL_LABEL)}%</div>
                        </ProfileNavButton>
                        <ProfileNavButton isActive={EXPERIENCE_LABEL === shownLabel}>
                            <CustomButton preset="text" textColor="#101828" fontSize="14px" fontWeight="500" label={EXPERIENCE_LABEL} 
                            onClick={() => handleNavClick(EXPERIENCE_LABEL)}/>
                            <div>{sectionProgressMap.get(EXPERIENCE_LABEL)}%</div>
                        </ProfileNavButton>
                        <ProfileNavButton isActive={PROJECTS_LABEL === shownLabel}>
                            <CustomButton preset="text" textColor="#101828" fontSize="14px" fontWeight="500" label={PROJECTS_LABEL} 
                            onClick={() => handleNavClick(PROJECTS_LABEL)}/>
                            <div>{sectionProgressMap.get(PROJECTS_LABEL)}%</div>
                        </ProfileNavButton>
                        <ProfileNavButton isActive={FINER_DETAILS_LABEL === shownLabel}>
                            <CustomButton preset="text" textColor="#101828" fontSize="14px" fontWeight="500" label={FINER_DETAILS_LABEL} 
                            onClick={() => handleNavClick(FINER_DETAILS_LABEL)}/>
                            <div>{sectionProgressMap.get(FINER_DETAILS_LABEL)}%</div>
                        </ProfileNavButton>
                    </ProfileNavButtonsContainer>
                </ProfileNavContainer>
                <ProfileSetupContainer>
                    {profileSetupContent(shownLabel)}
                </ProfileSetupContainer>
            </Mainbody>

            <Footer 
                isRLeftButtonVisible={false}
                isRMiddleButtonVisible={true}
                rMiddleButtonLabel="Back"
                rRightButtonLabel="Next"
                isButtonDisabled={false}

            />

        </>
    );
}