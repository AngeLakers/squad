"use client";
import Link from "next/link";
import * as React from "react";
import styled from "styled-components";


const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  padding-top: 0.75rem;
  padding-right: 2rem;
  padding-bottom: 0.75rem;
  padding-left: 2rem;
  border-bottom: 1px solid #f3f4f6;
  position: relative;
  width: 100%;
`;

const NavRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export function SimpleHeader() {
  return (
    <Nav>
      <NavRow>
        <div className="pl-1 pr-5">
          <Link href="/application">
            <img
              className="w-auto h-7"
              src="https://uploads-ssl.webflow.com/64549cd879ac7b0ebb505519/647326278341277e7271ca40_Squadron%20Horizontal%20Lock%20Up%20Black%202.svg"
              alt="Squadron logo"
            />
          </Link>
        </div>
      </NavRow>
    </Nav>
  );
}
