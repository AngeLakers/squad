"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import YouTube, { YouTubeProps } from "react-youtube";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import CustomProjectHeader from './custom-project-header';
import CustomButton from './custom-button';
import AskQuestionPopup from './ask-question-popup';
// import CustomProjectHeader from './custom-project-header-update';
 
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
    regularLetterSpacing
} from "@/styles/reuseParams";


const ProjectCardTalent = styled.div`
    align-items: center;
    background-color: ${basewhite};
    border: 1px solid;
    border-color: #f8f9fb;
    border-radius: 12px;
    box-shadow: ${boxShadow};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    width: 100%;
`
const ProjectCardDetails = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 64px;
    padding: 24px 32px;
    position: relative;
    width: 100%;
`
const ProjectCardBody = styled.div`
    align-items: flex-start;
    background-color:#f9fafb;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 16px 24px;
    position: relative;
    width: 384px;
`
const CompanyDetail = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 32px;
    position: relative;
    width: 100%;
    border-bottom: 3px solid ${borderColor};
`
const CompanyProfile = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
    width: 100%;
`
const CompanyLogoName = styled.div`
    align-items: center;
    flex: 0 0 auto;
    gap: 8px;
    position: relative;
    display:flex;
`
const ProjectCardImage = styled.div`
    height: 56px;
    position: relative;
    width: 56px;    
`
const ImageWrapper = styled.div`
    background-color: #e8efef;
    border-radius: 28px;
    height: 56px;
    position: relative;
    width: 56px;
`
const CompanyAndPeopleAvatar = styled.div`
    height: 50px;
    left: 3px;
    object-fit: cover;
    position: absolute;
    top: 3px;
    width: 50px;
`
const FrameWrapper = styled.div`
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8px;
    position: relative;
`
const AvatarAndInfoContainer = styled.div`
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    position: relative;
`
const Titles = styled.div`
    color: ${gray900};
    flex: 1;
    font-family: ${fontFamily};
    font-size: ${titleFontSize}
    font-weight: ${mediumFontWeight};
    letter-spacing: ${regularLetterSpacing};
    line-height: ${largeLineHeight};
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
`
const WebLink = styled.div`
    color: #4B48EC;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-family: ${fontFamily};
    font-size: ${regularFontSize};
    font-weight: ${regularFontWeight};
    letter-spacing: ${regularLetterSpacing};
    line-height: ${regularLineHeight};
    position: relative;
    white-space: nowrap;
    width: fit-content;
`
const IndustryAndLocation = styled.div`
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    position: relative;
`
const IconAndInfoContainer = styled.div`
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 4px;
    position: relative;
`
const Department = styled.div`
    color: ${gray600};
    font-family: ${fontFamily};
    font-size: ${regularFontSize};
    font-weight: ${regularFontWeight};
    letter-spacing: ${regularLetterSpacing};
    line-height: ${regularLineHeight};
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
`
const P = styled.div`
    align-self: stretch;
    color: ${gray600};
    font-family: ${fontFamily};
    font-size: ${regularFontSize};
    font-weight: ${regularFontWeight};
    letter-spacing: ${regularLetterSpacing};
    line-height: ${regularLineHeight};
    position: relative;
`
const CompanyProfileLink = styled.div`
    color: ${primary600};
    font-family: ${fontFamily};
    font-size: ${mediumFontSize};
    font-weight: ${regularFontWeight};
    letter-spacing: ${regularLetterSpacing};
    line-height: ${regularLineHeight};
    position: relative;
    white-space: nowrap;
    width: fit-content;
`
const TimelineStartDateContainer = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    position: relative;
    width: 100%;
`
const TimelineEstimateAndStart = styled.div`
    color: ${gray900};
    font-family: ${fontFamily};
    font-size: ${mediumFontSize};
    font-weight: ${mediumFontWeight};
    letter-spacing: ${regularLetterSpacing};
    line-height: ${mediumLineHeight};
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
`
const Date = styled.div`
    color: ${gray600};
    font-family:${fontFamily};
    font-size: ${mediumFontSize};
    font-weight: ${regularFontWeight};
    letter-spacing: ${regularLetterSpacing};
    line-height: ${mediumLineHeight};
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
`
const StartDate = styled.div`
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    position: relative;
    width: 100%;
`
const OulineDeliverableContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 32px;
    position: relative;
`
const VideoContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 32px;
    position: relative;
    border-radius: 8px; 
    width: 100%;
    text-align: center;

`
const VideoPlayer = styled.div`
  position: relative;
  width: inherit;
`;
const DetailedContainer = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 14px;
    position: relative;
    width: 100%;
`

const ContainedButton = styled(Button)`
    background-color: ${blue[500]};
    color: ${basewhite};
`

const DiscUl = styled.ul`
    list-style-type: disc;
`
const ProjectCardHeader = styled.div`
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 24px;
    justify-content: space-between;
    padding: 24px 32px;
    position: relative;
    width: 100%;
`
const HeaderLogoContainer = styled.div`
    height: 96px;
    position: relative;
    width: 96px;
`
const HeaderTitleContainer = styled.div`
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 12px;
    position: relative;
`
const HeaderTitle = styled.div`
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 4px;
    position: relative;
`
const ProjectName = styled.div`
    color: ${gray900};
    flex: 1;
    font-family: ${fontFamily};
    font-size: ${xxlargeFontSize};
    font-weight: ${mediumFontWeight};
    letter-spacing: ${regularLetterSpacing};
    line-height: ${xxxlargeLineHeight};
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
`
const ProjectPostDate = styled.div`
    color: ${gray900};
    font-family: ${fontFamily};
    font-size: ${mediumFontSize};
    font-weight: ${regularFontWeight};
    letter-spacing: ${regularLetterSpacing};
    line-height: ${mediumLineHeight};
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
`
interface ProjectProfileProps {
    projectLogoLink?: string;
    projectName?: string;
    projectPostDate?: string;
    companyLogo?: string;
    companyName?: string;
    companyWebLink?: string;
    companyIndustry?: string;
    companyLocation?: string;
    companyDescription?: string;
    companyProfileLink?: string;
    timelineEstimate?: string;
    projectStartDate?: string;
    projectLeaderAvatarLink?: string;
    projectLeaderName?: string;
    projectLeaderRole?: string;
    projectOutline?: string;
    keyDeliverables?: string[];
    projectVideo?: string;
    applyButton?: string;
    askQuestionButton?: string;
    showHeader?: boolean; 

}
const ProjectProfile: React.FC<ProjectProfileProps> = ({
    showHeader = true,
    projectLogoLink,
    projectName,
    projectPostDate,
    companyLogo,
    companyName,
    companyWebLink,
    companyIndustry,
    companyLocation,
    companyDescription,
    companyProfileLink,
    timelineEstimate,
    projectStartDate,
    projectLeaderAvatarLink,
    projectLeaderName,
    projectLeaderRole,
    projectOutline,
    keyDeliverables,
    projectVideo,
    applyButton,
    askQuestionButton
}) => {
    const onPlayerReady: YouTubeProps["onReady"] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    const opts: YouTubeProps["opts"] = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const [isStarFilled, setIsStarFilled] = useState(false);

    const handleClick = () => {
        setIsStarFilled(!isStarFilled);
    };

    const [isAskQuestionPopupOpen, setAskQuestionPopupOpen] = useState(false);
    return (
        <>
            <ProjectCardTalent>
                {showHeader && (
                    <CustomProjectHeader
                        backgroundImage="/images/testCustomHeaderBackgroud.png" 
                        avatarImagePath="/icon/projectLogo.svg"
                        avatarHeight={"89px"}
                        avatarWidth={"89px"}
                        title1="test title 1"
                        title2="test title 2"
                        title3="test title3"
                        button={{
                            isVisible: true,
                            text: "Apply as squad",
                            backgroundColor: "#A0D909",
                            textColor: "#FFFFFF",
                            onClick: () => console.log("Apply as squad"),
                            href: "../t5_proj_apply/apply_as_squad",
                        }}
                        shareIcon={{
                            isVisible: true,
                            color: "#A0D909",
                            onClick: () => { console.log("Share icon clicked!"); }
                        }}
                        starIcon={{
                            isVisible: true,
                            color: "#A0D909",
                            onClick: () => { console.log("Star icon clicked!"); }
                        }}
                    />)}
                <ProjectCardDetails>
                    <ProjectCardBody>
                        <CompanyDetail>
                            <CompanyProfile>
                                <CompanyLogoName>
                                    <ProjectCardImage>
                                        <ImageWrapper>
                                            <CompanyAndPeopleAvatar>
                                                <img src={companyLogo} alt="Project" ></img>
                                            </CompanyAndPeopleAvatar>
                                        </ImageWrapper>
                                    </ProjectCardImage>
                                    <FrameWrapper>
                                        <AvatarAndInfoContainer>
                                            <Titles>{companyName}</Titles>
                                            <WebLink>{companyWebLink}</WebLink>
                                        </AvatarAndInfoContainer>
                                    </FrameWrapper>
                                </CompanyLogoName>
                                <IndustryAndLocation>
                                    <IconAndInfoContainer>
                                        <img src="/icon/building.svg" alt="Building Icon" />
                                        <Department>{companyIndustry}</Department>
                                    </IconAndInfoContainer>
                                    {/* TODO: Long place names will exceed the container instead of wrapping. */}
                                    <IconAndInfoContainer>
                                        <img src="/icon/locationPin.svg" alt="Pin Icon" />
                                        <Department>{companyLocation}</Department>
                                    </IconAndInfoContainer>
                                </IndustryAndLocation>
                                <P>{companyDescription}</P>
                                {/* TODO: add company profile link */}
                                <CompanyProfileLink>View company profile</CompanyProfileLink>
                            </CompanyProfile>
                        </CompanyDetail>
                        <CompanyProfile>
                            <TimelineStartDateContainer>
                                <TimelineEstimateAndStart>Timeline estimate</TimelineEstimateAndStart>
                                <Date>{timelineEstimate}</Date>
                            </TimelineStartDateContainer>
                            <StartDate>
                                <TimelineEstimateAndStart>Start date</TimelineEstimateAndStart>
                                <Date>{projectStartDate}</Date>
                            </StartDate>
                        </CompanyProfile>
                        <CompanyLogoName>
                            <ProjectCardImage>
                                <CompanyAndPeopleAvatar>
                                    <img src={projectLeaderAvatarLink} alt="Project Leader" ></img>
                                </CompanyAndPeopleAvatar>
                            </ProjectCardImage>
                            <FrameWrapper>
                                <AvatarAndInfoContainer>
                                    <P>{projectLeaderName}</P>
                                    <TimelineEstimateAndStart>{projectLeaderRole}</TimelineEstimateAndStart>
                                </AvatarAndInfoContainer>
                            </FrameWrapper>
                        </CompanyLogoName>
                        <CustomButton 
                            label="Ask a question" 
                            preset="default" 
                            onClick={() => setAskQuestionPopupOpen(true)}
                        />
                        {/* <ContainedButton variant="contained">Ask a question</ContainedButton> */}
                    </ProjectCardBody>
                    <OulineDeliverableContainer>
                        <DetailedContainer>
                            <Titles>Project outline</Titles>
                            <P>{projectOutline}<br /></P>
                        </DetailedContainer>
                        <DetailedContainer>
                            <Titles>Key deliverables</Titles>

                            <DiscUl>
                                {
                                    keyDeliverables?.map((deliverable, index) => (
                                        <li key={index}>
                                            <P>{deliverable}</P>
                                        </li>
                                    ))
                                }
                            </DiscUl>

                        </DetailedContainer>
                        <VideoContainer>
                            <VideoPlayer>
                                <YouTube videoId="faMx3IPpX4k" opts={opts} onReady={onPlayerReady} />

                            </VideoPlayer>
                        </VideoContainer>
                    </OulineDeliverableContainer>
                </ProjectCardDetails>
            </ProjectCardTalent>
            {isAskQuestionPopupOpen && (
                <AskQuestionPopup onClose={() => setAskQuestionPopupOpen(false)} />
            )}
        </>
    );
};
export default ProjectProfile;