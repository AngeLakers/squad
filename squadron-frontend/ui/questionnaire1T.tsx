"use client";
import * as React from "react";
import styled from "styled-components";
import StepHeading from "./step-heading";
import CountrySelector from "./selector";
import { SelectMenuOption } from "@/lib/types";
import { COUNTRIES } from "@/lib/countries";

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

export default function Questionnaire1T() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [country, setCountry] = React.useState<SelectMenuOption["value"]>("AU");

  const [selectedOption, setSelectedOption] = React.useState<string | null>(
    null
  );
  const handleOptionClick = (option: string | null) => {
    setSelectedOption(option);
  };

  return (
    <QuestionnaireContainer>
      <StepHeading
        step={"Step 01/05"}
        heading={"Location and type of work"}
        progress={20}
      />
      <QuestionContainer>
        <Question>
          <QuestionTitle>Where are you located?</QuestionTitle>
          <AnserInput>
            <AnswerTitle>Country</AnswerTitle>{" "}
            <CountrySelector
              id={"country-selector"}
              open={isOpen}
              onToggle={() => setIsOpen(!isOpen)}
              onChange={setCountry}
              selectedValue={
                COUNTRIES.find((option) => option.value === country)!
              }
            />
          </AnserInput>
        </Question>
        <Question>
          <QuestionTitle>What type of work are you looking for?</QuestionTitle>
          <AnserInput>
            <RadioGroup>
              <RadioButton selected={selectedOption === "Full-time"}>
                <HiddenRadio
                  name="workType"
                  value="Full-time"
                  onChange={() => handleOptionClick("Full-time")}
                />
                <img src="/clockfull.png" alt="Full-time" />
                Full-time
              </RadioButton>

              <RadioButton selected={selectedOption === "Part-time"}>
                <HiddenRadio
                  name="workType"
                  value="Part-time"
                  onChange={() => handleOptionClick("Part-time")}
                />
                <img src="/clockhalf.png" alt="Part-time" />
                Part-time
              </RadioButton>

              <RadioButton selected={selectedOption === "Side hustle"}>
                <HiddenRadio
                  name="workType"
                  value="Side hustle"
                  onChange={() => handleOptionClick("Side hustle")}
                />
                <img src="/clockempty.png" alt="Side hustle" />
                Side hustle
              </RadioButton>
            </RadioGroup>
          </AnserInput>
        </Question>
      </QuestionContainer>
    </QuestionnaireContainer>
  );
}
