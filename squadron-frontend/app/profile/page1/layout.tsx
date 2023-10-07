"use client"
import styled from "styled-components";
import {SideNav} from "@/ui/side-nav";
import {TopNav} from "@/ui/top-nav";

const PageContainer = styled.div`
  display: flex;
  
  flex-direction: column;
    background-color: rgba(16, 24, 40, 0.06);
  align-items: center;
   width: 100vw;
  height: 100%

`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%


`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Header = styled.header`
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid #e5e7eb;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.63rem 3rem;
  text-align: left;
  font-size: 1.13rem;
  color: #111927;
    font-weight: 600;

`;

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {
    return (

        <Nav>
            <SideNav current="Projects" />



                <PageContainer>
                    <Header>
                        <h1>My profile</h1>
                    </Header>
                    {children}</PageContainer>



        </Nav>





    );
}