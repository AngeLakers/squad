import React from "react";
import styled from "styled-components";
import DropdownButton from "./dropdown-button";
import {VerticalDotsSVG} from "./svgs";
import AddRole from "./add-role";
import { useState } from "react";

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e5e7eb;
  margin: 16px 0;
`;

const Logo = styled.img`
  height: 89px;
  width: 89px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 40px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  width:100%;
  margin-bottom: 24px;
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  margin-left: 16px;
  flex-grow: 1;
`;

const NormalText = styled.span`
  color: #475467;
  font-size:14px;
`;

const BlueText = styled.span`
  color: #4B48EC;
  font-size:14px;
`;

const ButtonText = styled.span`
  color: #384250;
  margin-left: 8px;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 16px;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const CombinedText = styled.div`
  display: flex;
  margin-top:16px;
`;

interface EmptyRoleCardProps {
  title: string;
  logoSrc?: string;
}

const EmptyRoleCard: React.FC<EmptyRoleCardProps> = ({ title, logoSrc = "/icon/projectLogo.svg" }) => {
    const [isRoleAdd, setAddRoleOpen] = useState(false);
    const handleMenuItemClick = (item: string) => {
        if (item === 'Edit Role') {
            setAddRoleOpen(true); 
        }
      };
  return (
    <>
      {isRoleAdd && (
        <AddRole
            title={title} 
            onClose={() => setAddRoleOpen(false)}/>
      )}
    <Info>
      <InfoHeader>
        <Logo src={logoSrc} alt="Project" />
        <Title>{title}</Title>
        <DropdownButton label={<VerticalDotsSVG />}
              preset="outlined" menuItems={[<div onClick={() => handleMenuItemClick('Edit Role')}>Edit Role</div>,
              <div onClick={() => handleMenuItemClick('Delete Role')}>Delete Role</div>,]} />
      </InfoHeader>
      <CombinedText>
        <NormalText>You haven’t added any details to this role yet.&nbsp;</NormalText>
        <BlueText>Complete this role.</BlueText>
      </CombinedText>
      <Divider />
      <ButtonsRow>
      <Button>
          <Icon key="coinsIcon" src="/icon/coins.svg" alt="Coins Icon" />
          <ButtonText>--$ /h</ButtonText>
        </Button>
        <Button>
          <Icon key="clockIcon" src="/icon/clock.svg" alt="Clock Icon" />
          <ButtonText>--h /week</ButtonText>
        </Button>
        <Button>
          <Icon key="locationIcon" src="/icon/locationPin.svg" alt="Location Icon" />
          <ButtonText>--</ButtonText>
        </Button>
        <Button>
          <Icon key="calendarIcon" src="/icon/calendar.svg" alt="Calendar Icon" />
          <ButtonText>--</ButtonText>
        </Button>
    </ButtonsRow>
    </Info>
    </>
  );
};

export default EmptyRoleCard;

