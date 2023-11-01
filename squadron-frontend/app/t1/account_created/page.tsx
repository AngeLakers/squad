'use client';
import * as React from 'react';

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
//to do: button link need to be changed
export default function Home() {
    return (
        <>
        <SimpleHeader></SimpleHeader>
        <MainContent>
         
        <ApplicationSent
            titleText="Thank you for joining us"
            subtitleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci massa mauris justo, urna et feugiat sagittis et. Aliquet amet suspendisse tellus ultrices hac id imperdiet. Pellentesque sit sit suspendisse at. Mauris duis pharetra dictum aenean ac sed amet."
            button1Text="Build my profile now"
            button2Text="Skip"
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
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '24px',
                letterSpacing: '0em',
                color: '#4B48EC',
                textAlign: 'center'
            }}
            button1Link='/profile'
            button2Link='/homepage'
            
        />
      </MainContent>
      </>
        
    );
}
