"use client";

import type { Metadata } from "next";
import { SideNav } from "@/ui/side-nav";
import { TopNav } from "@/ui/top-nav";
import styled from "styled-components";
import ProtectedProvider from "@/app/ProtectedProvider";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%
  min-height: 100vh;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fafb;
  gap: 56px;
`;

const SideNavContainer = styled.div`
  border-right: 1px solid #e5e7eb;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedProvider>
      <Nav>
        <SideNavContainer>
          <SideNav current="Home" />
        </SideNavContainer>
        <Main>
          <TopNav />
          <HomeContainer>{children}</HomeContainer>
        </Main>
      </Nav>
    </ProtectedProvider>
  );
}
