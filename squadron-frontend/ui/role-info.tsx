import React from "react";
import styled from "styled-components";
import { RateSVG, ClockSVG, LocationSVG, CalenderSVG } from "./svgs";

const Role = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px 16px 0px;
  gap: 4px;
  flex: 1;
`;

const RoleTitle = styled.div`
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
  align-items: center;
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

export interface RoleInfoProps {
  title: string;
  rate: string;
  hoursPerWeek: string;
  location: string;
  availability: string;
}

const RoleInfo: React.FC<RoleInfoProps> = ({
  title,
  rate,
  hoursPerWeek,
  location,
  availability,
}) => {
  return (
    <Role>
      <RoleTitle>{title}</RoleTitle>
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
    </Role>
  );
};

export default RoleInfo;
