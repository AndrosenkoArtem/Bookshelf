import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Arrow } from 'images/arrowRight.svg';
import { ReactComponent as User } from 'images/user.svg';
import { ReactComponent as ArrowDown } from 'images/arrowDown.svg';
export const NavigationLink = styled(NavLink)`
  background-color: ${props => props.theme.purpleColor};
  display: inline-block;
  padding: 12.5px 12.5px;
  border-radius: 18px;
  border: 1.5px solid ${props => props.theme.titleColor};
  color: ${props => props.theme.textColor};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.56px;
  margin-left: 24px;
  width: 184px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 425px) {
    margin-top: 40px;
    margin-left: 0px;
  }
`;
export const ArrowRight = styled(Arrow)`
  vertical-align: middle;
`;
export const LogOut = styled.button`
  cursor: pointer;
  position: absolute;
  z-index: -1;
  top: 100%;
  left: 0px;
  width: 100%;
  padding: 14px;
  border-radius: 18px;
  transform: translateY(-100%);
  opacity: 0;
  border: 1.5px solid ${props => props.theme.titleColor};
  color: ${props => props.theme.titleColor};
  background: ${props => props.theme.blackColor};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.56px;
  display: flex;
  justify-content: space-between;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (max-width: 560px) {
    top: auto;
    z-index: 1;
    transform: translateY(0);
    width: 118px;
    opacity: 1;
    bottom: 20px;
    left: 20px;
  }
`;
export const ArrowDownIcon = styled(ArrowDown)`
  pointer-events: none;
  margin-left: 9px;
  transition: 0.1s;
  @media (max-width: 560px) {
    display: none;
  }
`;
export const Auth = styled.div`
  position: relative;
  background-color: ${props => props.theme.purpleColor};
  padding: 4px 12px;
  display: inline-flex;
  align-items: center;
  border-radius: 36px;
  color: ${props => props.theme.backgroundHeader};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.56px;
  margin-left: 24px;
  cursor: pointer;
  @media (max-width: 560px) {
    position: static;
    margin-left: 0px;
    background-color: #0000;
    padding: 0px;
  }
  @media (min-width: 376px) {
    &:hover button {
      transform: translateY(0);
      opacity: 1;
    }
    &:hover ${ArrowDownIcon} {
      transform: rotate(-180deg);
    }
  }
`;
export const UserIcon = styled(User)`
  pointer-events: none;
  margin-right: 9px;
`;
export const UserName = styled.span`
  color: ${props => props.theme.textColor};
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.44px;
`;
