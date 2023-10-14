"use client";
import * as React from "react";
import InfoBar from "@/ui/info-bar";
import SquadCard from "@/ui/squad-card";
import { AlertSVG, SquadSVG, StarSVG } from "@/ui/svgs";
import RatioButtonsTable from "@/ui/ratio-buttons-table";
import CardLayout from "@/ui/layout-card";
import Heading from "@/ui/heading";
import StepHeading from "@/ui/step-heading";
import { PersonData } from "@/ui/squad-table";
import router from "next/router";
import { ButtonContainerPresets } from "@/ui/squad-card";
import { BadgeData } from "@/ui/talent-skills";
import TalentCard from "@/ui/talent-card";

const mockSkillsData: Array<BadgeData[]> = [
  [
    { label: "Roadmapping", icon: <StarSVG />, preset: "outlined_green" },
    { label: "Vendor Management & Selection", preset: "outlined_grey" },
    {
      label: "Vendor Management & Selection",
      icon: <StarSVG preset="grey" />,
      preset: "outlined_grey",
    },
    {
      label: "Vendor Management & Selection",
      icon: <StarSVG preset="grey" />,
      preset: "outlined_grey",
    },
    {
      label: "Vendor Management & Selection",
      icon: <StarSVG preset="grey" />,
      preset: "outlined_grey",
    },
    {
      label: "Vendor Management & Selection",
      icon: <StarSVG preset="grey" />,
      preset: "outlined_grey",
    },
    {
      label: "Vendor Management & Selection",
      icon: <StarSVG preset="grey" />,
      preset: "outlined_grey",
    },
  ],
  [
    {
      label: "Photoshop",
      icon: <img alt="photoshop logo" src="/photoshop.png" />,
      preset: "outlined_grey",
    },
    {
      label: "Figma",
      icon: <img alt="figma logo" src="/figma.png" />,
      preset: "outlined_grey",
    },
  ],
];

const stateData: Array<PersonData> = [
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/1",
    title: "Front-End Engineer",
    state: "Accepted",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Jane Doe",
    profileLink: "/profile/2",
    title: "Designer",
    state: "Rejected",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "John Smith",
    profileLink: "/profile/3",
    title: "Back-End Developer",
    state: "Pending",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Alice Johnson",
    profileLink: "/profile/4",
    title: "Product Manager",
    state: "Accepted",
  },
];

const bookData: Array<PersonData> = [
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/1",
    title: "Front-End Engineer",
    state: "viewing",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Jane Doe",
    profileLink: "/profile/2",
    title: "Designer",
    state: "interviewing",
  },
];
const viewData: Array<PersonData> = [
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
    onClick: () => (window.location.href = "/signup"),
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
  },
  {
    avatarSrc: "https://avatars.githubusercontent.com/u/12592949?v=1",
    name: "Patricia Montero",
    profileLink: "/profile/3",
    title: "Front-End Engineer",
    rate: "$50/hr",
    hoursPerWeek: "20-25h /week",
    location: "United States or Australia",
    availability: "Immediate",
  },
];

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
      <SquadCard
        badgeTitles={["E-commerce", "MVP"]}
        squadTitle="MVP for Serverless E-commerce Return Portal"
        squadSubTitle="Stir"
        squadDescription="We are helping e-commerce to be more profitable and sustainable by processing, analysing and reselling returns and overstock through our software and logistics platform. We need a passionate team to build the beta version of our SaaS Customer Returns. We are helping e-commerce to be more profitable and sustainable by processing, analysing and reselling returns and overstock through our software and logistics platform. We need a passionate team to build the beta version of our SaaS Customer Returns..."
        icon={
          <img src="https://avatars.githubusercontent.com/u/12592949?v=1" />
        }
        type="project"
        data={[
          "Product Manager",
          "Front End Developer",
          "Back End Developer",
          "UX Designer",
        ]}
      />
      <TalentCard
        title={"UX Designer"}
        icon={
          <img src="https://avatars.githubusercontent.com/u/12592949?v=1" />
        }
        name={"Olivia Rhye"}
      />
      <InfoBar
        title="We’ve colleted the best applicants for you"
        description="Review all squads and applicants and start hiring. "
        buttonLabel="Review applicants"
        backgroundColor="#ECFDF3"
        borderColor="#6CE9A6"
        icon={<AlertSVG />}
        link={""}
      ></InfoBar>
      <SquadCard
        badgeTitles={["Good Match 80%", "From Suggested squad #1"]}
        badgeColor="green"
        squadTitle="Patricia Montero"
        squadSubTitle="UX Designer"
        rate="$30 /h"
        rateColor="#027A48"
        hoursPerWeek="20-25h /week"
        hoursPerWeekColor="#027A48"
        location="Amsterdam (8 hours overlap)"
        locationColor="#B42318"
        availability="Inmediate"
        availabilityColor="#027A48"
        experience="5 years experience"
        icon={
          <img src="https://avatars.githubusercontent.com/u/12592949?v=1" />
        }
        buttonsPreset={ButtonContainerPresets.TALENT}
        type="book"
        data={mockSkillsData}
      />
      <SquadCard type="state" data={stateData} />
      <SquadCard
        badgeTitles={["Good Match 80%"]}
        badgeColor="green"
        squadTitle="Suggested Squad #1"
        squadDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morLorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morLorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. mor"
        icon={<SquadSVG backgroundColor="#E5E7EB" />}
        type="book"
        data={bookData}
      />
      <SquadCard
        badgeTitles={["Good Match 80%"]}
        badgeColor="green"
        squadTitle="Suggested Squad #1"
        type="view"
        data={viewData}
      />
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
