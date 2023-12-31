import styled from "styled-components";
import ProgressBar from "./progress-bar";

interface StepHeadingProps {
  step: string;
  heading: string;
  progress: number;
}

const StepHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12% 24px 12%;
  gap: 16px;
  border-bottom: 1px solid #e5e7eb;
  width: 100%;
  background-color: white;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Step = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #384250;
`;

const Heading = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #4d5761;
`;

const StepHeading: React.FC<StepHeadingProps> = ({
  progress,
  step,
  heading,
}) => {
  return (
    <StepHeadingContainer>
      <HeadingContainer>
        <Step>{step}</Step>
        <Heading>{heading}</Heading>
      </HeadingContainer>
      <ProgressBar progress={progress} />
    </StepHeadingContainer>
  );
};

export default StepHeading;
