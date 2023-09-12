import React from "react";
import PopupComponent from "../popup";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    background-color:#f3f4f6;
    border: 1px solid white;
`;

const TitleContainer = styled.div`
    width:100%;
    padding: 3% 3%;
    background-color:white;
    border: 1px solid white;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 2%;
`;

const Description = styled.p`
    color: grey;
    font-size:0.9rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5%;
    width: 100%;
`;

const ScrollableContainer = styled.div`
    flex-grow: 1; 
    overflow-y: auto;
    width: 100%;
    margin-top: 2%;
`;

const RoleDetailsContainer = styled.div`
    background-color: white;
    margin: 1% 3%;  
    padding: 3% 3%; 
    overflow-y: auto;
    height: 40vh;
    background-color: white;
    border-radius: 10px;
`;

const RoleDetailsTitle = styled.h2`
    font-size: 1.1rem;
    color: grey;
    font-weight: normal; 
`;

const RoleTitleLabel = styled.label`
  display: block;
  margin-top: 3%;
  margin-bottom: 2%;
  color: grey;
  font-weight: normal; 
`;

const StyledTextField = styled(TextField)`
  && .MuiInputLabel-root {
    color: grey;
    font-size: 0.8rem;
  }

  && .MuiInputBase-input {
    color: grey;
    font-size: 0.8rem;
  }
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  && .MuiTypography-root {
    color: grey;
    font-size: 0.8rem;
  }
`;

interface AddRoleProps {
  onClose: () => void;
}

const AddRole: React.FC<AddRoleProps> = ({ onClose }) => {
  return (
    <PopupComponent onClose={onClose}>
      <Container>
        <TitleContainer>
        <Title>Add role</Title>
        <Description>Add details about this Squadmate.</Description>
        </TitleContainer>
   

        <ScrollableContainer>
            <RoleDetailsContainer>
                <RoleDetailsTitle>Role details</RoleDetailsTitle>
                <RoleTitleLabel>Role title</RoleTitleLabel>
                <StyledTextField fullWidth  id="fullWidth" select label="Find a role" size="small"/>
                <StyledFormControlLabel
                  control={<Checkbox />}
                  label="Squad Lead"
                />
                <p style={{color: 'grey', fontWeight: '300', fontSize: '0.8rem'}}>This role will be a squad leader</p>
                <RoleTitleLabel>Role description</RoleTitleLabel>
                <StyledTextField fullWidth id="multiline-static" multiline rows={4} defaultValue="What are you looking for in this role?"/>
                <RoleTitleLabel>Hourly rate</RoleTitleLabel>
                <StyledTextField fullWidth  id="fullWidth" select label="Select hourly rate" size="small"/>
            </RoleDetailsContainer>
        </ScrollableContainer>
 
        <ButtonContainer>
            <Button variant="outlined" onClick={onClose}>Cancel</Button>
            <Button variant="outlined">Add role</Button>
        </ButtonContainer>
      </Container>
    </PopupComponent>
  );
};

export default AddRole;