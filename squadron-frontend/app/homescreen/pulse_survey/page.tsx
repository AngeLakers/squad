"use client";
import * as React from "react";
import CustomProjectHeader from "@/ui/custom-project-header";
import HorizontalTabs from "@/ui/horizontal-tabs";
import {Hometable2} from "@/ui/Hometable2";
import styled from "styled-components";
import {SatisfactionBox, ScoreTypography, StyledScoreBackground} from "@/ui/liveproject-card";
import {FeedbackCard, IndividualFeedbackCard} from "@/ui/feedvack_card.";
import CustomButton from "@/ui/custom-button";
import {Construction} from "@mui/icons-material";
import {useState} from "react";
import AboutMe from "@/ui/about-me-popup";
import {Mysquad, SquadPulseSubmittedPopup} from "@/ui/my-squad-popup";

const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

`;

const ProjectsWrapper = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2.5rem 7rem 4.5rem;
  box-sizing: border-box;
  gap: 4.5rem;
  text-align: left;
  font-size: 1.5rem;
  color: #111927;

`;

const FeedbackWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
  text-align: left;
  font-size: 1.5rem;
  color: #111927;

`;
const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  text-align: left;
  font-size: 1rem;
  color: #4d5761;
`;
type HeadWrapperProps = {
    title: string;
    description?: string;
    status?: boolean;
};
const HeadContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  text-align: left;
  font-size: 1.5rem;
  color: #111927;
  font-family: Inter;
`;
const HeadText = styled.h2`
  position: relative;
  font-size: 1.5rem;
  line-height: 2rem;

  color: #111927;
  text-align: left;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;
const HeadText2 = styled.h2`

  position: relative;
  font-size: 1.13rem;
  line-height: 1.75rem;

  color: #111927;

  text-align: left;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;
const DescriptionText = styled.p`
  position: relative;
  font-size: 1rem;
  line-height: 1.5rem;

  color: #4d5761;
  text-align: left;
`;
const TextWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

`;
const SeeallButton = styled.button`
  width: fit-content;
  position: relative;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  font-family: Inter;
  color: #1b18e4;
  text-align: left;
  white-space: nowrap;
`;


const HeadWrapper: React.FC<HeadWrapperProps> = ({status = true, title, description}) => {
    const [MysquadPopupOpen, setMysquadPopupOpen] = useState(false);
    const [isMySquadSubmittedPopupOpen, setMySquadSubmittedPopupOpen] = useState(false);
    const closeFirstPopupAndOpenSecond = () => {
        setMysquadPopupOpen(false);
        setMySquadSubmittedPopupOpen(true);
    };
    return (
        <HeadContainer>
            <TextWrapper>
                <HeadText>{title}</HeadText>
                {description && <DescriptionText>{description}</DescriptionText>}
            </TextWrapper>
            {status && <CustomButton label="Rate" preset="default" onClick={() => setMysquadPopupOpen(true)}/>}
            {MysquadPopupOpen && (
                <Mysquad onClose={() => closeFirstPopupAndOpenSecond()} />
            )}

            {isMySquadSubmittedPopupOpen && (
                <SquadPulseSubmittedPopup
                    onClose={() => setMySquadSubmittedPopupOpen(false)}
                />
            )}
        </HeadContainer>
    );
};
const HeadWrapper2: React.FC<HeadWrapperProps> = ({title, description}) => {

    return (
        <HeadContainer>

            <TextWrapper>
                <HeadText2>{title}</HeadText2>
                {description && <DescriptionText>{description}</DescriptionText>}
            </TextWrapper>
            <SeeallButton > see all</SeeallButton>

        </HeadContainer>


    );
};


const Project = () => {

    const question = "How satisfied are you with our service?";
    const options = [
        { score: 1.0 },
        { score: 2.0 },
        { score: 3.0 },
        { score: 4.0 },
        { score: 5.0 }
    ];

    const [aboutMePopupOpen, setAboutMePopupOpen] = useState(false);
    return (
        <ProjectsWrapper>
            <FeedbackWrapper>
                <HeadWrapper title={"Team's feedback"}
                             description={"Average team score based on individual feedback from your team members"}/>


                <CardWrapper>
                    <FeedbackCard text={"7 May - 14 May, 2022"} score={5.0}/>
                </CardWrapper>

                {/*<FeedbackCard text={"7 May - 14 May, 2022"} score={4.8}   />*/}
                {/*<FeedbackCard text={"7 May - 14 May, 2022"} score={3.8}   />*/}
                {/*        <FeedbackCard text={"7 May - 14 May, 2022"} score={1.8}   />*/}
            </FeedbackWrapper>
            <FeedbackWrapper>
                <HeadWrapper2 title={"Previous feedback"}
                              description={"Feedback from previous weeks"}/>

                <CardWrapper> <FeedbackCard text={"7 May - 14 May, 2022"} score={5.0}/>
                    <FeedbackCard
                        text={"7 May - 14 May, 2022"} score={3.8}/>
                    <FeedbackCard text={"7 May - 14 May, 2022"} score={4.8}
                    />
                    <FeedbackCard text={"7 May - 14 May, 2022"} score={2.3}
                    />
                </CardWrapper>

            </FeedbackWrapper>

            <FeedbackWrapper>
                <HeadWrapper title={"Team's feedback"}
                             description={"Average team score based on individual feedback from your team members"} status={false}/>
                <CardWrapper>
                    <IndividualFeedbackCard
                        avatarSrc={"https://images.unsplash.com/photo-1561948955-570b270e7c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDEzMTN8MHwxfGFsbHwxfHx8fHx8fHwxNjE5OTM1NTI4&ixlib=rb-1.2.1&q=80&w=400"}
                        name="Patricia Montero"
                        date="7 May - 14 May, 2022"
                        score={5.0}
                        role="Product Manager"
                    />
                    <IndividualFeedbackCard
                        avatarSrc={"https://images.unsplash.com/photo-1561948955-570b270e7c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDEzMTN8MHwxfGFsbHwxfHx8fHx8fHwxNjE5OTM1NTI4&ixlib=rb-1.2.1&q=80&w=400"}
                        name="Alisa Heston"
                        date="7 May - 14 May, 2022"
                        score={4.7}
                        role="Front-end Developer"
                    />
                    <IndividualFeedbackCard
                        avatarSrc={"https://images.unsplash.com/photo-1561948955-570b270e7c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDEzMTN8MHwxfGFsbHwxfHx8fHx8fHwxNjE5OTM1NTI4&ixlib=rb-1.2.1&q=80&w=400"}
                    name="Lyle Kauffman"
                    date="7 May - 14 May, 2022"
                    score={3.8}
                    role="Back-end Developer"
                />
                    <IndividualFeedbackCard
                        avatarSrc={"https://images.unsplash.com/photo-1561948955-570b270e7c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDEzMTN8MHwxfGFsbHwxfHx8fHx8fHwxNjE5OTM1NTI4&ixlib=rb-1.2.1&q=80&w=400"}
                        name="Rosalee Melvin"
                        date="7 May - 14 May, 2022"
                        score={3.1}
                        role="UX Designer"
                    />
                </CardWrapper>

            </FeedbackWrapper>



        </ProjectsWrapper>
    );
};


const tabsContent = [
    {label: 'Project Details', content: 'Content of Saved Jobs'},
    {label: 'Squad', content: <Project/>},
    {label: 'Time tracking', content: 'Content of Application'},
    {label: 'Invoices', content: 'Content of Offers'},
    {label: 'Contracts', content: 'Content of Projects'},
    {label: 'Squad Pulse', content: 'Content of Documents'}
];


export default function Home() {
    return (
        <Container>
            <CustomProjectHeader
                backgroundImage="/black-background.png"
                avatarImagePath="/icon/projectLogo.svg"
                avatarHeight={"89px"}
                avatarWidth={"89px"}
                title1="stir"
                title2="MVP for Serverless E-commerce Return Portal"
                title3=""
                button={{
                    isVisible: false,
                    text: "Apply as squad",
                    backgroundColor: "#A0D909",
                    textColor: "#ffffff",
                    onClick: () => console.log("Apply as squad"),
                    href: "../t5_proj_apply/apply_as_squad",
                }}
                shareIcon={{
                    isVisible: false,
                    color: "#A0D909",
                    onClick: () => {
                        console.log("Share icon clicked!");
                    },
                }}
                starIcon={{
                    isVisible: false,
                    color: "#FFFF00",
                    onClick: () => {
                        console.log("Star icon clicked!");
                    },
                }}
            />

            <HorizontalTabs tabData={tabsContent}/>

        </Container>
    )
}


