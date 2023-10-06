"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import CustomButton from "./custom-button";
import { RateSVG, ClockSVG, LocationSVG, CalenderSVG } from "./svgs";
import RoleInfo from "./role-info";

const PersonName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 17px 24px 24px;
  flex: 1;
`;

const PersonAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

const ProfileLink = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #6c5fff;
`;

const ViewApplicationButton = styled.div`
  float: right;
  padding-right: 16px;
`;

const StateSelection = styled.select`
  padding: 10px 14px 10px 14px;
  border-radius: 8px;
  border: 1px solid #d2d6db;
  background-color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
  gap: 8px;
`;

interface SquadPersonBookProps {
  avatarSrc: string;
  name: string;
  profileLink: string;
  title: string;
  state: "viewing" | "interviewing" | "interviewed";
}

const SquadPersonBook: React.FC<SquadPersonBookProps> = ({
  avatarSrc,
  name,
  profileLink,
  title,
  state,
}) => {
  const isButtonDisabled = state === "interviewed";
  return (
    <tr>
      <td>
        <PersonName>
          <PersonAvatar src={avatarSrc} alt={name + " Avatar"} />
          <NameContainer>
            <Name>{name}</Name>
            <ProfileLink href={profileLink}>View Profile</ProfileLink>
          </NameContainer>
        </PersonName>
      </td>
      <td>
        <RoleInfo title={title} />
      </td>
      <td>
        <StateSelection defaultValue={state}>
          <option value="viewing">Viewing application</option>
          <option value="interviewing">Interviewing</option>
          <option value="interviewed">Interviewed</option>
        </StateSelection>
      </td>
      <td>
        <ViewApplicationButton>
          <CustomButton label="Book Call" preset="default" />
        </ViewApplicationButton>
      </td>
    </tr>
  );
};

export default SquadPersonBook;
