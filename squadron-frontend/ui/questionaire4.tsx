"use client";
import * as React from "react";
import styled from "styled-components";
import StepHeading from "./step-heading";
import CustomButton from "./custom-button";

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

const QuestionTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleAndDescription = styled.div`
  margin-bottom: 32px;
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

const Description = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #4D5761;
  margin-top: 4px;
`;

const Rectangle = styled.div`
  height: 116px;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

const RectangleTop = styled.div`
  height: 44px;
  background-color: #FCFCFD;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  border-bottom: 1px solid #E5E7EB;
  border-radius: 12px 12px 0 0;
  font-size: 12px;
  font-weight: 500;
  color: #4D5761;
`;

const Role = styled.span`
  margin-right: 48px;
`;

const RectangleBottom = styled.div`
  height: 72px;
  background-color: #FFFFFF;
  border-radius: 0 0 12px 12px;
`;

export default function Questionare4() {
    return (
      <QuestionareContainer>
        <StepHeading
          step={"Step 04/05"}
          heading={"Your role and experience"}
          progress={20}
        />
        <QuestionContainer>
          <Question>
          <QuestionTitleContainer>
              <TitleAndDescription>
                <QuestionTitle>Do you have a squad ready to go ?</QuestionTitle>
                <Description>Invite colleagues to collaborate on this project.</Description>
              </TitleAndDescription>
              <CustomButton label="Invite members" preset="default"  height="40px"/>
            </QuestionTitleContainer>
            <Rectangle>
              <RectangleTop>
                <span>Name</span>
                <Role>Role</Role>
              </RectangleTop>
              <RectangleBottom />
            </Rectangle>
          </Question>
        </QuestionContainer>
      </QuestionareContainer>
    );
  }