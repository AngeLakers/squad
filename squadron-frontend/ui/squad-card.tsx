import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";
import DropdownButton from "./dropdown-button";
import { ArrowUpSVG, ArrowDownSVG, SquadSVG, VerticalDotsSVG } from "./svgs";
import SquadPerson from "./squad-person";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: #ffffff;
  margin: 0 10%;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e5e7eb;
`;

const MatchContainer = styled.div`
  width: 100%;
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

const SquadTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const TableTitle = styled.div`
  color: #4d5761;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
`;

const TableTitle1 = styled(TableTitle)`
  padding: 12px 24px 12px 24px;
  flex: 2;
`;
const TableTitle2 = styled(TableTitle)`
  padding: 12px 24px 12px 0px;
  flex: 5;
`;
const TableTitle3 = styled(TableTitle)`
  padding: 12px 24px 12px 0px;
  flex: 1.5;
`;

const ShowMoreButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: #4d5761;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

interface CustomSquadCard {}

const SquadCard: React.FC<CustomSquadCard> = ({}) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <Card>
      <MatchContainer>
        <div>100%match</div>
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
            <CustomButton label="Hire Squad" />
            <DropdownButton
              label={<VerticalDotsSVG />}
              preset="outlined"
              menuItems={["Menu Item 1", "Menu Item 2", "Menu Item 3"]}
            />
          </ButtonContainer>
        </SquadHeader>
        <SquadTable>
          <TitleRow>
            <TableTitle1>Squad</TableTitle1>
            <TableTitle2>Position</TableTitle2>
            <TableTitle3></TableTitle3>
          </TitleRow>
          <Divider />
          <SquadPerson
            avatarSrc={"https://avatars.githubusercontent.com/u/12592949?v=1"}
            name={"111Patricia Montero"}
            profileLink={"#"}
            title={"Front-End Engineer"}
            rate={"$30 /h"}
            hoursPerWeek={"20-25h /week"}
            location={"Unitated States"}
            availability={"Inmediate"}
          />

          <Divider />
          <SquadPerson
            avatarSrc={"https://avatars.githubusercontent.com/u/12592949?v=1"}
            name={"111Patricia Montero"}
            profileLink={"#"}
            title={"Front-End Engineer"}
            rate={"$30 /h"}
            hoursPerWeek={"20-25h /week"}
            location={"Unitated States"}
            availability={"Inmediate"}
          />
          <Divider />
          <SquadPerson
            avatarSrc={"https://avatars.githubusercontent.com/u/12592949?v=1"}
            name={"111Patricia Montero"}
            profileLink={"#"}
            title={"Front-End Engineer"}
            rate={"$30 /h"}
            hoursPerWeek={"20-25h /week"}
            location={"Unitated States"}
            availability={"Inmediate"}
          />
          <Divider />
          {/* Conditionally render the rest based on showAll state */}
          {showAll && (
            <>
              <SquadPerson
                avatarSrc={
                  "https://avatars.githubusercontent.com/u/12592949?v=1"
                }
                name={"111Patricia Montero"}
                profileLink={"#"}
                title={"Front-End Engineer"}
                rate={"$30 /h"}
                hoursPerWeek={"20-25h /week"}
                location={"Unitated States"}
                availability={"Inmediate"}
              />
              <Divider />
              <SquadPerson
                avatarSrc={
                  "https://avatars.githubusercontent.com/u/12592949?v=1"
                }
                name={"111Patricia Montero"}
                profileLink={"#"}
                title={"Front-End Engineer"}
                rate={"$30 /h"}
                hoursPerWeek={"20-25h /week"}
                location={"Unitated States"}
                availability={"Inmediate"}
              />
              <Divider />
            </>
          )}
        </SquadTable>

        <ShowMoreButton onClick={() => setShowAll(!showAll)}>
          {showAll ? "See Less" : "See More"}
          {showAll ? <ArrowUpSVG /> : <ArrowDownSVG />}
        </ShowMoreButton>
      </SquadContainer>
    </Card>
  );
};

export default SquadCard;
