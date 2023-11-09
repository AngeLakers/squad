import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";
import DropdownButton from "./dropdown-button";
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  SquadSVG,
  VerticalDotsSVG,
  TickSVG,
  StarBorderSVG,
  StarOutlinedSVG,
  ArrowUpSVG,
  ArrowDownSVG,
  EyeOffSVG,
} from "./svgs";
import CustomBadge, { PresetTypes } from "./custom-badge";
import SquadTable, { PersonData } from "./squad-table";
import ShowMoreText from "./text-showmore";
import { StarBorder } from "@mui/icons-material";
import TalentSkills, { BadgeData } from "./talent-skills";
import RoleInfo from "./role-info";
import ProjectRoles from "./project-roles";
import EditProjPopup from "@/ui/editproj-popup";
import Image from "next/image";
import hideImage from "@/public/hide.png";
import ShareProjectPopup from "./share-about-you-popup";
import HideProjectPopup from "./hide-project-popup";

const mockMenuItems = [
  [{ menu: "View profile" }, { menu: "My Work " }],
  [{ menu: "Setting " }, { menu: "Help " }],
  [{ menu: "Logout " }],
];


const mockTalentMenuItems = [
  [
    { menu: "View profile" },
    { menu: "View original application" },
    { menu: "Change role conditions" },
    { menu: "Delete role" },
  ],
];

const  Card1 = styled.div`
display: flex;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: #ffffff;
  min-width: fit-content;
  margin-left:30px;
  // min-width:200px;
  width:267px;


`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e5e7eb;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const SquadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  gap: 24px;
`;

const SquadHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const SquadSubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #384250;
`;

const SquadTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

const SuqadIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ShowMoreButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: #4d5761;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 24px 16px 24px;
`;


interface SquadCardProps {
  badgeTitles?: string[];
  badgeColor?: PresetTypes;
  badgeIcon?: boolean;
  squadTitle?: string;
  squadSubTitle?: string;
  squadDescription?: string;
  customBadges?: React.ReactNode[];
  buttonsPreset?: ButtonContainerPresets;
  type?: "book" | "view" | "state" | "project";
  data: Array<PersonData> | Array<BadgeData[]> | string[];
  icon?: React.ReactNode;
  button1Link?: string;
  onClick?: () => void;
  hideHeader?: boolean;
  hideTitle?: boolean;
  rate?: string;
  rateColor?: string;
  hoursPerWeek?: string;
  hoursPerWeekColor?: string;
  location?: string;
  locationColor?: string;
  availability?: string;
  availabilityColor?: string;
  experience?: string;
  experienceColor?: string;
  
}

const SquadCard: React.FC<SquadCardProps> = ({
  
  badgeTitles,
  badgeColor,
  badgeIcon = true,
  customBadges,
  squadTitle,
  squadSubTitle,
  squadDescription,
  buttonsPreset = ButtonContainerPresets.DEFAULT,
  icon = <SquadSVG />,
  type,
  data,
  button1Link,
  onClick,
  hideHeader = type === "state" ? true : false,
  hideTitle = type === "state" ? true : false,
  rate,
  hoursPerWeek,
  location,
  availability,
  experience,
  rateColor,
  hoursPerWeekColor,
  locationColor,
  availabilityColor,
  experienceColor,
}) => {
  const [showTalentSkills, setShowTalentSkills] = useState(false);
  

  return 
    <Card1>
    <Card>
      {!hideHeader && (
        <>
          <HeaderContainer>
            <BadgeContainer>
              {badgeTitles && badgeTitles.length > 0
                ? badgeTitles.map((title, index) => (
                    <CustomBadge
                      key={index}
                      preset={
                        type === "project"
                          ? "grey"
                          : index === 0
                          ? badgeColor
                          : "blue"
                      }
                      icon={
                        type === "project" ? null : badgeIcon && index === 0 ? (
                          <TickSVG preset={badgeColor} />
                        ) : null
                      }
                      label={title || ""}
                    />
                  ))
                : null}
            </BadgeContainer>
            {type === "project" ? (
              <ButtonContainerComponent
                preset={ButtonContainerPresets.PROJECT}
              />
            ) : null}
          </HeaderContainer>
          <Divider />
        </>
      )}
      <SquadContainer>
        {!hideTitle && (
          <SquadHeader>
            <Heading>
              <HeadingContainer>
                <SuqadIcon> {icon && icon}</SuqadIcon>
                <TitleContainer>
                  {type === "project" ? (
                    <>
                      <SquadSubTitle>{squadSubTitle}</SquadSubTitle>
                      <SquadTitle>{squadTitle}</SquadTitle>
                    </>
                  ) : (
                    <>
                      <SquadTitle>{squadTitle}</SquadTitle>
                      <SquadSubTitle>{squadSubTitle}</SquadSubTitle>
                    </>
                  )}
                </TitleContainer>
              </HeadingContainer>
              {type !== "project" ? (
                <ButtonContainerComponent
                  preset={buttonsPreset}
                  button1Link={button1Link}
                  onClick={onClick}
                />
              ) : null}
            </Heading>
            {squadDescription && (
              <ShowMoreText
                text={squadDescription}
                showMoreLength={300}
                fontSize={"14px"}
                fontColor={"#4D5761"}
                lineHeight={"20px"}
                fontWeight={400}
              />
            )}
          </SquadHeader>
        )}
        {type === "project" ? (
          <ProjectRoles RolesData={data as string[]} />
        ) : buttonsPreset === ButtonContainerPresets.TALENT ||
          buttonsPreset === ButtonContainerPresets.MESSAGE ||
          buttonsPreset === ButtonContainerPresets.REFER ? (
          <>
            <Divider />
            <RoleInfo
              hideTitle={true}
              rate={rate}
              rateColor={rateColor}
              hoursPerWeek={hoursPerWeek}
              hoursPerWeekColor={hoursPerWeekColor}
              location={location}
              locationColor={locationColor}
              availability={availability}
              availabilityColor={availabilityColor}
              experience={experience}
              experienceColor={experienceColor}
            />
            <Divider />
            {showTalentSkills ? (
              <TalentSkills
                skillsData={data[0] as unknown as BadgeData[]}
                toolsData={data[1] as unknown as BadgeData[]}
                fontSize="14px"
              />
            ) : null}
            <ShowMoreButton
              onClick={() => setShowTalentSkills(!showTalentSkills)}
            >
              {showTalentSkills ? "See Less" : "See More"}
              {showTalentSkills ? <ArrowUpSVG /> : <ArrowDownSVG />}
            </ShowMoreButton>
          </>
        ) : (
          <SquadTable type={type} data={data as Array<PersonData>} />
        )}
      </SquadContainer>
      
    </Card>
    
    
    
    
    
    
     <Card>
      {!hideHeader && (
        <>
          <HeaderContainer>
            <BadgeContainer>
              {badgeTitles && badgeTitles.length > 0
                ? badgeTitles.map((title, index) => (
                    <CustomBadge
                      key={index}
                      preset={
                        type === "project"
                          ? "grey"
                          : index === 0
                          ? badgeColor
                          : "blue"
                      }
                      icon={
                        type === "project" ? null : badgeIcon && index === 0 ? (
                          <TickSVG preset={badgeColor} />
                        ) : null
                      }
                      label={title || ""}
                    />
                  ))
                : null}
            </BadgeContainer>
            {type === "project" ? (
              <ButtonContainerComponent
                preset={ButtonContainerPresets.PROJECT}
              />
            ) : null}
          </HeaderContainer>
          <Divider />
        </>
      )}
      <SquadContainer>
        {!hideTitle && (
          <SquadHeader>
            <Heading>
              <HeadingContainer>
                <SuqadIcon> {icon && icon}</SuqadIcon>
                <TitleContainer>
                  {type === "project" ? (
                    <>
                      <SquadSubTitle>{squadSubTitle}</SquadSubTitle>
                      <SquadTitle>{squadTitle}</SquadTitle>
                    </>
                  ) : (
                    <>
                      <SquadTitle>{squadTitle}</SquadTitle>
                      <SquadSubTitle>{squadSubTitle}</SquadSubTitle>
                    </>
                  )}
                </TitleContainer>
              </HeadingContainer>
              {type !== "project" ? (
                <ButtonContainerComponent
                  preset={buttonsPreset}
                  button1Link={button1Link}
                  onClick={onClick}
                />
              ) : null}
            </Heading>
            {squadDescription && (
              <ShowMoreText
                text={squadDescription}
                showMoreLength={300}
                fontSize={"14px"}
                fontColor={"#4D5761"}
                lineHeight={"20px"}
                fontWeight={400}
              />
            )}
          </SquadHeader>
        )}
        {type === "project" ? (
          <ProjectRoles RolesData={data as string[]} />
        ) : buttonsPreset === ButtonContainerPresets.TALENT ||
          buttonsPreset === ButtonContainerPresets.MESSAGE ||
          buttonsPreset === ButtonContainerPresets.REFER ? (
          <>
            <Divider />
            <RoleInfo
              hideTitle={true}
              rate={rate}
              rateColor={rateColor}
              hoursPerWeek={hoursPerWeek}
              hoursPerWeekColor={hoursPerWeekColor}
              location={location}
              locationColor={locationColor}
              availability={availability}
              availabilityColor={availabilityColor}
              experience={experience}
              experienceColor={experienceColor}
            />
            <Divider />
            {showTalentSkills ? (
              <TalentSkills
                skillsData={data[0] as unknown as BadgeData[]}
                toolsData={data[1] as unknown as BadgeData[]}
                fontSize="14px"
              />
            ) : null}
            <ShowMoreButton
              onClick={() => setShowTalentSkills(!showTalentSkills)}
            >
              {showTalentSkills ? "See Less" : "See More"}
              {showTalentSkills ? <ArrowUpSVG /> : <ArrowDownSVG />}
            </ShowMoreButton>
          </>
        ) : (
          <SquadTable type={type} data={data as Array<PersonData>} />
        )}
      </SquadContainer>
      
    </Card>
    
    
    </Card1>
  );
};

export default SquadCard;

export enum ButtonContainerPresets {
  DEFAULT,
  TALENT,
  MESSAGE,
  REFER,
  EMPTY,
  APP,
  PROJECT,
}
interface IconProps {
  isVisible: boolean;
  color?: string;
  onClick?: () => void; // Optional click handler
}

interface ButtonContainerProps {
  preset: ButtonContainerPresets;
  button1Link?: string;
  onClick?: () => void;
  shareIcon?: IconProps;
  starIcon?: IconProps;
  
}

const ButtonContainerComponent: React.FC<ButtonContainerProps> = ({
  preset,
  button1Link,
  onClick,
  shareIcon,
  starIcon,
  
}) => {
  const [hideSquadPopupOpen, setHideSquadPopupOpen] = useState(false);

  const appMenuItems = [
    [
      {
        menu: (
          <button
            onClick={() => setHideSquadPopupOpen(true)}
          >
            not interested
          </button>
        ),
      },
      { menu: "Send feedback/reject " },
    ],
  ];
  const [isStarFilled, setIsStarFilled] = useState(false);

  const handleStarClick = () => {
      setIsStarFilled(!isStarFilled);
      starIcon?.onClick?.();
  };

  const [showSharePopup, setShowSharePopup] = useState(false);

  const handleShareClick = () => {
    setShowSharePopup(true);
    shareIcon?.onClick?.();
  };  
  
  const [showHidePopup, setShowHidePopup] = useState(false);

  
  const handleHideClick = () => {
    
    setShowHidePopup(true);
  };

  const renderButtons = () => {
    switch (preset) {
      case ButtonContainerPresets.DEFAULT:
        return (
          <>
            <a href={button1Link || "#"}>
              <CustomButton label="Meet Squad" preset="outlined" />
            </a>
            <CustomButton
              label="Hire Squad"
              preset="default"
              onClick={onClick}
            />
            <DropdownButton
              label={<VerticalDotsSVG />}
              preset="outlined"
              menuItems={mockMenuItems}
            />
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.40205 1.8778C8.59412 1.48869 8.69015 1.29413 8.82053 1.23197C8.93396 1.17789 9.06574 1.17789 9.17918 1.23197C9.30955 1.29413 9.40558 1.48869 9.59766 1.8778L11.4199 5.56944C11.4766 5.68432 11.5049 5.74176 11.5464 5.78635C11.5831 5.82584 11.6271 5.85783 11.6759 5.88056C11.7311 5.90623 11.7945 5.91549 11.9213 5.93402L15.9973 6.5298C16.4266 6.59253 16.6412 6.6239 16.7405 6.72874C16.8269 6.81995 16.8675 6.94529 16.8511 7.06985C16.8322 7.21302 16.6768 7.36436 16.3661 7.66702L13.4177 10.5387C13.3258 10.6282 13.2798 10.673 13.2502 10.7263C13.2239 10.7734 13.2071 10.8252 13.2006 10.8788C13.1933 10.9393 13.2041 11.0025 13.2258 11.129L13.9215 15.1851C13.9948 15.6129 14.0315 15.8269 13.9626 15.9538C13.9026 16.0642 13.796 16.1417 13.6724 16.1646C13.5304 16.1909 13.3383 16.0899 12.9541 15.8879L9.31015 13.9716C9.19661 13.9119 9.13985 13.882 9.08004 13.8703C9.02709 13.8599 8.97262 13.8599 8.91966 13.8703C8.85986 13.882 8.80309 13.9119 8.68955 13.9716L5.04561 15.8879C4.66143 16.0899 4.46935 16.1909 4.32731 16.1646C4.20374 16.1417 4.09711 16.0642 4.03712 15.9538C3.96817 15.8269 4.00486 15.6129 4.07823 15.1851L4.77391 11.129C4.7956 11.0025 4.80644 10.9393 4.7991 10.8788C4.79261 10.8252 4.77576 10.7734 4.74951 10.7263C4.71986 10.673 4.6739 10.6282 4.58199 10.5387L1.63364 7.66702C1.32289 7.36436 1.16752 7.21302 1.14861 7.06985C1.13216 6.94529 1.1728 6.81995 1.25921 6.72874C1.35853 6.6239 1.57315 6.59253 2.00237 6.5298L6.07843 5.93402C6.20519 5.91549 6.26857 5.90623 6.32377 5.88056C6.37264 5.85783 6.41664 5.82584 6.45333 5.78635C6.49476 5.74176 6.52311 5.68432 6.57982 5.56944L8.40205 1.8778Z"
                stroke="#384250"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </>
        );

      case ButtonContainerPresets.APP:
        return (
          <>
            <a href={button1Link || "#"}>
              <CustomButton label="Meet Squad" preset="outlined" />
            </a>
            <CustomButton
              label="Hire Squad"
              preset="default"
              onClick={onClick}
            />
            <DropdownButton
              label={<VerticalDotsSVG />}
              preset="outlined"
              menuItems={appMenuItems}
            />
          </>
        );
      case ButtonContainerPresets.TALENT:
        return (
          <>
            <CustomButton
              label={<StarOutlinedSVG />}
              preset="outlined"
              padding="10px"
            />
            <CustomButton label="View application" preset="outlined" />
            <CustomButton label="Interview" preset="outlined" />
            <CustomButton label="Make offer" preset="black" onClick={onClick}/>
            <DropdownButton
              label={<VerticalDotsSVG />}
              preset="outlined"
              menuItems={mockTalentMenuItems}
            />
          </>
        );
      case ButtonContainerPresets.MESSAGE:
        return (
          <>
            <CustomButton label="Message" preset="outlined" />
            <DropdownButton
              label={<VerticalDotsSVG />}
              preset="outlined"
              menuItems={mockTalentMenuItems}
            />
          </>
        );
      case ButtonContainerPresets.REFER:
        return (
          <>
            <CustomButton label="Refer" preset="outlined" />
          </>
        );
      case ButtonContainerPresets.PROJECT:
        return (
          <>
            <ShareIcon style={{color:"black"}} onClick={handleShareClick} />
            
            <div onClick={handleStarClick}>
                {isStarFilled ? 
                    <StarIcon style={{ color: "#384250" }} /> : 
                    <StarBorderIcon style={{ color: "#384250" }} />
                }
            </div>
            <CustomButton 
                label={<EyeOffSVG />} 
                preset="outlined"
                onClick={handleHideClick}
            />
            
            <CustomButton label="View" preset="outlined" />
          </>
        );
      case ButtonContainerPresets.EMPTY:
        return null;
      default:
        return null;
    }
  };

  return <ButtonContainer>{renderButtons()}{hideSquadPopupOpen && (
    <EditProjPopup
      onClose={() => setHideSquadPopupOpen(false)}
      title="Hide this squad"
      description="Please, let as not why you don’t want to see this squad. This will help us to give you better options"
      cancelButtonText="Cancel"
      confirmButtonText="Hide"
      showTextarea={true}
      icon={
        <Image
          key="hideImage"
          src={hideImage}
          alt="Hide Icon"
          width="44"
          height="44"
        />
      }
     
    />
  )}
  {showSharePopup && 
    <ShareProjectPopup onClose={() => setShowSharePopup(false)} 
    shareLink="join.untitledui.com/my-unique-project"
    />
  }
  {showHidePopup && <HideProjectPopup onClose={() => setShowHidePopup(false)} />}
  

  </ButtonContainer>;
};
