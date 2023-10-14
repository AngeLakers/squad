import React from "react";
import styled from "styled-components";
import squadImage from "@/public/squad.png";
import Image from "next/image";
import { ReactNode } from "react";
import CustomButton from "./custom-button";
import unfilledImage from "@/public/unfilled.png";
import { PresetTypes } from "./custom-button";

const Container = styled.div`
  border: 1px solid #e5e7eb;
  padding: 1%;
  width: 100%;
  border-radius: 12px;
  min-width: 1200px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

const SquadTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const SurveySwapTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #4d5761;
`;

const CustomAvatar = styled.div`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  overflow: hidden;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 24px 16px 24px;
`;

const AvatarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(120px, auto);
`;

const RoleTitle = styled.div`
  font-size: 16px;
`;

const NotAssigned = styled.div`
  font-size: 14px;
  color: #888;
  margin-top: 4px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 273px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;
const TextAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`;

type AssignButtonProps = {
  backgroundColor?: string;
  textColor?: string;
  smallButtonText?: string;
};

const AssignButton = styled.button<AssignButtonProps>`
  width: auto;
  height: 22px;
  border-radius: 16px;
  padding: 2px 8px;
  cursor: pointer;
  font-size: 12px;
  margin: 8px 0 16px 0;
  background-color: ${(props) => props.backgroundColor || "#F2F4F7"};
  color: ${(props) => props.textColor || "black"};
`;

interface Role {
  title: string;
  image?: ReactNode;
  name?: string;
  assignButtonProps?: AssignButtonProps;
  bottomButton?: {
    label: string;
    onClick?: () => void;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    preset?: PresetTypes;
  };
}

interface SquadSurveySwapProps {
  roles: Role[];
  manageButtonLabel?: string;
  manageButtonTextColor?: string;
  manageButtonPreset?: PresetTypes;
}

export default function SquadSurveySwap({ 
  roles, 
  manageButtonLabel, 
  manageButtonTextColor, 
  manageButtonPreset,
 }: SquadSurveySwapProps) {
  return (
    <Container>
      <TitleRow>
        <LogoContainer>
          <Image
            key="squadImage"
            src={squadImage}
            alt="logo"
            width="56"
            height="56"
          />
        </LogoContainer>
        <TextAndButtonContainer>
          <div>
            <SquadTitle>My Squad</SquadTitle>
            <br />
            <SurveySwapTitle>SurveySwap</SurveySwapTitle>
          </div>
          <ButtonContainer>
            <CustomButton preset="outlined" label="+ Add role"/>
            <CustomButton preset={manageButtonPreset || "text"} label={manageButtonLabel || "Manage squad"} textColor={manageButtonTextColor || "#d2d6db"}/>
          </ButtonContainer>
        </TextAndButtonContainer>
      </TitleRow>

      <AvatarGrid>
        {roles.map((role, i) => (
          <AvatarContainer key={i}>
            {role.image ? (
              <CustomAvatar>{role.image}</CustomAvatar>
            ) : (
              <CustomAvatar>
                <Image
                  key="unfilledImage"
                  src={unfilledImage}
                  alt="Unfilled Icon"
                />
              </CustomAvatar>
            )}
            <AssignButton
              backgroundColor={role.assignButtonProps?.backgroundColor}
              textColor={role.assignButtonProps?.textColor}
            >
              {role.assignButtonProps?.smallButtonText || "Unfilled"}
            </AssignButton>
            <RoleTitle>{role.title || "No Title"}</RoleTitle>
            <NotAssigned>{role.name || "Not assigned yet"}</NotAssigned>
            {role.bottomButton &&
              (role.bottomButton.preset ? (
                <CustomButton
                  label={role.bottomButton.label}
                  onClick={role.bottomButton.onClick}
                  preset={role.bottomButton.preset}
                />
              ) : (
                <CustomButton
                  label={role.bottomButton.label}
                  onClick={role.bottomButton.onClick}
                  backgroundColor={
                    role.bottomButton.backgroundColor || "#4B48EC"
                  }
                  textColor={role.bottomButton.textColor || "#ffffff"}
                  borderColor={role.bottomButton.borderColor || "none"}
                />
              ))}
          </AvatarContainer>
        ))}
      </AvatarGrid>
    </Container>
  );
}
