import React, { useState } from 'react';
import styled from 'styled-components';
import CustomButton from './custom-button';
import CustomBadge from './custom-badge';
import { Divider } from "@mui/material";
import { PurpleCheckmark } from './svgs';
import { gray200, gray400, gray500, gray700, gray900, mediumFontSize, mediumFontWeight, mediumLineHeight, regularFontSize, regularLineHeight } from '@/styles/reuseParams';
import CustomFilter from './custom-filter';
import CustomDropdownList from './custom-dropdown-list';
import { listenerCount } from 'process';

const DropdownContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    position: absolute;
    height: fit-content;
    width: 100%;
    border-radius: 8px;
    z-index: 1;
    border: 1px solid #E5E7EB;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`
const DropdownBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    max-height: 424px;
    width: 100%;
    padding: 24px;
    gap: 8px;
`
const DropdownFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding: 32px 0 0 0;
    gap: 24px;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    padding: 0 24px 24px 24px;
    gap: 12px;
    justify-content: space-between;   
`
const Item = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    cursor: pointer;
    padding: 2px 6px 2px 6px;
    color: ${gray900};
    fontsize: ${mediumFontSize};
    font-weight: ${mediumFontWeight};
    line-height: ${mediumLineHeight};
    &:hover {
        background-color: #F9FAFB;
    }
`

const ClickIconContainer = styled.div`
    width: 20px;
    height: 20px;
`
interface LocationFilterProps {
    listName?: string;
    items?: string[];
    showDivider?: boolean;
    inputHeight?: string;
    inputWidth?: string;
    inputTextSize?: string;
    inputTextWeight?: string;
    inputTextColor?: string;
    inputTextLineHeight?: string;
}

const LocationFilter: React.FC<LocationFilterProps> = ({
    showDivider = true,
    listName,
    items = [],


}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <DropdownContainer>
            <DropdownBodyContainer>
                <CustomDropdownList
                    listName={listName}
                    color={gray700}
                    fontSize={regularFontSize}
                    fontWeight={mediumFontWeight}
                    lineHeight={regularLineHeight}
                    onToggle={handleToggle}
                    isChecked={isChecked}
                    items={items}
                />

            </DropdownBodyContainer>
            <DropdownFooterContainer>
                {showDivider && <Divider />}
                <ButtonContainer>
                    <CustomButton label="Clear all" preset='text' />
                    <CustomButton label="Apply" preset='default' />
                </ButtonContainer>
            </DropdownFooterContainer>
        </DropdownContainer>
    )
}

export default LocationFilter;

