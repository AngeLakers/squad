import React from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';

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
    height:40vh;
`;

const RoleDetailsContainer = styled.div`
    background-color: white;
    margin: 2% 3%;  
    padding: 3% 3%; 
    overflow-y: auto;
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
    font-size:0.9rem;
`;

const OverlapHoursLabel = styled.label`
    color: grey;
    font-weight: normal; 
    font-size:0.9rem;
`;

const StyledDescription = styled.p`
  color: grey;
  font-weight: 300;
  font-size: 0.8rem;
`;

const LabelsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1%;
    align-items: center; 
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

const TimeZoneAndOverlapContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1%; 
`;

const TimeZoneTextField = styled(StyledTextField)`
    width: 74%; 
`;

const OverlapTextField = styled(StyledTextField)`
    width: 24%;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: grey;
    margin-top:3%;
`;  

const marks = [
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 15, label: '15' },
    { value: 20, label: '20' },
    { value: 25, label: '25' },
    { value: 30, label: '30' },
    { value: 35, label: '35' },
    { value: 40, label: '40' },
];  


function hoursText(value: number) {
    return `${value}h per week`;
}

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
                <StyledTextField fullWidth  id="fullWidth" select size="small">
                <MenuItem value="Product Manager">Product Manager</MenuItem>
                <MenuItem value="Software Engineer">Software Engineer</MenuItem>
                </StyledTextField>
                <StyledFormControlLabel control={<Checkbox />} label="Squad Lead"/>
                <StyledDescription>This role will be a squad leader</StyledDescription>
                <RoleTitleLabel>Role description</RoleTitleLabel>
                <StyledTextField fullWidth id="multiline-static" multiline rows={4}/>
                <RoleTitleLabel>Hourly rate</RoleTitleLabel>
                <StyledTextField fullWidth  id="fullWidth" select size="small">
                <MenuItem value="$50-60/h">$50-60/h</MenuItem>
                <MenuItem value="$80-90/h">$80-90/h</MenuItem>
                </StyledTextField>
            </RoleDetailsContainer>
            <RoleDetailsContainer>
                <RoleDetailsTitle>Skills</RoleDetailsTitle>
                <RoleTitleLabel>Required skills</RoleTitleLabel>
                <StyledTextField fullWidth  id="fullWidth" label= "Search skills"size="small"/>
                <RoleTitleLabel>Preferred skills</RoleTitleLabel>
                <StyledTextField fullWidth  id="fullWidth" label= "Search skills"size="small"/>
                <RoleTitleLabel>Tools</RoleTitleLabel>
                <StyledTextField fullWidth  id="fullWidth" label= "Search tools"size="small"/>
            </RoleDetailsContainer>
            <RoleDetailsContainer>
            <RoleDetailsTitle>Talent location & availability</RoleDetailsTitle>
            <LabelsContainer>
            <RoleTitleLabel>Select time zone</RoleTitleLabel>
            <OverlapHoursLabel>Overlap hours</OverlapHoursLabel>
            </LabelsContainer>
            <TimeZoneAndOverlapContainer>
                <TimeZoneTextField select size="small">
                <MenuItem value="EST">EST</MenuItem>
                </TimeZoneTextField>
                <OverlapTextField select size="small">
                <MenuItem value="0">0</MenuItem>
                </OverlapTextField>
            </TimeZoneAndOverlapContainer>
            <Divider />
            <RoleTitleLabel>Location</RoleTitleLabel>
            <StyledTextField fullWidth  id="fullWidth" select label= "Search location" size="small">
                <MenuItem value="Sydney">Sydney</MenuItem>
                <MenuItem value="Brisbane">Brisbane</MenuItem>
            </StyledTextField>
            <RoleTitleLabel>Minimum hours per week</RoleTitleLabel>
            <Slider
                aria-label="Hours per week"
                defaultValue={20}
                getAriaValueText={hoursText}
                step={1}
                marks={marks}
                valueLabelDisplay="on"
                min={5}
                max={40}
            />
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