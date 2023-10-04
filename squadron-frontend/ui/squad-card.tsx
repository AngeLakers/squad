import React from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";
import DropdownButton from "./dropdown-button";
import { SquadSVG, VerticalDotsSVG, TickSVG } from "./svgs";
import CustomBadge from "./custom-badge";
import SquadTable from "./squad-table";

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

interface CustomSquadCard {}

const SquadCard: React.FC<CustomSquadCard> = ({}) => {
  return (
    <Card>
      <MatchContainer>
        <CustomBadge
          preset="green"
          icon={<TickSVG />}
          label="90% Great match"
        />
      </MatchContainer>
      <Divider />
      <SquadContainer>
        <SquadHeader>
          <TitleContainer>
            <SquadSVG />
            <SquadTitle>Suggested Squad #2</SquadTitle>
          </TitleContainer>
          <ButtonContainer>
            <CustomButton label="Meet Squad" preset="outlined" />
            <CustomButton label="Hire Squad" preset="default"/>
            <DropdownButton
              label={<VerticalDotsSVG />}
              preset="outlined"
              menuItems={mockMenuItems}
            />
          </ButtonContainer>
        </SquadHeader>

        <SquadTable />
      </SquadContainer>
    </Card>
  );
};

export default SquadCard;
