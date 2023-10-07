"use client"
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
    background-color: rgba(16, 24, 40, 0.06);
  //align-content: flex-start;
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
