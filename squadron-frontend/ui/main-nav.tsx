"use client";
import Link from "next/link";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import {
  Divider,
  IconButton,
  ListItemIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import SquadCustom from "@/ui/option-popup";
import { useState } from "react";
import { link } from "fs";
import styled from "styled-components";

const StyledButton = styled(Button)`
  color: black;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  padding-top: 0.75rem;
  padding-right: 2rem;
  padding-bottom: 0.75rem;
  padding-left: 2rem;
`;

const NavRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const LogoContainer = styled.div`
  padding-left: 1rem;
  padding-right: 5rem;
`;

const LogoImage = styled.img`
  width: auto;
  height: 7rem;
`;

const NavButton = styled(StyledButton)`
  padding: 0 5rem;
`;

export function MainNav() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Nav>
      <NavRow>
        <div className="pl-1 pr-5">
          <Link href="/application">
            <img
              className="w-auto h-7"
              src="https://uploads-ssl.webflow.com/64549cd879ac7b0ebb505519/647326278341277e7271ca40_Squadron%20Horizontal%20Lock%20Up%20Black%202.svg"
              alt="Squadron logo"
            />
          </Link>
        </div>
        <div className="px-5">
          <StyledButton href="/sidebar" variant="text">
            Home
          </StyledButton>
        </div>
        <div className="px-5">
          <StyledButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Products
            <svg
              width="25"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#4D5761"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </StyledButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Product 1</MenuItem>
            <MenuItem onClick={handleClose}>Product 2</MenuItem>
            <MenuItem onClick={handleClose}>Product 3</MenuItem>
          </Menu>
        </div>
        <div className="px-5">
          <StyledButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Resources
            <svg
              width="25"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#4D5761"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </StyledButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Resource 1</MenuItem>
            <MenuItem onClick={handleClose}>Resource 2</MenuItem>
            <MenuItem onClick={handleClose}>Resource 3</MenuItem>
          </Menu>
        </div>
        <div className="px-5">
          <StyledButton href="/sidebar" variant="text">
            Pricing
          </StyledButton>
        </div>
      </NavRow>
      <div className="flex flex-row">
        <div className="px-3">
          <Button className="text-black" href="/sidebar" variant="text">
            Log in
          </Button>
        </div>
        <div className="px-3">
          <Button
            className="bg-black text-white"
            variant="text"
            onClick={() => setModalOpen(true)}
          >
            Sign up
          </Button>
          {isModalOpen && (
            <SquadCustom
              closeModal={() => setModalOpen(false)}
              title={"Select your role"}
              description={"test"}
              options={["I'm a Talent", "I'm a Client"]}
              link={"/signup"}
            />
          )}
        </div>
      </div>
    </Nav>
  );
}
