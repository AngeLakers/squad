"use client";
import * as React from "react";
import InfoBar from "@/ui/info-bar";
import SquadCard from "@/ui/squad-card";
import { AlertSVG } from "@/ui/svgs";
import RatioButtonsTable from "@/ui/ratio-buttons-table";
import CardLayout from "@/ui/layout-card";
import Heading from "@/ui/heading";
import StepHeading from "@/ui/step-heading";

const rolesData = [
  {
    label: "Front-End Engineer",
    info: {
      title: "Front-End Engineer",
      rate: "30$-50$ /h",
      hoursPerWeek: "20-25h /week",
      location: "Amsterdam, NL",
      availability: "20/12/23",
    },
  },
  {
    label: "Back-End Engineer1",
    info: {
      title: "Back-End Engineer1",
      rate: "30$-50$ /h",
      hoursPerWeek: "20-25h /week",
      location: "Amsterdam, NL",
      availability: "20/12/23",
    },
  },
  {
    label: "Back-End Engineer2",
    info: {
      title: "Back-End Engineer2",
      rate: "30$-50$ /h",
      hoursPerWeek: "20-25h /week",
      location: "Amsterdam, NL",
      availability: "20/12/23",
    },
  },
  {
    label: "Back-End Engineer3",
    info: {
      title: "Back-End Engineer3",
      rate: "30$-50$ /h",
      hoursPerWeek: "20-25h /week",
      location: "Amsterdam, NL",
      availability: "20/12/23",
    },
  },
  {
    label: "Back-End Engineer4",
    info: {
      title: "Back-End Engineer4",
      rate: "30$-50$ /h",
      hoursPerWeek: "20-25h /week",
      location: "Amsterdam, NL",
      availability: "20/12/23",
    },
  },
];

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
      
      <StepHeading
        progress={33}
        step={"Step 01/03"}
        heading={"Select your role"}
      />
      <CardLayout
        titleComponent={
          <Heading
            title={"Select your role"}
            description={
              "Before you add the rest of the team, select your role and fill up your details"
            }
          />
        }
        content={<RatioButtonsTable roles={rolesData}></RatioButtonsTable>}
      />
    </>
  );
}
