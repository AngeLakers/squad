"use client"
import styled from "styled-components";
import {SideNav} from "@/ui/side-nav";
import {TopNav} from "@/ui/top-nav";

const PageContainer = styled.div`
  display: flex;
  
  flex-direction: column;
    background-color: rgba(16, 24, 40, 0.06);
  align-items: center;

`;

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

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {
    return (




            <Main>
                <TopNav />
                <PageContainer>{children}</PageContainer>

            </Main>


    );
}