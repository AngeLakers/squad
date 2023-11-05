"use client"

import {Application} from "@/ui/Application"
import { Topbar1 } from "@/ui/Topbar1"
import {Wallet} from "@/ui/Wallet"
import {Community} from"@/ui/Community"
import {Community2} from"@/ui/Community2"
import {Header} from "@/ui/Header"
import {Ste} from "@/ui/Ste"
import {Ste2} from "@/ui/Ste2"
import {Perk2} from "@/ui/Perk2"
import { Divider } from '@mui/material';
import styled from "styled-components"
import Layout from "./layout"
import CardWrapper from "@/ui/card-wrapper";
import LiveProjectCard from "@/ui/Livep";
import SquadCard from "@/ui/squad-card2";
const Display=styled.div`
display: flex;
margin-top: 50px;
align-items: center;
justify-content: center;
flex-direction: row;
`;

const Displayy=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
`;

const Displayyy=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
width:567px;
margin-top: 50px;
margin-left:280px;
`;
const T = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
margin-bottom:10px;
`;

const Titlec =  styled.div`
color: var(--gray-900, #111927);

font-family: Inter;
font-size: 24px;
font-style: normal; 
font-weight: 500;
line-height: 32px;
margin-left:20px;
`;

const Svgo=styled.svg`
margin-right:10px;
`;


export default function Home() {
  return (
    <>
   {/* <Displayy>
    <Topbar1></Topbar1>
    </Displayy> */}



    < Displayy>
    <Header></Header>
    </Displayy>

    {/* <Application></Application> */}

    < Displayy>
    <T>
<Divider sx={{ width:1130}} />
</T>
</Displayy>





<Titlec> 

<Svgo width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="8" fill="#FDB022"/>
</Svgo>
Squads in Formation
  </Titlec>

    < Displayy>
    <Ste/> <Ste2/>
    </Displayy>


    < Displayy>
    <CardWrapper title="Live projects" showLogo={true} width="70rem" flexDirection="row" scrollable={34}>
               <LiveProjectCard
                   title="MVP for Serverless E-commerce..."
                   memberCount={5}
                   balanceInfo={{
                       time: 0,
                       currentBalance:0,
                       percentage: 75
                   }}
                   score={0}
               />
               <LiveProjectCard
                   title="MVP for Serverless E-commerce..."
                   memberCount={5}
                   balanceInfo={{
                       time: 12,
                       currentBalance: 1680,
                       percentage: 3.7,
                   }}
                   score={4.5}
               />

               <LiveProjectCard
                   title="MVP for Serverless E-commerce..."
                   memberCount={5}
                   balanceInfo={{
                       time: 0,
                       currentBalance:0,
                       percentage: 75
                   }}
                   score={0}
               />
               <LiveProjectCard
                   title="MVP for Serverless E-commerce..."
                   memberCount={5}
                   balanceInfo={{
                       time: 12,
                       currentBalance: 1680,
                       percentage: 3.7,
                   }}
                   score={4.5}
               />
               <LiveProjectCard
                   title="MVP for Serverless E-commerce..."
                   memberCount={5}
                   balanceInfo={{
                       time: 0,
                       currentBalance:0,
                       percentage: 75
                   }}
                   score={0}
               />
               <LiveProjectCard
                   title="MVP for Serverless E-commerce..."
                   memberCount={5}
                   balanceInfo={{
                       time: 12,
                       currentBalance: 1680,
                       percentage: 3.7,
                   }}
                   score={4.5}
               />
           </CardWrapper>
           </Displayy>

    < Displayy>

    <Perk2/>
    </Displayy>

    < Displayy>
    <Wallet></Wallet>
    </Displayy>
    

    < Display>
     <Community/>
    </Display>

    <Display>
    <Community2/> 
    </Display>
   

</>



  )
}









