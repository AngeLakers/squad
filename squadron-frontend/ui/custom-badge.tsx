import React from "react";
import styled from "styled-components";
import { TickSVG } from "./svgs";

const CustomBadgeStyled = styled.div<{
  backgroundColor: string;
  textColor: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  color: ${(props) => props.textColor};
  border-radius: 16px;
  background-color: ${(props) => props.backgroundColor};
  padding: 2px 10px 2px 8px;
  gap: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

export interface CustomButtonProps {
  label: string;
  icon?: React.ReactNode;
  preset?: "green" | "red";
  backgroundColor?: string;
  textColor?: string;
}

const presets = {
  green: {
    backgroundColor: "#ECFDF3",
    textColor: "#027A48",
    icon: <TickSVG />,
  },
  red: {
    backgroundColor: "#FFF4ED",
    textColor: "#B93815",
    icon: <TickSVG />,
  },
};

const CustomBadge: React.FC<CustomButtonProps> = ({
  label,
  icon,
  preset,
  backgroundColor,
  textColor,
}) => {
  // Set defaults from preset if preset is provided
  let finalBackgroundColor;
  let finalTextColor;
  let finalIcon;

  if (preset) {
    finalBackgroundColor = presets[preset].backgroundColor;
    finalTextColor = presets[preset].textColor;
    finalIcon = presets[preset].icon;
  } else {
    finalBackgroundColor = backgroundColor || "#ffffff";
    finalTextColor = textColor || "#000000";
    finalIcon = icon;
  }

  return (
    <CustomBadgeStyled
      backgroundColor={finalBackgroundColor}
      textColor={finalTextColor}
    >
      {finalIcon}
      {label}
    </CustomBadgeStyled>
  );
};

export default CustomBadge;
