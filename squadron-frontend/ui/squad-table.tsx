import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";
import DropdownButton from "./dropdown-button";
import { ArrowUpSVG, ArrowDownSVG } from "./svgs";
import SquadPerson from "./squad-person";

const TableHeader = styled.th`
  padding: 12px 24px;
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  color: #4d5761;
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  tr {
    border-bottom: 1px solid #e5e7eb;
  }

  th:nth-child(1) {
    width: 25%;
  }

  th:nth-child(2) {
    padding-left: 0px;
    width: 60%;
  }

  th:nth-child(3) {
    width: 15%;
  }
`;

interface CustomSquadTable {}

const SquadTable: React.FC<CustomSquadTable> = ({}) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <>
      <Table>
        <thead>
          <tr>
            <TableHeader>Squad</TableHeader>
            <TableHeader>Position</TableHeader>
            <TableHeader></TableHeader>
          </tr>
        </thead>
        <tbody>
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
            </>
          )}
        </tbody>
      </Table>
      <ShowMoreButton onClick={() => setShowAll(!showAll)}>
        {showAll ? "See Less" : "See More"}
        {showAll ? <ArrowUpSVG /> : <ArrowDownSVG />}
      </ShowMoreButton>
    </>
  );
};

export default SquadTable;
