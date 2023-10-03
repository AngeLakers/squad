import React, {useRef} from 'react';
import styled from 'styled-components';

// Styled components
const WrapperStyled = styled.div`
  
    padding: 2rem;
    //background-color: #f8f8f8;
  width: 70rem;
  overflow: hidden;

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
  gap: 1rem;
  position: relative;
`;

const Title = styled.h1`

  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;

  color: #111927;
  text-align: left;

`;

const SeeAllButton = styled.button`
    background-color: #4CAF50; 
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
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
   gap:1rem;
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
`;

interface WrapperProps {
    title: string;
    children: React.ReactNode;
}

const CardWrapper: React.FC<WrapperProps> = ({ title, children }) => {


    const cardContainerRef = useRef<HTMLDivElement>(null);

    const handleNavigate = (direction: 'left' | 'right') => {
        const container = cardContainerRef.current;
        if (container) {
            const remInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
            const amountToScrollRem = 34;
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
        <WrapperStyled>
            <Header>
                <HeadGroup>
                <StyledImage src="/profile-icon/ellipse-green.svg" alt="Logo" />
                <Title>{title}</Title>
                </HeadGroup>


                {/*<SeeAllButton>See All</SeeAllButton>*/}
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