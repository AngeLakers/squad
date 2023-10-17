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
    margin-bottom: 24px;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
`;

const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 24px;
`;

const Icon = styled.div`
    margin-top: 8px;
`;

interface LaunchMissionProps {
    onClose: () => void;
    onClick?: () => void;
    title: string;
    description: string;
    confirmButtonText: string;
    showDivider?: boolean;
    icon?: ReactNode;
}

const LaunchMissionPopup: React.FC<LaunchMissionProps> = ({ 
    onClose,
    onClick,
    title,
    description,
    confirmButtonText,
    showDivider = true,
    icon,
}) => {
    return (
        <PopupComponent onClose={onClose}  width="30%" minWidth="300px" maxHeightPercent={0.3} minHeight="150px" >
            <ContentContainer>
                <Icon>{icon}</Icon>
                <Title>{title}</Title>
                <Description>{description}</Description>
                {showDivider &&<Divider />}
                <ButtonContainer>
                    <CustomButton label={confirmButtonText} width="100%" preset="default" borderColor="#D0D5DD" padding="10px 18px" backgroundColor="#111927" textColor="white" hoverColor="none" onClick={onClick}/>
                </ButtonContainer>
            </ContentContainer>
        </PopupComponent>
    );
};

export default LaunchMissionPopup;