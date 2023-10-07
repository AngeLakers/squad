'use client'
import styled from "styled-components";


import Image from 'next/image';
import React from "react";
import {useRouter} from "next/navigation";




const NotificationBoxWrapper = styled.div`

  width: 24.5rem;
  margin: 0 !important;
  border-radius: 0.75rem;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.1), 0 1px 2px rgba(16, 24, 40, 0.06);
  border: 1px solid #e5e7eb;
  box-sizing: border-box;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: 0.88rem;
  color: #111927;


`;

const Notification = styled.div`

  padding: 0.75rem 1rem;
  border-radius: 0.25rem;

  justify-content: space-between;

  width: 100%;
  position: relative;
  border-bottom: 1px solid #e5e7eb;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  font-size: 0.88rem;


`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;


const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const MessageText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.31rem;
  text-align: left;
  font-size: 0.88rem;
  position: relative;
  line-height: 1.25rem;
  font-family: Inter, sans-serif;   
  
  justify-content: flex-start;
 


`;

const SingleMessage = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 600;
  color: #111927;
  position: relative;
  font-size: 0.88rem;
  line-height: 1.25rem;
  text-align: left;
  margin: auto 0;
`;

const CombinedMessage = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0b0f00;
  ${SingleMessage} & {
    margin: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  

  overflow: hidden;
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
  margin-left: auto;
`;

const SeeAllButton = styled.button`
    width: 100%;
  position: relative;
  border-bottom: 1px solid #e5e7eb;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  text-align: left;
  font-size: 0.88rem;
  color: #4d5761;
  
    
    `;

export interface NotificationProps {
    iconPath: string;
    linkUrl: string;
    messageInfo: {
        message: string;
        websiteName: string;
        organizationName: string;
    };
    onClose?: () => void;
}

export interface NotificationBoxProps {
    notifications: NotificationProps[];
}

//
const NotificationMessage: React.FC<NotificationProps & { onClose: () => void }> = ({ iconPath, messageInfo, onClose, linkUrl}) => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(linkUrl);
    };



    return (
        <Notification onClick={handleNavigation}>
            <ContentWrapper>
                <Icon>
                    <Image src={iconPath}  alt="Notification Icon" width={48} height={48}/>
                </Icon>
                <MessageText>
                    {messageInfo.websiteName || messageInfo.organizationName ? (
                        <>
                            <SingleMessage>{messageInfo.message}</SingleMessage>
                            <CombinedMessage>
                                {messageInfo.websiteName} - {messageInfo.organizationName}
                            </CombinedMessage>
                        </>
                    ) : (
                        <SingleMessage>{messageInfo.message}</SingleMessage>
                    )}
                </MessageText>
            </ContentWrapper>
            <CloseButton onClick={(e) => {
                e.stopPropagation();
                onClose();
            }}>
                <Image src="/icon/x-close-16px.svg" alt="Close Icon" width={16} height={16}/>
            </CloseButton>
        </Notification>
    );

}

const NotificationBox: React.FC<NotificationBoxProps> = ({ notifications }) => {
    const [currentNotifications, setCurrentNotifications] = React.useState(notifications);

    const handleCloseNotification = (index: number) => {
        const newNotifications = [...currentNotifications];
        newNotifications.splice(index, 1);
        setCurrentNotifications(newNotifications);
    };
    return (
        <NotificationBoxWrapper>
            {currentNotifications.map((notification, index) => (
                <NotificationMessage
                    key={index}
                    iconPath={notification.iconPath}
                    messageInfo={notification.messageInfo}
                    onClose={() => handleCloseNotification(index)}
                    linkUrl={notification.linkUrl || ""}
                />
            ))}

            <SeeAllButton>
                <span>See all notifications!</span>
            </SeeAllButton>
        </NotificationBoxWrapper>
    );
};

export default NotificationBox;
