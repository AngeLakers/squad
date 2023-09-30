import React from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";
import { ArrowLeftSVG, ArrowRightSVG } from "./svgs";
import Link from "next/link";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 160px 16px 160px;
  height: 80px;
  background-color: #111927;
  color: #ffffff;
  flex: 1;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const NavInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavInfoPage = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

const NavInfoTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #d2d6db;
`;

const NavCloseLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

interface SquadNavProps {
  Top: boolean;
  squadName: string;
  talentInfo: string;
}

const SquadNav: React.FC<SquadNavProps> = ({ Top, squadName, talentInfo }) => {
  return (
    <Nav>
      <NavContainer>
        <Link href={""}>
          <CustomButton label={<ArrowLeftSVG />} preset="arrow" />
        </Link>
        <Link href={""}>
          <CustomButton label={<ArrowRightSVG />} preset="arrow" />
        </Link>
        {Top ? (
          <NavInfoContainer>
            <NavInfoPage>{talentInfo}</NavInfoPage>
            <NavInfoTitle>{squadName}</NavInfoTitle>
          </NavInfoContainer>
        ) : (
          <NavInfoContainer>
            <NavInfoPage>{squadName}</NavInfoPage>
          </NavInfoContainer>
        )}
      </NavContainer>
      {Top && <NavCloseLink href="/">Close</NavCloseLink>}
    </Nav>
  );
};

export default SquadNav;
