import React, { ReactElement } from "react";
import styled from "styled-components";

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e5e7eb;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 40px 24px 40px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  gap: 24px;
  flex: 1;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

type TitleProps = {
  title: string;
};

type TitleComponentProps = {
  titleComponent: ReactElement;
};

type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

interface CommonProps {
  content: ReactElement;
}

type TalentCardProps = XOR<TitleProps, TitleComponentProps> & CommonProps;

const CardLayout: React.FC<TalentCardProps> = ({
  title,
  titleComponent,
  content,
}) => {
  return (
    <Card>
      <CardHeader>
        {title ? <CardTitle>{title}</CardTitle> : titleComponent}
        <Divider />
      </CardHeader>
      {content}
    </Card>
  );
};

export default CardLayout;
