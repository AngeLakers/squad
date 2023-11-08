"use client";
import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import CustomInput from "./custom-input";
import CustomTextarea from "./customtextarea";
import { AddBSVG, MinusSVG } from "@/ui/svgs";
import CalendarPopup from "./calendar-popup";

const Container = styled.div`
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 32px 40px;
  gap: 40px;
  position: relative;
  transition: all 0.3s;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #111927;
  float: left;
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #384250;
  float: left;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnContainerB = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const RowContainerA = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
  
`;

const RowContainerB = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
  
  width: 50%;
`;

const TimeZoneContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #D2D6DB;
  padding: 4px 10px;
  gap: 3px;
  border-radius: 6px;
  
`;

const InputWithTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: space-between;
    width: 100%;
`

const ToggleButton = styled.div`
  float: right;
  cursor: pointer;
`;

const Description = styled.div`
  clear: both;
  font-size: 14px;
  font-weight: 400;
  color: #4D5761;
  padding-top: 4px;
`;

const DividerA = styled.div`
  border-top: 1px solid #E5E7EB;
  margin-top: 21px;
  margin-bottom: 30px;
`;

const FinnerDetail: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [isCalendarPopupOpen, setCalendarPopupOpen] =
  useState(false);
  const togglePopup = () => {
    setCalendarPopupOpen(!isCalendarPopupOpen);
  };
  return (
    <Container>
      <Title>Finder</Title>
      <ToggleButton onClick={() => setExpanded(!expanded)}>
        {expanded ? <MinusSVG /> : <AddBSVG />}
      </ToggleButton>
      <Description>This information will be used to help us recommend projects but won’t be shown on your profile. You can edit this at the time of applying for a mission.</Description>

      {expanded && (
        <>
          <DividerA />

          <DetailContainer>
            <ColumnContainer>
              <SubTitle>Hourly Rate</SubTitle>
              <Description>Write a short introduction</Description>
            </ColumnContainer>
              <CustomInput
                title="Hourly Rate"
                showTitle={false}
                type="select"
                borderColor="#E5E7EB"
                borderRadius="8px"
                inputHeight="40px"
                inputWidth="calc(50% - 16px)"
                borderWidth="1px"
                inputTextColor="#6C737F"
                inputTextSize= "16px"
                inputTextWeight="400"
                options={["fill", "fill", "fill"]}
                placeholder="Select your hourly rate"
              />     
            </DetailContainer>
          <DividerA/>

          <DetailContainer>
            <ColumnContainer>
              <SubTitle>Availability</SubTitle>
              <Description>Write a short introduction</Description>
            </ColumnContainer>
            <RowContainerA>
              <InputWithTitleContainer>
                <CustomInput
                  title="Availability"
                  showTitle={false}
                  type="select"
                  borderColor="#E5E7EB"
                  borderRadius="8px"
                  inputHeight="40px"
                  inputWidth="100%"
                  borderWidth="1px"
                  inputTextColor="#6C737F"
                  inputTextSize= "16px"
                  inputTextWeight="400"
                  options={["Not available", "Available immediately", "Available from"]}
                  placeholder="Select your availability"
                  onChange={(event) => {
                    if (event.target.value === 'Available from') {
                      togglePopup();
                    }
                  }}
                />
              </InputWithTitleContainer>
              <InputWithTitleContainer>
                <CustomInput
                  title="Availability"
                  showTitle={false}
                  type="select"
                  borderColor="#E5E7EB"
                  borderRadius="8px"
                  inputHeight="40px"
                  inputWidth="100%"
                  borderWidth="1px"
                  inputTextColor="#6C737F"
                  inputTextSize= "16px"
                  inputTextWeight="400"
                  options={["fill", "fill", "fill"]}
                  placeholder="Select hours a week"
                />
              </InputWithTitleContainer>
            </RowContainerA>    
          </DetailContainer>

          <DividerA/>
          <RowContainerA>
            <ColumnContainerB>
              <SubTitle>Experience</SubTitle>
                <TimeZoneContainer>
                  <SubTitle>My timezone: </SubTitle>
                </TimeZoneContainer>
            </ColumnContainerB>
            <RowContainerB>
              <InputWithTitleContainer>
                  <SubTitle>From</SubTitle>
                  <CustomInput
                    title="From"
                    showTitle={false}
                    type="select"
                    titleFontSize="14px"
                    titleFontWeight= "500"
                    titleColor="#384250"
                    borderColor="#E5E7EB"
                    borderRadius="8px"
                    inputHeight="40px"
                    inputWidth="100%"
                    borderWidth="1px"
                    inputTextColor="#6C737F"
                    inputTextSize= "16px"
                    inputTextWeight="400"
                    options={["8 AM", "9 PM"]}
                    placeholder="Select your availability"
                  />
                </InputWithTitleContainer>
                <InputWithTitleContainer>
                  <SubTitle>From</SubTitle>
                  <CustomInput
                    title="To"
                    showTitle={false}
                    type="select"
                    titleFontSize="14px"
                    titleFontWeight= "500"
                    titleColor="#384250"
                    borderColor="#E5E7EB"
                    borderRadius="8px"
                    inputHeight="40px"
                    inputWidth="100%"
                    borderWidth="1px"
                    inputTextColor="#6C737F"
                    inputTextSize= "16px"
                    inputTextWeight="400"
                    options={["8 AM", "9 PM"]}
                    placeholder="Select hours a week"
                  />
                </InputWithTitleContainer>
            </RowContainerB>     
          </RowContainerA>

          <DividerA/>
          
          <ColumnContainerB>
              <SubTitle>Additional Notes(optional)</SubTitle>
              <CustomTextarea
                  label="Write a short introduction"
                  showHintText={true}
                  borderStyle="1px solid #D2D6DB"
                  labelStyle={{color: "#4D5761"}}
                />
            </ColumnContainerB>

        </>
      )}

      {isCalendarPopupOpen && (
        <CalendarPopup
        
          onClose={() => setCalendarPopupOpen(false)}
        />
      )}  
    </Container>
  );
};

export default FinnerDetail;

