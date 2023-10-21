import React from 'react';
import styled from 'styled-components';
import CustomButton from './custom-button';
import CustomBadge from './custom-badge';
import { Divider } from "@mui/material";
import {PurpleCheckmark} from './svgs';
import { gray200, gray400, gray500, gray900, mediumFontSize, mediumFontWeight, mediumLineHeight} from '@/styles/reuseParams';

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
    padding: 24px 24px 0 24px;
    gap: 24px;  
`
const SelectedBadgeContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #F9FAFB;
    border-radius: 8px;
    min-height: 60px;
    width: 100%;
    padding: 16px;
    gap: 10px;
    overflow-y: auto; 
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
const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    gap: 24px;
    flex-wrap: wrap;   
`
const Tag = styled.button`
    display: flex;
    flex-direction: row;
    position: relative;
    color: ${gray400};
    font-size: ${mediumFontSize};
    font-weight: ${mediumFontWeight};
    line-height: ${mediumLineHeight};
    gap: 24px;
    &:active {
        color: black;
    }
`
const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding: 4px 0 4px 0;
    border: 1px solid ${gray200};
    border-radius: 8px;
    overflow-y: auto;

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
    padding: 10px 14px 10px 14px;
    border-color: ${props => props.borderColor || '#D2D6DB'};
    border-width: ${props => props.borderWidth || '1px'};
    border-radius: ${props => props.borderRadius || '8px'};
    height: ${props => props.height || '44px'};
    width: ${props => props.width || 'inherit'};
    color: ${props => props.color || '#6C737F'};
    font-size: ${props => props.fontSize || '16px'};
    font-weight: ${props => props.fontWeight || { mediumFontWeight }}};
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
const ClickIconContainer = styled.div`
    width: 20px;
    height: 20px;
`
interface RoleSkillDropdownFilterProps {
    showDivider?: boolean;
    inputHeight?: string;
    inputWidth?: string;
    inputTextSize?: string;
    inputTextWeight?: string;
}

interface TageCategoryProps {
    categories: string[];
    items: Record<string, string[]>;
    onItemSelect: (item: string) => void;
}

const RoleSkillDropdownFilter: React.FC<RoleSkillDropdownFilterProps & TageCategoryProps> = ({
    showDivider = true,
    inputHeight,
    inputWidth,
    inputTextSize,
    inputTextWeight,
    categories,
    items,
    onItemSelect

}) => {
    const [selectedTag, setSelectedTag] = React.useState<string>('All');
    const [searchInput, setSearchInput] = React.useState<string>('');
    const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

    const handleTagClick = (tag: string) => {
        setSelectedTag(tag);
        setSearchInput(''); 
    };

    const handleItemClick = (item: string) => {
        onItemSelect(item);
        if (selectedItems.includes(item)) {
            setSelectedItems(prevItems => prevItems.filter(prevItem => prevItem !== item));
            return;
        }
        setSelectedItems(prevItems => [...prevItems, item]);
    };

    const filteredItems = React.useMemo(() => {
        if (selectedTag === 'All') {
            return Object.values(items).flat();
        }
        return items[selectedTag] || [];
    }, [items, selectedTag]);

    const displayedItems = filteredItems.filter(item =>
        item.toLowerCase().includes(searchInput.toLowerCase())
    );

    const clearAll = () => {
        setSelectedItems([]);
        setSelectedTag('All');
        setSearchInput('');
    };
    return (
        <DropdownContainer>
            <DropdownBodyContainer>
                <SelectedBadgeContainer>
                    {selectedItems.map(item => (
                        <CustomBadge label={item} preset={"outlined_grey"} backgroundColor='#F9FAFB' />
                    ))}
                </SelectedBadgeContainer>
                {showDivider && <Divider />}
                    <TagContainer>
                        <Tag onClick={() => handleTagClick('All')}>All</Tag>
                        {categories.map(tag => (
                            <Tag key={tag} onClick={() => handleTagClick(tag)}>
                                {tag}
                            </Tag>
                        ))}
                    </TagContainer>
                    <StyledInput
                        type="text"
                        placeholder="Search by name"
                        borderColor='#D2D6DB'
                        borderWidth='1px'
                        borderRadius='8px'
                        height={inputHeight || '44px'}
                        width='100%'
                        color='#6C737F'
                        fontSize={inputTextSize || '16px'}
                        fontWeight={inputTextWeight || mediumFontWeight}
                        value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}
                    />
                    <ItemContainer>
                        {displayedItems.map(item => (
                            <Item key={item} onClick={() => handleItemClick(item)}>
                                {item}
                                {selectedItems.includes(item) && (
                                <ClickIconContainer>
                                    <PurpleCheckmark />
                                </ClickIconContainer>
                            )}
                            </Item>
                        ))}
                    </ItemContainer>

            </DropdownBodyContainer>
            <DropdownFooterContainer>
                {showDivider && <Divider />}
                <ButtonContainer>                    
                    <CustomButton label="Clear all" preset='text' onClick={clearAll}/>
                    <CustomButton label="Apply" preset='default' />
                </ButtonContainer>
            </DropdownFooterContainer>
        </DropdownContainer>
    )
}

export default RoleSkillDropdownFilter;

