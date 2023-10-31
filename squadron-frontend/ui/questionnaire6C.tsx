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

const InputBox = styled.textarea`
  border: 1px solid #D2D6DB;
  border-radius: 8px;
  padding: 12px 14px;
  width: 100%;
  height: 154px;
  margin-top: 40px;
  font-size: 16px;
  resize: none;
  &::placeholder {
    color: #7D8699;
  }
`;

const HintText = styled.span`
  color: #4D5761;
  font-size: 14px;
  font-weight: 400;
  margin-top: 6px;
`;

type CheckboxProps = {
    checked: boolean;
};

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

const NotSureYetOption = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #384250;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 40px;
`;

export default function Questionnaire6C() {
  const [selectedBox, setSelectedBox] = React.useState("");

  const handleBoxClick = (boxName: string) => {
    setSelectedBox(boxName);
  };

  return (
    <QuestionnaireContainer>
      <StepHeading
        step={"Step 06/07"}
        heading={"Your needs"}
        progress={86}
      />
      <QuestionContainer>
        <Question>
          <QuestionTitle>What type of Design help do you need?</QuestionTitle>
          <InputBox placeholder="What are you looking to build? What specific roles and skills are you interested in?" />
          <HintText>This is a hint text to help user.</HintText>
          <NotSureYetOption onClick={() => handleBoxClick("Not Sure yet")}>
          <Checkbox checked={selectedBox === "Not Sure yet"}>
            {selectedBox === "Not Sure yet" && <InnerCircle />}
          </Checkbox>
            Not Sure yet
          </NotSureYetOption>
        </Question>
      </QuestionContainer>
    </QuestionnaireContainer>
  );
}

