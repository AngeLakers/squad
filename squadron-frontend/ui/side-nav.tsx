import Link from "next/link";
import styled from "styled-components";
import {
  HomeSVG,
  ProjectsSVG,
  WalletSVG,
  SustainabilitySVG,
  ResourcesSVG,
  PerksSVG,
} from "./svgs";

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 312px;
  border-right: 1px solid #e5e7eb;
  padding-top: 32px;
  gap: 24px;
  height: 100%;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0px 16px 0px 16px;
`;

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px 8px 12px;
  gap: 12px;

  &.current {
    background-color: #f9fafb;
  }

  &:hover {
    background-color: #f9fafb;

    .nav-item-icon path,
    .nav-item-text {
      stroke: #000000 !important;
      color: #101828 !important;
    }
  }
`;

const NavItemText = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #384250;

  &.current-text {
    color: #101828 !important;
  }
`;

const NavItemIcon = styled.div`
  width: 23px;
  &.current-icon path {
    stroke: #000000 !important;
  }
`;

const LogoContainer = styled.div`
  padding: 0px 20px 0px 24px;
`;

const Logo = styled.img`
  width: 142px;
  height: 32px;
`;

type SideNavProps = {
  current?: string;
};

export function SideNav({ current }: SideNavProps) {
  return (
    <Aside>
      <LogoContainer>
        <Link href="/application" passHref>
          <Logo
            src="https://uploads-ssl.webflow.com/64549cd879ac7b0ebb505519/647326278341277e7271ca40_Squadron%20Horizontal%20Lock%20Up%20Black%202.svg"
            alt="Squadron logo"
          />
        </Link>
      </LogoContainer>
      <Nav>
        {[
          { href: "#", Icon: HomeSVG, label: "Home" },
          { href: "#", Icon: ProjectsSVG, label: "Projects" },
          { href: "#", Icon: WalletSVG, label: "Wallet" },
          { href: "#", Icon: SustainabilitySVG, label: "Sustainability" },
          { href: "#", Icon: ResourcesSVG, label: "Resources" },
          { href: "#", Icon: PerksSVG, label: "Perks" },
        ].map(({ href, Icon, label }) => (
          <Link key={label} href={href} passHref>
            <NavItemContainer className={label === current ? "current" : ""}>
              <NavItemIcon
                className={`nav-item-icon ${
                  label === current ? "current-icon" : ""
                }`}
              >
                <Icon />
              </NavItemIcon>
              <NavItemText
                className={`nav-item-text ${
                  label === current ? "current-text" : ""
                }`}
              >
                {label}
              </NavItemText>
            </NavItemContainer>
          </Link>
        ))}
      </Nav>
    </Aside>
  );
}
