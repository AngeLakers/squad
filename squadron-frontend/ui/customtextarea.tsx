'use client';
import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import styled, { CSSProperties } from 'styled-components';

interface CustomTextareaProps {
  label?: string;
  labelStyle?: CSSProperties;
  showHintText?: boolean;
  hintTextStyle?: CSSProperties;
  borderStyle?: string;
  width?: string;
  height?: string;
  maxCharCount?: number;
}

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  color: #384250;
  font-size: 14px;
`;

const StyledTextarea = styled(TextareaAutosize)<CustomTextareaProps>`
    border: ${(props) => props.borderStyle || '1px solid #D2D6DB'};
    &:focus {
      border: ${(props) => props.borderStyle || '1px solid #D2D6DB'}; // Keeps the border color same on focus
      outline: none; // Optionally remove the default outline as well
    }
    width: ${(props) => props.width || '100%'}; 
    height: ${(props) => props.height || 'auto'} ;
    padding: 12px 14px;
    border-radius: 8px;
    margin-bottom: 0px;
    resize: none; // Remove the resize handle on the bottom right
    box-sizing: border-box; // Make sure the padding and border are included in the width and height
`;

const TextareaContainer = styled.div<CustomTextareaProps>`
    width: ${(props) => props.width || '100%'};
    
    margin-bottom: 8px;
`;

const HintText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #4D5761;
`;


const CustomTextarea: React.FC<CustomTextareaProps> = ({ 
    label,
    labelStyle,
    showHintText = true,
    hintTextStyle,
    borderStyle, 
    width, 
    height, 
    maxCharCount = 275 
  }) => {
    const [text, setText] = useState("");
    //const MAX_CHAR_COUNT = 275;
  
    return (
      <TextareaContainer width={width}>
        {label && <StyledLabel style={labelStyle}>{label}</StyledLabel>}
        <StyledTextarea
          width={width}
          height={height}
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={maxCharCount}
          minRows={3}
        />
        {showHintText && (
          <HintText style={hintTextStyle}>
            <span className="text-wrapper-6">{maxCharCount - text.length} characters left</span>
          </HintText>
        )}
      </TextareaContainer>
    );
  }
  
export default CustomTextarea;