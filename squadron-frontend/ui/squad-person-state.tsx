"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import RoleInfo from "./role-info";
import CustomBadge from "./custom-badge";

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

interface SquadPersonStateProps {
  avatarSrc: string;
  name: string;
  profileLink: string;
  title: string;
  state: "Rejected" | "Accepted" | "Pending";
}

const SquadPersonState: React.FC<SquadPersonStateProps> = ({
  avatarSrc,
  name,
  profileLink,
  title,
  state,
}) => {
  const renderBadge = () => {
    switch (state) {
      case "Rejected":
        return <CustomBadge label={"Rejected"} preset="red" size="large" />;
      case "Accepted":
        return <CustomBadge label={"Accepted"} preset="green" size="large" />;
      case "Pending":
        return <CustomBadge label={"Pending"} preset="yellow" size="large" />;
      default:
        return null;
    }
  };
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
      <td>{renderBadge()}</td>
    </tr>
  );
};

export default SquadPersonState;
