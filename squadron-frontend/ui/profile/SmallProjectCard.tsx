import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  border-radius: 0.6875rem;  // 11px
  background-color: #fff;
  box-shadow: 0px 0.0625rem 0.1875rem rgba(16, 24, 40, 0.1), 0px 0.0625rem 0.125rem rgba(16, 24, 40, 0.06);
  width: 23.4375rem;  // 375px
  height: 19rem;
  overflow: hidden;
  flex-shrink: 0;
  text-align: left;
  font-size: 0.88rem;
  color: #fff;
  font-family: Inter;
`;

const SmallProjectCard = () => {
    return (
        <CardContainer>
            Content here...
        </CardContainer>
    );
}

export default SmallProjectCard;