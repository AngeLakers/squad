"use client";
import * as React from "react";
import styled from "styled-components";
import StepHeading from "./step-heading";

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

const Label = styled.label`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  color: #384250;
`;

const Input = styled.input`
  border: 1px solid #D2D6DB;
  border-radius: 8px;
  padding: 8px 12px;
  width: 100%;
  margin-top: 6px;
`;

const Select = styled.select`
  height: 44px;
  border: 1px solid #D2D6DB;
  border-radius: 8px;
  padding: 8px 12px;
  width: 100%;
  margin-top: 6px;
  font-family: Inter;
  font-size: 16px;
  color: #384250;

  option:first-of-type {
    color: #6C737F;
}
`;

export default function Questionnaire4C() {

  return (
    <QuestionnaireContainer>
      <StepHeading
        step={"Step 04/07"}
        heading={"Your company details"}
        progress={57}
      />
      <QuestionContainer>
        <Question>
          <QuestionTitle>Do you have referral code?</QuestionTitle>
          <Input placeholder="Enter a referral code here"/>

        </Question>
      </QuestionContainer>
    </QuestionnaireContainer>
  );
}