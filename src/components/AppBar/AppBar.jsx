import { Switch } from 'components/Switch/Switch';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { ReactComponent as Logo } from 'images/logoWhite.svg';
import { ReactComponent as LogoDark } from 'images/logoDark.svg';

import {
  Container,
  Header,
  AutchNavContainer,
  NavigationLink,
  Nav,
  LinkIcon,
  MarcetIcon,
  MenuIcon,
  NavContainer,
  CloseIcon,
  SwitchContainer,
} from './AppBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectTheme } from 'redux/theme/selectors';
import { useRef } from 'react';
export const AppBar = () => {
  const theme = useSelector(selectTheme);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navRef = useRef(null);
  const ShowNavbar = () => {
    navRef.current.classList.toggle('responsive-nav');
    document.body.style.overflow === 'hidden'
      ? (document.body.style.overflow = '')
      : (document.body.style.overflow = 'hidden');
  };
  return (
    <Header>
      <Container>
        <LinkIcon to="/">{!theme ? <Logo /> : <LogoDark />}</LinkIcon>
        <NavContainer ref={navRef}>
          {isLoggedIn && (
            <Nav>
              <NavigationLink to="/">HOME</NavigationLink>
              <NavigationLink to="/shopping-list">
                SHOPPING LIST{<MarcetIcon />}
              </NavigationLink>
            </Nav>
          )}
          <AutchNavContainer>
            <Switch />
            <AuthNav />
          </AutchNavContainer>
        </NavContainer>
        <SwitchContainer>
          <Switch />
        </SwitchContainer>
        <MenuIcon color={!theme ? '#111' : '#fff'} onClick={ShowNavbar} />
        <CloseIcon color={!theme ? '#111' : '#fff'} onClick={ShowNavbar} />
      </Container>
    </Header>
  );
};
