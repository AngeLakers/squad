"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Application } from "@/ui/Application";
import { Topbar1 } from "@/ui/Topbar1";
import { Wallet } from "@/ui/Wallet";
import { Community } from "@/ui/Community";
import { Community2 } from "@/ui/Community2";
import { Header } from "@/ui/Header";
import SquadCard from "@/ui/squad-card";
import styled from "styled-components";
const Display = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Displayy = styled.div`
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
margin-top: 30px;
margin-bottom: 50px;
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
      <Displayy>
        <Header></Header>
      </Displayy>

      <Application></Application>
      
      <Titlec> 

{/* <Svgo width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="8" fill="#FDB022"/>
</Svgo> */}
Newest matches
  </Titlec>
      
      
      < Displayyy>


   <SquadCard
                        badgeTitles={['E-commerce', 'MVP']}
                        squadTitle='Name of the project'
                        squadSubTitle='Stir'
                        squadDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morbi aliquet elit accumsan, nam faucibus. morbi aliquet elit accumsan, na...'
                        icon={<img src='https://s3-alpha-sig.figma.com/img/1dee/cc01/e5a8e10689abf5afcef62f37a9e78f64?Expires=1699833600&Signature=pJSJiuH9VAmfWKpruKL45yshriM2yANsPWQaPq8pKO0NzoTbnegeQ0oYCCj725-G6ckxRj8SXc2AbCNJjM8pkA-kYaeDsi5NcMuItIxr4g37tTHGdAA0JDSR~98Y9poR3uWa3Y5EvAoZXcLT5Zu-YA8aj98zBm4KMuxRdNn4xyiON5QPJ8GgZEQGtz258M5QE9Iqti4450YNDgXA4MGTpdqYh63eB9lR4sWGW9Lt-BLDnKXyBkQZmvpDTB1B07E~gvGSx3BS6wfwe49eS4CEFlCGfjPfaVpDVgLR~befG8c47IEJrwqvO-rFwKOQCmn~-lOymvh56Q9W1CXC0KN~Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />}
                        type='project'
                        data={[
                            "Product Manager",
                            "Front End Developer",
          
      
                        ]}
                    />

<SquadCard
                        badgeTitles={['E-commerce', 'MVP']}
                        squadTitle='Name of the project'
                        squadSubTitle='Stir'
                        squadDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morbi aliquet elit accumsan, nam faucibus. morbi aliquet elit accumsan, na...'
                        icon={<img src='https://s3-alpha-sig.figma.com/img/1dee/cc01/e5a8e10689abf5afcef62f37a9e78f64?Expires=1699833600&Signature=pJSJiuH9VAmfWKpruKL45yshriM2yANsPWQaPq8pKO0NzoTbnegeQ0oYCCj725-G6ckxRj8SXc2AbCNJjM8pkA-kYaeDsi5NcMuItIxr4g37tTHGdAA0JDSR~98Y9poR3uWa3Y5EvAoZXcLT5Zu-YA8aj98zBm4KMuxRdNn4xyiON5QPJ8GgZEQGtz258M5QE9Iqti4450YNDgXA4MGTpdqYh63eB9lR4sWGW9Lt-BLDnKXyBkQZmvpDTB1B07E~gvGSx3BS6wfwe49eS4CEFlCGfjPfaVpDVgLR~befG8c47IEJrwqvO-rFwKOQCmn~-lOymvh56Q9W1CXC0KN~Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />}
                        type='project'
                        data={[
                            "Product Manager",
                            "Front End Developer",
                        ]}
                    />




</Displayyy>
      
      

      <Displayy>
        <Wallet></Wallet>
      </Displayy>

      <Display>
        <Community> </Community>
      </Display>

      <Display>
        <Community2> </Community2>
      </Display>
    </>
  );
}
