import { gray200, gray600, gray900, regularFontSize, regularFontWeight, regularLineHeight, titleFontWeight, xlargeFontSize, xxxlargeLineHeight } from '@/styles/reuseParams';
import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

// Styled components
const Card = styled.div`
  border: 1px solid ${gray200};
  border-radius: 12px;
  padding: 32px 40px 32px 40px;
  margin-bottom: 16px;
  box-sizing: border-box;
  gap: 43px;
  background-color: white;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0 0 8px 0;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: ${xlargeFontSize};
  font-weight: ${titleFontWeight};
  line-height: ${xxxlargeLineHeight};
  color: ${gray900};
`;

const SecondaryTitle = styled.h3`
  font-size: ${regularFontSize};
  font-weight: ${regularFontWeight};
  line-height: ${regularLineHeight};
  color: ${gray600};
  margin: 0;
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

const CardContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin-top: 16px;
`;

// Props interface
interface CustomCardProps {
    title: string;
    secondaryTitle: string;
    children: ReactNode;
}

// CustomCard component
const CustomCard: React.FC<CustomCardProps> = ({ title, secondaryTitle, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <Card>
            <CardHeader>
                <div>
                    <Title>{title}</Title>
                    <SecondaryTitle>{secondaryTitle}</SecondaryTitle>
                </div>
                <ToggleButton onClick={toggleOpen}>
                    {isOpen ? '-' : '+'}
                </ToggleButton>
            </CardHeader>
            <CardContent isOpen={isOpen}>
                {children}
            </CardContent>
        </Card>
    );
};

export default CustomCard;
