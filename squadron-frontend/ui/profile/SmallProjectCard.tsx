"use client"
import styled from "styled-components";
import React, {useState} from "react";
import AvatarGroup from "@mui/material/AvatarGroup/AvatarGroup";
import Avatar from "@mui/material/Avatar/Avatar";
import {SquadPulseSubmittedPopup} from "@/ui/my-squad-popup";

const CardContainer = styled.div`
  position: relative;
  border-radius: 0.6875rem; // 11px
  background-color: #fff;
  box-shadow: 0px 0.0625rem 0.1875rem rgba(16, 24, 40, 0.1), 0px 0.0625rem 0.125rem rgba(16, 24, 40, 0.06);
  width: ${(props) => props.width || '23.5rem'};
  overflow: hidden;
  flex-shrink: 0;
  text-align: left;
  font-size: 0.88rem;
  color: #fff;
  font-family: Inter;
`;


const Header = styled.header`
  position: relative;
  background-color: #0b0f00;
  width: 100%;

  overflow: hidden;
  text-align: left;
  font-size: 1.25rem;
  color: #fff;
  background-image: url("/images/Ellipse.svg");
  background-repeat: no-repeat;
  background-position: right top;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;;`;

const Title = styled.div`
  width: 100%;
  position: relative;
  font-size: 1.25rem;
  line-height: 1.88rem;
  font-weight: 600;
  color: #fff;
  text-align: left;
  display: inline-block;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const Year = styled.div`
  width: 100%;
  position: relative;
  font-size: 0.88rem;
  line-height: 1.25rem;
  font-family: Inter;
  color: #fff;
  text-align: left;
  display: inline-block;
  opacity: 0.8;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

type SmallProjectCardProps = {
    title: string;
    year: string;

    description: string;
    avatars: { alt: string; src: string }[];
    width?: string;

};

const Body = styled.div`
  position: relative;
  overflow: hidden;
  text-align: left;
  font-size: 1.25rem;
  padding-bottom: 6rem;
`;

const Description = styled.div`
  width: 100%;
  position: relative;
  font-size: 0.88rem;
  line-height: 1.25rem;
  font-family: Inter;
  color: #4d5761;
  text-align: left;
  box-sizing: border-box;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  padding-right: 1rem;
  margin: 1.5rem 2rem 1.5rem 1.5rem;

`;

const Squad = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.88rem;
  text-align: left;
  font-size: 0.88rem;
  color: #363636;
  font-family: Inter;

  right: 1rem;

  bottom: 1rem;

  width: auto;

`;

const SquadName = styled.p`
  width: 100%;
  font-size: 0.88rem;
  line-height: 1.25rem;
  font-weight: 600;
  font-family: Inter;
  color: #363636;
  text-align: left;
  padding-left: 0.5rem;
`;

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
`;

const LargeCard = styled.div`
    background-color: white;
    padding: 20px;
    max-width: 80%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SmallProjectCard: React.FC<SmallProjectCardProps> = ({
                                                               title
                                                               , year, description,
                                                               avatars,width
                                                           }) => {

    const [showModal, setShowModal] = useState(false);

    const handleDescriptionClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <CardContainer width={width}>

            <Header>
                <Title>{title}</Title>
                <Year>{year}</Year>

            </Header>
            <Body>
                <Description  onClick={handleDescriptionClick}> {description}   </Description>

                    <Squad>
                        <SquadName>Squad</SquadName>
                        <AvatarGroup max={5}>
                            {avatars.map(avatar => (
                                <Avatar key={avatar.src} alt={avatar.alt} src={avatar.src} />
                            ))}
                        </AvatarGroup>
                    </Squad>

            </Body>
            {showModal && (
                <SquadPulseSubmittedPopup
                    onClose={() => setShowModal(false)}
                />
            )}


        </CardContainer>
    );
}


export default SmallProjectCard;