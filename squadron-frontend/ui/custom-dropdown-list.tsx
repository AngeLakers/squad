import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowDownSVG } from '@/ui/svgs';

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    width: 16px;
    height: 16px;
`
const CheckboxAndListNameContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: 8px;
`

const DropDownListName = styled.div<{
    fontSize?: string,
    fontWeight?: string | number,
    lineHeight?: string,
    color?: string,
    backgroundColor?: string,
    height?: string,
    width?: string

}>`
    background-color: ${props => props.backgroundColor || '#F3F4F6'};
    color: ${props => props.color || '#384250'};
    font-size: ${props => props.fontSize || '14px'};
    font-weight: ${props => props.fontWeight || '400'};
    line-height: ${props => props.lineHeight || '20px'};
    height: ${props => props.height || '38px'};
    width: ${props => props.width || '100%'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-radius: 6px;
    padding: 9px 10px 9px 10px;
    gap: 12px;
`;

const ItemInList = styled.button<{
    backgroundColor?: string,
    borderColor?: string,
    borderWidth?: string,
    borderRadius?: string,
    height?: string,
    width?: string,
    color?: string,
    fontSize?: string,
    fontWeight?: string | number,
    lineHeight?: string,
}>`
    background-color: ${props => props.backgroundColor || '#F3F4F6'};
    color: ${props => props.color || '#384250'};
    font-size: ${props => props.fontSize || '14px'};
    font-weight: ${props => props.fontWeight || '400'};
    line-height: ${props => props.lineHeight || '20px'};

    display: flex;
    align-items: flex-start;
    border: ${props => props.borderWidth || '1px'} solid ${props => props.borderColor || 'white'};
    padding: 9px 10px 9px 10px;
    cursor: pointer;
    gap: 12px;
    border-radius: 6px;

    &:hover {
        background-color: #ebebeb;
        border: 1px solid #384250;

    }
`;
const DropdownItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #ebebeb;
    border-radius: 6px;
    margin-top: 8px;
    z-index: 10;  // To ensure dropdown appears above other elements
    background-color: #ffffff;
`;

interface DropdownListProps {
    listName?: string;
    children?: React.ReactNode;
    items?: string[];
    onToggle?: () => void;
    isChecked?: boolean;
    backgroundColor?: string,
    borderColor?: string,
    height?: string,
    width?: string,
    color?: string,
    fontSize?: string,
    fontWeight?: string | number,
    lineHeight?: string,

}
const CustomDropdownList: React.FC<DropdownListProps> = ({
    listName,
    items = [],
    onToggle,
    isChecked,
    backgroundColor,
    height,
    width,
    color,
    fontSize,
    fontWeight,
    lineHeight
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <DropDownListName onClick={handleToggleDropdown}>
            <CheckboxAndListNameContainer>
                <Checkbox checked={isChecked} onChange={onToggle} />
                <DropDownListName 
                    backgroundColor={backgroundColor}
                    height={height}
                    width={width}
                    color={color}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    lineHeight={lineHeight}
                >
                    {listName}
                </DropDownListName>
            </CheckboxAndListNameContainer>
            <ArrowDownSVG />
            {isOpen && 
                <DropdownItemsContainer>
                    {items.map((item, index) => (
                        <ItemInList key={index}>
                            {item}
                        </ItemInList>
                    ))}
                </DropdownItemsContainer>
            }

        </DropDownListName>
    )


}

export default CustomDropdownList;
