'use client'
import '@/styles/globals.css';
import styled from 'styled-components';
import * as React from "react";
import {Topbar1} from "@/ui/Topbar1";
import CardWrapper from "@/ui/profile/card-wrapper";
import LiveProjectCard from "@/ui/liveproject-card";
import {Header} from "@/ui/Header";
import {Application} from "@/ui/Application";
import {Hometable} from "@/ui/Hometable";

const Container = styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;


`;
export default function Home() {
    return (
       <div>


           <Topbar1></Topbar1>


           <Container>
               <Header></Header>
               <Hometable/>

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

              </Container>

         </div>
    )
}