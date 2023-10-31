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


const HalfInputContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

const HalfInput = styled(Input)`
  flex: 1;
`;

export default function Questionnaire1C() {

  return (
    <QuestionnaireContainer>
      <StepHeading
        step={"Step 01/07"}
        heading={"Your details"}
        progress={14}
      />
      <QuestionContainer>
        <Question>
          <QuestionTitle>Please enter your details</QuestionTitle>
          <HalfInputContainer>
            <div>
              <Label>Name*</Label>
              <HalfInput placeholder="Enter your name" />
            </div>
            <div>
              <Label>Last Name*</Label>
              <HalfInput placeholder="Enter your last name" />
            </div>
          </HalfInputContainer>
          <div>
          <Label>Email</Label>
          <Input placeholder="Email Address" />
          </div>
          <div>
          <Label>Linkedln</Label>
          <Input placeholder="Linkedln Profile URL" />
          </div>
        </Question>
      </QuestionContainer>
    </QuestionnaireContainer>
  );
}
