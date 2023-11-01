"use client";
import "@/styles/globals.css";
import type { Metadata } from "next";
import styled from "styled-components";
import ApplicationIntro from "@/ui/application-intro";
import { usePathname } from "next/navigation";
import CustomButton from "@/ui/custom-button";
import { ArrowLeftGreySVG, ArrowLeftSVG } from "@/ui/svgs";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();
  const urlsToShowBottomBar = "questionnaire";
  const showBottomBar = pathname.includes(urlsToShowBottomBar);

  const getNextQuestionnaireUrl = (currentPath: string) => {
    const pathParts = currentPath.split("/");
    const currentId = pathParts[pathParts.length - 1];
    const base = currentId.slice(-1);
    const number = parseInt(currentId.slice(0, -1), 10);

    if (isNaN(number)) return null;
    let nextId = "";
    if (base === "c") {
      if (number >= 7) {
        return `/t1/thank_you`;
      } else {
        nextId = `${number + 1}c`;
      }
    } else if (base === "t") {
      console.log("number", number);
      if (number >= 5) {
        return `/t1/account_created`;
      } else {
        nextId = `${number + 1}t`;
      }
    }
    return `/questionnaire/${nextId}`;
  };

  const getPreviousQuestionnaireUrl = (currentPath: string) => {
    const pathParts = currentPath.split("/");
    const currentId = pathParts[pathParts.length - 1];
    const base = currentId.slice(-1);
    const number = parseInt(currentId.slice(0, -1), 10);

    if (isNaN(number) || number <= 1) return null;

    let prevId = "";
    if (base === "c") {
      prevId = `${number - 1}c`;
    } else if (base === "t") {
      prevId = `${number - 1}t`;
    }

    return `/questionnaire/${prevId}`;
  };

  const handleNextClick = () => {
    const nextUrl = getNextQuestionnaireUrl(pathname);
    if (nextUrl) {
      router.push(nextUrl);
    }
  };

  const handleBackClick = () => {
    const prevUrl = getPreviousQuestionnaireUrl(pathname);
    if (prevUrl) {
      router.push(prevUrl);
    }
  };

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
          onClick={handleBackClick}
        />
        <CustomButton
          preset="default"
          label="Next"
          width="144px"
          onClick={handleNextClick}
        />
      </BottomBar>
    </QuestionaireLayout>
  );
}
