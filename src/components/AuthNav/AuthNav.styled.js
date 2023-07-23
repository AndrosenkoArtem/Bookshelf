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
  border: 1.5px solid ${props => props.theme.blackColor};
  color: ${props => props.theme.textColor};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.56px;
  margin-left: 24px;
  width: 184px;
  display: flex;
  justify-content: space-between;
`;
export const ArrowRight = styled(Arrow)`
  vertical-align: middle;
`;
export const LogOut = styled.button`
  cursor: pointer;
  position: absolute;
  top: 100%;
  left: 0px;
  width: 100%;
  padding: 14px;
  border-radius: 18px;
  border: 1.5px solid ${props => props.theme.titleColor};
  color: ${props => props.theme.titleColor};
  background: ${props => props.theme.blackColor};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.56px;
  display: flex;
  justify-content: space-between;
`;
export const ArrowDownIcon = styled(ArrowDown)`
  transform: rotate(${props => props.rotate.isOpen && '180deg'});
  pointer-events: none;
  margin-left: 9px;
  transition: 0.1s;
`;
export const Auth = styled.div`
  position: relative;
  background-color: ${props => props.theme.purpleColor};
  padding: 4px 12px;
  display: inline-flex;
  align-items: center;
  border-radius: 36px;
  border: 1.5px solid ${props => props.theme.blackColor};
  color: ${props => props.theme.backgroundHeader};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.56px;
  margin-left: 24px;
  cursor: pointer;
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
