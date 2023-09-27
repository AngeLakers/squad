import React from 'react';
import { TextField, Divider, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import styled from 'styled-components';
import CustomTextarea from '@/ui/customtextarea';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import {
  fontFamily,
  gray600, gray700,gray900,
  regularFontSize, largeFontSize, 
  regularLineHeight, xlargeLineHeight,
  regularFontWeight, mediumFontWeight, titleFontWeight
} from "@/styles/reuseParams"

const Container = styled.div`
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280f, 0px 1px 3px #1018281a;
  width: 100%;
  position: relative;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
`;

const Flex = styled.div`
  display: flex;
  gap: 6px;
  align-items: flex-end;
  flex-direction: column;
`

const HourTextField = styled(TextField)`
  width: 96px;  
  height: 40px;
  margin-right: 6px;
`;

const Title = styled.h1`
  color: ${gray700};
  font-size: ${regularFontSize};
  font-weight: ${mediumFontWeight};
  line-height: ${regularLineHeight};
`;

const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Label = styled.p`
  font-size: ${regularFontSize};
  font-weight: ${mediumFontWeight};
  line-height: ${regularLineHeight};
  color: ${gray700};
  margin-bottom: 2px;
`;
// short intro text under the section title
const SupportingText = styled.p`
  color: ${gray600};
  font-size: ${regularFontSize};
  font-weight: ${regularFontWeight};
  line-height: ${regularLineHeight};
  margin-bottom: 10px;
`;
const InputContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  align-items: baseline;
`
// container for the box and it's label
const LabelTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const SelectTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const ConfirmDetailTitle = styled.div`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: ${titleFontWeight};
  font-size: ${largeFontSize};
  line-height: ${xlargeLineHeight};
  color: ${gray900};
  margin-bottom: 20px;

`
const ConfirmDetail = () => {


  const handleHourlyInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Check the value is a positive integer or empty string
    if (!/^\d+$/.test(value) && value !== "") {
      event.preventDefault();
    }
  };
  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);

  };

  const defaultStartTime = dayjs().set('hour', 8).startOf('hour');
  const defaultEndTime = dayjs().set('hour', 5).startOf('hour');

  return (
    <Container>
      <ConfirmDetailTitle>Confirm your details</ConfirmDetailTitle>
      <Divider />
      <Section>
        <LabelTextContainer>
          <Label>Hourly rate</Label>
          <SupportingText>Write a short introduction.</SupportingText>
        </LabelTextContainer>
        <Flex>
          <InputContentContainer>
            <HourTextField
              variant="outlined"
              type="number"
              placeholder="0"
              inputProps={{ min: "0" }}
              onChange={handleHourlyInputChange}
            />
            <SupportingText>$/h</SupportingText>
          </InputContentContainer>
        </Flex>
      </Section>
      <Divider />
      <Section>
        <LabelTextContainer>
          <Label>Availability</Label>
          <SupportingText>Write a short introduction.</SupportingText>
        </LabelTextContainer>
        <Flex>
          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <InputLabel id="select-availability">Select availability</InputLabel>
            <Select
              labelId="select-availability"
              id="select-availability"
              value={age}
              label="Select availability"
              onChange={handleChange}
              autoWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="NotAvailiable">Not Available</MenuItem>
              <MenuItem value="AvailableImmediately">Available Immediately</MenuItem>
              <MenuItem value="AvailableIn">Available from ... </MenuItem>
            </Select>
          </FormControl>
          <Label>Minimum hours to commit a week</Label>
          <InputContentContainer>
            <HourTextField
              variant="outlined"
              type="number"
              placeholder="0"
              inputProps={{ min: "0" }}
              onChange={handleHourlyInputChange}
            />
            <SupportingText>hours</SupportingText>
          </InputContentContainer>
        </Flex>
      </Section>
      <Divider />
      <Section>
        <LabelTextContainer>
          <Label>Working hours</Label>
          <SupportingText>My timezone: GMT +10</SupportingText>
        </LabelTextContainer>
        <Flex>
          <InputContentContainer>
            <FormControl variant="outlined">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <SelectTimeContainer >
                  <Label >From</Label>
                  <TimePicker defaultValue={defaultStartTime} />
                </SelectTimeContainer>
              </LocalizationProvider>
            </FormControl>
            <FormControl variant="outlined">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <SelectTimeContainer >
                  <Label>To</Label>
                  <TimePicker defaultValue={defaultEndTime} />
                </SelectTimeContainer>
              </LocalizationProvider>
            </FormControl>
          </InputContentContainer>

        </Flex>
      </Section>
      <Divider />
      <Section>
        <LabelTextContainer>
          <Label>Additional notes</Label>
          <SupportingText>Write a short introduction.</SupportingText>
        </LabelTextContainer>
        <Flex>
          <CustomTextarea />
        </Flex>
      </Section>
    </Container>
  );
};

export default ConfirmDetail;

