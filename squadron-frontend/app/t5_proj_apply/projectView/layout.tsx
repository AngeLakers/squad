'use client'
import '@/styles/globals.css';
import type { Metadata } from 'next';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F9FAFB;
  height: fit-content;
`;
export const metadata: Metadata = {
  title: 'Squadron',
  description: 'Squadron frontend',
};
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PageContainer>{children}</PageContainer>
  );
}
