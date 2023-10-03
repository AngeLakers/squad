import React, { useState } from 'react';
import {Tabs, Tab, Box, Typography, Badge} from '@mui/material';
import styled from "styled-components";


const StyledBadge = styled(Badge)`
  .MuiBadge-badge {
    right: -16px;
    top: 10px;   
  
    
    font-size: 0.75rem;
    min-width: 20px;
    height: 20px;
    margin-left: 0.5rem;

    border-radius: 1rem;
    background-color: #f2f4f7;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0.13rem 0.5rem;
    mix-blend-mode: multiply;
    text-align: center;
   
    color: #344054;
  }
`;
const StyledBox = styled(Box)`
  width: 100%;
  margin-top: 3rem;
`;

const StyledTabs = styled(Tabs)`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 2rem;
  box-sizing: border-box;
  font-size: 0.88rem;
  line-height: 1.25rem;
  font-weight: 600;

  color: #667085;
  text-align: left;
  .MuiTabs-indicator {
    background-color: purple;
  }
`;



const StyledTab = styled(Tab)`

  && {
    position: relative;
    font-size: 0.88rem;
    line-height: 1.25rem;
    font-weight: 600;

    color: #667085;
    text-align: left;
    text-transform: none;
    align-items: center;
    overflow: visible;
  }
`;

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const HorizontalTabs = () => {
    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <StyledBox>
            <StyledTabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
            >

                <StyledTab
                    label={
                        <StyledBadge badgeContent={6} color="secondary">
                           Saved Jobs
                        </StyledBadge>
                    }
                />
                <StyledTab label="Invite" />
                <StyledTab
                    label={
                        <StyledBadge badgeContent={6} color="secondary">
                            Application
                        </StyledBadge>
                    }
                />
                <StyledTab
                    label={
                        <StyledBadge badgeContent={4} color="secondary">
                            Offers
                        </StyledBadge>
                    }
                />
                <StyledTab label="Projects" />
                <StyledTab label="Documents" />
            </StyledTabs>
            <TabPanel value={value} index={0}>
                Content of Saved Jobs
            </TabPanel>
            <TabPanel value={value} index={1}>
                Content of Invite
            </TabPanel>
            <TabPanel value={value} index={2}>
                Content of Application
            </TabPanel>
            <TabPanel value={value} index={3}>
                Content of Offers
            </TabPanel>
            <TabPanel value={value} index={4}>
                Content of Projects
            </TabPanel>
            <TabPanel value={value} index={5}>
                Content of Documents
            </TabPanel>
        </StyledBox>
    );
};

export default HorizontalTabs;