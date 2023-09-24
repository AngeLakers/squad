"use client";
import * as React from "react";
import InfoBar from "@/ui/info-bar";
import SquadCard from "@/ui/squad-card";

export default function AllComponents() {
  return (
    <div>
      <InfoBar
        title="We’ve colleted the best applicants for you"
        description="Review all squads and applicants and start hiring. "
        buttonLabel="Review applicants"
        backgroundColor="#ECFDF3"
        borderColor="#6CE9A6"
        icon={
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="56" height="56" rx="28" fill="#D1FADF" />
            <path
              d="M28 23.3333V28M28 32.6666H28.0117M39.6667 28C39.6667 34.4433 34.4433 39.6666 28 39.6666C21.5567 39.6666 16.3333 34.4433 16.3333 28C16.3333 21.5567 21.5567 16.3333 28 16.3333C34.4433 16.3333 39.6667 21.5567 39.6667 28Z"
              stroke="#039855"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        link={""}
      ></InfoBar>
      <SquadCard></SquadCard>
    </div>
  );
}
