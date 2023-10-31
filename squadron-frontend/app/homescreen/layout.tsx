"use client";

import type { Metadata } from "next";
import { SideNav } from "@/ui/side-nav";
import { TopNav } from "@/ui/top-nav";
import styled from "styled-components";
import ProtectedProvider from "../ProtectedProvider";

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
    <ProtectedProvider>
      <Nav>
        <SideNav current="Projects" />

        <Main>
          <TopNav />
          <div>{children}</div>
        </Main>
      </Nav>
    </ProtectedProvider>
  );
}
