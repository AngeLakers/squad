
"use client"
import "@/styles/globals.css";


import styled from "styled-components";
import React, {useRef, useState} from "react";
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




    return (



        <Main>


            <TopNav NotificationComponent={<NotificationBox notifications={notificationsData} />} />




            <PageContainer>{children}</PageContainer>


        </Main>








)
    ;
}

