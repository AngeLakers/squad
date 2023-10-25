"use client"

import styled from "styled-components";
import {SideNav} from "@/ui/side-nav";
import React from "react";
import {TopNav} from "@/ui/top-nav";
import {Metadata} from "next";


const Nav = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Nav>
            <SideNav current="Projects" />

            <Main>
                <TopNav />
                <div>{children}</div>
            </Main>
        </Nav>
    );
}
