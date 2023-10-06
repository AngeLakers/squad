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

const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px 16px 0px;
  gap: 4px;
  flex: 1;
`;

const PersonTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const InfoIcon = styled.div`
  width: 16px;
  height: 16px;
`;

const InfoContent = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #4d5761;
`;

const ViewApplicationButton = styled.div`
  float: right;
  padding-right: 16px;
`;

interface CustomSquadPerson {
  avatarSrc: string;
  name: string;
  profileLink: string;
  title: string;
  rate: string;
  hoursPerWeek: string;
  location: string;
  availability: string;
}

const SquadPerson: React.FC<CustomSquadPerson> = ({
  avatarSrc,
  name,
  profileLink,
  title,
  rate,
  hoursPerWeek,
  location,
  availability,
}) => {
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
        <RoleInfo
          title={title}
          rate={rate}
          hoursPerWeek={hoursPerWeek}
          location={location}
          availability={availability}
        />
      </td>
      <td>
        <ViewApplicationButton>
          <CustomButton label="View Application" preset="outlined" />
        </ViewApplicationButton>
      </td>
    </tr>
  );
};

export default SquadPerson;
