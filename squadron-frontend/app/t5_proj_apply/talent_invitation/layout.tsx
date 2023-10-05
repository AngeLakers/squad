'use client'

import "@/styles/globals.css";
import type { Metadata } from "next";
import { SideNav } from "@/ui/side-nav";
import { TopNav } from "@/ui/top-nav";
import {MainNav} from "@/ui/main-nav";
import {Divider} from "@mui/material";
import styled from "styled-components";


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(16, 24, 40, 0.06);
  height: 100vh;
  align-content: flex-start;

`;

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {
    return (
        <PageContainer>{children}</PageContainer>
    );
}

