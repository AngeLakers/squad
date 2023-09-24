import React from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";

const BarContainer = styled.div<{ bgColor: string; borderColor: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10%;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 16px;
  padding: 15px 20px;
  gap: 16px;
  background-color: ${(props) => props.bgColor};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 0.6rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

const BarHeader = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const BarSubHeader = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #4d5761;
`;

const ReviewButton = styled.button<{ bgColor: string[] }>`
  border-radius: 8px;
  background-color: ${(props) => props.bgColor[0]};
  padding: 10px 16px 10px 16px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.bgColor[1]};
  }
  &:active {
    transform: scale(0.99);
  }
`;

interface CustomCollectingBar {
  backgroundColor?: string;
  buttonPreset?: "default" | "outlined";
  borderColor?: string;
  title: string;
  description: string;
  buttonLabel: string;
  icon?: React.ReactNode;
  link?: string;
}

const InfoIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoBar: React.FC<CustomCollectingBar> = ({
  backgroundColor = "#f8fbfc",
  borderColor = "#ebebed",
  title,
  description,
  buttonLabel,
  icon,
  buttonPreset = "default",
  link,
}) => {
  return (
    <BarContainer bgColor={backgroundColor} borderColor={borderColor}>
      <InfoContainer>
        <InfoIcon>{icon}</InfoIcon>
        <TextContainer>
          <BarHeader>{title}</BarHeader>
          <BarSubHeader>{description}</BarSubHeader>
        </TextContainer>
      </InfoContainer>
      <CustomButton label={buttonLabel} preset={buttonPreset} />
    </BarContainer>
  );
};

export default InfoBar;
