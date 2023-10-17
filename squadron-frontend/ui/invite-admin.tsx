import React from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CustomButton from "./custom-button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    padding: 24px 24px 0 24px;
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 4px;
`;

const Description = styled.p`
    margin-bottom: 24px;
    color: #475467;
    font-size: 14px;
`;

const Divider = styled.hr`
    width: 100%; 
    margin-bottom: 24px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right:6px;
`;

const InputRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
    width: 100%;
`;

const AddButton = styled.button`
    margin-top:10px;
    cursor: pointer;
    color: #1B18E4;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 12px;
    color: #384250;
    font-size: 14px;
`;

interface InviteAdminProps {
  onClose: () => void;
}

const InviteAdmin: React.FC<InviteAdminProps> = ({ onClose }) => {
  return (
    <PopupComponent onClose={onClose} width="35%" minWidth="500px" minHeight="max-contents" maxHeightPercent={0.3} >
      <Container>
        <Title>Invite admin(s)</Title>
        <Description>description</Description>
        <Divider />
        <InputRow>
        <InputContainer>
            <Label htmlFor="name-1">Name</Label>
            <TextField id="name-1" variant="outlined" size="small"/>
        </InputContainer>
        <InputContainer>
            <Label htmlFor="email-1">Email address</Label>
            <TextField id="email-1" variant="outlined" size="small"/>
        </InputContainer>
        </InputRow>
        <InputRow>
        <InputContainer>
            <Label htmlFor="name-2">Name</Label>
            <TextField id="name-2" variant="outlined" size="small" />
        </InputContainer>
        <InputContainer>
            <Label htmlFor="email-2">Email address</Label>
            <TextField id="email-2" variant="outlined" size="small"/>
        </InputContainer>
        </InputRow>
        <AddButton>+ Add another</AddButton>
        <ButtonContainer>
            <CustomButton label="Cancel" preset="default" borderColor="#D0D5DD" padding="10px 35px 10px 35px" backgroundColor="white" textColor="#344054" hoverColor="none" onClick={onClose}/>
            <CustomButton label="Send invites" preset="default" padding="10px 25px 10px 25px" backgroundColor="#111927" textColor="white" hoverColor="none" />
        </ButtonContainer>
      </Container>
    </PopupComponent>
  );
};

export default InviteAdmin;

