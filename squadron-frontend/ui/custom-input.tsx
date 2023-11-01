import { gray500 } from '@/styles/reuseParams';
import React from 'react';
import styled from 'styled-components';

type InputType = 'text' | 'select' | 'searchableSelect';

interface CustomInputProps {
  title: string;
  type: InputType;
  options?: string[];  // For select and searchableSelect
  titleFontSize?: string;
  titleFontWeight?: string;
  titleColor?: string;
  inputTextColor?: string;
  inputTextSize?: string;
  inputTextWeight?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  inputHeight?: string;
  inputWidth?: string;
  placeholder?: string;
}

const Title = styled.h4<{ fontSize?: string, fontWeight?: string | number, color?: string }>`
    font-size: ${props => props.fontSize || '14px'};
    font-weight: ${props => props.fontWeight || 'inherit'};
    color: ${props => props.color || '#384250'};
    height: 20px;
    display: block;
    overflow: hidden;
`;

const StyledInput = styled.input<{ 
  borderColor?: string, 
  borderWidth?: string,
  borderRadius?: string, 
  height?: string, 
  width?: string,
  color?: string,
  fontSize?: string,
  fontWeight?: string | number
}>`
  border-color: ${props => props.borderColor || '#ccc'};
  border-width: ${props => props.borderWidth || '1px'};
  border-radius: ${props => props.borderRadius || '8px'};
  height: ${props => props.height || 'inherit'};
  width: ${props => props.width || 'inherit'};
  color: ${props => props.color || '#6C737F'};
  font-size: ${props => props.fontSize || 'inherit'};
  font-weight: ${props => props.fontWeight || 'inherit'};
  box-sizing: border-box;
  ::placeholder {
    color: ${gray500};
  }
  ::-webkit-input-placeholder {
    color: ${gray500};
  }
  &:focus {
    outline: 0;
}
padding: 0 10px;
`;

// customize placeholder color

const StyledSelect = StyledInput.withComponent('select');

const CustomInput: React.FC<CustomInputProps> = ({ 
    title, 
    type, 
    options, 
    titleFontSize, 
    titleFontWeight, 
    titleColor, 
    borderColor, 
    borderWidth,
    borderRadius, 
    inputHeight, 
    inputWidth, 
    inputTextColor,
    inputTextSize,
    inputTextWeight,
    placeholder 
}) => {
    switch (type) {
        case 'text':
            return (
                <div>
                    <Title 
                      fontSize={titleFontSize} 
                      fontWeight={titleFontWeight} 
                      color={titleColor}>
                        {title || ' '}
                    </Title>
                    <StyledInput 
                      type="text" 
                      borderColor={borderColor} 
                      borderRadius={borderRadius} 
                      height={inputHeight} 
                      width={inputWidth}
                      borderWidth={borderWidth}
                      color={inputTextColor}
                      fontSize={inputTextSize}
                      fontWeight={inputTextWeight}
                      placeholder={placeholder}
                     />
                </div>
            );
        case 'select':
            return (
                <div>
                    <Title fontSize={titleFontSize} fontWeight={titleFontWeight} color={titleColor}>{title}</Title>
                    <StyledSelect borderColor={borderColor} borderRadius={borderRadius} height={inputHeight} width={inputWidth}>
                        {options?.map(option => <option key={option}>{option}</option>)}
                    </StyledSelect>
                </div>
            );
        case 'searchableSelect':
            const id = `${title}-list`;
            return (
                <div>
                    <Title fontSize={titleFontSize} fontWeight={titleFontWeight} color={titleColor}>{title}</Title>
                    <StyledInput list={id} borderColor={borderColor} borderRadius={borderRadius} height={inputHeight} width={inputWidth} />
                    <datalist id={id}>
                        {options?.map(option => <option key={option} value={option} />)}
                    </datalist>
                </div>
            );
        default:
            return null;
    }
}

export default CustomInput;
