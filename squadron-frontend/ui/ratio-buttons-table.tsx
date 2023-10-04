import React, { useState } from "react";
import styled from "styled-components";
import RoleInfo from "./role-info";
import { RoleInfoProps } from "./role-info";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  tr {
    border-bottom: 1px solid #e5e7eb;
  }

  td {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 24px 16px 0px;
    gap: 24px;
  }
`;

const TableHeader = styled.th`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #4d5761;
  padding: 12px 24px 12px 0px;
`;

const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  appearance: none;

  border-radius: 50%;

  border: 1px solid #d2d6db;

  position: relative;

  &:checked {
    border: 1px solid #3f580f;
    background-color: #f4ffc7;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background: #0b0f00;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

interface RatioButtonsTableProps {
  roles: { label: string; info: RoleInfoProps }[];
  onSelectRole?: (role: string) => void;
}

const RatioButtonsTable: React.FC<RatioButtonsTableProps> = ({ roles, onSelectRole}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    if (onSelectRole) {
      onSelectRole(value);
    }
  };

  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Position</TableHeader>
        </tr>
      </thead>
      <tbody>
        {roles.map((role, rowIndex) => (
          <tr key={rowIndex}>
            <td>
              <RadioInput
                type="radio"
                name="rolesGroup"
                value={role.label}
                checked={selectedValue === role.label}
                onChange={() => handleChange(role.label)}
              />
              <RoleInfo
                title={role.info.title}
                rate={role.info.rate}
                hoursPerWeek={role.info.hoursPerWeek}
                location={role.info.location}
                availability={role.info.availability}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RatioButtonsTable;
