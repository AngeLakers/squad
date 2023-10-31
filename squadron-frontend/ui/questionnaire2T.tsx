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

export default function Questionnaire2T() {
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
      options: [
        "Frontend engineer",
        "Backend engineer",
        "DevOps engineer",
        "Full-stack engineer",
        "QA engineer",
      ],
    },
    {
      name: "Design",
      options: [
        "UI designer",
        "UX designer",
        "Graphic designer",
        "Product designer",
        "Motion designer",
      ],
    },
    {
      name: "Product",
      options: [
        "Product manager",
        "Product owner",
        "Product analyst",
        "Product strategist",
        "Product researcher",
      ],
    },
    {
      name: "Other",
      options: [
        "HR specialist",
        "Sales manager",
        "Marketing specialist",
        "Data analyst",
        "Business strategist",
      ],
    },
  ];

  return (
    <QuestionnaireContainer>
      <StepHeading
        step={"Step 02/05"}
        heading={"Your role and experience"}
        progress={40}
      />
      <QuestionContainer>
        <Question>
          <QuestionTitle>What role best describes you?</QuestionTitle>
          <AnserInput>
            <SelectBox categories={categories} />
          </AnserInput>
        </Question>
        <Question>
          <QuestionTitle>
            What is your level of professional experience?
          </QuestionTitle>
          <AnserInput>
            <RadioContainer>
              <RadioGroup>
                <RadioButton selected={selectedOption === "<3"}>
                  <HiddenRadio
                    name="workYear"
                    value="<3"
                    onChange={() => handleOptionClick("<3")}
                  />
                  <img src="/signal1.png" alt="less than 3 years" />
                  {"< 3 years"}
                </RadioButton>

                <RadioButton selected={selectedOption === "3-6"}>
                  <HiddenRadio
                    name="workYear"
                    value="3-6"
                    onChange={() => handleOptionClick("3-6")}
                  />
                  <img src="/signal2.png" alt="3 to 6 years" />
                  {"3 - 6 years"}
                </RadioButton>

                <RadioButton selected={selectedOption === "6-10"}>
                  <HiddenRadio
                    name="workYear"
                    value="6-10"
                    onChange={() => handleOptionClick("6-10")}
                  />
                  <img src="/signal3.png" alt="6 to 10 years" />
                  {"6 - 10 years"}
                </RadioButton>
              </RadioGroup>
              <RadioButton selected={selectedOption === ">10"}>
                <HiddenRadio
                  name="workYear"
                  value=">10"
                  onChange={() => handleOptionClick(">10")}
                />
                <img src="/signal4.png" alt="more than 10 years" />
                {"> 10 years"}
              </RadioButton>
            </RadioContainer>
          </AnserInput>
        </Question>
      </QuestionContainer>
    </QuestionnaireContainer>
  );
}
