"use client";
import * as React from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";
import { useState } from "react";
import AddProjectPopup from "@/ui/add-project-popup";
import { AddProjectsSVG, AddBSVG, AddCSVG, MinusSVG } from "@/ui/svgs";
import SmallProjectCard from "@/ui/profile/SmallProjectCard";

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

const ProjectsContainer = styled.div`
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

const Projects: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [isCompleteProjectPopupOpen, setCompleteProjectPopupOpen] =
  useState(false);
  const [showProjectCard, setShowProjectCard] = useState(false);
  const handleAddProject = () => {
    setShowProjectCard(true);
    setCompleteProjectPopupOpen(false);
  };


  return (
    <Container>
      <Title>Projects</Title>
      <ToggleButton onClick={() => setExpanded(!expanded)}>
        {expanded ? <MinusSVG /> : <AddBSVG />}
      </ToggleButton>
      <Description>Add your projects here</Description>

      {expanded && (
        <>
          <DividerA />
          <RightAlignedButton 
            preset="default" 
            onClick={() => setCompleteProjectPopupOpen(true)}
            label={
        <>
      <AddCSVG />
      <span style={{ marginLeft: '8px' }}>Add project</span>
        </>
        }
      />
          <DividerB/>
          {showProjectCard ? (
            <SmallProjectCard
            title="My Project1"
            year="2023"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda"
            avatars={[
                { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
            ]}
        />

          ) : (
          <ProjectsContainer>
            <SVGContainer>
              <AddProjectsSVG />
            </SVGContainer>
            <div>
              <AddText onClick={() => setCompleteProjectPopupOpen(true)}>Add</AddText> <ExperienceText>your first project</ExperienceText>
            </div>
          </ProjectsContainer>
          )}
        </>
      )}

      {isCompleteProjectPopupOpen && (
        <AddProjectPopup
          title="Add project"
          onClose={() => setCompleteProjectPopupOpen(false)}
          onClick={handleAddProject}
        />
      )}  
    </Container>
  );
};

export default Projects;