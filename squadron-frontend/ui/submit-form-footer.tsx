import React from "react";
import Button from '@mui/material/Button';
import styles from 'styled-components';
import { styled } from '@mui/material/styles';
import { gray300, gray600,gray700, primary600, borderColor, basewhite } from "@/styles/reuseParams"

// TODO: The style of Button in footer is not exactly same as figma(fontWeight, button width, etc.)
const SubmitFormFooter = styles.div`
    border-top: 2px solid ${borderColor};    
    display: flex;
    justify-content: center;
`;

const FooterContainer = styled('footer')({
    alignItems: 'center',
    backgroundColor: '${basewhite}',
    display: 'flex',
    flexDirection: 'column',
    height: '80px',
    justifyContent: 'center',
    position: 'relative',
    width:" 80%",
});

const Container = styled('div')({
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flex: '0 0 auto',
    justifyContent: 'space-between',
    padding: '0px 216px',
    position: 'relative',
    width: '100%',
});

const SaveApplyButtonContainer = styled('div')({
    alignItems: 'flex-start',
    display: 'inline-flex',
    flex: '0 0 auto',
    gap: '48px',
    position: 'relative',
});

export const SubmitCancelFooter = () => {
  return (
    <SubmitFormFooter>
      <FooterContainer>
        <Container>
            <Button variant="text" sx={{ color: gray600  }}>Cancel</Button>     
            <SaveApplyButtonContainer>
                <Button variant="outlined" sx={{ borderColor: gray300, color: gray700 }}>Save as draft</Button>
                <Button variant="contained" href="application_sent" sx={{ backgroundColor: primary600, color: basewhite }}>Apply</Button>
            </SaveApplyButtonContainer>
        </Container>
      </FooterContainer>
    </SubmitFormFooter>
  );
};

