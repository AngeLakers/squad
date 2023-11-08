import React, { useState } from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import CustomTextarea from "./customtextarea";
import CustomButton from "./custom-button";
import { LinkSVG } from "./svgs";


import {
    basewhite,
    gray200,
    gray300,
    gray600,
    gray700,
    primary600,
    regularFontSize,
    titleFontSize,
    regularFontWeight,
    mediumFontWeight,
    regularLineHeight,
    largeLineHeight,
    titleFontWeight,
} from "@/styles/reuseParams";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

`;

const PopupHeader = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 24px 16px 24px;
    gap: 8px; 
    
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: ${largeLineHeight};
`;

const Description = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
`;

const PopupBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 24px 0px 24px;
    gap: 40px;
    width: 100%; 
    overflow-y: auto; 
   
`;

const BodyForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
`;

const InputWrapper = styled.div`
    position: relative;
    width: 100%; // or whatever width you want
`;

const IconWrapper = styled.div`
    position: absolute;
    left: 10px; // adjust as needed
    top: 70%;
    transform: translateY(-50%);
    pointer-events: none;
`;

const InputLabel = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: #384250; 
`;

const CustomInput = styled.input`
    padding: 10px 14px 10px 40px;
    border: 1px solid #d2d6db;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    width: 100%;
    transition: border 0.3s ease; 
    &:hover {
        border: 1px solid #9daab6; 
    }
`;


const PopupFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding:32px 0px 0px 0px;
    
`;


const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 0px 24px 24px 24px;
    gap: 12px;
`;

interface SocialMediaProps {
    onClose: () => void;
}

const SocialMediaPopup: React.FC<SocialMediaProps> = ({ onClose }) => {


    return (
        <>
            <PopupComponent onClose={onClose} width="432px" maxHeightPercent={0.1}>
                <Container>
                    <PopupHeader>
                        <Title>Social Media</Title>
                        <Description>Info of this screen</Description>
                    </PopupHeader>

                    <Divider />

                    <PopupBody>
                        <BodyForm>
                            <InputContainer>
                                <InputWrapper>
                                    <InputLabel>LinkedIn</InputLabel>
                                    <CustomInput type="text" />
                                    <IconWrapper><LinkSVG /></IconWrapper>
                                </InputWrapper>
                            </InputContainer>

                            <InputContainer>
                                <InputWrapper>
                                    <InputLabel>Personal website</InputLabel>
                                    <CustomInput type="text" />
                                    <IconWrapper><LinkSVG /></IconWrapper>
                                </InputWrapper>
                            </InputContainer>

                            <InputContainer>
                                <InputWrapper>
                                    <InputLabel>Github (optional)</InputLabel>
                                    <CustomInput type="text" />
                                    <IconWrapper><LinkSVG /></IconWrapper>
                                </InputWrapper>
                            </InputContainer>

                            <InputContainer>
                                <InputWrapper>
                                    <InputLabel>Dribbble (optional)</InputLabel>
                                    <CustomInput type="text" />
                                    <IconWrapper><LinkSVG /></IconWrapper>
                                </InputWrapper>
                            </InputContainer>

                            <InputContainer>
                                <InputWrapper>
                                    <InputLabel>Behance</InputLabel>
                                    <CustomInput type="text" />
                                    <IconWrapper><LinkSVG /></IconWrapper>
                                </InputWrapper>
                            </InputContainer>

                            <InputContainer>
                                <InputWrapper>
                                    <InputLabel>Stack Overflow</InputLabel>
                                    <CustomInput type="text" />
                                    <IconWrapper><LinkSVG /></IconWrapper>
                                </InputWrapper>
                            </InputContainer>

                            <InputContainer>
                                <InputWrapper>
                                    <InputLabel>Twitter</InputLabel>
                                    <CustomInput type="text" />
                                    <IconWrapper><LinkSVG /></IconWrapper>
                                </InputWrapper>
                            </InputContainer>
                        </BodyForm>
                    </PopupBody>

                    <PopupFooter>
                        <ButtonContainer>
                            <CustomButton
                                label="Cancel"
                                backgroundColor="#FFFFFF"
                                textColor="#384250"
                                borderColor="#D2D6DB"
                                onClick={onClose}
                            />
                            <CustomButton
                                label="Update"
                                backgroundColor="#4B48EC"
                                textColor="#FFFFFF"
                                borderColor="#4B48EC"
                                onClick={onClose}
                            />
                        </ButtonContainer>
                    </PopupFooter>
                </Container>
            </PopupComponent>
        </>
    );
};

export default SocialMediaPopup;
