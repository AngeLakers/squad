"use client";
import NotificationBox, {NotificationBoxPlus, NotificationProps} from "@/ui/notification-message";
import styled from "styled-components";
import {date} from "zod";
import {useRouter} from "next/navigation";


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
        date: "12 October 22",
        messageInfo: {
            message: "You have been invited to an interview",
            websiteName: "Google",
            organizationName: "Google",

        },


    },

    {
        iconPath: "/icon/notification-question.svg",
        linkUrl: "www.google.com",
        date: "12 October 22",
        messageInfo: {
            message: "You have been invited to an interview 2",
            websiteName: "Google",
            organizationName: "Google",

        }
    },


    {
        iconPath: "/icon/notification-question.svg",
        linkUrl: "www.google.com",
        date: "12 October 22",
        messageInfo: {
            message: "You have been invited to an interview 3",
            websiteName: "Google",
            organizationName: "Google",

        }


    },

    {
        iconPath: "/icon/notification-question.svg",
        linkUrl: "www.google.com",
        date: "12 October 22",
        messageInfo: {
            message: "You have been invited to an interview 4",
            websiteName: "Google",
            organizationName: "Google",

        }


    },


];

const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  height: 100%;
  //padding-left: 25rem;
  width: 85vw;
  padding-left: 7.5vw;
    padding-right: 7.5vw;
  flex-shrink: 0;

`;

const Header = styled.div`
  position: relative;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: #111927;
  text-align: left;
  width: 100%;
  margin-bottom: 2.5rem;
  
  
  
          `;

const NavigateButton = styled.button` 
  margin-top: 2.5rem;
margin-left: 2rem;
  margin-bottom: 4.5rem;
 width: 1.25rem;
  position: relative;
    border: none;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
  font-weight: 600;
  color: #1B18E4;
`;

export default function Home() {
    const router = useRouter();

    return (
        <div style={{ width: '100' }}>
            <NavigateButton onClick={() => {router.back()  } }>{'<'}</NavigateButton>
        <Container>

            <Header>Notifications</Header>
            <NotificationBoxPlus notifications={notificationsData}/>
        </Container>
        </div>
    )

}