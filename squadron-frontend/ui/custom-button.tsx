import React from "react";
import styled from "styled-components";

type CustomButtonStyledProps = {
  backgroundColor?: string;
  hoverColor?: string;
  textColor?: string;
  borderColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  gap?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  alignSelf?: string;
};

const CustomButtonStyled = styled.button<CustomButtonStyledProps>`
  ${(props) => props.alignSelf && `align-self: ${props.alignSelf};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
  ${(props) =>
    props.hoverColor && `&:hover {background-color:${props.hoverColor};}`}
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ width = "auto" }) => width};
  height: ${({ height = "auto" }) => height};
  color: ${({ textColor = "#000000" }) => textColor};
  border-radius: 8px;
  border: 1px solid ${({ borderColor = "#ffffff" }) => borderColor};
  background-color: ${({ backgroundColor = "transparent" }) => backgroundColor};
  padding: ${({ padding = "10px 16px 10px 16px" }) => padding};
  font-weight: 600;
  font-size: ${({ fontSize = "14px" }) => fontSize};
  line-height: ${({ lineHeight = "20px" }) => lineHeight};
  transition: background-color 0.3s ease;
  align-items: center;
  gap: ${({ gap = "8px" }) => gap};
`;

const presets = {
  default: {
    backgroundColor: "#4B48EC",
    hoverColor: "#8F8DF3",
    textColor: "#ffffff",
    borderColor: "none",
  },
  outlined: {
    backgroundColor: "#ffffff",
    hoverColor: "#ffffff",
    textColor: "#384250",
    borderColor: "#d2d6db",
  },
  transparent: {
    backgroundColor: "#ffffff",
    hoverColor: "#ffffff",
    textColor: "#D2D6DB",
    borderColor: "#E5E7EB",
  },
  black: {
    backgroundColor: "#111927",
    hoverColor: "#111927",
    textColor: "#FFFFFF",
    borderColor: "none",
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
  arrow: {
    borderColor: "#6C737F",
    backgroundColor: "#1F2A37",
    width: "50px",
    height: "50px",
  },
  avatar: {
    padding: "0px",
    backgroundColor: "transparent",
    borderColor: "none",
  },
};

export type PresetTypes =
  | "default"
  | "outlined"
  | "black"
  | "text"
  | "arrow"
  | "avatar";
export interface CustomButtonProps {
  label: React.ReactNode;
  preset?: PresetTypes;
  onClick?: () => void;
  backgroundColor?: string;
  hoverColor?: string;
  textColor?: string;
  borderColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
  gap?: string;
  width?: string;
  height?: string;
  alignSelf?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  preset,
  ...overriddenStyles
}) => {
  //console.log("Preset:", preset);
  const defaultStyles = preset ? presets[preset] : null;
  const styles = { ...defaultStyles, ...overriddenStyles };
  //console.log("styles:", styles);
  return <CustomButtonStyled {...styles}>{label}</CustomButtonStyled>;
};

export default CustomButton;
