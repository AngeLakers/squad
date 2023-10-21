import React from "react";
import styled from 'styled-components';
import CustomFilter from '@/ui/custom-filter';
import CustomButton from "./custom-button";

type InputType = 'text';
const TitleAndFilterContainer = styled.div`
    width: 100%;
    min-height: 232px;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
`
const SearchSectionContainer = styled.div`
    width: 100%;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
`
const SortSectionContainer = styled.div`
    width: 100%;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
    flex-direction: row-reverse;
`
interface FilterTitleProps {
    filterTitle?: string;
    titleFontSize?: string;
    titleFontWeight?: string;
    titleLineHeight?: string;
    titleColor?: string;
}

const FilterTitle = styled.div<FilterTitleProps>`
    font-size: ${props => props.titleFontSize || "inherit"};
    font-weight: ${props => props.titleFontWeight || "inherit"};
    line-height: ${props => props.titleLineHeight || "inherit"};
    color: ${props => props.titleColor || "inherit"};
`;
const SearchButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    position: relative;
    width: 100%;
`
const FiltersContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    position: relative;
    width: 100%;
`

interface TitleAndFilterProps {
    type?: InputType;
    filterTitle?: string;
    titleFontSize?: string;
    titleFontWeight?: string;
    titleLineHeight?: string;
    titleColor?: string;
    inputTextColor?: string;
    inputTextSize?: string;
    inputTextWeight?: string;
    inputHeight?: string;
    inputWidth?: string;
    borderColor?: string;
    borderWidth?: string;
    borderRadius?: string;
    placeholder?: string;
    filterName?: string;
    containerWidth?: string;
    containerHeight?: string;
    children?: React.ReactNode;
    slot?: React.ReactNode;

    filters: {
        filterName: string;
        slot: React.ReactNode;
        containerWidth: string;
        containerHeight: string;
        children: React.ReactNode;
    }[];

}
const FilterInput = styled.input<{
    borderColor?: string,
    borderWidth?: string,
    borderRadius?: string,
    height?: string,
    width?: string,
    color?: string,
    fontSize?: string,
    fontWeight?: string | number
}>`
    border-color: ${props => props.borderColor || '#D2D6DB'};
    border-width: ${props => props.borderWidth || '1px'};
    border-radius: ${props => props.borderRadius || '8px'};
    height: ${props => props.height || 'inherit'};
    width: ${props => props.width || 'inherit'};
    color: ${props => props.color || '#111927'};
    font-size: ${props => props.fontSize || 'inherit'};
    font-weight: ${props => props.fontWeight || 'inherit'};
    &:focus {
        outline: 0;
    }

`
const TitleAndFilter: React.FC<TitleAndFilterProps> = ({
    filterTitle,
    type,
    borderColor,
    borderWidth,
    borderRadius,
    titleFontSize, 
    titleFontWeight, 
    titleLineHeight,
    titleColor,  
    inputHeight, 
    inputWidth, 
    inputTextColor,
    inputTextSize,
    inputTextWeight,
    placeholder,
    filterName,
    slot,
    containerWidth,
    containerHeight,
    children,
    filters
}) => {
    return (
        <TitleAndFilterContainer>
            <SearchSectionContainer>
                <FilterTitle
                    titleFontSize={titleFontSize}
                    titleFontWeight={titleFontWeight}
                    titleLineHeight={titleLineHeight}
                    titleColor={titleColor}
                >{filterTitle}</FilterTitle>
                <SearchButtonContainer>
                
                <FilterInput
                    type="text"
                    borderColor={borderColor}
                    borderRadius={borderRadius}
                    height={inputHeight}
                    width={inputWidth}
                    color={inputTextColor}
                    fontSize={inputTextSize}
                    fontWeight={inputTextWeight}
                    placeholder={placeholder}
                />
                <CustomButton 
                    label='Search' 
                    preset="default"/>
                </SearchButtonContainer>
                <FiltersContainer>
                {filters.map(filter => (
                    <CustomFilter 
                        key={filter.filterName}
                        filterName={filter.filterName}
                        slot={filter.slot}
                        containerHeight={filter.containerHeight}
                        containerWidth={filter.containerWidth}
                    >
                        {filter.children}
                    </CustomFilter>
                ))}
                </FiltersContainer>
            </SearchSectionContainer>
            <SortSectionContainer>
                Sorted by: Best match
            </SortSectionContainer>
        </TitleAndFilterContainer>
    )
}
export default TitleAndFilter;
