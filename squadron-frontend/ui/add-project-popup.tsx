"use client"
import React, { useState } from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import { ReactNode } from 'react';
import CustomButton from "./custom-button";
import CustomInput from "./custom-input";
import CustomTextarea from "./customtextarea";
import { SearchSVG } from "./svgs";
import {
    basewhite,
    gray200,
    gray300,
    gray500,
    gray600,
    gray700,
    gray900,
    primary600,
    regularFontSize,
    mediumFontSize,
    titleFontSize,
    regularFontWeight,
    mediumFontWeight,
    regularLineHeight,
    largeLineHeight,
    titleFontWeight,
} from "@/styles/reuseParams";

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: space-between
`;
const PopupHeader = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 24px 16px 24px;
    gap: 4px;
`
const PopupBody = styled.div`
    padding: 16px 24px 0px 24px;
    gap: 20px;
    overflow-y: auto;
    width: 100%;
    max-height: 658px;   
`
const PopupFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    width: 100%;
    padding: 32px 0px 0px 0px;
    gap: 12px;
`
const BodyContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
    width: 100%;
`
const InputWithTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: space-between;
    width: 100%;
`
const CompanyIndustrySearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
`
const Title = styled.div`
    color: ${gray900};
    font-weight: ${titleFontWeight};
    font-size: ${titleFontSize};
    line-height: ${largeLineHeight};
`;
const TitleDiscrption = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
`
const WorkHereCheckboxContainer = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
`
const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const WorkHereCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
 
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
`;

const ButtonContainer = styled.div`
    padding: 12px 24px 24px 24px;
    gap: 12px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

interface AddProjectPopupProps {
    onClose: () => void;
    showDivider?: boolean;
    icon?: ReactNode;
}

const AddProjectPopup: React.FC<AddProjectPopupProps> = ({
    onClose,
    showDivider = true,
    icon
}) => {
    const [workHere, setWorkHere] = useState(false);
    
    return (
        <PopupComponent onClose={onClose}
            width="640px"
        >
            <ContentContainer>
                <PopupHeader>
                    <Title>Add a project</Title>
                    <TitleDiscrption>Add details. Step 01/02</TitleDiscrption>
                </PopupHeader>
                {showDivider && <Divider />}
                <PopupBody>
                    <BodyContentContainer>
                        <InputWithTitleContainer>
                            <CustomInput
                                title="Project name"
                                type="text"
                                titleFontSize={regularFontSize}
                                titleFontWeight= {mediumFontWeight}
                                titleColor={gray700}
                                borderColor={gray300}
                                borderRadius="8px"
                                inputHeight="40px"
                                inputWidth="100%"
                                borderWidth="1px"
                                inputTextColor={gray900}
                                inputTextSize={mediumFontSize}
                                inputTextWeight={mediumFontWeight}
                            />
                        </InputWithTitleContainer>
                        <InputWithTitleContainer>
                            <CustomInput
                                title="My role"
                                type="text"
                                titleFontSize={regularFontSize}
                                titleFontWeight={mediumFontWeight}
                                titleColor={gray700}
                                borderColor={gray300}
                                borderRadius="8px"
                                inputHeight="40px"
                                inputWidth="100%"
                                borderWidth="1px"
                                inputTextColor={gray900}
                                inputTextSize={mediumFontSize}
                                inputTextWeight={mediumFontWeight}
                            />
                        </InputWithTitleContainer>
                
                        {showDivider && <Divider />}
                        <CompanyIndustrySearchContainer>
                            <InputWithTitleContainer>
                                <CustomInput
                                    title="From"
                                    type="select"
                                    titleFontSize={regularFontSize}
                                    titleFontWeight={mediumFontWeight}
                                    titleColor={gray700}
                                    borderColor={gray300}
                                    borderRadius="8px"
                                    inputHeight="40px"
                                    inputWidth="100%"
                                    borderWidth="1px"
                                    inputTextColor={gray500}
                                    inputTextSize={mediumFontSize}
                                    inputTextWeight={regularFontWeight}
                                    options={["2021", "2022", "2023", "2024"]}
                                    placeholder="Year"
                                />
                            </InputWithTitleContainer>
                            <InputWithTitleContainer>
                                <CustomInput
                                    title="To"
                                    type="select"
                                    titleFontSize={regularFontSize}
                                    titleFontWeight={mediumFontWeight}
                                    titleColor={gray700}
                                    borderColor={gray300}
                                    borderRadius="8px"
                                    inputHeight="40px"
                                    inputWidth="100%"
                                    borderWidth="1px"
                                    inputTextColor={gray500}
                                    inputTextSize={mediumFontSize}
                                    inputTextWeight={regularFontWeight}
                                    options={["2021", "2022", "2023", "2024"]}
                                    placeholder="year"
                                />
                            </InputWithTitleContainer>
                        </CompanyIndustrySearchContainer>
                        <WorkHereCheckboxContainer>
                            <CheckboxContainer>
                                <WorkHereCheckbox checked={workHere} onChange={(e) => setWorkHere(e.target.checked)} />
                                Live project
                            </CheckboxContainer>
                        </WorkHereCheckboxContainer>
                        
                        {showDivider && <Divider />}

                        <CompanyIndustrySearchContainer>                
                            <InputWithTitleContainer>
                                <CustomInput
                                    title="Add Squad member(s)"
                                    type="searchableSelect"
                                    titleFontSize={regularFontSize}
                                    titleFontWeight={mediumFontWeight}
                                    titleColor={gray700}
                                    borderColor={gray300}
                                    borderRadius="8px"
                                    inputHeight="40px"
                                    inputWidth="100%"
                                    borderWidth="1px"
                                    inputTextColor={gray500}
                                    inputTextSize={mediumFontSize}
                                    inputTextWeight={regularFontWeight}
                                    options={["Oliva", "Phoenix", "Lana", "Lily"]}
                                    placeholder="Search"
                                />
                            </InputWithTitleContainer>
                        </CompanyIndustrySearchContainer>
                        
                        <InputWithTitleContainer>
                            <CustomTextarea
                                label="Description*"
                                showHintText={false}
                                borderStyle="1px solid #D2D6DB"
                                labelStyle={{ 
                                    color: '#384250',
                                    fontSize: "14px",
                                    fontWeight: "500",
                                     }}

                            />
                        </InputWithTitleContainer>
                        <InputWithTitleContainer>
                        
                            <CustomInput
                                title="Project URL"
                                type="text"
                                titleFontSize={regularFontSize}
                                titleFontWeight={mediumFontWeight}
                                titleColor={gray700}
                                borderColor={gray300}
                                borderRadius="8px"
                                inputHeight="40px"
                                inputWidth="100%"
                                borderWidth="1px"
                                inputTextColor={gray500}
                                inputTextSize={mediumFontSize}
                                inputTextWeight={regularFontWeight}
                                
                            />
                        </InputWithTitleContainer>
                    </BodyContentContainer>
                </PopupBody>

                <PopupFooter>
                    <ButtonContainer>
                        <CustomButton
                            label="Cancel"
                            preset="outlined"
                            hoverColor={gray200}
                            textColor={gray700}
                            borderColor={gray300}
                            onClick={onClose}
                        ></CustomButton>
                        <CustomButton
                            label="Add project"
                            preset="outlined"
                            backgroundColor={primary600}
                            textColor={basewhite}
                            borderColor={primary600}
                        ></CustomButton>
                    </ButtonContainer>
                </PopupFooter>
            </ContentContainer>
        </PopupComponent>
    );
};

export default AddProjectPopup;
