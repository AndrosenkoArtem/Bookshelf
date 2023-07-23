import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 356px;
  height: 490px;
  overflow: scroll;
  margin-bottom: 86px;
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
  }
  &:not(:last-of-type) {
    margin-bottom: 32px;
  }
`;
