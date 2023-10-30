"use client";
import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import StepHeading from "./step-heading";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import dayjs from "dayjs";
import { Edit } from '@mui/icons-material';

const QuestionareContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 72px 12% 0px 12%;
`;

const Question = styled.div`
    display: flex;
    flex-direction: column;
`;

const QuestionTitle = styled.div`
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #111927;
    margin-bottom: 24px;
`;

const ReivewDateDiv = styled.div`
    background-color: #F3F4F6;
    font-size: 16px;
    font-weight: 500;
    color: #4D5761;
    padding: 16px 16px 24px 16px;
    border-radius: 10px;
    margin-bottom: 40px;
`;

const ReviewSection = styled.div`
    display: flex;
    justify-content: space-between;
    color: #111927;
    margin-bottom: 10px;
`;

const UserDetails = styled.div`
    margin-top: 15px;
`;

const Label = styled.label`
    display: block;
    margin-top: 24px;
    margin-bottom: 6px;
    color: #384250;
`;

const TextField = styled.input`
    width: 100%;
    height: 44px;
    padding: 0 12px;
    border: 1px solid #D2D6DB;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s;
    &:focus {
        border-color: #1B18E4;
    }
    &::placeholder {
        color: #9A9A9A;
    }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #E5E7EB;
  margin-bottom: 24px;
`;

const Time = styled.div`
  margin-top: 8px;
`;

export default function Questionare5C() {
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const handleConfirm = () => {
        setIsConfirmed(true);
    };
    const handleEdit = () => {
        setIsConfirmed(false);
    };

    return (
        <QuestionareContainer>
            <StepHeading
                step={"Step 05/07"}
                heading={"Book a call"}
                progress={71}
            />
            <QuestionContainer>
                <Question>
                    <QuestionTitle>Select a day & time</QuestionTitle>
                    {!isConfirmed ? (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticDateTimePicker
                                orientation="landscape"
                                value={selectedDateTime}
                                onChange={(date) => {
                                    setSelectedDateTime(date);
                                }}
                                onAccept={handleConfirm}
                            />
                        </LocalizationProvider>
                    ) : (
                        selectedDateTime && (
                            <>
                                <ReivewDateDiv>
                                    <ReviewSection>
                                        <div>Review your call booking</div>
                                        <Edit sx={{ fontSize: 14 }} onClick={handleEdit} />
                                    </ReviewSection>
                                    <Divider />
                                    <div>Date: {dayjs(selectedDateTime).format('YYYY-MM-DD')}</div>
                                    <Time>Time: {dayjs(selectedDateTime).format('HH:mm:ss')}</Time>
                                </ReivewDateDiv>
                                <UserDetails>
                                    <QuestionTitle>Your Details</QuestionTitle>
                                    <Label htmlFor="name-2">Name</Label>
                                    <TextField id="name-2"/>
                                    <Label htmlFor="phone">Phone number</Label>
                                    <TextField id="phone" />
                                    <Label htmlFor="email">Email</Label>
                                    <TextField id="email" />
                                </UserDetails>
                            </>
                        )
                    )}
                </Question>
            </QuestionContainer>
        </QuestionareContainer>
    );
}
