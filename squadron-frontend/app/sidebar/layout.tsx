"use client";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { SideNav } from "@/ui/side-nav";
import { TopNav } from "@/ui/top-nav";
import styled from "styled-components";

export const metadata: Metadata = {
  title: "Squadron",
  description: "Squadron frontend",
};

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
