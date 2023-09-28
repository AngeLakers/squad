/* eslint-disable react/jsx-key */
import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import {
  LargeRateSVG,
  LargeBarSVG,
  LargeCalenderSVG,
  LargeClockSVG,
  LargeHoursSVG,
  LargeLocationSVG,
  LinkedInSVG,
  EmailSVG,
  TwitterSVG,
} from "./svgs";

const VerticalDivider = styled.div`
  width: 1px;
  border: 1px solid #eaecf0;
  angle: -90 deg;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: #ffffff;
  min-width: fit-content;
`;

const ProfileHeader = styled.div``;

const ProfileBody = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  padding: 24px 32px 24px 32px;

  @media (max-width: 1460px) {
    gap: 50px;
  }
`;

interface TalentProfileProps {}

const TalentProfile: React.FC<TalentProfileProps> = ({}) => {
  return (
    <Profile>
      <ProfileHeader></ProfileHeader>
      <ProfileBody>
        <ProfileList />
        <VerticalDivider />
        <ProfileTable />
      </ProfileBody>
    </Profile>
  );
};

export default TalentProfile;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 1460px) {
    gap: 55px;
  }
`;

const ProfileListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
`;

const ProfileListItemTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const ProfileListItemContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProfileListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const ProfileListItemContentTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #344054;
`;

const ProfileListItemContentValue = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #475467;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const ProfileList: React.FC = ({}) => {
  return (
    <List>
      <ProfileListItem>
        <ProfileListItemTitle>Experience</ProfileListItemTitle>
        <ProfileListItemContentValue>5 years</ProfileListItemContentValue>
      </ProfileListItem>
      <ProfileListItem>
        <ProfileListItemTitle>Languages</ProfileListItemTitle>
        <ProfileListItemContentContainer>
          <ProfileListItemContent>
            <ProfileListItemContentTitle>English:</ProfileListItemContentTitle>
            <ProfileListItemContentValue>Native</ProfileListItemContentValue>
          </ProfileListItemContent>
          <ProfileListItemContent>
            <ProfileListItemContentTitle>French:</ProfileListItemContentTitle>
            <ProfileListItemContentValue>
              Intermediate
            </ProfileListItemContentValue>
          </ProfileListItemContent>
        </ProfileListItemContentContainer>
      </ProfileListItem>
      <ProfileListItem>
        <ProfileListItemTitle>Social Links</ProfileListItemTitle>
        <SocialMediaContainer>
          <LinkedInSVG />
          <EmailSVG />
          <TwitterSVG />
        </SocialMediaContainer>
      </ProfileListItem>
    </List>
  );
};

const Table = styled.div`
  display: flex;
  flex-direction: row;
  gap: 23px;
  align-items: center;
  flex-grow: 1;
`;

const ProfileTableColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const ProfileTable: React.FC = ({}) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsData = [
    { Svg: <LargeRateSVG />, title: "Hourly Rate", content: "$90/h" },
    {
      Svg: <LargeCalenderSVG />,
      title: "Availability",
      content: "Immediately",
    },
    {
      Svg: <LargeClockSVG />,
      title: "Hours to commit",
      content: "40h / week",
    },
    {
      Svg: <LargeLocationSVG />,
      title: "Location",
      content: "Sydney AU, GMT+11",
    },
    {
      Svg: <LargeHoursSVG />,
      title: "Working hours",
      content: "8:30 AM - 4:30 PM",
    },
    { Svg: <LargeBarSVG />, title: "Overlap", content: "7 hours" },
  ];

  return (
    <Table>
      {windowWidth > 1460 ? (
        <>
          <ProfileTableColumn>
            {cardsData.slice(0, 3).map((card) => (
              <ProfileCard {...card} />
            ))}
          </ProfileTableColumn>
          <ProfileTableColumn>
            {cardsData.slice(3).map((card) => (
              <ProfileCard {...card} />
            ))}
          </ProfileTableColumn>
        </>
      ) : (
        <ProfileTableColumn>
          {cardsData.map((card) => (
            <ProfileCard {...card} />
          ))}
        </ProfileTableColumn>
      )}
    </Table>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const CardLabel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

const CardLogo = styled.div`
  color: #4d5761;
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #384250;
`;

const CardContent = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #1f2a37;
`;

interface ProfileCardProps {
  Svg: ReactElement;
  title: string;
  content: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ Svg, title, content }) => {
  return (
    <Card>
      <CardLabel>
        <CardLogo>{Svg}</CardLogo>
        <CardTitle>{title}</CardTitle>
      </CardLabel>
      <CardContent>{content}</CardContent>
    </Card>
  );
};
