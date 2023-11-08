import React from "react";
import CustomCard from "../custom-card";
import CustomProjectHeader from "../custom-project-header";
import styledComponents from "styled-components";
import CustomTextarea from "../customtextarea";
import CustomDropdownList from "../custom-dropdown-list";
import SocialMediaPopup from "@/ui/socialmedia-popup";
import styled from "styled-components";
import { LinkSVG } from "../svgs";

import { gray900, mediumFontWeight, regularFontSize, regularLineHeight } from "@/styles/reuseParams";


interface DividerProps {
    marginTop?: string;
    margin?: string;
}
const Divider = styledComponents.hr<DividerProps>`
    width: 100%;
    height: 1px;
    background-color: lightgray;
    border: none;
    margin: ${props => props.margin || '15px 0'};
    margin-top: ${props => props.marginTop || '15px'};
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



export default function AboutYou() {

    return (
        <>
            <CustomCard title="Profile picture & header" secondaryTitle="Update your photo and personal details here."
                children={
                    <>
                        <Divider />
                        <CustomProjectHeader
                            backgroundImage="/black-background.png"
                            avatarImagePath="/icon/projectLogo.svg"
                            avatarHeight={"89px"}
                            avatarWidth={"89px"}
                            button={{
                                isVisible: true,
                                text: "Edit Cover",
                                backgroundColor: "#A0D909",
                                textColor: "#384250",
                                onClick: () => console.log("Edit Cover"),
                            }}
                        />
                    </>
                }
            />
            <CustomCard title="Bio" secondaryTitle="Write a short introduction."
                children={
                    <>
                        <Divider />
                        <CustomTextarea />

                    </>
                } />
            <CustomCard title="Personal Questions" secondaryTitle="Update your photo and personal details here."
                children={
                    <>
                        <Divider />
                        <CustomDropdownList
                            listName="Question 01"
                            color={gray900}
                            fontSize={regularFontSize}
                            fontWeight={mediumFontWeight}
                            lineHeight={regularLineHeight}
                            items={["Lorem ipsum dolor sit amet consectetur.?", "Lorem ipsum dolor sit amet consectetur.?"]}
                        />
                        <CustomTextarea />
                        <CustomDropdownList
                            listName="Question 02"
                            color={gray900}
                            fontSize={regularFontSize}
                            fontWeight={mediumFontWeight}
                            lineHeight={regularLineHeight}
                            items={["Lorem ipsum dolor sit amet consectetur.?", "Lorem ipsum dolor sit amet consectetur.?"]}
                        />
                        <CustomTextarea />
                        <CustomDropdownList
                            listName="Question 03"
                            color={gray900}
                            fontSize={regularFontSize}
                            fontWeight={mediumFontWeight}
                            lineHeight={regularLineHeight}
                            items={["Lorem ipsum dolor sit amet consectetur.?", "Lorem ipsum dolor sit amet consectetur.?"]}
                        />
                        <CustomTextarea />
                    </>
                } />
            <CustomCard title="Social Skills" secondaryTitle="Blablablabal"
                children={
                    <>
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
                    </>
                } />
        </>
    )
}