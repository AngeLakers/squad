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

export interface CustomButtonProps {
  label: string;
  icon?: React.ReactNode;
  preset?:
    | "green"
    | "red"
    | "outlined_grey"
    | "outlined_green"
    | "outlined_light_green";
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  size?: "small" | "large";
}

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

const CustomBadge: React.FC<CustomButtonProps> = ({
  label,
  icon,
  preset,
  backgroundColor,
  textColor,
  borderColor,
  size,
}) => {
  let finalBackgroundColor;
  let finalTextColor;
  let finalBorderColor;
  let finalIcon = icon || null;
  let finalSize = size || "small";

  if (preset) {
    finalBackgroundColor = presets[preset].backgroundColor;
    finalTextColor = presets[preset].textColor;
    finalBorderColor = presets[preset].borderColor;
  } else {
    finalBackgroundColor = backgroundColor || "#ffffff";
    finalTextColor = textColor || "#000000";
    finalBorderColor = borderColor || "transparent";
  }

  return (
    <Badge
      backgroundColor={finalBackgroundColor}
      textColor={finalTextColor}
      borderColor={finalBorderColor}
      size={finalSize}
      hasIcon={Boolean(finalIcon)}
    >
      {finalIcon && <BadgeIcon>{finalIcon}</BadgeIcon>}
      {label}
    </Badge>
  );
};

export default CustomBadge;
