"use client";
import * as React from "react";
import InfoBar from "@/ui/info-bar";
import SquadCard from "@/ui/squad-card";
import { AlertSVG } from "@/ui/svgs";

export default function AllComponents() {
  return (
    <>
      <InfoBar
        title="We’ve colleted the best applicants for you"
        description="Review all squads and applicants and start hiring. "
        buttonLabel="Review applicants"
        backgroundColor="#ECFDF3"
        borderColor="#6CE9A6"
        icon={<AlertSVG />}
        link={""}
      ></InfoBar>
      <SquadCard></SquadCard>
    </>
  );
}
