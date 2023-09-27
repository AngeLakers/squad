import React from 'react';
import { Divider} from '@mui/material';
import styled from 'styled-components';
import CustomTextarea from '@/ui/customtextarea';
import {
  fontFamily,basewhite, boxShadow,
  gray900,
  largeFontSize, 
  mediumLineHeight, xlargeLineHeight,
  mediumFontWeight, titleFontWeight, mediumFontSize
} from "@/styles/reuseParams"

const Container = styled.div`
  background-color: ${basewhite};
  border-radius: 8px;
  box-shadow: ${boxShadow};
  width: 100%;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;


const AnswerQuestionTitle = styled.h1`
font-family: ${fontFamily};
font-style: normal;
font-weight: ${titleFontWeight};
font-size: ${largeFontSize};
line-height: ${xlargeLineHeight};
color: ${gray900};
margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.p`
  color: ${gray900};
  font-size: ${mediumFontSize};
  font-weight: ${mediumFontWeight};
  line-height: ${mediumLineHeight};
  margin-bottom: 2px;
`;

const StyledCustomTextarea = styled(CustomTextarea)`
  borderStyle="1px solid #D2D6DB"
  margin-bottom: 6px; // This provides the gap below the textarea
`;


const Questionaire: React.FC = () => {
  return (
    <Container>
      <AnswerQuestionTitle>Answer This questions</AnswerQuestionTitle>
      <Divider />
      
      <Section>
        <Label>why are you great fit for this role</Label>
        <Flex>
            <StyledCustomTextarea />
        </Flex>
      </Section>
      <Divider />
      
      <Section>
        <Label>What excites you about this mission</Label>
        <Flex>
            <StyledCustomTextarea />
        </Flex>
      </Section>
      <Divider />
      
      <Section>
        <Label>Tell us your experience with XYZ</Label>
        <Flex>
            <StyledCustomTextarea />
        </Flex>
        </Section>
    </Container>
  );
}

export default Questionaire;
