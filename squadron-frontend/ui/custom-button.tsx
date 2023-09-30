import React from "react";
import styled from "styled-components";

type CustomButtonStyledProps = {
  backgroundColor: string;
  hoverColor?: string;
  textColor: string;
  borderColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  gap?: string;
  padding?: string;
};

const CustomButtonStyled = styled.button<CustomButtonStyledProps>`
  color: ${({ textColor }) => textColor};
  border-radius: 8px;
  border: 1px solid ${({ borderColor = "#ffffff" }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding = "10px 16px 10px 16px" }) => padding};
  font-weight: 600;
  font-size: ${({ fontSize = "14px" }) => fontSize};
  line-height: ${({ lineHeight = "20px" }) => lineHeight};
  transition: background-color 0.3s ease;
  gap: ${({ gap = "8px" }) => gap};
  &:hover {
    background-color: ${({ hoverColor, backgroundColor }) =>
      hoverColor || backgroundColor};
  }
`;

const presets = {
  default: {
    backgroundColor: "#4B48EC",
    hoverColor: "#8F8DF3",
    textColor: "#ffffff",
    borderColor: "#ffffff",
  },
  outlined: {
    backgroundColor: "#ffffff",
    hoverColor: "#ffffff",
    textColor: "#384250",
    borderColor: "#d2d6db",
  },
  black: {
    backgroundColor: "#111927",
    hoverColor: "#111927",
    textColor: "#FFFFFF",
    borderColor: "#111927",
    fontSize: "16px",
    lineHeight: "24px",
  },
  text: {
    backgroundColor: "transparent",
    hoverColor: "transparent",
    textColor: "#4D5761",
    borderColor: "none",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
  },
};

export interface CustomButtonProps {
  label: React.ReactNode;
  preset?: "default" | "outlined" | "black" | "text";
  backgroundColor?: string;
  hoverColor?: string;
  textColor?: string;
  borderColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  padding?: string;
  gap?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  preset = "default",
  ...overriddenStyles
}) => {
  const defaultStyles = presets[preset];
  const styles = { ...defaultStyles, ...overriddenStyles };

  return <CustomButtonStyled {...styles}>{label}</CustomButtonStyled>;
};

export default CustomButton;
