import React from 'react';
import styled from 'styled-components';
import ProgressBar from './progress-bar';
import CustomButton from './custom-button';

interface ShortHeadingProps {
  completionPercentage: number;
}

const OuterRectangle = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  padding: 8px 16px;
  box-sizing: border-box;
`;

const InnerRectangle = styled.div`
  border-radius: 8px;
  padding: 20px 16px;
  gap: 24px;
  background-color: #F9FAFB;
  display: flex;
  flex-direction: column;
`;

const CompletionText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #101828;
`;

const DescriptionText = styled.div`
  color: #475467;
  font-size: 14px;
  font-weight: 400;
`;

const ShortHeading: React.FC<ShortHeadingProps> = ({ completionPercentage }) => {
  return (
    <OuterRectangle>
      <InnerRectangle>
        <CompletionText>{completionPercentage}% of profile complete</CompletionText>
        <DescriptionText>
          Lorem ipsum dolor sit amet, consectetur di set adipiscing elit morbi morbi dui pretium.
        </DescriptionText>
        <ProgressBar progress={completionPercentage} />
        <CustomButton preset='black' label='Complete profile'></CustomButton>
      </InnerRectangle>
    </OuterRectangle>
  );
};

export default ShortHeading;

