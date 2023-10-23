"use client";
import React, {FC, useRef} from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div<{ width?: string, flexDirection?: 'row' | 'column'  }>`
    width: ${props => props.width || '100%'}; 
    padding: 2rem;
    //background-color: #f8f8f8;
  overflow: hidden;
  flex-direction: ${(props) => props.flexDirection || 'row'};

`;

const StyledImage = styled.img`
  width: 1rem;
  height: 1rem;
  vertical-align: middle;
`;


const Header = styled.div`
  width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

  position: relative;
`;

const Title = styled.h1`

  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
 width: fit-content;
  color: #111927;
  text-align: left;
  flex-shrink: 0;

`;


const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  position: absolute;
    right: 0;
  top: 50%; 
  transform: translateY(-50%);
  
  
  
`;
 const HeadGroup = styled.div`
    display: flex;
    gap: 1rem;
   align-items: center;

 ` ;

const NavigateButton = styled.button`
  
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: 1px solid #d2d6db;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem; // Adjust padding as per your requirement
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0; // Adjust hover color as per your requirement
  }
`;
const CardsContainer = styled.div`
    display: flex;
   

  overflow-x: hidden;
  gap: 2rem;
  width: 100%;
  white-space: nowrap;
  scroll-behavior: smooth;
padding-bottom:1rem;
    flex-shrink: 0;

`;


const SeeAllButton = styled.button`
  position: relative;
  width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;

  justify-content: flex-start;
  text-align: left;
  font-size: 1rem;
  color: #1b18e4;
  font-weight: 600;
  border: none;
  background: none;
  cursor: pointer;
  
`;


interface WrapperProps {
    title: string;
    children: React.ReactNode;
    scrollable?: number;
    showSeeAll?: boolean;
    showLogo?: boolean;
    width?: string;
    flexDirection?: 'row' | 'column' ;

}

const CardWrapper: FC<WrapperProps> = ({
                                           title,
                                           children,
                                           scrollable,
                                           showSeeAll = false,
                                           showLogo = false,
                                           width,
                                           flexDirection
                                       }) => {


    const cardContainerRef = useRef<HTMLDivElement>(null);

    const handleNavigate = (direction: 'left' | 'right') => {
        const container = cardContainerRef.current;
        if (container) {
            const remInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
            const amountToScrollRem = scrollable ? scrollable : 30;
            const amountToScrollPx = amountToScrollRem * remInPixels;

            const scrollOptions = {
                top: 0,
                left: direction === 'left' ? -amountToScrollPx : amountToScrollPx,
                behavior: 'smooth'
            };

            container.scrollBy(scrollOptions);
        }
    };

    return (
        <WrapperStyled width={width} flexDirection={flexDirection}>
            <Header>
                <HeadGroup>
                    {showLogo && <StyledImage src="/profile-icon/ellipse-green.svg" alt="Logo" />}
                    <Title>{title}</Title>
                    {showSeeAll && <SeeAllButton>See All</SeeAllButton>}
                </HeadGroup>


                <ButtonGroup>
                <NavigateButton onClick={() => handleNavigate('left')}>{'<'}</NavigateButton>

                    <NavigateButton onClick={() => handleNavigate('right')}>{'>'}</NavigateButton>
                 </ButtonGroup>


    </Header>


            <CardsContainer ref={cardContainerRef}>
                {children}
            </CardsContainer>
    </WrapperStyled>
);
};

export default CardWrapper;