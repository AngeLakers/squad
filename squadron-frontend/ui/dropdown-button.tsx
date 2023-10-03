'use client';
import React, { useState, useRef } from "react";
import styled from "styled-components";
import CustomButton, { CustomButtonProps } from "./custom-button";
import Link from "next/link";

const DropdownMenu = styled.div<{
  menuWidth?: string;
}>`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  top: 100%;
  right: 0;
  z-index: 1;
  width: ${({ menuWidth = "max-content" }) => menuWidth};
  margin-top: 5px;
  opacity: 0;
  transform: translateY(-10px);
  visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s 0.15s;
  &.openDropdown {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    transition-delay: 0s;
  }
`;

const DropdownButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MenuItem = styled.div`
  padding: 10px;
  &:hover {
    background-color: #f9fafb;
  }
  margin: 2px 6px 2px 6px;
  border-radius: 6px;
`;

const Menu = styled.div`
  border-bottom: 1px solid #e5e7eb;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

interface MenuItem {
  icon?: React.ReactNode;
  menu: React.ReactNode;
  link?: string;
}

interface DropdownButtonProps extends CustomButtonProps {
  menuWidth?: string;
  menuItems: MenuItem[][];
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  menuWidth,
  menuItems,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const startHover = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(true);
  };

  const endHover = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 150) as any;
  };
  return (
    <DropdownButtonContainer onMouseEnter={startHover} onMouseLeave={endHover}>
      <CustomButton {...props} />
      <DropdownMenu
        menuWidth={menuWidth}
        className={isHovered ? "openDropdown" : ""}
      >
        {menuItems.map((group, groupIndex) => (
          <Menu key={groupIndex}>
            {group.map((item, index) => (
              <MenuItem key={index}>
                {item.link ? (
                  <Link href={item.link}>
                    <Title>
                      {item.icon}
                      {item.menu}
                    </Title>
                  </Link>
                ) : (
                  item.menu
                )}
              </MenuItem>
            ))}
          </Menu>
        ))}
      </DropdownMenu>
    </DropdownButtonContainer>
  );
};

export default DropdownButton;
