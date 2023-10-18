"use client"
import React from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import { ReactNode } from 'react';
import CustomButton from "./custom-button";
import cancelIcon from "../public/cancel.png";
import Image from "next/image";

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 24px;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    margin-top: 16px;
`;

const Description = styled.p`
    margin: 4px 0;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #4D5761;

`;


const Icon = styled.div`
    margin-top: 8px;
`;

interface InvitationSentProps {
    onClose: () => void;
}

const InvitationSentPopup: React.FC<InvitationSentProps> = ({ 
    onClose,

}) => {
    return (
        <PopupComponent 
            onClose={onClose} 
            width="400px" 
            maxHeightPercent={0.1}
        >
            <ContentContainer>
                <Icon><Image src={`/icon/send.svg`} alt="Send" width={48} height={48} /></Icon>
                <Title>Invitation Sent</Title>
                <Description>Once your invitee has accepted this invitation, they will be fast tracked through our vetting process.</Description>
                
            </ContentContainer>
        </PopupComponent>
    );
};

export default InvitationSentPopup;
