import React from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import ExitUncompletedPopup from "./exit-uncompleted-popup";
import CustomButton from "./custom-button";
import CustomTextarea from "./customtextarea";

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
    padding: 24px 24px 20px 24px;
    background-color:white;
    border: 1px solid white;
`;

const Title = styled.h1`
    font-size: 18px;
    margin-bottom: 4px;
`;

const Description = styled.p`
    color: grey;
    font-size: 14px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 24px;
    width: 100%;
`;

const ScrollableContainer = styled.div`
    flex-grow: 1; 
    overflow-y: auto;
    width: 100%;
    height:40vh;
`;

const RoleDetailsContainer = styled.div`
    background-color: white;
    margin: 16px;  
    padding: 16px; 
    overflow-y: auto;
    background-color: white;
    border-radius: 8px;
`;

const RoleDetailsTitle = styled.h2`
    font-size: 20px;
    color: #111927;
    font-weight: normal; 
`;

const RoleTitleLabel = styled.label`
    display: block;
    color: #384250;
    font-weight: normal; 
    font-size: 14px;
    margin: 24px 0 8px 0;
`;

const TimeZoneLabel = styled.label`
    display: block;
    color: #384250;
    font-weight: normal; 
    font-size: 14px;
`;

const OverlapHoursLabel = styled.label`
    color: #384250;
    font-weight: normal; 
    font-size:14px;
`;

const StyledDescription = styled.p`
    color: #384250;
    font-weight: 300;
    font-size: 14px;
`;

const LabelsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 16px 0 8px 0;
    align-items: center; 
`;

const StyledTextField = styled(TextField)`
  && .MuiInputLabel-root {
    color: #6C737F;
    font-size: 14px;
  }

  && .MuiInputBase-input {
    color: #6C737F;
    font-size: 14px;
  }
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  && .MuiTypography-root {
    color: #6C737F;
    font-size: 14px;
  }
`;

const TimeZoneAndOverlapContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 16px; 
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
    background-color: #D2D6DB;
    margin:16px 0;
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
    title?: string;
}

const AddRole: React.FC<AddRoleProps> = ({ onClose, title }) => {
    const [isExitPopupVisible, setExitPopupVisible] = React.useState(false);

    return (
          
    <PopupComponent onClose={onClose} minWidth="400px">
        <Container>
        <TitleContainer>
        <Title>Add role</Title>
        <Description>Add details about this Squadmate.</Description>
        </TitleContainer>

        <ScrollableContainer>
            <RoleDetailsContainer>
                <RoleDetailsTitle>Role details</RoleDetailsTitle>
                <RoleTitleLabel>Role title</RoleTitleLabel>
                <StyledTextField fullWidth  id="fullWidth" select size="small" value={title || ""}>
                <MenuItem value="Product Manager">Product Manager</MenuItem>
                <MenuItem value="Software Engineer">Software Engineer</MenuItem>
                <MenuItem value="Front-End Developer">Front-End Developer</MenuItem>
                <MenuItem value="Back-End Developer">Back-End Developer</MenuItem>
                </StyledTextField>
                <StyledFormControlLabel control={<Checkbox />} label="Squad Lead"/>
                <StyledDescription>This role will be a squad leader</StyledDescription>
                <RoleTitleLabel>Role description</RoleTitleLabel>
                <CustomTextarea maxCharCount={2000}/>
                {/* <StyledTextField fullWidth id="multiline-static" multiline rows={4}/> */}
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
            <TimeZoneLabel>Select time zone</TimeZoneLabel>
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
            <CustomButton label="Cancel" preset="default" borderColor="#D0D5DD" padding="10px 18px 10px 18px" margin="0 8px 0 0" backgroundColor="white" textColor="#344054" hoverColor="none" onClick={() => setExitPopupVisible(true)}/>
            <CustomButton label="Add role" preset="default" borderColor="#D0D5DD" padding="10px 18px 10px 18px" backgroundColor="#111927" textColor="white" hoverColor="none"/>
        </ButtonContainer>
        </Container>
        {isExitPopupVisible && (
            <ExitUncompletedPopup
                onClose={() => setExitPopupVisible(false)}
                onConfirm={onClose}/>)}
    </PopupComponent>
  );
};

export default AddRole;