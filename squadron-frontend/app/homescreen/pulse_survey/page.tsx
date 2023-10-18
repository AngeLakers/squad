"use client";
import * as React from "react";
import CustomProjectHeader from "@/ui/custom-project-header";
import HorizontalTabs from "@/ui/horizontal-tabs";
import {Hometable2} from "@/ui/Hometable2";
import styled from "styled-components";
import {SatisfactionBox} from "@/ui/liveproject-card";
const tabsContent = [
    { label: 'Project Details', content: 'Content of Saved Jobs' },
    { label: 'Squad', content: <SatisfactionBox score={3.8} isInteractive= {false}/> },
    { label: 'Time tracking',  content:  'Content of Application' },
    { label: 'Invoices',  content: 'Content of Offers' },
    { label: 'Contracts', content: 'Content of Projects' },
    { label: 'Squad Pulse', content: 'Content of Documents' }
];


const Container = styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

`;

export default function Home() {
    return (
       <Container>
           <CustomProjectHeader
               backgroundImage="/black-background.png"
               avatarImagePath="/icon/projectLogo.svg"
               avatarHeight={"89px"}
               avatarWidth={"89px"}
               title1="stir"
               title2="MVP for Serverless E-commerce Return Portal"
               title3=""
               button={{
                   isVisible: false,
                   text: "Apply as squad",
                   backgroundColor: "#A0D909",
                   textColor: "#ffffff",
                   onClick: () => console.log("Apply as squad"),
                   href: "../t5_proj_apply/apply_as_squad",
               }}
               shareIcon={{
                   isVisible: false,
                   color: "#A0D909",
                   onClick: () => {
                       console.log("Share icon clicked!");
                   },
               }}
               starIcon={{
                   isVisible: false,
                   color: "#FFFF00",
                   onClick: () => {
                       console.log("Star icon clicked!");
                   },
               }}
           />

           <HorizontalTabs tabData={tabsContent} />

         </Container>
    )
}