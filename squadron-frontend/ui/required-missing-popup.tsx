import React, {useState}from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import CustomButton from "./custom-button";
import CustomBadge from "./custom-badge";
//import StarBorderSVG from "./icons/star-border.svg";
import {
  gray200,
  gray300,
  gray700,
} from "@/styles/reuseParams";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    maxheight: 270px;
    padding: 24px 24px 24px 24px;
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 4px;
`;

const Description = styled.p`
    margin-bottom: 3%;
    color: #4D5761;
`;

const Divider = styled.hr`
    width: 100%; 
    margin-bottom: 3%;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px
`;

const InputRow = styled.div`
    display: flex;
    justify-content: space-between; 
    width: 100%;
    margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;  
    width: 100%;
  
`;
interface BadgeData {
    label: string;
    preset?: "green" | "red" | "outlined_grey" | "outlined_green" | "outlined_light_green";
    icon?: React.ReactNode;
}

interface RequiredMissingProps {
  onClose: () => void;
  badges: BadgeData[];
  title: string;  
  description: string;  
  noRequiredButtonLabel: string;  
  addRequiredButtonLabel: string;  
}

const RequiredMissingPopup: React.FC<RequiredMissingProps> = ({ 
    onClose, 
    badges, 
    title, 
    description, 
    noRequiredButtonLabel,
    addRequiredButtonLabel
}) => {
  
  //todo: connect to backend to get the missing requirements
  

  return (
    <PopupComponent onClose={onClose}
    width="504px"
    maxHeightPercent={0.1}>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Divider />
        <InputRow>
            <InputContainer>
                {badges.map((badge, index) => (
                <CustomBadge
                  key={index}
                  label={badge.label}
                  preset={badge.preset}
                  icon={badge.icon}
                />
              ))}
            </InputContainer>
        </InputRow>
        <Divider />
        <ButtonContainer>
          <CustomButton
            label={noRequiredButtonLabel}
            preset="outlined"
            hoverColor={gray200}
            textColor={gray700}
            borderColor={gray300} 
            onClick={onClose}
          />
          <CustomButton
            label={addRequiredButtonLabel}
            preset="default"
            onClick={onClose}
            //todo: update skills in backend
          />         
        </ButtonContainer>
      </Container>
    </PopupComponent>
  );
};

export default RequiredMissingPopup;
