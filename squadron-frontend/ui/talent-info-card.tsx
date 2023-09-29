/* eslint-disable react/jsx-key */
import React, { ReactElement } from "react";
import styled from "styled-components";

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e5e7eb;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 40px 24px 40px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  gap: 24px;
  flex: 1;
`;

const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

interface TalentInfoProps {
  title: string;
  content: ReactElement; //ReactElement
}

const TalentInfo: React.FC<TalentInfoProps> = ({ title, content }) => {
  return (
    <Info>
      <InfoHeader>
        <InfoTitle>{title}</InfoTitle>
        <Divider />
      </InfoHeader>
      {content}
    </Info>
  );
};

export default TalentInfo;
