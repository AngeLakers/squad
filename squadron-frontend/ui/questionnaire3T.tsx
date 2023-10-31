"use client";
import * as React from "react";
import styled from "styled-components";
import StepHeading from "./step-heading";
import { SelectMenuOption } from "@/lib/types";
import SelectBox from "./select-box";

const QuestionnaireContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 72px 12% 0px 12%;
  gap: 64px;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const QuestionTitle = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const AnserInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AnswerTitle = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #384250;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RadioButton = styled.label<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 150px;
  height: 132px;
  padding: 24px 22px 24px 22px;
  border: 1.5px solid #d2d6db;
  border-radius: 8px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;

  &:hover {
    border-color: #384250;
  }

  ${({ selected }) =>
    selected &&
    `
    border-color: #384250;
    background-color: #F4FFC7;
  `}
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Label = styled.label`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  color: #384250;
`;

const Input = styled.input`
  border: 1px solid #d2d6db;
  border-radius: 8px;
  padding: 8px 12px;
  width: 100%;
  margin-top: 6px;
`;

export default function Questionnaire3T() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [country, setCountry] = React.useState<SelectMenuOption["value"]>("AU");

  const [selectedOption, setSelectedOption] = React.useState<string | null>(
    null
  );
  const handleOptionClick = (option: string | null) => {
    setSelectedOption(option);
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
    <QuestionnaireContainer>
      <StepHeading
        step={"Step 03/05"}
        heading={"Your role and experience"}
        progress={60}
      />
      <QuestionContainer>
        <Question>
          <QuestionTitle>What are some of your top skills?</QuestionTitle>
          <AnserInput>
            <SelectBox categories={categories} />
          </AnserInput>
        </Question>
        <Question>
          <QuestionTitle>Where can we see some of your work?</QuestionTitle>
          <div>
            <Label>LinkedIn</Label>
            <Input />
          </div>
          <div>
            <Label>GitHub (optional)</Label>
            <Input />
          </div>
          <div>
            <Label>Dribbble (optional)</Label>
            <Input />
          </div>
          <div>
            <Label>Personal website (optional)</Label>
            <Input />
          </div>
        </Question>
      </QuestionContainer>
    </QuestionnaireContainer>
  );
}
