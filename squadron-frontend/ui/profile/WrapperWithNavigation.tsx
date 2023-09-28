import React, {useRef} from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Wrapper = styled.div`
    width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
  flex-direction: column;  // 修改为 column 方向
  padding: 1rem 13rem;
  //background-color: #f2f2f2;
`;




const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  padding: 1rem;
`;
const TitleGroup = styled.div`
  display: flex;
  align-items: center;
`;

const SeeAllButton = styled(Button)`
  margin-left: auto;
  background-color: transparent;
  border: none;
  box-shadow: none;
  position: relative;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  font-family: Inter;
  color: #1b18e4;
  text-align: left;
  
  &:hover {
    background-color: transparent;
    box-shadow: none;
  }
`;


const NavigationButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavigationButton = styled(Button)`
  position: relative;
  border-radius: 0.5rem;  /* 8px / 16 = 0.5rem */
  background-color: #fff;
  box-shadow: 0px 0.0625rem 0.125rem rgba(16, 24, 40, 0.05);  /* 1px / 16 = 0.0625rem, 2px / 16 = 0.125rem */
  border: 0.0625rem solid #d0d5dd;  /* 1px / 16 = 0.0625rem */
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.625rem; 
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: 0.875rem;  /* 14px / 16 = 0.875rem */
  color: #384250;
  margin-left: 1.5rem;  /* 24px / 16 = 1.5rem */
  font-family: Inter;
  font-weight: 600;
 
  
`;
const ChildrenContainer = styled.div`
  display: flex;
 
  gap: 1rem;
  width:100%;
  height: auto;
  flex-wrap: nowrap;
  overflow-x: hidden;
  align-items: flex-start !important;
  
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 63rem;
  justify-content: space-between;
`




const WrapperWithNavigation = ({ children, title }) => {

    const containerRef = useRef(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= parseFloat(getComputedStyle(containerRef.current).fontSize) * (64);  // Scroll amount
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += parseFloat(getComputedStyle(containerRef.current).fontSize) * (64);  // Scroll amount
        }
    };
    return (
        <Wrapper>
            <HeaderContainer>
                <TitleGroup>
                    <Title>{title}</Title>
                    <SeeAllButton variant="contained">See All</SeeAllButton>
                </TitleGroup>


                <NavigationButtons>
                    <NavigationButton variant="contained" onClick={scrollLeft}>
                        <ArrowBackIcon />
                    </NavigationButton>
                    <NavigationButton variant="contained" onClick={scrollRight}>
                        <ArrowForwardIcon />
                    </NavigationButton>
                </NavigationButtons>
            </HeaderContainer>
            <ChildrenContainer ref={containerRef}>
                {children}
            </ChildrenContainer>
        </Wrapper>

);
};

export default WrapperWithNavigation;