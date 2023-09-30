import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

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

const AnswerText = styled.div<{ isExpanded: boolean }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #4d5761;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? "none" : "2")};
  -webkit-box-orient: vertical;
`;

const ShowMoreButton = styled.button`
  background-color: transparent;
  border: none;
  color: #4b48ec;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  &:hover {
    text-decoration: underline;
  }
`;

interface TalentAnswerProps {
  question: string;
  answer: string;
}

const TalentAnswer: React.FC<TalentAnswerProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = answerRef.current;
    if (element) {
      const isOverflow = element.scrollHeight > element.clientHeight;
      setIsOverflowing(isOverflow);
    }
  }, [answer]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AnswerContainer>
      <Question>{question}</Question>
      <AnswerText ref={answerRef} isExpanded={isExpanded}>
        {answer}
      </AnswerText>
      {!isExpanded && isOverflowing && (
        <ShowMoreButton onClick={toggleExpanded}>See More</ShowMoreButton>
      )}
    </AnswerContainer>
  );
};
