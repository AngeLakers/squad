import React from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";
import DropdownButton from "./dropdown-button";
import { SquadSVG, VerticalDotsSVG, TickSVG } from "./svgs";
import CustomBadge, { PresetTypes } from "./custom-badge";
import SquadTable, { PersonData } from "./squad-table";
import ShowMoreText from "./text-showmore";

const mockMenuItems = [
  [{ menu: "View profile" }, { menu: "My Work " }],
  [{ menu: "Setting " }, { menu: "Help " }],
  [{ menu: "Logout " }],
];

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: #ffffff;
  min-width: fit-content;
  flex: 1;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e5e7eb;
`;

const MatchContainer = styled.div`
  padding: 16px 24px 16px 24px;
  gap: 16px;
`;

const SquadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  gap: 24px;
`;

const SquadHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SquadTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

interface SquadCardProps {
  badgeTitle?: string;
  badgeColor?: PresetTypes;
  squadTitle?: string;
  squadDescription?: string;
  customBadges?: React.ReactNode[];
  buttonPreset?: ButtonContainerPresets;
  type?: "book" | "view" | "state";
  data: Array<PersonData>;
  icon?: React.ReactNode;
  button1Link?: string;
  onClick?: () => void;
  hideHeader?: boolean;
  hideTitle?: boolean;
}

const SquadCard: React.FC<SquadCardProps> = ({
  badgeTitle,
  badgeColor,
  customBadges,
  squadTitle,
  squadDescription,
  buttonPreset = ButtonContainerPresets.DEFAULT,
  icon = <SquadSVG />,
  type,
  data,
  button1Link,
  onClick,
  hideHeader = type === "state" ? true : false,
  hideTitle = type === "state" ? true : false,
}) => {
  return (
    <Card>
      {!hideHeader && (
        <>
          <MatchContainer>
            {customBadges ? (
              customBadges
            ) : (
              <CustomBadge
                preset={badgeColor}
                icon={<TickSVG preset={badgeColor} />}
                label={badgeTitle || ""}
              />
            )}
          </MatchContainer>
          <Divider />
        </>
      )}
      <SquadContainer>
        {!hideTitle && (
          <SquadHeader>
            <Heading>
              <TitleContainer>
                {icon && icon}
                <SquadTitle>{squadTitle}</SquadTitle>
              </TitleContainer>
              <ButtonContainerComponent preset={buttonPreset} button1Link={button1Link} />
            </Heading>
            {squadDescription && (
              <ShowMoreText
                text={squadDescription}
                showMoreLength={300}
                fontSize={"14px"}
                fontColor={"#4D5761"}
                lineHeight={"20px"}
                fontWeight={400}
              />
            )}
          </SquadHeader>
        )}
        <SquadTable type={type} data={data} />
      </SquadContainer>
    </Card>
  );
};

export default SquadCard;

export enum ButtonContainerPresets {
  DEFAULT,
  EMPTY,
}

interface ButtonContainerProps {
  preset: ButtonContainerPresets;
  button1Link?: string,
  onClick?: () => void,
}

const ButtonContainerComponent: React.FC<ButtonContainerProps> = ({
  preset,
  button1Link,
  onClick, 
}) => {
  const renderButtons = () => {
    switch (preset) {
      case ButtonContainerPresets.DEFAULT:
        return (
          <>
            <a href={button1Link || "#"}>
            <CustomButton label="Meet Squad" preset="outlined" /></a>
            <CustomButton label="Hire Squad" preset="default" onClick={onClick} />
            <DropdownButton
              label={<VerticalDotsSVG />}
              preset="outlined"
              menuItems={mockMenuItems}
            />
          </>
        );
      case ButtonContainerPresets.EMPTY:
        return null;
      default:
        return null;
    }
  };

  return <ButtonContainer>{renderButtons()}</ButtonContainer>;
};
