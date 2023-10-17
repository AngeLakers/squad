"use client"
import React from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { ReactNode } from 'react';
import CustomButton from "./custom-button";
import CustomTextarea from "./customtextarea";

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
    color: #475467;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 24px;
`;

const Divider = styled.div<{ marginTop?: string }>(props => ({
    width: '100%',
    height: '1px',
    backgroundColor: '#e0e0e0',
    marginTop: props.marginTop || '0px',
}));

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 24px;
`;

const Icon = styled.div`
    margin-top: 8px;
`;

interface EditProjProps {
    onClose: () => void;
    title: string;
    description: string;
    cancelButtonText: string;
    confirmButtonText: string;
    showDivider?: boolean;
    icon?: ReactNode;
    button2Link?: string; 
    showTextarea?: boolean; 
}

const EditProjPopup: React.FC<EditProjProps> = ({ 
    onClose,
    title,
    description,
    cancelButtonText,
    confirmButtonText,
    button2Link,
    showDivider = true,
    showTextarea = false,
    icon
}) => {
    return (
        <PopupComponent onClose={onClose}  width="30%" minWidth="400px" maxHeightPercent={0.2} minHeight="150px" >
            <ContentContainer>
                <Icon>{icon}</Icon>
                <Title>{title}</Title>
                <Description>{description}</Description>
                {showTextarea && (
                    <CustomTextarea
                        label="Why do you want to hide this squad?"
                        borderStyle="1px solid #D2D6DB"
                        height="154px"
                        maxCharCount={500}
                    />
                )}
                {showDivider &&<Divider marginTop={showTextarea ? "24px" : undefined} />}
                <ButtonContainer>
                    <CustomButton label={cancelButtonText} preset="default" borderColor="#D0D5DD" width="170px" padding="10px 18px" margin="0 8px 0 0" backgroundColor="white" textColor="#344054" hoverColor="none" onClick={onClose}/>
                    <a href={button2Link || "#"}><CustomButton label={confirmButtonText} preset="default" borderColor="#D0D5DD" width="170px" padding="10px 18px" backgroundColor="#111927" textColor="white" hoverColor="none"/></a>
                </ButtonContainer>
            </ContentContainer>
        </PopupComponent>
    );
};

export default EditProjPopup;
