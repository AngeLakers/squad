import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import costImage from '../public/cost.png';

const BoxStyle = styled.div`
  border-radius: 10px;
  border: 2px solid #E5E5E5;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 28vw;
  height: auto;
`;

const HeaderContainerStyle = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 2vh 2vw;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 3vh;
`;

const GreyBoxStyle = styled.div`
  width: 90%;
  padding: 2vh 2vw;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 0 5% 3vh 5%;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  margin-left: 1%;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const CostEstimator: React.FC = () => {
  return (
    <BoxStyle>
      <HeaderContainerStyle>
        <Image key="costImage" src={costImage} alt="Cost Icon" width="49" height="48" />
        <TextContainer>
          <span>Cost Estimator</span>
          <span style={{ fontSize: 'smaller', color: 'grey' }}>description...</span>
        </TextContainer>
      </HeaderContainerStyle>
      <GreyBoxStyle>Service Fee</GreyBoxStyle>
      <GreyBoxStyle>Team average weekly rate</GreyBoxStyle>
    </BoxStyle>
  );
};

export default CostEstimator;


