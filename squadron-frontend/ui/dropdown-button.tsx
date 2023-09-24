import React, { useState, useRef } from "react";
import styled from "styled-components";
import CustomButton, { CustomButtonProps } from "./custom-button";

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px 15px;
  top: 100%;
  right: 0;
  z-index: 1;
  width: max-content;
  margin-top: 10px;
  gap: 10px;
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

const DropdownButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

interface DropdownButtonProps extends CustomButtonProps {
  menuItems: React.ReactNode[];
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
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
    <DropdownButtonWrapper onMouseEnter={startHover} onMouseLeave={endHover}>
      <CustomButton {...props} />
      <DropdownMenu className={isHovered ? "openDropdown" : ""}>
        {menuItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </DropdownMenu>
    </DropdownButtonWrapper>
  );
};

export default DropdownButton;
