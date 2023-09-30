import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: none;
    cursor: pointer;
`;

const Icon = styled.img`
    width: 20px;  // Adjust based on your design
    height: 20px;  // Adjust based on your design
    margin-right: 5px;  // Space between icon and text
`;
interface RightArrowIconButtonProps {
    onClick: () => void;
}


const RightArrowIconButton: React.FC<RightArrowIconButtonProps> = ({onClick}) => (
    <StyledButton onClick={onClick}>
        <Icon src="/icon/rightArrow.svg" alt="Right Arrow" />
    </StyledButton>
);

export default RightArrowIconButton;
