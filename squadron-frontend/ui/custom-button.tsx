import React from "react";
import styled from "styled-components";

const CustomButtonStyled = styled.button<{
  backgroundColor: string;
  activeColor?: string;
  hoverColor?: string;
  textColor: string;
  boarderColor?: string;
}>`
  color: ${(props) => props.textColor};
  border-radius: 8px;
  border: 1px solid ${(props) => props.boarderColor || "#ffffff"};
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 16px 10px 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverColor || props.backgroundColor};
  }
`;

export interface CustomButtonProps {
  label: React.ReactNode;
  preset?: "default" | "outlined";
  backgroundColor?: string;
  hoverColor?: string;
  textColor?: string;
  boarderColor?: string;
  onClick?: () => void;
}

const presets = {
  default: {
    backgroundColor: "#4B48EC",
    hoverColor: "#8F8DF3",
    textColor: "#ffffff",
    boarderColor: "#ffffff",
  },
  outlined: {
    backgroundColor: "#ffffff",
    hoverColor: "#ffffff",
    textColor: "#384250",
    boarderColor: "#d2d6db",
  },
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  preset,
  backgroundColor,
  hoverColor,
  textColor,
  boarderColor,
  onClick,
}) => {
  let styles = presets[preset || "default"];

  if (backgroundColor || hoverColor || textColor || boarderColor) {
    styles = {
      backgroundColor: backgroundColor || "",
      hoverColor: hoverColor || "",
      textColor: textColor || "",
      boarderColor: boarderColor || "",
    };
  }

  return (
    <CustomButtonStyled
      backgroundColor={styles.backgroundColor}
      hoverColor={styles.hoverColor}
      textColor={styles.textColor}
      boarderColor={styles.boarderColor}
      onClick={onClick}
    >
      {label}
    </CustomButtonStyled>
  );
};

export default CustomButton;
