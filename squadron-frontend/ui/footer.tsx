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
    rLeftButtonStyle?: PresetTypes;
    rMiddleButtonStyle?: PresetTypes;
    rightLink?: string;
    isRLeftButtonVisible?: boolean;
    isRMiddleButtonVisible?: boolean;
    rLeftButtonTextColor?: string;
    isRRightButtonPadding?: string;
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
    rLeftButtonStyle = "text",
    rMiddleButtonStyle = "outlined", 
    rightLink = "#",
    isRLeftButtonVisible = true,
    isRMiddleButtonVisible = true,
    rLeftButtonTextColor = "#1B18E4",
    isRRightButtonPadding = "10px 18px",
  }) => {
    return (
      <FooterDiv>
        <CustomButton preset="text" onClick={onLeftClick} label={leftButtonLabel} />
        <RightButtonGroup>
        {isRLeftButtonVisible && 
          <CustomButton preset={rLeftButtonStyle} onClick={onRLeftClick} label={rLeftButtonLabel} textColor={rLeftButtonTextColor}/>}
        {isRMiddleButtonVisible && 
          <CustomButton preset={rMiddleButtonStyle} onClick={onRMiddleClick} label={rMiddleButtonLabel} />}
          <a href={rightLink}> 
            <CustomButton preset="default" onClick={onRRightClick} label={rRightButtonLabel} padding={isRRightButtonPadding}/> 
          </a>
        </RightButtonGroup>
      </FooterDiv>
    );
  };
  
  export default Footer;
