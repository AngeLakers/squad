"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import Questionare1T from "@/ui/questionaire1T";
import Questionare4 from "@/ui/questionaire4T";
import Questionare5T from "@/ui/questionaire5T";
import Questionare5C from "@/ui/questionaire5C";
import Questionare1C from "@/ui/questionaire1C";
import Questionare2C from "@/ui/questionaire2C";
import Questionare3C from "@/ui/questionaire3C";
import Questionare4C from "@/ui/questionaire4C";
import Questionare6C from "@/ui/questionaire6C";
import Questionare7C from "@/ui/questionaire7C";

type ComponentMap = {
  [key: string]: JSX.Element | null;
};

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);
  const componentMap: ComponentMap = {
    "/questionaire/1c": <Questionare1C />,
    "/questionaire/1t": <Questionare1T />,
    "/questionaire/2c": <Questionare2C />,
    "/questionaire/3c": <Questionare3C />,
    "/questionaire/4c": <Questionare4C />,
    "/questionaire/4t": <Questionare4 />,
    "/questionaire/5t": <Questionare5T />,
    "/questionaire/5c": <Questionare5C />,
    "/questionaire/6c": <Questionare6C />,
    "/questionaire/7c": <Questionare7C />,
  };

  const selectedComponent = componentMap[pathname] || null;

  return selectedComponent;
}
