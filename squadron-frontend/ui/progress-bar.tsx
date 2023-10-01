import styled from "styled-components";

interface ProgressBarProps {
  progress: number;
}

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
`;

const ProgressFill = styled.div<ProgressBarProps>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #a0d909;
  border-radius: 8px;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <ProgressFill progress={progress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
