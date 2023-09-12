"use client";
import * as React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import styled from "styled-components";

const Introduction = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #0b0f00;
  overflow: hidden;
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
  justify-content: flex-start;
  gap: 0.5rem;
  font-size: 1.25rem;
`;

const Title = styled.h3`
  align-self: stretch;
  line-height: 2rem;
  font-weight: 600;
  margin: 0rem;
`;

const Content = styled.div`
  align-self: stretch;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  align-items: center;
  display: flex;
  margin-right: 22rem;
  margin-bottom: 2rem;
`;

const LogoImage = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

const IntroContainer = styled.div`
  align-self: stretch;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export function ApplicationIntro() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
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
      <IntroContainer>
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
      </IntroContainer>
    </Introduction>
  );
}
