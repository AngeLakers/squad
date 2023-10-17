"use client"
import * as React from 'react';
import Image from "next/image";
import styled from "styled-components";
import CustomButton from '@/ui/custom-button'; 
import HomeImageSrc from "@/public/t1-homescreen.png";
import { ComplexHeader } from '@/ui/complex-header';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 80px);
`;

const LeftSection = styled.div`
  padding-left: 80px;
  padding-right: 32px;
  width: calc(50vw - 80px);
  min-width: 592px;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  padding-right: 80px;
  min-width: 592px;
  width: calc(50vw - 80px);
`; 

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: #111927;
  margin: 0;
  margin-bottom: 48px;
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #4D5761;
  margin: 0;
  margin-bottom: 48px;
`;

export default function C1() {
  return (  
    <>
    <ComplexHeader />
    <Container>
      <LeftSection>
        <Title>Lorem ipsum dolor sit amet.</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis ultrices facilisis libero.</Description>
        <CustomButton label="Find your Squad" preset="default" />
      </LeftSection>
      <RightSection>
        <Image key="T1HomeImage" src={HomeImageSrc} alt="Home" width="592" height="592"/>
      </RightSection>
    </Container>
    </>
  );
}


