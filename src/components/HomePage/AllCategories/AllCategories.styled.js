import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 356px;
  height: 490px;
  overflow: scroll;
  margin-bottom: 86px;
  @media (max-width: 425px) {
    font-size: 14px;
    width: 100%;
    height: 307px;
    margin-bottom: 40px;
    margin-top: 100px;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 0px;
    width: 309px;
    height: 540px;
    margin-right: auto;
  }
`;
export const Li = styled.li`
  cursor: pointer;
  color: ${props => props.theme.blackGrayColor};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.36px;
  &.active {
    color: ${props => props.theme.purpleYellowColor};
    font-size: 18px;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.36px;
    text-transform: uppercase;
    @media (max-width: 425px) {
      font-size: 16px;
    }
  }
  &:not(:last-of-type) {
    margin-bottom: 32px;
    @media (max-width: 425px) {
      margin-bottom: 24px;
    }
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;
