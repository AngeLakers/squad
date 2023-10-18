"use client"
import {ScoreTypography, StyledIcon, StyledScoreBackground} from "@/ui/liveproject-card";
import styled from "styled-components";
import * as React from "react";


const CardContainer = styled.div`
  
    position: relative;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
    border: 1px solid #e5e7eb;
    box-sizing: border-box;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 2rem;
    gap: 1rem;
    text-align: left;
    font-size: 1rem;
    color: #4d5761;
  
  
`;
const CardText = styled.h2`
  
  position: relative;
 

  color: #4d5761;
  text-align: left;


  font-size: 0.88rem;
  line-height: 1.25rem;
  font-family: Inter;

`;

const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
 
  
` ;

const TextWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

`;
const RoleText = styled.h2`
  position: relative;
  font-size: 1.13rem;
  line-height: 1.75rem;

  color: #111927;

  text-align: left;
  font-weight: 600;
  margin-bottom: 0.5rem;
 white-space: nowrap;
`;
const NameText = styled.p`
  position: relative;
  font-size: 1rem;
  line-height: 1.5rem;

  color: #4d5761;
  text-align: left;
  font-family: Inter;
;
`;

const Divider = styled.div`

  width: 100%;
  position: relative;
  border-top: 1px solid #e5e7eb;
  box-sizing: border-box;
  height: 0.06rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;  /
`;
const Button = styled.button`
  
  margin: 0 !important;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: 1px solid #d2d6db;
  box-sizing: border-box;
  width: 3rem; 
  height: 3rem; 
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.25rem; 
`;

const SvgIcon = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
`;

const SettingsButton = () => (
    <Button>
        <SvgIcon src={`/icon/dots-vertical.svg`} alt="settings" />
    </Button>
);
const Avatar = styled.img`
    position: relative;
    border-radius: 50%;
    width: 4rem;    
    height: 4rem;    
    object-fit: cover;
`;


export const FeedbackCard: React.FC<{ text: string, score: number }> = ({ text, score }) => {
    return (
        <CardContainer>
            <CardText>{text}</CardText>
            <StyledIcon score={score} />
            <StyledScoreBackground score={score}>
                <ScoreTypography variant="h6">{score === 0 ? '--' : score.toFixed(1)}</ScoreTypography>
            </StyledScoreBackground>
        </CardContainer>
    );
};
export const IndividualFeedbackCard: React.FC<{ avatarSrc: string,name: string, date:string, score: number ,role:string}> = ({ avatarSrc, date,name, score,role }) => {

    return (
        <CardContainer>
            <HeaderContainer>
                <Avatar src={avatarSrc} alt="User Avatar" />
             <SettingsButton/>
            </HeaderContainer>

            <TextWrapper>
                <RoleText>{role}</RoleText>
                <NameText>{name}</NameText>




            </TextWrapper>
           <Divider/>
            <DetailWrapper>
            <CardText>{date}</CardText>
            <StyledScoreBackground score={score}>
                <ScoreTypography variant="h6">{Math.floor(score)}</ScoreTypography>
            </StyledScoreBackground>
            </DetailWrapper>

        </CardContainer>
    );
}