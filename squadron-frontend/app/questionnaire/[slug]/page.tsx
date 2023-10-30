"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import Questionnaire1T from "@/ui/questionnaire1T";
import Questionnaire4 from "@/ui/questionnaire4T";
import Questionnaire5T from "@/ui/questionnaire5T";
import Questionnaire5C from "@/ui/questionnaire5C";
import Questionnaire1C from "@/ui/questionnaire1C";
import Questionnaire2C from "@/ui/questionnaire2C";
import Questionnaire3C from "@/ui/questionnaire3C";
import Questionnaire4C from "@/ui/questionnaire4C";
import Questionnaire6C from "@/ui/questionnaire6C";
import Questionnaire7C from "@/ui/questionnaire7C";

type ComponentMap = {
  [key: string]: JSX.Element | null;
};

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);
  const componentMap: ComponentMap = {
    "/questionnaire/1c": <Questionnaire1C />,
    "/questionnaire/1t": <Questionnaire1T />,
    "/questionnaire/2c": <Questionnaire2C />,
    "/questionnaire/3c": <Questionnaire3C />,
    "/questionnaire/4c": <Questionnaire4C />,
    "/questionnaire/4t": <Questionnaire4 />,
    "/questionnaire/5t": <Questionnaire5T />,
    "/questionnaire/5c": <Questionnaire5C />,
    "/questionnaire/6c": <Questionnaire6C />,
    "/questionnaire/7c": <Questionnaire7C />,
  };

  const selectedComponent = componentMap[pathname] || null;

  return selectedComponent;
}
