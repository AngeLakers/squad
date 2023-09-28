import React from "react";
import styled from "styled-components";
import Link from "next/link";
import CustomButton from "./custom-button";
import { RateSVG, ClockSVG, LocationSVG, CalenderSVG } from "./svgs";

const SquadRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PersonName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 17px 24px 24px;
  flex: 2;
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
  flex: 5;
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
width: 16px
height: 16px
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1.5;
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
    <SquadRow>
      <PersonName>
        <PersonAvatar src={avatarSrc} alt={name + " Avatar"} />
        <NameContainer>
          <Name>{name}</Name>
          <ProfileLink href={profileLink}>View Profile</ProfileLink>
        </NameContainer>
      </PersonName>
      <PersonInfo>
        <PersonTitle>{title}</PersonTitle>
        <InfoContainer>
          <InfoRow>
            <InfoIcon>
              <RateSVG />
            </InfoIcon>
            <InfoContent>{rate}</InfoContent>
          </InfoRow>
          <InfoRow>
            <InfoIcon>
              <ClockSVG />
            </InfoIcon>
            <InfoContent>{hoursPerWeek}</InfoContent>
          </InfoRow>
          <InfoRow>
            <InfoIcon>
              <LocationSVG />
            </InfoIcon>
            <InfoContent>{location}</InfoContent>
          </InfoRow>
          <InfoRow>
            <InfoIcon>
              <CalenderSVG />
            </InfoIcon>
            <InfoContent>{availability}</InfoContent>
          </InfoRow>
        </InfoContainer>
      </PersonInfo>
      <ViewApplicationButton>
        <CustomButton label="View Application" preset="outlined" />
      </ViewApplicationButton>
    </SquadRow>
  );
};

export default SquadPerson;
