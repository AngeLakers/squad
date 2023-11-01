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
export default function ThankYou() {
    return (
        <>
        <SimpleHeader></SimpleHeader>
        <MainContent>
         
        <ApplicationSent
            featuredIconBgColor='#F9FAFB'
            iconName='love_white'
            titleText="Thank you for joining us"
            subtitleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci massa mauris justo, urna et feugiat sagittis et. Aliquet amet suspendisse tellus ultrices hac id imperdiet. Pellentesque sit sit suspendisse at. Mauris duis pharetra dictum aenean ac sed amet."
            showButton1={false}
            showButton2={false}
        />
      </MainContent>
      </>

        
    );
}
