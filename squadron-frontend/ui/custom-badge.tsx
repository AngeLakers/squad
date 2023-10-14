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
  radius: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  color: ${(props) => props.textColor};
  border-radius: ${(props) => props.radius};
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
    radius: "16px",
    icon: null,
  },
  yellow: {
    backgroundColor: "#FFFAEB",
    textColor: "#B54708",
    borderColor: "none",
    radius: "16px",
    icon: null,
  },
  red: {
    backgroundColor: "#FFF4ED",
    textColor: "#B93815",
    borderColor: "none",
    radius: "16px",
    icon: null,
  },
  blue: {
    backgroundColor: "#F0F9FF",
    textColor: "#026AA2",
    borderColor: "none",
    radius: "16px",
    icon: null,
  },
  grey: {
    backgroundColor: "#F3F4F6",
    textColor: "#384250",
    borderColor: "none",
    radius: "16px",
    icon: null,
  },
  black: {
    backgroundColor: "#111927",
    textColor: "#ffffff",
    borderColor: "none",
    radius: "16px",
    icon: null,
  },
  outlined_grey: {
    backgroundColor: "transparent",
    textColor: "#4D5761",
    borderColor: "#4D5761",
    radius: "16px",
    icon: null,
  },
  outlined_green: {
    backgroundColor: "transparent",
    textColor: "#027A48",
    borderColor: "#027A48",
    radius: "16px",
    icon: null,
  },
  outlined_light_green: {
    backgroundColor: "transparent",
    textColor: "#039855",
    borderColor: "#039855",
    radius: "16px",
    icon: null,
  },
  live: {
    backgroundColor: "#ECFDF3",
    textColor: "#027A48",
    borderColor: "none",
    radius: "16px",
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
  role: {
    backgroundColor: "#E0F2FE",
    textColor: "#026AA2",
    borderColor: "none",
    radius: "4px",
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 10C2.66789 8.76129 4.25351 8 6 8C7.74649 8 9.33211 8.76129 10.5 10M8.25 3.75C8.25 4.99264 7.24264 6 6 6C4.75736 6 3.75 4.99264 3.75 3.75C3.75 2.50736 4.75736 1.5 6 1.5C7.24264 1.5 8.25 2.50736 8.25 3.75Z"
          stroke="#0BA5EC"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
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
  | "live"
  | "role";
export interface CustomBadgeProps {
  label: string;
  icon?: React.ReactNode;
  preset?: PresetTypes;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  radius?: string;
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
  radius,
}) => {
  const finalBackgroundColor = preset
    ? presets[preset].backgroundColor
    : backgroundColor;
  const finalTextColor = preset ? presets[preset].textColor : textColor;
  const finalBorderColor = preset ? presets[preset].borderColor : borderColor;
  const finalRadius =
    radius || (preset && presets[preset] ? presets[preset].radius : "16px");
  const finalIcon =
    icon || (preset && presets[preset] ? presets[preset].icon : null);
  return (
    <Badge
      backgroundColor={finalBackgroundColor}
      textColor={finalTextColor}
      borderColor={finalBorderColor}
      radius={finalRadius}
      size={size}
      hasIcon={Boolean(icon)}
    >
      {finalIcon && <BadgeIcon>{finalIcon}</BadgeIcon>}
      {label}
    </Badge>
  );
};

export default CustomBadge;
