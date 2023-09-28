'use client';
import * as React from 'react';
import { ReactNode } from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import styled from "styled-components";
import CompleteProfilePopup from '@/ui/complete-profile-popup';

const StyledH1 = styled.h1`
  font-size: 2em; 
  font-weight: bold;
  margin:1%;
`;

interface ComponentWrapperProps {
    filename: string;
    createdBy: string;
    description: string;
    children: ReactNode;
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({
    filename,
    createdBy,
    description,
    children,
}) => {
    return (
        <div style={{ border: '1px solid black', padding: '1%' }}>
            {children}
            <div style={{ marginTop: '1%' }}>
                <div>File: {filename}</div>
                <div>Created by: {createdBy}</div>
                <div>Description: {description}</div>
            </div>
        </div>
    );
};

export default function AllComponents() {
    const [isCompleteProfilePopupOpen, setCompleteProfilePopupOpen] = useState(false);

    return (
        <div>
            <StyledH1>T5</StyledH1>
            <ComponentWrapper filename="complete-profile-popup.tsx" createdBy="Chelsea Guo" description="T5 - Complete Profile Popup">
                <Button variant="outlined" onClick={() => setCompleteProfilePopupOpen(true)}>Complete Profile</Button>
            </ComponentWrapper>
            {isCompleteProfilePopupOpen && <CompleteProfilePopup onClose={() => setCompleteProfilePopupOpen(false)}
                title="Complete Your Profile"
                description="We have already started collecting applicants…"
                cancelButtonText="Cancel"
                confirmButtonText="Confirm"
            />}
        </div>
    );
}
