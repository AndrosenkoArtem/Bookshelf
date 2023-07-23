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
} from './AppBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectTheme } from 'redux/theme/selectors';
export const AppBar = () => {
  const theme = useSelector(selectTheme);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Container>
        <LinkIcon to="/">{!theme ? <Logo /> : <LogoDark />}</LinkIcon>
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
      </Container>
    </Header>
  );
};
