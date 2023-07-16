import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const P = styled.p`
  cursor: pointer;
  color: ${props => props.theme.blackColor};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.36px;
  &.active {
    color: ${props => props.theme.purpleColor};
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
