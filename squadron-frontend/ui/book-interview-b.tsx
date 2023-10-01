"use client"
import React from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import { ReactNode } from 'react';
import CustomButton from "./custom-button";

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
    margin-bottom: 20px;
    color: #475467;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    margin:25px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const Icon = styled.div`
    margin-top: 8px;
`;

const TextArea = styled.textarea`
    width: 100%;
    resize: none;
    border: 1px solid #D2D6DB;
    border-radius: 8px;
    padding: 12px 14px;
    color: #6C737F;
    font-size: 16px;
    font-weight: 400;
`;

interface BookInterviewBProps {
    onClose: () => void;
    name: string;
    cancelButtonText: string;
    confirmButtonText: string;
    showDivider?: boolean;
    icon?: ReactNode;
    button2Link?: string; 
}

const BookInterviewB: React.FC<BookInterviewBProps> = ({ 
    onClose,
    name,
    cancelButtonText,
    confirmButtonText,
    button2Link,
    icon
}) => {
    return (
        <PopupComponent onClose={onClose}  width="35%" minWidth="400px" minHeight="400px" >
            <ContentContainer>
                <Icon>{icon}</Icon>
                <Title>Request an interview with {name}</Title>
                <Description>Your applicant will receive an email.</Description>
                <TextArea 
                    defaultValue={`Hi ${name}!\n\nThanks for applying to this role.\n\nI’d love to schedule a call with you. Please let me know a few times that work for you.\n\nThanks!`}
                    rows={8}
                />
                <Divider/>
                <ButtonContainer>
                    <CustomButton label={cancelButtonText} borderColor="#D0D5DD" padding="10px 18px" margin="0 8px 0 0" backgroundColor="white" textColor="#344054" hoverColor="none" onClick={onClose}/>
                    <a href={button2Link || "#"}><CustomButton label={confirmButtonText} borderColor="#D0D5DD" padding="10px 18px" backgroundColor="#111927" textColor="white" hoverColor="none"/></a>
                </ButtonContainer>
            </ContentContainer>
        </PopupComponent>
    );
};

export default BookInterviewB;