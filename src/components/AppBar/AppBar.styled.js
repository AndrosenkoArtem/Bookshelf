import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Marcet } from 'images/marcet.svg';
import { ReactComponent as Menu } from 'images/menu.svg';
import { ReactComponent as Close } from 'images/closeMobile.svg';
import background from 'images/booksMobile.png';
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
  @media (max-width: 425px) {
    position: fixed;
    top: 0;
    padding: 12px 20px;
    margin: 0px;
    border: none;
    border-bottom: 1.5px solid #111;
    border-radius: 0%;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    padding: 12px 32px;
  }
`;
export const Header = styled.header``;
export const AutchNavContainer = styled.div`
  margin-left: auto;
  justify-content: end;
  display: flex;
  align-items: center;
  @media (max-width: 560px) {
    margin-left: 0px;
    margin-bottom: 134px;
    margin-right: auto;
    & label {
      display: none;
    }
  }
`;
export const MarcetIcon = styled(Marcet)`
  vertical-align: top;
  margin-left: 7px;
  * {
    fill: ${props => props.theme.titleColor};
    @media (max-width: 560px) {
      fill: ${props => props.theme.textColor};
    }
  }
`;
export const NavigationLink = styled(NavLink)`
  color: ${props => props.theme.titleColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.56px;
  @media (max-width: 560px) {
    color: ${props => props.theme.textColor};
  }
  &:not(:last-of-type) {
    margin-right: 24px;
    @media (max-width: 560px) {
      margin-bottom: 17px;
      color: ${props => props.theme.textColor};
    }
    @media (min-width: 560px) and (max-width: 593px) {
      margin-right: 5px;
    }
  }
  &.active {
    padding: 8px 16px;
    color: ${props => props.theme.blackTextColor};
    background-color: ${props => props.theme.yellowColor};
    border-radius: 36px;
    @media (max-width: 560px) {
      margin-right: auto;
    }
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
  @media (max-width: 560px) {
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 560px) and (max-width: 768px) {
    margin-left: auto;
  }
`;
export const CloseIcon = styled(Close)`
  display: none;
  margin-left: 14px;
  cursor: pointer;
  * {
    stroke: ${props => props.color};
  }
  &:hover * {
    stroke: ${props => props.theme.purpleColor};
  }
  @media (min-width: 560px) {
    display: none;
  }
`;
export const MenuIcon = styled(Menu)`
  margin-left: 14px;
  cursor: pointer;
  * {
    stroke: ${props => props.color};
  }
  &:hover * {
    stroke: ${props => props.theme.purpleColor};
  }
  @media (min-width: 560px) {
    display: none;
  }
`;
export const NavContainer = styled.div`
  align-items: center;
  @media (min-width: 560px) {
    display: contents;
  }
  @media (max-width: 560px) {
    position: absolute;
    display: flex;
    padding: 20px;
    flex-direction: column-reverse;
    justify-content: start;
    top: 103%;
    left: 0;
    width: 100%;
    height: 93vh;
    background-image: url(${background}),
      radial-gradient(
        189.32% 190.93% at 59.76% -23.42%,
        #4f2ee8 18.03%,
        #fff 100%
      );
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    transform: translateY(-150%);
    opacity: 0.5;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &.responsive-nav {
      transform: translateY(0);
      opacity: 1;
    }
    &.responsive-nav ~ ${MenuIcon} {
      display: none;
    }
    &.responsive-nav ~ ${CloseIcon} {
      display: block;
    }
  }
`;
export const SwitchContainer = styled.div`
  margin-left: auto;
  @media (min-width: 560px) {
    display: none;
  }
`;
