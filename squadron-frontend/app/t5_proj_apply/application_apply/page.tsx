"use client"
import "@/styles/globals.css";
import type { Metadata } from "next";
import styled from "styled-components";
import ConfirmDetail from "@/ui/apply-role-confirm-details";
import Questionaire from "@/ui/apply-role-answer-question";
import RoleDetail from "@/ui/apply-role-detail-card";
import UploadFile from "@/ui/apply-role-upload-file";
import Footer from "@/ui/footer";
import ApplyCancelPopup from "@/ui/apply_cancel";
import { useState } from "react";

import {
    gray900,
    gray200,
    fontFamily,
    mediumFontWeight,
    xlargeFontSize,
    xxlargeLineHeight,
    basewhite
} from "@/styles/reuseParams";
import { SimpleHeader } from "@/ui/simple-header";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background-color: #F9FAFB;
`

const ApplyRoleContainer = styled.div`
    width: 80%;
    box-sizing: border-box;
    display: flex;
    gap: 32px;
    position: relative;
    flex-direction: column;
    height: fit-content;
    margin-bottom: 20%;
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

    const [isCancelPopupVisible, setIsCancelPopupVisible] = useState(false);
    const openCancelPopup = () => {
        setIsCancelPopupVisible(true);
    }

    return (
        <Container>
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
            <Footer 
                leftButtonLabel="Cancel"
                onLeftClick={() => setIsCancelPopupVisible(true)}
                rMiddleButtonLabel="Save as draft"
                rRightButtonLabel="Apply"
                rightLink="application_sent"
                isRLeftButtonVisible={false}
                isButtonDisabled={false}  
            />
    
        {isCancelPopupVisible && (
        <ApplyCancelPopup onClose={() => setIsCancelPopupVisible(false)} />
      )}
        </Container>
        
    );
}
