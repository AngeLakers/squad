import React from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    padding: 5% 10%;
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 2%;
`;

const Description = styled.p`
    margin-bottom: 3%;
`;

const Divider = styled.hr`
    width: 100%; 
    margin-bottom: 3%;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3%;
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
    width: 100%;
`;

const AddButton = styled.button`
    cursor: pointer;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 3%;
`;

interface InviteAdminProps {
  onClose: () => void;
}

const InviteAdmin: React.FC<InviteAdminProps> = ({ onClose }) => {
  return (
    <PopupComponent onClose={onClose}>
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
        <AddButton>+ add another</AddButton>
        <ButtonContainer>
            <Button variant="outlined" onClick={onClose}>Cancel</Button>
            <Button variant="outlined">Send invites</Button>
        </ButtonContainer>
      </Container>
    </PopupComponent>
  );
};

export default InviteAdmin;

