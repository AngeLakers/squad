import React from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import {Edit} from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { TextField} from "@mui/material"; 
import dayjs from "dayjs";


const Container = styled.div`
    display: flex;
    width: 100%;
`;

const FirstPart = styled.div`
    width:25%;
    flex-direction: column;
    align-items: left;
    padding: 3%;
`;

const SecondPart = styled.div`
    width: 75%;
    flex-direction: column;
    align-items: center;
    padding: 5%;
`;

const NameText = styled.div`
    font-size: 0.8em;
    margin-bottom: 15%;
    margin-top: 3%;
    color: grey;
`;

const BookCallText = styled.div`
    margin-top: 5%;
    font-size: 0.8em;
    color: grey;
`;

const SelectText = styled.div`
    margin-left:3%;
`;

const Label = styled.label`
    display: block;
    margin-top: 3%;
`;

const ReviewSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const ReivewDateDiv = styled.div`
    background-color: #f3f4f6;
    padding: 2% 3%;
    border-radius: 10px;
`;

const UserDetails = styled.div`
    margin-top: 15px;
`;

interface BookInterviewAProps {
    onClose: () => void;
}

const BookInterviewA: React.FC<BookInterviewAProps> = ({ onClose }) => {
    const [selectedDateTime, setSelectedDateTime] = React.useState<Date | null>(null);
    const [isConfirmed, setIsConfirmed] = React.useState(false);
    const handleConfirm = () => {
        setIsConfirmed(true);
      };
  return (
    <PopupComponent onClose={onClose} width="60%" minWidth="700px">
      <Container>
      <FirstPart>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <NameText>Patricia Montero</NameText>
          <div>Interview Call</div>
          <BookCallText>Book a call to interview this talent</BookCallText>
        </FirstPart>

        <SecondPart>
        {!isConfirmed ? (
            <>
          <SelectText>Select a day & time</SelectText>
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
          </>
  ) : (  
    selectedDateTime && (
      <>
      <ReivewDateDiv>
        <ReviewSection>
          <div>Review your call booking</div>
          <Edit sx={{ fontSize: 14 }} />
        </ReviewSection>
        <div>Date: {dayjs(selectedDateTime).format('YYYY-MM-DD')}</div>
        <div>Time: {dayjs(selectedDateTime).format('HH:mm:ss')}</div>
        </ReivewDateDiv>

        <UserDetails>
          <div>Your Details</div>
          <Label htmlFor="name-2">Name</Label>
          <TextField id="name-2" variant="outlined" size="small" />
          <Label htmlFor="phone">Phone number</Label>
          <TextField id="phone" variant="outlined" size="small" />
          <Label htmlFor="email">Email</Label>
          <TextField id="email" variant="outlined" size="small" />
        </UserDetails>
      </>
    )
  )}
</SecondPart>
      </Container>
    </PopupComponent>
  );
};

export default BookInterviewA;
