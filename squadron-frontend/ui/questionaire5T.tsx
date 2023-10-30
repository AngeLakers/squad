"use client";
import * as React from "react";
import styled from "styled-components";
import StepHeading from "./step-heading";
import { useState } from "react";
import { HTMLAttributes } from "react";

const QuestionareContainer = styled.div`
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

export default function Questionare5T() {
    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    }

    return (
      <QuestionareContainer>
        <StepHeading
          step={"Step 05/05"}
          heading={"About us"}
          progress={100}
        />
        <QuestionContainer>
          <Question>
            <QuestionTitle>How did you hear about us?</QuestionTitle>
            {["Referral", "Search engine", "Social media", "Job post", "Other"].map((option) => (
                <OptionContainer key={option} onClick={() => handleOptionChange(option)}>
                    <Checkbox checked={selectedOption === option}>
                        {selectedOption === option && <InnerCircle />}
                    </Checkbox>
                    {option}
                </OptionContainer>
            ))}
            {selectedOption === "Other" && <OtherInput placeholder="Type here" />}
          </Question>
        </QuestionContainer>
      </QuestionareContainer>
      
    );
}



