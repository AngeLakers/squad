"use client";
import * as React from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";
import { useState } from "react";
import AddExperiencePopup from "@/ui/complete-profile-addexperience-popup";
import { AddExperienceSVG, AddBSVG, AddCSVG, MinusSVG } from "@/ui/svgs";
import ExperienceCard from "./profile/Experience_Card";

const Container = styled.div`
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 32px 40px;
  position: relative;
  transition: all 0.3s;
  background-color: white;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #111927;
  float: left;
`;

const ToggleButton = styled.div`
  float: right;
  cursor: pointer;
`;

const Description = styled.div`
  clear: both;
  font-size: 14px;
  font-weight: 400;
  color: #4D5761;
  padding-top: 4px;
`;

const DividerA = styled.div`
  border-top: 1px solid #E5E7EB;
  margin-top: 21px;
  margin-bottom: 40px;
`;

const DividerB = styled.div`
  border-top: 1px solid #E5E7EB;
  margin-top: 100px;
  margin-bottom: 32px;
`;

const RightAlignedButton = styled(CustomButton)`
  float: right;
`;

const ExperienceContainer = styled.div`
  height: 172px;
  background-color: #F9FAFB;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

`;

const SVGContainer = styled.div`
  margin-bottom: 16px;
`;

const AddText = styled.span`
  color: #4B48EC; 
  cursor: pointer;
`;

const ExperienceText = styled.span`
  color: #6C737F; 
`;

const Experience: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [isCompleteExperiencePopupOpen, setCompleteExperiencePopupOpen] =
  useState(false);
  const [showExperienceCard, setShowExperienceCard] = useState(false);
  const handleAddExperience = () => {
    setShowExperienceCard(true);
    setCompleteExperiencePopupOpen(false);
  };


  return (
    <Container>
      <Title>Experience</Title>
      <ToggleButton onClick={() => setExpanded(!expanded)}>
        {expanded ? <MinusSVG /> : <AddBSVG />}
      </ToggleButton>
      <Description>Add your experience here</Description>

      {expanded && (
        <>
          <DividerA />
          <RightAlignedButton 
            preset="default" 
            onClick={() => setCompleteExperiencePopupOpen(true)}
            label={
        <>
      <AddCSVG />
      <span style={{ marginLeft: '8px' }}>Add experience</span>
        </>
        }
      />
          <DividerB/>
          {showExperienceCard ? (
            <ExperienceCard
              jobTitle="Software Engineer"
              direction="Frontend"
              avatarUrl="/google.svg"
              companyName="Tech Co."
              timePeriod="June 2020 - Present"
              description="Working on creating innovative solutions using React and TypeScript 11111 and 322222222."
            />
          ) : (
            <ExperienceContainer>
            <SVGContainer>
              <AddExperienceSVG />
            </SVGContainer>
            <div>
              <AddText onClick={() => setCompleteExperiencePopupOpen(true)}>Add</AddText> <ExperienceText>your first experience</ExperienceText>
            </div>
          </ExperienceContainer>
          )}
        </>
      )}

      {isCompleteExperiencePopupOpen && (
        <AddExperiencePopup
          title="Add experience"
          onClose={() => setCompleteExperiencePopupOpen(false)}
          onClick={handleAddExperience}
        />
      )}  
    </Container>
  );
};

export default Experience;

