"use client";
import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import { AddBSVG, AddDSVG, MinusSVG } from "@/ui/svgs";
import { TrashSVG } from "@/ui/svgs";
import SelectBox from "./select-box";

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
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #384250;
  margin: 0;
`;

const SectionDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #4D5761;
  margin: 0;
`;

const InputContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 48px;
  border-radius: 8px;
  border: 1px solid #D2D6DB;
  margin-top: 16px;
  margin-bottom: 32px;
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  ustify-content: space-between;
  margin-top: 16px;
`;

const Dropdown = styled.select`
  height: 44px;
  border-radius: 8px;
  border: 1px solid #D2D6DB;
  color: #6C737F;
  padding: 0 12px;
  flex: 1;
  &:first-child {
    margin-right: 16px;
  }
`;

const DeleteButton = styled.button`
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex; 
  align-items: center;
  justify-content: center;
`;

const AddMoreContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const AddMoreText = styled.span`
  color: #D2D6DB;
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
`;

const Skill: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [languages, setLanguages] = useState([
    { language: "", level: "" },
  ]);
  const addLanguage = () => {
    setLanguages([...languages, { language: "", level: "" }]);
  };
  const removeLanguage = (index: number) => {
    const newLanguages = languages.filter((_, i) => i !== index);
    setLanguages(newLanguages);
  };
  const categories = [
    {
      name: "Engineering",
      options: ["JavaScript", "Python", "JAVA", "C++"],
    },
    {
      name: "Design",
      options: ["Photoshop", "Illustrator", "Figma", "Sketch"],
    },
    {
      name: "Product",
      options: ["Product Roadmap", "User Research", "Product Strategy"],
    },
    {
      name: "Other",
      options: [
        "Project Management",
        "SEO",
        "Content Writing",
        "Data Analysis",
      ],
    },
  ];
  
  return (
    <Container>
      <Title>Project scope</Title>
      <ToggleButton onClick={() => setExpanded(!expanded)}>
        {expanded ? <MinusSVG /> : <AddBSVG />}
      </ToggleButton>
      <Description>Update your photo and personal details here.</Description>

      {expanded && (
        <>
          <DividerA />
          <SectionTitle>My skills</SectionTitle>
          <SectionDescription>Write a short introduction about your project</SectionDescription>
          <InputContainer><SelectBox categories={categories} /></InputContainer>
          
          <SectionTitle>Super Skills</SectionTitle>
          <SectionDescription>Select your 3 best skills from the list above clicking on their stars</SectionDescription>
          <InputContainer />
          
          <SectionTitle>Tools</SectionTitle>
          <SectionDescription>blablabla</SectionDescription>
          <InputContainer />
          <DividerB/>
          <SectionTitle>Languages</SectionTitle>
          <SectionDescription>blablabla</SectionDescription>
          {languages.map((lang: any, index: number) => (
          <DropdownContainer key={index}>
            <Dropdown defaultValue="Select language">
              <option disabled>Select language</option>
              <option>English</option>
              <option>Spanish</option>
            </Dropdown>
            <Dropdown defaultValue="Select your Level">
              <option disabled>Select your Level</option>
              <option>Level 1</option>
              <option>Level 2</option>
            </Dropdown>
            <DeleteButton onClick={() => removeLanguage(index)}>
              <TrashSVG />
            </DeleteButton>
          </DropdownContainer>
          ))}
          <AddMoreContainer onClick={addLanguage}>
            <AddDSVG />
            <AddMoreText>Add more</AddMoreText>
          </AddMoreContainer>
          </>
      )}
    </Container>
  );
};

export default Skill;
