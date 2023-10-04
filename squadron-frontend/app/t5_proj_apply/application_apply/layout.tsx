"use client"
import "@/styles/globals.css";
import type { Metadata } from "next";
import { MainNav } from "@/ui/main-nav";
import { Container } from "@mui/joy";
import styled from "styled-components";
import {SimpleHeader} from "@/ui/simple-header";


const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background-color: #F9FAFB;
`
/*
export const metadata: Metadata = {
    title: "Squadron",
    description: "Squadron frontend",
};*/

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <PageContainer>
        
            <MainContent>
                {children}
            </MainContent>
            
        </PageContainer>

    );
}