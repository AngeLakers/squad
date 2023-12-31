import React, { useState }  from 'react';
import styled from 'styled-components';
import CustomButton from "@/ui/custom-button";
import { PresetTypes } from "./custom-button";

const FooterDiv = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f3f4f6;
    padding-left: 10vw;
`;

const RightButtonGroup = styled.div`
    display: flex;
    margin-right: 10vw;
    gap: 80px;
    color: black;
`;

interface FooterProps {
    leftButtonLabel?: string;
    rLeftButtonLabel?: string;
    rMiddleButtonLabel?: string;
    rRightButtonLabel?: string;
    onLeftClick?: () => void;
    onRLeftClick?: () => void;
    onRMiddleClick?: () => void;
    onRRightClick?: () => void;
    LeftButtonStyle?: PresetTypes;
    rLeftButtonStyle?: PresetTypes;
    rMiddleButtonStyle?: PresetTypes;
    leftLink?: string;
    rightLink?: string;
    isRLeftButtonVisible?: boolean;
    isRMiddleButtonVisible?: boolean;
    rLeftButtonTextColor?: string;
    isRRightButtonPadding?: string;
    isRRightBackgroundColor?: string;
    isButtonDisabled?: boolean;
}

const Footer: React.FC<FooterProps> = ({
    leftButtonLabel = "Cancel",
    rLeftButtonLabel = "Save to drafts",
    rMiddleButtonLabel = "Back to Edit",
    rRightButtonLabel = "Publish",
    onLeftClick,
    onRLeftClick,
    onRMiddleClick,
    onRRightClick,
    LeftButtonStyle = "text",
    rLeftButtonStyle = "text",
    rMiddleButtonStyle = "outlined", 
    leftLink = "#",
    rightLink = "#",
    isRLeftButtonVisible = true,
    isRMiddleButtonVisible = true,
    rLeftButtonTextColor = "#1B18E4",
    isRRightButtonPadding = "10px 18px",
    isRRightBackgroundColor = "#4B48EC",
    isButtonDisabled = true,
  }) => {
    return (
      <FooterDiv>
        <a href={leftLink}> 
          <CustomButton 
            preset={LeftButtonStyle}
            width="144px"
            onClick={onLeftClick} 
            label={leftButtonLabel}
          />
        </a>
        <RightButtonGroup>
        {isRLeftButtonVisible && 
          <CustomButton preset={rLeftButtonStyle} width="144px" onClick={onRLeftClick} label={rLeftButtonLabel} textColor={rLeftButtonTextColor}/>}
        {isRMiddleButtonVisible && 
          <CustomButton preset={rMiddleButtonStyle} width="144px" onClick={onRMiddleClick} label={rMiddleButtonLabel} />}
          <a href={rightLink}> 
            <CustomButton 
              preset="default" 
              width="144px"
              onClick={onRRightClick} 
              label={rRightButtonLabel} 
              padding={isRRightButtonPadding} 
              backgroundColor={isButtonDisabled ? "#EAEAFD" : isRRightBackgroundColor}
              isClickable={!isButtonDisabled}
            /> 
          </a>
        </RightButtonGroup>
      </FooterDiv>
    );
  };
  
  export default Footer;
