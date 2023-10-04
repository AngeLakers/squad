"use client"
import React from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";
import blackBackgroundImage from "@/public/black-background.png";
import Image from "next/image";

interface BuildApplySquadProps {
    width?: string;
    title?: string;
    description?: string;
    buttonLabel?: string;
    backgroundImage?: string;
}

type ContainerProps = {
    containerWidth?: string;
  }

  
const Container = styled.div<ContainerProps>`
    display: flex;
    border-radius: 12px;
    width: ${props => props.containerWidth || '100%'};
    overflow: hidden; 
`;

const LeftSide = styled.div`
    flex: 0 0 65%;
    background-color: #0B0F00;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 24px;

    h1 {
        font-size: 24px;
        font-weight: 600;
        color: white;
        margin-bottom: 6px;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        color: white;
        opacity: 80%;
        margin-bottom: 32px;
    }
`;

const RightSide = styled.div`
    flex: 0 0 35%;
    position: relative;
    border: 1px solid #0B0F00;
`;

const BuildApplySquad: React.FC<BuildApplySquadProps> = ({
    title = "Build Your Own Squad",
    description = "View all applicants and put together a custom Squad from scratch.",
    buttonLabel = "Start Building",
    backgroundImage = blackBackgroundImage,
    width,
}) => {
  return (
    <Container containerWidth={width}>
        <LeftSide>
            <h1>{title}</h1>
            <p>{description}</p>
            <CustomButton label={buttonLabel} preset="default" backgroundColor="#D0FC4A" textColor="#384250"/>
        </LeftSide>
        <RightSide>
            <Image
            key="backgroundImage"
            src={backgroundImage}
            alt="background Image"
            layout="fill"
            objectFit="cover"
            />
        </RightSide>
    </Container>
  );
};

export default BuildApplySquad;
