import styled from 'styled-components';

const StyledCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 20px;
`;

interface CloseButtonProps {
    onClick: () => void;
    children?: React.ReactNode;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick, children }) => {
    return (
        <StyledCloseButton onClick={onClick}>
            <img src={`/icon/x-close.svg`} alt="project" />
           
        </StyledCloseButton>
    );
};

export default CloseButton;
