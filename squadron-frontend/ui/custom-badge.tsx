import React from "react";
import styled from "styled-components";

const sizeStyles = {
  small: {
    padding: "2px 10px 2px 10px",
    gap: "5px",
  },
  large: {
    padding: "4px 12px 4px 12px",
    gap: "6px",
  },
};

const Badge = styled.div<{
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  size: "small" | "large";
  hasIcon: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  color: ${(props) => props.textColor};
  border-radius: 16px;
  background-color: ${(props) => props.backgroundColor};
  border: 1.5px solid ${(props) => props.borderColor};
  padding: ${(props) => {
    const originalPadding = sizeStyles[props.size].padding;
    if (props.hasIcon) {
      const [top, right, bottom, left] = originalPadding.split(" ");
      const halfLeft = parseFloat(left) - 2 + "px";
      return `${top} ${right} ${bottom} ${halfLeft}`;
    }
    return originalPadding;
  }};
  gap: ${(props) => sizeStyles[props.size].gap};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
`;

const BadgeIcon = styled.div`
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  overflow: hidden;
`;

const presets = {
  green: {
    backgroundColor: "#ECFDF3",
    textColor: "#027A48",
    borderColor: "none",
  },
  red: {
    backgroundColor: "#FFF4ED",
    textColor: "#B93815",
    borderColor: "none",
  },
  outlined_grey: {
    backgroundColor: "transparent",
    textColor: "#4D5761",
    borderColor: "#4D5761",
  },
  outlined_green: {
    backgroundColor: "transparent",
    textColor: "#027A48",
    borderColor: "#027A48",
  },
  outlined_light_green: {
    backgroundColor: "transparent",
    textColor: "#039855",
    borderColor: "#039855",
  },
};

export type PresetTypes =
  | "green"
  | "red"
  | "outlined_grey"
  | "outlined_green"
  | "outlined_light_green";
export interface CustomButtonProps {
  label: string;
  icon?: React.ReactNode;
  preset?: PresetTypes;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  size?: "small" | "large";
}

const CustomBadge: React.FC<CustomButtonProps> = ({
  label,
  icon = null,
  preset,
  backgroundColor = "#ffffff",
  textColor = "#000000",
  borderColor = "transparent",
  size = "small",
}) => {
  const finalBackgroundColor = preset
    ? presets[preset].backgroundColor
    : backgroundColor;
  const finalTextColor = preset ? presets[preset].textColor : textColor;
  const finalBorderColor = preset ? presets[preset].borderColor : borderColor;

  return (
    <Badge
      backgroundColor={finalBackgroundColor}
      textColor={finalTextColor}
      borderColor={finalBorderColor}
      size={size}
      hasIcon={Boolean(icon)}
    >
      {icon && <BadgeIcon>{icon}</BadgeIcon>}
      {label}
    </Badge>
  );
};

export default CustomBadge;
