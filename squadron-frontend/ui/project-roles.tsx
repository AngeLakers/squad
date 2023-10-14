import React from "react";
import styled from "styled-components";
import CustomBadge from "./custom-badge";

const Roles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const RoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface RoleTitleProps {
  fontSize: string;
}

const RoleTitle = styled.div<RoleTitleProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const Rolebadges = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`;

interface ProjectRolesProps {
  RolesData: string[];
  fontSize?: string;
}

const ProjectRoles: React.FC<ProjectRolesProps> = ({
  fontSize = "14px",
  RolesData,
}) => {
  return (
    <Roles>
      <RoleContainer>
        <RoleTitle
          fontSize={fontSize}
        >{`Open roles (${RolesData.length})`}</RoleTitle>
        <Rolebadges>
          {RolesData.map((role) => (
            <CustomBadge key={role} label={role} preset="role" />
          ))}
        </Rolebadges>
      </RoleContainer>
    </Roles>
  );
};

export default ProjectRoles;
