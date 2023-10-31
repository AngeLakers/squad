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
import Link from "next/link";

export interface Languages {
  [key: string]: string;
}

export interface SocialLinks {
  linkedin: string;
  email: string;
  twitter: string;
}

export interface ProfileDataType {
  rate: string;
  availability: string;
  hoursToCommit: string;
  location: string;
  workingHours: string;
  overlap: string;
  experience: string;
  languages: Languages;
  socialLinks: SocialLinks;
}

export interface ProfileData {
  id: string;
  content: string;
}

const getSvgAndTitleById = (
  id: string
): { Svg: ReactElement; title: string } => {
  switch (id) {
    case "rate":
      return { Svg: <LargeRateSVG />, title: "Hourly Rate" };
    case "availability":
      return { Svg: <LargeCalenderSVG />, title: "Availability" };
    case "hoursToCommit":
      return { Svg: <LargeClockSVG />, title: "Hours to commit" };
    case "location":
      return { Svg: <LargeLocationSVG />, title: "Location" };
    case "workingHours":
      return { Svg: <LargeHoursSVG />, title: "Working hours" };
    case "overlap":
      return { Svg: <LargeBarSVG />, title: "Overlap" };
    default:
      return { Svg: <></>, title: "" };
  }
};

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

interface TalentProfileProps {
  data: ProfileDataType;
}

const TalentProfile: React.FC<TalentProfileProps> = ({ data }) => {
  const tableData: ProfileData[] = Object.entries(data)
    .filter(([key]) =>
      [
        "rate",
        "availability",
        "hoursToCommit",
        "location",
        "workingHours",
        "overlap",
      ].includes(key)
    )
    .map(([key, value]) => ({ id: key, content: value as string }));

  return (
    <Profile>
      <ProfileHeader />
      <ProfileBody>
        <ProfileList data={data} />
        <VerticalDivider />
        <ProfileTable data={tableData} />
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
flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;


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

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;

  img {
    margin-right: 10px;
  }

  span {
    color: #1B18E4; // Assuming this is the color for Primary/700. Adjust as needed.
  }
`;

interface ProfileListProps {
    data: ProfileDataType;
    status?: boolean;
}

export const ProfileList: React.FC<ProfileListProps> = ({data,status  =  false}) => {

    const handleButtonClick = (key: string) => {
        // add pop up on it
        console.log(`Clicked on ${key}`);
    };

    return (
        <List>
            <ProfileListItem>
                <ProfileListItemTitle>Experience
                    {status && (
                        <EditButton onClick={() => handleButtonClick('experience')}>
                            <img src="/profile-icon/edit-01.svg" alt="Icon Description"/>
                            <span>Edit</span>
                        </EditButton>
                    )}</ProfileListItemTitle>

                <ProfileListItemContentValue>
                    {data.experience}
                </ProfileListItemContentValue>
            </ProfileListItem>
            <ProfileListItem>
                <ProfileListItemTitle>Languages

                    {status && (
                        <EditButton onClick={() => handleButtonClick('language')}>
                            <img src="/profile-icon/edit-01.svg" alt="Icon Description"/>
                            <span>Edit</span>
                        </EditButton>
                    )}</ProfileListItemTitle>
                <ProfileListItemContentContainer>
                    {Object.entries(data.languages).map(([key, value]) => (
                        <ProfileListItemContent key={key}>
                            <ProfileListItemContentTitle>{key}:</ProfileListItemContentTitle>
                            <ProfileListItemContentValue>{value}</ProfileListItemContentValue>

                        </ProfileListItemContent>
                    ))}
                </ProfileListItemContentContainer>
            </ProfileListItem>
            <ProfileListItem>
                <ProfileListItemTitle>Social Links
                    {status && (
                        <EditButton onClick={() => handleButtonClick('social link')}>
                            <img src="/profile-icon/edit-01.svg" alt="Icon Description"/>
                            <span>Edit</span>
                        </EditButton>
                    )}</ProfileListItemTitle>
                <SocialMediaContainer>
                    <Link href={data.socialLinks.linkedin}>
                        <LinkedInSVG/>
                    </Link>
                    <Link href={data.socialLinks.email}>
                        <EmailSVG/>
                    </Link>
                    <Link href={data.socialLinks.twitter}>
                        <TwitterSVG/>
                    </Link>
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

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<number | null>(null);

    useEffect(() => {
        setWindowSize(window.innerWidth);

        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
};

interface ProfileTableProps {
    data: ProfileData[];
}

const ProfileTable: React.FC<ProfileTableProps> = ({data}) => {
    const windowWidth = useWindowSize();

    const renderCards = (cards: ProfileData[]) => (
        <ProfileTableColumn>
            {cards.map((card) => (
                <ProfileCard key={card.id} {...card} />
            ))}
        </ProfileTableColumn>
    );

    return (
        <Table>
            {windowWidth !== null && windowWidth > 1460 ? (
                <>
                    {renderCards(data.slice(0, 3))}
                    {renderCards(data.slice(3))}
                </>
            ) : (
                renderCards(data)
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

const ProfileCard: React.FC<ProfileData> = ({id, content}) => {
    const {Svg, title} = getSvgAndTitleById(id);
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
