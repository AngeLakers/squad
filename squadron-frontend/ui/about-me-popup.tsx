import React, {useState}from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import CustomTextarea from "./customtextarea";
import CustomButton from "./custom-button";
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
    align-items: center;
    justify-content: center;
    width: 100%;

`;

const PopupHeader = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 24px 0px 24px;
    gap: 16px; 
    margin-bottom: 24px;
`;

const PopupBody = styled.div`
    padding: 16px 24px 0px 24px;
    gap: 20px;
    overflow-y: auto;
    width: 100%;  
   
`;

const PopupFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding:32px 0px 0px 0px;
    
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

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    & > button:not(:last-child) {
      margin-right: 12px;
    }
    width: 100%;
    padding: 0px 24px 24px 24px;
`;

interface AboutMeProps {
  onClose: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onClose }) => {
  const [textAreaContent, setTextAreaContent] = useState("");
  
  //todo: get the current about me content from the backend
  const handleUpdateClick = () => {
    console.log(textAreaContent);
    onClose();
  };

  return (
    <PopupComponent onClose={onClose}
    width="640px"
    maxHeightPercent={0.1}>
      <Container>
        <PopupHeader>
          <Title>About me</Title>
          <Description>Description of this screen</Description>
        </PopupHeader>
        <Divider />
        <PopupBody>
            <CustomTextarea 
                label="About me"
                borderStyle="1px solid #D2D6DB" 
                width="100%" 
                height="80%" 
                showHintText={false}       
            />
        </PopupBody>
            
        <PopupFooter>
            <ButtonContainer>
              <CustomButton
                label="Cancel"
                preset="outlined"
                hoverColor={gray200}
                textColor={gray700}
                borderColor={gray300}
                onClick={onClose}
              />
              <CustomButton
                label="Update"
                preset="default"
                onClick={handleUpdateClick} 
              />         
            </ButtonContainer>
        </PopupFooter>
      </Container>
    </PopupComponent>

  );
};

export default AboutMe;
