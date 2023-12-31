import React from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";

const BarContainer = styled.div<{
  backgroundColor: string;
  borderColor: string;
}>`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 16px;
  padding: 15px 20px;
  gap: 16px;
  background-color: ${(props) => props.backgroundColor};
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

const BarSubHeader = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #4d5761;
`;

const InfoIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
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
  onClick?: () => void;
}

const InfoBar: React.FC<CustomCollectingBar> = ({
  backgroundColor = "#f8fbfc",
  borderColor = "#ebebed",
  title,
  description,
  buttonLabel,
  icon,
  buttonPreset = "default",
  link,
  onClick,
}) => {
  return (
    <BarContainer backgroundColor={backgroundColor} borderColor={borderColor}>
      <InfoContainer>
        <InfoIcon>{icon}</InfoIcon>
        <TextContainer>
          <BarHeader>{title}</BarHeader>
          <BarSubHeader>{description}</BarSubHeader>
        </TextContainer>
      </InfoContainer>
      <a href={link || "#"}><CustomButton label={buttonLabel} preset={buttonPreset} onClick={onClick}/></a>
    </BarContainer>
  );
};

export default InfoBar;
