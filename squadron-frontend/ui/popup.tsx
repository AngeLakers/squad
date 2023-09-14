import React, { useState, useEffect, useRef } from 'react';
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

interface PopupPropsStyled {
    finalHeight?: string;
  }

const Popup = styled.div<PopupPropsStyled>`
    position: fixed;
    top: 25%;
    left: 25%;
    width: 50%;
    height: ${props => props.finalHeight || 'auto'};
    background-color: white;
    display: flex;
    overflow-y: auto;
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
    const popupRef = useRef<HTMLDivElement | null>(null);
    const [finalHeight, setFinalHeight] = useState('auto');

    useEffect(() => {
        if (popupRef.current) {
            const autoHeight = popupRef.current.clientHeight;
            const fiftyPercentHeight = window.innerHeight * 0.5;
            if (autoHeight < fiftyPercentHeight) {
                setFinalHeight('50%');
            } else {
                setFinalHeight('auto');
            }
        }
    }, []);

    return (
        <Overlay>
            <Popup ref={popupRef} finalHeight={finalHeight}>
                {children}
                <CloseButton onClick={onClose}>×</CloseButton>
            </Popup>
        </Overlay>
    );
};

export default PopupComponent;
