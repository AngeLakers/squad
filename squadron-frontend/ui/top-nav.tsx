
import React from "react";
import styled from "styled-components";
import {
  FlashSVG,
  HelpSVG,
  LogoutSVG,
  MenuChatSVG,
  MenuRingSVG,
  MenuStarSVG,
  ProfileSVG,
  SearchSVG,
  SettingSVG,
} from "./svgs";
import Link from "next/link";

import DropdownButton from "./dropdown-button";
import {Popover} from "@mui/material";
import NotificationBox from "@/ui/notification-message";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  padding: 16px 32px 16px 32px;
`;

const SearchBar = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
  padding: 10px 0px 10px 0px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #d2d6db;
  border-radius: 8px;
  width: 40%;
  align-items: center;
  gap: 8px;
  padding-left: 14px;
  min-width: fit-content;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
`;

const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  min-height: 40px;
  min-width: 40px;
`;

export const TopNav: React.FC<{ onChatButtonClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void }> = ({ onChatButtonClick }) => {
  const handleChatClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    onChatButtonClick(event);
  };
  return (
    <Nav>
      <SearchContainer>
        <SearchSVG />
        <SearchBar placeholder="Search jobs" />
      </SearchContainer>
      <MenuContainer>
        <Link href={"#"} onClick={handleChatClick} id="chatLink">
          <MenuChatSVG />
        </Link>
        <Link href={"#"}>
          <MenuStarSVG />
        </Link>
        <Link href={"#"}>
          <MenuRingSVG />
        </Link>
        <DropdownButton
          menuWidth="240px"
          label={<AvatarImage alt="portrait" src="/portraitA.png" />}
          preset="avatar"
          menuItems={mockMenuItems}
        />
      </MenuContainer>
    </Nav>
  );
};
const mockMenuItems = [
  [
    { menu: "View profile", link: "/profile", icon: <ProfileSVG /> },
    { menu: "My Work ", link: "/work", icon: <FlashSVG /> },
  ],
  [
    { menu: "Setting ", link: "/setting", icon: <SettingSVG /> },
    { menu: "Help ", link: "/help", icon: <HelpSVG /> },
  ],
  [{ menu: "Logout ", link: "/logout", icon: <LogoutSVG /> }],
];
