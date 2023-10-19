import React, { useState } from 'react';
import styled from 'styled-components';
import {ArrowDownSVG} from '@/ui/svgs';

const SlotContent = styled.div`
    width: 20px;
    height: 20px;
`

const FilterWrapper = styled.div`
  position: relative;
  border-radius: 8px;
`;

const FilterButton = styled.button`
  background-color: white;
  display: flex;
  align-items: center;
  border: 1px solid #D2D6DB;
  padding: 10px 14px 10px 14px;
  cursor: pointer;
  gap: 8px;
  border-radius: 4px;

  &:hover {
    background-color: #ebebeb;
    border: 1px solid #384250;

  }
`;
interface DropdownProps {
  width: string;
  height: string;
}

const DropdownContainer = styled.div<DropdownProps>`
  position: absolute;
  top: 100%;
  left: 0;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: white;
  margin-top: 8px;
  z-index: 10;
`;

interface FilterProps {
    filterName?: string;
    containerWidth?: string;
    containerHeight?: string;
    children?: React.ReactNode;
    slot?: React.ReactNode;
}
const CustomFilter: React.FC<FilterProps> = ({ 
    filterName, 
    children, 
    slot,
    containerWidth = '400px',
    containerHeight = '400px'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FilterWrapper>
      <FilterButton onClick={() => setIsOpen(!isOpen)}>
        {slot && <SlotContent>{slot}</SlotContent>}
        {filterName}
        <ArrowDownSVG/>
      </FilterButton>
      {isOpen && <DropdownContainer width={containerWidth} height={containerHeight}>{children}</DropdownContainer>}
    </FilterWrapper>
  );
}

export default CustomFilter;
