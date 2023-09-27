import React from 'react';
import { Divider } from '@mui/material';
import styled from 'styled-components';
import UploadVideoButton from '@/ui/upload-file-button';
import {
  fontFamily, basewhite, boxShadow,
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
const UploadFileTitle = styled.h1`
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

const UploadButtonContainer = styled.div`
  border: '1px solid #D2D6DB';
  padding: 12px 14px;
  border-radius: 8px;
  margin-bottom: 0px;
  resize: none; // Remove the resize handle on the bottom right
  box-sizing: border-box; // Make sure the padding and border are included in the width and height
`

const UploadFile: React.FC = () => {
  return (
    <Container>
      <UploadFileTitle>Would you like to attach any documents?</UploadFileTitle>
      <Divider />
      <Section>
        <UploadButtonContainer>
          <UploadVideoButton label="Upload a File" />
        </UploadButtonContainer>
      </Section>
    </Container>
  );
}

export default UploadFile;
