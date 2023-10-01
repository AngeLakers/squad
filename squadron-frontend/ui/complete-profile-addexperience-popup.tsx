"use client"
import React, { useState } from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import { ReactNode } from 'react';
import CustomButton from "./custom-button";
import CustomInput from "./custom-input";
import { SearchSVG } from "./svgs";
import {
    basewhite,
    borderColor,
    boxShadow,
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
    xxlargeFontSize,
    regularFontWeight,
    mediumFontWeight,
    regularLineHeight,
    mediumLineHeight,
    largeLineHeight,
    xxxlargeLineHeight,
    fontFamily,
    regularLetterSpacing,
    warning600,
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
    border: 3px solid green;    
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
    border: 3px solid red;
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
    border: 3px solid blue;
`
const ItemTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    color: ${gray900};
    font-weight: ${titleFontWeight};
    font-size: ${titleFontSize};
    line-height: ${largeLineHeight};
    // margin-top: 2%;
`;
const TitleDiscrption = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
    // margin-top: 2%;
`
const SecondTitle = styled.div`
    color: ${gray700};
    font-weight: ${mediumFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
`
const SkillBadgeContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    max-height: 80px;
    width: 100%;
    border: 2px solid ${gray300};
    border-radius: 8px;
    padding: 12px 14px 12px 14px;
    gap: 8px;
    overflow-y: auto;

`
const WorkHereCheckboxContainer = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
`

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
interface AddExperiencePopupProps {
    onClose: () => void;
    showDivider?: boolean;
    icon?: ReactNode;
}

const AddExperiencePopup: React.FC<AddExperiencePopupProps> = ({
    onClose,
    showDivider = true,
    icon
}) => {
    const [borderColor, setBorderColor] = useState<string>(gray300);
    const [width, setWidth] = useState<string>('100%');
    const [height, setHeight] = useState<string>('100%');
    const [fontSize, setFontSize] = useState<string>(regularFontSize);
    const [fontWeight, setFontWeight] = useState<string>(regularFontWeight);
    const [fontColor, setFontColor] = useState<string>(gray500);
    const [padding, setPadding] = useState<string>('10px 14px 10px 14px');
    return (
        <PopupComponent onClose={onClose}
            width="640px"
        // maxHeightPercent={0.3}
        >
            <ContentContainer>
                <PopupHeader>
                    <Title>Add experience</Title>
                    <TitleDiscrption>Share where you’ve worked on your profile.</TitleDiscrption>
                </PopupHeader>
                {showDivider && <Divider />}
                <PopupBody>
                    <BodyContentContainer>
                        <InputWithTitleContainer>
                            <CustomInput
                                title="Title *"
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
                                placeholder="What is your title?"
                            />
                        </InputWithTitleContainer>
                        <CompanyIndustrySearchContainer>
                            {/* TODO: Change the input to search
                                    ask client: what's the data from */}
                            <InputWithTitleContainer>
                                <CustomInput
                                    title="Company *"
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
                                    options={["Apple", "Google", "Facebook", "Amazon"]}
                                    placeholder="Search for company"
                                />
                            </InputWithTitleContainer>
                            <InputWithTitleContainer>
                                <CustomInput
                                    title="Industry *"
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
                                    options={["", "Google", "Facebook", "Amazon"]}
                                    placeholder="Search for Search for industry"
                                />
                            </InputWithTitleContainer>
                        </CompanyIndustrySearchContainer>
                        {/* {showDivider && <Divider />} */}
                        <InputWithTitleContainer>
                            <CustomInput
                                title="Specialisation"
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
                                options={["", "Google", "Facebook", "Amazon"]}
                                placeholder="Search for Search for industry"
                            />
                        </InputWithTitleContainer>
                        {showDivider && <Divider />}
                        <CompanyIndustrySearchContainer>
                            {/* TODO: Change the input to search
                                    ask client: what's the data from */}
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
                                    options={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}
                                    placeholder="month"
                                />
                            </InputWithTitleContainer>
                            <InputWithTitleContainer>
                                <CustomInput
                                    title=""
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
                        <CompanyIndustrySearchContainer>
                            {/* TODO: Change the input to search
                                    ask client: what's the data from */}
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
                                    options={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}
                                    placeholder="month"
                                />
                            </InputWithTitleContainer>
                            <InputWithTitleContainer>
                                <CustomInput
                                    title=""
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
                            I currently work here
                        </WorkHereCheckboxContainer>
                    </BodyContentContainer>
                    {showDivider && <Divider />}
                    <InputWithTitleContainer>
                        <CustomInput
                            title="Description*"
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
                            placeholder="Describe your experience"
                        />
                    </InputWithTitleContainer>
                </PopupBody>
                <PopupFooter>
                    {/* {showDivider && <Divider />} */}
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
                            label="Add"
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

export default AddExperiencePopup;
