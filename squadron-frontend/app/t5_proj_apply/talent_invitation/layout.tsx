'use client';

import "@/styles/globals.css";
import type {Metadata} from "next";
import {SideNav} from "@/ui/side-nav";

import {MainNav} from "@/ui/main-nav";
import {Divider, Popover} from "@mui/material";
import styled from "styled-components";
import React, {useState} from "react";
import NotificationBox, {NotificationProps} from "@/ui/notification-message";
import {TopNav} from "@/ui/top-nav";


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(16, 24, 40, 0.06);
  height: 100vh;
  align-content: flex-start;

`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;


const Nav = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;



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
        iconPath: "/icon/notification-question.svg",
        linkUrl: "www.google.com",

        messageInfo: {
            message: "You have been invited to an interview 2",
            websiteName: "Google",
            organizationName: "Google",

        }
    },


    {
        iconPath: "/icon/notification-question.svg",
        linkUrl: "www.google.com",

        messageInfo: {
            message: "You have been invited to an interview 3",
            websiteName: "Google",
            organizationName: "Google",

        }


    },

    {
        iconPath: "/icon/notification-question.svg",
        linkUrl: "www.google.com",

        messageInfo: {
            message: "You have been invited to an interview 4",
            websiteName: "Google",
            organizationName: "Google",

        }


    },


];
export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleChatButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    return (



            <Main>

                <TopNav onChatButtonClick={handleChatButtonClick} />

                {open && (
                    <Popover
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClosePopover}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >

                        <NotificationBox notifications={notificationsData} />
                    </Popover>
                )}




                <PageContainer>

                    {children}
                </PageContainer>
            </Main>








)
    ;
}

