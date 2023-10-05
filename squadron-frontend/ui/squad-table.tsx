import React, { useState } from "react";
import styled from "styled-components";
import { ArrowUpSVG, ArrowDownSVG } from "./svgs";
import SquadPerson from "./squad-person";
import SquadPersonBook from "./squad-person-book";

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

const Table = styled.table<{ tableType: string }>`
  width: 100%;
  border-collapse: collapse;

  th,
  tr {
    border-bottom: 1px solid #e5e7eb;
  }

  ${({ tableType }) =>
    tableType === "view" &&
    `
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
  `}

  ${({ tableType }) =>
    tableType === "book" &&
    `
    th:nth-child(1) {
      width: 15%;
    }

    th:nth-child(2) {
      padding-left: 0px;
      width: 35%;
    }
    th:nth-child(3) {
      padding-left: 0px;
      width: 35%;
    }

    th:nth-child(4) {
      width: 15%;
    }
  `}
`;

interface CommonProps {
  avatarSrc: string;
  name: string;
  profileLink: string;
  title: string;
}

interface BookProps extends CommonProps {
  state: "viewing" | "interviewing" | "interviewed";
}

interface ViewProps extends CommonProps {
  rate: string;
  hoursPerWeek: string;
  location: string;
  availability: string;
}

export type PersonData = BookProps | ViewProps;

interface SquadTableProps {
  type?: "book" | "view";
  data: Array<PersonData>;
}

const SquadTable: React.FC<SquadTableProps> = ({ type = "view", data }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <Table tableType={type}>
        <thead>
          <tr>
            {type === "view" ? (
              <>
                <TableHeader>Squad</TableHeader>
                <TableHeader>Position</TableHeader>
              </>
            ) : (
              <>
                <TableHeader>Squad</TableHeader>
                <TableHeader>Position</TableHeader>
                <TableHeader>State</TableHeader>
              </>
            )}
            <TableHeader></TableHeader>
          </tr>
        </thead>
        <tbody>
          {type === "book"
            ? data.map((person, index) => {
                return (
                  <SquadPersonBook
                    key={index}
                    avatarSrc={person.avatarSrc}
                    name={person.name}
                    profileLink={person.profileLink}
                    title={person.title}
                    state={(person as BookProps).state}
                  />
                );
              })
            : data.map((person, index) => {
                if (!showAll && index >= 3) return null;
                return (
                  <SquadPerson
                    key={index}
                    avatarSrc={person.avatarSrc}
                    name={person.name}
                    profileLink={person.profileLink}
                    title={person.title}
                    rate={(person as ViewProps).rate}
                    hoursPerWeek={(person as ViewProps).hoursPerWeek}
                    location={(person as ViewProps).location}
                    availability={(person as ViewProps).availability}
                  />
                );
              })}
        </tbody>
      </Table>
      <ShowMoreButton
        onClick={() => setShowAll(!showAll)}
        style={{
          display: data.length > 3 && type !== "book" ? "flex" : "none",
        }}
      >
        {showAll ? "See Less" : "See More"}
        {showAll ? <ArrowUpSVG /> : <ArrowDownSVG />}
      </ShowMoreButton>
    </>
  );
};

export default SquadTable;
