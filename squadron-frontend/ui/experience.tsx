"use client";
import * as React from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";
import { useState } from "react";
import AddExperiencePopup from "@/ui/complete-profile-addexperience-popup";

const Container = styled.div`
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 32px 40px;
  position: relative;
  transition: all 0.3s;
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
  text-align: center;
  padding-top: 70px;
  border-radius: 5px;
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

  return (
    <Container>
      <Title>Experience</Title>
      <ToggleButton onClick={() => setExpanded(!expanded)}>
        {expanded ? "-" : "+"}
      </ToggleButton>
      <Description>Add your experience here</Description>

      {expanded && (
        <>
          <DividerA />
          <RightAlignedButton label="+ Add experience" preset="default" onClick={() => setCompleteExperiencePopupOpen(true)}/>
          <DividerB/>
          <ExperienceContainer>
            <AddText onClick={() => setCompleteExperiencePopupOpen(true)}>Add</AddText> <ExperienceText>your first experience</ExperienceText>
          </ExperienceContainer>
        </>
      )}

      {isCompleteExperiencePopupOpen && (
        <AddExperiencePopup
          onClose={() => setCompleteExperiencePopupOpen(false)}
        />
      )}  
    </Container>
  );
};

export default Experience;

