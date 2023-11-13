'use client'
import React, { useState } from 'react';
import {Tabs, Tab, Box, Typography, Badge} from '@mui/material';
import styled from "styled-components";
import {Hometable2} from "@/ui/Hometable2";


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

const StyledTabPanel = styled.div`
    padding-top: 3.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
`;


const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <StyledTabPanel
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
        </StyledTabPanel>
    );
};

type TabDataType = {
    label: string;
    content: JSX.Element | string;
    badgeContent?: string;
};

type HorizontalTabsProps = {
    tabData?: TabDataType[];
    fontColor?: 'primary' | 'secondary' | 'inherit';
};

const HorizontalTabs: React.FC<HorizontalTabsProps> = ({ tabData = [], fontColor = 'primary' }) => {
    const [value, setValue] = useState(1  );

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const renderedTabs = [];
    const renderedTabPanels = [];

    // @ts-ignore
    for (const [index, tab] of tabData.entries()) {
        renderedTabs.push(
            <StyledTab
                key={index}
                label={tab.badgeContent ? (
                    <StyledBadge badgeContent={tab.badgeContent} color="secondary">
                        {tab.label}
                    </StyledBadge>
                ) : tab.label}
            />
        );

        renderedTabPanels.push(
            <TabPanel key={index} value={value} index={index}>
                {tab.content}
            </TabPanel>
        );
    }

    return (
        <StyledBox>
            <StyledTabs
                value={value}
                onChange={handleChange}
                indicatorColor= "primary"
                variant="fullWidth"
            >
                {renderedTabs}
            </StyledTabs>
            {renderedTabPanels}
        </StyledBox>
    );
}


export default HorizontalTabs;