"use client"


import {Topbar1} from "@/ui/Topbar1";

import {Hometable} from "@/ui/Hometable";
import CardWrapper from "@/ui/profile/card-wrapper";
import LiveProjectCard from "@/ui/liveproject-card";
import * as React from "react";
import styled from "styled-components";
import HorizontalTabs from "@/ui/horizontal-tabs";

const Container = styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

`;


const Header = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.5rem 2rem;
  box-sizing: border-box;
  text-align: left;
  font-size: 1.88rem;
  color: #111927;
  line-height: 2.38rem;
  font-weight: 600;
 
 
`;

export default function Home() {
    return (
        <div>
            <Header>
                My Header Content
            </Header>
            <HorizontalTabs/>
        </div>
    )
}