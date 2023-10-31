"use client";
import * as React from "react";
import styled from "styled-components";
import StepHeading from "./step-heading";
import { useState } from "react";
import { HTMLAttributes } from "react";

const QuestionnaireContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 72px 12% 0px 12%;
`;

const Question = styled.div`
    display: flex;
    flex-direction: column;
    &:not(:first-child) {
        margin-top: 64px;
    }
`;

const QuestionTitle = styled.div`
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #111927;
    margin-bottom: 40px;
`;

const OptionContainer = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;
    color: #384250;
    font-size: 14px;
    font-weight: 400;
`;

type CheckboxProps = {
    checked?: boolean;
  } & HTMLAttributes<HTMLSpanElement>;


const Checkbox = styled.span<CheckboxProps>`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border: 1px solid ${props => props.checked ? '#3F580F' : '#D2D6DB'};
    background-color: ${props => props.checked ? '#F4FFC7' : 'white'};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
`;

const InnerCircle = styled.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #0B0F00;
`;

const OtherInput = styled.input`
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #D2D6DB;
    margin-top: 8px;
`;

export default function Questionnaire7C() {
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");

    return (
      <QuestionnaireContainer>
        <StepHeading
          step={"Step 07/07"}
          heading={"About us"}
          progress={100}
        />
        <QuestionContainer>
          <Question>
            <QuestionTitle>How did you hear about us?</QuestionTitle>
            {["1", "2 ‘ 4", "5+"].map((option) => (
                <OptionContainer key={option} onClick={() => setSelectedOption1(option)}>
                    <Checkbox checked={selectedOption1 === option}>
                        {selectedOption1 === option && <InnerCircle />}
                    </Checkbox>
                    {option}
                </OptionContainer>
            ))}
          </Question>
          <Question>
            <QuestionTitle>How long do you need the talent?</QuestionTitle>
            {["Less than 1 month", "1 - 6 months", "6 - 12 months", "12+ months"].map((option) => (
                <OptionContainer key={option} onClick={() => setSelectedOption2(option)}>
                    <Checkbox checked={selectedOption2 === option}>
                        {selectedOption2 === option && <InnerCircle />}
                    </Checkbox>
                    {option}
                </OptionContainer>
            ))}
          </Question>
        </QuestionContainer>
      </QuestionnaireContainer>
    );
}

