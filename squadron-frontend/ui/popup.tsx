/**
 * The Popup component can be customized using the following props:
 * width, top, left: Defaults to '50%'.
 * Height Calculation:
 * The final height of the Popup is determined using the following logic:
 * If the content's height is less than the max-height (which defaults to 50% of the window's height or can be set using `maxHeightPercent`) 
 * then the popup's height will be set to this max-height value. 
 * If the content exceeds this max-height, the popup will adjust its height to fit its content
 */

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
    width?: string;
    top?: string;
    left?: string;
}

const Popup = styled.div<PopupPropsStyled>`
    position: fixed;
    top: ${props => props.top || '25%'};
    left: ${props => props.left || '25%'};
    width: ${props => props.width || '50%'};
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
    width?: string;
    top?: string;
    left?: string;
    maxHeightPercent?: number;
}

const PopupComponent: React.FC<PopupProps> = ({ children, onClose, width, top, left, maxHeightPercent = 0.5}) => {
    const popupRef = useRef<HTMLDivElement | null>(null);
    const [finalHeight, setFinalHeight] = useState('auto');

    useEffect(() => {
        if (popupRef.current) {
            const autoHeight = popupRef.current.clientHeight;
            const calculatedMaxHeight = window.innerHeight * maxHeightPercent;
            if (autoHeight < calculatedMaxHeight) {
                setFinalHeight(`${maxHeightPercent * 100}%`);
            } else {
                setFinalHeight('auto');
            }
        }
    }, [maxHeightPercent]);

    return (
        <Overlay>
            <Popup ref={popupRef} finalHeight={finalHeight} width={width} top={top} left={left}>
                {children}
                <CloseButton onClick={onClose}>×</CloseButton>
            </Popup>
        </Overlay>
    );
};

export default PopupComponent;
