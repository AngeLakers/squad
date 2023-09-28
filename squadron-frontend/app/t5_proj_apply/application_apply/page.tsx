"use client"
import "@/styles/globals.css";
import type { Metadata } from "next";
import styled from "styled-components";
import { Container } from "@mui/joy";
import ConfirmDetail from "@/ui/apply-role-confirm-details";
import Questionaire from "@/ui/apply-role-answer-question";
import RoleDetail from "@/ui/apply-role-detail-card";
import UploadFile from "@/ui/apply-role-upload-file";
import {
    gray900,
    gray200,
    fontFamily,
    mediumFontWeight,
    xlargeFontSize,
    xxlargeLineHeight,
    basewhite
} from "@/styles/reuseParams";

const ApplyRoleContainer = styled.div`
    width: 70%;
    box-sizing: border-box;
    display: flex;
    // border: 2px solid black;
    position: relative;
    flex-direction: column;
    height: fit-content;
`
const ApplyRoleTitle = styled.div`
    font-family: ${fontFamily};
    font-weight: ${mediumFontWeight};
    font-size: ${xlargeFontSize};
    line-height: ${xxlargeLineHeight};
    color: ${gray900};
    position: relative;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin: 5% 0;
`
const RoleDetailsContainer = styled.div`
    align-items: center;
    background-color: ${basewhite};
    border: 1px solid ${gray200};
    border-radius: 8px;
    display: inline-flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    // margin-top: 2%;
`
const ConfirmDetailContainer = styled.div`
    align-items: center;
    background-color: ${basewhite};
    border: 1px solid ${gray200};
    border-radius: 8px;
    display: inline-flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    margin-top: 2%;
`
const QuestionaireContainer = styled.div`
    align-items: center;
    background-color: ${basewhite};
    border: 1px solid ${gray200};
    border-radius: 8px;
    display: inline-flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    margin: 2% 0;
`
const UploadContainer = styled.div`
    align-items: center;
    background-color: ${basewhite};
    border: 1px solid ${gray200};
    border-radius: 8px;
    display: inline-flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    margin: 2% 0;
`

export default function Home() {
    return (
        <ApplyRoleContainer>
            <ApplyRoleTitle>
                <div> Apply to this Role</div>
            </ApplyRoleTitle>
            <RoleDetailsContainer>
                <RoleDetail />
            </RoleDetailsContainer>
            <ConfirmDetailContainer>
                <ConfirmDetail />
            </ConfirmDetailContainer>
            <QuestionaireContainer>
                <Questionaire />
            </QuestionaireContainer>
            <UploadContainer>
                <UploadFile />
            </UploadContainer>

        </ApplyRoleContainer>
    );
}
