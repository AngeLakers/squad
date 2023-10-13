import React from "react";
import styled from "styled-components";
import CustomBadge from "./custom-badge";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  gap: 8px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  border-radius: 50%;
  height: 56px;
  width: 56px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Role = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #4d5761;
`;

export interface TalentCardProps {
  title: string;
  icon: React.ReactNode;
  name: string;
}

const TalentCard: React.FC<TalentCardProps> = ({ title, icon, name }) => {
  return (
    <Card>
      <Icon>{icon}</Icon>
      <Info>
        <Title>
          <Role>{title}</Role>
          <CustomBadge preset="live" label="Live" />
        </Title>
        <Name>{name}</Name>
      </Info>
    </Card>
  );
};

export default TalentCard;
