import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Popup = styled.div`
    width: 50%;
    height: 50%;
    background-color: white;
    display: flex;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 20px;
`;

interface PopupProps {
    children: React.ReactNode;
    onClose: () => void;
}

const PopupComponent: React.FC<PopupProps> = ({ children, onClose }) => {
    return (
        <Overlay>
            <Popup>
                {children}
                <CloseButton onClick={onClose}>×</CloseButton>
            </Popup>
        </Overlay>
    );
};

export default PopupComponent;
