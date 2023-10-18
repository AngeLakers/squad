"use client";
import * as React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import styled from "styled-components";

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #0b0f00;
  color: #ffffff;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 64px;
  margin: 70px auto;
`;

const VideoPlayer = styled.div`
  position: relative;
  width: 31rem;
  height: 25rem;
`;

const Description = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1.25rem;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
`;

const Content = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Helvetica;
  font-size: 22px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  align-items: center;
  gap: 10px;
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
`;

export default function ApplicationIntro() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Introduction>
      <ContentContainer>
        <Logo>
          <LogoImage alt="" src="/logo.png" />
          squadron
        </Logo>
        <VideoPlayer>
          <YouTube videoId="faMx3IPpX4k" opts={opts} onReady={onPlayerReady} />
        </VideoPlayer>
        <Description>
          <Title>Lorem ipsum dolor</Title>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non
            scelerisque in augue.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. A non scelerisque in augue.
          </Content>
        </Description>
      </ContentContainer>
    </Introduction>
  );
}
