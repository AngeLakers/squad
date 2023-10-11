import React from "react";
import styled from "styled-components";
import { RateSVG, ClockSVG, LocationSVG, CalenderSVG, FlashSVG } from "./svgs";

const Role = styled.div<{ hideTitle?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.hideTitle ? "0px" : "16px 24px 16px 0px")};
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

const InfoContent = styled.div<{ fontColor?: string }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.fontColor || "#4d5761"};
`;

export interface RoleInfoProps {
  title?: string;
  rate?: string;
  rateColor?: string;
  hoursPerWeek?: string;
  hoursPerWeekColor?: string;
  location?: string;
  locationColor?: string;
  availability?: string;
  availabilityColor?: string;
  experience?: string;
  experienceColor?: string;
  hideTitle?: boolean;
}

const RoleInfo: React.FC<RoleInfoProps> = ({
  hideTitle = false,
  title,
  rate,
  rateColor,
  hoursPerWeek,
  hoursPerWeekColor,
  location,
  locationColor,
  availability,
  availabilityColor,
  experience,
  experienceColor,
}) => (
  <Role hideTitle={hideTitle}>
    {!hideTitle && <RoleTitle>{title}</RoleTitle>}
    {(rate || hoursPerWeek || location || availability || experience) && (
      <InfoContainer>
        {rate && (
          <InfoRow>
            <InfoIcon>
              <RateSVG />
            </InfoIcon>
            <InfoContent fontColor={rateColor}>{rate}</InfoContent>
          </InfoRow>
        )}
        {hoursPerWeek && (
          <InfoRow>
            <InfoIcon>
              <ClockSVG />
            </InfoIcon>
            <InfoContent fontColor={hoursPerWeekColor}>
              {hoursPerWeek}
            </InfoContent>
          </InfoRow>
        )}
        {location && (
          <InfoRow>
            <InfoIcon>
              <LocationSVG />
            </InfoIcon>
            <InfoContent fontColor={locationColor}>{location}</InfoContent>
          </InfoRow>
        )}
        {availability && (
          <InfoRow>
            <InfoIcon>
              <CalenderSVG />
            </InfoIcon>
            <InfoContent fontColor={availabilityColor}>
              {availability}
            </InfoContent>
          </InfoRow>
        )}
        {experience && (
          <InfoRow>
            <InfoIcon>
              <FlashSVG />
            </InfoIcon>
            <InfoContent fontColor={experienceColor}>{experience}</InfoContent>
          </InfoRow>
        )}
      </InfoContainer>
    )}
  </Role>
);

export default RoleInfo;
