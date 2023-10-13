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
  gap: ${(props) => (props.hasIcon ? sizeStyles[props.size].gap : "0px")};
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
    icon: null,
  },
  yellow: {
    backgroundColor: "#FFFAEB",
    textColor: "#B54708",
    borderColor: "none",
    icon: null,
  },
  red: {
    backgroundColor: "#FFF4ED",
    textColor: "#B93815",
    borderColor: "none",
    icon: null,
  },
  blue: {
    backgroundColor: "#F0F9FF",
    textColor: "#026AA2",
    borderColor: "none",
    icon: null,
  },
  grey: {
    backgroundColor: "#F0F0F0",
    textColor: "#808080",
    borderColor: "none",
    icon: null,
  },
  black: {
    backgroundColor: "#111927",
    textColor: "#ffffff",
    borderColor: "none",
    icon: null,
  },
  outlined_grey: {
    backgroundColor: "transparent",
    textColor: "#4D5761",
    borderColor: "#4D5761",
    icon: null,
  },
  outlined_green: {
    backgroundColor: "transparent",
    textColor: "#027A48",
    borderColor: "#027A48",
    icon: null,
  },
  outlined_light_green: {
    backgroundColor: "transparent",
    textColor: "#039855",
    borderColor: "#039855",
    icon: null,
  },
  live: {
    backgroundColor: "#ECFDF3",
    textColor: "#027A48",
    borderColor: "none",
    icon: (
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4" r="3" fill="#12B76A" />
      </svg>
    ),
  },
};

export type PresetTypes =
  | "green"
  | "yellow"
  | "red"
  | "blue"
  | "grey"
  | "outlined_grey"
  | "outlined_green"
  | "outlined_light_green"
  | "live";
export interface CustomBadgeProps {
  label: string;
  icon?: React.ReactNode;
  preset?: PresetTypes;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  size?: "small" | "large";
}

const CustomBadge: React.FC<CustomBadgeProps> = ({
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
  const finalIcon =
    icon || (preset && presets[preset] ? presets[preset].icon : null);

  return (
    <Badge
      backgroundColor={finalBackgroundColor}
      textColor={finalTextColor}
      borderColor={finalBorderColor}
      size={size}
      hasIcon={Boolean(icon)}
    >
      {finalIcon && <BadgeIcon>{finalIcon}</BadgeIcon>}
      {label}
    </Badge>
  );
};

export default CustomBadge;
