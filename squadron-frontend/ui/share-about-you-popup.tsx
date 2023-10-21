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
    padding: 0 0 24px 0;
`;

const PopupHeader = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: row;
    
    padding: 24px 24px 16px 24px;
    gap: 16px; 
    
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid #EAECF0;
    padding: 10px;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
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

const PopupBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 24px 0px 24px;
    gap: 20px;
    width: 100%;  
   
`;
const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 4px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
`;

const InputLabel = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: #384250; 
`;

const CopyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 10px;
    margin-top: 24px;
`;

const CustomInput = styled.input`
    padding: 10px 14px;
    border: 1px solid #d2d6db;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
    
`;

const DetailDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 16px;
    border-radius: 8px;
    border: 1px solid #d2d6db;
`;

interface ShareProjectProps {
    onClose: () => void;
    
}

const ShareProjectPopup: React.FC<ShareProjectProps> = ({ onClose}) => {
    
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  }
  
{/* todo: 1. copy function
    2. share link is dynamic
    3. share button with pics
*/}

  return (
    <PopupComponent onClose={onClose} 
        width="400px"
        maxHeightPercent={0.1}>
      <Container>
        <PopupHeader>
            <IconContainer><Image src={`/profile-icon/share.svg`} alt="Share" width={24} height={24} /></IconContainer>
            <HeaderContainer>
                <Title>Share</Title>
                <Description>Share this project</Description>
            </HeaderContainer>
        </PopupHeader>
        <Divider />

        <PopupBody>
            <LinkContainer>
                <InputContainer>
                    <InputLabel>Share Link</InputLabel>
                    <CustomInput
                        placeholder="join.untitledui.com/project"
                        type="email"
                    />
                </InputContainer>
                <CopyContainer>
                    <Image src={`/icon/copy.svg`} alt="Copy" width={24} height={24} />
                    
                </CopyContainer>
            </LinkContainer>
            <ButtonContainer>
                <DetailDiv>LinkedIn</DetailDiv>
                <DetailDiv>Twitter</DetailDiv>
                <DetailDiv>Email</DetailDiv>     
            </ButtonContainer>

        </PopupBody>
        
        
      </Container>
    </PopupComponent>
  )
};

export default ShareProjectPopup;