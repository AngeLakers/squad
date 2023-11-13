"use client"
import React from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import { ReactNode } from 'react';
import CustomButton from "./custom-button";
import cancelIcon from "../public/cancel.png";
import Image from "next/image";
import {
    gray200,
    gray300,
    gray700,
  } from "@/styles/reuseParams";

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

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 12px;
    gap: 12px;
`;

const Icon = styled.div`
    margin-top: 8px;
`;

interface ApplyCancelProps {
    onClose: () => void;
}

const ApplyCancelPopup: React.FC<ApplyCancelProps> = ({ 
    onClose,

}) => {
    return (
        <PopupComponent 
            onClose={onClose} 
            width="400px" 
            maxHeightPercent={0.1}
        >
            <ContentContainer>
                <Icon><Image src={cancelIcon} alt="Cancel" width={48} height={48} /></Icon>
                <Title>Cancel application</Title>
                <Description>You will lose all the date entered. Do you want to save as a draft instead?</Description>
                <ButtonContainer>
                    <a href="/t5_proj_apply/projectView">
                    <CustomButton 
                        label='Cancel application'
                        preset="outlined"
                        hoverColor={gray200}
                        textColor={gray700}
                        borderColor={gray300} 
                        onClick={onClose}
                    />
                    </a>
                    {/*to do: complete the function save as draft*/}
                    <a href="/t5_proj_apply/projectView">
                        <CustomButton 
                            label='Save as draft' 
                            preset="default"
                            width= '170px'
                            borderColor="#4D5761"
                            onClick={onClose}
                        />
                    </a>
                    
                </ButtonContainer>
            </ContentContainer>
        </PopupComponent>
    );
};

export default ApplyCancelPopup;
