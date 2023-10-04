'use client'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, Paper, Stack} from '@mui/material';
import {Divider} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import React from 'react';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import {height} from '@mui/system';

import {Tabs} from '@mui/base/Tabs';
import {TabsList} from '@mui/base/TabsList';
import {TabPanel} from '@mui/base/TabPanel';
import {buttonClasses} from '@mui/base/Button';
import {Tab, tabClasses} from '@mui/base/Tab';
import {useRouter} from "next/navigation";


const StyledSpan = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 70px;
`;


function createData2(
    Projectby: string,
    Invitedtoproject: string,
    Invitedtorole: string,
    Invitedby: string,
    image: string,
    Name: string
) {
    return {Invitedtoproject, Invitedtorole, Invitedby, image, Projectby, Name};
}

const rows2 = [
    createData2('Spotify', 'SurveySwap', 'Front-End Engineer', '/images/16.png', '/images/spotify.png', 'Olivia Rhye'),
    // createData('Eclair', 262, 16.0, 24, 6.0, '/images/spotify.png'),

];

const StyledTab = styled(Tab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: var(--gray-500, #6C737F);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {

  }

  &:focus {
    color: var(--gray-700, #384250);

  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: var(--gray-700, #384250);
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const grey = {
    200: '#d0d7de',
    700: '#424a53'

}

const StyledTabPanel = styled(TabPanel)(
    ({theme}) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  background: '#fff';
  border-radius: 12px;
  height: 500px;

  

  `,
);
// border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};

const StyledTabsList = styled(TabsList)(
    ({theme}) => `
  width: 500px;
  background-color: var(--gray-50, #F3F4F6);
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  border-radius: 12px;
  margin-top:20px;

  `,
);

const StyledTableCell = styled(TableCell)`
  color: var(--primary-700, #1B18E4);
  font-family: 'Inter';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;


const StyledSpan2 = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 60px;
  font-family: 'Inter';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--gray-600, #4D5761);
`;


export function Hometable2() {
    const router = useRouter();

    const handleNavigation = () => {
        router.push('/t5_proj_apply/application_apply'); // 你想要导航到的路径
    };


    return (


        <Tabs defaultValue={0}>

            <StyledTabPanel value={0} style={{ backgroundColor: 'white' }}>
                <StyledTabsList>
                    <StyledTab value={0}>My account</StyledTab>
                    <StyledTab value={1}>Profile</StyledTab>
                </StyledTabsList>
                <TableContainer component={Paper} sx={{mt: 2}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{color: 'var(--gray-600, #4D5761)'}}>Project by
                                    <svg width="16" height="16" viewBox="-3 0 16 10" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.99967 3.33398V12.6673M7.99967 12.6673L12.6663 8.00065M7.99967 12.6673L3.33301 8.00065"
                                            stroke="#4D5761" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                </TableCell>
                                <TableCell sx={{color: 'var(--gray-600, #4D5761)'}}>Invited to project
                                    <svg width="16" height="16" viewBox="-3 0 16 10" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.99967 3.33398V12.6673M7.99967 12.6673L12.6663 8.00065M7.99967 12.6673L3.33301 8.00065"
                                            stroke="#4D5761" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                </TableCell>
                                <TableCell sx={{color: 'var(--gray-600, #4D5761)'}}>Invited to role</TableCell>
                                <TableCell sx={{color: 'var(--gray-600, #4D5761)'}}>Invited by</TableCell>
                                <TableCell></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows2.map((row) => (

                                <TableRow key={row.Projectby}>
                                    <TableCell style={{position: 'relative'}}>
                                        <img src={row.image}/>
                                        <StyledSpan
                                        >
                                            {row.Projectby}
                                        </StyledSpan>

                                    </TableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row.Invitedtoproject}
                                    </StyledTableCell>

                                    <TableCell>
                                        <Chip size="small" icon={<PermIdentityOutlinedIcon style={{color: '#026AA2'}}/>}
                                              label={row.Invitedtorole}
                                              style={{backgroundColor: '#A0E7F8', color: '#026AA2'}}
                                        />

                                    </TableCell>
                                    <TableCell sx={{position: ' relative'}}>

                                        <Avatar sx={{width: 30, height: 30}} src={row.Invitedby}/>
                                        <StyledSpan2
                                        >{row.Name}</StyledSpan2>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button size="small"
                                                style={{textTransform: 'none', color: 'var(--gray-600, #4D5761)'}}>Ignore</Button>
                                        <Button
                                            variant="contained"
                                            style={{backgroundColor: '#6633ff', color: 'white'}}
                                            onClick={   handleNavigation}
                                        >
                                            View
                                        </Button>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </StyledTabPanel>


            <StyledTabPanel value={1}><p>Profile page</p></StyledTabPanel>

        </Tabs>

    )
}



