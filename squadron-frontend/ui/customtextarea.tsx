'use client';
import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import styled from 'styled-components';

interface CustomTextareaProps {
  borderStyle?: string;
  width?: string;
  height?: string;
  maxCharCount?: number;
}

const StyledTextarea = styled(TextareaAutosize)<CustomTextareaProps>`
    border: ${(props) => props.borderStyle || '1px solid #D2D6DB'};
    width: ${(props) => props.width || '100%'}; 
    height: ${(props) => props.height || 'auto'} ;
    padding: 12px 14px;
    border-radius: 8px;
    margin-bottom: 0px;
    resize: none; // Remove the resize handle on the bottom right
    box-sizing: border-box; // Make sure the padding and border are included in the width and height
`;

const TextareaContainer = styled.div<CustomTextareaProps>`
    width: ${(props) => props.width || '928px'};
    
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


const CustomTextarea: React.FC<CustomTextareaProps> = ({ borderStyle, width, height, maxCharCount = 275 }) => {
    const [text, setText] = useState("");
    //const MAX_CHAR_COUNT = 275;
  
    return (
      <TextareaContainer width={width} >
        <StyledTextarea
          //borderStyle={borderStyle}
          style={{height: height}}
          width={width}
          height={height}
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={maxCharCount}
          minRows={3}
        />
        <HintText>
          <span className="text-wrapper-6">{maxCharCount - text.length} characters left</span>
        </HintText>
      </TextareaContainer>
    );
  }
  
export default CustomTextarea;