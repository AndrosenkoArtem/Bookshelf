import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Marcet } from 'images/marcet.svg';
export const LinkIcon = styled(Link)``;
export const Container = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  margin: auto;
  margin-bottom: 40px;
  border-radius: 0px 0px 8px 8px;
  border: 1.5px solid #111;
  background-color: ${props => props.theme.blackColor};
`;
export const Header = styled.header``;
export const AutchNavContainer = styled.div`
  margin-left: auto;
  justify-content: end;
  display: flex;
  align-items: center;
`;
export const MarcetIcon = styled(Marcet)`
  vertical-align: top;
  margin-left: 7px;
  * {
    fill: ${props => props.theme.titleColor};
  }
`;
export const NavigationLink = styled(NavLink)`
  color: ${props => props.theme.titleColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.56px;
  &:not(:last-of-type) {
    margin-right: 24px;
  }
  &.active {
    padding: 8px 16px;
    color: ${props => props.theme.blackTextColor};
    background-color: ${props => props.theme.yellowColor};
    border-radius: 36px;
  }
  &.active ${MarcetIcon} {
    * {
      fill: ${props => props.theme.blackTextColor};
    }
  }
`;
export const Nav = styled.nav`
  margin-left: 76px;
  text-align: start;
`;
