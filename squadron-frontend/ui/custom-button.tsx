import React from "react";
import styled from "styled-components";

const CustomButtonStyled = styled.button<{
  backgroundColor: string;
  hoverColor?: string;
  textColor: string;
  borderColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
}>`
  color: ${(props) => props.textColor};
  border-radius: 8px;
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 16px 10px 16px;
  font-weight: 600;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverColor || props.backgroundColor};
  }
`;

CustomButtonStyled.defaultProps = {
  borderColor: "#ffffff",
  fontSize: "14px",
  lineHeight: "20px",
};

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
    fontSize: "16px",
    lineHeight: "24px",
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
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  preset,
  backgroundColor,
  hoverColor,
  textColor,
  borderColor,
  fontSize,
  lineHeight,
  fontWeight,
}) => {
  let styles = presets[preset || "default"] as {
    backgroundColor: string;
    hoverColor?: string;
    textColor: string;
    borderColor?: string;
    fontSize?: string;
    lineHeight?: string;
    fontWeight?: string;
  };

  if (backgroundColor) {
    styles.backgroundColor = backgroundColor || "";
  }

  if (hoverColor) {
    styles.hoverColor = hoverColor || "";
  }

  if (textColor) {
    styles.textColor = textColor || "";
  }

  if (borderColor) {
    styles.borderColor = borderColor || "";
  }

  if (fontSize) {
    styles.fontSize = fontSize || "";
  }
  if (lineHeight) {
    styles.lineHeight = lineHeight || "";
  }
  if (fontWeight) {
    styles.fontWeight = fontWeight || "";
  }

  return (
    <CustomButtonStyled
      backgroundColor={styles.backgroundColor}
      hoverColor={styles.hoverColor}
      textColor={styles.textColor}
      borderColor={styles.borderColor}
      fontSize={styles.fontSize}
      lineHeight={styles.lineHeight}
      fontWeight={styles.fontWeight}
    >
      {label}
    </CustomButtonStyled>
  );
};

export default CustomButton;
