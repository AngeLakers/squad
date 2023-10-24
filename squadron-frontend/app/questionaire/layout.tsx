"use client";
import "@/styles/globals.css";
import type { Metadata } from "next";
import styled from "styled-components";
import ApplicationIntro from "@/ui/application-intro";
import { usePathname } from "next/navigation";
import CustomButton from "@/ui/custom-button";
import { ArrowLeftGreySVG, ArrowLeftSVG } from "@/ui/svgs";

const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const BottomBar = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #f3f4f6;
  padding: 18px 112px 18px 112px;
`;

const ButtonLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const QuestionaireLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const pathname = usePathname();
  const urlsToShowBottomBar = "questionare";
  const showBottomBar = pathname.includes(urlsToShowBottomBar);

  return (
    <QuestionaireLayout>
      <Body>
        <ApplicationIntro />
        {children}
      </Body>
      <BottomBar>
        <CustomButton
          preset="outlined"
          label={
            <ButtonLabel>
              <ArrowLeftGreySVG />
              Back
            </ButtonLabel>
          }
          width="144px"
        />
        <CustomButton preset="default" label="Next" width="144px" />
      </BottomBar>
    </QuestionaireLayout>
  );
}
