import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ShowMoreText from "./text-showmore";

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e5e7eb;
`;

const Answers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

interface QAData {
  question: string;
  answer: string;
}

interface TalentAnswersProps {
  qaData: QAData[];
}

const TalentAnswers: React.FC<TalentAnswersProps> = ({ qaData }) => {
  return (
    <Answers>
      {qaData.map((data, index) => (
        <React.Fragment key={index}>
          <TalentAnswer question={data.question} answer={data.answer} />
          {index !== qaData.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Answers>
  );
};

export default TalentAnswers;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Question = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

interface TalentAnswerProps {
  question: string;
  answer: string;
}

const TalentAnswer: React.FC<TalentAnswerProps> = ({ question, answer }) => {
  return (
    <AnswerContainer>
      <Question>{question}</Question>
      <ShowMoreText
        text={answer}
        showMoreLength={350}
        fontSize="16px"
        fontColor="#4d5761"
        lineHeight="24px"
        fontWeight={400}
      />
    </AnswerContainer>
  );
};
