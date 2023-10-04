'use client'

import Card from '@mui/material/Card';
import {Paper, Stack, IconButton, Badge, Popover, Typography} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import styled from 'styled-components';
import React, {useState} from "react";

import NotificationBox, {NotificationProps} from "@/ui/notification-message";


const notificationsData: NotificationProps[] = [
    {
        iconPath: "/icon/notification-suitcase-failed.svg",
        linkUrl: "www.google.com",
        messageInfo: {
            message: "Your application has been rejected",
            websiteName: "Google",
            organizationName: "Surveyswap",

        },

    },

    {
        iconPath: "/icon/notification-suitcase-succeed.svg",
        linkUrl: "www.google.com",
        messageInfo: {
            message: "Your application has been successful",
            websiteName: "Google",
            organizationName: "Surveyswap",

        },


    },
    {
        iconPath: "/icon/notification-add-friend.svg",
        linkUrl: "/t5_proj_apply/my_profile",
        messageInfo: {
            message: "You have been invited to a project  1",
            websiteName: "Spotify",
            organizationName: "Tech team",

        },

    },
    {
        iconPath: "/icon/notification-add-friend.svg",
        linkUrl: "/t5_proj_apply/my_profile",
        messageInfo: {
            message: "You have been invited to a project  2",
            websiteName: "Spotify",
            organizationName: "Tech team",

        },

    },
    {
        iconPath: "/icon/notification-add-friend.svg",
        linkUrl: "/t5_proj_apply/my_profile",
        messageInfo: {
            message: "You have been invited to a project  3",
            websiteName: "Spotify",
            organizationName: "Tech team",

        },

    },
    {
        iconPath: "/icon/notification-question.svg",
        linkUrl: "www.google.com",
        messageInfo: {
            message: "You have been invited to an interview",
            websiteName: "Google",
            organizationName: "Google",

        },

    },
    {
        iconPath: "/icon/notification-puzzle.svg",
        linkUrl: "www.google.com",
        messageInfo: {
            message: "New match for you!",
            websiteName: "",
            organizationName: "",


        }


    },


];


const Cardnav = styled(Card)`
  margin-top: 0;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  border: 0;
  padding-left: 150px;
  justify-content: space-between;
  flex-grow: 1;
  min-height: 70px;
  min-width: 800px;
  flex-shrink: 0;
`;

const StyledPaper = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 400px;
  margin-left: 20px;
`;
const StyledInputBase = styled(InputBase)`
  padding-left: 2px;
  display: flex;
  align-items: center;
  min-width: 200px;
  flex-shrink: 0;
  flex-grow: 1;
`;

const StyledStack = styled(Stack)`

  padding-right: 150px;
  flex-shrink: 0;

`;
const Dropdown = styled(Paper)`
  position: absolute;
  top: 60px;
  left: 0;
  padding: 10px;
  z-index: 1000;
`;
const RelativeContainer = styled.div`
    position: relative;
    display: inline-block; 
  
`;



export function Topbar1() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div style={{ position: 'relative' }}>
        <Cardnav elevation={1}>

            <StyledPaper
                component="form"
            >
                <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                    <SearchIcon/>
                </IconButton>
                <StyledInputBase
                    placeholder="Search jobs"
                    inputProps={{'aria-label': 'search google maps'}}
                />


                <IconButton color="primary" sx={{p: '10px'}} aria-label="directions">
                </IconButton>
            </StyledPaper>


            < StyledStack direction="row" spacing={5}>

                <IconButton onClick={handleClick}>
                    <ChatBubbleOutlineOutlinedIcon />
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <NotificationBox    notifications={notificationsData}/>
                </Popover>

                <IconButton>
                    <StarBorderRoundedIcon/>
                </IconButton>

                <IconButton>
                    <NotificationsNoneRoundedIcon/>
                </IconButton>


                <Avatar alt="Remy Sharp" src="/images/01.png"/>

            </ StyledStack>

        </Cardnav>

        </div>

    );
}
