import React, {useState}from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import CustomButton from "./custom-button";
import CustomBadge from "./custom-badge";
import Image, { StaticImageData } from 'next/image';
//import StarBorderSVG from "./icons/star-border.svg";



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

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
`;
  
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;  
    width: 100%;
  
`;

interface LocationMissingProps {
  onClose: () => void;
  title: string;  
  description: string;  
  noRequiredButtonLabel: string;  
  addRequiredButtonLabel: string;
  imgSrc: StaticImageData;  
  imgText: string;
  imgDescription: string;
}

const LocationMissingPopup: React.FC<LocationMissingProps> = ({ 
    onClose, 
    title, 
    description, 
    noRequiredButtonLabel,
    addRequiredButtonLabel,
    imgSrc,
    imgText,
    imgDescription
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
            <Image src={imgSrc} alt={imgText} width="48" height="48" />
                <TextContainer>
                  <span>{imgText}</span>
                  <span style={{ fontSize: 'smaller', color: 'grey' }}>{imgDescription}</span>
                </TextContainer>
            </InputContainer>
        </InputRow>
        <Divider />
        <ButtonContainer>
          <CustomButton
            label={noRequiredButtonLabel}
            backgroundColor="#FFFFFF"
            textColor="#384250"
            borderColor="#D2D6DB" 
            onClick={onClose}
          />
          <CustomButton
            label={addRequiredButtonLabel}
            backgroundColor="#4B48EC"
            textColor="#FFFFFF"
            borderColor="#4B48EC"
            onClick={onClose}
            //todo: update skills in backend
          />         
        </ButtonContainer>
      </Container>
    </PopupComponent>
  );
};

export default LocationMissingPopup;
