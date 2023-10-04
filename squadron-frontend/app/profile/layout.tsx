"use client"
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  
  flex-direction: column;
    background-color: rgba(16, 24, 40, 0.06);
 align-items: center;
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