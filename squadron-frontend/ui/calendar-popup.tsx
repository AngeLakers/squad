import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import PopupComponent from "./popup";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

`;

interface CalendarProps {
  onClose: () => void;
}

const CalendarPopup: React.FC<CalendarProps> = ({ onClose }) => {
  

  return (
    <PopupComponent onClose={onClose}
    width="328px"
    maxHeightPercent={0.1}>
      <Container>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangeCalendar']}>
                <DateRangeCalendar calendars={1}/>
            </DemoContainer>
        </LocalizationProvider>
      </Container>
    </PopupComponent>

  );
};

export default CalendarPopup;
