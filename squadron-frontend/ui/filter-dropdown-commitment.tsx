import React, { useRef } from 'react';
import styled from 'styled-components';
import CustomButton from './custom-button';
import CustomBadge from './custom-badge';
import { Divider, Input } from "@mui/material";
import { PurpleCheckmark, DollarSVG } from './svgs';
import { gray200, gray400, gray500, gray900, mediumFontSize, mediumFontWeight, mediumLineHeight, regularFontWeight } from '@/styles/reuseParams';

const DropdownContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    position: absolute;
    height: fit-content;
    width: 100%;
    border-radius: 8px;
    z-index: 1;
    gap: 16px;
    border: 1px solid #E5E7EB;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`
const DropdownBodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    max-height: 68px;
    width: 100%;
    padding: 24px 24px 0 24px;
    gap: 8px;  
`
const MaxMinContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    gap: 7px;
    justify-content: flex-start;
    align-items: center   
`
const PerHour = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 14px;
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #4D5761; 
`
const DropdownFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding: 0 24px 24px 24px;
    gap: 24px;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    // padding: 0 24px 24px 24px;
    // gap: 24px;
    justify-content: space-between;   
`
const InputWrapper = styled.div`
    position: relative;
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

    padding: 8px 12px 8px 12px;
    border-color: ${props => props.borderColor || '#D2D6DB'};
    border-width: ${props => props.borderWidth || '1px'};
    border-radius: ${props => props.borderRadius || '8px'};
    height: ${props => props.height || '44px'};
    width: ${props => props.width || 'inherit'};
    color: ${props => props.color || '#6C737F'};
    font-size: ${props => props.fontSize || '16px'};
    font-weight: ${props => props.fontWeight || { regularFontWeight }}};
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
  `;
interface CommitmentDropdownFilterProps {
    showDivider?: boolean;
    inputHeight?: string;
    inputWidth?: string;
    inputTextSize?: string;
    inputTextWeight?: string;
}


const CommitmentDropdownFilter: React.FC<CommitmentDropdownFilterProps> = ({
    showDivider = true,
}) => {

    const minInputRef = useRef<HTMLInputElement>(null);
    const maxInputRef = useRef<HTMLInputElement>(null);

    const clearAll = () => {
        if (minInputRef.current) minInputRef.current.value = '';
        if (maxInputRef.current) maxInputRef.current.value = '';
    };
    return (
        <DropdownContainer>
            <DropdownBodyContainer>
                <MaxMinContainer>
                    {/* <InputWrapper> */}
                        <StyledInput
                            width='51px'
                            ref={minInputRef}
                            // Only allow digits
                            pattern='\d*'
                            placeholder="Min" />
                    {/* </InputWrapper> */}
                    <PerHour>hrs/week</PerHour>
                </MaxMinContainer>
                <MaxMinContainer>
                    <StyledInput
                        width='51px'
                        ref={maxInputRef}
                        pattern='\d*'
                        placeholder="Max" />
                    <PerHour>hrs/week</PerHour>
                </MaxMinContainer>
            </DropdownBodyContainer>
            <DropdownFooterContainer>
                {showDivider && <Divider />}
                <ButtonContainer>
                    <CustomButton label="Clear all" preset='text' onClick={clearAll} />
                    <CustomButton label="Apply" preset='default' />
                </ButtonContainer>
            </DropdownFooterContainer>
        </DropdownContainer>
    )
}

export default CommitmentDropdownFilter;

