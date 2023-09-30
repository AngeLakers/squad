import styled from "styled-components";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

import Image from 'next/image';



const NotificationBoxWrapper = styled.div`

  width: 24.5rem;
  margin: 0 !important;
  border-radius: 0.75rem;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
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
  justify-content: flex-start;
  gap: 0.31rem;
  text-align: left;
  font-size: 0.88rem;
  position: relative;
  line-height: 1.25rem;
  font-family: Inter, sans-serif;  
  

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
`;

const CombinedMessage = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0b0f00;
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
export interface NotificationProps {
    iconPath: string;

    messageInfo: {
        message: string;
        websiteName: string;
        organizationName: string;
    };
}

export interface NotificationBoxProps {
    notifications: NotificationProps[];
}


const NotificationMessage: React.FC<NotificationProps> = ({ iconPath, messageInfo }) => {
    return (
        <Notification>
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
            <CloseButton>
                <Image src="/icon/x-close-16px.svg" alt="Close Icon" width={16} height={16}/>
            </CloseButton>
        </Notification>
    );
}

const NotificationBox: React.FC<NotificationBoxProps> = ({ notifications }) => {
    return (
        <NotificationBoxWrapper>
            {notifications.map((notification, index) => (
                <NotificationMessage
                    key={index}
                    iconPath={notification.iconPath}
                    messageInfo={notification.messageInfo}
                />
            ))}
        </NotificationBoxWrapper>
    );
};

export default NotificationBox;
