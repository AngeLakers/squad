'use client';
import * as React from 'react';
import Button from '@mui/material/Button';

import ApplicationSent from '@/ui/result-confirm';
import { SimpleHeader } from '@/ui/simple-header';
import styled from "styled-components";


const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background-color: #F9FAFB;
`;
//to do add link to home page
//to do add link to view my application
export default function Home() {
    return (
        <>
        <SimpleHeader></SimpleHeader>
        <MainContent>
         
        <ApplicationSent
            iconName='sent'
            titleText="Application sent"
            subtitleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci massa mauris justo, urna et feugiat sagittis et. Aliquet amet suspendisse tellus ultrices hac id imperdiet. Pellentesque sit sit suspendisse at. Mauris duis pharetra dictum aenean ac sed amet."
            button1Text="View my application"
            button2Text="Home"
            button1Style={{
                width: '384px',
                height: 'auto',
                padding: '10px 18px',
                borderRadius: '8px',
                border: '1px solid #4B48EC',
                boxShadow: '0px 1px 2px 0px #1018280D',
                background: '#4B48EC',
                color: '#FFFFFF',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '24px',
                textAlign: 'center'
            }}
            button2Style={{
                width: '384px',
                height: 'auto',
                padding: '10px 18px',
                borderRadius: '8px',
                border: '1px solid #D2D6DB',
                background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #D2D6DB, #D2D6DB)',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '24px',
                letterSpacing: '0em',
                color: '#384250',
                textAlign: 'center'
            }}
        />
      </MainContent>
      </>
        
    );
}
