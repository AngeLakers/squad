import React, {useState} from "react";
import Link from "next/link";
import {EmailSVG, LinkedInSVG, TwitterSVG} from "@/ui/svgs";
import LanguagePopup from "@/ui/language-popup";
import SocialMediaPopup from "@/ui/socialmedia-popup";
import {EditButton, ProfileDataType} from "@/ui/talent-profile-card";
import styled from "styled-components";


const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 1460px) {
    gap: 55px;
  }
`;

export const ProfileListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
`;

export const ProfileListItemTitle = styled.div`
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

export const ProfileListItemContentValue = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #475467;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;


export interface ProfileListProps1 {
    data: ProfileDataType;
    status?: boolean;
}




export const ProfileList1: React.FC<ProfileListProps1> = ({data,status  =  false}) => {
    const [isSocialMediaPopupOpen, setSocialMediaPopupOpen] = useState(false);
    const [isLanguagePopupOpen, setLanguagePopupOpen] = useState(false);
    const handleButtonClick = (key: string) => {
        // add pop up on it
        console.log(`Clicked on ${key}`);

        switch (key) {
            case 'Social link':
                setSocialMediaPopupOpen(true);
                break;
            case 'Language':
                setLanguagePopupOpen(true);
                break;
            default:
                break;
        }
    };

    return (

        <List>
            <ProfileListItem>
                <ProfileListItemTitle>Experience
                    {status && (
                        <EditButton onClick={() => handleButtonClick('Experience')}>
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
                        <EditButton onClick={() => handleButtonClick('Language')}>
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
                        <EditButton onClick={() => handleButtonClick('Social link')}>
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
            {isLanguagePopupOpen && (
                <LanguagePopup onClose={() => setLanguagePopupOpen(false)} />
            )}
            {isSocialMediaPopupOpen && (
                <SocialMediaPopup onClose={() => setSocialMediaPopupOpen(false)} />
            )}
        </List>

    );
};