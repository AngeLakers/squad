import React, {ReactNode, useState} from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import CustomButton from "./custom-button";
import portraitAImage from "@/public/portraitA.png";
import Image from "next/image";

import {
    basewhite,
    gray200,
    gray300,
    gray600,
    gray700,
    primary600,
    regularFontSize,
    titleFontSize,
    regularFontWeight,
    mediumFontWeight,
    regularLineHeight,
    largeLineHeight,
    titleFontWeight,
  } from "@/styles/reuseParams";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
`;

const PopupHeader = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 24px 16px 24px;
    gap: 8px; 
    
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: ${largeLineHeight};
`;

const Description = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
`;

const PopupBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 24px 0px 24px;
    gap: 20px;
    width: 100%;  
   
`;

const Checkbox = styled.input`
    appearance: none;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border: 1px solid #D2D6DB;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    margin-right: 8px;

    &:checked::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 12px;
        height: 12px;
        background-color: #4B48EC;
        border-radius: 3px;
        transform: translate(-50%, -50%);
    }
`;

const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
`;

const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const CheckboxLabel = styled.label`
    
    color: #384250;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
`;

const PopupFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding:32px 0px 0px 0px;
    
`;


const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0px 24px 24px 24px;
    gap: 12px;
`;



interface HideProjectProps {
    onClose: () => void;
    
}

const HideProjectPopup: React.FC<HideProjectProps> = ({ onClose}) => {
    
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  }

  return (
    <PopupComponent onClose={onClose} 
        width="400px"
        maxHeightPercent={0.1}>
      <Container>
        <PopupHeader>
          <Title>Hide this Project</Title>
          <Description>lore ipsum blablablabalbalblore ipsum blablablabalbalb</Description>
        </PopupHeader>
        
        <PopupBody>
        <CheckboxContainer>
            <CheckboxWrapper>
                <Checkbox type="checkbox" id="1" onChange={handleCheckboxChange} />
                <CheckboxLabel>Wrong skill set</CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
                <Checkbox type="checkbox" id="2" onChange={handleCheckboxChange} />
                <CheckboxLabel>Location Mismatch</CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
                <Checkbox type="checkbox" id="3" onChange={handleCheckboxChange} />
                <CheckboxLabel>Misalignment with company</CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
                <Checkbox type="checkbox" id="4" onChange={handleCheckboxChange} />
                <CheckboxLabel>Not currently available</CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
                <Checkbox type="checkbox" id="5" onChange={handleCheckboxChange} />
                <CheckboxLabel>Misalignment with commitment level</CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
                <Checkbox type="checkbox" id="6" onChange={handleCheckboxChange} />
                <CheckboxLabel>Other</CheckboxLabel>
            </CheckboxWrapper>
        </CheckboxContainer>
        </PopupBody>
        
        <PopupFooter>
                <ButtonContainer>
                  <CustomButton
                    label="Cancel"
                    preset="outlined"
                    hoverColor={gray200}
                    textColor={gray700}
                    borderColor={gray300}
                    width="182px"
                    onClick={onClose}
                  />
                  <CustomButton
                    label="Send feedback"
                    preset="default"
                    width="182px"
                    onClick={onClose} 
                  />         
                </ButtonContainer>
            </PopupFooter>
      </Container>
    </PopupComponent>
  )
};

export default HideProjectPopup;