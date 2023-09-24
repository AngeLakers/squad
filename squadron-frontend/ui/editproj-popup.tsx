"use client"
import React from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { ReactNode } from 'react';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    margin-top: 2%;
`;

const Description = styled.p`
    margin: 2% 3%;
    text-align: center;
    margin-bottom:8%;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 8%;
`;

const Icon = styled.div`
    margin-top: 3%;
`;

interface EditProjProps {
    onClose: () => void;
    title: string;
    description: string;
    cancelButtonText: string;
    confirmButtonText: string;
    showDivider?: boolean;
    icon?: ReactNode;
}

const EditProjPopup: React.FC<EditProjProps> = ({ 
    onClose,
    title,
    description,
    cancelButtonText,
    confirmButtonText,
    showDivider = true,
    icon
}) => {
    return (
        <PopupComponent onClose={onClose}  width="25%" top="37.5%" left="37.5%" maxHeightPercent={0.3}>
            <ContentContainer>
                <Icon>{icon}</Icon>
                <Title>{title}</Title>
                <Description>{description}</Description>
                {showDivider &&<Divider />}
                <ButtonContainer>
                    <Button variant="outlined" onClick={onClose}>{cancelButtonText}</Button>
                    <Button variant="outlined">{confirmButtonText}</Button>
                </ButtonContainer>
            </ContentContainer>
        </PopupComponent>
    );
};

export default EditProjPopup;
