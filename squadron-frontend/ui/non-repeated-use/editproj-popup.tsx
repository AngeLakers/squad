import React from "react";
import PopupComponent from "../popup";
import styled from "styled-components";
import Button from '@mui/material/Button';

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
`;

const Divider = styled.div`
    width: 100%;
    margin: 5% 0;
    height: 1px;
    background-color: #e0e0e0;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 5%;
`;

const Icon = styled.div`
    margin-top: 3%;
`;

interface EditProjProps {
    onClose: () => void;
}

const EditProjPopup: React.FC<EditProjProps> = ({ onClose }) => {
    return (
        <PopupComponent onClose={onClose}  width="25%" top="37.5%" left="37.5%" maxHeightPercent={0.3}>
            <ContentContainer>
                <Icon><svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4.5" y="4.5" width="48" height="48" rx="24" fill="#FEF0C7"/>
                <path d="M28.5 24.5V28.5M28.5 32.5H28.51M38.5 28.5C38.5 34.0228 34.0228 38.5 28.5 38.5C22.9772 38.5 18.5 34.0228 18.5 28.5C18.5 22.9772 22.9772 18.5 28.5 18.5C34.0228 18.5 38.5 22.9772 38.5 28.5Z" stroke="#DC6803" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="4.5" y="4.5" width="48" height="48" rx="24" stroke="#FFFAEB" stroke-width="8"/></svg></Icon>
                <Title>Edit project</Title>
                <Description>We have already started collecting applicants…</Description>
                <Divider />
                <ButtonContainer>
                    <Button variant="outlined" onClick={onClose}>Cancel</Button>
                    <Button variant="outlined">Confirm</Button>
                </ButtonContainer>
            </ContentContainer>
        </PopupComponent>
    );
};

export default EditProjPopup;
