"use client";
import * as React from "react";
import SquadCard from "@/ui/squad-card";
import { SimpleHeader } from "@/ui/simple-header";
import styled from "styled-components";
import BuildApplySquad from "@/ui/build-apply-squad";

const Container = styled.div`
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 100px;
`;

const Text = styled.p`
    margin: 32px 0; 
    font-size: 24px;
`;

const SuggestedSquads = styled.div`
    margin-bottom: 48px;
`;

const SquadCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Title = styled.h2`
    font-size: 30px;
    font-weight: 600;
    color: #111927;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 8px;
`;

const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #4D5761;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 48px;
`;

export default function AllComponents() {
  return (
    <>
    
      <Container>
        <SimpleHeader />
        <Text>Waiting for the black header</Text>
        <SuggestedSquads>
          <Title>Suggested Squads</Title>
          <Description>Squads that Squadron has tailored for you based on your preferences.</Description>
          <SquadCardDiv>
          <SquadCard></SquadCard>
          <SquadCard></SquadCard>
          </SquadCardDiv>
        </SuggestedSquads>

        <SuggestedSquads>
          <Title>Pre-Formed Squads</Title>
          <Description>Squads that have worked together previously.</Description>
          <SquadCardDiv>
          <SquadCard></SquadCard>
          <SquadCard></SquadCard>
          </SquadCardDiv>
        </SuggestedSquads>
        <BuildApplySquad />
      </Container>
    </>
  );
}
